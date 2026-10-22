import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard, { ProductItem } from "@/components/ProductCard";

export default function ProductGridSection({
  shopData,
}: {
  shopData: { products: ProductItem[] };
}) {
  return (
    <section className="px-6 max-w-7xl mx-auto py-6 md:py-12 ">
      <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-6">
        <div>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-stone-800 uppercase tracking-wide mb-2">
            Choose Your Cardamom
          </h2>
          <p className="text-stone-500 font-serif italic">
            Premium quality for every kitchen. For every occasion.
          </p>
          <p className="text-stone-600 text-xs sm:text-sm max-w-2xl mt-1.5 leading-relaxed">
            From our flagship 8mm+ Purple Grade to versatile 6mm Green Grade, each batch is calibrated for uniform pod sizing, high essential oil content, and authentic spice potency.
          </p>
        </div>
        <Link href="/shop">
          <button className="text-stone-900 border-b border-stone-900 pb-1 font-bold tracking-widest text-xs uppercase flex items-center gap-2 hover:text-[#172d1f] hover:border-[#172d1f]">
            VIEW ALL PRODUCTS <ArrowRight className="w-3 h-3" />
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shopData.products
          .filter((product: ProductItem) =>
            ["Purple", "Pink", "Green"].includes(product.grade),
          )
          .map((product: ProductItem) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
}
