import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoIntroductionSection from "@/components/VideoIntroductionSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SavingsCalculator from "@/components/SavingsCalculator";
import IntegrationsSection from "@/components/IntegrationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <VideoIntroductionSection />
      <FeaturesSection />
      <UseCasesSection />
      <HowItWorksSection />
      <SavingsCalculator />
      <IntegrationsSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
