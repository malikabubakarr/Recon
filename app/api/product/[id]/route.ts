import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Product from "@/models/Product";
import mongoose from "mongoose";

export async function GET(req: Request) {
  try {
    await dbConnect();

    // Extract the ID from the URL
    const url = new URL(req.url);
    const parts = url.pathname.split("/"); // ["", "api", "product", "<id>"]
    const id = parts[parts.length - 1];

    console.log("Fetching product ID:", id);

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid product id" }, { status: 400 });
    }

    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (err) {
    console.error("Server error in /api/product/[id]:", err);
    return NextResponse.json(
      { error: "Server error", details: (err as Error).message },
      { status: 500 }
    );
  }
}
