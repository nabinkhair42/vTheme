import { HeroSection } from "@/components/LandingPage/HeroSection";
import { ColorPaletteSection } from "@/components/LandingPage/ColorPaletteSection";
import { ColorTheorySection } from "@/components/LandingPage/ColorTheorySection";
import { InstallationSection } from "@/components/LandingPage/InstallationSection";
import { CTASection } from "@/components/LandingPage/CTASection";

export default function LandingPage() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <ColorPaletteSection />
      <ColorTheorySection />
      <InstallationSection />
      <CTASection />
    </main>
  );
}
