import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Photos } from "@/data/websiteData";

export default function Footer() {
  return (
    <footer className="w-full bg-bg-tertiary text-stone-400 py-6 sm:py-8 md:pb-6 md:pt-10 px-4 sm:px-6 flex flex-col justify-between relative overflow-hidden">
      {/* Huge background text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden opacity-30 md:opacity-100">
        <span
          aria-hidden="true"
          className="text-[16vw] sm:text-[18vw] md:text-[13vw] font-serif font-black text-white/5 tracking-tighter leading-none whitespace-nowrap select-none uppercase"
        >
          Emperor Akbar
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-x-4 sm:gap-x-6 gap-y-6 sm:gap-8 md:gap-y-8 flex-1 relative z-10">
        {/* Brand Column: Mobile spans 2 cols | Tablet: span 4, row span 2 | Desktop: span 3 */}
        <div className="col-span-2 md:col-span-4 md:row-span-2 lg:col-span-3 lg:row-span-1 flex flex-row md:flex-col items-center md:items-start text-left gap-3.5 sm:gap-4 md:gap-0 md:pr-4">
          <Link
            href="/"
            aria-label="Emperor Akbar Homepage"
            className="relative shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full bg-white shadow-[0_0_15px_rgba(251,191,36,0.15)] border-2 border-amber-500/30 overflow-hidden md:mb-5 p-2 md:p-3 transition-all duration-300 hover:scale-105 hover:border-amber-400"
          >
            <Image
              src={Photos.logo}
              alt="Emperor Akbar Logo"
              title="Emperor Akbar Logo"
              width={64}
              height={64}
              className="relative z-10 object-contain aspect-square"
            />
          </Link>
          <div className="min-w-0">
            <Link
              href="/"
              aria-label="Emperor Akbar Cardamom - Home"
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#f4f1ea] leading-tight">
                The Green Gold <br className="hidden sm:block" />
                <span className="text-[#d4af37] italic">of India.</span>
              </h3>
            </Link>
            <p className="text-[11px] sm:text-xs text-stone-400/80 block max-w-xs leading-relaxed mt-1 md:mt-3">
              World&apos;s finest Alleppey Green Cardamom, packed fresh with
              patented aroma-lock technology.
            </p>
          </div>
        </div>

        {/* Shop Column: Mobile 1 col (left) | Tablet: span 4 in row 1 | Desktop: span 2 */}
        <div className="col-span-1 md:col-span-4 lg:col-span-2">
          <h4 className="text-white font-bold tracking-widest text-[11px] sm:text-xs uppercase mb-3 sm:mb-4 border-b border-stone-800 pb-2">
            Shop
          </h4>
          <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-stone-400">
            <li>
              <Link href="/shop/" className="hover:text-white transition-colors inline-block py-0.5">
                All Products
              </Link>
            </li>
            <li>
              <Link
                href="/cardamom-grades/"
                className="hover:text-white transition-colors inline-block py-0.5"
              >
                Cardamom Grades
              </Link>
            </li>
            <li>
              <Link
                href="/recipes/"
                className="hover:text-white transition-colors inline-block py-0.5"
              >
                Recipes
              </Link>
            </li>
            <li>
              <Link
                href="/health-benefits/"
                className="hover:text-white transition-colors inline-block py-0.5"
              >
                Health Benefits
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Column: Mobile 1 col (right) | Tablet: span 4 in row 1 | Desktop: span 2 */}
        <div className="col-span-1 md:col-span-4 lg:col-span-2">
          <h4 className="text-white font-bold tracking-widest text-[11px] sm:text-xs uppercase mb-3 sm:mb-4 border-b border-stone-800 pb-2">
            Company
          </h4>
          <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-stone-400">
            <li>
              <Link
                href="/our-story/"
                className="hover:text-white transition-colors inline-block py-0.5"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/csr/" className="hover:text-white transition-colors inline-block py-0.5">
                CSR Initiatives
              </Link>
            </li>
            <li>
              <Link href="/blog/" className="hover:text-white transition-colors inline-block py-0.5">
                Blog &amp; Insights
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Column: Mobile 1 col (left) | Tablet: span 4 in row 2 | Desktop: span 2 */}
        <div className="col-span-1 md:col-span-4 lg:col-span-2">
          <h4 className="text-white font-bold tracking-widest text-[11px] sm:text-xs uppercase mb-3 sm:mb-4 border-b border-stone-800 pb-2">
            Support
          </h4>
          <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-stone-400">
            <li>
              <Link href="/faq/" className="hover:text-white transition-colors inline-block py-0.5">
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/shipping-policy/"
                className="hover:text-white transition-colors inline-block py-0.5"
              >
                Shipping &amp; Delivery
              </Link>
            </li>
            <li>
              <Link
                href="/return-policy/"
                className="hover:text-white transition-colors inline-block py-0.5"
              >
                Return &amp; Refund
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions/"
                className="hover:text-white transition-colors inline-block py-0.5"
              >
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy/"
                className="hover:text-white transition-colors inline-block py-0.5"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Column: Mobile 1 col (right) | Tablet: span 4 in row 2 | Desktop: span 3 */}
        <div className="col-span-1 md:col-span-4 lg:col-span-3">
          <h4 className="text-white font-bold tracking-widest text-[11px] sm:text-xs uppercase mb-3 sm:mb-4 border-b border-stone-800 pb-2">
            Contact
          </h4>
          <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-stone-400">
            <div className="flex items-start gap-1.5 sm:gap-2 group">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=201%2C+Sabari+Samriddhi%2C+V.N.+Purav+Marg%2C+Chembur%2C+Mumbai+400071"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-block leading-relaxed"
              >
                <span className="font-semibold text-stone-200 flex items-center gap-1 text-[11px] sm:text-xs">
                  Samex India Pvt. Ltd.
                  <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-60" />
                </span>
                <span className="text-[10px] sm:text-[11px] block mt-0.5 text-stone-400 leading-tight">
                  Chembur, Mumbai - 400 071
                </span>
              </a>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4af37] shrink-0" />
              <a
                href="tel:+919699196991"
                className="hover:text-[#d4af37] transition-colors whitespace-nowrap text-[11px] sm:text-xs"
              >
                +91 96991 96991
              </a>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4af37] shrink-0" />
              <a
                href="mailto:birbal@emperorakbar.com"
                className="hover:text-[#d4af37] transition-colors text-[11px] sm:text-xs break-all sm:break-normal"
              >
                birbal@emperorakbar.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar (Flat & Simple) */}
      <div className="max-w-7xl mx-auto pt-5 sm:pt-6 mt-4 sm:mt-6 border-t border-stone-800/80 flex flex-col sm:flex-row justify-between items-center text-[11px] sm:text-xs text-stone-500 gap-2.5 sm:gap-3 text-center sm:text-left">
        <p>
          &copy; {new Date().getFullYear()} Emperor Akbar. All rights reserved.
        </p>
        <p className="flex items-center justify-center gap-2 sm:gap-3 text-stone-400 text-[10px] sm:text-xs flex-wrap">
          <span>GI-Tagged Alleppey Green Cardamom</span>
          <span className="w-1 h-1 rounded-full bg-[#d4af37] shrink-0" />
          <span>Naturally Extraordinary</span>
        </p>
      </div>
    </footer>
  );
}
