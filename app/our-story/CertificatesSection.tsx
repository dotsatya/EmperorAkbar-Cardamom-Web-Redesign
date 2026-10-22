"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { X, ArrowRight } from "lucide-react";

interface CertificateItem {
  id: string;
  category: string;
  title: string;
  description: string;
  paragraphs?: string[];
  image: StaticImageData;
  link?: string;
}

interface CertificatesData {
  title: string;
  subtitle: string;
  description: string;
  filters: string[];
  items: CertificateItem[];
}

export default function CertificatesSection({ data }: { data: CertificatesData }) {
  const [activeFilter, setActiveFilter] = useState("All Credentials");
  const [selectedItem, setSelectedItem] = useState<CertificateItem | null>(null);

  const filteredItems =
    activeFilter === "All Credentials"
      ? data.items
      : data.items.filter((item) =>
          item.category.toLowerCase().includes(activeFilter.toLowerCase().replace(" recognition", "").replace(" certification", "").replace(" achievement", ""))
        );

  return (
    <section className="w-full bg-[#eef0e5] pt-10 md:pt-16 pb-16 md:pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-900/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="w-full text-right md:text-center mb-8 md:mb-12">
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#a48135] uppercase mb-2">
            {data.subtitle}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-3 md:mb-4">
            {data.title}
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] ml-auto mr-0 md:mx-auto mb-4"></div>
          <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl ml-auto md:mx-auto">
            {data.description}
          </p>
        </div>

        {/* Scrollable filters on mobile, centered wrapped on desktop */}
        <div className="flex md:flex-wrap md:justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 mb-8 md:mb-12">
          {data.filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full border text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap shrink-0 ${
                activeFilter === filter
                  ? "bg-[#1b4b36] text-white border-[#1b4b36] shadow-sm"
                  : "border-stone-200 bg-white text-stone-600 hover:bg-[#d4af37] hover:text-white hover:border-[#d4af37]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 2-column horizontal card grid on tablet/desktop, 1-col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-row cursor-pointer"
            >
              {/* 40% Thumbnail */}
              <div className="w-2/5 aspect-square bg-[#faf9f6] relative group-hover:scale-105 transition-transform duration-500 overflow-hidden shrink-0 flex items-center justify-center p-2.5 sm:p-4 border-r border-stone-100">
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    title={item.title}
                    fill
                    className="object-contain drop-shadow-sm mix-blend-multiply"
                  />
                </div>
                <div className="absolute top-2 left-2 bg-[#d4af37] text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-widest px-2 sm:px-3 py-0.5 sm:py-1 rounded-full z-10 shadow-sm">
                  {item.category.replace(" Recognition", "").replace(" Certification", "").replace(" Achievement", "")}
                </div>
              </div>

              {/* Right Content */}
              <div className="p-3.5 sm:p-5 md:p-6 flex flex-col justify-center flex-1 relative z-10 bg-white">
                <p className="text-[9px] sm:text-[10px] text-[#d4af37] font-bold uppercase tracking-widest mb-1 sm:mb-1.5">
                  {item.category} &bull; Emperor Akbar
                </p>
                <h3 className="font-serif font-bold text-stone-800 text-sm sm:text-base md:text-xl mb-1.5 sm:mb-2 leading-tight line-clamp-2 group-hover:text-[#1b4b36] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-stone-500 line-clamp-2 mb-2 sm:mb-3 leading-relaxed flex-1">
                  {item.description}
                </p>
                <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#d4af37] group-hover:text-[#1b4b36] transition-colors mt-auto w-max">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Popup */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 opacity-100 transition-opacity duration-300">
          <div 
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm cursor-pointer" 
            onClick={() => setSelectedItem(null)}
          ></div>
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row max-h-[90vh]">
            <button 
              onClick={() => setSelectedItem(null)} 
              className="absolute top-4 right-4 z-10 p-2 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors text-stone-500 hover:text-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Modal Left: Image */}
            <div className="w-full md:w-1/2 bg-[#faf9f6] p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-stone-100">
              <div className="relative w-full aspect-square md:aspect-auto md:h-full max-h-[50vh] md:max-h-[70vh]">
                 <Image 
                   src={selectedItem.image} 
                   alt={selectedItem.title} 
                   title={selectedItem.title}
                   fill
                   className="object-contain drop-shadow-xl p-4" 
                 />
              </div>
            </div>
            
            {/* Modal Right: Content */}
            <div className="w-full md:w-1/2 p-8 overflow-y-auto">
              <span className="text-sm font-bold tracking-widest text-[#a48135] uppercase mb-4 block">
                {selectedItem.category}
              </span>
              <h3 className="text-3xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                {selectedItem.title}
              </h3>
              
              <div className="space-y-5 text-stone-600 leading-snug md:leading-relaxed text-base md:text-lg">
                {selectedItem.paragraphs ? (
                  selectedItem.paragraphs.map((p, i) => <p key={i}>{p}</p>)
                ) : (
                  <p>{selectedItem.description}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
