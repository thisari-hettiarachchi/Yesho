import React from "react";
import Navigation from "@/components/sections/ContactPage/Navigation";
import Hero from "@/components/sections/ContactPage/Hero";
import ContactInfo from "@/components/sections/ContactPage/ContactInfo";
import ContactForm from "@/components/sections/ContactPage/ContactForm";
import MapSection from "@/components/sections/ContactPage/MapSection";
import FAQ from "@/components/sections/ContactPage/FAQ";
import Footer from "@/components/sections/ContactPage/Footer";

const ContactUsPage = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>
      <div className="container mx-auto px-4 mb-16">
        <MapSection />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
