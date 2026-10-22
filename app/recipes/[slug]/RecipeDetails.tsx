import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Clock,
  ChefHat,
  Users,
  CheckCircle2,
  PlayCircle,
  Info,
} from "lucide-react";
import { websiteData } from "@/data/websiteData";
import ShinyButton from "@/components/ShinyButton";

interface Ingredient {
  name: string;
  quantity: string;
}

interface IngredientGroup {
  title?: string;
  ingredients: Ingredient[];
}

interface Step {
  title: string;
  description?: string;
  instructions?: string[];
  tip?: string;
}

interface RecipeContentData {
  introduction?: string[];
  video?: {
    url?: string;
    title?: string;
  };
  recipeInfo?: {
    preparationTime?: string;
    cookingTime?: string;
    servings?: string;
    difficulty?: string;
  };
  ingredientGroups?: IngredientGroup[];
  steps?: Step[];
  closing?: string;
  links?: {
    author?: string;
    video?: string;
  };
}

export default async function RecipeDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = websiteData.recipes.items.find((item) => item.slug === slug);

  if (!recipe) {
    notFound();
  }

  const content = recipe.content as unknown as RecipeContentData;
  const { recipeInfo, ingredientGroups, steps } = content;

  return (
    <div className="font-sans bg-[#f9f8f6] min-h-screen pb-20">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-4">
        <Link
          href="/recipes"
          className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-stone-500 hover:text-[#1b4b36] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Recipes
        </Link>
      </div>
      {/* Hero Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {recipe.tags &&
            recipe.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-stone-200/50 text-stone-600 text-[10px] font-bold uppercase tracking-widest"
              >
                {tag}
              </span>
            ))}
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-tight mb-4 md:mb-6">
          {recipe.title}
        </h1>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <p className="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-8">
              By {recipe.author}
            </p>
            {content.introduction && (
              <div className="prose prose-stone text-base md:text-lg text-stone-600 mb-6 md:mb-8 leading-snug md:leading-relaxed">
                {content.introduction.map((p: string, idx: number) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            )}
            {content.video && (
              <ShinyButton className="bg-[#1b4b36] hover:bg-[#113123] text-white font-bold rounded-full ">
                <a
                  href={content.video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  <PlayCircle className="w-5 h-5 mr-2" /> Watch Recipe Video
                </a>
              </ShinyButton>
            )}
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
              {recipe.image && (
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  title={recipe.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Recipe Info Banner */}
      {recipeInfo && (
        <div className="max-w-5xl mx-auto px-6 mb-12 md:mb-16">
          <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 shadow-sm border border-stone-100 flex flex-wrap justify-between gap-4 md:gap-12 items-center">
            <div className="flex flex-col items-center flex-1 text-center min-w-[100px]">
              <Clock className="w-6 h-6 text-[#d4af37] mb-2" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                Prep Time
              </span>
              <span className="text-stone-800 font-serif font-semibold mt-1">
                {recipeInfo.preparationTime}
              </span>
            </div>
            <div className="hidden md:block w-px h-12 bg-stone-200"></div>
            <div className="flex flex-col items-center flex-1 text-center min-w-[100px]">
              <Clock className="w-6 h-6 text-[#d4af37] mb-2" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                Cook Time
              </span>
              <span className="text-stone-800 font-serif font-semibold mt-1">
                {recipeInfo.cookingTime}
              </span>
            </div>
            <div className="hidden md:block w-px h-12 bg-stone-200"></div>
            <div className="flex flex-col items-center flex-1 text-center min-w-[100px]">
              <ChefHat className="w-6 h-6 text-[#d4af37] mb-2" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                Difficulty
              </span>
              <span className="text-stone-800 font-serif font-semibold mt-1">
                {recipeInfo.difficulty}
              </span>
            </div>
            <div className="hidden md:block w-px h-12 bg-stone-200"></div>
            <div className="flex flex-col items-center flex-1 text-center min-w-[100px]">
              <Users className="w-6 h-6 text-[#d4af37] mb-2" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                Servings
              </span>
              <span className="text-stone-800 font-serif font-semibold mt-1">
                {recipeInfo.servings}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Ingredients Column */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-8 border-b border-stone-200 pb-4">
              Ingredients
            </h2>
            <div className="space-y-6 md:space-y-10 sticky top-12">
              {ingredientGroups &&
                ingredientGroups.map((group: IngredientGroup, idx: number) => (
                  <div key={idx}>
                    {group.title && (
                      <h3 className="text-lg font-bold text-[#1b4b36] mb-4 uppercase tracking-widest">
                        {group.title}
                      </h3>
                    )}
                    <ul className="space-y-4">
                      {group.ingredients.map((ing: Ingredient, i: number) => (
                        <li
                          key={i}
                          className="flex justify-between items-center py-1.5 md:py-2 border-b border-stone-200/50"
                        >
                          <span className="text-stone-700 text-sm md:text-base">{ing.name}</span>
                          <span className="font-semibold text-stone-900 text-right ml-4 shrink-0 text-sm md:text-base">
                            {ing.quantity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>

          {/* Instructions Column */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-8 border-b border-stone-200 pb-4">
              Instructions
            </h2>
            <div className="space-y-8 md:space-y-12">
              {steps &&
                steps.map((step: Step, idx: number) => (
                  <div key={idx} className="relative">
                    <h3 className="text-lg md:text-2xl font-serif font-bold text-[#1b4b36] mb-3 md:mb-4 flex items-start">
                      <span className="text-[#d4af37] mr-3 md:mr-4">{idx + 1}.</span>{" "}
                      {step.title.replace(/^\d+\.\s*/, "")}
                    </h3>
                    <div className="pl-8 md:pl-10">
                      <p className="text-base md:text-lg text-stone-600 leading-snug md:leading-relaxed mb-3 md:mb-4">
                        {step.description}
                      </p>

                      {step.instructions && (
                        <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-stone-100 shadow-sm">
                          {step.instructions.map((inst: string, i: number) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#d4af37] mr-2 md:mr-3 shrink-0 mt-0.5" />
                              <span className="text-stone-700 text-sm md:text-base">{inst}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {step.tip && (
                        <div className="bg-[#1b4b36]/5 border-l-4 border-[#1b4b36] p-4 rounded-r-lg flex gap-3">
                          <Info className="w-5 h-5 text-[#1b4b36] shrink-0" />
                          <p className="text-sm font-semibold text-stone-700 italic">
                            {step.tip}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Closing & Author Links */}
        <div className="mt-20 pt-16 border-t border-stone-200 max-w-4xl mx-auto text-center">
          {content.closing && (
            <p className="text-2xl font-serif font-bold text-stone-800 italic mb-10 leading-snug md:leading-relaxed">
              &quot;{content.closing}&quot;
            </p>
          )}
          {content.links && (
            <div className="flex flex-wrap justify-center gap-6">
              {content.links.author && (
                  <a
                  href={content.links.author}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 md:px-8 md:py-4 bg-white border-2 border-stone-200 hover:border-[#1b4b36] text-stone-800 font-bold rounded-full transition-all shadow-sm text-sm md:text-base"
                >
                  Follow {recipe.author}
                </a>
              )}
              {content.links.video && (
                <ShinyButton className="bg-[#1b4b36] hover:bg-[#113123] text-white font-bold rounded-full ">
                <a
                  href={content.links.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  Watch on YouTube
                </a>
                </ShinyButton>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
