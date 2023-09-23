import { kv } from "@vercel/kv";

import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name");
  const email = searchParams.get("email");
  const message = searchParams.get("message");

  try {
    if (!name || !email || !message) {
      throw new Error("name, email or message are undefined");
    }

    const form = { name, email, message };

    await kv.lpush("contact", JSON.stringify(form));
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  redirect("/contacto/enviado");
}
