"use client";
import { contactbg } from "@/assets";
import Image from "next/image";

const ContactHeroSection = () => {

  return (
    <section className="relative flex items-center justify-center min-h-[70vh] sm:min-h-[80vh] md:h-[90vh] overflow-hidden rounded-b-[3%] sm:rounded-b-[4%] md:rounded-b-[5%]">
      {/* Background Image */}
      <Image
        src={contactbg}
        alt="hero background"
        fill
        className="object-cover opacity-90 dark:opacity-40"
        priority
      />
      <div
        className="absolute inset-0 bg-black/40 dark:bg-transparent
      transition-all duration-500"
      />
      {/* Text Content */}
      <div className="relative z-10 text-center text-white/70 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">Contact Us</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
          Have questions, feedback, or partnership ideas?
          <br className="hidden sm:block" />
          Reach out and we'll respond as soon as possible.
        </p>
      </div>
    </section>
  );
};

export default ContactHeroSection;
