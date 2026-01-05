"use client";

import Image from "next/image";
import { useState } from "react";

interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  title?: string;
  desc?: string;
}

const mediaItems: MediaItem[] = [
  { id: 1, type: "image", src: "/ad1.jpg", title: "Hair Color" },
  { id: 3, type: "video", src: "/video1.mp4", title: "Hair Color ad" },
  { id: 5, type: "video", src: "/video2.mp4", title: "Amla Oil Ad" },
];

export default function MediaSection() {
  const [items] = useState<MediaItem[]>(mediaItems);

  return (
    <section className="container mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Our Media & Promotions</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {item.type === "image" ? (
              <div className="w-full h-[400px] relative">
                <Image
                  src={item.src}
                  alt={item.title || "Media Item"}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            ) : (
              <div className="w-full h-[400px] bg-black">
                <video
                  className="w-full h-full object-contain"
                  controls
                  src={item.src}
                />
              </div>
            )}

            {item.title && (
              <div className="p-5">
                <h3 className="font-semibold text-xl">{item.title}</h3>
                {item.desc && <p className="text-gray-500 mt-1">{item.desc}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
