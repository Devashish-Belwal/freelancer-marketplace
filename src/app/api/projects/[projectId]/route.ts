import { NextResponse } from "next/server";

import { connectDatabase, db } from "@/src/prisma/db";
import { getCurrentUser } from "@/src/lib/getCurrentUser";
import { ApiError } from "@/src/lib/errors";

interface RouteContext {
  params: Promise<{
    projectId: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: RouteContext,
) {
  try {
    await connectDatabase();

    await getCurrentUser();

    const { projectId } = await params;

    const project = await db.orm.public.Project
      .where({ id: projectId })
      .include("client")
      .include("proposals")
      .first();

    if (!project) {
      throw new ApiError(
        "PROJECT_NOT_FOUND",
        "Project not found",
        404,
      );
    }

    return NextResponse.json({
      project: {
        id: project.id,
        title: project.title,
        description: project.description,
        category: project.category,
        budgetMin: project.budgetMin,
        budgetMax: project.budgetMax,
        deadline: project.deadline,
        status: project.status,
        clientName: project.client.name,
        proposalCount: project.proposals.length,
        createdAt: project.createdAt,
      },
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