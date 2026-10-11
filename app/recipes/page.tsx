"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { websiteData } from "@/data/websiteData";
import { ArrowRight } from "lucide-react";

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
        <div className="w-full text-right md:text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl md:text-5xl font-serif font-bold text-stone-800 uppercase tracking-wide mb-4">
            {title}
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] ml-auto mr-0 md:mx-auto mb-6"></div>
          
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

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {filteredItems.map((recipe) => (
            <Link
              href={`/recipes/${recipe.slug}`}
              key={recipe.id}
              className="bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-xl transition-shadow group flex flex-row md:flex-col cursor-pointer"
            >
              <div className="w-2/5 h-36 md:w-full md:h-40 aspect-square bg-stone-100 relative group-hover:scale-105 transition-transform duration-500 overflow-hidden shrink-0">
                {recipe.image ? (
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-stone-300 text-xs md:text-sm italic font-serif">
                    [Recipe Image]
                  </div>
                )}

                <div className="absolute top-2 left-2 md:top-4 md:right-4 md:left-auto bg-[#d4af37] text-white text-[8px] md:text-[10px] font-bold uppercase tracking-widest px-2 md:px-3 py-0.5 md:py-1 rounded-full z-10 shadow-sm">
                  {recipe.tags?.[0] || "Recipe"}
                </div>
              </div>

              <div className="p-3.5 md:p-6 flex flex-col justify-center md:justify-start flex-1 relative z-10 bg-white">
                <p className="text-[9px] md:text-[10px] text-[#d4af37] font-bold uppercase tracking-widest mb-1 md:mb-2">
                  By {recipe.author}
                </p>
                <h3 className="font-bold text-stone-800 text-sm md:text-base mb-1.5 md:mb-2 leading-tight h-auto md:h-12 line-clamp-2">
                  {recipe.title}
                </h3>
                <p className="text-[11px] md:text-xs text-stone-500 line-clamp-2 mb-3 leading-relaxed">
                  {recipe.description}
                </p>
                <div className="flex items-center gap-1.5 md:gap-2 text-[11px] md:text-xs font-bold uppercase tracking-widest text-[#1b4b36] group-hover:text-[#d4af37] transition-colors mt-auto">
                  <span>Read Recipe</span>
                  <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
