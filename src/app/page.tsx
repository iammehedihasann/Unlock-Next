import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MovingCards from "@/components/MovingCards";
import UpComingWebinars from "@/components/UpComingWebinars";
import Instructor from "@/components/Instructor";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <FeaturedSection />
        <WhyChooseUs />
        <MovingCards />
        <UpComingWebinars />
        <Instructor />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
