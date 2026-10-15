"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useCart } from "@/components/CartProvider";

export const gradeColors: Record<string, string> = {
  Purple: "#6b2c58",
  Pink: "#ec4899",
  Green: "#16a34a",
  Orange: "#ea580c",
  Red: "#dc2626",
};

export interface ProductItem {
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
  url?: string;
  usage?: string;
}

interface ProductCardProps {
  product: ProductItem;
  className?: string;
}

export default function ProductCard({ product, className = "" }: ProductCardProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const images = product.images || [];
  const hasImages = images.length > 0;
  const isCarousel = images.length > 1;
  const gradeColor = gradeColors[product.grade] || "#1b4b36";

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

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Extract image URL properly whether it's a string or StaticImageData
    let imageUrl = "";
    if (product.image) {
      imageUrl = typeof product.image === "string" ? product.image : product.image.src;
    } else if (hasImages) {
      const firstImage = images[0].src;
      imageUrl = typeof firstImage === "string" ? firstImage : (firstImage as StaticImageData).src;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: imageUrl,
      weight: "100 gm", // Default weight for cards
      quantity: 1,
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <Link
      href={`/product/${product.id}`}
      className={`bg-white rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-row group cursor-pointer gap-3.5 sm:gap-4 md:gap-5 ${className}`}
    >
      {/* Product Image Thumbnail */}
      <div className="w-2/5 aspect-square bg-stone-50 rounded-xl sm:rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:scale-[1.03] transition-transform duration-500 shrink-0">
        {/* Top Grade Color Accent Bar */}
        <div
          className="absolute inset-x-0 top-0 h-1.5 z-20"
          style={{ backgroundColor: gradeColor }}
        />

        {/* Status Badges */}
        {product.status === "sold-out" && (
          <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-red-500 text-white text-[8px] md:text-[10px] font-bold uppercase tracking-widest px-2 md:px-2.5 py-0.5 md:py-1 rounded-full z-30 shadow-sm">
            Sold Out
          </div>
        )}
        {product.status === "sale" && (
          <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-[#d4af37] text-white text-[8px] md:text-[10px] font-bold uppercase tracking-widest px-2 md:px-2.5 py-0.5 md:py-1 rounded-full z-30 shadow-sm">
            Sale
          </div>
        )}

        {/* Main Image or Carousel */}
        {hasImages ? (
          <>
            <Image
              src={images[currentIdx].src}
              alt={`${product.grade} Grade`}
              fill
              className="object-cover mix-blend-multiply p-1 sm:p-2"
            />
            {isCarousel && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={prevImage}
                  className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-800 shadow-sm hover:bg-white transition-colors z-20 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={nextImage}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-800 shadow-sm hover:bg-white transition-colors z-20 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                {/* Dots indicator */}
                <div className="absolute bottom-2 md:bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  {images.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === currentIdx ? "bg-stone-800 w-2.5" : "bg-stone-300 w-1.5"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <span className="text-stone-300 text-xs sm:text-sm font-serif z-10">
            Pack Image
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1 justify-between min-w-0 py-0.5">
        <div>
          <h3
            className="font-bold text-xs sm:text-sm md:text-base uppercase tracking-wide mb-0.5 sm:mb-1 truncate"
            style={{ color: gradeColor }}
          >
            {product.grade} Grade
          </h3>
          <p className="text-[11px] sm:text-xs text-stone-400 tracking-wider mb-2">
            {product.size}
          </p>
        </div>

        {/* Price & Add to Cart Action */}
        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <div>
            <div className="flex items-baseline gap-1.5 sm:gap-2">
              <span className="font-serif font-bold text-base sm:text-lg md:text-xl text-stone-900">
                ₹{product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-[11px] sm:text-xs md:text-sm text-stone-400 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            <p className="text-[10px] text-stone-400 font-medium">(100g)</p>
          </div>

          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            onClick={handleAddToCart}
            className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-md z-10 shrink-0 ${
              isAdded
                ? "bg-[#172d1f] text-white scale-105"
                : "bg-[#d4af37] text-white hover:bg-[#b5952f] active:scale-95"
            }`}
          >
            {isAdded ? (
              <Check className="w-4 h-4 md:w-5 md:h-5" />
            ) : (
              <span className="text-lg md:text-xl font-light leading-none">+</span>
            )}
          </button>
        </div>
      </div>
    </Link>
  );
}
