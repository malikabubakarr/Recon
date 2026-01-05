import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Message from "@/models/Message";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    const saved = await Message.create({
      name: body.name,
      email: body.email || "",
      phone: body.phone || "",
      subject: body.subject || "",
      message: body.message || "",
      source: body.source || "contact",
    });

    return NextResponse.json({ success: true, data: saved });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();

    const messages = await Message.find({}).sort({ createdAt: -1 });

    return NextResponse.json(messages);
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
