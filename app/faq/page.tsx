import React from "react";
import type { Metadata } from "next";
import { websiteData } from "@/data/websiteData";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Cardamom FAQ: Storage, Grades & Usage",
  description:
    "Find answers to common questions about green cardamom grades, proper storage methods, pod sizing, and aroma freshness preservation.",
  keywords: [
    "cardamom FAQ",
    "how to store cardamom",
    "green cardamom shelf life",
    "how is cardamom graded",
    "Emperor Akbar Cardamom questions",
  ],
  alternates: {
    canonical: "/faq/",
  },
  openGraph: {
    title: "Cardamom FAQ: Storage, Grades & Usage | Emperor Akbar",
    description:
      "All your questions answered about green cardamom grades, freshness preservation, and storage tips.",
    url: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/faq/",
    type: "website",
  },
};

export default function FAQPage() {
  const { faqs } = websiteData;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
        name: "FAQ",
        item: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/faq/",
      },
    ],
  };

  return (
    <div className="font-sans bg-[#f9f8f6] min-h-screen flex flex-col">
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <main className="flex-1 pt-10 md:pt-16 pb-20 px-6 max-w-5xl mx-auto w-full">
        <div className="w-full text-right md:text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 uppercase tracking-wide mb-4">
            {faqs.title}
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] ml-auto mr-0 md:mx-auto mb-6"></div>
          <p className="text-sm md:text-base text-stone-600 leading-relaxed mb-8 max-w-5xl mx-auto">
            {faqs.intro}
          </p>
        </div>

        <div className="space-y-6">
          {faqs.items.map((faq) => (
            <div
              key={faq.id}
              className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              <h2 className="text-lg md:text-2xl font-serif font-bold text-stone-900 mb-2 md:mb-4">
                {faq.question}
              </h2>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                {faq.answer}
              </p>
              {faq.videoUrl && (
                <div className="aspect-video w-full rounded-xl md:rounded-2xl overflow-hidden shadow-sm">
                  <iframe
                    src={faq.videoUrl}
                    title={faq.question}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
