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
  { id: 1, type: "image", src: "/ad11.jpg", title: "" },
  { id: 3, type: "video", src: "/video1.mp4", title: "" },
  { id: 5, type: "video", src: "/video2.mp4", title: "" },
];

export default function MediaSection() {
  const [items] = useState<MediaItem[]>(mediaItems);

  return (
    <section className="container mx-auto py-16 px-6 bg-gray-50 text-gray-900">
      <h2 className="text-3xl font-light text-center mb-12 tracking-wide">
        Our Media & Promotions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200"
          >
            {item.type === "image" ? (
              <div className="w-full h-[350px] relative">
                <Image
                  src={item.src}
                  alt={item.title || "Media Item"}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="w-full h-[350px] relative">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  src={item.src}
                />
              </div>
            )}

            {item.title && (
              <div className="p-4">
                <h3 className="font-medium text-lg text-center">{item.title}</h3>
                {item.desc && (
                  <p className="text-gray-600 mt-2 text-center">{item.desc}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}