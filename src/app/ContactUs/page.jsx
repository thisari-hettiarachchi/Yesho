import React from "react";
import ContactInfo from "@/components/sections/ContactSection/contactInfo";
import ContactForm from "@/components/sections/ContactSection/contactform";
import FAQ from "@/components/sections/ContactSection/FAQ";
import Hero from "@/components/sections/ContactSection/HeroSection";

const ContactUsPage = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>
      <div className="container mx-auto px-4 mb-16">
      </div>
      <FAQ />
    </div>
  );
};

export default ContactUsPage;
