import { websiteData as data } from "../data/websiteData";
import HeroSection from "@/components/HomePageSections/HeroSection";
import FeaturedGradeSection from "@/components/HomePageSections/FeaturedGradeSection";
import ProductGridSection from "@/components/HomePageSections/ProductGridSection";
import BadgesSection from "@/components/HomePageSections/BadgesSection";
import RecipesSection from "@/components/HomePageSections/RecipesSection";
import LegacySection from "@/components/HomePageSections/LegacySection";
import HealthBenefitsSlider from "@/components/HealthBenefitsSlider";

export default function Home() {
  const shopData = data.shop;
  const recipeData = data.recipes;

  return (
    <div className="font-sans text-stone-900 ">
      <HeroSection />
      <FeaturedGradeSection />
      <ProductGridSection shopData={shopData} />
      
      {/* natural +...  section */}
      <BadgesSection />
      
      {/* health benefits */}
      <HealthBenefitsSlider />
      
      {/* recipes section  */}
      <RecipesSection recipeData={recipeData} />
      
      {/* legacy section */}
      <LegacySection />
    </div>
  );
}
