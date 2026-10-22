import type { Metadata } from "next";
import { websiteData } from "@/data/websiteData";
import ProductCard from "@/components/ProductCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Shop Premium Cardamom Pods & Grades",
  description:
    "Explore authentic GI-tagged Alleppey Green Cardamom pods. Choose from premium colour-coded grades 6mm to 8mm+ for everyday culinary uses.",
  keywords: [
    "buy cardamom online",
    "shop green cardamom",
    "Alleppey green cardamom",
    "purple grade cardamom",
    "pink grade cardamom",
    "green grade cardamom",
    "Emperor Akbar Cardamom shop",
  ],
  alternates: {
    canonical: "/shop/",
  },
  openGraph: {
    title: "Shop Premium Cardamom Pods & Grades | Emperor Akbar",
    description:
      "Explore authentic GI-tagged Alleppey Green Cardamom pods in premium colour-coded grades from 6mm to 8mm+.",
    url: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/shop/",
    type: "website",
  },
};

export default function ShopPage() {
  const { products, title } = websiteData.shop;

  const shopSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Emperor Akbar Cardamom Products",
    itemListElement: products.map((product, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: product.name,
      url: `https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/product/${product.id}/`,
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
        name: "Shop",
        item: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/shop/",
      },
    ],
  };

  return (
    <div className="font-sans bg-bg-primary min-h-screen flex flex-col">
      <JsonLd data={shopSchema} />
      <JsonLd data={breadcrumbSchema} />
      <main className="flex-1 pt-10 md:pt-16 pb-20 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="w-full text-center mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-800 uppercase tracking-wide mb-4">
            {title}
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-4"></div>
          <p className="text-stone-500 font-serif italic text-base sm:text-lg">
            Freshly sealed Alleppey Green Cardamom
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
