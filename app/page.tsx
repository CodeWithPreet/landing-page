import Banner from "@/components/customs/Banner";
import BannerTwo from "@/components/customs/Banner-Two";
import { Footer } from "@/components/customs/Footer";
import { HeroSection } from "@/components/customs/Header-section";
import Mockup from "@/components/customs/Mockup";
import SectionFive from "@/components/customs/section-five";
import SectionFour from "@/components/customs/section-four";
import SectionOne from "@/components/customs/section-one";
import SectionThree from "@/components/customs/section-three";
import SectionTwo from "@/components/customs/section-two";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <Banner />
      <SectionThree />
      <SectionFour />
      <BannerTwo />
      <SectionFive />
      <Mockup />
    </div>
  );
}
