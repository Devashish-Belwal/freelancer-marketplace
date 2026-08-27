import { NextResponse } from "next/server";

import { connectDatabase, db } from "@/src/prisma/db";
import { getCurrentUser } from "@/src/lib/getCurrentUser";
import { ApiError } from "@/src/lib/errors";
import { or } from "@prisma/orm-postgres/orm-client";

export async function GET() {
    try {
        await connectDatabase();

        const user = await getCurrentUser();

        const contracts = await db.orm.public.Contract
            .where((contract) =>
                or(
                    contract.clientId.eq(user.userId),
                    contract.freelancerId.eq(user.userId),
                ),
            )
            .include("project")
            .include("client")
            .include("freelancer")
            .all();

        const response = contracts.map((contract) => ({
            id: contract.id,
            projectId: contract.projectId,
            projectTitle: contract.project.title,
            clientId: contract.clientId,
            clientName: contract.client.name,
            freelancerId: contract.freelancerId,
            freelancerName: contract.freelancer.name,
            amount: contract.amount,
            status: contract.status,
            createdAt: contract.createdAt,
        }));

        return NextResponse.json({
            contracts: response,
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