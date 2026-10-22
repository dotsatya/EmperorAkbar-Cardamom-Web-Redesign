import React from "react";
import type { Metadata } from "next";
import { websiteData } from "@/data/websiteData";
import PolicyLayout from "@/components/policy/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Emperor Akbar Cardamom",
  description:
    "Learn how Emperor Akbar Cardamom collects, uses, and protects your personal and order information.",
  alternates: {
    canonical: "/privacy-policy/",
  },
};

export default function PrivacyPolicyPage() {
  const { privacyPolicy } = websiteData;

  return (
    <PolicyLayout
      title={privacyPolicy.title}
      introduction={privacyPolicy.introduction}
      sections={privacyPolicy.sections}
      supportEmail="darbar@emperorakbar.com"
    />
  );
}
