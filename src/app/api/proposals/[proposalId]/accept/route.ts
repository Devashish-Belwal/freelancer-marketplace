import { NextResponse } from "next/server";

import { connectDatabase, db } from "@/src/prisma/db";
import { getCurrentUser } from "@/src/lib/getCurrentUser";
import { ApiError } from "@/src/lib/errors";

interface RouteContext {
    params: Promise<{
        proposalId: string;
    }>;
}

export async function PUT(
    request: Request,
    { params }: RouteContext,
) {
    try {
        await connectDatabase();

        const user = await getCurrentUser();

        if (user.role !== "client") {
            throw new ApiError(
                "FORBIDDEN",
                "Only clients can accept proposals",
                403,
            );
        }

        const { proposalId } = await params;

        const proposal = await db.orm.public.Proposal
            .where({ id: proposalId })
            .include("project")
            .first();

        if (!proposal) {
            throw new ApiError(
                "PROPOSAL_NOT_FOUND",
                "Proposal not found",
                404,
            );
        }

        if (proposal.project.clientId !== user.userId) {
            throw new ApiError(
                "FORBIDDEN",
                "You do not have access to this proposal",
                403,
            );
        }

        if (proposal.status !== "pending") {
            throw new ApiError(
                "PROPOSAL_ALREADY_PROCESSED",
                "This proposal has already been processed",
                400,
            );
        }

        const projectId = proposal.projectId;

        const result = await db.transaction(async (tx) => {
            // Re-check proposal is still pending inside transaction for concurrency
            const currentProposal = await tx.orm.public.Proposal.where({ id: proposalId }).first();
            if (!currentProposal || currentProposal.status !== "pending") {
                throw new ApiError("PROPOSAL_ALREADY_PROCESSED", "Proposal no longer pending", 400);
            }

            const acceptedProposal =
                await tx.orm.public.Proposal
                    .where({ id: proposalId })
                    .update({
                        status: "accepted",
                    });

            if (!acceptedProposal) {
                throw new ApiError(
                    "PROPOSAL_NOT_FOUND",
                    "Proposal not found",
                    404,
                );
            }

            await tx.orm.public.Proposal
                .where((proposal) =>
                    proposal.projectId.eq(projectId)
                )
                .where((proposal) =>
                    proposal.id.neq(proposalId)
                )
                .updateAll({
                    status: "rejected",
                });

            const updatedProject =
                await tx.orm.public.Project
                    .where({ id: projectId })
                    .update({
                        status: "in_progress",
                    });

            if (!updatedProject) {
                throw new ApiError(
                    "PROJECT_NOT_FOUND",
                    "Project not found",
                    404,
                );
            }

            const contract =
                await tx.orm.public.Contract.create({
                    projectId,
                    clientId: user.userId,
                    freelancerId: proposal.freelancerId,
                    amount: proposal.proposedPrice,
                    status: "active",
                });

            return {
                acceptedProposal,
                updatedProject,
                contract,
            };
        });

        return NextResponse.json({
            message: "Proposal accepted successfully",
            proposal: result.acceptedProposal,
            project: result.updatedProject,
            contract: result.contract,
        });
    } catch (error) {
        if (error instanceof ApiError) {
            return NextResponse.json(
                {
                    error: error.code,
                    message: error.message,
                },
                { status: error.status },
            );
        }

        console.error(error);

        return NextResponse.json(
            {
                error: "INTERNAL_SERVER_ERROR",
                message: "Something went wrong",
            },
            { status: 500 },
        );
    }
}