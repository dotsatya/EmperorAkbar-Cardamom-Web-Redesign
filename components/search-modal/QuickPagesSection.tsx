"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, ExternalLink } from "lucide-react";
import { QuickPageItem } from "./types";

interface QuickPagesSectionProps {
  pages: QuickPageItem[];
  onSelectPage: (title: string) => void;
}

export default function QuickPagesSection({
  pages,
  onSelectPage,
}: QuickPagesSectionProps) {
  if (pages.length === 0) return null;

  return (
    <div>
      <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
        <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
        <span>Helpful Pages & Guides</span>
      </h3>

      <div className="space-y-1.5">
        {pages.map((page) => {
          const PageIcon = page.icon;
          return (
            <Link
              key={page.url}
              href={page.url}
              onClick={() => onSelectPage(page.title)}
              className="p-2.5 px-3 rounded-xl hover:bg-stone-100/80 transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#172d1f]/10 text-[#172d1f] flex items-center justify-center shrink-0">
                  <PageIcon className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900 group-hover:text-[#172d1f]">
                    {page.title}
                  </p>
                  <p className="text-[11px] text-stone-500">
                    {page.description}
                  </p>
                </div>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-700 shrink-0" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

