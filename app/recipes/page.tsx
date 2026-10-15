"use client";

import React, { useState } from "react";
import { websiteData } from "@/data/websiteData";
import RecipeCard from "@/components/RecipeCard";

export default function RecipesPage() {
  const { title, tags, items } = websiteData.recipes;
  const [activeTag, setActiveTag] = useState("All");

  const filteredItems =
    activeTag === "All"
      ? items
      : items.filter((item) =>
          item.tags
            ? item.tags.some(
                (t: string) => t.toLowerCase() === activeTag.toLowerCase(),
              )
            : true,
        );

  return (
    <div className="font-sans bg-bg-primary min-h-screen flex flex-col">
      <main className="flex-1 pt-10 md:pt-16 pb-20 px-4 md:px-6 max-w-7xl mx-auto w-full">
        <div className="w-full text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl md:text-5xl font-serif font-bold text-stone-800 uppercase tracking-wide mb-4">
            {title}
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          
          {/* Scrollable tags on mobile, wrapped on tablet/desktop */}
          <div className="flex md:flex-wrap md:justify-center gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3.5 py-1.5 md:px-4 md:py-2 rounded-full border text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap shrink-0 ${
                  activeTag === tag
                    ? "bg-[#172d1f] text-white border-[#172d1f] shadow-sm"
                    : "border-stone-200 bg-white text-stone-600 hover:bg-[#d4af37] hover:text-white hover:border-[#d4af37]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
    </div>
  );
}
