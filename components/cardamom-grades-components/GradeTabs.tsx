import React from "react";

export interface Grade {
  color: string;
  diameter: string;
  description: string;
}

interface GradeTabsProps {
  grading: Grade[];
  activeGrade: Grade;
  setActiveGrade: (grade: Grade) => void;
}

export default function GradeTabs({ grading, activeGrade, setActiveGrade }: GradeTabsProps) {
  const getTabStyles = (color: string, isActive: boolean) => {
    if (isActive) {
      switch (color) {
        case "Purple": return { bg: "bg-[#6b2c58]", text: "text-white", border: "border-[#6b2c58]", shadow: "shadow-purple-900/20 shadow-lg" };
        case "Pink": return { bg: "bg-[#d53582]", text: "text-white", border: "border-[#d53582]", shadow: "shadow-pink-900/20 shadow-lg" };
        case "Green": return { bg: "bg-[#2d6a36]", text: "text-white", border: "border-[#2d6a36]", shadow: "shadow-green-900/20 shadow-lg" };
        case "Orange": return { bg: "bg-[#e86c24]", text: "text-white", border: "border-[#e86c24]", shadow: "shadow-orange-900/20 shadow-lg" };
        case "Red": return { bg: "bg-[#ce2b28]", text: "text-white", border: "border-[#ce2b28]", shadow: "shadow-red-900/20 shadow-lg" };
        default: return { bg: "bg-stone-800", text: "text-white", border: "border-stone-800", shadow: "shadow-lg" };
      }
    }
    
    // Inactive styles
    switch (color) {
      case "Purple": return { bg: "bg-white", text: "text-[#6b2c58]", border: "border-stone-200", hover: "hover:bg-purple-50" };
      case "Pink": return { bg: "bg-white", text: "text-[#d53582]", border: "border-stone-200", hover: "hover:bg-pink-50" };
      case "Green": return { bg: "bg-white", text: "text-[#2d6a36]", border: "border-stone-200", hover: "hover:bg-green-50" };
      case "Orange": return { bg: "bg-white", text: "text-[#e86c24]", border: "border-stone-200", hover: "hover:bg-orange-50" };
      case "Red": return { bg: "bg-white", text: "text-[#ce2b28]", border: "border-stone-200", hover: "hover:bg-red-50" };
      default: return { bg: "bg-white", text: "text-stone-600", border: "border-stone-200", hover: "hover:bg-stone-50" };
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-4 md:mb-8">
      {grading.map((grade) => {
        const isActive = activeGrade.color === grade.color;
        const styles = getTabStyles(grade.color, isActive);
        return (
          <button
            key={grade.color}
            onClick={() => setActiveGrade(grade)}
            className={`${styles.bg} ${styles.border} ${styles.shadow || ""} ${styles.hover || ""} px-2 md:px-6 py-2 md:py-3 rounded-full flex flex-col items-center justify-center w-24 sm:w-28 md:w-40 transition-all duration-300 border cursor-pointer`}
          >
            <span className={`font-bold tracking-widest text-xs md:text-sm uppercase ${styles.text} mb-0.5 md:mb-1 transition-colors duration-300`}>
              {grade.color}
            </span>
            <span className={`text-[10px] md:text-xs opacity-80 ${isActive ? "text-white/90" : "text-stone-500"} transition-colors duration-300`}>
              {grade.diameter}
            </span>
          </button>
        );
      })}
    </div>
  );
}
