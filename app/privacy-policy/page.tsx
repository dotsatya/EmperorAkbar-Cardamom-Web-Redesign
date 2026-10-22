import React from "react";
import type { Metadata } from "next";
import { websiteData } from "@/data/websiteData";
import PolicyLayout from "@/components/policy/PolicyLayout";

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy | Emperor Akbar Cardamom",
  description:
    "Learn how Emperor Akbar Cardamom collects, uses, and protects your personal and order information.",
  alternates: {
    canonical: "/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy | Emperor Akbar Cardamom",
    description:
      "Learn how Emperor Akbar Cardamom collects, uses, and protects your personal and order information.",
    url: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/privacy-policy/",
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
      name: "Privacy Policy",
      item: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/privacy-policy/",
    },
  ],
};

export default function PrivacyPolicyPage() {
  const { privacyPolicy } = websiteData;

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PolicyLayout
        title={privacyPolicy.title}
        introduction={privacyPolicy.introduction}
        sections={privacyPolicy.sections}
        supportEmail="darbar@emperorakbar.com"
      />
    </>
  );
}
