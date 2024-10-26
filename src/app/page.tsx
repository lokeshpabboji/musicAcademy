import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCards";
import StickyScroll from "@/components/StickyScroll";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import { WavyBackgroundDemo } from "@/components/WavyBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <StickyScroll />
      <InfiniteMovingCardsDemo />
      <UpcomingWebinars />
      <WavyBackgroundDemo />
      <Footer />
    </main>
  );
}
