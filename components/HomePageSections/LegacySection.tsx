import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Photos } from "@/data/websiteData";
import ShinyButton from "../ShinyButton";

export default function LegacySection() {
  return (
    <section 
      className="py-12 sm:py-16 md:py-24 px-5 sm:px-6 relative bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${Photos.akbarBg.src})` }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 sm:gap-16 md:pl-32 lg:pl-48 relative z-10">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2">
          <span className="text-[#a48835] font-bold tracking-widest text-xs uppercase mb-2 block">
            OUR JOURNEY
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-stone-900 uppercase tracking-wide mb-6">
            A Legacy of Aroma
          </h2>
          <p className="text-stone-700 text-sm leading-relaxed mb-8 pr-0 sm:pr-4">
            From a family business in 1981 to a globally loved brand today,
            Emperor Akbar continues to bring the unmatched aroma of Alleppey
            Green Cardamom to kitchens around the world.
          </p>
          <Link href="/our-story">
            <ShinyButton className="bg-[#0b1f14] text-white px-6 py-2.5 rounded-[2rem] font-bold text-xs tracking-widest hover:bg-black transition-colors flex items-center gap-2">
              OUR STORY <ArrowRight className="w-3.5 h-3.5" />
            </ShinyButton>
          </Link>
        </div>

        {/* Right Side: Timeline */}
        <div className="w-full md:w-1/2">
          <div className="relative pl-5 sm:pl-6">
            {/* Vertical Line */}
            <div className="absolute top-2 bottom-2 left-[5px] w-[2px] bg-stone-300"></div>
            
            <div className="space-y-6 sm:space-y-8">
              {/* 1981 */}
              <div className="relative">
                <div className="absolute -left-[23px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#0b1f14] border-2 border-transparent z-10"></div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-[60px] sm:w-16 font-serif font-bold text-[17px] sm:text-xl text-stone-800 leading-none">1981</div>
                  <div className="h-[1px] w-4 sm:w-6 bg-stone-300 hidden sm:block"></div>
                  <div className="text-[11px] sm:text-xs font-medium text-stone-600 leading-tight">Samex begins as a family business</div>
                </div>
              </div>
              
              {/* 2008 */}
              <div className="relative">
                <div className="absolute -left-[23px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#b58742] border-2 border-transparent z-10"></div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-[60px] sm:w-16 font-serif font-bold text-[17px] sm:text-xl text-stone-800 leading-none">2008</div>
                  <div className="h-[1px] w-4 sm:w-6 bg-stone-300 hidden sm:block"></div>
                  <div className="text-[11px] sm:text-xs font-medium text-stone-600 leading-tight">Emperor Akbar launches</div>
                </div>
              </div>
              
              {/* 2010+ */}
              <div className="relative">
                <div className="absolute -left-[23px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#b58742] border-2 border-transparent z-10"></div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-[60px] sm:w-16 font-serif font-bold text-[17px] sm:text-xl text-stone-800 leading-none">2010+</div>
                  <div className="h-[1px] w-4 sm:w-6 bg-stone-300 hidden sm:block"></div>
                  <div className="text-[11px] sm:text-xs font-medium text-stone-600 leading-tight">Aroma-Lock innovation</div>
                </div>
              </div>
              
              {/* Today */}
              <div className="relative">
                <div className="absolute -left-[23px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#0b1f14] border-2 border-transparent z-10"></div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-[60px] sm:w-16 font-serif font-bold text-[17px] sm:text-xl text-stone-800 leading-none">Today</div>
                  <div className="h-[1px] w-4 sm:w-6 bg-stone-300 hidden sm:block"></div>
                  <div className="text-[11px] sm:text-xs font-medium text-stone-600 leading-tight">Trusted in 25+ countries worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
