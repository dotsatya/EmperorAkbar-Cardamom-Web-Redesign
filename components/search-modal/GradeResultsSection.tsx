"use client";

import React from "react";
import Link from "next/link";
import { Layers, ArrowRight } from "lucide-react";
import { CardamomGradeItem } from "./types";
import GradeResultCard from "./GradeResultCard";

interface GradeResultsSectionProps {
  grades: CardamomGradeItem[];
  query: string;
  showAddToCart?: boolean;
  addedProductId: string | null;
  onAddToCart: (
    e: React.MouseEvent,
    product: NonNullable<CardamomGradeItem["product"]>
  ) => void;
  onSelectGrade: (gradeName: string) => void;
  formatPrice: (price: number) => string;
}

export default function GradeResultsSection({
  grades,
  query,
  showAddToCart = false,
  addedProductId,
  onAddToCart,
  onSelectGrade,
  formatPrice,
}: GradeResultsSectionProps) {
  if (grades.length === 0) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Cardamom Grades ({grades.length})</span>
        </h3>
        <Link
          href="/cardamom-grades"
          onClick={() => onSelectGrade(query || "Cardamom Grades")}
          className="text-xs font-semibold text-[#172d1f] hover:underline flex items-center gap-1"
        >
          <span>Grades Guide</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {grades.map((grade) => (
          <GradeResultCard
            key={grade.grade}
            grade={grade}
            isAdded={addedProductId === grade.product?.id}
            showAddToCart={showAddToCart}
            onAddToCart={onAddToCart}
            onSelectGrade={onSelectGrade}
            formatPrice={formatPrice}
          />
        ))}
      </div>
    </div>
  );
}
