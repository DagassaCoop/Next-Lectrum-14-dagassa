import { NextResponse } from "next/server";

const middleware = () => {
  const response = NextResponse.next();

  response.cookies.set("name", "Dmytro");

  return response;
};

export { middleware };

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - next.svg - starter image
     * - vercel.svg - starter image
     */
    '/((?!api|_next/static|_next/image|favicon.ico|next.svg|vercel.svg).*)',
  ],
}