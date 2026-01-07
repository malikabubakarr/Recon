// app/page.tsx
import Hero from "@/components/hero";
import Categories from "@/components/Categories";
import BestSellers from "@/components/BestSellers";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import HairFaq from "@/components/HairFaq";
import PerfectMatch from "@/components/PerfectMatch";
import MediaSection from "@/components/MediaSection";
import Head from "next/head";

export default function Home() {
  const pageTitle = "RECON Products | Makson International";
  const pageDescription =
    "Shop RECON products online by Mason International. Discover hair colors, oils, waxes, lotions, tissues, and more. Quality products loved by customers.";
  const canonicalUrl = "https://maksoninternational.com/";

  return (
    <>
      {/* ------------------ SEO HEAD ------------------ */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="RECON, Mason International, Hair Colors, Hair Oil, Wax, Lotions, Tissues, Best Sellers" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        {/* Optional: use hero image or first product image */}
        <meta property="og:image" content="/desktop11.jpg" />

        {/* Canonical */}
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      {/* ------------------ COMPONENTS ------------------ */}
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
