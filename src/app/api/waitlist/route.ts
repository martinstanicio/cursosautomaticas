import { kv } from "@vercel/kv";

import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const email = searchParams.get("email");

  try {
    if (!slug || !email) {
      throw new Error("slug or email are undefined");
    }

    await kv.lpush(`waitlist:${slug}`, email);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  redirect(`/cursos/${slug}/waitlist`);
}
