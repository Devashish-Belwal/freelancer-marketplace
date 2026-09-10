import { NextResponse } from "next/server";
import { connectDatabase, db } from "@/src/prisma/db";
import { getCurrentUser } from "@/src/lib/getCurrentUser";
import { ApiError } from "@/src/lib/errors";

export async function GET() {
  try {
    await connectDatabase();
    const user = await getCurrentUser();

    if (user.role !== "client") {
      throw new ApiError(
        "FORBIDDEN",
        "Only clients can view their projects",
        403,
      );
    }

    const projects = await db.orm.public.Project
      .where({ clientId: user.userId })
      .include("client")
      .all();

    return NextResponse.json({
      projects: projects.map(p => ({
        id: p.id,
        title: p.title,
        description: p.description,
        category: p.category,
        budgetMin: p.budgetMin,
        budgetMax: p.budgetMax,
        deadline: p.deadline,
        status: p.status,
        proposalCount: 0,
        clientName: p.client?.name,
      })),
    });
  } catch (error) {
    console.error("[/api/projects/mine] Error:", error);
    if (error instanceof ApiError) return NextResponse.json({ error: error.code, message: error.message }, { status: error.status });
    return NextResponse.json({ error: "INTERNAL_SERVER_ERROR", message: "Something went wrong" }, { status: 500 });
  }
}
