import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Product from "@/models/Product";

export async function GET(req: Request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q")?.trim() || "";

    // if search empty → return empty array
    if (!q) {
      return NextResponse.json([]);
    }

    const products = await Product.find(
      {
        name: { $regex: q, $options: "i" }, // case-insensitive search
      },
      {}, // projection (all fields)
    )
      .sort({ createdAt: -1 })
      .limit(25);

    return NextResponse.json(products);
  } catch (err) {
    console.error("Search error:", err);

    return NextResponse.json(
      {
        error: "Search failed",
        details: (err as Error).message,
      },
      { status: 500 }
    );
  }
}
