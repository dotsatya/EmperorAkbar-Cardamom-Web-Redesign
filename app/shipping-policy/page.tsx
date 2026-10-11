import React from "react";
import type { Metadata } from "next";
import { websiteData } from "@/data/websiteData";
import PolicyLayout from "@/components/policy/PolicyLayout";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | Emperor Akbar Cardamom",
  description:
    "Learn about our dispatch times, domestic and international shipping details, tracking, and customs advisory for Emperor Akbar Cardamom.",
};

export default function ShippingPolicyPage() {
  const { shippingPolicy } = websiteData;

  return (
    <PolicyLayout
      title={shippingPolicy.title}
      sections={shippingPolicy.sections}
      supportEmail="birbal@emperorakbar.com"
    />
  );
}
