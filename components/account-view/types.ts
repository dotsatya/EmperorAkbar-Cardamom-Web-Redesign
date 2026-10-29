import { StaticImageData } from "next/image";

export type TabKey = "orders" | "profile" | "addresses" | "wishlist" | "preferences";

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  dob: string;
  preferredGrade: string;
}

export interface AddressItem {
  id: string;
  name: string;
  tag: string;
  isDefault: boolean;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

export interface OrderItem {
  id: string;
  orderNumber: string;
  date: string;
  status: "Delivered" | "In Transit" | "Processing";
  statusColor: string;
  total: number;
  items: {
    name: string;
    grade: string;
    size: string;
    weight: string;
    price: number;
    quantity: number;
    image: string | StaticImageData;
  }[];
}

