"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Recon Delivery Time?",
    a: "Recon believes in fast deliveries and typically delivers your parcel within 3–5 days.",
  },
  {
    q: "Can I Return My Recon Parcel?",
    a: "Yes — Recon returns are accepted within 7 days if the product is unused and in original packaging.",
  },
  {
    q: "Recon Delivery Issues & Information",
    a: "If your Recon parcel is delayed, damaged, or missing — contact us via WhatsApp or our support page.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Recon FAQs
      </h2>

      <div className="space-y-3">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="border rounded-xl overflow-hidden bg-white dark:bg-[#111]"
          >
            {/* Header */}
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold"
            >
              {item.q}

              <span className="w-8 h-8 flex items-center justify-center border rounded-md">
                {open === i ? "-" : "+"}
              </span>
            </button>

            {/* Content */}
            {open === i && (
              <div className="px-4 py-4 text-sm bg-rose-50 dark:bg-[#181818]">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
