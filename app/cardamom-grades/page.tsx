import type { Metadata } from "next";
import CardamomVisualizer from "@/components/cardamom-grades-components/CardamomVisualizer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Cardamom Grades Guide | Purple, Pink, Green, Orange, Red Sizes Explained",
  description:
    "Learn about Emperor Akbar colour-coded cardamom grading system based on pod diameter (6mm to 8mm+). Discover Alleppey green cardamom quality standards.",
  keywords: [
    "cardamom grades",
    "cardamom pod sizes",
    "Alleppey green cardamom grading",
    "purple grade cardamom",
    "pink grade cardamom",
    "green grade cardamom",
    "cardamom diameter",
    "Emperor Akbar Cardamom",
  ],
  alternates: {
    canonical: "/cardamom-grades/",
  },
  openGraph: {
    title: "Cardamom Grades Guide | Emperor Akbar Cardamom",
    description:
      "Understand the difference in cardamom pod diameter and quality standards across Purple, Pink, Green, Orange, and Red grades.",
    url: "https://www.emperorakbar.com/cardamom-grades/",
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
      item: "https://www.emperorakbar.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Cardamom Grades",
      item: "https://www.emperorakbar.com/cardamom-grades/",
    },
  ],
};

export default function CardamomGradesPage() {
  return (
    <div className="font-sans bg-bg-primary min-h-screen flex flex-col">
      <JsonLd data={breadcrumbSchema} />
      <main className="flex-1 pt-10 md:pt-16 pb-20 px-6 max-w-7xl mx-auto w-full">
        <div className="w-full text-right md:text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-800 uppercase tracking-wide mb-4">
            Every Grade, Standard of Quality
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] ml-auto mr-0 md:mx-auto mb-6"></div>
          <p className="text-stone-500 font-serif italic text-base md:text-lg">
            Colour-coded for your perfect choice.
          </p>
        </div>

        <CardamomVisualizer />

        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-stone-200/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-7xl mx-auto text-center mt-6">
          <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">
            What makes the difference?
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Cardamoms are graded based on their pod diameter, not the pod length
            as is often misunderstood, and their seed density. The fatter the
            pod, the more bang for your buck! Size wise, the pods are then
            sealed into colour-coded packaging for easy identification. The
            quality remains world-class across all packs.
          </p>
        </div>
      </main>
    </div>
  );
}
