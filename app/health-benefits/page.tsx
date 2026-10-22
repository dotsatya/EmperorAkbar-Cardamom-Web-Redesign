import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { websiteData } from "@/data/websiteData";
import HealthTopicsGrid from "@/components/HealthTopicsGrid";
import ShinyButton from "@/components/ShinyButton";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Health Benefits of Green Cardamom",
  description:
    "Explore the evidence-based wellness and Ayurvedic benefits of green cardamom, from digestive support to oral health and antioxidants.",
  keywords: [
    "health benefits of cardamom",
    "green cardamom medicinal uses",
    "doctor of spices",
    "cardamom digestion",
    "Ayurvedic benefits of elaichi",
    "antioxidant spice",
    "Emperor Akbar Cardamom wellness",
  ],
  alternates: {
    canonical: "/health-benefits/",
  },
  openGraph: {
    title: "Health Benefits of Green Cardamom | Doctor of Spices",
    description:
      "Explore the medicinal properties of cardamom that make it Mother Nature's own doctor of spices.",
    url: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/health-benefits/",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Health Benefits",
      item: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/health-benefits/",
    },
  ],
};

export default function HealthBenefitsPage() {
  const { healthData } = websiteData;

  return (
    <div className="font-sans bg-[#f9f8f6] min-h-screen flex flex-col">
      <JsonLd data={breadcrumbSchema} />
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-20 flex items-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={healthData.hero.image}
            alt="Health Benefits of Alleppey Green Cardamom"
            title="Health Benefits of Alleppey Green Cardamom"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full text-left">
          <div className="max-w-2xl">
            <span className="text-[#d4af37] font-semibold tracking-[0.2em] text-sm md:text-base mb-4 uppercase block">
              {healthData.hero.eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-md">
              {healthData.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-sm">
              {healthData.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-6 md:py-10 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
              {healthData.section.title}
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              {healthData.section.description}
            </p>
          </div>

          <HealthTopicsGrid topics={healthData.topics} />
        </div>
      </section>

      {/* Research & Recipes Split Section */}
      <section className="py-8 md:py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="bg-stone-900 text-white rounded-[2rem] p-6 md:p-10 flex flex-col justify-center shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <span className="text-[#d4af37] font-semibold tracking-widest text-sm uppercase mb-3 block">
              {healthData.research.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              {healthData.research.title}
            </h2>
            <p className="text-white/80 leading-relaxed mb-8 text-lg">
              {healthData.research.description}
            </p>
            <div className="mt-auto">
              <Link
                href="/our-story"
                className="inline-block border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-stone-900 px-8 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                {healthData.research.cta}
              </Link>
            </div>
          </div>

          <div className="bg-[#f2efe9] rounded-[2rem] p-6 md:p-10 flex flex-col justify-center shadow-sm border border-stone-200">
            <span className="text-stone-500 font-semibold tracking-widest text-sm uppercase mb-3 block">
              {healthData.recipes.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
              {healthData.recipes.title}
            </h2>
            <p className="text-stone-600 leading-relaxed mb-8 text-lg">
              {healthData.recipes.description}
            </p>
            <div className="mt-auto">
              <Link href="/recipes">
                <ShinyButton className="bg-stone-900 text-white hover:bg-stone-700">
                  {healthData.recipes.cta}
                </ShinyButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Banner */}
      <section className="bg-stone-100 py-8 md:py-12 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#d4af37] font-semibold tracking-widest text-sm uppercase mb-3 block">
            {healthData.product.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
            {healthData.product.title}
          </h2>
          <p className="text-lg md:text-xl text-stone-600 mb-6">
            {healthData.product.description}
          </p>
          <div className="mt-auto flex justify-center">
            <Link href="/shop">
              <ShinyButton className="bg-[#d4af37] text-white hover:bg-[#c4a133]">
                {healthData.product.cta}
              </ShinyButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 md:py-8 px-6 bg-[#f9f8f6]">
        <div className="max-w-3xl mx-auto text-center border-t border-stone-200 pt-6">
          <h3 className="text-lg font-bold text-stone-800 mb-3">
            {healthData.disclaimer.title}
          </h3>
          <p className="text-sm md:text-base text-stone-500 italic leading-relaxed">
            {healthData.disclaimer.description}
          </p>
        </div>
      </section>
    </div>
  );
}
