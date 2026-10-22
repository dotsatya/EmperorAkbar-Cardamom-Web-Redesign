import type { Metadata } from "next";
import CartView from "@/components/CartView";

export const metadata: Metadata = {
  title: "Your Shopping Cart | Emperor Akbar Cardamom",
  description: "View and manage items in your Emperor Akbar Cardamom cart.",
  alternates: {
    canonical: "/cart/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function CartPage() {
  return <CartView />;
}
