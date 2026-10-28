"use client";

import React, { useState, useEffect, useRef } from "react";
import Script from "next/script";
import { Globe, Coins, Check, X, Search, ChevronDown } from "lucide-react";
import { useCurrency } from "@/components/CurrencyProvider";

export type Language = {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
};

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇦🇪" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪" },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵" },
  { code: "zh-CN", name: "Chinese (Simplified)", nativeName: "简体中文", flag: "🇨🇳" },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", flag: "🇹🇷" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands", flag: "🇳🇱" },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷" },
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
  const [activeModal, setActiveModal] = useState<"language" | "currency" | null>(null);
  const [currentLang, setCurrentLang] = useState<string>("en");
  const [langSearch, setLangSearch] = useState("");
  const [currencySearch, setCurrencySearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

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
      if (targetLang && SUPPORTED_LANGUAGES.some((l) => l.code === targetLang)) {
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
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
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

  // Initialize Google Translate Element callback
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: SUPPORTED_LANGUAGES.map((l) => l.code).join(","),
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  // Handle language switch using Google Translate cookie and DOM event
  const handleLanguageSelect = (langCode: string) => {
    setCurrentLang(langCode);
    setActiveModal(null);

    try {
      localStorage.setItem("emperorakbar-language", langCode);
    } catch (e) {
      console.error("Failed to store language", e);
    }

    const hostname = window.location.hostname;

    if (langCode === "en") {
      // Clear translation cookie to restore original language
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname};`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostname};`;

      const selectEl = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (selectEl) {
        selectEl.value = "en";
        selectEl.dispatchEvent(new Event("change"));
      }
      window.location.reload();
      return;
    }

    // Set cookie for Google Translate
    document.cookie = `googtrans=/en/${langCode}; path=/;`;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${hostname};`;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${hostname};`;

    const selectEl = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event("change"));
    } else {
      window.location.reload();
    }
  };

  const handleCurrencySelect = (code: string) => {
    setCurrency(code);
    setActiveModal(null);
  };

  const activeLangObj =
    SUPPORTED_LANGUAGES.find((l) => l.code === currentLang) || SUPPORTED_LANGUAGES[0];

  const filteredLanguages = SUPPORTED_LANGUAGES.filter(
    (l) =>
      l.name.toLowerCase().includes(langSearch.toLowerCase()) ||
      l.nativeName.toLowerCase().includes(langSearch.toLowerCase()) ||
      l.code.toLowerCase().includes(langSearch.toLowerCase())
  );

  const filteredCurrencies = currencies.filter(
    (c) =>
      c.code.toLowerCase().includes(currencySearch.toLowerCase()) ||
      c.name.toLowerCase().includes(currencySearch.toLowerCase()) ||
      c.symbol.toLowerCase().includes(currencySearch.toLowerCase())
  );

  return (
    <>
      {/* Hidden Google Translate Mount Point */}
      <div id="google_translate_element" className="hidden" aria-hidden="true" />
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
              setActiveModal((prev) => (prev === "language" ? null : "language"))
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
              <span className="hidden sm:inline font-bold uppercase tracking-wider text-[11px]">
                {activeLangObj.code}
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
              setActiveModal((prev) => (prev === "currency" ? null : "currency"))
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
          <div className="absolute bottom-14 left-0 w-[calc(100vw-2.5rem)] sm:w-84 max-w-[340px] max-h-[460px] bg-white/95 backdrop-blur-2xl border border-stone-200/90 rounded-2xl shadow-[0_16px_50px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
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
                    Powered by Google Translate
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-6 h-6 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors"
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
                  placeholder="Search language..."
                  value={langSearch}
                  onChange={(e) => setLangSearch(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200/80 rounded-xl pl-8 pr-3 py-1.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#172d1f] focus:border-[#172d1f]"
                  autoFocus
                />
              </div>
            </div>

            {/* Language List */}
            <div className="overflow-y-auto max-h-[300px] p-1.5 space-y-0.5">
              {filteredLanguages.length === 0 ? (
                <div className="p-6 text-center text-xs text-stone-500">
                  No languages found
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
                          : "text-stone-700 hover:bg-stone-100/80"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg leading-none">{lang.flag}</span>
                        <div>
                          <p
                            className={`text-xs ${
                              isSelected ? "text-white font-bold" : "text-stone-900 font-medium"
                            }`}
                          >
                            {lang.name}
                          </p>
                          <p
                            className={`text-[10px] ${
                              isSelected ? "text-stone-300" : "text-stone-500"
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
                className="w-6 h-6 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors"
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
