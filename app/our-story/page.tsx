import React from "react";
import { websiteData } from "@/data/websiteData";
import CertificatesSection from "./CertificatesSection";
import StoryBlock from "./StoryBlock";

export default function OurStoryPage() {
  const { heroTitle, sections, certificatesData } = websiteData.about;

  return (
    <div className="font-sans bg-bg-primary min-h-screen flex flex-col">
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
