import { kv } from "@vercel/kv";

import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

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
