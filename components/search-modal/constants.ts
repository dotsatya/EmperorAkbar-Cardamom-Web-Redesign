import { Layers, Utensils, BookOpen } from "lucide-react";
import { QuickPageItem } from "./types";

// Visual themes for the 5 cardamom packaging colours
export const GRADE_THEMES: Record<
  string,
  { color: string; bgClass: string; badgeBg: string }
> = {
  Purple: {
    color: "#6b2c58",
    bgClass: "bg-[#6b2c58]",
    badgeBg: "bg-purple-50 text-[#6b2c58] border-purple-200/60",
  },
  Pink: {
    color: "#d53582",
    bgClass: "bg-[#d53582]",
    badgeBg: "bg-pink-50 text-[#d53582] border-pink-200/60",
  },
  Green: {
    color: "#2d6a36",
    bgClass: "bg-[#2d6a36]",
    badgeBg: "bg-emerald-50 text-[#2d6a36] border-emerald-200/60",
  },
  Orange: {
    color: "#e86c24",
    bgClass: "bg-[#e86c24]",
    badgeBg: "bg-orange-50 text-[#e86c24] border-orange-200/60",
  },
  Red: {
    color: "#ce2b28",
    bgClass: "bg-[#ce2b28]",
    badgeBg: "bg-red-50 text-[#ce2b28] border-red-200/60",
  },
};

export const QUICK_PAGES: QuickPageItem[] = [
  {
    title: "Cardamom Grades Guide & Pod Sizing",
    category: "Guide",
    url: "/cardamom-grades",
    description: "Learn how pod diameter (6mm to 8mm+) determines aroma and flavour.",
    icon: Layers,
  },
  {
    title: "All Cardamom Products (Shop)",
    category: "Store",
    url: "/shop",
    description: "Browse all five colour-coded Aroma-Lock cardamom packs.",
    icon: Layers,
  },
  {
    title: "Cardamom Recipes Collection",
    category: "Culinary",
    url: "/recipes",
    description: "Biryani, Rasmalai, Elaichi Chai, desserts and more.",
    icon: Utensils,
  },
  {
    title: "Our Story & GI Recognition",
    category: "Brand",
    url: "/our-story",
    description: "GI-tagged Alleppey Green Cardamom legacy since 1981.",
    icon: BookOpen,
  },
  {
    title: "Health Benefits of Cardamom",
    category: "Wellness",
    url: "/health-benefits",
    description: "Digestive health, antioxidant qualities, and traditional uses.",
    icon: BookOpen,
  },
];

export const DEFAULT_RECENT_SEARCHES = [
  "Purple Grade 8mm",
  "Cardamom Rasmalai",
  "Green 7mm",
];

export const RECENT_SEARCHES_STORAGE_KEY = "emperorakbar-recent-searches";

