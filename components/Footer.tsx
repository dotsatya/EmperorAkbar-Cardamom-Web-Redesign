import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Photos } from "@/data/websiteData";

export default function Footer() {
  return (
    <footer className="w-full bg-bg-tertiary text-stone-400 py-6 md:pb-6 md:pt-10 px-4 sm:px-6 flex flex-col justify-between relative overflow-hidden">
      {/* Huge background text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden opacity-50 md:opacity-100">
        <span
          aria-hidden="true"
          className="text-[20vw] md:text-[13vw] font-serif font-black text-white/5 tracking-tighter leading-none whitespace-nowrap select-none uppercase"
        >
          Emperor Akbar
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-x-6 gap-y-6 sm:gap-8 flex-1 relative z-10">
        {/* Brand Column */}
        <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-3 flex flex-row md:flex-col items-center md:items-start text-left gap-4 md:gap-0">
          <Link
            href="/"
            aria-label="Emperor Akbar Homepage"
            
            className="relative shrink-0 flex items-center justify-center w-12 h-12 md:w-20 md:h-20 rounded-full bg-white shadow-[0_0_15px_rgba(251,191,36,0.15)] border-2 border-amber-500/30 overflow-hidden md:mb-5 p-2 md:p-3 transition-all duration-300 hover:scale-105 hover:border-amber-400"
          >
            <Image
              src={Photos.logo}
              alt="Emperor Akbar Logo"
              width={64}
              height={64}
              className="relative z-10 object-contain aspect-square"
            />
          </Link>
          <div>
            <Link
              href="/"
              aria-label="Emperor Akbar Cardamom - Home"
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#f4f1ea] leading-tight">
                The Green Gold <br className="hidden sm:block" />
                <span className="text-[#d4af37] italic">of India.</span>
              </h3>
            </Link>
            <p className="text-xs text-stone-400/80 hidden md:block max-w-xs leading-relaxed mt-2 md:mt-3">
              World&apos;s finest Alleppey Green Cardamom, packed fresh with
              patented aroma-lock technology.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 mt-4">
              <a
                href="https://www.facebook.com/EmperorAkbarCardamom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Emperor Akbar on Facebook"
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/emperorakbarcardamom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Emperor Akbar on Instagram"
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@EmperorAkbarCardamom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to Emperor Akbar on YouTube"
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Shop Column (2 cols) */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-4 border-b border-stone-800 pb-2">
            Shop
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
            <li>
              <Link href="/shop/" className="hover:text-white transition-colors">
                All Products
              </Link>
            </li>
            <li>
              <Link
                href="/cardamom-grades/"
                className="hover:text-white transition-colors"
              >
                Cardamom Grades
              </Link>
            </li>
            <li>
              <Link
                href="/recipes/"
                className="hover:text-white transition-colors"
              >
                Recipes
              </Link>
            </li>
            <li>
              <Link
                href="/health-benefits/"
                className="hover:text-white transition-colors"
              >
                Health Benefits
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Column (2 cols) */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-4 border-b border-stone-800 pb-2">
            Company
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
            <li>
              <Link
                href="/our-story/"
                className="hover:text-white transition-colors"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/csr/" className="hover:text-white transition-colors">
                CSR Initiatives
              </Link>
            </li>
            <li>
              <Link href="/blog/" className="hover:text-white transition-colors">
                Blog &amp; Insights
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Care Column (2 cols) */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-4 border-b border-stone-800 pb-2">
            Support
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
            <li>
              <Link href="/faq/" className="hover:text-white transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/shipping-policy/"
                className="hover:text-white transition-colors"
              >
                Shipping &amp; Delivery
              </Link>
            </li>
            <li>
              <Link
                href="/return-policy/"
                className="hover:text-white transition-colors"
              >
                Return &amp; Refund Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions/"
                className="hover:text-white transition-colors"
              >
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy/"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Column (2 cols) */}
        <div className="lg:col-span-2">
          <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-4 border-b border-stone-800 pb-2">
            Contact
          </h4>
          <div className="space-y-3 text-xs sm:text-sm text-stone-400">
            <div className="flex items-start gap-2 group">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=201%2C+Sabari+Samriddhi%2C+V.N.+Purav+Marg%2C+Chembur%2C+Mumbai+400071"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-block leading-relaxed"
              >
                <span className="font-semibold text-stone-200 block flex items-center gap-1">
                  Samex India Pvt. Ltd.
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </span>
                <span className="text-[11px] block mt-0.5 text-stone-400">
                  Chembur, Mumbai - 400 071, India.
                </span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
              <a
                href="tel:+919699196991"
                className="hover:text-[#d4af37] transition-colors"
              >
                +91 96991 96991
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
              <a
                href="mailto:birbal@emperorakbar.com"
                className="hover:text-[#d4af37] transition-colors break-all"
              >
                birbal@emperorakbar.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar (Flat & Simple) */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500 gap-3">
        <p>
          &copy; {new Date().getFullYear()} Emperor Akbar. All rights reserved.
        </p>
        <p className="flex items-center gap-3">
          <span>GI-Tagged Alleppey Green Cardamom</span>
          <span className="w-1 h-1 bg-[#d4af37]" />
          <span>Naturally Extraordinary</span>
        </p>
      </div>
    </footer>
  );
}
