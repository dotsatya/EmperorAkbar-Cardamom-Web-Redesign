import type { MetadataRoute } from "next";
import { websiteData } from "@/data/websiteData";

export const dynamic = "force-static";

const BASE_URL =
  "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
    },
    {
      url: `${BASE_URL}/shop/`,
      lastModified: currentDate,
      changeFrequency: "daily",
    },
    {
      url: `${BASE_URL}/cardamom-grades/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
    },
    {
      url: `${BASE_URL}/recipes/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
    },
    {
      url: `${BASE_URL}/health-benefits/`,
      lastModified: currentDate,
      changeFrequency: "monthly",
    },
    {
      url: `${BASE_URL}/blog/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
    },
    {
      url: `${BASE_URL}/our-story/`,
      lastModified: currentDate,
      changeFrequency: "monthly",
    },
    {
      url: `${BASE_URL}/csr/`,
      lastModified: currentDate,
      changeFrequency: "monthly",
    },
    {
      url: `${BASE_URL}/faq/`,
      lastModified: currentDate,
      changeFrequency: "monthly",
    },
    {
      url: `${BASE_URL}/privacy-policy/`,
      lastModified: currentDate,
      changeFrequency: "yearly",
    },
    {
      url: `${BASE_URL}/terms-and-conditions/`,
      lastModified: currentDate,
      changeFrequency: "yearly",
    },
    {
      url: `${BASE_URL}/shipping-policy/`,
      lastModified: currentDate,
      changeFrequency: "yearly",
    },
    {
      url: `${BASE_URL}/return-policy/`,
      lastModified: currentDate,
      changeFrequency: "yearly",
    },
  ];

  // Dynamic Product routes
  const productRoutes: MetadataRoute.Sitemap = websiteData.shop.products.map(
    (product) => ({
      url: `${BASE_URL}/product/${product.id}/`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
    }),
  );

  // Dynamic Blog routes
  const blogRoutes: MetadataRoute.Sitemap = websiteData.blogs.items.map(
    (blog) => ({
      url: `${BASE_URL}/blog/${blog.slug}/`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
    }),
  );

  // Dynamic Recipe routes
  const recipeRoutes: MetadataRoute.Sitemap = websiteData.recipes.items.map(
    (recipe) => ({
      url: `${BASE_URL}/recipes/${recipe.slug}/`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
    }),
  );

  return [...staticRoutes, ...productRoutes, ...blogRoutes, ...recipeRoutes];
}
