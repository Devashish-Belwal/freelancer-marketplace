import { cookies } from "next/headers";

import { verifyToken, type AuthPayload } from "@/src/lib/auth";
import { ApiError } from "@/src/lib/errors";

const AUTH_COOKIE = "auth_token";

export async function getCurrentUser(): Promise<AuthPayload> {
  const cookieStore = await cookies();

  const token = cookieStore.get(AUTH_COOKIE)?.value;

  if (!token) {
    throw new ApiError(
      "UNAUTHORIZED",
      "Authentication required",
      401,
    );
  }

  try {
    return await verifyToken(token);
  } catch {
    throw new ApiError(
      "UNAUTHORIZED",
      "Invalid or expired authentication token",
      401,
    );
  }
}