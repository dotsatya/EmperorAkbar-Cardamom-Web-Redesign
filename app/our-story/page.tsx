import React from "react";
import type { Metadata } from "next";
import { websiteData } from "@/data/websiteData";
import CertificatesSection from "./CertificatesSection";
import StoryBlock from "./StoryBlock";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Our Story & Heritage | Emperor Akbar Cardamom",
  description:
    "Explore the legacy of Emperor Akbar Cardamom and Samex India, delivering GI-tagged Alleppey Green Cardamom with authentic spice heritage.",
  keywords: [
    "Emperor Akbar cardamom story",
    "Samex India Pvt Ltd",
    "GI tagged cardamom history",
    "Alleppey green cardamom legacy",
    "Three Star Export House cardamom",
    "Spices Board of India award",
  ],
  alternates: {
    canonical: "/our-story/",
  },
  openGraph: {
    title: "Our Story & Heritage | Emperor Akbar Cardamom",
    description:
      "A royal legacy of purity, passion, and global cardamom export excellence from the Western Ghats of India.",
    url: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/our-story/",
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
      name: "Our Story",
      item: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/our-story/",
    },
  ],
};

export default function OurStoryPage() {
  const { heroTitle, sections, certificatesData } = websiteData.about;

  return (
    <div className="font-sans bg-bg-primary min-h-screen flex flex-col">
      <JsonLd data={breadcrumbSchema} />
      <main className="flex-1 pt-10 md:pt-16 pb-12 md:pb-20 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="w-full text-right md:text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-800 uppercase tracking-wide mb-4">
            {heroTitle}
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] ml-auto mr-0 md:mx-auto mb-4"></div>
          <p className="text-stone-500 font-serif italic text-base sm:text-lg">
            A Royal Legacy of Purity, Passion &amp; Perfection
          </p>
        </div>

        <div className="space-y-4 md:space-y-12">
          {sections.map((section, index) => (
            <StoryBlock 
              key={index}
              title={section.title}
              paragraphs={section.paragraphs}
              image={section.image}
              reverse={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
      </main>

      <div className="w-full">
        <CertificatesSection data={certificatesData} />
      </div>
    </div>
  );
}
