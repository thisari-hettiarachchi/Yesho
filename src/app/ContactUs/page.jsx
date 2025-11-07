import React from "react";
import ContactInfo from "@/components/sections/ContactSection/contactInfo";
import ContactForm from "@/components/sections/ContactSection/contactform";
import FAQ from "@/components/sections/ContactSection/FAQ";
import Hero from "@/components/sections/ContactSection/HeroSection";
import MapSection from "@/components/sections/ContactSection/mapsection";

const ContactUsPage = () => {
  return (
    <div className="bg-background text-foreground">
      <Hero />

      <section className="container mb-10 relative z-[1] -mt-20 w-[90%] md:w-[85%] lg:w-[80%] h-auto md:h-[600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-card rounded-2xl shadow-lg p-6 md:p-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>


      <section className="container mx-auto px-4 mb-20">
        <MapSection />
      </section>

      <FAQ />
    </div>
  );
};

export default ContactUsPage;
