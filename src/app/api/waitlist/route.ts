import { kv } from "@vercel/kv";

import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const slug = formData.get("slug");
  const email = formData.get("email");

  try {
    if (!slug || !email) {
      throw new Error("slug or email are undefined");
    }

    await kv.lpush(`waitlist:${slug.toString()}`, email.toString());
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  redirect(`/cursos/${slug}/waitlist`);
}
