import React from "react";
import type { Metadata } from "next";
import { websiteData } from "@/data/websiteData";
import PolicyLayout from "@/components/policy/PolicyLayout";

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy",
  description:
    "Learn about our dispatch times, domestic and international shipping details, tracking, and customs advisory for Emperor Akbar Cardamom.",
  alternates: {
    canonical: "/shipping-policy/",
  },
  openGraph: {
    title: "Shipping & Delivery Policy | Emperor Akbar Cardamom",
    description:
      "Learn about our dispatch times, domestic and international shipping details, tracking, and customs advisory for Emperor Akbar Cardamom.",
    url: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/shipping-policy/",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Shipping Policy",
      item: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/shipping-policy/",
    },
  ],
};

export default function ShippingPolicyPage() {
  const { shippingPolicy } = websiteData;

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PolicyLayout
        title={shippingPolicy.title}
        sections={shippingPolicy.sections}
        supportEmail="birbal@emperorakbar.com"
      />
    </>
  );
}
