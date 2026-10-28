"use client";

import { use, useState } from "react";
import { notFound, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";
import { websiteData } from "@/data/websiteData";
import ProductGallery from "@/app/product/[id]/ProductGallery";
import { StaticImageData } from "next/image";
import { useCart } from "@/components/CartProvider";
import { useCurrency } from "@/components/CurrencyProvider";
import ShinyButton from "@/components/ShinyButton";

export default function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  const [isAdded, setIsAdded] = useState(false);

  const product = websiteData.shop.products.find(
    (p) => String(p.id) === String(id),
  );

  if (!product) {
    notFound();
  }

  const images = product.images || [];

  const [selectedWeight, setSelectedWeight] = useState(
    product.weights?.[0] || "",
  );
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      id: String(product.id),
      name: product.name,
      price: product.price,
      image:
        typeof product.image === "string"
          ? product.image
          : (product.image as StaticImageData).src,
      weight: selectedWeight,
      quantity: quantity,
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push("/cart");
  };

  return (
    <div className="font-sans bg-bg-primary min-h-screen flex flex-col">
      <main className="flex-1 pt-10 md:pt-16 pb-20 px-6 max-w-7xl mx-auto w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] md:text-xs text-stone-500 font-bold uppercase tracking-widest mb-6 md:mb-12">
          <Link href="/" className="hover:text-stone-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/shop" className="hover:text-stone-900 transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-stone-900 truncate">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
          {/* Left: Images Gallery */}
          <ProductGallery
            images={images}
            productName={product.name}
            productStatus={product.status}
          />

          {/* Right: Product Details */}
          <div className="w-full lg:w-1/2 flex flex-col font-sans lg:pl-4">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight mb-3 md:mb-4 leading-[1.1] max-w-lg text-transparent bg-clip-text bg-gradient-to-r from-[#172d1f] to-[#5c7444] drop-shadow-sm">
              {product.name.replace(" Cardamom", "\nCardamom")}
            </h1>

            <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
              <span className="text-2xl md:text-3xl font-bold text-stone-800 drop-shadow-sm">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-lg md:text-xl text-red-400/80 font-medium line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            

            {/* Specifications Glass Card */}
            <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-2xl md:rounded-3xl p-5 md:p-8 mb-8 md:mb-10 flex flex-col gap-3 md:gap-4 text-[13px] md:text-[15px] text-stone-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c59d5f]/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

              <div className="flex flex-col gap-3 md:gap-4 relative z-10">
                <p>
                  By{" "}
                  <Link
                    href=""
                    className="font-bold text-[#c59d5f] hover:text-[#a07c44] transition-colors underline decoration-transparent hover:decoration-[#a07c44] underline-offset-4"
                  >
                    {product.brand}
                  </Link>
                </p>
                <div className="h-px w-full bg-gradient-to-r from-stone-200 to-transparent"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-8">
                  <p>
                    <strong className="font-bold text-stone-900 block text-[10px] md:text-[11px] uppercase tracking-widest mb-1 opacity-70">
                      Origin
                    </strong>
                    {product.origin}
                  </p>
                  <p>
                    <strong className="font-bold text-stone-900 block text-[10px] md:text-[11px] uppercase tracking-widest mb-1 opacity-70">
                      Grade
                    </strong>
                    {product.grade}
                  </p>
                  <p className="sm:col-span-2">
                    <strong className="font-bold text-stone-900 block text-[10px] md:text-[11px] uppercase tracking-widest mb-1 opacity-70">
                      Speciality
                    </strong>
                    {product.speciality}
                  </p>
                  <p>
                    <strong className="font-bold text-stone-900 block text-[10px] md:text-[11px] uppercase tracking-widest mb-1 opacity-70">
                      Size
                    </strong>
                    {product.size}
                  </p>
                  <p className="sm:col-span-2">
                    <strong className="font-bold text-stone-900 block text-[10px] md:text-[11px] uppercase tracking-widest mb-1 opacity-70">
                      Usage
                    </strong>
                    {product.usage}
                  </p>
                  <p className="sm:col-span-2">
                    <strong className="font-bold text-stone-900 block text-[10px] md:text-[11px] uppercase tracking-widest mb-1 opacity-70">
                      Manufactured / Packed by
                    </strong>
                    {product.packedBy}
                  </p>
                </div>
              </div>
            </div>

            {/* Selectors */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-8 md:mb-10">
              <div className="flex flex-col gap-2 md:gap-3 flex-1">
                <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-stone-500">
                  WEIGHT
                </label>
                <div className="relative">
                  <select
                    value={selectedWeight}
                    onChange={(e) => setSelectedWeight(e.target.value)}
                    className="w-full bg-white/50 backdrop-blur-md border border-white/60 shadow-sm rounded-xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-stone-800 font-medium outline-none focus:bg-white focus:border-[#c59d5f] focus:ring-2 focus:ring-[#c59d5f]/20 appearance-none cursor-pointer transition-all duration-300"
                  >
                    {product.weights?.map((w: string) => (
                      <option key={w} value={w}>
                        {w}
                      </option>
                    ))}
                  </select>
                  <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none rotate-90" />
                </div>
              </div>

              <div className="flex flex-col gap-2 md:gap-3 w-full sm:w-[120px]">
                <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-stone-500">
                  QTY
                </label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-full bg-white/50 backdrop-blur-md border border-white/60 shadow-sm rounded-xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-stone-800 font-medium outline-none focus:bg-white focus:border-[#c59d5f] focus:ring-2 focus:ring-[#c59d5f]/20 text-center transition-all duration-300"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-lg mb-8 md:mb-12">
              <button
                disabled={!product.quantityAvailable}
                onClick={handleAddToCart}
                className={`flex-1 backdrop-blur-md border-2 py-3 md:py-4 rounded-xl text-sm md:text-base font-bold tracking-widest uppercase transition-all duration-300 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm ${
                  isAdded
                    ? "bg-[#172d1f] text-white border-[#172d1f] shadow-lg"
                    : "bg-white/50 border-[#172d1f] text-[#172d1f] hover:bg-[#172d1f] hover:text-white hover:shadow-lg"
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-5 h-5" /> Added!
                  </>
                ) : (
                  "Add to Cart"
                )}
              </button>
              <ShinyButton
                disabled={!product.quantityAvailable}
                onClick={handleBuyNow}
                className="relative flex-1 text-white py-3 md:py-4 rounded-xl text-sm md:text-base font-bold tracking-widest uppercase
             flex justify-center items-center gap-2 md:gap-3 disabled:opacity-50 disabled:cursor-not-allowed 
             border border-[#172d1f]/50 bg-gradient-to-r from-[#172d1f] to-[#2a4d36]
             before:absolute before:inset-0 before:bg-gradient-to-r before:from-black before:to-[#172d1f] 
             before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0"
              >
                Buy It Now
              </ShinyButton>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
