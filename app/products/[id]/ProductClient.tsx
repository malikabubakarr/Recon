"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Head from "next/head";

interface Product {
  _id: string;
  name: string;
  price: number;
  description?: string;
  category: string;
  image?: string;
}

export default function ProductClient({ id }: { id: string }) {
  const { addToCart, openCart } = useCart(); // ✅ openCart added
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

  // ================= 🔥 PREMIUM LOADER =================
  if (loading)
    return (
      <section className="container mx-auto py-16 px-6 bg-white min-h-screen">
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
            animation: shimmer 1.4s linear infinite;
          }
          @keyframes shimmer {
            to {
              background-position-x: -200%;
            }
          }
        `}
        </style>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="h-[420px] rounded-2xl shimmer" />
          </div>

          <div className="flex-1 space-y-6">
            <div className="h-10 w-3/4 rounded shimmer" />
            <div className="h-5 w-1/3 rounded shimmer" />
            <div className="h-4 w-full rounded shimmer" />
            <div className="h-4 w-5/6 rounded shimmer" />
            <div className="h-4 w-2/3 rounded shimmer" />
            <div className="h-8 w-1/4 rounded shimmer mt-6" />
            <div className="h-12 w-48 rounded-full shimmer mt-4" />
          </div>
        </div>
      </section>
    );
  // ====================================================

  if (!product)
    return (
      <p className="p-10 text-gray-800 bg-white text-center">
        Product not found
      </p>
    );

  return (
    <>
      {/* ------------------ SEO HEAD ------------------ */}
      <Head>
        <title>{product.name} | RECON</title>
        <meta
          name="description"
          content={
            product.description?.slice(0, 150) ||
            "Buy RECON products online."
          }
        />
        <meta
          name="keywords"
          content={`${product.name}, RECON, Makson International, ${product.category}`}
        />

        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta
          property="og:url"
          content={`https://maksoninternational.com/products/${id}`}
        />
        <meta property="og:type" content="product" />

        <link
          rel="canonical"
          href={`https://maksoninternational.com/products/${id}`}
        />
      </Head>

      {/* ------------------ STRUCTURED DATA ------------------ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            image: product.image,
            description: product.description,
            brand: "RECON",
            manufacturer: "Makson International",
            sku: product._id,
            offers: {
              "@type": "Offer",
              priceCurrency: "PKR",
              price: product.price,
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      {/* ------------------ PRODUCT UI ------------------ */}
      <section className="container mx-auto py-16 px-6 bg-gradient-to-br from-gray-50 to-white min-h-screen">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start">
          {product.image && (
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          )}

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-light text-gray-900 mb-4">
              {product.name}
            </h1>

            <p className="text-lg text-gray-600 mb-6 font-thin">
              Category: {product.category}
            </p>

            {product.description && (
              <p className="text-gray-700 mb-8 leading-relaxed font-thin">
                {product.description}
              </p>
            )}

            <p className="text-3xl font-semibold text-gray-900 mb-8">
              Rs. {product.price}
            </p>

            {/* 🔥 ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-black text-white px-8 py-3 rounded-full hover:bg-red-500 transition-all shadow-md"
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

              <button
                className="border border-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all"
                onClick={() => {
                  addToCart({
                    _id: product._id,
                    name: product.name,
                    price: product.price,
                    qty: 1,
                    image: product.image,
                  });
                  openCart?.(); // ✅ opens cart instantly
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
