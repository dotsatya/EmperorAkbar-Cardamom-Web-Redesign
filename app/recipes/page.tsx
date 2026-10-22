import type { Metadata } from "next";
import { websiteData } from "@/data/websiteData";
import RecipesList from "@/components/RecipesList";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Cardamom Recipes & Culinary Dishes | Emperor Akbar",
  description:
    "Explore authentic sweet and savoury recipes made with aromatic Alleppey green cardamom, from traditional chai and payasam to biryani.",
  keywords: [
    "cardamom recipes",
    "elaichi recipes",
    "cardamom rasmalai",
    "elaichi chai recipe",
    "cardamom pistachio latte",
    "cooking with green cardamom",
    "Emperor Akbar Cardamom recipes",
  ],
  alternates: {
    canonical: "/recipes/",
  },
  openGraph: {
    title: "Cardamom Recipes & Culinary Dishes | Emperor Akbar",
    description:
      "Explore delicious chef-crafted recipes using aromatic Alleppey green cardamom.",
    url: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/recipes/",
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
      name: "Recipes",
      item: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/recipes/",
    },
  ],
};

export default function RecipesPage() {
  const { title, tags, items } = websiteData.recipes;

  return (
    <div className="font-sans bg-bg-primary min-h-screen flex flex-col">
      <JsonLd data={breadcrumbSchema} />
      <RecipesList title={title} tags={tags} items={items} />
    </div>
  );
}
