import { SiteHeader } from "@/components/landing/SiteHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { CoreVideoSection } from "@/components/landing/CoreVideoSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { CommunitySection } from "@/components/landing/CommunitySection";
import { SteamSection } from "@/components/landing/SteamSection";
import { FAQDiscordSection } from "@/components/landing/FAQDiscordSection";
import { Footer } from "@/components/landing/Footer";
import { StickyCTA } from "@/components/landing/StickyCTA";

export default function Home() {
  return (
    <div id="top" className="flex min-h-full flex-col pb-24">
      <SiteHeader />
      <main className="flex flex-col">
        <HeroSection />
        <CoreVideoSection />
        <HowItWorksSection />
        <BenefitsSection />
        <CommunitySection />
        <SteamSection />
        <FAQDiscordSection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
