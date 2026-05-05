import { Navbar } from "../components/callbengkel/Navbar";
import { HeroSection } from "../components/callbengkel/HeroSection";
import { ProblemSection } from "../components/callbengkel/ProblemSection";
import { HowItWorks } from "../components/callbengkel/HowItWorks";
import { FeaturesSection } from "../components/callbengkel/FeaturesSection";
import { WhyDifferent } from "../components/callbengkel/WhyDifferent";
import { Testimonials } from "../components/callbengkel/Testimonials";
import { BusinessModel } from "../components/callbengkel/BusinessModel";
import { MVPRoadmap } from "../components/callbengkel/MVPRoadmap";
import { PitchDeck } from "../components/callbengkel/PitchDeck";
import { PartnerCTA } from "../components/callbengkel/PartnerCTA";
import { DownloadCTA } from "../components/callbengkel/DownloadCTA";
import { Footer } from "../components/callbengkel/Footer";

export function LandingPage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
      <WhyDifferent />
      <Testimonials />
      <BusinessModel />
      <MVPRoadmap />
      <PitchDeck />
      <PartnerCTA />
      <DownloadCTA />
      <Footer />
    </div>
  );
}
