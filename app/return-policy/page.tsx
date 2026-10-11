import React from "react";
import type { Metadata } from "next";
import { websiteData } from "@/data/websiteData";
import PolicyLayout from "@/components/policy/PolicyLayout";

export const metadata: Metadata = {
  title: "Return & Refund Policy | Emperor Akbar Cardamom",
  description:
    "Information regarding returns, exchanges, EU right of withdrawal, and quality satisfaction guarantee for Emperor Akbar Cardamom.",
};

export default function ReturnPolicyPage() {
  const { returnPolicy } = websiteData;

  return (
    <PolicyLayout
      title={returnPolicy.title}
      sections={returnPolicy.sections}
      supportEmail="birbal@emperorakbar.com"
    />
  );
}
