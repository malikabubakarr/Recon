"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What causes hair fall and how can I reduce it?",
    a: "Hair fall can be caused by stress, poor diet, hormonal imbalance, heat styling, harsh chemicals, or genetics. Reduce hair fall by using gentle shampoos, oiling regularly, avoiding tight hairstyles, eating a balanced diet, and limiting heat styling."
  },
  {
    q: "How often should I wash my hair?",
    a: "Wash 2–3 times per week. Oily hair types may need more frequent washing, while dry hair benefits from fewer washes to retain natural moisture."
  },
  {
    q: "Is Recon Hair Dye safe to use?",
    a: "Yes — when used as directed. Always perform a patch test 24 hours before application and follow instructions carefully."
  },
  {
    q: "Is Recon Hair Dye ammonia-free?",
    a: "Most Samsol shades are formulated without harsh ammonia to be gentler on hair while still providing long-lasting color. Always check the product label for details."
  },
  {
    q: "Can I use Recon Hair Dye on chemically or henna-treated hair?",
    a: "Yes — but wait at least 2–3 weeks after another treatment. Perform a strand test first to check color results and hair reaction."
  }
];

export default function HairFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="container mx-auto px-4 py-14">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3">
        {faqs.map((item, i) => (
          <div key={i} className="border rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {item.q}
              {openIndex === i ? (
                <Minus className="w-5 h-5" />
              ) : (
                <Plus className="w-5 h-5" />
              )}
            </button>

            {openIndex === i && (
              <div className="px-4 py-3 bg-gray-50 text-sm text-gray-700">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
