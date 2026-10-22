import type { Metadata } from "next";
import { websiteData } from "@/data/websiteData";
import RecipesList from "@/components/RecipesList";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Authentic Cardamom Recipes | Desserts, Chai & Savory Delights",
  description:
    "Explore chef-crafted cardamom recipes: Cardamom Rasmalai, Pistachio Latte, Elaichi Chai, Biryani, and traditional sweets made with Emperor Akbar Cardamom.",
  keywords: [
    "cardamom recipes",
    "elaichi recipes",
    "cardamom rasmalai",
    "elaichi chai recipe",
    "cardamom pistachio latte",
    "how to use green cardamom in cooking",
    "Emperor Akbar Cardamom recipes",
  ],
  alternates: {
    canonical: "/recipes/",
  },
  openGraph: {
    title: "Authentic Cardamom Recipes | Emperor Akbar Cardamom",
    description:
      "Flavours that bring people together. Explore our collection of chef-crafted recipes using aromatic Alleppey green cardamom.",
    url: "https://www.emperorakbar.com/recipes/",
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
      name: "Recipes",
      item: "https://www.emperorakbar.com/recipes/",
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
