import { NextResponse } from "next/server";

import { connectDatabase, db } from "@/src/prisma/db";
import { getCurrentUser } from "@/src/lib/getCurrentUser";
import { ApiError } from "@/src/lib/errors";
import { createProposalSchema } from "@/src/schemas/proposal.schema";

interface RouteContext {
  params: Promise<{
    projectId: string;
  }>;
}

export async function POST(
  request: Request,
  { params }: RouteContext,
) {
  try {
    await connectDatabase();

    const user = await getCurrentUser();

    if (user.role !== "freelancer") {
      throw new ApiError(
        "FORBIDDEN",
        "Only freelancers can submit proposals",
        403,
      );
    }

    const { projectId } = await params;

    const project = await db.orm.public.Project
      .where({ id: projectId })
      .first();

    if (!project) {
      throw new ApiError(
        "PROJECT_NOT_FOUND",
        "Project not found",
        404,
      );
    }

    if (project.status !== "open") {
      throw new ApiError(
        "PROJECT_NOT_OPEN",
        "This project is no longer accepting proposals",
        400,
      );
    }

    const body = await request.json();

    const result = createProposalSchema.safeParse(body);

    if (!result.success) {
      throw new ApiError(
        "INVALID_REQUEST",
        "Invalid proposal data",
        400,
      );
    }

    const {
      coverLetter,
      proposedPrice,
      estimatedDuration,
    } = result.data;

    const existingProposal = await db.orm.public.Proposal
      .where({
        projectId,
        freelancerId: user.userId,
      })
      .first();

    if (existingProposal) {
      throw new ApiError(
        "PROPOSAL_ALREADY_EXISTS",
        "You have already submitted a proposal for this project",
        409,
      );
    }

    const proposal = await db.orm.public.Proposal.create({
      projectId,
      freelancerId: user.userId,
      coverLetter,
      proposedPrice,
      estimatedDuration,
    });

    return NextResponse.json(
      {
        message: "Proposal submitted successfully",
        proposal,
      },
      { status: 201 },
    );
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

    if (error && typeof error === "object" && ((error as any).code === "P2002" || String((error as any).message || "").toLowerCase().includes("unique"))) {
      return NextResponse.json({ error: "PROPOSAL_ALREADY_EXISTS", message: "You have already submitted a proposal for this project" }, { status: 409 });
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

export async function GET(
  _request: Request,
  { params }: RouteContext,
) {
  try {
    await connectDatabase();

    const user = await getCurrentUser();

    if (user.role !== "client") {
      throw new ApiError(
        "FORBIDDEN",
        "Only clients can view project proposals",
        403,
      );
    }

    const { projectId } = await params;

    const project = await db.orm.public.Project
      .where({ id: projectId })
      .first();

    if (!project) {
      throw new ApiError(
        "PROJECT_NOT_FOUND",
        "Project not found",
        404,
      );
    }

    if (project.clientId !== user.userId) {
      throw new ApiError(
        "FORBIDDEN",
        "You do not have access to this project's proposals",
        403,
      );
    }

    const proposals = await db.orm.public.Proposal
      .where({ projectId })
      .include("freelancer")
      .all();

    const response = proposals.map((proposal) => ({
      proposalId: proposal.id,
      freelancerId: proposal.freelancerId,
      freelancerName: proposal.freelancer.name,
      coverLetter: proposal.coverLetter,
      proposedPrice: proposal.proposedPrice,
      estimatedDuration: proposal.estimatedDuration,
      status: proposal.status,
      createdAt: proposal.createdAt,
    }));

    return NextResponse.json({
      proposals: response,
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