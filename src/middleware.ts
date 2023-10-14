import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { getEnv } from "./lib/env";

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};

export async function middleware({ ip, nextUrl }: NextRequest) {
  const response = NextResponse.next();

  if (process.env.NODE_ENV !== "production") return response;

  const ADMIN_ID = getEnv("ADMIN_ID");
  const searchParams = nextUrl.searchParams;
  const adminIdParam = searchParams.get("admin-id");
  if (ADMIN_ID === adminIdParam) {
    response.cookies.set("admin-id", adminIdParam);
    return response;
  }

  const res = await fetch(`https://ipapi.co/${ip}/country_name`);
  const country = await res.text();
  response.headers.append("X-Country-Name", country);

  return response;
}
