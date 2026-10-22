"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { Photos } from "@/data/websiteData";
import { useCart } from "@/components/CartProvider";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/our-story" },
  { name: "Cardamom Grades", href: "/cardamom-grades" },
  { name: "Shop", href: "/shop" },
  { name: "Recipes", href: "/recipes" },
  { name: "Blog", href: "/blog" },
  { name: "CSR", href: "/csr" },
  { name: "FAQ", href: "/faq" },
] as const;

function HeaderContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useCart();

  // Scroll listener to toggle hanging badge vs contained header logo
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 25;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatically close mobile menu on route change
  useEffect(() => {
    if (mobileMenuOpen) {
      // eslint-disable-next-line
      setMobileMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Normalize pathname to properly match routes even with trailingSlash: true or subpages
  const normalizedPathname = pathname ? pathname.replace(/\/+$/, "") || "/" : "/";

  const isLinkActive = (href: string) => {
    const normalizedHref = href.replace(/\/+$/, "") || "/";
    if (normalizedHref === "/") {
      return normalizedPathname === "/";
    }
    return (
      normalizedPathname === normalizedHref ||
      normalizedPathname.startsWith(`${normalizedHref}/`)
    );
  };

  return (
    <>
      {/* Fixed-height spacer to prevent layout shift below fixed header */}
      <div aria-hidden="true" className="w-full shrink-0 h-[82px]" />

      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 w-full z-50 px-4 sm:px-6 md:px-12 
          border-b border-stone-200/80 bg-white/95 backdrop-blur-md
          flex items-center justify-between text-stone-800 h-[82px] transition-shadow duration-300 ${
            isScrolled ? "shadow-md" : "shadow-xs"
          }`}
      >
        {/* Brand logo: expands as hanging tab at top, retracts flush inside header when scrolled */}
        <Link
          href="/"
          aria-label="Emperor Akbar Homepage"
          className="relative self-start shrink-0 z-20 group transition-all duration-300"
        >
          <div
            className={`flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
              isScrolled
                ? "h-[76px] px-2 bg-transparent shadow-none border-x-transparent border-b-transparent rounded-none"
                : "h-[104px] sm:h-[110px] px-3.5 sm:px-4 pt-2 pb-3 md:pb-3.5 bg-white rounded-b-2xl md:rounded-b-3xl shadow-[0_8px_20px_rgba(0,0,0,0.12)] border-x border-b border-stone-200/70"
            }`}
          >
            <Image
              src={Photos.logo}
              alt="Emperor Akbar Logo"
              title="Emperor Akbar Logo"
              width={180}
              height={120}
              priority
              className={`h-auto object-contain transition-all duration-300 ease-in-out ${
                isScrolled
                  ? "w-22 sm:w-24 md:w-28"
                  : "w-24 sm:w-28 md:w-32 lg:w-36 group-hover:scale-105"
              }`}
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-5 xl:gap-7 text-[14px] xl:text-[15px] font-medium text-stone-700"
        >
          {NAV_LINKS.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-1 transition-colors duration-200 group ${
                  isActive
                    ? "text-stone-950 font-bold"
                    : "hover:text-stone-950"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[2.5px] bg-stone-900 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Action Icons & Mobile Toggle */}
        <div className="flex items-center gap-5 text-stone-700">
          <button
            type="button"
            aria-label="Search site"
            className="hover:text-black transition-transform duration-200 hover:scale-105 p-1"
          >
            <Search className="w-5 h-5" />
          </button>

          <Link
            href="/account"
            aria-label="User Account"
            className="hover:text-black transition-transform duration-200 hover:scale-105 hidden sm:block p-1"
          >
            <User className="w-5 h-5" />
          </Link>

          <Link
            href="/cart"
            aria-label={`Shopping Cart, ${cartCount} items`}
            className="hover:text-black relative transition-transform duration-200 hover:scale-105 p-1"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#172d1f] text-[10px] font-bold text-white w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-navigation"
            className="lg:hidden hover:text-black transition-transform duration-200 hover:scale-105 p-1"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          id="mobile-navigation"
          aria-hidden={!mobileMenuOpen}
          className={`absolute top-full inset-x-0 bg-white/95 backdrop-blur-lg border-b border-stone-200 
            transition-all duration-300 ease-in-out lg:hidden overflow-hidden  rounded-b-xl ${
              mobileMenuOpen
                ? "max-h-[80vh] py-4 shadow-xl opacity-100"
                : "max-h-0 py-0 opacity-0 pointer-events-none"
            }`}
        >
          <nav className="flex flex-col items-stretch px-6 gap-1 text-center font-medium text-stone-700">
            {NAV_LINKS.map((link, index) => {
              const isActive = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 35}ms` : "0ms",
                  }}
                  className={`px-4 py-2.5 rounded-lg transition-all duration-200 ${
                    mobileMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  } ${
                    isActive
                      ? "bg-[#172d1f] text-white font-semibold"
                      : "hover:bg-stone-100 hover:text-black"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}

export default function Header() {
  return (
    <Suspense fallback={<div className="h-[82px] w-full shrink-0" />}>
      <HeaderContent />
    </Suspense>
  );
}
