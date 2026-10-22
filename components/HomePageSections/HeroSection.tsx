import Link from "next/link";
import Image from "next/image";
import { MapPin, Lock, Leaf, ArrowRight } from "lucide-react";
import ShinyButton from "@/components/ShinyButton";
import { Photos } from "@/data/websiteData";

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] lg:min-h-[60vh] flex items-center py-10 lg:py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={Photos.heroBG}
          alt="Misty Cardamom Plantation"
          title="Misty Cardamom Plantation - Emperor Akbar"
          fill
          className="object-cover object-center "
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-white">
          <span className="text-stone-300 font-medium tracking-[0.2em] text-xs md:text-sm uppercase mb-3 block">
            Premium GI-Tagged Alleppey Origin
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-4 md:mb-6 text-white">
            <span className="block text-lg sm:text-xl lg:text-2xl font-sans font-semibold tracking-[0.2em] text-[#d4af37] uppercase mb-2">
              Emperor Akbar Cardamom
            </span>
            THE GREEN <br /> GOLD OF INDIA
          </h1>
     
          <p className="text-stone-300 max-w-lg mb-10 leading-relaxed text-sm md:text-sm">
            Celebrated as the Green Gold of India, Emperor Akbar Cardamom brings you
            authentic GI-tagged Alleppey Green Cardamom cultivated in the misty hills of
            South India. Explore our premium cardamom grades, distinct pod sizes, and
            fresh culinary recipes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/shop">
              <ShinyButton className="bg-gradient-to-r from-[#d4af37]/60 to-[#d4af37] hover:bg-btn-primary  text-white px-8 py-4 rounded-full font-bold text-sm 
              flex items-center gap-2 justify-center
              ">
                SHOP CARDAMOM <ArrowRight className="w-4 h-4" />
              </ShinyButton>
            </Link>
            <Link href="/our-story">
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-white hover:text-black transition-colors w-full sm:w-auto">
                DISCOVER OUR STORY
              </button>
            </Link>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center right-4 lg:right-[-15%] gap-6 text-[10px] md:text-xs uppercase tracking-widest font-medium">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#d4af37]" />
              <span className="leading-snug text-stone-200">
                GI-Tagged
                <br />
                Alleppey Cardamom
              </span>
            </div>
            <div className="hidden sm:block border-l border-white/30 h-8"></div>
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-[#d4af37]" />
              <span className="leading-snug text-stone-200">
                Aroma-Lock
                <br />
                Technology
              </span>
            </div>
            <div className="hidden sm:block border-l border-white/30 h-8"></div>
            <div className="flex items-center gap-3">
              <Leaf className="w-5 h-5 text-[#d4af37]" />
              <span className="leading-snug text-stone-200">
                100% Natural
                <br />
                No Additives
              </span>
            </div>
          </div>
        </div>

        {/* Right Side Overlay Elements */}
        <div className="hidden lg:flex w-1/2 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none items-center justify-end pr-8 lg:pr-0 lg:-mr-10">
          <div className="flex flex-col items-center gap-12 pointer-events-auto">
            {/* Cursive Text */}
            <div className="-rotate-[24deg] drop-shadow-2xl text-center mb-4">
              <span
                className="text-4xl md:text-5xl lg:text-6xl text-[#f4f1ea] drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"
                style={{ fontFamily: "var(--font-cursive), cursive" }}
              >
                Nature&apos;s
                <br />
                Finest Aroma
              </span>
            </div>

            {/* GI Badge */}
            <div className="">
              <div className=" absolute right-[2%] w-36 h-36 rounded-full border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-sm shadow-2xl p-2 hover:scale-105 transition-transform cursor-pointer group">
                <div className="w-full h-full rounded-full border-[1.5px] border-dashed border-[#d4af37]/80 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-[#d4af37] transition-colors">
                  {/* SVG for circular text effect */}
                  <svg
                    className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite] opacity-90"
                    viewBox="0 0 100 100"
                  >
                    <path
                      id="circlePath"
                      d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
                      fill="transparent"
                    />
                    <text className="text-[8.5px] fill-white tracking-widest uppercase font-sans font-bold">
                      <textPath href="#circlePath" startOffset="0%">
                        EXCLUSIVE · AUTHENTIC · ALLEPPEY ·
                      </textPath>
                    </text>
                  </svg>
                  <span className="text-4xl font-serif text-[#d4af37] font-bold z-10">
                    GI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
