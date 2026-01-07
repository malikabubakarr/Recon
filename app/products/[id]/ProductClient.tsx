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

  if (loading)
    return (
      <p className="p-10 text-gray-800 bg-white text-center">
        Loading…
      </p>
    );

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
          content={product.description?.slice(0, 150) || "Buy RECON products online."}
        />
        <meta name="keywords" content={`${product.name}, RECON, Makson International, ${product.category}`} />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:url" content={`https://maksoninternational.com/products/${id}`} />
        <meta property="og:type" content="product" />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://maksoninternational.com/products/${id}`} />
      </Head>

      {/* ------------------ STRUCTURED DATA (JSON-LD) ------------------ */}
      {product && (
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
      )}

      {/* ------------------ PRODUCT UI ------------------ */}
      <section className="container mx-auto py-16 px-6 bg-gradient-to-br from-gray-50 to-white min-h-screen">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Product Image */}
          {product.image && (
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
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

          {/* Product Details */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-light text-gray-900 mb-4 tracking-wide">
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

            <button
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-red-500 transition-all duration-300 shadow-md hover:shadow-lg font-thin"
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
        </div>
      </section>
    </>
  );
}
