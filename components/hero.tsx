"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import Image from "next/image";

const slides = [
  {
    desktop: "/desktop11.jpg",
    mobile: "/mobile-1.jpg",
  },
  {
    desktop: "/desktop-2.jpg",
    mobile: "/mobile-2.jpg",
  },
  {
    desktop: "/desktop-3.jpg",
    mobile: "/mobile-1.jpg",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        autoHeight={true} // Added to make Swiper adjust height based on content
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Desktop Image */}
            <div className="hidden md:block relative w-full">
              <Image
                src={slide.desktop}
                alt={`Slide ${index + 1}`}
                width={1920} // Set appropriate width (e.g., full HD)
                height={1080} // Set appropriate height based on aspect ratio
                priority={index === 0}
                className="object-contain w-full h-auto" // Changed to object-contain to avoid cropping, and h-auto for responsive height
              />
            </div>

            {/* Mobile Image */}
            <div className="block md:hidden relative w-full">
              <Image
                src={slide.mobile}
                alt={`Slide ${index + 1}`}
                width={768} // Set appropriate mobile width
                height={1024} // Set appropriate height based on aspect ratio
                priority={index === 0}
                className="object-contain w-full h-auto" // Changed to object-contain to avoid cropping, and h-auto for responsive height
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}