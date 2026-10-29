"use client";

import React from "react";
import Link from "next/link";
import {
  Package,
  User,
  MapPin,
  Heart,
  Settings,
  ChevronRight,
  ShoppingCart,
  LogOut,
} from "lucide-react";
import { TabKey } from "./types";

interface AccountNavigationTabsProps {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
  ordersCount: number;
  addressesCount: number;
  wishlistCount: number;
}

export default function AccountNavigationTabs({
  activeTab,
  setActiveTab,
  ordersCount,
  addressesCount,
  wishlistCount,
}: AccountNavigationTabsProps) {
  return (
    <aside className="lg:col-span-1">
      <div className="bg-white rounded-2xl lg:rounded-3xl p-1.5 sm:p-2 lg:p-3 border border-stone-200/80 shadow-xs lg:sticky lg:top-28 flex lg:flex-col overflow-x-auto scrollbar-hide gap-1 sm:gap-1.5">
        <button
          type="button"
          onClick={() => setActiveTab("orders")}
          className={`flex items-center justify-between gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 lg:w-full whitespace-nowrap active:scale-[0.98] ${
            activeTab === "orders"
              ? "bg-[#172d1f] text-white shadow-xs"
              : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
          }`}
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Package
              className={`w-4 h-4 ${
                activeTab === "orders" ? "text-[#d4af37]" : "text-stone-400"
              }`}
            />
            <span>Orders</span>
          </div>
          <span
            className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors ${
              activeTab === "orders"
                ? "bg-white/20 text-white"
                : "bg-stone-100 text-stone-500"
            }`}
          >
            {ordersCount}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("profile")}
          className={`flex items-center justify-between gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 lg:w-full whitespace-nowrap active:scale-[0.98] ${
            activeTab === "profile"
              ? "bg-[#172d1f] text-white shadow-xs"
              : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
          }`}
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <User
              className={`w-4 h-4 ${
                activeTab === "profile" ? "text-[#d4af37]" : "text-stone-400"
              }`}
            />
            <span>Profile</span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 opacity-60 hidden lg:block" />
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("addresses")}
          className={`flex items-center justify-between gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 lg:w-full whitespace-nowrap active:scale-[0.98] ${
            activeTab === "addresses"
              ? "bg-[#172d1f] text-white shadow-xs"
              : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
          }`}
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <MapPin
              className={`w-4 h-4 ${
                activeTab === "addresses" ? "text-[#d4af37]" : "text-stone-400"
              }`}
            />
            <span>Addresses</span>
          </div>
          <span
            className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors ${
              activeTab === "addresses"
                ? "bg-white/20 text-white"
                : "bg-stone-100 text-stone-500"
            }`}
          >
            {addressesCount}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("wishlist")}
          className={`flex items-center justify-between gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 lg:w-full whitespace-nowrap active:scale-[0.98] ${
            activeTab === "wishlist"
              ? "bg-[#172d1f] text-white shadow-xs"
              : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
          }`}
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Heart
              className={`w-4 h-4 ${
                activeTab === "wishlist" ? "text-[#d4af37]" : "text-stone-400"
              }`}
            />
            <span>Wishlist</span>
          </div>
          <span
            className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors ${
              activeTab === "wishlist"
                ? "bg-white/20 text-white"
                : "bg-stone-100 text-stone-500"
            }`}
          >
            {wishlistCount}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("preferences")}
          className={`flex items-center justify-between gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 lg:w-full whitespace-nowrap active:scale-[0.98] ${
            activeTab === "preferences"
              ? "bg-[#172d1f] text-white shadow-xs"
              : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
          }`}
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Settings
              className={`w-4 h-4 ${
                activeTab === "preferences" ? "text-[#d4af37]" : "text-stone-400"
              }`}
            />
            <span>Preferences</span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 opacity-60 hidden lg:block" />
        </button>

        <div className="hidden lg:block pt-3 border-t border-stone-100 mt-2">
          <Link
            href="/shop"
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold text-[#172d1f] hover:bg-[#172d1f]/5 transition-colors"
          >
            <ShoppingCart className="w-4 h-4 text-[#d4af37]" />
            <span>Explore Spice Store</span>
          </Link>
          <Link
            href="/"
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold text-stone-500 hover:text-stone-800 hover:bg-stone-50 transition-colors"
          >
            <LogOut className="w-4 h-4 text-stone-400" />
            <span>Sign Out</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
