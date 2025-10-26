import FeaturesSection from "@/components/features-section/FeaturesSection";
import HeroSection from "@/components/hero-section/HeroSection";
import HowItWorksSection from "@/components/howitworks-section/HowItWorksSection";

export default function HomeLayout() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
    </main>
  );
}
