"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";

type Topic = {
  id: string;
  title: string;
  slug: string;
  image: string;
  category: string;
  description: string;
};

export default function HealthTopicsGrid({ topics }: { topics: Topic[] }) {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  // Close modal on escape key
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedTopic(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="flex flex-col group cursor-pointer hover:-translate-y-1 relative bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300"
            onClick={() => setSelectedTopic(topic)}
          >
            {/* Image Container with subtle gradient overlay */}
            <div className="relative h-44 w-full overflow-hidden bg-stone-50">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image
                src={topic.image}
                alt={topic.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Floating Action Button inside image */}
              <div className="absolute bottom-4 right-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-stone-900 hover:bg-[#d4af37] hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow items-start justify-between bg-white relative z-20">
            
              <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug tracking-normal">
                {topic.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modern Modal / Popup */}
      {selectedTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedTopic(null)}
          ></div>
          <div className="relative bg-white rounded-[32px] p-8 md:p-12 w-full max-w-lg shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] animate-in fade-in zoom-in duration-300 ease-out text-center overflow-hidden">
            {/* Abstract background shape in modal */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <button
              onClick={() => setSelectedTopic(null)}
              className="absolute top-6 right-6 p-2.5 text-stone-400 hover:text-stone-900 bg-stone-50 hover:bg-stone-100 transition-colors rounded-full z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="relative h-28 w-28 mx-auto mb-8 rounded-[24px] overflow-hidden shadow-lg rotate-3">
              <Image
                src={selectedTopic.image}
                alt={selectedTopic.title}
                fill
                className="object-cover"
              />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-4 tracking-normal">
              {selectedTopic.title}
            </h3>
            
            <div className="w-12 h-1.5 bg-[#d4af37] mx-auto mb-6 rounded-full opacity-80"></div>
            
            <p className="text-stone-600 leading-relaxed text-base md:text-lg font-medium">
              {selectedTopic.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
