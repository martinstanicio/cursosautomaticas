import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};

export async function middleware({ ip }: NextRequest) {
  const res = await fetch(`https://ipapi.co/${ip}/country_name`);
  const country = await res.text();

  const headers = new Headers({
    "X-Country-Name": country,
  });

  return NextResponse.next({ headers });
}
