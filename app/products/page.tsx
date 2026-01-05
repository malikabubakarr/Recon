"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";

interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  brand?: string;
  image?: string;
  description?: string;
}

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const brandFilter = searchParams.get("brand");
  const categoryFilter = searchParams.get("category");

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        let filtered: Product[] = data;

        // convert any string to slug (wax -> wax, Hair Color -> hair-color)
        const slugify = (str: string = "") =>
          str
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "");

        // BRAND filter (fallback = recon since DB has no brand)
        if (brandFilter) {
          filtered = filtered.filter(
            (p) => slugify(p.brand || "recon") === slugify(brandFilter)
          );
        }

        // CATEGORY filter
        if (categoryFilter) {
          filtered = filtered.filter(
            (p) => slugify(p.category) === slugify(categoryFilter)
          );
        }

        setProducts(filtered);
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  }, [brandFilter, categoryFilter]);

  return (
    <section className="container mx-auto py-16 px-6">
      <h1 className="font-thin text-4xl mb-12 text-gray-800 text-center">
        {brandFilter ? `${brandFilter} Products` : "All Products"}
      </h1>

      {products.length === 0 ? (
        <p className="font-thin text-gray-500 text-center text-lg mt-12">
          No products found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard
              key={p._id}
              _id={p._id}
              name={p.name}
              price={p.price}
              category={p.category}
              image={p.image}
            />
          ))}
        </div>
      )}
    </section>
  );
}
