import type { Metadata } from "next";
import { websiteData as data } from "../data/websiteData";
import HeroSection from "@/components/HomePageSections/HeroSection";
import FeaturedGradeSection from "@/components/HomePageSections/FeaturedGradeSection";
import ProductGridSection from "@/components/HomePageSections/ProductGridSection";
import BadgesSection from "@/components/HomePageSections/BadgesSection";
import RecipesSection from "@/components/HomePageSections/RecipesSection";
import LegacySection from "@/components/HomePageSections/LegacySection";
import HealthBenefitsSlider from "@/components/HealthBenefitsSlider";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Emperor Akbar Cardamom | GI-Tagged Alleppey Cardamom",
  description:
    "Discover premium GI-tagged Alleppey Green Cardamom, its unique aroma, quality grades, and versatile uses in cooking and recipes.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Emperor Akbar Cardamom | GI-Tagged Alleppey Cardamom",
    description:
      "Discover premium GI-tagged Alleppey Green Cardamom, its unique aroma, quality grades, and versatile uses in cooking and recipes.",
    url: "https://www.emperorakbar.com/",
    siteName: "Emperor Akbar Cardamom",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.emperorakbar.com/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Emperor Akbar Alleppey Green Cardamom",
      },
    ],
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.emperorakbar.com/#website",
      url: "https://www.emperorakbar.com/",
      name: "Emperor Akbar Cardamom Redesign",
      description:
        "Independent digital flagship redesign exploring premium GI-tagged Alleppey Green Cardamom, grading standards, and recipes.",
      inLanguage: "en-IN",
    },
    {
      "@type": "Organization",
      "@id": "https://www.emperorakbar.com/#organization",
      name: "Emperor Akbar Cardamom",
      url: "https://www.emperorakbar.com/",
      logo: "https://www.emperorakbar.com/images/logo.png",
      description:
        "Authentic GI-tagged Alleppey Green Cardamom showcase.",
      sameAs: [
        "https://www.facebook.com/EmperorAkbarCardamom",
        "https://www.instagram.com/emperorakbarcardamom",
        "https://www.youtube.com/@EmperorAkbarCardamom",
      ],
    },
  ],
};

export default function Home() {
  const shopData = data.shop;
  const recipeData = data.recipes;

  return (
    <div className="font-sans text-stone-900 ">
      <JsonLd data={homeSchema} />
      <HeroSection />
      <FeaturedGradeSection />
      <ProductGridSection shopData={shopData} />
      
      {/* natural +...  section */}
      <BadgesSection />
      
      {/* health benefits */}
      <HealthBenefitsSlider />
      
      {/* recipes section  */}
      <RecipesSection recipeData={recipeData} />
      
      {/* legacy section */}
      <LegacySection />
    </div>
  );
}
