
import { Photos } from "@/data/websiteData";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-bg-tertiary text-stone-400 py-6 md:pb-6 md:pt-10 px-4 sm:px-6 flex flex-col justify-between relative overflow-hidden">
      {/* Huge background text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden opacity-50 md:opacity-100">
        <h1 className="text-[20vw] md:text-[13vw] font-serif font-black text-white/5 tracking-tighter leading-none whitespace-nowrap select-none uppercase">
          Emperor Akbar
        </h1>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-x-6 gap-y-6 sm:gap-8 flex-1 relative z-10">
        
        {/* Brand Column */}
        <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-3 flex flex-row md:flex-col items-center md:items-start text-left gap-4 md:gap-0">
          <div className="relative shrink-0 flex items-center justify-center w-12 h-12 md:w-20 md:h-20 rounded-full bg-white shadow-[0_0_15px_rgba(251,191,36,0.15)] border-2 border-amber-500/30 overflow-hidden md:mb-5 p-2 md:p-3 transition-all duration-300 hover:scale-105 hover:border-amber-400">
            <div className="absolute inset-0 rounded-full border border-white/20 bg-gradient-to-tr from-stone-100 to-white" />
            <Image
              src={Photos.logo}
              alt="Emperor Akbar Logo"
              width={64}
              height={64}
              className="relative z-10 object-contain aspect-square"
            />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#f4f1ea] md:mb-3 leading-tight">
              The Green Gold <br className="hidden sm:block" />
              <span className="text-[#d4af37] italic">of India.</span>
            </h3>
            <p className="text-xs text-stone-400/80 hidden md:block max-w-xs leading-relaxed">
              World&apos;s finest Alleppey Green Cardamom, packed fresh with patented aroma-lock technology.
            </p>
          </div>
        </div>

        {/* Shop Column - Hidden on Tablet & Mobile, Visible on Laptop/Desktop */}
        <div className="hidden lg:block lg:col-span-2">
          <h4 className="text-white font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-2.5 md:mb-5">
            Shop
          </h4>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
            <li>
              <Link href="/shop" className="hover:text-white transition-colors">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/cardamom-grades" className="hover:text-white transition-colors">
                Cardamom Grades
              </Link>
            </li>
            <li>
              <Link href="/recipes" className="hover:text-white transition-colors">
                Recipes
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Column - Hidden on Tablet & Mobile, Visible on Laptop/Desktop */}
        <div className="hidden lg:block lg:col-span-2">
          <h4 className="text-white font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-2.5 md:mb-5">
            Company
          </h4>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
            <li>
              <Link href="/our-story" className="hover:text-white transition-colors">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/csr" className="hover:text-white transition-colors">
                CSR Initiatives
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <a href="#footer-contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Help Column */}
        <div className="col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-2">
          <h4 className="text-white font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-2.5 md:mb-5">
            Help
          </h4>
          <ul className="grid grid-cols-2 sm:flex sm:flex-col gap-1.5 sm:gap-0 sm:space-y-2 text-xs sm:text-sm">
            <li>
              <Link href="/faq" className="hover:text-white transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Shipping & Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Returns & Refunds
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div id="footer-contact" className="col-span-1 sm:col-span-1 md:col-span-5 lg:col-span-3 flex flex-col scroll-mt-6">
          <h4 className="text-white font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-2.5 md:mb-5">
            Contact
          </h4>
          
          <div className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm">
            {/* Address */}
            <div className="flex items-start gap-2.5 group">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div className="leading-relaxed">
                <a
                  href="https://www.emperorakbar.com/pages/about#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-block hover:text-white transition-colors"
                >
                  <span className="font-semibold text-stone-200 group-hover/link:text-[#d4af37] transition-colors flex items-center gap-1.5">
                    Samex India Pvt. Ltd.
                    <ExternalLink className="w-3 h-3 opacity-60 group-hover/link:opacity-100" />
                  </span>
                  <span className="text-stone-400 text-xs block mt-0.5">
                    201, Sabari Samriddhi, V. N. Purav Marg,<br className="hidden sm:inline" /> Chembur, Mumbai - 400 071. India.
                  </span>
                </a>
              </div>
            </div>

            {/* Customer Care */}
            <div className="flex items-center gap-2.5 group">
              <Phone className="w-4 h-4 text-[#d4af37] shrink-0 group-hover:scale-110 transition-transform" />
              <div className="text-xs sm:text-sm">
                <span className="text-[10px] uppercase tracking-wider text-stone-500 block font-medium">Customer Care</span>
                <a
                  href="tel:+919699196991"
                  className="font-medium text-stone-200 hover:text-[#d4af37] transition-colors"
                >
                  +91 96991 96991
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2.5 group">
              <Mail className="w-4 h-4 text-[#d4af37] shrink-0 group-hover:scale-110 transition-transform" />
              <div className="text-xs sm:text-sm">
                <span className="text-[10px] uppercase tracking-wider text-stone-500 block font-medium">E-mail</span>
                <a
                  href="mailto:birbal@emperorakbar.com"
                  className="font-medium text-stone-200 hover:text-[#d4af37] transition-colors break-all"
                >
                  birbal@emperorakbar.com
                </a>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-stone-800/80">
            <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block mb-2">
              Follow Us
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/emperorakbarcardamom/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-stone-700 bg-white/5 flex items-center justify-center text-stone-300 hover:bg-[#d4af37] hover:text-black hover:border-transparent transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/emperorakbarcardamom/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-stone-700 bg-white/5 flex items-center justify-center text-stone-300 hover:bg-[#d4af37] hover:text-black hover:border-transparent transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.694 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@emperorakbarcardamom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-stone-700 bg-white/5 flex items-center justify-center text-stone-300 hover:bg-[#d4af37] hover:text-black hover:border-transparent transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full pt-3 md:pt-4 mt-4 md:mt-4 border-t border-stone-800/80 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs tracking-wider gap-3 md:gap-0 relative z-10 text-center md:text-left text-stone-400">
        <p>&copy; 2026 Emperor Akbar. All rights reserved.</p>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span>India&apos;s Finest Cardamom</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-[#d4af37]"></span>
          <span>Naturally Extraordinary.</span>
        </div>
      </div>
    </footer>
  );
}
