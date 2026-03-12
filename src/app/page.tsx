import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import MissionSection from "@/components/MissionSection";
import ProductCards from "@/components/ProductCards";
import FeatureSection from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";
import HistorySection from "@/components/HistorySection";
import LocationsSection from "@/components/LocationsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <MissionSection />
        <ProductCards />
        <FeatureSection />
        <CTASection />
        <HistorySection />
        <LocationsSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
