"use client";

import React from "react";
import { Clock, X } from "lucide-react";

interface RecentlySearchedProps {
  recentSearches: string[] | readonly string[];
  onApplySearch: (term: string) => void;
  onRemoveSearch: (term: string) => void;
  onClearAll: () => void;
}

export default function RecentlySearched({
  recentSearches,
  onApplySearch,
  onRemoveSearch,
  onClearAll,
}: RecentlySearchedProps) {
  if (!recentSearches || recentSearches.length === 0) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5 text-xs font-bold text-stone-500 uppercase tracking-wider">
          <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Recently Searched</span>
        </div>
        <button
          type="button"
          onClick={onClearAll}
          className="text-[11px] font-semibold text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
        >
          Clear all
        </button>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {recentSearches.map((term) => (
          <div
            key={term}
            onClick={() => onApplySearch(term)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-[#172d1f]/10 text-stone-800 text-xs font-medium transition-all cursor-pointer group border border-stone-200/60"
          >
            <Clock className="w-3 h-3 text-stone-400 group-hover:text-[#172d1f]" />
            <span className="group-hover:text-[#172d1f] font-semibold">
              {term}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onRemoveSearch(term);
              }}
              className="ml-0.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200 rounded-full p-0.5 transition-colors cursor-pointer"
              aria-label={`Remove ${term} from recent searches`}
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

