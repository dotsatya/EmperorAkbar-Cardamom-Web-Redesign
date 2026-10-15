import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { websiteData } from "@/data/websiteData";

export default function CSRPage() {
  const { csr } = websiteData;

  return (
    <div className="font-sans bg-[#f9f8f6] min-h-screen flex flex-col">
      <main className="flex-1 pt-10 md:pt-16 pb-20 px-6 max-w-7xl mx-auto w-full">
        <div className="w-full text-right md:text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 uppercase tracking-wide mb-4">
            {csr.title}
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] ml-auto mr-0 md:mx-auto "></div>
        </div>

        <div className="space-y-12">
        {csr.sections.map((section, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div key={section.id} className="bg-white p-6 md:p-12 rounded-2xl md:rounded-[2rem] border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300">
              {/* Title appears first */}
              <h2 className="text-xl md:text-3xl lg:text-4xl font-serif font-bold text-[#1b4b36] mb-6 md:mb-10 text-center lg:text-left border-b border-stone-100 pb-4 md:pb-6">
                {section.title}
              </h2>

              {/* Text and Image Layout */}
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-16 items-center`}>
                
                {/* Text Description */}
                <div className="lg:w-3/5">
                  <div className="prose prose-stone text-sm md:text-base text-stone-600 mb-6 md:mb-8 leading-relaxed max-w-none">
                    {section.paragraphs.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  {section.policy && (
                    <a 
                      href={section.policy.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-[#1b4b36] hover:bg-[#113123] text-white font-bold rounded-full transition-all shadow-md mt-4 text-sm md:text-base"
                    >
                      View {section.policy.label} <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                    </a>
                  )}
                </div>

                {/* Smaller Image */}
                <div className="lg:w-2/5 w-full max-w-sm mx-auto lg:mx-0">
                  <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-lg border-4 border-[#f9f8f6]">
                    {section.image && (
                      <Image 
                        src={section.image} 
                        alt={section.title} 
                        fill 
                        className="object-cover" 
                      />
                    )}
                  </div>
                </div>
                
              </div>
            </div>
          );
        })}
        </div>
      </main>
    </div>
  );
}
