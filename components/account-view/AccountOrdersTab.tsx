"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Package,
  ShoppingCart,
  Truck,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { OrderItem } from "./types";

interface AccountOrdersTabProps {
  orders: OrderItem[];
  onReorder: (item: OrderItem["items"][number]) => void;
  formatPrice: (price: number) => string;
}

export default function AccountOrdersTab({
  orders,
  onReorder,
  formatPrice,
}: AccountOrdersTabProps) {
  const [trackingModalOrder, setTrackingModalOrder] = useState<OrderItem | null>(null);

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Tab Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
        <div>
          <h2 className="text-base sm:text-xl md:text-2xl font-bold text-stone-900 tracking-tight">
            Order History
          </h2>
          <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
            Track real-time shipments and view past orders of authentic Aroma-Lock cardamom packs.
          </p>
        </div>
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#172d1f] hover:text-[#d4af37] transition-colors shrink-0 group self-start sm:self-auto"
        >
          <span>Browse Spice Catalog</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Orders List */}
      {orders.length === 0 ? (
        <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center border border-stone-200/80 shadow-xs">
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-stone-100 flex items-center justify-center text-stone-400 mb-3.5">
            <Package className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900">
            No orders found
          </h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto mt-1 mb-5">
            You haven't placed any cardamom orders yet. Discover our GI-tagged Alleppey Green Cardamom selection.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#172d1f] hover:bg-[#122418] text-white text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer active:scale-95"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Explore Spices</span>
          </Link>
        </div>
      ) : (
        <div className="space-y-3.5 sm:space-y-5">
          {orders.map((order) => {
            const isDelivered = order.status === "Delivered";

            return (
              <div
                key={order.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-stone-200/80 shadow-xs hover:border-stone-300 hover:shadow-sm transition-all duration-300"
              >
                {/* Order Header Bar */}
                <div className="flex items-start justify-between gap-3 pb-3.5 sm:pb-4 border-b border-stone-100">
                  <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-stone-100/90 border border-stone-200/60 flex items-center justify-center text-stone-700 shrink-0">
                      <Package className="w-4 h-4 sm:w-5 sm:h-5 text-stone-700" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-xs sm:text-sm md:text-base text-stone-900 tracking-tight">
                          Order #{order.orderNumber}
                        </span>
                        <span
                          className={`text-[9px] sm:text-[10px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${
                            order.status === "In Transit"
                              ? "bg-amber-50 text-amber-800 border-amber-300/80"
                              : order.status === "Delivered"
                              ? "bg-emerald-50 text-emerald-800 border-emerald-300/80"
                              : "bg-blue-50 text-blue-800 border-blue-300/80"
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-stone-400 mt-0.5 font-normal">
                        Placed on {order.date}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[10px] sm:text-xs text-stone-400 font-medium block">
                      Total
                    </span>
                    <span className="text-xs sm:text-sm md:text-base font-bold text-stone-900 block mt-0.5 tracking-tight">
                      {formatPrice(order.total)}
                    </span>
                  </div>
                </div>

                {/* Items in this Order */}
                <div className="py-3 sm:py-4 space-y-2.5 sm:space-y-3">
                  {order.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-stone-50/70 hover:bg-stone-100/60 border border-stone-200/60 flex items-center justify-between gap-2.5 sm:gap-4 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl transition-all duration-200"
                    >
                      <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
                        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border border-stone-200/70 shrink-0 overflow-hidden flex items-center justify-center shadow-2xs">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs sm:text-sm font-bold text-stone-900 tracking-tight leading-snug line-clamp-1">
                            {item.name}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-stone-400 mt-0.5 flex items-center gap-1.5 font-normal">
                            <span>{item.weight}</span>
                            <span className="text-stone-300">·</span>
                            <span>Qty: {item.quantity}</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-1.5 sm:gap-2 shrink-0">
                        <span className="text-xs sm:text-sm font-bold text-stone-900 tracking-tight">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                        <button
                          type="button"
                          onClick={() => onReorder(item)}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-stone-800 bg-stone-200/70 hover:bg-stone-300/80 active:bg-stone-300 border border-stone-300/50 rounded-xl transition-all duration-200 cursor-pointer active:scale-95 shadow-2xs hover:shadow-xs"
                        >
                          <ShoppingCart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-stone-700" />
                          <span>Buy Again</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Footer & Actions */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2 text-xs">
                  <div
                    className={`flex items-center gap-1.5 font-medium truncate ${
                      isDelivered ? "text-emerald-700" : "text-emerald-700"
                    }`}
                  >
                    {isDelivered ? (
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                    )}
                    <span className="truncate text-[11px] sm:text-xs">
                      {isDelivered
                        ? "Delivered with sealed Aroma-Lock"
                        : "Estimated Delivery: 2 business days"}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setTrackingModalOrder(order)}
                    className="inline-flex items-center gap-1 font-bold text-stone-900 hover:text-stone-700 transition-colors cursor-pointer group text-xs shrink-0"
                  >
                    <span>Track</span>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Elegant Tracking Detail Modal */}
      {trackingModalOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 max-w-md w-full border border-stone-200 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3.5 border-b border-stone-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-stone-900">
                    Shipment Tracking
                  </h3>
                  <p className="text-[11px] text-stone-500">
                    Order #{trackingModalOrder.orderNumber}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setTrackingModalOrder(null)}
                className="w-7 h-7 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-800 text-xs font-bold cursor-pointer transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-4">
              <div className="bg-stone-50 rounded-xl p-3 border border-stone-100 text-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Status</span>
                  <span className="font-bold text-amber-700">
                    {trackingModalOrder.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Carrier</span>
                  <span className="font-semibold text-stone-900">Blue Dart Express Priority</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Packaging</span>
                  <span className="font-semibold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Tamper-Proof Aroma Lock
                  </span>
                </div>
              </div>

              {/* Timeline steps */}
              <div className="space-y-3 pl-2 text-xs">
                <div className="flex items-start gap-3 relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 mt-1 shrink-0 ring-4 ring-emerald-100" />
                  <div>
                    <p className="font-bold text-stone-900">Package Dispatched from Estate</p>
                    <p className="text-[11px] text-stone-400">Bodinayakanur, Kerala</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-1 shrink-0 ring-4 ring-amber-100" />
                  <div>
                    <p className="font-bold text-stone-900">In Transit - Hub Sorting</p>
                    <p className="text-[11px] text-stone-400">Expected at destination within 2 business days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 relative opacity-50">
                  <div className="w-2.5 h-2.5 rounded-full bg-stone-300 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-stone-600">Out for Delivery</p>
                    <p className="text-[11px] text-stone-400">OTP confirmation required upon arrival</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100 flex justify-end">
              <button
                type="button"
                onClick={() => setTrackingModalOrder(null)}
                className="px-4 py-2 bg-[#172d1f] hover:bg-black text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Close Tracking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
