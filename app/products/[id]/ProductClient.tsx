"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  description?: string;
  category: string;
  image?: string;
}

export default function ProductClient({ id }: { id: string }) {
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="p-10">Loading…</p>;
  if (!product) return <p className="p-10">Product not found</p>;

  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row gap-8">
      {product.image && (
        <div className="w-full md:w-1/3">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="object-cover rounded shadow"
          />
        </div>
      )}

      <div className="flex-1">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-2 text-gray-500">{product.category}</p>
        {product.description && (
          <p className="mt-4 text-gray-700">{product.description}</p>
        )}
        <p className="mt-4 text-2xl font-bold">Rs. {product.price}</p>

        <button
          className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          onClick={() =>
            addToCart({
              _id: product._id,
              name: product.name,
              price: product.price,
              qty: 1,
              image: product.image,
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}
