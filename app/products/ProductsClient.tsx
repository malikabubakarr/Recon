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

  if (loading)
    return (
      <p className="p-10 text-center text-gray-800 bg-white">
        Loading products…
      </p>
    );

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
    brandFilter ? `?brand=${brandFilter}` : categoryFilter ? `?category=${categoryFilter}` : ""
  }`;

  return (
    <>
      {/* ------------------ SEO HEAD ------------------ */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`RECON, Mason International, ${brandFilter || ""}, ${categoryFilter || ""}`} />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        {/* Optional: You can add a default OG image */}
        <meta property="og:image" content="/default-og-image.jpg" />

        {/* Canonical */}
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      {/* ------------------ PAGE CONTENT ------------------ */}
      <section className="container mx-auto py-16 px-6 bg-white">
        <h1 className="font-thin text-4xl mb-12 text-gray-800 text-center">
          {brandFilter ? `${brandFilter} Products` : categoryFilter ? `${categoryFilter} Products` : "All Products"}
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
