"use client";

import React, { useState, useEffect, useRef } from "react";
import Script from "next/script";
import {
  Globe,
  Coins,
  Check,
  X,
  Search,
  ChevronDown,
  Sparkles,
  Loader,
} from "lucide-react";
import {
  useCurrency,
  SUPPORTED_CURRENCIES,
} from "@/components/CurrencyProvider";

export type Language = {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  category: "indian" | "international";
};

export const SUPPORTED_LANGUAGES: Language[] = [
  // Primary
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇬🇧",
    category: "international",
  },

  // All 22+ Scheduled and Major Indian Languages
  {
    code: "hi",
    name: "Hindi",
    nativeName: "हिन्दी",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "bn",
    name: "Bengali",
    nativeName: "বাংলা",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "te",
    name: "Telugu",
    nativeName: "తెలుగు",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "mr",
    name: "Marathi",
    nativeName: "मराठी",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "ta",
    name: "Tamil",
    nativeName: "தமிழ்",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "gu",
    name: "Gujarati",
    nativeName: "ગુજરાતી",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "kn",
    name: "Kannada",
    nativeName: "ಕನ್ನಡ",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "ml",
    name: "Malayalam",
    nativeName: "മലയാളം",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "pa",
    name: "Punjabi",
    nativeName: "ਪੰਜਾਬੀ",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "or",
    name: "Odia",
    nativeName: "ଓଡ଼ିଆ",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "as",
    name: "Assamese",
    nativeName: "অসমীয়া",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "ur",
    name: "Urdu",
    nativeName: "اردو",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "sa",
    name: "Sanskrit",
    nativeName: "संस्कृतम्",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "mai",
    name: "Maithili",
    nativeName: "मैथिली",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "bho",
    name: "Bhojpuri",
    nativeName: "भोजपुरी",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "gom",
    name: "Konkani",
    nativeName: "कोंकणी",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "sd",
    name: "Sindhi",
    nativeName: "سنڌي",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "ne",
    name: "Nepali",
    nativeName: "नेपाली",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "doi",
    name: "Dogri",
    nativeName: "डोगरी",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "ks",
    name: "Kashmiri",
    nativeName: "کٲشُر",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "mni-Mtei",
    name: "Manipuri (Meitei)",
    nativeName: "মৈতৈলোন্",
    flag: "🇮🇳",
    category: "indian",
  },
  {
    code: "sat",
    name: "Santali",
    nativeName: "ᱥᱟᱱᱛᱟᱲᱤ",
    flag: "🇮🇳",
    category: "indian",
  },

  // Key International Languages
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    flag: "🇦🇪",
    category: "international",
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    category: "international",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    category: "international",
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    category: "international",
  },
  {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
    flag: "🇷🇺",
    category: "international",
  },
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "🇯🇵",
    category: "international",
  },
  {
    code: "zh-CN",
    name: "Chinese (Simplified)",
    nativeName: "简体中文",
    flag: "🇨🇳",
    category: "international",
  },
  {
    code: "zh-TW",
    name: "Chinese (Traditional)",
    nativeName: "繁體中文",
    flag: "🇹🇼",
    category: "international",
  },
  {
    code: "it",
    name: "Italian",
    nativeName: "Italiano",
    flag: "🇮🇹",
    category: "international",
  },
  {
    code: "pt",
    name: "Portuguese",
    nativeName: "Português",
    flag: "🇵🇹",
    category: "international",
  },
  {
    code: "tr",
    name: "Turkish",
    nativeName: "Türkçe",
    flag: "🇹🇷",
    category: "international",
  },
  {
    code: "nl",
    name: "Dutch",
    nativeName: "Nederlands",
    flag: "🇳🇱",
    category: "international",
  },
  {
    code: "ko",
    name: "Korean",
    nativeName: "한국어",
    flag: "🇰🇷",
    category: "international",
  },
  {
    code: "fa",
    name: "Persian",
    nativeName: "فارسی",
    flag: "🇮🇷",
    category: "international",
  },
  {
    code: "id",
    name: "Indonesian",
    nativeName: "Bahasa Indonesia",
    flag: "🇮🇩",
    category: "international",
  },
  {
    code: "ms",
    name: "Malay",
    nativeName: "Bahasa Melayu",
    flag: "🇲🇾",
    category: "international",
  },
  {
    code: "th",
    name: "Thai",
    nativeName: "ไทย",
    flag: "🇹🇭",
    category: "international",
  },
  {
    code: "vi",
    name: "Vietnamese",
    nativeName: "Tiếng Việt",
    flag: "🇻🇳",
    category: "international",
  },
  {
    code: "pl",
    name: "Polish",
    nativeName: "Polski",
    flag: "🇵🇱",
    category: "international",
  },
  {
    code: "sv",
    name: "Swedish",
    nativeName: "Svenska",
    flag: "🇸🇪",
    category: "international",
  },
  {
    code: "el",
    name: "Greek",
    nativeName: "Ελληνικά",
    flag: "🇬🇷",
    category: "international",
  },
  {
    code: "he",
    name: "Hebrew",
    nativeName: "עברית",
    flag: "🇮🇱",
    category: "international",
  },
  {
    code: "uk",
    name: "Ukrainian",
    nativeName: "Українська",
    flag: "🇺🇦",
    category: "international",
  },
];

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

export default function LanguageCurrencySwitcher() {
  const { currency, currencies, setCurrency } = useCurrency();
  const [activeModal, setActiveModal] = useState<
    "language" | "currency" | null
  >(null);
  const [currentLang, setCurrentLang] = useState<string>("en");
  const [langSearch, setLangSearch] = useState("");
  const [langCategory, setLangCategory] = useState<
    "all" | "indian" | "international"
  >("all");
  const [currencySearch, setCurrencySearch] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const [targetLangObj, setTargetLangObj] = useState<Language | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<MutationObserver | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Clean up observer and timer on unmount
  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Initialize current language from googtrans cookie or localStorage
  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
      return null;
    };

    const cookieLang = getCookie("googtrans");
    if (cookieLang) {
      const match = cookieLang.split("/").filter(Boolean);
      const targetLang = match[match.length - 1];
      if (
        targetLang &&
        SUPPORTED_LANGUAGES.some((l) => l.code === targetLang)
      ) {
        setCurrentLang(targetLang);
      }
    } else {
      const savedLang = localStorage.getItem("emperorakbar-language");
      if (savedLang && SUPPORTED_LANGUAGES.some((l) => l.code === savedLang)) {
        setCurrentLang(savedLang);
      }
    }
  }, []);

  // Close modals on clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveModal(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveModal(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Initialize Google Translate Element callback with all languages enabled
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element",
        );
      }
    };
  }, []);

  // Handle language switch seamlessly without exposing intermediate English reset
  const handleLanguageSelect = (langCode: string) => {
    if (langCode === currentLang) {
      setActiveModal(null);
      return;
    }

    const nextLang =
      SUPPORTED_LANGUAGES.find((l) => l.code === langCode) ||
      SUPPORTED_LANGUAGES[0];

    setActiveModal(null);
    setTargetLangObj(nextLang);
    setIsTranslating(true);
    setCurrentLang(langCode);

    try {
      localStorage.setItem("emperorakbar-language", langCode);
    } catch (e) {
      console.error("Failed to store language", e);
    }

    const hostname = window.location.hostname;

    if (observerRef.current) observerRef.current.disconnect();
    if (timerRef.current) clearTimeout(timerRef.current);

    if (langCode === "en") {
      // Clear translation cookie to restore original language
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname};`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostname};`;

      const selectEl =
        document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (selectEl) {
        selectEl.value = "en";
        selectEl.dispatchEvent(new Event("change"));
      }

      setTimeout(() => {
        window.location.reload();
      }, 400);
      return;
    }

    // Set cookie for Google Translate
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${hostname};`;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${hostname};`;

    const selectEl =
      document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event("change"));

      // Setup MutationObserver to detect when Google finishes updating the DOM text nodes
      let debounceTimer: NodeJS.Timeout;
      const observer = new MutationObserver(() => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          observer.disconnect();
          setIsTranslating(false);
        }, 300);
      });

      observerRef.current = observer;
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
      });

      // Safety fallback: guaranteed unmount after 1.2s max
      timerRef.current = setTimeout(() => {
        observer.disconnect();
        setIsTranslating(false);
      }, 1200);
    } else {
      window.location.reload();
    }
  };

  const handleCurrencySelect = (code: string) => {
    setCurrency(code);
    setActiveModal(null);
  };

  const activeLangObj =
    SUPPORTED_LANGUAGES.find((l) => l.code === currentLang) ||
    SUPPORTED_LANGUAGES[0];

  const filteredLanguages = SUPPORTED_LANGUAGES.filter((l) => {
    const matchesCategory =
      langCategory === "all" ||
      (langCategory === "indian" &&
        (l.category === "indian" || l.code === "en")) ||
      (langCategory === "international" && l.category === "international");

    const query = langSearch.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      l.name.toLowerCase().includes(query) ||
      l.nativeName.toLowerCase().includes(query) ||
      l.code.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const filteredCurrencies = currencies.filter((c) => {
    const query = currencySearch.toLowerCase().trim();
    return (
      query === "" ||
      c.code.toLowerCase().includes(query) ||
      c.name.toLowerCase().includes(query) ||
      c.symbol.toLowerCase().includes(query)
    );
  });

  const indianLanguagesCount = SUPPORTED_LANGUAGES.filter(
    (l) => l.category === "indian",
  ).length;

  return (
    <>
      {/* Seamless Translation Transition Overlay (hides intermediate English reset) */}
      {isTranslating && targetLangObj && (
        <div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white/80 backdrop-blur-md transition-opacity duration-300 pointer-events-auto select-none animate-in fade-in duration-200"
          role="status"
          aria-live="polite"
        >
          <div className="flex flex-col items-center p-6 sm:p-8 rounded-3xl bg-white/95 border border-stone-200/90 shadow-[0_20px_60px_rgba(0,0,0,0.18)] max-w-xs text-center animate-in zoom-in-95 duration-200">
            <span className="text-4xl sm:text-5xl mb-3 drop-shadow-sm animate-pulse">
              {targetLangObj.flag}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-0.5">
              {targetLangObj.nativeName}
            </h3>
            <p className="text-xs text-stone-500 font-medium mb-4">
              Switching to {targetLangObj.name}...
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#172d1f] bg-[#172d1f]/5 px-3 py-1.5 rounded-full border border-[#172d1f]/10">
              <Loader className="w-3.5 h-3.5 text-[#d4af37] animate-spin" />
              <span>Translating page...</span>
            </div>
          </div>
        </div>
      )}

      {/* Hidden Google Translate Mount Point */}
      <div
        id="google_translate_element"
        className="hidden"
        aria-hidden="true"
      />
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      <div
        ref={containerRef}
        className="fixed bottom-5 left-5 z-50 font-sans"
        role="region"
        aria-label="Language and Currency Switcher"
      >
        {/* Floating Dual Pill Button */}
        <div className="bg-[#172d1f]/95 backdrop-blur-xl border border-white/20 text-white rounded-full p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.25)] flex items-center gap-1 hover:border-[#d4af37]/60 transition-all duration-300">
          {/* 1. Language Button */}
          <button
            type="button"
            onClick={() =>
              setActiveModal((prev) =>
                prev === "language" ? null : "language",
              )
            }
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeModal === "language"
                ? "bg-[#d4af37] text-stone-900 shadow-sm"
                : "text-stone-100 hover:bg-white/10"
            }`}
            aria-expanded={activeModal === "language"}
            aria-label={`Select Language, currently ${activeLangObj.name}`}
          >
            <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ebd57b]" />
            <span className="flex items-center gap-1.5">
              <span>{activeLangObj.flag}</span>
              <span className="font-bold tracking-wider text-[11px]">
                {activeLangObj.nativeName.length > 8
                  ? activeLangObj.code.toUpperCase()
                  : activeLangObj.nativeName}
              </span>
            </span>
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-200 ${
                activeModal === "language" ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Divider */}
          <div className="w-px h-4 bg-white/20" aria-hidden="true" />

          {/* 2. Currency Button */}
          <button
            type="button"
            onClick={() =>
              setActiveModal((prev) =>
                prev === "currency" ? null : "currency",
              )
            }
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeModal === "currency"
                ? "bg-[#d4af37] text-stone-900 shadow-sm"
                : "text-stone-100 hover:bg-white/10"
            }`}
            aria-expanded={activeModal === "currency"}
            aria-label={`Select Currency, currently ${currency.code}`}
          >
            <Coins className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ebd57b]" />
            <span className="flex items-center gap-1.5">
              <span>{currency.flag}</span>
              <span className="font-bold tracking-wider text-[11px]">
                {currency.code} ({currency.symbol.trim()})
              </span>
            </span>
            <ChevronDown
              className={`w-3 h-3 transition-transform duration-200 ${
                activeModal === "currency" ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Modal: Language Selection */}
        {activeModal === "language" && (
          <div className="absolute bottom-14 left-0 w-[calc(100vw-2.5rem)] sm:w-96 max-w-[380px] max-h-[500px] bg-white/95 backdrop-blur-2xl border border-stone-200/90 rounded-2xl shadow-[0_16px_50px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="p-3.5 pb-2.5 border-b border-stone-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#172d1f]/10 text-[#172d1f] flex items-center justify-center">
                  <Globe className="w-4 h-4 text-[#172d1f]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-stone-900 leading-none">
                    Select Language
                  </h3>
                  <p className="text-[10px] text-stone-500 mt-0.5">
                    {indianLanguagesCount} Indian & Global Languages
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-6 h-6 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Close language selector"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Input */}
            <div className="p-2.5 border-b border-stone-100">
              <div className="relative flex items-center">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search Hindi, Tamil, Bengali, Arabic..."
                  value={langSearch}
                  onChange={(e) => setLangSearch(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200/80 rounded-xl pl-8 pr-3 py-1.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#172d1f] focus:border-[#172d1f]"
                  autoFocus
                />
              </div>
            </div>

            {/* Language List */}
            <div className="overflow-y-auto max-h-[300px] p-2 space-y-1">
              {filteredLanguages.length === 0 ? (
                <div className="p-6 text-center text-xs text-stone-500">
                  No languages matching &quot;{langSearch}&quot;
                </div>
              ) : (
                filteredLanguages.map((lang) => {
                  const isSelected = lang.code === currentLang;
                  return (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => handleLanguageSelect(lang.code)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? "bg-[#172d1f] text-white font-semibold shadow-xs"
                          : "text-stone-700 hover:bg-stone-100/90"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg leading-none">
                          {lang.flag}
                        </span>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <p
                              className={`text-xs ${
                                isSelected
                                  ? "text-white font-bold"
                                  : "text-stone-900 font-bold"
                              }`}
                            >
                              {lang.name}
                            </p>
                            {lang.category === "indian" &&
                              lang.code !== "en" && (
                                <span
                                  className={`text-[9px] px-1 py-0.2 rounded font-semibold uppercase tracking-wider ${
                                    isSelected
                                      ? "bg-white/20 text-[#ebd57b]"
                                      : "bg-emerald-50 text-emerald-700 border border-emerald-200/50"
                                  }`}
                                >
                                  Indian
                                </span>
                              )}
                          </div>
                          <p
                            className={`text-[11px] ${
                              isSelected
                                ? "text-stone-200 font-medium"
                                : "text-stone-500 font-normal"
                            }`}
                          >
                            {lang.nativeName}
                          </p>
                        </div>
                      </div>
                      {isSelected && (
                        <Check className="w-4 h-4 text-[#ebd57b] shrink-0" />
                      )}
                    </button>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* Modal: Currency Selection */}
        {activeModal === "currency" && (
          <div className="absolute bottom-14 left-0 w-[calc(100vw-2.5rem)] sm:w-84 max-w-[340px] max-h-[460px] bg-white/95 backdrop-blur-2xl border border-stone-200/90 rounded-2xl shadow-[0_16px_50px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="p-3.5 pb-2.5 border-b border-stone-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#d4af37]/20 text-[#172d1f] flex items-center justify-center">
                  <Coins className="w-4 h-4 text-[#8a681d]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-stone-900 leading-none">
                    Select Currency
                  </h3>
                  <p className="text-[10px] text-stone-500 mt-0.5">
                    Live currency conversion
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-6 h-6 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Close currency selector"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Input */}
            <div className="p-2.5 border-b border-stone-100">
              <div className="relative flex items-center">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search currency or symbol..."
                  value={currencySearch}
                  onChange={(e) => setCurrencySearch(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200/80 rounded-xl pl-8 pr-3 py-1.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#172d1f] focus:border-[#172d1f]"
                  autoFocus
                />
              </div>
            </div>

            {/* Currency List */}
            <div className="overflow-y-auto max-h-[300px] p-1.5 space-y-0.5">
              {filteredCurrencies.length === 0 ? (
                <div className="p-6 text-center text-xs text-stone-500">
                  No currencies found
                </div>
              ) : (
                filteredCurrencies.map((c) => {
                  const isSelected = c.code === currency.code;
                  return (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => handleCurrencySelect(c.code)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? "bg-[#172d1f] text-white font-semibold shadow-xs"
                          : "text-stone-700 hover:bg-stone-100/80"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg leading-none">{c.flag}</span>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`text-xs font-bold ${
                                isSelected ? "text-white" : "text-stone-900"
                              }`}
                            >
                              {c.code}
                            </span>
                            <span
                              className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                                isSelected
                                  ? "bg-white/20 text-[#ebd57b]"
                                  : "bg-stone-100 text-stone-600 font-semibold"
                              }`}
                            >
                              {c.symbol.trim()}
                            </span>
                          </div>
                          <p
                            className={`text-[10px] ${
                              isSelected ? "text-stone-300" : "text-stone-500"
                            }`}
                          >
                            {c.name}
                          </p>
                        </div>
                      </div>
                      {isSelected && (
                        <Check className="w-4 h-4 text-[#ebd57b] shrink-0" />
                      )}
                    </button>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
