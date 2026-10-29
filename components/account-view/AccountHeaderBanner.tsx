"use client";

import React from "react";
import Link from "next/link";
import { Award, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { UserProfile } from "./types";

interface AccountHeaderBannerProps {
  profile: UserProfile;
  ordersCount: number;
  addressesCount: number;
  cartCount: number;
}

export default function AccountHeaderBanner({
  profile,
  ordersCount,
  addressesCount,
  cartCount,
}: AccountHeaderBannerProps) {
  const avatarInitials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#172d1f] via-[#1d3827] to-[#122418] text-white p-4 sm:p-6 md:p-8 shadow-md mb-4 sm:mb-8 border border-white/10">
      {/* Subtle Royal Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_65%)] pointer-events-none" />
      <div className="absolute -right-6 -bottom-6 opacity-5 pointer-events-none select-none">
        <Award className="w-56 h-56 sm:w-72 sm:h-72 text-[#d4af37]" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
        {/* Avatar & User Details */}
        <div className="flex items-center gap-3.5 sm:gap-5 min-w-0">
          <div className="relative shrink-0">
            <div className="w-13 h-13 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#d4af37] via-[#c49d2c] to-[#8a681d] text-white flex items-center justify-center text-lg sm:text-2xl md:text-3xl font-extrabold shadow-md ring-2 sm:ring-4 ring-white/15">
              {avatarInitials}
            </div>
            <div className="absolute -bottom-1 -right-1 bg-[#172d1f] border border-[#d4af37] text-[#d4af37] p-1 rounded-full shadow-md">
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </div>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-0.5">
              <h1 className="text-base sm:text-xl md:text-2xl font-bold tracking-tight text-white truncate">
                {profile.name}
              </h1>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-2.5 h-2.5" />
                <span>Verified</span>
              </span>
            </div>
            <p className="text-stone-300 text-[11px] sm:text-xs md:text-sm truncate">
              {profile.email}
            </p>
            <p className="text-stone-300 text-[11px] sm:text-xs md:text-sm">
              {profile.phone}
            </p>
          </div>
        </div>

        {/* Quick Stats Pill Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full md:w-auto shrink-0">
          <div className="bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 text-center transition-all">
            <span className="block text-base sm:text-xl md:text-2xl font-extrabold text-white">
              {ordersCount}
            </span>
            <span className="text-[9px] sm:text-[10px] text-stone-300 font-semibold uppercase tracking-wider">
              Orders
            </span>
          </div>

          <div className="bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 text-center transition-all">
            <span className="block text-base sm:text-xl md:text-2xl font-extrabold text-white">
              {addressesCount}
            </span>
            <span className="text-[9px] sm:text-[10px] text-stone-300 font-semibold uppercase tracking-wider">
              Addresses
            </span>
          </div>

          <Link
            href="/cart"
            className="bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 text-center transition-all group cursor-pointer active:scale-95"
          >
            <span className="block text-base sm:text-xl md:text-2xl font-extrabold text-white group-hover:scale-105 transition-transform">
              {cartCount}
            </span>
            <span className="text-[9px] sm:text-[10px] text-stone-300 font-semibold uppercase tracking-wider flex items-center justify-center gap-0.5 sm:gap-1">
              In Cart <ArrowRight className="w-2.5 h-2.5 text-[#d4af37]" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
