"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
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

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const brandFilter = searchParams.get("brand");
  const categoryFilter = searchParams.get("category");

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        let filtered: Product[] = data;

        const slugify = (str: string = "") =>
          str.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

        if (brandFilter) {
          filtered = filtered.filter(
            (p) => slugify(p.brand || "recon") === slugify(brandFilter)
          );
        }

        if (categoryFilter) {
          filtered = filtered.filter(
            (p) => slugify(p.category) === slugify(categoryFilter)
          );
        }

        setProducts(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, [brandFilter, categoryFilter]);

  // ================== 🔥 PREMIUM LOADER ==================
  if (loading) {
    return (
      <section className="container mx-auto py-16 px-6 bg-white">
        <style>
          {`
          .shimmer {
            background: linear-gradient(
              110deg,
              #f0f0f0 8%,
              #e5e5e5 18%,
              #f0f0f0 33%
            );
            background-size: 200% 100%;
            animation: shimmer 1.5s linear infinite;
          }
          @keyframes shimmer {
            to {
              background-position-x: -200%;
            }
          }
        `}
        </style>

        <h1 className="font-thin text-4xl mb-12 text-gray-300 text-center">
          Loading Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="border rounded-2xl p-4 space-y-4 shadow-sm"
            >
              <div className="h-48 rounded-xl shimmer" />
              <div className="h-5 w-3/4 rounded shimmer" />
              <div className="h-4 w-1/2 rounded shimmer" />
              <div className="h-10 w-full rounded-xl shimmer" />
            </div>
          ))}
        </div>
      </section>
    );
  }
  // =======================================================

  // ------------------ SEO DATA ------------------
  const pageTitle = brandFilter
    ? `${brandFilter} Products | RECON`
    : categoryFilter
    ? `${categoryFilter} Products | RECON`
    : "All Products | RECON";

  const pageDescription =
    brandFilter || categoryFilter
      ? `Browse ${brandFilter || ""} ${categoryFilter || ""} products from RECON.`
      : "Browse all RECON products online.";

  const canonicalUrl = `https://maksoninternational.com/products${
    brandFilter
      ? `?brand=${brandFilter}`
      : categoryFilter
      ? `?category=${categoryFilter}`
      : ""
  }`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <section className="container mx-auto py-16 px-6 bg-white">
        <h1 className="font-thin text-4xl mb-12 text-gray-800 text-center">
          {brandFilter
            ? `${brandFilter} Products`
            : categoryFilter
            ? `${categoryFilter} Products`
            : "All Products"}
        </h1>

        {products.length === 0 ? (
          <p className="font-thin text-gray-800 text-center text-lg mt-12">
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
    </>
  );
}
