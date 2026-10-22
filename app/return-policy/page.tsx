import React from "react";
import type { Metadata } from "next";
import { websiteData } from "@/data/websiteData";
import PolicyLayout from "@/components/policy/PolicyLayout";

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Return & Refund Policy",
  description:
    "Information regarding returns, exchanges, EU right of withdrawal, and quality satisfaction guarantee for Emperor Akbar Cardamom.",
  alternates: {
    canonical: "/return-policy/",
  },
  openGraph: {
    title: "Return & Refund Policy | Emperor Akbar Cardamom",
    description:
      "Information regarding returns, exchanges, EU right of withdrawal, and quality satisfaction guarantee for Emperor Akbar Cardamom.",
    url: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/return-policy/",
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
      name: "Return Policy",
      item: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/return-policy/",
    },
  ],
};

export default function ReturnPolicyPage() {
  const { returnPolicy } = websiteData;

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PolicyLayout
        title={returnPolicy.title}
        sections={returnPolicy.sections}
        supportEmail="birbal@emperorakbar.com"
      />
    </>
  );
}
