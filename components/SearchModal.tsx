"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  X,
  ArrowRight,
  Sparkles,
  Layers,
  Utensils,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Clock,
  Trash2,
  Zap,
} from "lucide-react";
import { websiteData, Photos } from "@/data/websiteData";
import { useCurrency } from "@/components/CurrencyProvider";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Visual themes for the 5 cardamom packaging colours
const GRADE_THEMES: Record<string, { color: string; bgClass: string; badgeBg: string }> = {
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

const QUICK_PAGES = [
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
    icon: Sparkles,
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
    icon: Sparkles,
  },
];

const DEFAULT_RECENT_SEARCHES = ["Purple Grade 8mm", "Cardamom Rasmalai", "Green 7mm"];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const { formatPrice } = useCurrency();

  // Load recent searches from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("emperorakbar-recent-searches");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setRecentSearches(parsed);
          return;
        }
      }
      setRecentSearches(DEFAULT_RECENT_SEARCHES);
    } catch (e) {
      console.error("Failed to load recent searches", e);
      setRecentSearches(DEFAULT_RECENT_SEARCHES);
    }
  }, []);

  // Save a search term to recent searches
  const saveRecentSearch = (term: string) => {
    const trimmed = term.trim();
    if (!trimmed || trimmed.length < 2) return;

    setRecentSearches((prev) => {
      const filtered = prev.filter((item) => item.toLowerCase() !== trimmed.toLowerCase());
      const updated = [trimmed, ...filtered].slice(0, 8); // Keep top 8
      try {
        localStorage.setItem("emperorakbar-recent-searches", JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to save recent search", e);
      }
      return updated;
    });
  };

  // Remove a single recent search
  const removeRecentSearch = (term: string) => {
    setRecentSearches((prev) => {
      const updated = prev.filter((item) => item !== term);
      try {
        localStorage.setItem("emperorakbar-recent-searches", JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to update recent searches", e);
      }
      return updated;
    });
  };

  // Clear all recent searches
  const clearAllRecentSearches = () => {
    setRecentSearches([]);
    try {
      localStorage.removeItem("emperorakbar-recent-searches");
    } catch (e) {
      console.error("Failed to clear recent searches", e);
    }
  };

  // Dynamically derive cardamom grades directly from websiteData
  const allCardamomGrades = useMemo(() => {
    const rawGrading = websiteData.about?.grading || [];
    const products = websiteData.shop?.products || [];

    return rawGrading.map((item) => {
      const product = products.find(
        (p) => p.grade.toLowerCase() === item.color.toLowerCase()
      );
      const theme = GRADE_THEMES[item.color] || {
        color: "#172d1f",
        bgClass: "bg-[#172d1f]",
        badgeBg: "bg-stone-50 text-stone-800 border-stone-200",
      };

      const diameterText = product?.size
        ? product.size.replace(/^Pods of diameter\s*/i, "")
        : item.diameter;

      return {
        grade: item.color,
        diameter: diameterText,
        description: product?.usage || item.description,
        speciality: product?.speciality || "GI-tagged Alleppey Green Cardamom",
        url: product?.url || `/product/${item.color.toLowerCase()}-grade`,
        product,
        ...theme,
      };
    });
  }, []);

  // Focus input on open & lock background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Apply a search term (e.g. clicking demo or recent search)
  const applySearchTerm = (term: string) => {
    setQuery(term);
    saveRecentSearch(term);
    inputRef.current?.focus();
  };

  // Filter cardamom grades using query
  const filteredGrades = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return allCardamomGrades;

    return allCardamomGrades.filter((item) => {
      return (
        item.grade.toLowerCase().includes(q) ||
        item.diameter.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.speciality.toLowerCase().includes(q) ||
        q.includes(item.grade.toLowerCase()) ||
        (q.includes("mm") && item.diameter.toLowerCase().includes(q))
      );
    });
  }, [query, allCardamomGrades]);

  // Filter products from websiteData
  const filteredProducts = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return websiteData.shop?.products || [];

    return (websiteData.shop?.products || []).filter((p) => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.grade.toLowerCase().includes(q) ||
        p.size.toLowerCase().includes(q) ||
        p.speciality.toLowerCase().includes(q) ||
        p.usage.toLowerCase().includes(q)
      );
    });
  }, [query]);

  // Filter recipes from websiteData
  const filteredRecipes = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    return (websiteData.recipes?.items || []).filter((r) => {
      return (
        r.title.toLowerCase().includes(q) ||
        r.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        r.description.toLowerCase().includes(q)
      );
    });
  }, [query]);

  // Filter pages from QUICK_PAGES
  const filteredPages = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    return QUICK_PAGES.filter((page) => {
      return (
        page.title.toLowerCase().includes(q) ||
        page.description.toLowerCase().includes(q) ||
        page.category.toLowerCase().includes(q)
      );
    });
  }, [query]);

  const hasAnyResults =
    filteredGrades.length > 0 ||
    filteredProducts.length > 0 ||
    filteredRecipes.length > 0 ||
    filteredPages.length > 0;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center p-3 sm:p-6 md:p-10 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Search Cardamom Grades and Products"
    >
      <div
        ref={modalRef}
        className="w-full max-w-2xl bg-white/95 backdrop-blur-2xl rounded-2xl md:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.35)] border border-stone-200 overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200 mt-6 sm:mt-12"
      >
        {/* Top Search Bar */}
        <div className="relative flex items-center px-4 sm:px-6 py-4 border-b border-stone-200 bg-white/80">
          <Search className="w-5 h-5 text-stone-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && query.trim()) {
                saveRecentSearch(query);
              }
            }}
            placeholder="Search cardamom grade (Purple, Pink, 8mm, Green), recipes..."
            className="w-full bg-transparent text-sm sm:text-base text-stone-900 placeholder-stone-400 font-medium focus:outline-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors mr-2 cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          ) : null}
          <button
            type="button"
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold text-stone-500 bg-stone-100 rounded-lg hover:bg-stone-200 transition-colors cursor-pointer"
            aria-label="Close search dialog"
          >
            Esc
          </button>
        </div>

        {/* Quick Grade Filter Chips from websiteData */}
        <div className="px-4 sm:px-6 py-2.5 bg-stone-50/70 border-b border-stone-100 flex items-center gap-1.5 overflow-x-auto scrollbar-hide">
          <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider shrink-0 mr-1">
            Grades:
          </span>
          {allCardamomGrades.map((g) => (
            <button
              key={g.grade}
              type="button"
              onClick={() => applySearchTerm(g.grade)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                query.toLowerCase().trim() === g.grade.toLowerCase()
                  ? `${g.bgClass} text-white shadow-xs`
                  : `bg-white border border-stone-200/80 text-stone-700 hover:border-stone-400`
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: g.color }}
              />
              <span>{g.grade}</span>
              <span className="text-[10px] opacity-75 font-normal">
                ({g.diameter.split(" ")[0]})
              </span>
            </button>
          ))}
        </div>

        {/* Search Results / Content Container */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-1">
          {/* SECTION A: RECENTLY SEARCHED TEXT */}
          {recentSearches.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-500 uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Recently Searched</span>
                </div>
                <button
                  type="button"
                  onClick={clearAllRecentSearches}
                  className="text-[11px] font-semibold text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
                >
                  Clear all
                </button>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {recentSearches.map((term) => (
                  <div
                    key={term}
                    onClick={() => applySearchTerm(term)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-[#172d1f]/10 text-stone-800 text-xs font-medium transition-all cursor-pointer group border border-stone-200/60"
                  >
                    <Clock className="w-3 h-3 text-stone-400 group-hover:text-[#172d1f]" />
                    <span className="group-hover:text-[#172d1f] font-semibold">
                      {term}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeRecentSearch(term);
                      }}
                      className="ml-0.5 text-stone-400 hover:text-stone-700 hover:bg-stone-200 rounded-full p-0.5 transition-colors cursor-pointer"
                      aria-label={`Remove ${term} from recent searches`}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION B: 2 INTERACTIVE DEMOS */}
          {!query && (
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-500 uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Featured Demos (Click to Try)</span>
                </div>
                <span className="text-[11px] text-stone-400 font-medium">
                  2 Instant Search Demos
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* DEMO 1: Cardamom Grade Demo */}
                <button
                  type="button"
                  onClick={() => applySearchTerm("Purple Grade")}
                  className="p-3.5 rounded-2xl border border-[#6b2c58]/30 bg-gradient-to-br from-[#6b2c58]/5 to-transparent hover:border-[#6b2c58] hover:shadow-md transition-all text-left flex items-start gap-3 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#6b2c58] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Layers className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#6b2c58]/10 text-[#6b2c58] uppercase tracking-wider">
                        Demo 1 • Grade
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#6b2c58] group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h4 className="text-xs font-bold text-stone-900 group-hover:text-[#6b2c58]">
                      Purple Grade (8mm+)
                    </h4>
                    <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                      Celebrity Chef choice • Boldest pods
                    </p>
                  </div>
                </button>

                {/* DEMO 2: Culinary Recipe Demo */}
                <button
                  type="button"
                  onClick={() => applySearchTerm("Rasmalai")}
                  className="p-3.5 rounded-2xl border border-[#d4af37]/40 bg-gradient-to-br from-[#d4af37]/10 to-transparent hover:border-[#d4af37] hover:shadow-md transition-all text-left flex items-start gap-3 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#172d1f] text-[#d4af37] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Utensils className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#d4af37]/20 text-[#8a681d] uppercase tracking-wider">
                        Demo 2 • Recipe
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#8a681d] group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h4 className="text-xs font-bold text-stone-900 group-hover:text-[#8a681d]">
                      Cardamom Rasmalai
                    </h4>
                    <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                      Royal saffron cardamom milk dessert
                    </p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* SECTION C: CARDAMOM GRADES RESULTS */}
          {filteredGrades.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Cardamom Grades ({filteredGrades.length})</span>
                </h3>
                <Link
                  href="/cardamom-grades"
                  onClick={() => {
                    saveRecentSearch(query || "Cardamom Grades");
                    onClose();
                  }}
                  className="text-xs font-semibold text-[#172d1f] hover:underline flex items-center gap-1"
                >
                  <span>Grades Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {filteredGrades.map((grade) => {
                  const product = grade.product;

                  return (
                    <div
                      key={grade.grade}
                      className="group p-3.5 rounded-2xl border border-stone-200/90 bg-white hover:border-[#172d1f]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-3.5 h-3.5 rounded-full shrink-0 shadow-xs"
                              style={{ backgroundColor: grade.color }}
                            />
                            <span className="font-bold text-sm text-stone-900 group-hover:text-[#172d1f]">
                              {grade.grade} Grade
                            </span>
                          </div>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wide ${grade.badgeBg}`}
                          >
                            {grade.diameter}
                          </span>
                        </div>

                        <p className="text-xs text-stone-500 line-clamp-2 mb-3">
                          {grade.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                        {product && (
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-xs font-bold text-stone-900">
                              {formatPrice(product.price)}
                            </span>
                            {product.status === "sold-out" ? (
                              <span className="text-[10px] text-stone-400 font-medium">
                                (Sold out)
                              </span>
                            ) : (
                              <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5">
                                <CheckCircle2 className="w-2.5 h-2.5" /> In Stock
                              </span>
                            )}
                          </div>
                        )}

                        <div className="flex items-center gap-2 ml-auto">
                          <Link
                            href={grade.url}
                            onClick={() => {
                              saveRecentSearch(`${grade.grade} Grade`);
                              onClose();
                            }}
                            className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#172d1f] hover:bg-black px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                          >
                            <span>Shop</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* SECTION D: RECIPES SECTION (if matching) */}
          {filteredRecipes.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Cardamom Recipes ({filteredRecipes.length})</span>
                </h3>
                <Link
                  href="/recipes"
                  onClick={() => {
                    saveRecentSearch(query || "Recipes");
                    onClose();
                  }}
                  className="text-xs font-semibold text-[#172d1f] hover:underline flex items-center gap-1"
                >
                  <span>All Recipes</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {filteredRecipes.slice(0, 4).map((recipe) => (
                  <Link
                    key={recipe.id}
                    href={recipe.url}
                    onClick={() => {
                      saveRecentSearch(recipe.title);
                      onClose();
                    }}
                    className="p-3 rounded-2xl border border-stone-200/90 bg-white hover:border-[#172d1f]/40 hover:shadow-md transition-all duration-200 flex items-center gap-3 group"
                  >
                    {recipe.image && (
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-stone-100">
                        <Image
                          src={recipe.image}
                          alt={recipe.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-stone-900 group-hover:text-[#172d1f] truncate">
                        {recipe.title}
                      </h4>
                      <p className="text-[11px] text-stone-500 line-clamp-1">
                        {recipe.tags?.slice(0, 2).join(" • ")}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-black group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* SECTION E: HELPFUL GUIDES & PAGES */}
          {(query ? filteredPages : QUICK_PAGES.slice(0, 3)).length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Helpful Pages & Guides</span>
              </h3>

              <div className="space-y-1.5">
                {(query ? filteredPages : QUICK_PAGES.slice(0, 3)).map((page) => {
                  const PageIcon = page.icon;
                  return (
                    <Link
                      key={page.url}
                      href={page.url}
                      onClick={() => {
                        saveRecentSearch(page.title);
                        onClose();
                      }}
                      className="p-2.5 px-3 rounded-xl hover:bg-stone-100/80 transition-colors flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-[#172d1f]/10 text-[#172d1f] flex items-center justify-center shrink-0">
                          <PageIcon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-stone-900 group-hover:text-[#172d1f]">
                            {page.title}
                          </p>
                          <p className="text-[11px] text-stone-500">
                            {page.description}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-700 shrink-0" />
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* No results empty state */}
          {!hasAnyResults && (
            <div className="p-10 text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-3">
                <Search className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-stone-800">
                No matching grades or products found
              </p>
              <p className="text-xs text-stone-500 mt-1 max-w-sm">
                Try searching for &quot;Purple&quot;, &quot;Pink&quot;, &quot;Green&quot;, &quot;Orange&quot;, &quot;Red&quot;, or pod sizes like &quot;8mm&quot;.
              </p>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-stone-700">Quick tip:</span>
            <span>Cardamoms are graded by pod diameter, not length.</span>
          </div>
          <span className="hidden sm:inline font-medium text-stone-400">
            Press <kbd className="px-1.5 py-0.5 bg-white border border-stone-200 rounded text-[10px] font-mono">Esc</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
}
