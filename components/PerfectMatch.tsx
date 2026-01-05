"use client";

import Image from "next/image";

const items = [
  { img: "/match/item1.jpg", title: "Coconut" },
  { img: "/match/item22.jpg", title: "Aloe Vera" },
  { img: "/match/item3.jpg", title: "Lemon" },
  { img: "/match/item4.jpg", title: "Amla" },
];

export default function PerfectMatch() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Find Your Perfect Match
          </h2>

        <p className="mt-3 text-gray-500">
          Our products are designed for everyone.
        </p>
      </div>

      {/* Items */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">

        {items.map((item, i) => (
          <div key={i} className="text-center space-y-4">

            <Image
              src={item.img}
              alt={item.title}
              width={220}
              height={220}
              className="object-contain"
            />

            <p className="font-semibold text-gray-800">
              {item.title}
            </p>

          </div>
        ))}

      </div>

      </div>
    </section>
  );
}
