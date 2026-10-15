"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Photos } from "@/data/websiteData";
import ShinyButton from "./ShinyButton";

export default function HealthBenefitsSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const images = Photos.healthBenefits;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="px-6 max-w-7xl mx-auto my-6 md:my-12"> 
    <div className="bg-white rounded-[2rem] sm:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-stretch border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300">
      {/* Left side: Image Slider */}
      <div className="w-full lg:w-1/2 relative h-56 sm:h-80 lg:h-auto min-h-[250px] sm:min-h-[350px] lg:min-h-[450px]">
        {images.map((img, idx) => (
          <div
            key={img.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIdx ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img.src}
              alt={`Health Benefits ${idx + 1}`}
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}
        {/* Slider dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => setCurrentIdx(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-colors border ${
                idx === currentIdx
                  ? "bg-white border-white"
                  : "bg-transparent border-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right side: Content */}
      <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-12 lg:p-20 flex flex-col justify-center items-center text-center bg-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#5c7444] mb-4 sm:mb-6">
          Doctor of Spices
        </h2>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6 sm:mb-8 max-w-md">
          Cardamom has amazing medicinal properties that make it Mother
          Nature&apos;s own doctor. It is known to alleviate a host of symptoms
          and diseases. A fact that has been known since ancient times. Find out
          how cardamom can keep you and your family in the best of health...
        </p>
        <Link href="/health-benefits">
          <ShinyButton className="bg-[#ebd8bc] ">HEALTH BENEFITS</ShinyButton>
        </Link>
      </div>
    </div>
    </section>
  );
}
