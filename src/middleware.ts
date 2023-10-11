import { NextResponse } from "next/server";

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};

export async function middleware() {
  const res = await fetch(`https://ipapi.co/country_name`);
  const country = await res.text();

  const headers = new Headers({
    "X-Country": country,
  });

  return NextResponse.next({ headers });
}
