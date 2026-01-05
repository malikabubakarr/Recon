"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { title: "Hair Colors", category: "Hair Color", img: "/categories/recon-hair-color.jpg" },
  { title: "Body Wax", category: "Wax", img: "/categories/recon-wax.jpg" },
  { title: "Tissues", category: "tissues", img: "/categories/recon-tissues.jpg" },
  { title: "Lotions", category: "Lotion", img: "/categories/recon-lotion.jpg" },
  { title: "Nail Polish Remover", category: "Nail Care", img: "/categories/recon-nail.jpg" },
  { title: "Hair Amla Oil", category: "Hair Oil", img: "/categories/recon-oil.jpg" },
];

export default function Categories() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-6 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-light text-3xl text-center mb-12 text-gray-900 tracking-wide">
          Shop by Category
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-8"
          >
            {categories.map((cat, i) => (
              <SwiperSlide key={i}>
                <Link
                  href={`/products?category=${encodeURIComponent(cat.category)}`}
                  className="
                    rounded-2xl overflow-hidden bg-white
                    shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 block
                    border border-gray-100
                  "
                >
                  {/* Image area */}
                  <div className="relative h-[500px] bg-gradient-to-br from-white to-gray-50 flex items-center justify-center">
                    <Image
                      src={cat.img}
                      alt={cat.title}
                      fill
                      className="object-contain p-8"
                    />

                    {/* Modern label bar */}
                    <div
                      className="
                        absolute left-1/2 -translate-x-1/2 bottom-4
                        bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-md
                        border border-gray-200
                      "
                    >
                      <p className="font-semibold text-base text-gray-800 text-center">
                        {cat.title}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons - Hidden on mobile */}
          <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-all duration-300 hidden md:flex items-center justify-center w-12 h-12 border border-gray-200">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-all duration-300 hidden md:flex items-center justify-center w-12 h-12 border border-gray-200">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}