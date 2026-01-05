import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Product from "@/models/Product";

export async function GET() {
  try {
    await dbConnect();

    // Fetch all products, newest first
    const products = await Product.find({}).sort({ createdAt: -1 });

    // Ensure we always return an array
    if (!Array.isArray(products)) {
      console.warn("Products is not an array, returning empty array instead.");
      return NextResponse.json([]);
    }

    return NextResponse.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);

    // Return consistent object so frontend knows something went wrong
    return NextResponse.json(
      { error: "Failed to fetch products", details: (err as Error).message },
      { status: 500 }
    );
  }
}
