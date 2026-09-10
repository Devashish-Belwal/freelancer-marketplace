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
  _request: Request,
  { params }: RouteContext,
) {
  try {
    await connectDatabase();
    const { projectId } = await params;

    const project = await db.orm.public.Project
      .where({ id: projectId })
      .include("client")
      .first();

    if (!project) {
      throw new ApiError("PROJECT_NOT_FOUND", "Project not found", 404);
    }

    // Public browsing: guests and freelancers can view open projects
    // Clients can only view their own projects
    let isOwner = false;
    let isFreelancer = false;
    try {
      const user = await getCurrentUser();
      isOwner = project.clientId === user.userId;
      isFreelancer = user.role === "freelancer";
    } catch {
      // No auth cookie - treat as guest
    }

    if (isOwner && isFreelancer) throw new ApiError("FORBIDDEN", "Not your project", 403);
    if (isFreelancer && project.status !== "open") throw new ApiError("FORBIDDEN", "Project not open", 403);
    if (!isOwner && !isFreelancer && project.status !== "open") throw new ApiError("FORBIDDEN", "Project not open", 403);

    const proposalCount = await db.orm.public.Proposal.where({ projectId }).count();

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
        proposalCount: proposalCount,
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