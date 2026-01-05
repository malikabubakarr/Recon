// app/api/insert-products/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Product from "@/models/Product";

export async function GET() {
  try {
    await dbConnect();

    const products = [
      {
        name: "Recon Hair Color #43 (Dark Brown)",
        category: "Hair Color",
        price: 80,
        description: "Dark brown hair color for a natural look.",
        image: "/images/hair-color-43.jpg",
      },
      {
        name: "Recon Hair Color #45 (Black)",
        category: "Hair Color",
        price: 80,
        description: "Rich black hair color for a bold look.",
        image: "/images/hair-color-45.jpg",
      },
      {
        name: "Recon Amla Hair Oil Large (200ml)",
        category: "Hair Oil",
        price: 470,
        description: "Nourishing Amla hair oil for strong and shiny hair.",
        image: "/images/amla-oil-large.jpg",
      },
      {
        name: "Recon Amla Hair Oil Small (100ml)",
        category: "Hair Oil",
        price: 280,
        description: "Compact Amla hair oil for daily use.",
        image: "/images/amla-oil-small.jpg",
      },
      {
        name: "Recon Amla Hair Oil Mini (50ml)",
        category: "Hair Oil",
        price: 160,
        description: "Travel-size Amla hair oil for on-the-go care.",
        image: "/images/amla-oil-mini.jpg",
      },
      {
        name: "Recon Tissue POP UP",
        category: "Tissues",
        price: 175,
        description: "Soft POP-UP tissues for daily use.",
        image: "/images/tissue-pop-up.jpg",
      },
      {
        name: "Recon Tissue Smart",
        category: "Tissues",
        price: 110,
        description: "Smart pack tissues, convenient and soft.",
        image: "/images/tissue-smart.jpg",
      },
      {
        name: "Recon Tissue Roll",
        category: "Tissues",
        price: 75,
        description: "Regular tissue roll for home or office.",
        image: "/images/tissue-roll.jpg",
      },
      {
        name: "Recon Tissue Pocket Packet",
        category: "Tissues",
        price: 15,
        description: "Pocket-sized tissues for travel.",
        image: "/images/tissue-pocket.jpg",
      },
      {
        name: "Recon Nail Polish Remover Large",
        category: "Nail Care",
        price: 180,
        description: "Effective nail polish remover for large bottles.",
        image: "/images/nail-polish-remover-large.jpg",
      },
      {
        name: "Recon Nail Polish Remover Small",
        category: "Nail Care",
        price: 110,
        description: "Compact nail polish remover for travel.",
        image: "/images/nail-polish-remover-small.jpg",
      },
      {
        name: "Recon Hair Removing Wax Large",
        category: "Wax",
        price: 290,
        description: "Smooth hair removal with large wax pack.",
        image: "/images/hair-wax-large.jpg",
      },
      {
        name: "Recon Hair Removing Wax Small",
        category: "Wax",
        price: 210,
        description: "Small wax pack for easy hair removal.",
        image: "/images/hair-wax-small.jpg",
      },
      {
        name: "Recon Herbal Wax Large",
        category: "Wax",
        price: 210,
        description: "Herbal wax for gentle hair removal.",
        image: "/images/herbal-wax-large.jpg",
      },
      {
        name: "Recon Herbal Wax Small",
        category: "Wax",
        price: 210,
        description: "Compact herbal wax for sensitive skin.",
        image: "/images/herbal-wax-small.jpg",
      },
      {
        name: "Recon Razor Hygen Packing 48p",
        category: "Razor",
        price: 30,
        description: "Pack of 48 hygienic disposable razors.",
        image: "/images/razor-48p.jpg",
      },
      {
        name: "Recon Moisturizing Cleansing Milk Lotion Small",
        category: "Lotion",
        price: 210,
        description: "Gentle moisturizing lotion for daily skin care.",
        image: "/images/lotion-small.jpg",
      },
    ];

    // Insert products (no condition)
    await Product.insertMany(products);

    return NextResponse.json({ message: "✅ All Recon products inserted successfully!" });
  } catch (err) {
    return NextResponse.json({ error: "Failed to insert products", details: err });
  }
}
