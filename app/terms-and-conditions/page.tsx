import React from "react";
import type { Metadata } from "next";
import { websiteData } from "@/data/websiteData";
import PolicyLayout from "@/components/policy/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions | Emperor Akbar Cardamom",
  description:
    "Review the Terms and Conditions of Use and Service for Emperor Akbar Cardamom and Samex India Pvt. Ltd.",
};

export default function TermsAndConditionsPage() {
  const { termsOfService } = websiteData;

  return (
    <PolicyLayout
      title={termsOfService.title}
      subtitle={termsOfService.subtitle}
      introduction={termsOfService.introduction}
      sections={termsOfService.sections}
      supportEmail="darbar@emperorakbar.com"
    />
  );
}
