"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Bell, MessageSquare, BookOpen } from "lucide-react";

export default function AccountPreferencesTab() {
  const [newsletterEnabled, setNewsletterEnabled] = useState(true);
  const [smsTrackingEnabled, setSmsTrackingEnabled] = useState(true);

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-stone-200/80 shadow-xs space-y-4 sm:space-y-6">
      <div className="pb-1 border-b border-stone-100">
        <h2 className="text-base sm:text-xl md:text-2xl font-bold text-stone-900 tracking-tight">
          Preferences & Privacy
        </h2>
        <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
          Customize your alerts, dispatch notifications, and account security.
        </p>
      </div>

      <div className="divide-y divide-stone-100">
        {/* Newsletter & Harvest Alerts */}
        <div className="py-3.5 sm:py-4 flex items-center justify-between gap-4">
          <div className="flex items-start gap-3 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600 shrink-0 mt-0.5">
              <Bell className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-stone-900">
                Email Newsletter & Seasonal Harvest Drops
              </h4>
              <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
                Receive private notifications when limited Purple 8mm+ harvest lots are packaged.
              </p>
            </div>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={newsletterEnabled}
            onClick={() => setNewsletterEnabled(!newsletterEnabled)}
            className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-200 shrink-0 ${
              newsletterEnabled ? "bg-[#172d1f]" : "bg-stone-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                newsletterEnabled ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* SMS / WhatsApp Courier Updates */}
        <div className="py-3.5 sm:py-4 flex items-center justify-between gap-4">
          <div className="flex items-start gap-3 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600 shrink-0 mt-0.5">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-stone-900">
                SMS & WhatsApp Tracking Updates
              </h4>
              <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
                Real-time courier dispatch status and delivery OTP directly to your mobile.
              </p>
            </div>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={smsTrackingEnabled}
            onClick={() => setSmsTrackingEnabled(!smsTrackingEnabled)}
            className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-200 shrink-0 ${
              smsTrackingEnabled ? "bg-[#172d1f]" : "bg-stone-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                smsTrackingEnabled ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Two-Factor Authentication */}
        <div className="py-3.5 sm:py-4 flex items-center justify-between gap-4">
          <div className="flex items-start gap-3 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-stone-900">
                Two-Factor Authentication
              </h4>
              <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
                Protect your account with SMS OTP verification upon sign-in.
              </p>
            </div>
          </div>

          <span className="text-[10px] sm:text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full shrink-0 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>Enabled</span>
          </span>
        </div>

        {/* Cardamom Grading Guide */}
        <div className="py-3.5 sm:py-4 flex items-center justify-between gap-4">
          <div className="flex items-start gap-3 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600 shrink-0 mt-0.5">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-stone-900">
                Cardamom Grading Guide
              </h4>
              <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
                Review the 5 colour-coded grades and pod diameter specifications.
              </p>
            </div>
          </div>

          <Link
            href="/cardamom-grades"
            className="text-xs font-bold text-[#172d1f] hover:text-[#d4af37] flex items-center gap-1 shrink-0 group transition-colors"
          >
            <span>Read Guide</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
