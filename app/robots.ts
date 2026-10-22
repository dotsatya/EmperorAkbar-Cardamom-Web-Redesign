import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign";

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
