import { Suspense } from "react";
import ProductDetails from "./ProductDetails";
import { websiteData } from "@/data/websiteData";

export function generateStaticParams() {
  return websiteData.shop.products.map((p) => ({
    id: String(p.id),
  }));
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="font-sans bg-bg-primary min-h-screen flex items-center justify-center text-stone-500 uppercase tracking-widest text-sm font-bold">
          Loading product...
        </div>
      }
    >
      <ProductDetails params={params} />
    </Suspense>
  );
}
