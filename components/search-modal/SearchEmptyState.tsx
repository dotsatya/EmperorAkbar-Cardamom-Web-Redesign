"use client";

import React from "react";
import { Search } from "lucide-react";

export default function SearchEmptyState() {
  return (
    <div className="p-10 text-center flex flex-col items-center justify-center">
      <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-3">
        <Search className="w-6 h-6" />
      </div>
      <p className="text-sm font-bold text-stone-800">
        No matching grades or products found
      </p>
      <p className="text-xs text-stone-500 mt-1 max-w-sm">
        Try searching for &quot;Purple&quot;, &quot;Pink&quot;, &quot;Green&quot;,
        &quot;Orange&quot;, &quot;Red&quot;, or pod sizes like &quot;8mm&quot;.
      </p>
    </div>
  );
}

