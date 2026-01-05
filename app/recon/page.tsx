"use client";

import Link from "next/link";
import Image from "next/image";

const reconCategories = [
  { title: "Hair Colors", category: "Hair Color", img: "/categories/recon-hair-color.jpg" },
  { title: "Body Wax", category: "Wax", img: "/categories/recon-wax.jpg" },
  { title: "Tissues", category: "tissues", img: "/categories/recon-tissues.jpg" },
  { title: "Lotions", category: "Lotion", img: "/categories/recon-lotion.jpg" },
  { title: "Nail Polish Remover", category: "Nail Care", img: "/categories/recon-nail.jpg" },
  { title: "Hair Amla Oil", category: "Hair Oil", img: "/categories/recon-oil.jpg" },

  // ALL PRODUCTS card
  { title: "All Products", category: null, img: "/categories/recon-all.jpg" },
];

export default function ReconPage() {
  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-4">
        Recon Products
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Select a category to view products
      </p>

      {/* Responsive auto-fit grid with improved modern styling */}
      <div className="grid gap-8 justify-center
                      [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]
                      max-w-7xl mx-auto">

        {reconCategories.map((cat) => {
          const isAll = cat.title === "All Products";

          return (
            <Link
              key={cat.title}
              href={
                cat.category
                  ? `/products?brand=recon&category=${cat.category}`
                  : `/products?brand=recon`
              }
              className={`
                group rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg
                hover:shadow-2xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300
                flex flex-col
                ${isAll ? "md:col-span-2 scale-105" : ""}
              `}
            >
              {/* Image container with auto height for full image display */}
              <div className="relative w-full">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 text-center flex-1 flex flex-col justify-center bg-gradient-to-b from-white to-gray-50">
                <h2 className={`font-semibold text-gray-900 ${isAll ? "text-2xl" : "text-xl"}`}>
                  {cat.title}
                </h2>

                {isAll && (
                  <p className="text-gray-600 mt-1 text-sm">
                    Browse complete Recon range
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}