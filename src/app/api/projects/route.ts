import { NextResponse } from "next/server";

import { connectDatabase, db } from "@/src/prisma/db";
import { getCurrentUser } from "@/src/lib/getCurrentUser";
import { ApiError } from "@/src/lib/errors";
import { createProjectSchema, projectFilterSchema } from "@/src/schemas/project.schema";
import { Temporal } from "temporal-polyfill";

export async function POST(request: Request) {
  try {
    await connectDatabase();

    const user = await getCurrentUser();

    if (user.role !== "client") {
      throw new ApiError(
        "FORBIDDEN",
        "Only clients can create projects",
        403,
      );
    }

    const body = await request.json();

    const result = createProjectSchema.safeParse(body);

    if (!result.success) {
      throw new ApiError(
        "INVALID_REQUEST",
        "Invalid project data",
        400,
      );
    }

    const {
      title,
      description,
      category,
      budgetMin,
      budgetMax,
    } = result.data;

    const deadline = Temporal.Instant.from(result.data.deadline);

    const project = await db.orm.public.Project.create({
      title,
      description,
      category,
      budgetMin,
      budgetMax,
      deadline,
      clientId: user.userId,
    });

    return NextResponse.json(
      {
        message: "Project created successfully",
        project,
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

export async function GET(request: Request) {
  try {
    await connectDatabase();

    const { searchParams } = new URL(request.url);

    const result = projectFilterSchema.safeParse({
      category: searchParams.get("category") || undefined,
      minBudget: searchParams.get("minBudget") ? parseInt(searchParams.get("minBudget")!, 10) : undefined,
      maxBudget: searchParams.get("maxBudget") ? parseInt(searchParams.get("maxBudget")!, 10) : undefined,
    });

    if (!result.success) {
      throw new ApiError(
        "INVALID_REQUEST",
        "Invalid project filters",
        400,
      );
    }

    const { category, minBudget, maxBudget } = result.data;

    let query = db.orm.public.Project.where({
      status: "open",
    });

    if (category) {
      query = query.where({
        category,
      });
    }

    if (minBudget !== undefined) {
      query = query.where((project) =>
        project.budgetMin.gte(minBudget),
      );
    }

    if (maxBudget !== undefined) {
      query = query.where((project) =>
        project.budgetMax.lte(maxBudget),
      );
    }

    const projects = await query
      .include("client")
      .all();

    const response = projects.map((project) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      category: project.category,
      budgetMin: project.budgetMin,
      budgetMax: project.budgetMax,
      deadline: project.deadline,
      status: project.status,
      clientName: project.client.name,
      proposalCount: 0,
    }));

    return NextResponse.json({
      projects: response,
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