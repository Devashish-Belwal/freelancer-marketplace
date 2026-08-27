import { NextResponse } from "next/server";

import { connectDatabase, db } from "@/src/prisma/db";
import { getCurrentUser } from "@/src/lib/getCurrentUser";
import { ApiError } from "@/src/lib/errors";

export async function GET() {
  try {
    await connectDatabase();

    const user = await getCurrentUser();

    if (user.role !== "freelancer") {
      throw new ApiError(
        "FORBIDDEN",
        "Only freelancers can view their proposals",
        403,
      );
    }

    const proposals = await db.orm.public.Proposal
      .where({
        freelancerId: user.userId,
      })
      .include("project")
      .all();

    const response = proposals.map((proposal) => ({
      id: proposal.id,
      projectId: proposal.projectId,
      projectTitle: proposal.project.title,
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