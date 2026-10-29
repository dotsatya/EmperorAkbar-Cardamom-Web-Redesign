"use client";

import React from "react";
import Link from "next/link";
import { Edit2, Check, Award, User, Mail, Phone, Calendar, Sparkles } from "lucide-react";
import { UserProfile } from "./types";

interface AccountProfileTabProps {
  profile: UserProfile;
  tempProfile: UserProfile;
  setTempProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  isEditingProfile: boolean;
  setIsEditingProfile: (editing: boolean) => void;
  onSaveProfile: (e: React.FormEvent) => void;
  onCancelEdit: () => void;
}

export default function AccountProfileTab({
  profile,
  tempProfile,
  setTempProfile,
  isEditingProfile,
  setIsEditingProfile,
  onSaveProfile,
  onCancelEdit,
}: AccountProfileTabProps) {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-stone-200/80 shadow-xs space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between gap-2 pb-1 border-b border-stone-100">
        <div>
          <h2 className="text-base sm:text-xl md:text-2xl font-bold text-stone-900 tracking-tight">
            Personal Information
          </h2>
          <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
            Manage your personal profile details and preferred cardamom grades.
          </p>
        </div>

        {!isEditingProfile && (
          <button
            type="button"
            onClick={() => setIsEditingProfile(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-stone-100 hover:bg-[#172d1f] text-stone-800 hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 active:scale-95 shadow-2xs"
          >
            <Edit2 className="w-3.5 h-3.5" />
            <span>Edit Profile</span>
          </button>
        )}
      </div>

      <form onSubmit={onSaveProfile} className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          <div>
            <label className="block text-[10px] sm:text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                disabled={!isEditingProfile}
                value={isEditingProfile ? tempProfile.name : profile.name}
                onChange={(e) =>
                  setTempProfile({
                    ...tempProfile,
                    name: e.target.value,
                  })
                }
                className="w-full pl-3 pr-3 py-2 sm:py-2.5 rounded-xl border border-stone-200/90 bg-stone-50/70 text-stone-900 text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#172d1f]/15 focus:border-[#172d1f] disabled:opacity-80 transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] sm:text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                disabled={!isEditingProfile}
                value={isEditingProfile ? tempProfile.email : profile.email}
                onChange={(e) =>
                  setTempProfile({
                    ...tempProfile,
                    email: e.target.value,
                  })
                }
                className="w-full pl-3 pr-3 py-2 sm:py-2.5 rounded-xl border border-stone-200/90 bg-stone-50/70 text-stone-900 text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#172d1f]/15 focus:border-[#172d1f] disabled:opacity-80 transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] sm:text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
              Phone Number
            </label>
            <div className="relative">
              <input
                type="tel"
                disabled={!isEditingProfile}
                value={isEditingProfile ? tempProfile.phone : profile.phone}
                onChange={(e) =>
                  setTempProfile({
                    ...tempProfile,
                    phone: e.target.value,
                  })
                }
                className="w-full pl-3 pr-3 py-2 sm:py-2.5 rounded-xl border border-stone-200/90 bg-stone-50/70 text-stone-900 text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#172d1f]/15 focus:border-[#172d1f] disabled:opacity-80 transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] sm:text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
              Date of Birth
            </label>
            <div className="relative">
              <input
                type="date"
                disabled={!isEditingProfile}
                value={isEditingProfile ? tempProfile.dob : profile.dob}
                onChange={(e) =>
                  setTempProfile({
                    ...tempProfile,
                    dob: e.target.value,
                  })
                }
                className="w-full pl-3 pr-3 py-2 sm:py-2.5 rounded-xl border border-stone-200/90 bg-stone-50/70 text-stone-900 text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#172d1f]/15 focus:border-[#172d1f] disabled:opacity-80 transition-all"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-[10px] sm:text-xs font-bold text-stone-500 uppercase tracking-wider mb-1.5">
              Preferred Cardamom Grade
            </label>
            <select
              disabled={!isEditingProfile}
              value={
                isEditingProfile
                  ? tempProfile.preferredGrade
                  : profile.preferredGrade
              }
              onChange={(e) =>
                setTempProfile({
                  ...tempProfile,
                  preferredGrade: e.target.value,
                })
              }
              className="w-full px-3 py-2 sm:py-2.5 rounded-xl border border-stone-200/90 bg-stone-50/70 text-stone-900 text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#172d1f]/15 focus:border-[#172d1f] disabled:opacity-80 cursor-pointer transition-all"
            >
              <option value="Purple Grade (8mm+)">
                Purple Grade (8mm & above) • Boldest Gourmet
              </option>
              <option value="Pink Grade (7.5mm+)">
                Pink Grade (7.5mm & above) • Premium Home Use
              </option>
              <option value="Green Grade (7-8mm)">
                Green Grade (7mm - 8mm) • Authentic Alleppey
              </option>
              <option value="Orange Grade (6.5-7.5mm)">
                Orange Grade (6.5mm - 7.5mm) • Industrial & Commercial
              </option>
              <option value="Red Grade (6-7mm)">
                Red Grade (6mm - 7mm) • Standard Grade
              </option>
            </select>
          </div>
        </div>

        {isEditingProfile && (
          <div className="flex items-center gap-2.5 pt-3.5 border-t border-stone-100 justify-end">
            <button
              type="button"
              onClick={onCancelEdit}
              className="px-4 py-2 text-xs font-bold text-stone-600 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold text-white bg-[#172d1f] hover:bg-[#122418] rounded-xl transition-all shadow-xs cursor-pointer flex items-center gap-1.5 active:scale-95"
            >
              <Check className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Save Changes</span>
            </button>
          </div>
        )}
      </form>

      {/* Loyalty Privilege Card */}
      <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#d4af37]/15 via-[#d4af37]/5 to-stone-50 border border-[#d4af37]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#172d1f] text-[#d4af37] flex items-center justify-center shrink-0 shadow-xs">
            <Award className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-stone-900 tracking-tight">
              Emperor Akbar Loyalty Privileges
            </h4>
            <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5">
              Enjoy complimentary priority shipping and reserved access to fresh Alleppey harvests.
            </p>
          </div>
        </div>
        <Link
          href="/shop"
          className="px-4 py-2 text-xs font-bold text-white bg-[#172d1f] hover:bg-black rounded-xl transition-colors shrink-0 shadow-2xs self-start sm:self-auto cursor-pointer"
        >
          Explore Shop
        </Link>
      </div>
    </div>
  );
}
