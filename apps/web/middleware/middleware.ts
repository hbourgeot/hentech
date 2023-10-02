import { client } from "@/lib/axios";
import { Employee } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

declare module "next/server" {
  interface NextRequest {
    user?: Employee,
    isAuthenticated?: boolean
  }
}

const isNonProtected = (pathname: string) => {
  return pathname.startsWith("/internal");
};

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get("auth");

  let userData = null;
  let isAuthenticated = false;

  if (token) {
    try {
      const { data, status } = await client.get("/api/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (status < 400) {
        userData = data;
        isAuthenticated = true;
      } else {
        NextResponse.redirect("/login");
      }
    } catch (e) {
      NextResponse.redirect("/login");
    }
  }

  req.user = userData;
  req.isAuthenticated = isAuthenticated;

  if (!isNonProtected(pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/internal/:path*"],
};
