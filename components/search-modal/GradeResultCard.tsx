"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckCircle2, ShoppingCart, Check, ArrowRight } from "lucide-react";
import { CardamomGradeItem } from "./types";

interface GradeResultCardProps {
  grade: CardamomGradeItem;
  isAdded: boolean;
  showAddToCart?: boolean;
  onAddToCart: (
    e: React.MouseEvent,
    product: NonNullable<CardamomGradeItem["product"]>
  ) => void;
  onSelectGrade: (gradeName: string) => void;
  formatPrice: (price: number) => string;
}

export default function GradeResultCard({
  grade,
  isAdded,
  showAddToCart = false,
  onAddToCart,
  onSelectGrade,
  formatPrice,
}: GradeResultCardProps) {
  const router = useRouter();
  const product = grade.product;
  const isSoldOut =
    product?.status === "sold-out" || product?.quantityAvailable === false;

  const handleCardClick = () => {
    onSelectGrade(`${grade.grade} Grade`);
    router.push(grade.url);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group p-3 sm:p-3.5 rounded-2xl border border-stone-200/90 bg-white hover:border-[#172d1f]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between gap-3 cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      {/* Picture, Name & Size */}
      <div className="flex items-center gap-3">
        {product?.image && (
          <div className="relative w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 shrink-0 overflow-hidden flex items-center justify-center">
            <Image
              src={product.image}
              alt={`${grade.grade} Grade`}
              fill
              className="object-contain p-1 group-hover:scale-105 transition-transform"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0 shadow-xs"
              style={{ backgroundColor: grade.color }}
            />
            <span className="font-bold text-sm text-stone-900 group-hover:text-[#172d1f] transition-colors truncate">
              {grade.grade} Grade
            </span>
          </div>
          <span
            className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wide ${grade.badgeBg}`}
          >
            {grade.diameter}
          </span>
        </div>
      </div>

      {/* Price, Stock availability & Action Button */}
      <div className="flex items-center justify-between pt-2.5 border-t border-stone-100 gap-2">
        {product && (
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xs sm:text-sm font-bold text-stone-900">
                {formatPrice(product.price)}
              </span>
              {isSoldOut ? (
                <span className="text-[10px] text-stone-400 font-medium">
                  (Sold out)
                </span>
              ) : (
                <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5">
                  <CheckCircle2 className="w-2.5 h-2.5" /> In Stock
                </span>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center gap-1.5 ml-auto">
          {showAddToCart ? (
            product && (
              <button
                type="button"
                disabled={isSoldOut}
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(e, product);
                }}
                className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer shadow-xs ${
                  isAdded
                    ? "bg-emerald-700 text-white scale-102"
                    : isSoldOut
                    ? "bg-stone-100 text-stone-400 cursor-not-allowed border border-stone-200"
                    : "bg-[#172d1f] hover:bg-black text-white active:scale-95"
                }`}
                aria-label={`Add ${product.name} to cart`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Added!</span>
                  </>
                ) : isSoldOut ? (
                  <span>Sold out</span>
                ) : (
                  <>
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
            )
          ) : (
            <div
              className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#172d1f] group-hover:bg-black px-3 py-1.5 rounded-lg transition-colors"
              aria-label={`Shop ${grade.grade} Grade`}
            >
              <span>Shop</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
