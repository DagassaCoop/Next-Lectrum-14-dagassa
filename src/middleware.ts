import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import { cookies } from "next/headers";

const PUBLIC_PATHS = ["/auth/login", "/auth/signUp", "/auth/confirm"];

export async function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const currentPath = request.nextUrl.pathname;

  const accessToken = cookieStore.get("sb-access-token");
  const isPublicPath = PUBLIC_PATHS.includes(currentPath);

  const redirectLogin = NextResponse.redirect(
    new URL("/auth/login", request.url)
  );

  if (!accessToken) {
    if (isPublicPath === false) return redirectLogin;
  }

  // update user's auth session
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
