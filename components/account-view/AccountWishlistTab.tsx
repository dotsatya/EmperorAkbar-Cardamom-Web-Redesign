"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { websiteData } from "@/data/websiteData";

type ProductType = (typeof websiteData.shop.products)[number];

interface AccountWishlistTabProps {
  products: ProductType[];
  onAddToCart: (prod: ProductType) => void;
  formatPrice: (price: number) => string;
}

export default function AccountWishlistTab({
  products,
  onAddToCart,
  formatPrice,
}: AccountWishlistTabProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between gap-2 pb-1">
        <div>
          <h2 className="text-base sm:text-xl md:text-2xl font-bold text-stone-900 tracking-tight">
            Saved Favorites
          </h2>
          <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
            Your preferred cardamom grades for instant, one-click ordering.
          </p>
        </div>
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#172d1f] hover:text-[#d4af37] transition-colors shrink-0 group"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-stone-200/80 shadow-xs hover:border-stone-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="relative w-full aspect-square rounded-xl sm:rounded-2xl bg-white border border-stone-100 overflow-hidden mb-2.5 p-2 flex items-center justify-center shadow-2xs">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-stone-900 line-clamp-1 tracking-tight">
                {prod.name}
              </h4>
              <p className="text-[11px] sm:text-xs text-stone-400 mt-0.5 truncate font-normal">
                {prod.size}
              </p>
            </div>

            <div className="pt-2.5 sm:pt-3 border-t border-stone-100 mt-2.5 flex items-center justify-between gap-1.5">
              <span className="font-bold text-xs sm:text-sm text-stone-900 tracking-tight">
                {formatPrice(prod.price)}
              </span>
              <button
                type="button"
                onClick={() => onAddToCart(prod)}
                className="px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-stone-200/70 hover:bg-[#172d1f] text-stone-800 hover:text-white border border-stone-300/50 hover:border-transparent text-[11px] sm:text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0 shadow-2xs"
              >
                <ShoppingCart className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>Add</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
