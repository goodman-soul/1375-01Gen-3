import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TradeRouteSection from "@/components/TradeRouteSection";
import WellSection from "@/components/WellSection";
import CamelCaravanSection from "@/components/CamelCaravanSection";
import DwellingSection from "@/components/DwellingSection";
import RelicGallery from "@/components/RelicGallery";
import TravelGuideSection from "@/components/TravelGuideSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-sand-50">
      <Navbar />
      <HeroSection />
      <TradeRouteSection />
      <WellSection />
      <CamelCaravanSection />
      <DwellingSection />
      <RelicGallery />
      <TravelGuideSection />
      <Footer />
    </div>
  );
}
