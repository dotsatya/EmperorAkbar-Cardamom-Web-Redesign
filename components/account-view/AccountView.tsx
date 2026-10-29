"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { useCurrency } from "@/components/CurrencyProvider";
import { websiteData } from "@/data/websiteData";

import { TabKey, UserProfile, AddressItem, OrderItem } from "./types";
import { DEFAULT_PROFILE, DEFAULT_ADDRESSES, SAMPLE_ORDERS } from "./constants";

import AccountHeaderBanner from "./AccountHeaderBanner";
import AccountNavigationTabs from "./AccountNavigationTabs";
import AccountOrdersTab from "./AccountOrdersTab";
import AccountProfileTab from "./AccountProfileTab";
import AccountAddressesTab from "./AccountAddressesTab";
import AccountWishlistTab from "./AccountWishlistTab";
import AccountPreferencesTab from "./AccountPreferencesTab";

export default function AccountView() {
  const [activeTab, setActiveTab] = useState<TabKey>("orders");
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [tempProfile, setTempProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [profileSavedToast, setProfileSavedToast] = useState(false);

  const [addresses, setAddresses] = useState<AddressItem[]>(DEFAULT_ADDRESSES);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newAddress, setNewAddress] = useState<Omit<AddressItem, "id">>({
    name: "",
    tag: "Home",
    isDefault: false,
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

  const [addedItemName, setAddedItemName] = useState<string | null>(null);

  const { cartCount, addToCart } = useCart();
  const { formatPrice } = useCurrency();

  // Load profile and addresses from localStorage
  useEffect(() => {
    try {
      const savedProfile = localStorage.getItem("emperorakbar-user-profile");
      if (savedProfile) {
        const parsed = JSON.parse(savedProfile);
        if (
          parsed.email === "vikram.roy@example.com" ||
          parsed.name === "Vikramaditya Roy"
        ) {
          parsed.name = "User 1";
          parsed.email = "user1@example.com";
          localStorage.setItem(
            "emperorakbar-user-profile",
            JSON.stringify(parsed)
          );
        }
        setProfile(parsed);
        setTempProfile(parsed);
      }

      const savedAddresses = localStorage.getItem(
        "emperorakbar-user-addresses"
      );
      if (savedAddresses) {
        setAddresses(JSON.parse(savedAddresses));
      }
    } catch (e) {
      console.error("Error loading account data", e);
    }
  }, []);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(tempProfile);
    setIsEditingProfile(false);
    try {
      localStorage.setItem(
        "emperorakbar-user-profile",
        JSON.stringify(tempProfile)
      );
    } catch (err) {
      console.error(err);
    }
    setProfileSavedToast(true);
    setTimeout(() => setProfileSavedToast(false), 2500);
  };

  const handleCancelEditProfile = () => {
    setTempProfile(profile);
    setIsEditingProfile(false);
  };

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAddress.addressLine1 || !newAddress.city || !newAddress.pincode)
      return;

    const newItem: AddressItem = {
      ...newAddress,
      id: `addr-${Date.now()}`,
    };

    let updated = [...addresses];
    if (newItem.isDefault) {
      updated = updated.map((a) => ({ ...a, isDefault: false }));
    }
    updated.push(newItem);

    setAddresses(updated);
    setIsAddingAddress(false);
    setNewAddress({
      name: "",
      tag: "Home",
      isDefault: false,
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      pincode: "",
      phone: "",
    });

    try {
      localStorage.setItem(
        "emperorakbar-user-addresses",
        JSON.stringify(updated)
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteAddress = (id: string) => {
    const updated = addresses.filter((a) => a.id !== id);
    setAddresses(updated);
    try {
      localStorage.setItem(
        "emperorakbar-user-addresses",
        JSON.stringify(updated)
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleSetDefaultAddress = (id: string) => {
    const updated = addresses.map((a) => ({
      ...a,
      isDefault: a.id === id,
    }));
    setAddresses(updated);
    try {
      localStorage.setItem(
        "emperorakbar-user-addresses",
        JSON.stringify(updated)
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleReorder = (item: OrderItem["items"][number]) => {
    addToCart({
      id: `${item.grade.toLowerCase()}-grade`,
      name: item.name,
      price: item.price,
      image: typeof item.image === "string" ? item.image : item.image.src,
      weight: item.weight,
      quantity: 1,
    });
    setAddedItemName(item.name);
    setTimeout(() => setAddedItemName(null), 2000);
  };

  // Wishlist Items based on websiteData shop products
  const wishlistProducts = websiteData.shop?.products?.slice(0, 3) || [];

  return (
    <div className="font-sans bg-stone-50 min-h-screen text-stone-900 pb-16 sm:pb-20">
      {/* Toast Notification */}
      {profileSavedToast && (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-[#172d1f] text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl shadow-2xl flex items-center gap-2 text-xs font-semibold animate-in fade-in slide-in-from-bottom-2 duration-300">
          <Check className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Profile changes saved successfully!</span>
        </div>
      )}

      {addedItemName && (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-[#172d1f] text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl shadow-2xl flex items-center gap-2 text-xs font-semibold animate-in fade-in slide-in-from-bottom-2 duration-300">
          <Check className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Added to your shopping cart!</span>
        </div>
      )}

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-8 md:pt-12">
        {/* User Profile Banner */}
        <AccountHeaderBanner
          profile={profile}
          ordersCount={SAMPLE_ORDERS.length}
          addressesCount={addresses.length}
          cartCount={cartCount}
        />

        {/* Layout Grid: Left Navigation Tabs + Right Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <AccountNavigationTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            ordersCount={SAMPLE_ORDERS.length}
            addressesCount={addresses.length}
            wishlistCount={wishlistProducts.length}
          />

          {/* Main Tab View Container */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6">
            {activeTab === "orders" && (
              <AccountOrdersTab
                orders={SAMPLE_ORDERS}
                onReorder={handleReorder}
                formatPrice={formatPrice}
              />
            )}

            {activeTab === "profile" && (
              <AccountProfileTab
                profile={profile}
                tempProfile={tempProfile}
                setTempProfile={setTempProfile}
                isEditingProfile={isEditingProfile}
                setIsEditingProfile={setIsEditingProfile}
                onSaveProfile={handleSaveProfile}
                onCancelEdit={handleCancelEditProfile}
              />
            )}

            {activeTab === "addresses" && (
              <AccountAddressesTab
                addresses={addresses}
                isAddingAddress={isAddingAddress}
                setIsAddingAddress={setIsAddingAddress}
                newAddress={newAddress}
                setNewAddress={setNewAddress}
                onAddAddress={handleAddAddress}
                onDeleteAddress={handleDeleteAddress}
                onSetDefaultAddress={handleSetDefaultAddress}
              />
            )}

            {activeTab === "wishlist" && (
              <AccountWishlistTab
                products={wishlistProducts}
                onAddToCart={(prod) => {
                  addToCart({
                    id: prod.id,
                    name: prod.name,
                    price: prod.price,
                    image:
                      typeof prod.image === "string"
                        ? prod.image
                        : (prod.image as { src?: string })?.src || "",
                    weight: prod.weights?.[0] || "100 gm",
                    quantity: 1,
                  });
                  setAddedItemName(prod.name);
                  setTimeout(() => setAddedItemName(null), 2000);
                }}
                formatPrice={formatPrice}
              />
            )}

            {activeTab === "preferences" && <AccountPreferencesTab />}
          </div>
        </div>
      </main>
    </div>
  );
}

