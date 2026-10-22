import { Suspense } from "react";
import type { Metadata } from "next";
import RecipeDetails from "./RecipeDetails";
import { websiteData } from "@/data/websiteData";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return websiteData.recipes.items.map((item) => ({
    slug: item.slug,
  }));
}

interface RecipePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: RecipePageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = websiteData.recipes.items.find((item) => item.slug === slug);

  if (!recipe) {
    return {
      title: "Recipe Not Found | Emperor Akbar Cardamom",
      description: "Explore culinary recipes using aromatic Emperor Akbar Green Cardamom.",
    };
  }

  const rawImg = recipe.image;
  const imgUrl = typeof rawImg === "string" ? rawImg : (rawImg as { src?: string })?.src || "/images/hero-bg.jpg";
  const title = `${recipe.title} | Emperor Akbar Cardamom`;
  const description =
    `Learn how to make ${recipe.title}. A delicious culinary recipe infused with aromatic Alleppey green cardamom.`;

  return {
    title,
    description,
    keywords: [
      ...(recipe.tags || []),
      recipe.title,
      "cardamom recipe",
      "Alleppey green cardamom recipes",
      "cooking with cardamom",
      "Emperor Akbar Cardamom",
    ],
    alternates: {
      canonical: `/recipes/${slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/recipes/${slug}/`,
      type: "article",
      images: [
        {
          url: imgUrl,
          alt: recipe.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imgUrl],
    },
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = websiteData.recipes.items.find((item) => item.slug === slug);

  const rawImg = recipe?.image;
  const imgUrl = typeof rawImg === "string" ? rawImg : (rawImg as { src?: string })?.src || "/images/hero-bg.jpg";
  const fullImgUrl = imgUrl.startsWith("http")
    ? imgUrl
    : `https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign${imgUrl}`;

  // Build Recipe ingredients array
  const ingredients: string[] = [];
  if (recipe?.content?.ingredientGroups) {
    recipe.content.ingredientGroups.forEach((group: { ingredients?: Array<{ quantity?: string; name: string }> }) => {
      group.ingredients?.forEach((ing) => {
        ingredients.push(`${ing.quantity ? ing.quantity + " " : ""}${ing.name}`);
      });
    });
  }

  // Build Recipe instructions array
  const instructions = recipe?.content?.steps?.map(
    (step: { title?: string; instruction?: string }, idx: number) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: step.title || `Step ${idx + 1}`,
      text: step.instruction || "",
    })
  ) || [];

  const recipeSchema = recipe
    ? {
        "@context": "https://schema.org",
        "@type": "Recipe",
        name: recipe.title,
        image: [fullImgUrl],
        description: recipe.description,
        author: {
          "@type": "Person",
          name: recipe.author || "Emperor Akbar Kitchen",
        },
        recipeCuisine: recipe.content?.recipeInfo?.cuisine || "Indian",
        recipeCategory: recipe.content?.recipeInfo?.category || "Dessert / Beverage",
        recipeYield: recipe.content?.recipeInfo?.servings || "4 servings",
        recipeIngredient: ingredients,
        recipeInstructions: instructions,
      }
    : null;

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
      {
        "@type": "ListItem",
        position: 3,
        name: recipe ? recipe.title : "Recipe",
        item: `https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/recipes/${slug}/`,
      },
    ],
  };

  return (
    <>
      {recipeSchema && <JsonLd data={recipeSchema} />}
      <JsonLd data={breadcrumbSchema} />
      <Suspense
        fallback={
          <div className="font-sans bg-[#f9f8f6] min-h-screen flex items-center justify-center text-stone-500 uppercase tracking-widest text-sm font-bold">
            Loading recipe...
          </div>
        }
      >
        <RecipeDetails params={params} />
      </Suspense>
    </>
  );
}
