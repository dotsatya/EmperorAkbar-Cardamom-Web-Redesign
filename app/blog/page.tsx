import type { Metadata } from "next";
import { websiteData } from "@/data/websiteData";
import BlogList from "@/components/BlogList";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Cardamom Insights, Market Trends & Recipes Blog | Emperor Akbar",
  description:
    "Read the latest articles on Indian green cardamom market analysis, quality identification tests, baking tips, GI origin history, and festive traditions.",
  keywords: [
    "cardamom blog",
    "cardamom market analysis",
    "how to identify fresh cardamom",
    "cardamom baking",
    "Alleppey green cardamom origins",
    "Emperor Akbar Cardamom news",
  ],
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    title: "Cardamom Insights, Market Trends & Recipes Blog | Emperor Akbar",
    description:
      "Expert insights, quality identification tests, and culinary inspirations for green cardamom.",
    url: "https://www.emperorakbar.com/blog/",
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
      item: "https://www.emperorakbar.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.emperorakbar.com/blog/",
    },
  ],
};

export default function BlogPage() {
  const { title, tags, items } = websiteData.blogs;

  return (
    <div className="font-sans bg-bg-primary min-h-screen flex flex-col">
      <JsonLd data={breadcrumbSchema} />
      <BlogList title={title} tags={tags} items={items} />
    </div>
  );
}
