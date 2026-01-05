// app/page.tsx
import Hero from "@/components/hero";
import Categories from "@/components/Categories";
import BestSellers from "@/components/BestSellers";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import HairFaq from "@/components/HairFaq";
import PerfectMatch from "@/components/PerfectMatch";
import MediaSection from "@/components/MediaSection";

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
