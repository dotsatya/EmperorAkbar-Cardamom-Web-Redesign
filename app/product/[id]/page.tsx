import { Suspense } from "react";
import type { Metadata } from "next";
import ProductDetails from "./ProductDetails";
import { websiteData } from "@/data/websiteData";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return websiteData.shop.products.map((p) => ({
    id: String(p.id),
  }));
}

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = websiteData.shop.products.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Product Not Found | Emperor Akbar Cardamom",
      description: "Explore our collection of GI-tagged Alleppey green cardamom grades.",
    };
  }

  const rawImg = product.image;
  const imgUrl = typeof rawImg === "string" ? rawImg : (rawImg as { src?: string })?.src || "/images/hero-bg.jpg";

  const title = `${product.name} | Emperor Akbar Cardamom`;
  const description = `${product.name} (${product.size}). Authentic GI-tagged Alleppey Green Cardamom with natural aroma oils and rich flavour.`;

  return {
    title,
    description,
    keywords: [
      product.name,
      `${product.grade} grade cardamom`,
      product.size,
      "Alleppey green cardamom",
      "buy cardamom online",
      "Emperor Akbar cardamom",
    ],
    alternates: {
      canonical: `/product/${id}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/product/${id}/`,
      type: "website",
      images: [
        {
          url: imgUrl,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imgUrl],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = websiteData.shop.products.find((p) => p.id === id);

  const rawImg = product?.image;
  const imgUrl = typeof rawImg === "string" ? rawImg : (rawImg as { src?: string })?.src || "/images/hero-bg.jpg";
  const fullImgUrl = imgUrl.startsWith("http")
    ? imgUrl
    : `https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign${imgUrl}`;

  const productSchema = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        image: [fullImgUrl],
        description: `${product.speciality} - ${product.size}. ${product.usage}.`,
        sku: product.id,
        brand: {
          "@type": "Brand",
          name: "Emperor Akbar Cardamom",
        },
        offers: {
          "@type": "Offer",
          url: `https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/product/${product.id}/`,
          priceCurrency: "INR",
          price: product.price,
          itemCondition: "https://schema.org/NewCondition",
          availability:
            product.status === "sold-out"
              ? "https://schema.org/OutOfStock"
              : "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "Samex India Pvt. Ltd.",
          },
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "86",
        },
      }
    : null;

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
        name: "Shop",
        item: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/shop/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product ? product.name : "Product",
        item: `https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/product/${id}/`,
      },
    ],
  };

  return (
    <>
      {productSchema && <JsonLd data={productSchema} />}
      <JsonLd data={breadcrumbSchema} />
      <Suspense
        fallback={
          <div className="font-sans bg-bg-primary min-h-screen flex items-center justify-center text-stone-500 uppercase tracking-widest text-sm font-bold">
            Loading product...
          </div>
        }
      >
        <ProductDetails params={params} />
      </Suspense>
    </>
  );
}
