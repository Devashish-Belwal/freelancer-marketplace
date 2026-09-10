import { NextResponse } from "next/server";


import { db, connectDatabase } from "@/src/prisma/db";
import { hashPassword } from "@/src/lib/auth";
import { ApiError } from "@/src/lib/errors";
import { signupSchema } from "@/src/schemas/auth.schema";

export async function POST(request: Request) {
    try {
        await connectDatabase();

        const body = await request.json();

        const result = signupSchema.safeParse(body);

        if (!result.success) {
            throw new ApiError(
                "INVALID_REQUEST",
                "Invalid signup data",
                400,
            );
        }

        const { name, email, password, role } = result.data;

        const existingUser = await db.orm.public.User
            .where({ email })
            .first();

        if (existingUser) {
            throw new ApiError(
                "EMAIL_ALREADY_EXISTS",
                "A user with this email already exists",
                409,
            );
        }

        const hashedPassword = await hashPassword(password);

        const user = await db.orm.public.User.create({
            name,
            email,
            password: hashedPassword,
            role,
        }).catch((createError: any) => {
            if (createError && typeof createError === "object" && ((createError.code === "P2002" || String(createError.message || "").toLowerCase().includes("unique")))) {
                throw new ApiError("EMAIL_ALREADY_EXISTS", "A user with this email already exists", 409);
            }
            throw createError;
        });

        return NextResponse.json(
            {
                message: "User created successfully",
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
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