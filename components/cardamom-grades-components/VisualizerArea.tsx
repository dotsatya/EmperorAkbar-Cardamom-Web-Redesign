import React, { memo } from "react";
import Image from "next/image";
import { Grade } from "./GradeTabs";
import { Photos } from "@/data/websiteData";

interface VisualizerAreaProps {
  activeGrade: Grade;
  currentSize: number;
  scaleFactor?: number; // Marked as optional if you are strictly using the 1.05 hardcoded scale
}

// 1. Constants moved outside the component to prevent re-creation on every render
const MAX_SIZE = 9;
const SCALE_NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const FALLBACK_COLOR = "#1c1917";

const GRADE_COLORS: Record<string, string> = {
  Purple: "#6b2c58",
  Pink: "#d53582",
  Green: "#2d6a36",
  Orange: "#e86c24",
  Red: "#ce2b28",
};

// 2. Helper functions to clean up inline template literals in the JSX
const getTickClasses = (isExactMatch: boolean, isCovered: boolean) => {
  const base = "transition-all duration-300";
  const height = isCovered ? "h-[2px] bg-stone-800" : "h-[1px] bg-stone-300";
  const width = isExactMatch ? "w-full" : "w-1/2";
  return `${base} ${height} ${width}`;
};

const getLabelClasses = (isExactMatch: boolean, isCovered: boolean) => {
  const base =
    "absolute left-full ml-1 md:ml-2 font-mono font-bold text-sm md:text-lg transition-all duration-300";
  if (isExactMatch)
    return `${base} scale-110 md:scale-125 shadow-sm bg-white/95 px-1 md:px-1.5 py-0 md:py-0.5 rounded z-30`;
  if (isCovered) return `${base} text-stone-800 z-10`;
  return `${base} text-stone-300 z-10`;
};

// 3. Wrapped in React.memo to prevent unnecessary re-renders if parent state changes independently
const VisualizerArea = memo(function VisualizerArea({
  activeGrade,
  currentSize,
}: VisualizerAreaProps) {
  const activeColor = GRADE_COLORS[activeGrade.color] || FALLBACK_COLOR;
  const sizePercentage = (currentSize / MAX_SIZE) * 100;
  const isFractional = currentSize % 1 !== 0;

  return (
    <div className="p-4 sm:p-6 md:p-12 rounded-2xl max-w-3xl w-full flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-8 relative overflow-hidden flex-1">
      {/* 4. Added aria-hidden to decorative elements for better screen reader accessibility */}
   
      {/* Visualizer Stage */}
      <div className="relative flex-1 flex justify-end items-end h-[90px] md:h-[120px] w-full max-w-[400px] pr-2">
        {/* Cardamom Image Container */}
        <div
          className="absolute bottom-0 w-full transition-all duration-700 ease-out flex justify-center items-end z-10"
          style={{ height: `${sizePercentage}%` }}
        >
          <div
            className="relative w-full min-w-[200px] sm:min-w-[250px] md:min-w-[300px] h-full"
            style={{
              transform: `scale(1.02)`,
              transformOrigin: "bottom center",
            }}
          >
            <Image
              src={Photos.greenSeedDemo}
              alt={`Cardamom Pod Size ${currentSize}mm`}
              title={`Cardamom Pod Size ${currentSize}mm`}
              fill
              priority // 5. Added priority since this is the primary hero image of the component
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Dynamic Caliper (Top Line) */}
        <div
          className="absolute right-0 w-3/4 max-w-[180px] flex items-center justify-end z-20 transition-all duration-700 ease-out"
          style={{ bottom: `${sizePercentage - 5}%` }}
          aria-hidden="true"
        >
          <div className="w-full border-b border-dashed border-stone-400 opacity-80"></div>
          <div
            className="w-2.5 h-2.5 shrink-0 rounded-full border-2 border-white translate-x-1"
            style={{ backgroundColor: activeColor }}
          ></div>
        </div>

        {/* Dynamic Caliper (Bottom Line) */}
        <div
          className="absolute bottom-0 right-0 w-3/4 max-w-[180px] flex items-center justify-end z-20"
          aria-hidden="true"
        >
          <div className="w-full border-t border-dashed border-stone-400 opacity-80"></div>
        </div>
      </div>

      {/* Scale / Ruler */}
      <div
        className="relative h-[90px] md:h-[120px] w-12 md:w-16 shrink-0 border-l-2 border-stone-200 pl-2 md:pl-4 my-auto mr-2 md:mr-12"
        aria-hidden="true"
      >
        {/* Ruler Base Numbers */}
        {SCALE_NUMBERS.map((num) => {
          const isCovered = num <= currentSize;
          const isExactMatch = num === currentSize;
          const bottomPos = (num / MAX_SIZE) * 100;
          const shouldShowNumber = num % 2 === 0 || isExactMatch;

          return (
            <div
              key={num}
              className="absolute left-0 w-full flex items-center"
              style={{ bottom: `${bottomPos}%`, transform: "translateY(50%)" }}
            >
              <div className={getTickClasses(isExactMatch, isCovered)}></div>
              <span
                className={getLabelClasses(isExactMatch, isCovered)}
                style={{ color: isExactMatch ? activeColor : undefined }}
              >
                {shouldShowNumber ? num : ""}
              </span>
            </div>
          );
        })}

        {/* Fractional exact indicator */}
        {isFractional && (
          <div
            className="absolute left-0 w-full flex items-center z-30 transition-all duration-700 ease-out"
            style={{
              bottom: `${sizePercentage}%`,
              transform: "translateY(50%)",
            }}
          >
            <div
              className="w-full h-[2px]"
              style={{ backgroundColor: activeColor }}
            ></div>
            <span
              className="absolute left-full ml-1 md:ml-2 font-mono font-bold text-sm md:text-lg scale-110 md:scale-125 shadow-sm bg-white/95 px-1 md:px-1.5 py-0 md:py-0.5 rounded"
              style={{ color: activeColor }}
            >
              {currentSize}
            </span>
          </div>
        )}

        {/* Active size overlay indicator */}
        <div
          className="absolute left-0 w-1 transition-all duration-700 ease-out rounded-full"
          style={{
            bottom: 0,
            height: `${sizePercentage}%`,
            transform: "translateX(-50%)",
            backgroundColor: activeColor,
            boxShadow: `0 0 10px ${activeColor}40`,
          }}
        ></div>
      </div>
    </div>
  );
});

export default memo(VisualizerArea);
