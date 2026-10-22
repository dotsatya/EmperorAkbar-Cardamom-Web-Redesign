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
  title: "Emperor Akbar Cardamom | World's Best GI-Tagged Alleppey Green Cardamom",
  description:
    "Experience the world's finest GI-tagged Alleppey Green Cardamom sealed with patented Aroma-Lock technology. India's top exporter of 100% natural, premium cardamom pods.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Emperor Akbar Cardamom - The Green Gold of India",
    description:
      "Buy authentic GI-tagged Alleppey Green Cardamom sealed with patented Aroma-Lock technology. Pure, aromatic, and 100% natural.",
    url: "https://www.emperorakbar.com",
    siteName: "Emperor Akbar Cardamom",
    type: "website",
    locale: "en_IN",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.emperorakbar.com/#organization",
      name: "Emperor Akbar Cardamom",
      legalName: "Samex India Pvt. Ltd.",
      url: "https://www.emperorakbar.com",
      logo: "https://www.emperorakbar.com/images/logo.png",
      description:
        "World's best GI-tagged Alleppey Green Cardamom brand and India's #1 exporter of premium whole cardamom pods.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "201, Sabari Samriddhi, V.N. Purav Marg, Chembur",
        addressLocality: "Mumbai",
        postalCode: "400071",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9699196991",
        contactType: "customer service",
        email: "birbal@emperorakbar.com",
        areaServed: ["IN", "AE", "US", "GB", "SA"],
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: [
        "https://www.facebook.com/EmperorAkbarCardamom",
        "https://www.instagram.com/emperorakbarcardamom",
        "https://www.youtube.com/@EmperorAkbarCardamom",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.emperorakbar.com/#website",
      url: "https://www.emperorakbar.com",
      name: "Emperor Akbar Cardamom",
      description:
        "Authentic GI-Tagged Alleppey Green Cardamom with Patented Aroma-Lock Technology",
      publisher: {
        "@id": "https://www.emperorakbar.com/#organization",
      },
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
