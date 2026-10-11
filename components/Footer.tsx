"use client";
import { Photos } from "@/data/websiteData";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
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
          <div
            onClick={() => {
              router.push("/  ");
            }}
            className="relative shrink-0 flex items-center justify-center w-12 h-12 md:w-20 md:h-20 rounded-full bg-white shadow-[0_0_15px_rgba(251,191,36,0.15)] border-2 border-amber-500/30 overflow-hidden md:mb-5 p-2 md:p-3 transition-all duration-300 hover:scale-105 hover:border-amber-400"
          >
            <div className="absolute inset-0 rounded-full border border-white/20 bg-gradient-to-tr from-stone-100 to-white" />
            <Image
              src={Photos.logo}
              alt="Emperor Akbar Logo"
              width={64}
              height={64}
              className="relative z-10 object-contain aspect-square"
            />
          </div>
          <div
            onClick={() => {
              router.push("/  ");
            }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#f4f1ea] md:mb-3 leading-tight">
              The Green Gold <br className="hidden sm:block" />
              <span className="text-[#d4af37] italic">of India.</span>
            </h3>
            <p className="text-xs text-stone-400/80 hidden md:block max-w-xs leading-relaxed">
              World&apos;s finest Alleppey Green Cardamom, packed fresh with
              patented aroma-lock technology.
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
              <Link
                href="/cardamom-grades"
                className="hover:text-white transition-colors"
              >
                Cardamom Grades
              </Link>
            </li>
            <li>
              <Link
                href="/recipes"
                className="hover:text-white transition-colors"
              >
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
              <Link
                href="/our-story"
                className="hover:text-white transition-colors"
              >
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
              <Link
                href="/shipping-policy"
                className="hover:text-white transition-colors"
              >
                Shipping & Delivery
              </Link>
            </li>
            <li>
              <Link
                href="/return-policy"
                className="hover:text-white transition-colors"
              >
                Return and refund policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div
          id="footer-contact"
          className="col-span-1 sm:col-span-1 md:col-span-5 lg:col-span-3 flex flex-col scroll-mt-6"
        >
          <h4 className="text-white font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-2.5 md:mb-5">
            Contact
          </h4>

          <div className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm">
            {/* Address */}
            <div className="flex items-start gap-2.5 group">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div className="leading-relaxed">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=201%2C+Sabari+Samriddhi%2C+V.N.+Purav+Marg%2C+Chembur%2C+Mumbai+400071"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-block hover:text-white transition-colors"
                >
                  <span className="font-semibold text-stone-200 group-hover/link:text-[#d4af37] transition-colors flex items-center gap-1.5">
                    Samex India Pvt. Ltd.
                    <ExternalLink className="w-3 h-3 opacity-60 group-hover/link:opacity-100" />
                  </span>
                  <span className="text-stone-400 text-xs block mt-0.5">
                    201, Sabari Samriddhi, V. N. Purav Marg,
                    <br className="hidden sm:inline" /> Chembur, Mumbai - 400
                    071, India.
                  </span>
                </a>
              </div>
            </div>

            {/* Customer Care */}
            <div className="flex items-center gap-2.5 group">
              <Phone className="w-4 h-4 text-[#d4af37] shrink-0 group-hover:scale-110 transition-transform" />
              <div className="text-xs sm:text-sm">
                <span className="text-[10px] uppercase tracking-wider text-stone-500 block font-medium">
                  Customer Care
                </span>
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
                <span className="text-[10px] uppercase tracking-wider text-stone-500 block font-medium">
                  E-mail
                </span>
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
                className="w-8 h-8 rounded-full border border-stone-700 bg-white/5 flex items-center justify-center text-white/80 hover:bg-[#d4af37] hover:text-black hover:border-transparent transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <SiInstagram className="w-4 h-4" />
              </a>

              <a
                href="https://www.facebook.com/emperorakbarcardamom/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-stone-700 bg-white/5 flex items-center justify-center text-white/80 hover:bg-[#d4af37] hover:text-black hover:border-transparent transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <SiFacebook className="w-4 h-4" />
              </a>

              <a
                href="https://www.youtube.com/@emperorakbarcardamom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-stone-700 bg-white/5 flex items-center justify-center text-white/80 hover:bg-[#d4af37] hover:text-black hover:border-transparent transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                <SiYoutube className="w-4 h-4" />
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
