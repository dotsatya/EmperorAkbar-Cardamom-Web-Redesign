"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Utensils, ArrowRight } from "lucide-react";
import { websiteData } from "@/data/websiteData";

type RecipeItem = (typeof websiteData.recipes.items)[number];

interface RecipeResultsSectionProps {
  recipes: RecipeItem[];
  query: string;
  onSelectRecipe: (title: string) => void;
}

export default function RecipeResultsSection({
  recipes,
  query,
  onSelectRecipe,
}: RecipeResultsSectionProps) {
  if (recipes.length === 0) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
          <Utensils className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Cardamom Recipes ({recipes.length})</span>
        </h3>
        <Link
          href="/recipes"
          onClick={() => onSelectRecipe(query || "Recipes")}
          className="text-xs font-semibold text-[#172d1f] hover:underline flex items-center gap-1"
        >
          <span>All Recipes</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {recipes.slice(0, 4).map((recipe) => (
          <Link
            key={recipe.id}
            href={recipe.url}
            onClick={() => onSelectRecipe(recipe.title)}
            className="p-3 rounded-2xl border border-stone-200/90 bg-white hover:border-[#172d1f]/40 hover:shadow-md transition-all duration-200 flex items-center gap-3 group"
          >
            {recipe.image && (
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-stone-100">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-stone-900 group-hover:text-[#172d1f] truncate">
                {recipe.title}
              </h4>
              <p className="text-[11px] text-stone-500 line-clamp-1">
                {recipe.tags?.slice(0, 2).join(" • ")}
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-black group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}

