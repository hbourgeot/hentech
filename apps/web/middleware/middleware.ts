import { NextRequest, NextResponse } from "next/server";

const isNonProtected = (pathname: string) => {
  return pathname.startsWith('/internal');
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!isNonProtected(pathname)) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/internal/:path*']
}