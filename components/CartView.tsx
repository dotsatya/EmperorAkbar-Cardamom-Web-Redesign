"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/CartProvider";
import { useCurrency } from "@/components/CurrencyProvider";
import { Trash2, ChevronRight, ArrowLeft } from "lucide-react";

export default function CartView() {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();
  const { formatPrice } = useCurrency();

  return (
    <div className="font-sans bg-bg-primary min-h-screen flex flex-col">
      <main className="flex-1 pt-6 sm:pt-10 md:pt-16 lg:pt-6 pb-16 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="hidden lg:inline-flex justify-left items-center gap-2 text-[10px] md:text-xs text-stone-500 font-bold uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-stone-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/shop" className="hover:text-stone-900 transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-stone-900">Your Cart</span>
          <ChevronRight className="w-3 h-3" />
        </div>

        <div className="w-full text-center md:text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-800 uppercase tracking-wide mb-3 sm:mb-4">
            Your Cart
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-[#d4af37] mx-auto"></div>
        </div>

        {items.length === 0 ? (
          <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-center flex flex-col items-center justify-center">
            <h2 className="text-lg sm:text-2xl font-bold text-stone-800 mb-2 sm:mb-3">
              Your cart is empty
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mb-6 sm:mb-8 max-w-xs sm:max-w-md leading-relaxed">
              Looks like you haven&apos;t added anything to your cart yet. Browse our
              collection of premium cardamom grades.
            </p>
            <Link
              href="/shop"
              className="bg-gradient-to-r from-[#172d1f] to-[#2a4d36] text-white px-5 py-3 sm:px-8 sm:py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider sm:tracking-widest uppercase hover:from-black hover:to-[#172d1f] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2 whitespace-nowrap"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Cart Items List */}
            <div className="flex-1 flex flex-col gap-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.weight}`}
                  className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-3xl p-4 md:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6"
                >
                  {/* Top section on mobile: Image + Details */}
                  <div className="flex flex-row items-center sm:items-center gap-4 sm:gap-6 flex-1">
                    {/* Product Image */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-white/60 border border-white/80 p-2 shrink-0 relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        title={item.name}
                        fill
                        className="object-contain mix-blend-multiply p-2"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col text-left">
                      <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-1 leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-stone-500 mb-2 sm:mb-4 uppercase tracking-wider">
                        {item.weight}
                      </p>
                      <span className="text-lg sm:text-xl font-bold text-[#c59d5f]">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                  </div>

                  {/* Quantity & Actions */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 mt-2 sm:mt-0 border-t sm:border-none border-stone-200/50 pt-4 sm:pt-0">
                    <div className="flex items-center bg-white/50 border border-white/80 rounded-xl overflow-hidden shadow-sm h-10">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.weight, item.quantity - 1)
                        }
                        className="w-10 h-full flex items-center justify-center text-stone-600 hover:bg-white transition-colors hover:text-black font-bold"
                      >
                        -
                      </button>
                      <span className="w-10 h-full flex items-center justify-center font-bold text-stone-900 text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.weight, item.quantity + 1)
                        }
                        className="w-10 h-full flex items-center justify-center text-stone-600 hover:bg-white transition-colors hover:text-black font-bold"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id, item.weight)}
                      className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-[380px] shrink-0">
              <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-3xl p-8 sticky top-32">
                <h3 className="text-xl font-bold text-stone-900 mb-6">
                  Order Summary
                </h3>

                <div className="flex flex-col gap-4 text-[15px] font-medium text-stone-600 mb-6 border-b border-stone-200/50 pb-6">
                  <div className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span className="text-stone-900 font-bold">
                      {formatPrice(cartTotal)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Shipping</span>
                    <span className="text-stone-500 text-sm">
                      Calculated at checkout
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-8">
                  <span className="text-lg font-bold text-stone-900">Total</span>
                  <span className="text-2xl font-extrabold text-[#c59d5f]">
                    {formatPrice(cartTotal)}
                  </span>
                </div>

                <p className="text-[11px] text-stone-500 mb-6 text-center leading-relaxed">
                  Taxes and shipping calculated at checkout.
                </p>

                <button className="w-full bg-gradient-to-r from-[#172d1f] to-[#2a4d36] text-white py-3 sm:py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider sm:tracking-widest uppercase hover:from-black hover:to-[#172d1f] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex justify-center items-center">
                  Checkout
                </button>

                <div className="mt-4 text-center">
                  <Link
                    href="/shop"
                    className="text-xs font-bold text-stone-500 hover:text-stone-900 uppercase tracking-widest underline decoration-transparent hover:decoration-stone-900 transition-all underline-offset-4"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
