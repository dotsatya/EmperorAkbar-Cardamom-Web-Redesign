import { Suspense } from "react";
import BlogDetails from "./BlogDetails";
import { websiteData } from "@/data/websiteData";

export function generateStaticParams() {
  return websiteData.blogs.items.map((item) => ({
    slug: item.slug,
  }));
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="font-sans bg-[#f4f1ea] min-h-screen flex items-center justify-center text-stone-500 uppercase tracking-widest text-sm font-bold">
          Loading blog...
        </div>
      }
    >
      <BlogDetails params={params} />
    </Suspense>
  );
}
