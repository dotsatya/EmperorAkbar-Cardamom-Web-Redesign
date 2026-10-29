"use client";

import React from "react";

export default function SearchFooter() {
  return (
    <div className="px-4 sm:px-6 py-2.5 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
      <div className="flex items-center gap-1.5">
        <span className="font-semibold text-stone-700">Quick tip:</span>
        <span>Cardamoms are graded by pod diameter, not length.</span>
      </div>
      <span className="hidden sm:inline font-medium text-stone-400">
        Press{" "}
        <kbd className="px-1.5 py-0.5 bg-white border border-stone-200 rounded text-[10px] font-mono">
          Esc
        </kbd>{" "}
        to close
      </span>
    </div>
  );
}

