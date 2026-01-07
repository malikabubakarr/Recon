"use client";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

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
  const pageTitle = "Best Sellers | RECON";
  const pageDescription =
    "Discover the most loved RECON products by our customers, including hair colors, oils, and waxing products.";

  return (
    <>
      {/* ------------------ SEO HEAD ------------------ */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="RECON, Makson International, Best Sellers, Hair Color, Hair Oil, Wax" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://maksoninternational.com/best-sellers`} />
        <meta property="og:image" content={bestSellers[0].img} />

        {/* Canonical */}
        <link rel="canonical" href={`https://maksoninternational.com/best-sellers`} />
      </Head>

      {/* ------------------ COMPONENT UI ------------------ */}
      <section className="bg-white py-16 px-4 border-b border-gray-200">
        <div className="container mx-auto text-gray-900">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
            Best Sellers
          </h2>

          <p className="text-center mb-12 text-gray-600">
            Most loved products by our customers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {bestSellers.map((p, i) => (
              <div key={i} className="w-full">
                <Link
                  href={`/products?category=${encodeURIComponent(p.category)}`}
                  className="block rounded-2xl overflow-hidden shadow hover:shadow-xl transition bg-white"
                >
                  <div className="relative h-[420px] bg-white">
                    <Image src={p.img} alt={p.name} fill className="object-cover" />
                  </div>
                </Link>

                <div className="mt-6 text-gray-900">
                  <h3 className="text-xl font-semibold mb-4">{p.name}</h3>

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
    </>
  );
}
