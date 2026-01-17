// app/page.tsx
import type { Metadata } from "next";

import Hero from "@/components/hero";
import Categories from "@/components/Categories";
import BestSellers from "@/components/BestSellers";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import HairFaq from "@/components/HairFaq";
import PerfectMatch from "@/components/PerfectMatch";
import MediaSection from "@/components/MediaSection";

export const metadata: Metadata = {
  title: "RECON Products | Makson International",
  description:
    "Shop RECON products online by Makson International. Discover hair colors, oils, waxes, lotions, tissues, and more. Quality products loved by customers.",

  keywords: [
    "RECON",
    "Makson International",
    "Recon Products",
    "Hair Colors",
    "Hair Oil",
    "Hair Wax",
    "Lotions",
    "Tissues",
    "Best Sellers",
  ],

  alternates: {
    canonical: "https://www.maksoninternational.com/",
  },

  openGraph: {
    title: "RECON Products | Makson International",
    description:
      "Shop RECON products online by Makson International. Discover hair colors, oils, waxes, lotions, tissues, and more.",
    url: "https://www.maksoninternational.com/",
    siteName: "RECON",
    images: [
      {
        url: "/desktop11.jpg",
        width: 1200,
        height: 630,
        alt: "RECON Products",
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <BestSellers />
      <Faq />
      <Features />
      <HairFaq />
      <PerfectMatch />
      <MediaSection />
    </>
  );
}

