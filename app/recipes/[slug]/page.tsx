import { Suspense } from "react";
import RecipeDetails from "./RecipeDetails";
import { websiteData } from "@/data/websiteData";

export function generateStaticParams() {
  return websiteData.recipes.items.map((item) => ({
    slug: item.slug,
  }));
}

export default function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="font-sans bg-[#f9f8f6] min-h-screen flex items-center justify-center text-stone-500 uppercase tracking-widest text-sm font-bold">
          Loading recipe...
        </div>
      }
    >
      <RecipeDetails params={params} />
    </Suspense>
  );
}
