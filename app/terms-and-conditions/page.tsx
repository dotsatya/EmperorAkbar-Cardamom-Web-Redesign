import React from "react";
import type { Metadata } from "next";
import { websiteData } from "@/data/websiteData";
import PolicyLayout from "@/components/policy/PolicyLayout";

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Review the Terms and Conditions of Use and Service for Emperor Akbar Cardamom and Samex India Pvt. Ltd.",
  alternates: {
    canonical: "/terms-and-conditions/",
  },
  openGraph: {
    title: "Terms & Conditions | Emperor Akbar Cardamom",
    description:
      "Review the Terms and Conditions of Use and Service for Emperor Akbar Cardamom and Samex India Pvt. Ltd.",
    url: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/terms-and-conditions/",
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
      name: "Terms & Conditions",
      item: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/terms-and-conditions/",
    },
  ],
};

export default function TermsAndConditionsPage() {
  const { termsOfService } = websiteData;

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PolicyLayout
        title={termsOfService.title}
        subtitle={termsOfService.subtitle}
        introduction={termsOfService.introduction}
        sections={termsOfService.sections}
        supportEmail="darbar@emperorakbar.com"
      />
    </>
  );
}
