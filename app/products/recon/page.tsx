"use client";

import Link from "next/link";

const reconCategories = [
  { title: "Hair Colors", category: "hair-colors" },
  { title: "Body Wax", category: "body-wax" },
  { title: "Tissues", category: "tissues" },
  { title: "Lotions", category: "lotions" },
];

export default function ReconPage() {
  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Recon Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {reconCategories.map((cat) => (
          <Link
            key={cat.category}
            href={`/products?brand=recon&category=${cat.category}`}
            className="p-6 border rounded shadow text-center hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{cat.title}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}