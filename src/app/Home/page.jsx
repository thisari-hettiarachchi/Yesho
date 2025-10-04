import AboutUs from "@/components/sections/HomeSection/AboutSection";
import ContactSection from "@/components/sections/HomeSection/ContactSection";
import HeroSection from "@/components/sections/HomeSection/HeroSection";
import ServicesSection from "@/components/sections/HomeSection/ServicesSection";
import WhyChoose from "@/components/sections/HomeSection/WhyChoose";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <ServicesSection />
      <WhyChoose />
      <ContactSection />
    </div>
  );
};

export default HomePage;
