"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Currency = {
  code: string;
  name: string;
  symbol: string;
  flag: string;
  rate: number; // Conversion rate relative to 1 INR (e.g. 1 INR = 0.012 USD)
  decimals: number;
};

export const SUPPORTED_CURRENCIES: Currency[] = [
  {
    code: "INR",
    name: "Indian Rupee",
    symbol: "₹",
    flag: "🇮🇳",
    rate: 1.0,
    decimals: 0,
  },
  {
    code: "USD",
    name: "US Dollar",
    symbol: "$",
    flag: "🇺🇸",
    rate: 0.012,
    decimals: 2,
  },
  {
    code: "EUR",
    name: "Euro",
    symbol: "€",
    flag: "🇪🇺",
    rate: 0.011,
    decimals: 2,
  },
  {
    code: "GBP",
    name: "British Pound",
    symbol: "£",
    flag: "🇬🇧",
    rate: 0.0094,
    decimals: 2,
  },
  {
    code: "AED",
    name: "UAE Dirham",
    symbol: "AED ",
    flag: "🇦🇪",
    rate: 0.044,
    decimals: 2,
  },
  {
    code: "SAR",
    name: "Saudi Riyal",
    symbol: "SAR ",
    flag: "🇸🇦",
    rate: 0.045,
    decimals: 2,
  },
  {
    code: "CAD",
    name: "Canadian Dollar",
    symbol: "CA$",
    flag: "🇨🇦",
    rate: 0.016,
    decimals: 2,
  },
  {
    code: "AUD",
    name: "Australian Dollar",
    symbol: "AU$",
    flag: "🇦🇺",
    rate: 0.018,
    decimals: 2,
  },
  {
    code: "SGD",
    name: "Singapore Dollar",
    symbol: "SG$",
    flag: "🇸🇬",
    rate: 0.016,
    decimals: 2,
  },
  {
    code: "KWD",
    name: "Kuwaiti Dinar",
    symbol: "KD ",
    flag: "🇰🇼",
    rate: 0.0037,
    decimals: 3,
  },
  {
    code: "QAR",
    name: "Qatari Riyal",
    symbol: "QAR ",
    flag: "🇶🇦",
    rate: 0.044,
    decimals: 2,
  },
  {
    code: "JPY",
    name: "Japanese Yen",
    symbol: "¥",
    flag: "🇯🇵",
    rate: 1.85,
    decimals: 0,
  },
];

type CurrencyContextType = {
  currency: Currency;
  currencies: Currency[];
  setCurrency: (code: string) => void;
  convertPrice: (priceInINR: number) => number;
  formatPrice: (priceInINR: number) => string;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(SUPPORTED_CURRENCIES[0]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load preferred currency from localStorage
  useEffect(() => {
    try {
      const savedCode = localStorage.getItem("emperorakbar-currency");
      if (savedCode) {
        const found = SUPPORTED_CURRENCIES.find((c) => c.code === savedCode);
        if (found) {
          setCurrencyState(found);
        }
      }
    } catch (e) {
      console.error("Failed to load currency from storage", e);
    }
    setIsLoaded(true);
  }, []);

  const setCurrency = (code: string) => {
    const found = SUPPORTED_CURRENCIES.find((c) => c.code === code);
    if (found) {
      setCurrencyState(found);
      try {
        localStorage.setItem("emperorakbar-currency", code);
      } catch (e) {
        console.error("Failed to save currency to storage", e);
      }
    }
  };

  const convertPrice = (priceInINR: number): number => {
    const converted = priceInINR * currency.rate;
    if (currency.decimals === 0) {
      return Math.round(converted);
    }
    return Number(converted.toFixed(currency.decimals));
  };

  const formatPrice = (priceInINR: number): string => {
    const converted = priceInINR * currency.rate;

    if (currency.code === "INR") {
      return `₹${Math.round(priceInINR).toLocaleString("en-IN")}`;
    }

    if (currency.decimals === 0) {
      return `${currency.symbol}${Math.round(converted).toLocaleString()}`;
    }

    return `${currency.symbol}${converted.toFixed(currency.decimals)}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        currencies: SUPPORTED_CURRENCIES,
        setCurrency,
        convertPrice,
        formatPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}

