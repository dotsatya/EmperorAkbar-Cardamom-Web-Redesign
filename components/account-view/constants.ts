import { Photos } from "@/data/websiteData";
import { UserProfile, AddressItem, OrderItem } from "./types";

export const DEFAULT_PROFILE: UserProfile = {
  name: "User 1",
  email: "user1@example.com",
  phone: "+91 98765 43210",
  dob: "1990-08-15",
  preferredGrade: "Purple Grade (8mm+)",
};

export const DEFAULT_ADDRESSES: AddressItem[] = [
  {
    id: "addr-1",
    name: "User 1",
    tag: "Home",
    isDefault: true,
    addressLine1: "Flat 402, Royal Palms Residency",
    addressLine2: "Off Cunningham Road, Vasanth Nagar",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560052",
    phone: "+91 98765 43210",
  },
  {
    id: "addr-2",
    name: "User 1",
    tag: "Work",
    isDefault: false,
    addressLine1: "Tower B, 7th Floor, World Trade Centre",
    addressLine2: "Brigade Gateway, Malleshwaram",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560055",
    phone: "+91 98765 43210",
  },
];

export const SAMPLE_ORDERS: OrderItem[] = [
  {
    id: "ord-1",
    orderNumber: "EA-908234",
    date: "October 24, 2026",
    status: "In Transit",
    statusColor: "bg-amber-50 text-amber-700 border-amber-200",
    total: 4448,
    items: [
      {
        name: "Purple Grade (8 mm & above) Cardamom",
        grade: "Purple",
        size: "8mm & above",
        weight: "100 gm",
        price: 2299,
        quantity: 1,
        image: Photos.purpleSeed?.[0]?.src || "/images/cardamom-purple.png",
      },
      {
        name: "Green Grade (7-8mm) Cardamom",
        grade: "Green",
        size: "7mm - 8mm",
        weight: "100 gm",
        price: 2149,
        quantity: 1,
        image: Photos.greenSeed?.[0]?.src || "/images/cardamom-green.png",
      },
    ],
  },
  {
    id: "ord-2",
    orderNumber: "EA-884120",
    date: "September 15, 2026",
    status: "Delivered",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    total: 2299,
    items: [
      {
        name: "Purple Grade (8 mm & above) Cardamom",
        grade: "Purple",
        size: "8mm & above",
        weight: "100 gm",
        price: 2299,
        quantity: 1,
        image: Photos.purpleSeed?.[0]?.src || "/images/cardamom-purple.png",
      },
    ],
  },
  {
    id: "ord-3",
    orderNumber: "EA-791054",
    date: "July 02, 2026",
    status: "Delivered",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    total: 1849,
    items: [
      {
        name: "Red Grade (6-7mm) Cardamom",
        grade: "Red",
        size: "6mm - 7mm",
        weight: "100 gm",
        price: 1849,
        quantity: 1,
        image: Photos.redSeed?.[0]?.src || "/images/cardamom-red.png",
      },
    ],
  },
];

export const PROFILE_STORAGE_KEY = "emperorakbar-user-profile";
export const ADDRESSES_STORAGE_KEY = "emperorakbar-user-addresses";

