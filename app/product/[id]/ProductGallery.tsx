"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface ProductGalleryProps {
  images: { id: number; src: StaticImageData | string }[];
  productName: string;
  productStatus: string;
}

export default function ProductGallery({
  images,
  productName,
  productStatus,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="w-full lg:w-[55%] flex flex-col-reverse md:flex-row gap-4 md:gap-6">
      {/* Thumbnail Gallery (Vertical on Desktop, Horizontal on Mobile) */}
      {images.length > 1 && (
        <div className="flex md:flex-col gap-3 md:gap-3 overflow-x-auto md:overflow-y-auto pb-4 md:pb-0 md:pr-2 scrollbar-hide md:w-24 shrink-0 -mx-4 px-4 md:mx-0 md:px-0">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`w-20 h-20 md:w-20 md:h-20 shrink-0 rounded-2xl border transition-all duration-300 ease-out ${
                idx === selectedImage
                  ? "border-[#c59d5f] bg-white shadow-[0_4px_12px_rgba(197,157,95,0.3)] scale-[1.05]"
                  : "border-white/60 bg-white/40 hover:bg-white/80 hover:scale-[1.02] shadow-sm"
              } overflow-hidden relative cursor-pointer backdrop-blur-md`}
            >
              <Image
                src={img.src}
                alt={`${productName} thumbnail ${idx + 1}`}
                title={`${productName} - Thumbnail ${idx + 1}`}
                fill
                className={`object-cover transition-transform duration-500 ${
                  idx === selectedImage ? "scale-110" : "hover:scale-110"
                }`}
              />
            </div>
          ))}
        </div>
      )}

      {/* Main Image Stage - Now always a perfect square */}
      <div className="flex-1 w-full h-120 aspect-square bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-2xl rounded-3xl   border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden relative flex items-center justify-center group transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)]">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#c59d5f]/15 to-transparent opacity-50 mix-blend-overlay"></div>

        {images.length > 0 ? (
          <Image
            src={images[selectedImage]?.src || images[0].src}
            alt={productName}
            title={productName}
            fill
            // Note: Use 'object-cover' here instead of 'object-contain' if you want the image to stretch and completely fill the square without ANY empty background space.
            className="object-contain  mix-blend-multiply group-hover:scale-[1.05] transition-transform duration-700 ease-out z-10"
            priority
          />
        ) : (
          <span className="text-stone-400 font-serif italic z-10">
            Image Placeholder
          </span>
        )}

        {productStatus === "sold-out" && (
          <div className="absolute top-6 right-6 bg-red-500/95 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full z-20 shadow-lg border border-red-400/50">
            Sold Out
          </div>
        )}
      </div>
    </div>
  );
}
