import { NextResponse } from "next/server";

import { loginSchema } from "@/src/schemas/auth.schema";
import { db, connectDatabase } from "@/src/prisma/db";
import {
    verifyPassword,
    signToken,
    type AuthPayload,
    clearAuthCookie,
} from "@/src/lib/auth";
import { ApiError } from "@/src/lib/errors";

const AUTH_COOKIE = "auth_token";

export async function POST(request: Request) {
    try {
        await connectDatabase();

        const body = await request.json();

        const result = loginSchema.safeParse(body);

        if (!result.success) {
            throw new ApiError(
                "INVALID_CREDENTIALS",
                "Invalid Login Body",
                400
            )
        }

        const { email, password } = result.data;

        const user = await db.orm.public.User
            .where({ email })
            .first();

        if (!user) {
            const response = NextResponse.json(
                {
                    error: "INVALID_CREDENTIALS",
                    message: "Invalid email or password",
                },
                { status: 401 },
            );

            clearAuthCookie(response);

            return response;
        }

        const passwordValid = await verifyPassword(
            password,
            user.password,
        );

        if (!passwordValid) {
            const response = NextResponse.json(
                {
                    error: "INVALID_CREDENTIALS",
                    message: "Invalid email or password",
                },
                { status: 401 },
            );

            clearAuthCookie(response);

            return response;
        }

        const payload: AuthPayload = {
            userId: user.id,
            role: user.role,
            email: user.email,
        };

        const token = await signToken(payload);

        const response = NextResponse.json(
            {
                message: "Login successful",
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
            },
            { status: 200 },
        );

        response.cookies.set({
            name: AUTH_COOKIE,
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        return response;
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

        // Keep server logs active for production debugging
        console.error("Login API Error:", error);

        return NextResponse.json(
            {
                error: "INTERNAL_SERVER_ERROR",
                message: "Something went wrong",
            },
            { status: 500 },
        );
    }
}