import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Quote } from "lucide-react";
import ShinyButton from "@/components/ShinyButton";
import { Photos } from "@/data/websiteData";

export default function FeaturedGradeSection() {
  return (
    <section className="px-4 sm:px-6 max-w-7xl mx-auto mt-6 md:mt-12">
      {/* Featured Grade Display Card */}
      <div className="relative bg-white rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 lg:p-12 border border-stone-200/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
        {/* Subtle Ambient Background Accents */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#6b2c58]/5 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#d4af37]/10 blur-3xl pointer-events-none"
        />

        {/* 12-Column Balanced Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Grade Details & Chef Endorsement (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Category / Badge Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6b2c58]/10 text-[#6b2c58] text-[11px] font-bold tracking-widest uppercase mb-4">
              <Award className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Celebrity Chef&apos;s Selection</span>
            </div>

            {/* Product Header: Thumbnail & Title */}
            <div className="flex items-center gap-4 sm:gap-6 mb-6 w-full">
              {/* Product Thumbnail */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-stone-50 rounded-2xl flex items-center justify-center border border-stone-200/70 p-2 shadow-inner">
                <Image
                  src={Photos.purpleSeedDemo}
                  alt="Purple Grade Cardamom"
                  fill
                  className="object-contain mix-blend-multiply drop-shadow-md scale-90"
                />
              </div>

              {/* Title & Specs */}
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#6b2c58] uppercase tracking-wide leading-tight">
                  Purple Grade (8mm &amp; Above)
                </h2>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-stone-500 font-bold tracking-wider text-[11px] sm:text-xs uppercase mt-1">
                  <span className="text-[#6b2c58] bg-[#6b2c58]/5 px-2 py-0.5 rounded">
                    8MM &amp; ABOVE
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
                  <span>100% Alleppey Green</span>
                  <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
                  <span>100g</span>
                </div>
              </div>
            </div>

            {/* Testimonial Quote Card */}
            <div className="relative bg-stone-50/90 rounded-2xl p-5 sm:p-6 md:p-7 border border-stone-200/60 shadow-xs mb-8 w-full">
              <div className="flex items-center gap-2 mb-3">
                <Quote className="w-5 h-5 text-[#d4af37] rotate-180" />
                <span className="text-[#6b2c58] font-bold tracking-widest text-[11px] sm:text-xs uppercase">
                  Chef Chabchoul&apos;s Favourite
                </span>
              </div>
              <blockquote className="text-stone-700 leading-relaxed text-xs sm:text-sm md:text-[15px] italic">
                Emperor Akbar Cardamom is loved by celebrity chef and renowned culinary maestro{" "}
                <strong className="text-stone-900 not-italic font-semibold">
                  Chef Mohamad Chabchoul
                </strong>{" "}
                — winner of Executive Chef of the Year, Dubai (2021–2024), TV host, and Pro Chef Awardee 2021. His first expression on experiencing its aroma:{" "}
                <strong className="text-[#6b2c58] font-semibold not-italic">
                  &ldquo;Mashaallah, the aroma is amazing&rdquo;
                </strong>
                , reflects the distinctive, world-class standard of Emperor Akbar Cardamom.
              </blockquote>
              <p className="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed">
                Selected exclusively from pods measuring 8 mm and larger, our Purple Grade represents the pinnacle of Alleppey green cardamom — plump, vibrant green, and filled with glistening oil-rich black seeds that impart superior fragrance and depth to gourmet dishes.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link href="/product/purple-grade" className="w-full sm:w-auto">
                <ShinyButton className="w-full sm:w-auto justify-center bg-[#172d1f] hover:bg-black text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm tracking-widest transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-3 group">
                  GRAB IT NOW
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </ShinyButton>
              </Link>
              <Link
                href="/cardamom-grades"
                className="text-stone-600 hover:text-stone-950 text-xs sm:text-sm font-semibold tracking-wider uppercase text-center py-2 px-4 transition-colors"
              >
                Explore All Grades →
              </Link>
            </div>
          </div>

          {/* Right Column: Celebrity Chef Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white group bg-stone-100">
              <Image
                src="https://www.emperorakbar.com/cdn/shop/files/EAC_Website_Home_Chabchaul_020126_900x.jpg?v=1767354197"
                alt="Chef Mohamad Chabchoul endorsing Emperor Akbar Cardamom"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 md:p-7 z-10 text-white">
                <div className="flex items-center gap-1.5 text-[#d4af37] text-[11px] uppercase tracking-widest font-bold mb-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Executive Chef of the Year</span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                  Chef Mohamad Chabchoul
                </h4>
                <p className="text-white/80 text-xs mt-1">
                  Dubai (2021–2024) • TV Host &amp; Pro Chef Awardee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
