"use client";
import { servicebg } from "@/assets";
import Image from "next/image";
import React from "react";

const ServiceHeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-[90vh] overflow-hidden rounded-b-[5%]">
      {/* Background Image */}
      <Image
        src={servicebg}
        alt="hero background"
        fill
        className="object-cover opacity-90 dark:opacity-40"
        priority
      />

      {/* Gradient Overlay - hidden in dark mode using Tailwind */}
      <div className="absolute inset-0 bg-black/40 dark:bg-transparent transition-all duration-500" />

      {/* Text Content */}
      <div className="relative z-10 text-center text-white/70 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Delivering precision, quality, and reliability to the global textile
          industry.
          <br />
          Your trusted partner for all garment and textile mending needs.
        </p>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
