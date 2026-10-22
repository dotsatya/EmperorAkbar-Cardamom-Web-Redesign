"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface RecipeItem {
  id: string;
  title: string;
  slug?: string;
  author?: string;
  description?: string;
  url?: string;
  image?: string | StaticImageData;
  tags?: string[];
  content?: {
    introduction?: string[];
  };
}

interface RecipeCardProps {
  recipe: RecipeItem;
  className?: string;
  onClick?: () => void;
}

function formatTag(tag?: string): string {
  if (!tag) return "Signature";
  return tag
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export default function RecipeCard({ recipe, className = "", onClick }: RecipeCardProps) {
  const displayTitle = recipe.title.split(" by ")[0];
  const displayTag = formatTag(recipe.tags?.[0]);
  const authorName = recipe.author || "Shimi’s Kitchen";
  const href = recipe.slug ? `/recipes/${recipe.slug}` : "/recipes";

  const cardContent = (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-1 h-full ${className}`}
    >
      {/* Recipe Image Container */}
      <div className="w-full h-40 aspect-[4/3] bg-stone-100 rounded-xl sm:rounded-2xl mb-3.5 sm:mb-4 flex items-center justify-center relative overflow-hidden shrink-0">
        {/* Top Gold Accent Bar */}
        <div className="absolute inset-x-0 top-0 h-1.5 sm:h-2 bg-[#d4af37] z-20" />

        {/* Top-Left Category Badge */}
        <div className="absolute top-2 left-2 bg-[#d4af37] text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full z-30 shadow-xs">
          Recipe
        </div>

        {recipe.image ? (
          <Image
            src={recipe.image}
            alt={recipe.title}
            title={recipe.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-stone-300 font-serif text-xs">
            Recipe Image
          </div>
        )}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
      </div>

      {/* Recipe Details */}
      <div className="flex flex-col flex-1">
        <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#d4af37] font-bold block mb-1">
          By {authorName}
        </span>

        <h3 className="font-serif font-bold  sm:text-lg text-stone-900 leading-snug group-hover:text-[#d4af37] transition-colors mb-1.5 sm:mb-2 line-clamp-1">
          {displayTitle}
        </h3>

        <p className="text-[11px] sm:text-xs text-stone-500 line-clamp-2 leading-relaxed mb-2 flex-1">
          {recipe.description}
        </p>

        {/* Footer Meta Row */}
        <div className="mt-auto flex items-center justify-between pt-2 border-t border-stone-100">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
            <span className="text-[11px] sm:text-xs text-stone-600 font-medium truncate max-w-[130px]">
              {displayTag}
            </span>
          </div>

          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#d4af37] text-white flex items-center justify-center shadow-md group-hover:bg-[#172d1f] group-hover:scale-105 transition-all duration-300 shrink-0">
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );

  if (onClick) {
    return cardContent;
  }

  return (
    <Link
      href={href}
      aria-label={`View recipe: ${displayTitle}`}
      className="block h-full"
    >
      {cardContent}
    </Link>
  );
}
