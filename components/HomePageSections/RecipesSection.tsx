import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RecipeCard, { RecipeItem } from "@/components/RecipeCard";

interface RecipeData {
  title?: string;
  tags?: string[];
  items: RecipeItem[];
}

export default function RecipesSection({ recipeData }: { recipeData: RecipeData }) {
  return (
    <section className="bg-white py-12 sm:py-10 md:py-16 px-4 sm:px-6 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-6">
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
            <RecipeCard key={recipe.id || idx} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}
