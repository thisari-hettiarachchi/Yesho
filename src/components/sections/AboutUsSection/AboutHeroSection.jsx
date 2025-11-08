"use client";
import { motion } from "framer-motion";
import StyledWrapper from "@/components/shared/StyledWrapper";
import { about } from "@/assets";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


const AboutHeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-[70vh] overflow-hidden rounded-b-[5%]">
      {/* Background Image */}
      <Image
        src={about}
        alt="hero background"
        fill
        className="object-cover opacity-90 dark:opacity-40"
        priority
      />

      {/* Text Content */}
      <div className="relative z-10 text-center text-white/70 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          At Yesho Intelligence, we redefine excellence in garment
          <br />
          and textile mending services that meet the highest quality
          <br />
          standards through precision, passion and value.
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
