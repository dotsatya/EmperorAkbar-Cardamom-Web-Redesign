"use client";

import React from "react";
import { Plus, Trash2, MapPin, Building, Home, Check } from "lucide-react";
import { AddressItem } from "./types";

interface AccountAddressesTabProps {
  addresses: AddressItem[];
  isAddingAddress: boolean;
  setIsAddingAddress: (adding: boolean) => void;
  newAddress: Omit<AddressItem, "id">;
  setNewAddress: React.Dispatch<React.SetStateAction<Omit<AddressItem, "id">>>;
  onAddAddress: (e: React.FormEvent) => void;
  onDeleteAddress: (id: string) => void;
  onSetDefaultAddress: (id: string) => void;
}

export default function AccountAddressesTab({
  addresses,
  isAddingAddress,
  setIsAddingAddress,
  newAddress,
  setNewAddress,
  onAddAddress,
  onDeleteAddress,
  onSetDefaultAddress,
}: AccountAddressesTabProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Tab Header */}
      <div className="flex items-center justify-between gap-2 pb-1">
        <div>
          <h2 className="text-base sm:text-xl md:text-2xl font-bold text-stone-900 tracking-tight">
            Saved Addresses
          </h2>
          <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
            Manage your delivery locations for swift, secure checkout.
          </p>
        </div>

        {!isAddingAddress && (
          <button
            type="button"
            onClick={() => setIsAddingAddress(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#172d1f] hover:bg-[#122418] text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Address</span>
          </button>
        )}
      </div>

      {/* Add Address Form Box */}
      {isAddingAddress && (
        <form
          onSubmit={onAddAddress}
          className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#172d1f]/30 shadow-md space-y-3.5 sm:space-y-4 animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <h3 className="text-xs sm:text-sm md:text-base font-bold text-stone-900">
              Add New Delivery Address
            </h3>
            <button
              type="button"
              onClick={() => setIsAddingAddress(false)}
              className="text-stone-400 hover:text-stone-700 text-xs font-semibold cursor-pointer"
            >
              Cancel
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-[10px] sm:text-xs font-bold text-stone-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={newAddress.name}
                onChange={(e) =>
                  setNewAddress({
                    ...newAddress,
                    name: e.target.value,
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-stone-200/90 text-xs sm:text-sm text-stone-800 bg-stone-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#172d1f]/15"
                placeholder="Recipient name"
              />
            </div>

            <div>
              <label className="block text-[10px] sm:text-xs font-bold text-stone-600 mb-1">
                Contact Phone
              </label>
              <input
                type="tel"
                required
                value={newAddress.phone}
                onChange={(e) =>
                  setNewAddress({
                    ...newAddress,
                    phone: e.target.value,
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-stone-200/90 text-xs sm:text-sm text-stone-800 bg-stone-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#172d1f]/15"
                placeholder="+91 Phone number"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[10px] sm:text-xs font-bold text-stone-600 mb-1">
                Address Line 1
              </label>
              <input
                type="text"
                required
                value={newAddress.addressLine1}
                onChange={(e) =>
                  setNewAddress({
                    ...newAddress,
                    addressLine1: e.target.value,
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-stone-200/90 text-xs sm:text-sm text-stone-800 bg-stone-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#172d1f]/15"
                placeholder="Flat, House no., Building, Street"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[10px] sm:text-xs font-bold text-stone-600 mb-1">
                Address Line 2 (Optional)
              </label>
              <input
                type="text"
                value={newAddress.addressLine2}
                onChange={(e) =>
                  setNewAddress({
                    ...newAddress,
                    addressLine2: e.target.value,
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-stone-200/90 text-xs sm:text-sm text-stone-800 bg-stone-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#172d1f]/15"
                placeholder="Landmark, Area name"
              />
            </div>

            <div>
              <label className="block text-[10px] sm:text-xs font-bold text-stone-600 mb-1">
                City
              </label>
              <input
                type="text"
                required
                value={newAddress.city}
                onChange={(e) =>
                  setNewAddress({
                    ...newAddress,
                    city: e.target.value,
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-stone-200/90 text-xs sm:text-sm text-stone-800 bg-stone-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#172d1f]/15"
                placeholder="City"
              />
            </div>

            <div>
              <label className="block text-[10px] sm:text-xs font-bold text-stone-600 mb-1">
                State
              </label>
              <input
                type="text"
                required
                value={newAddress.state}
                onChange={(e) =>
                  setNewAddress({
                    ...newAddress,
                    state: e.target.value,
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-stone-200/90 text-xs sm:text-sm text-stone-800 bg-stone-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#172d1f]/15"
                placeholder="State"
              />
            </div>

            <div>
              <label className="block text-[10px] sm:text-xs font-bold text-stone-600 mb-1">
                Postal PIN Code
              </label>
              <input
                type="text"
                required
                value={newAddress.pincode}
                onChange={(e) =>
                  setNewAddress({
                    ...newAddress,
                    pincode: e.target.value,
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-stone-200/90 text-xs sm:text-sm text-stone-800 bg-stone-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#172d1f]/15"
                placeholder="6-digit PIN"
              />
            </div>

            <div>
              <label className="block text-[10px] sm:text-xs font-bold text-stone-600 mb-1">
                Address Tag
              </label>
              <select
                value={newAddress.tag}
                onChange={(e) =>
                  setNewAddress({
                    ...newAddress,
                    tag: e.target.value,
                  })
                }
                className="w-full px-3 py-2 rounded-xl border border-stone-200/90 text-xs sm:text-sm text-stone-800 bg-stone-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#172d1f]/15 cursor-pointer"
              >
                <option value="Home">Home</option>
                <option value="Work">Work / Office</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="default-check"
              checked={newAddress.isDefault}
              onChange={(e) =>
                setNewAddress({
                  ...newAddress,
                  isDefault: e.target.checked,
                })
              }
              className="rounded text-[#172d1f] w-4 h-4 cursor-pointer"
            />
            <label
              htmlFor="default-check"
              className="text-xs text-stone-700 font-medium cursor-pointer"
            >
              Set as primary shipping address
            </label>
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-stone-100">
            <button
              type="button"
              onClick={() => setIsAddingAddress(false)}
              className="px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-xl cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-bold text-white bg-[#172d1f] hover:bg-black rounded-xl transition-all shadow-xs cursor-pointer active:scale-95"
            >
              Save Address
            </button>
          </div>
        </form>
      )}

      {/* Addresses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={`bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border transition-all duration-300 relative flex flex-col justify-between ${
              addr.isDefault
                ? "border-[#172d1f] shadow-xs ring-1 ring-[#172d1f]/10"
                : "border-stone-200/80 hover:border-stone-300 shadow-2xs"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                    {addr.tag === "Home" ? (
                      <Home className="w-3 h-3 text-stone-500" />
                    ) : addr.tag === "Work" ? (
                      <Building className="w-3 h-3 text-stone-500" />
                    ) : (
                      <MapPin className="w-3 h-3 text-stone-500" />
                    )}
                    <span>{addr.tag}</span>
                  </span>

                  {addr.isDefault && (
                    <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#172d1f] text-[#d4af37]">
                      <Check className="w-2.5 h-2.5" />
                      <span>Default</span>
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => onDeleteAddress(addr.id)}
                  className="p-1.5 text-stone-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                  title="Delete address"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <h4 className="font-bold text-xs sm:text-sm text-stone-900 mb-1">
                {addr.name}
              </h4>
              <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed">
                {addr.addressLine1}
                {addr.addressLine2 ? `, ${addr.addressLine2}` : ""}
                <br />
                {addr.city}, {addr.state} - {addr.pincode}
              </p>
              <p className="text-[10px] sm:text-xs text-stone-500 mt-2 font-medium">
                Phone: {addr.phone}
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100 mt-3">
              {!addr.isDefault ? (
                <button
                  type="button"
                  onClick={() => onSetDefaultAddress(addr.id)}
                  className="text-[11px] sm:text-xs font-bold text-[#172d1f] hover:text-[#d4af37] transition-colors cursor-pointer inline-flex items-center gap-1"
                >
                  <span>Set as Default</span>
                </button>
              ) : (
                <span className="text-[10px] sm:text-xs font-semibold text-emerald-700 flex items-center gap-1">
                  Primary Delivery Address
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
