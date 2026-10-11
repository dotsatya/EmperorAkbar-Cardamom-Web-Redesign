"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ArrowRight, X } from "lucide-react";

interface RecipeItem {
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

interface RecipeData {
  title?: string;
  tags?: string[];
  items: RecipeItem[];
}

export default function RecipesSection({ recipeData }: { recipeData: RecipeData }) {
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeItem | null>(null);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-24 px-4 sm:px-6 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[#d4af37] font-bold tracking-widest text-xs uppercase mb-2 block">
              FLAVOURS THAT BRING PEOPLE TOGETHER
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-stone-800 uppercase tracking-wide">
              What will you create with it?
            </h2>
          </div>
          <Link href="/recipes">
            <button className="text-stone-900 border-b border-stone-900 pb-1 font-bold tracking-widest text-xs uppercase flex items-center gap-2 hover:text-[#172d1f] hover:border-[#172d1f]">
              EXPLORE ALL RECIPES <ArrowRight className="w-3 h-3" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {recipeData.items.slice(0, 4).map((recipe: RecipeItem, idx: number) => (
            <div 
              key={idx} 
              className="bg-black/4 rounded-2xl p-3 sm:p-5 border border-stone-200 hover:shadow-xl transition-all duration-300 flex flex-row sm:flex-col group cursor-pointer gap-4 sm:gap-0"
              onClick={() => setSelectedRecipe(recipe)}
            >
              {/* Image Container: w-2/5 on smartphone, full width on desktop */}
              <div className="w-2/5 sm:w-full aspect-square sm:aspect-[4/3] bg-stone-100 rounded-xl mb-0 sm:mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] sm:group-hover:scale-105 transition-transform duration-500 shrink-0">
                <div className="absolute inset-x-0 top-0 h-1.5 sm:h-2 bg-[#d4af37] z-20" />
                
                <div className="absolute top-2 left-2 bg-[#d4af37] text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full z-30 shadow-sm">
                  Recipe
                </div>

                {recipe.image ? (
                  <Image 
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-stone-300 font-serif text-xs">
                    Recipe Image
                  </div>
                )}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-1 justify-center sm:justify-start">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#d4af37] font-bold block mb-1">
                  By {recipe.author}
                </span>

                <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900 leading-snug group-hover:text-[#d4af37] transition-colors mb-1 sm:mb-2 line-clamp-2">
                  {recipe.title.split(" by ")[0]}
                </h3>

                <p className="text-[11px] sm:text-xs text-stone-500 line-clamp-2 mb-2 sm:mb-4 leading-relaxed">
                  {recipe.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-1 sm:pt-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <span className="text-[10px] sm:text-xs text-stone-500 font-medium capitalize">
                      {recipe.tags?.[0] || "Signature"}
                    </span>
                  </div>

                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#d4af37] text-white flex items-center justify-center shadow-md group-hover:bg-[#172d1f] group-hover:scale-105 transition-all duration-300 shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedRecipe(null)}>
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedRecipe(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur rounded-full p-2 text-stone-800 hover:bg-[#d4af37] hover:text-white transition-colors shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="w-full relative h-64 sm:h-80 bg-stone-100 shrink-0">
              {selectedRecipe.image ? (
                <Image 
                  src={selectedRecipe.image}
                  alt={selectedRecipe.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-stone-300 italic font-serif">
                  [Recipe Image]
                </div>
              )}
            </div>
            
            <div className="w-full p-8 md:p-10 overflow-y-auto scrollbar-hide">
              <p className="text-xs text-[#d4af37] font-bold uppercase tracking-widest mb-2">By {selectedRecipe.author}</p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-800 mb-6">{selectedRecipe.title}</h2>
              <div className="prose prose-stone max-w-none">
                <p className="text-stone-600 leading-relaxed whitespace-pre-wrap">
                  {selectedRecipe.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
