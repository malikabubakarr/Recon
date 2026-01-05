import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Order from "@/models/Order";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    await dbConnect();

    const body = await request.json();

    const {
      items,
      name,
      phone,
      address,
      paymentMethod,
      totalAmount,
    } = body;

    if (!items?.length) {
      return NextResponse.json(
        { error: "Cart is empty" },
        { status: 400 }
      );
    }

    const order = await Order.create({
      items,
      name,
      phone,
      address,
      paymentMethod,
      totalAmount,
    });

    return NextResponse.json({ success: true, order });
  } catch (err: any) {
    console.error("Error creating order:", err);

    return NextResponse.json(
      { error: "Failed to create order", details: err.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();

    const orders = await Order.find({}).sort({ createdAt: -1 });

    return NextResponse.json(orders);
  } catch (err: any) {
    console.error("Error fetching orders:", err);

    return NextResponse.json(
      { error: "Failed to fetch orders", details: err.message },
      { status: 500 }
    );
  }
}
