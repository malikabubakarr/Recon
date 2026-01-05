"use client";

import Image from "next/image";
import Link from "next/link";

const bestSellers = [
  {
    name: "Hair Colour Black",
    price: "Rs 299",
    img: "/images/hair-color-45.jpg",
    category: "Hair Color",
  },
  {
    name: "Hair Removing Wax",
    price: "Rs 450",
    img: "/images/herbal-wax-large.jpg",
    category: "Wax",
  },
  {
    name: "Amla Hair Oil",
    price: "Rs 320",
    img: "/images/amla-oil-large.jpg",
    category: "Hair Oil",
  },
];

export default function BestSellers() {
  return (
    <section className="bg-white py-16 px-4 border-b border-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">
          Best Sellers
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Most loved products by our customers
        </p>

        {/* Like screenshot: three equal blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {bestSellers.map((p, i) => (
            <div key={i} className="w-full">
              {/* Image */}
              <Link
                href={`/products?category=${encodeURIComponent(p.category)}`}
                className="block rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
              >
                <div className="relative h-[420px] bg-white">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>

              {/* Title + Button (like screenshot) */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">
                  {p.name}
                </h3>

                <Link
                  href={`/products?category=${encodeURIComponent(p.category)}`}
                  className="inline-block bg-black text-white px-6 py-3 rounded-md text-sm"
                >
                  View All Products
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
