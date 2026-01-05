"use client";

import { useState } from "react";

export default function MediaPage() {
  // Add your Facebook embed links here
  const [mediaItems] = useState<
    { id: number; title: string; fbEmbed: string }[]
  >([
    // Example — replace with your own embed src links
    // {
    //   id: 1,
    //   title: "Recon Product Shoot",
    //   fbEmbed:
    //     "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/...your-video-link...",
    // },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="font-thin text-5xl text-gray-800 mb-4">Recon Media</h1>
          <p className="font-thin text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Watch our latest videos and media directly from Facebook.
          </p>
        </div>

        {mediaItems.length === 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-100 rounded-xl shadow-sm hover:shadow-lg transition duration-300 flex items-center justify-center border border-gray-200"
                >
                  <p className="font-thin text-gray-400 text-sm">
                    Video Coming Soon
                  </p>
                </div>
              ))}
            </div>

            <p className="font-thin text-gray-500 mt-12 text-lg text-center">
              Facebook videos will be added here soon. Stay tuned!
            </p>
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {mediaItems.map((item) => (
              <div
                key={item.id}
                className="rounded-xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden bg-white border"
              >
                <div className="aspect-square">
                  <iframe
                    src={item.fbEmbed}
                    width="100%"
                    height="100%"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>

                <div className="p-4">
                  <p className="font-thin text-gray-700 text-sm">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
