import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, HeartHandshake, Eye } from "lucide-react";
import { websiteData } from "@/data/websiteData";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "CSR & Community Welfare | Emperor Akbar Cardamom",
  description:
    "Explore Emperor Akbar Cardamom's CSR initiatives, healthcare camps, and social welfare programs rooted in the philosophy of Shubh Laabh.",
  keywords: [
    "cardamom CSR",
    "Emperor Akbar community welfare",
    "Shubh Laabh",
    "healthcare camps Palitana",
    "Samex India CSR",
  ],
  alternates: {
    canonical: "/csr/",
  },
  openGraph: {
    title: "CSR & Community Welfare | Emperor Akbar Cardamom",
    description:
      "Devoted to enriching lives, supporting communities, and spreading goodness beyond business.",
    url: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/csr/",
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
      name: "CSR",
      item: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/csr/",
    },
  ],
};

export default function CSRPage() {
  const { csr } = websiteData;

  const badges = ["Social Goodness", "Healthcare Camp"];
  const categoryTags = ["Community Welfare", "Medical Outreach"];

  return (
    <div className="font-sans bg-[#f9f8f6] min-h-screen flex flex-col">
      <JsonLd data={breadcrumbSchema} />
      <main className="flex-1 pt-10 md:pt-16 pb-20 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        {/* Page Header */}
        <div className="w-full text-center mb-10 md:mb-16">
          <span className="text-[#d4af37] font-bold tracking-widest text-[11px] sm:text-xs uppercase mb-2 block">
            SHUBH LAABH &bull; GIVING BACK TO SOCIETY
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 uppercase tracking-wide mb-4">
            {csr.title}
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-4"></div>
          <p className="text-stone-500 font-serif italic text-base sm:text-lg max-w-2xl mx-auto">
            Devoted to enriching lives, supporting underprivileged communities,
            and spreading goodness beyond business.
          </p>
        </div>

        {/* CSR Initiatives Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch mb-12 md:mb-16">
          {csr.sections.map((section, idx) => (
            <div
              key={section.id}
              className="bg-white rounded-2xl md:rounded-3xl border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center"
            >
              {/* Card Eyebrow & Badge */}
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <p className="text-[10px] sm:text-xs text-[#d4af37] font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <span>Initiative 0{idx + 1}</span>
                </p>
                <span className="bg-[#d4af37] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-xs">
                  {badges[idx] || "CSR"}
                </span>
              </div>

              {/* Image Container with Top Gold Accent */}
              {section.image && (
                <div className="relative w-full h-52 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden mb-6 bg-stone-100 border border-stone-100 shrink-0">
                  {/* Top Gold Accent Bar */}
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d4af37] z-20" />
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              )}

              {/* Title */}
              <h2 className="font-serif font-bold text-stone-900 text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 leading-tight group-hover:text-[#1b4b36] transition-colors">
                {section.title}
              </h2>

              {/* Paragraphs */}
              <div className="text-stone-600 text-sm sm:text-base leading-relaxed space-y-3 mb-6 flex-1">
                {section.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Card Footer Action */}
              <div className="mt-auto pt-5 border-t border-stone-100 flex items-center justify-between gap-4">
                {section.policy ? (
                  <a
                    href={section.policy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#1b4b36] hover:bg-[#113123] text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-sm hover:shadow-md group/btn"
                  >
                    <span>View {section.policy.label}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-700 font-bold text-[11px] sm:text-xs uppercase tracking-widest rounded-full">
                    <Eye className="w-3.5 h-3.5 text-[#1b4b36]" />
                    <span>Palitana, Gujarat</span>
                  </div>
                )}

                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#d4af37] group-hover:text-[#1b4b36] transition-colors">
                  {idx === 0 ? (
                    <HeartHandshake className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                  <span>{categoryTags[idx] || "Impact"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Statement Banner */}
        <div className="bg-white rounded-2xl md:rounded-3xl border border-stone-200/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 sm:p-10 md:p-12 text-center max-w-7xl mx-auto">
          <p className="text-[11px] sm:text-xs text-[#d4af37] font-bold uppercase tracking-widest mb-3">
            Our Guiding Principle
          </p>
          <blockquote className="font-serif italic text-lg md:text-xl text-stone-800 leading-relaxed mb-4">
            &ldquo;Earning{" "}
            <strong className="not-italic text-[#1b4b36]">SHUBH LAABH</strong>{" "}
            goes beyond the realm of business — enriching lives, protecting our
            shared environment, and honoring the farming families who make
            Alleppey green cardamom the pride of India.&rdquo;
          </blockquote>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-stone-400">
            Samex India &bull; Emperor Akbar Cardamom
          </p>
        </div>
      </main>
    </div>
  );
}
