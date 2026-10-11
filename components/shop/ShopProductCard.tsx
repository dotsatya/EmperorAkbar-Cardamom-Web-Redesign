"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  grade: string;
  size: string;
  price: number;
  originalPrice: number;
  currency: string;
  status: string;
  image: string | StaticImageData;
  images?: { id: number; src: StaticImageData | string }[];
  url: string;
  usage: string;
}

export default function ShopProductCard({ product }: { product: Product }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const images = product.images || [];

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Link
      href={`/product/${product.id}`}
      className="bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-xl transition-shadow group flex flex-row cursor-pointer"
    >
      <div className="w-2/5 aspect-square bg-stone-100 relative group-hover:scale-105 transition-transform duration-500 overflow-hidden shrink-0">
        {images.length > 0 ? (
          <>
            <Image
              src={images[currentIdx].src}
              alt={`${product.grade} Grade`}
              fill
              className="object-cover mix-blend-multiply"
            />
            {images.length > 1 && (
              <>
                <div
                  role="button"
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-800 shadow-sm hover:bg-white transition-colors z-20 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-5 h-5" />
                </div>
                <div
                  role="button"
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-800 shadow-sm hover:bg-white transition-colors z-20 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </div>
                {/* Dots indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  {images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentIdx ? "bg-stone-800" : "bg-white/60"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-stone-300 text-sm italic font-serif z-10">
            [Image]
          </div>
        )}

        {product.status === "sold-out" && (
          <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-red-500 text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-widest px-2 sm:px-3 py-1 rounded-full z-10">
            Sold Out
          </div>
        )}
        {product.status === "sale" && (
          <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-[#d4af37] text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-widest px-2 sm:px-3 py-1 rounded-full z-10">
            Sale
          </div>
        )}
      </div>
      <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-center flex-1 relative z-10 bg-white">
        <p className="text-[9px] sm:text-[10px] md:text-xs text-stone-500 font-bold uppercase tracking-widest mb-1 md:mb-1.5">
          {product.grade} Grade
        </p>
        <h3 className="font-bold text-stone-800 text-sm sm:text-base md:text-lg mb-1.5 md:mb-2 leading-tight line-clamp-2">
          {product.name}
        </h3>
        {product.usage && (
          <p className="text-xs sm:text-[13px] md:text-sm text-stone-600 mb-3 sm:mb-4 md:mb-6 font-medium line-clamp-2 md:line-clamp-3">
            {product.usage}
          </p>
        )}
        <div className="flex items-center gap-2 md:gap-3 mt-auto">
          <span className="text-base sm:text-lg md:text-xl font-serif font-bold text-stone-900">
            {product.currency} {product.price}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-xs sm:text-sm text-stone-400 line-through">
              {product.currency} {product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
