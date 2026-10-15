"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { X, ArrowRight } from "lucide-react";

interface StoryBlockProps {
  title: string;
  paragraphs: string[];
  image?: StaticImageData | string | null;
  reverse?: boolean;
  index?: number;
}

export default function StoryBlock({
  title,
  paragraphs,
  image,
  reverse,
  index = 0,
}: StoryBlockProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const badgeText = index === 0 ? "Heritage" : "Innovation";
  const chapterText = `Chapter 0${index + 1}`;

  return (
    <>
      {!image ? (
        <div
          onClick={handleReadMore}
          className="bg-white rounded-2xl md:rounded-3xl border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300 p-5 sm:p-6 md:p-8 lg:p-10 cursor-pointer group flex flex-col justify-center"
        >
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <p className="text-[9px] md:text-[10px] text-[#d4af37] font-bold uppercase tracking-widest">
              Our Story &bull; {chapterText}
            </p>
            <span className="bg-[#d4af37] text-white text-[8px] md:text-[10px] font-bold uppercase tracking-widest px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-sm">
              {badgeText}
            </span>
          </div>

          <h2 className="font-serif font-bold text-stone-800 text-base sm:text-lg md:text-2xl lg:text-3xl mb-2 sm:mb-3 leading-tight group-hover:text-[#1b4b36] transition-colors">
            {title}
          </h2>

          <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-stone-500 line-clamp-3 md:line-clamp-4 leading-relaxed mb-4">
            {paragraphs[0]}
          </p>

          <div className="flex items-center gap-1.5 md:gap-2 text-[11px] md:text-xs font-bold uppercase tracking-widest text-[#d4af37] group-hover:text-[#1b4b36] transition-colors mt-auto w-max">
            <span>Read Full Story</span>
            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      ) : (
        <div
          onClick={handleReadMore}
          className={`bg-white rounded-2xl md:rounded-3xl border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-row ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          } overflow-hidden cursor-pointer group items-stretch md:h-60 lg:h-72`}
        >
          {/* Left Thumbnail: Perfectly matching card height */}
          <div className="w-2/5 lg:w-2/7 h-full min-h-[140px] aspect-square md:aspect-auto bg-stone-100 relative group-hover:scale-105 transition-transform duration-500 overflow-hidden shrink-0 self-stretch">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />

            <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-[#d4af37] text-white text-[8px] md:text-[10px] font-bold uppercase tracking-widest px-2 sm:px-3 py-0.5 sm:py-1 rounded-full z-10 shadow-sm">
              {badgeText}
            </div>
          </div>

          {/* Right Details: Vertically centered within card height */}
          <div className="p-3.5 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-center flex-1 relative z-10 bg-white overflow-hidden">
            <p className="text-[9px] md:text-[10px] text-[#d4af37] font-bold uppercase tracking-widest mb-1 sm:mb-1.5">
              Our Story &bull; {chapterText}
            </p>

            <h2 className="font-serif font-bold text-stone-800 text-sm sm:text-base md:text-xl lg:text-2xl mb-1 sm:mb-2 leading-tight line-clamp-2 group-hover:text-[#1b4b36] transition-colors">
              {title}
            </h2>

            <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-stone-500 line-clamp-2 md:line-clamp-3 lg:line-clamp-4 mb-2 md:mb-3 leading-relaxed flex-1">
              {paragraphs[0]}
            </p>

            <div className="flex items-center gap-1.5 md:gap-2 text-[11px] md:text-xs font-bold uppercase tracking-widest text-[#d4af37] group-hover:text-[#1b4b36] transition-colors mt-auto w-max">
              <span>Read Full Story</span>
              <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      )}

      {/* Modal / Popup for Full Story */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
        >
          {/* Backdrop */}
          <div
            aria-hidden="true"
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={handleClose}
          />

          {/* Modal Box */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl flex flex-col max-h-[90vh] z-10">
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 p-2 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors text-stone-500 hover:text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-400"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Content */}
            <div className="w-full p-8 md:p-12 overflow-y-auto">
              <h3
                id="modal-title"
                className="text-2xl md:text-3xl font-serif font-bold text-[#1b4b36] mb-6 leading-tight pr-10"
              >
                {title}
              </h3>

              <div className="space-y-5 text-stone-600 leading-snug md:leading-relaxed text-base md:text-lg">
                {paragraphs?.map((p, i) => (
                  <p key={typeof p === "string" ? `${i}-${p.slice(0, 15)}` : i}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
