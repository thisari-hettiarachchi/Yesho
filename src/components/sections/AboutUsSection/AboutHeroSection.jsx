"use client";
import { motion } from "framer-motion";
import StyledWrapper from "@/components/shared/StyledWrapper";
import { about } from "@/assets";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  

  const handleExploreClick = () => {
    window.scrollTo({
      top: window.innerHeight * 0.7,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative flex items-center justify-center h-[90vh] overflow-hidden rounded-b-[5%]">
      {/* Background Image */}
      <Image
        src={about}
        alt="hero background"
        fill
        className="object-cover opacity-90 dark:opacity-60"
        priority
      />
      <div className="absolute inset-0 bg-black/40 dark:bg-transparent transition-all duration-500" />
      {/* Text Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center dark:opacity-60">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About Us
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-6"
          >
            At Yesho Intelligence, we redefine excellence in garment
            <br />
            and textile mending services that meet the highest quality
            <br />
            standards through precision, passion and value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-2"
          >
            <StyledWrapper>
              <button
                onClick={handleExploreClick}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-red-600 rounded-full font-medium transition-all duration-300 overflow-hidden cursor-pointer dark:!opacity-100"
              >
                <span className="relative z-10 text-red-600 transition-colors duration-300 group-hover:text-white">
                  Explore
                </span>
                <ArrowRight className="w-5 h-5 relative z-10 text-red-600 transition-colors duration-300 group-hover:text-white group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </StyledWrapper>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
