import {
  Navigation,
  HeroSection,
  EcosystemSection,
  PryxPryzeSection,
  BenefitsSection,
  HowItWorksSection,
  FeaturedExperienceSection,
  CTASection,
  Footer,
} from "./sections";

export function Home() {
  return (
    <div>
      <Navigation />

      <main>
        <HeroSection />
        <EcosystemSection />
        <PryxPryzeSection />
        <BenefitsSection />
        <HowItWorksSection />
        <FeaturedExperienceSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
