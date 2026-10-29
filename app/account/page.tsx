import type { Metadata } from "next";
import AccountView from "./AccountView";

export const metadata: Metadata = {
  title: "My Account | Emperor Akbar Cardamom",
  description:
    "Manage your personal profile, review order history, delivery addresses, and cardamom favorites at Emperor Akbar.",
  alternates: {
    canonical: "/account/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function AccountPage() {
  return <AccountView />;
}
