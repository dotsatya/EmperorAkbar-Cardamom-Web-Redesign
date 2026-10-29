"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { websiteData } from "@/data/websiteData";
import { useCurrency } from "@/components/CurrencyProvider";
import { useCart } from "@/components/CartProvider";
import { SearchModalProps, CardamomGradeItem } from "./types";
import {
  GRADE_THEMES,
  QUICK_PAGES,
  DEFAULT_RECENT_SEARCHES,
  RECENT_SEARCHES_STORAGE_KEY,
} from "./constants";
import SearchBar from "./SearchBar";
import RecentlySearched from "./RecentlySearched";
import GradeResultsSection from "./GradeResultsSection";
import RecipeResultsSection from "./RecipeResultsSection";
import QuickPagesSection from "./QuickPagesSection";
import SearchEmptyState from "./SearchEmptyState";
import SearchFooter from "./SearchFooter";

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const { formatPrice } = useCurrency();
  const { addToCart } = useCart();

  // Load recent searches from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(RECENT_SEARCHES_STORAGE_KEY);
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
      const filtered = prev.filter(
        (item) => item.toLowerCase() !== trimmed.toLowerCase()
      );
      const updated = [trimmed, ...filtered].slice(0, 8); // Keep top 8
      try {
        localStorage.setItem(
          RECENT_SEARCHES_STORAGE_KEY,
          JSON.stringify(updated)
        );
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
        localStorage.setItem(
          RECENT_SEARCHES_STORAGE_KEY,
          JSON.stringify(updated)
        );
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
      localStorage.removeItem(RECENT_SEARCHES_STORAGE_KEY);
    } catch (e) {
      console.error("Failed to clear recent searches", e);
    }
  };

  // Dynamically derive cardamom grades directly from websiteData
  const allCardamomGrades: CardamomGradeItem[] = useMemo(() => {
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

  // Close on Escape
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

  // Add product to cart with visual feedback
  const handleAddToCart = (
    e: React.MouseEvent,
    product: NonNullable<CardamomGradeItem["product"]>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    let imageUrl = "";
    if (typeof product.image === "string") {
      imageUrl = product.image;
    } else if (
      product.image &&
      typeof product.image === "object" &&
      "src" in product.image
    ) {
      imageUrl = (product.image as { src: string }).src;
    } else if (product.images && product.images.length > 0) {
      const firstImg = product.images[0] as unknown;
      if (typeof firstImg === "string") {
        imageUrl = firstImg;
      } else if (firstImg && typeof firstImg === "object" && "src" in firstImg) {
        const srcObj = (firstImg as { src: unknown }).src;
        imageUrl =
          typeof srcObj === "string"
            ? srcObj
            : (srcObj as { src?: string })?.src || "";
      }
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: imageUrl,
      weight: product.weights?.[0] || "100 gm",
      quantity: 1,
    });

    setAddedProductId(product.id);
    setTimeout(() => {
      setAddedProductId((current) => (current === product.id ? null : current));
    }, 1800);
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

  // Filter recipes from websiteData
  const filteredRecipes = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    return (websiteData.recipes?.items || []).filter((r) => {
      return (
        r.title.toLowerCase().includes(q) ||
        r.tags?.some((tag) => tag.toLowerCase().includes(q)) ||
        r.description?.toLowerCase().includes(q)
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
        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearchSubmit={saveRecentSearch}
          onClose={onClose}
          inputRef={inputRef}
        />

        {/* Search Results / Content Container */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-1">
          {/* SECTION A: RECENTLY SEARCHED (Hidden when actively searching) */}
          {!query.trim() && (
            <RecentlySearched
              recentSearches={recentSearches}
              onApplySearch={applySearchTerm}
              onRemoveSearch={removeRecentSearch}
              onClearAll={clearAllRecentSearches}
            />
          )}

          {/* SECTION B: CARDAMOM GRADES RESULTS */}
          <GradeResultsSection
            grades={filteredGrades}
            query={query}
            showAddToCart={Boolean(query.trim())}
            addedProductId={addedProductId}
            onAddToCart={handleAddToCart}
            onSelectGrade={(term) => {
              saveRecentSearch(term);
              onClose();
            }}
            formatPrice={formatPrice}
          />

          {/* SECTION C: RECIPES SECTION */}
          <RecipeResultsSection
            recipes={filteredRecipes}
            query={query}
            onSelectRecipe={(title) => {
              saveRecentSearch(title);
              onClose();
            }}
          />

          {/* SECTION D: HELPFUL GUIDES & PAGES */}
          <QuickPagesSection
            pages={query ? filteredPages : QUICK_PAGES.slice(0, 3)}
            onSelectPage={(title) => {
              saveRecentSearch(title);
              onClose();
            }}
          />

          {/* No results empty state */}
          {!hasAnyResults && <SearchEmptyState />}
        </div>

        {/* Footer info bar */}
        <SearchFooter />
      </div>
    </div>
  );
}

