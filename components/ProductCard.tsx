"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface ProductCardProps {
  _id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
  image?: string;
}

export default function ProductCard({
  _id,
  name,
  price,
  category,
  description,
  image,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ _id, name, price, qty: 1, image });
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  const handleBuyNow = () => {
    addToCart({ _id, name, price, qty: 1, image });
    window.dispatchEvent(new Event("openCart"));
  };

  return (
    <div className="max-w-md w-full mx-auto border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition bg-white flex flex-col">
      
      {image && (
        <div className="relative w-full h-48 md:h-64 mb-5 rounded-xl overflow-hidden bg-gray-50">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
      )}

      <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
      <p className="text-gray-500 text-sm mb-2">{category}</p>

      {description && (
        <p className="text-gray-600 text-sm mt-1 line-clamp-2 leading-relaxed">
          {description}
        </p>
      )}

      <p className="mt-5 text-2xl font-bold text-gray-900">
        Rs. {price}
      </p>

      {/* buttons section */}
      <div className="mt-auto pt-6 space-y-3">
        <button
          onClick={handleAddToCart}
          className={`w-full py-2 rounded-full text-sm transition-all duration-200 ${
            added
              ? "bg-green-600 text-white scale-105"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          {added ? "Added ✓ check cart icon above" : "Add to Cart"}
        </button>

        <button
          onClick={handleBuyNow}
          className="w-full py-2 rounded-full text-sm bg-orange-600 text-white hover:bg-orange-700 transition"
        >
          Buy Now
        </button>

        <Link
          href={`/products/${_id}`}
          className="block text-center text-sm text-gray-700 underline hover:text-black transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
