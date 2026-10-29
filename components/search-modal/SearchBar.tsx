"use client";

import React from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  query: string;
  setQuery: (q: string) => void;
  onSearchSubmit: (q: string) => void;
  onClose: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

export default function SearchBar({
  query,
  setQuery,
  onSearchSubmit,
  onClose,
  inputRef,
}: SearchBarProps) {
  return (
    <div className="relative flex items-center gap-3 px-4 sm:px-6 py-3.5 sm:py-4 border-b border-stone-200/80 bg-white/90">
      {/* Bordered Search Input Box */}
      <div className="flex-1 flex items-center gap-2.5 px-3.5 py-2 sm:py-2.5 bg-stone-50/80 hover:bg-stone-50 focus-within:bg-white border border-stone-300 focus-within:border-[#172d1f] focus-within:ring-2 focus-within:ring-[#172d1f]/15 rounded-xl transition-all shadow-xs">
        <Search className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-stone-400 shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && query.trim()) {
              onSearchSubmit(query);
            }
          }}
          placeholder="Search cardamom grade (Purple, Pink, 8mm, Green), recipes..."
          className="flex-1 bg-transparent text-sm sm:text-base text-stone-900 placeholder-stone-400 font-medium focus:outline-none min-w-0"
        />

        {query ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors cursor-pointer shrink-0"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        ) : null}
      </div>

      {/* Escape Button */}
      <button
        type="button"
        onClick={onClose}
        className="px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs font-semibold text-stone-500 hover:text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200/80 rounded-lg sm:rounded-xl transition-colors cursor-pointer shrink-0"
        aria-label="Close search dialog"
      >
        Esc
      </button>
    </div>
  );
}

