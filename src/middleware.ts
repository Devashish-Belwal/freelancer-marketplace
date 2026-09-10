import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = ["/dashboard", "/create-project", "/contracts", "/proposals/mine"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isProtected = protectedPaths.some(p => pathname === p || pathname.startsWith(p + "/"));
  if (isProtected) {
    const cookie = req.cookies.get("auth_token");
    if (!cookie) return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*", 
    "/create-project", 
    "/contracts/:path*", 
    "/proposals/mine/:path*"
  ] 
};
