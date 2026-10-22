import { Suspense } from "react";
import type { Metadata } from "next";
import BlogDetails from "./BlogDetails";
import { websiteData } from "@/data/websiteData";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return websiteData.blogs.items.map((item) => ({
    slug: item.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = websiteData.blogs.items.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found | Emperor Akbar Cardamom",
      description: "Explore our latest cardamom insights, culinary guides, and market trends.",
    };
  }

  const rawImg = blog.image;
  const imgUrl = typeof rawImg === "string" ? rawImg : (rawImg as { src?: string })?.src || "/images/hero-bg.jpg";
  const title = `${blog.title.length > 38 ? blog.title.slice(0, 38) + "..." : blog.title} | Emperor Akbar Cardamom`;
  const description =
    blog.description ||
    "Read in-depth insights, cooking tips, and origin stories from Emperor Akbar Cardamom.";

  return {
    title,
    description,
    keywords: [
      ...(blog.tags || []),
      "cardamom blog",
      "Alleppey green cardamom",
      "spice guide",
      "Emperor Akbar Cardamom",
    ],
    alternates: {
      canonical: `/blog/${slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/blog/${slug}/`,
      type: "article",
      images: [
        {
          url: imgUrl,
          alt: blog.title,
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = websiteData.blogs.items.find((item) => item.slug === slug);

  const rawImg = blog?.image;
  const imgUrl = typeof rawImg === "string" ? rawImg : (rawImg as { src?: string })?.src || "/images/hero-bg.jpg";
  const fullImgUrl = imgUrl.startsWith("http")
    ? imgUrl
    : `https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign${imgUrl}`;

  const articleSchema = blog
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blog.title,
        description: blog.description,
        image: [fullImgUrl],
        url: `https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/blog/${slug}/`,
        author: {
          "@type": "Organization",
          name: "Emperor Akbar Cardamom",
          url: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/",
        },
        publisher: {
          "@type": "Organization",
          name: "Emperor Akbar Cardamom",
          logo: {
            "@type": "ImageObject",
            url: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/images/logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/blog/${slug}/`,
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
        name: "Blog",
        item: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/blog/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog ? blog.title : "Blog Post",
        item: `https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/blog/${slug}/`,
      },
    ],
  };

  return (
    <>
      {articleSchema && <JsonLd data={articleSchema} />}
      <JsonLd data={breadcrumbSchema} />
      <Suspense
        fallback={
          <div className="font-sans bg-[#f4f1ea] min-h-screen flex items-center justify-center text-stone-500 uppercase tracking-widest text-sm font-bold">
            Loading blog...
          </div>
        }
      >
        <BlogDetails params={params} />
      </Suspense>
    </>
  );
}
