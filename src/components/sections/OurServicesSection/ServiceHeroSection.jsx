"use client";
import {  servicebg } from "@/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import StyledWrapper from "@/components/shared/StyledWrapper";
import { ArrowRight } from "lucide-react";
const ServiceHeroSection = () => {
    return (
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-40 h-screen overflow-hidden">
          <div
            className="w-full h-full relative"
            style={{
              borderBottomLeftRadius: "5%",
              borderBottomRightRadius: "5%",
              overflow: "hidden",
            }}
          >
            <Image
              src={servicebg}
              alt="hero background"
              fill
              className="object-cover opacity-90 dark:opacity-40 z-50"
            />
            
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              Delivering precision, quality, and reliability to the global
              textile industry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-2"
            >
              <StyledWrapper>
                <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-red-500 text-red-500 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-all duration-300">
                  Explore
                  <ArrowRight size={20} />
                </button>
              </StyledWrapper>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
};

export default ServiceHeroSection;
