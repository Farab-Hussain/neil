"use client";

import { CardStackingSection } from "./components/sections/CardStackingSection";
import Hero from "./src/components/Hero";
import { ThirdSection } from "./src/components/sections/ThirdSection";

import SeqoriaCanSection from "./src/components/SeqoriaCanSection";
import Footer from "./src/components/ui/Footer";

import Header from "./src/components/ui/Header";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <SeqoriaCanSection />
      <CardStackingSection />
      <ThirdSection />
      <Footer />
      {/* <Slider /> */}
    </main>
  );
}
