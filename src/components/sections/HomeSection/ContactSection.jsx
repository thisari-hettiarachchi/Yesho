"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { contactDetails } from "@/utils";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const floatVariant = (yRange = 10, duration = 6, delay = 0) => ({
  animate: {
    y: [`0%`, `${yRange}%`, `0%`],
    x: [`0%`, `${yRange / 2}%`, `0%`],
    transition: { duration, repeat: Infinity, ease: "easeInOut", delay },
  },
});

const ContactSection = () => {
  return (
    <div className="relative min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden bg-background dark:bg-background-dark">
      {/* Animated Floating Background Shapes */}
      <motion.div
        className="absolute w-72 h-72 bg-red-400/30 dark:bg-red-700/20 rounded-full top-0 left-10 blur-3xl pointer-events-none"
        variants={floatVariant(15, 8, 0)}
        animate="animate"
      />
      <motion.div
        className="absolute w-96 h-96 bg-blue-400/30 dark:bg-blue-700/20 rounded-full bottom-10 right-0 blur-3xl pointer-events-none"
        variants={floatVariant(20, 10, 2)}
        animate="animate"
      />
      <motion.div
        className="absolute w-80 h-80 bg-purple-300/20 dark:bg-purple-700/10 rounded-full top-1/3 left-1/2 -translate-x-1/2 blur-3xl pointer-events-none"
        variants={floatVariant(12, 12, 1)}
        animate="animate"
      />
      <motion.div
        className="absolute w-40 h-40 bg-pink-300/30 dark:bg-pink-700/20 rounded-full top-2/3 left-1/4 blur-3xl pointer-events-none"
        variants={floatVariant(18, 9, 0.5)}
        animate="animate"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 dark:to-black/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-12 sm:mb-16 md:mb-20 text-center px-4"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-white mb-4 sm:mb-6">
            Contact <span className="text-red-500">Us</span>
          </h1>
          <p className="text-muted dark:text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Get in touch with us for expert garment restoration services. We're
            here to help you achieve excellence.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 px-4">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="relative group flex justify-center"
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Glowing hover effect */}
                <div className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500 bg-gradient-to-br from-red-400/40 via-purple-400/20 to-blue-400/20 pointer-events-none" />
                <div className="relative w-full max-w-[480px] h-auto min-h-[240px] sm:h-[260px] flex flex-col justify-between bg-surface dark:bg-surface-dark border border-muted dark:border-muted-dark rounded-2xl p-6 sm:p-8 hover:border-red-600/50 transition-all duration-500 shadow-md dark:shadow-lg">
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-600/85 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-foreground dark:text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground dark:text-white mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted dark:text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm">{item.description}</p>
                  </div>
                  {item.info}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center pt-6 sm:pt-8 px-4"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Link href="/contactus">
            <button className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-red-600 rounded-full text-sm sm:text-base font-medium transition-all duration-300 overflow-hidden cursor-pointer">
              <span className="relative z-10 text-red-600 dark:text-red-500 transition-colors duration-300 group-hover:text-white">
                Get In Touch
              </span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 text-red-600 dark:text-red-500 transition-colors duration-300 group-hover:text-white group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-red-600  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </Link>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-8 sm:mt-10 text-center px-4"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="text-muted dark:text-gray-300 text-xs sm:text-sm">
            Or reach out manually to{" "}
            <a
              href="mailto:hello@slothui.com"
              className="text-red-500 dark:text-red-500 hover:text-red-700 dark:hover:text-red-600 transition-colors break-all"
            >
              hello@slothui.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
