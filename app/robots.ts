import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://www.emperorakbar.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cart/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
