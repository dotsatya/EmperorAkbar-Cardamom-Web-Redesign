import { websiteData } from "@/data/websiteData";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
  const { products, title } = websiteData.shop;

  return (
    <div className="font-sans bg-bg-primary min-h-screen flex flex-col">
      <main className="flex-1 pt-10 md:pt-16 pb-20 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="w-full text-center mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-800 uppercase tracking-wide mb-4">
            {title}
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-4"></div>
          <p className="text-stone-500 font-serif italic text-base sm:text-lg">
            Freshly sealed Alleppey Green Cardamom
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
