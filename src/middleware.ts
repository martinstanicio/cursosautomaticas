import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};

export async function middleware({ ip }: NextRequest) {
  const response = NextResponse.next();

  if (process.env.NODE_ENV !== "production") return response;

  const res = await fetch(`https://ipapi.co/${ip}/country_name`);
  const country = await res.text();
  response.headers.append("X-Country-Name", country);

  return response;
}
