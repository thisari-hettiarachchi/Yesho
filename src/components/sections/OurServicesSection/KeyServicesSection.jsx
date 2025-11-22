"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { services } from "@/utils";

const KeyServicesSection = () => {

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">KEY SERVICES</span>{" "}
            <span className="text-red-600">WE OFFER</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mt-2 sm:mt-3">
            Discover our comprehensive range of solutions designed to elevate
            your experience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 mt-8 sm:mt-12">
          {services.map((service, index) => {
            const isImageLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isImageLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 50
                }}
                viewport={{ once: false, margin: "-100px" }}
                className="group relative"
              >
                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-r from-red-600/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />

                <div className="relative flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-16 items-center bg-transparent rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-red-600/20 hover:border-red-600 hover:shadow-red-600/30 transition-all duration-700 overflow-hidden shadow-md">

                  {/* Animated corner accent */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />

                  {/* Image - Left side */}
                  {isImageLeft && (
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className="flex-shrink-0 w-full md:w-[280px] lg:w-[320px] relative"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />
                      <div className="relative w-full h-[200px] sm:h-[240px] md:h-[260px] overflow-hidden rounded-2xl ring-4 ring-border/30 group-hover:ring-red-600/60 transition-all duration-700 shadow-xl">
                        <Image
                          src={service.img}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </motion.div>
                  )}

                  {/* Text Content */}
                  <div className="flex-1 space-y-4 sm:space-y-6 relative z-10">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "3rem" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="h-1 sm:h-1.5 bg-gradient-to-r from-red-600 to-red-500 rounded-full"
                      />
                      <span className="text-red-600 text-base sm:text-lg font-black tracking-wider">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground group-hover:text-red-600 transition-colors duration-500 leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-6 pt-4">
                      <div className="flex gap-2">
                        {[1, 2, 3].map((_, i) => (
                          <div key={i} className="w-2 h-2 rounded-full bg-red-600/30 group-hover:bg-red-600 transition-colors duration-300" style={{ transitionDelay: `${i * 100}ms` }} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image - Right side */}
                  {!isImageLeft && (
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className="flex-shrink-0 w-full md:w-[280px] lg:w-[320px] relative"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500" />
                      <div className="relative w-full h-[200px] sm:h-[240px] md:h-[260px] overflow-hidden rounded-2xl ring-4 ring-border/30 group-hover:ring-red-600/60 transition-all duration-700 shadow-xl">
                        <Image
                          src={service.img}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient {
            animation: gradient 3s ease infinite;
          }
        `}</style>
    </section>
  );
};

export default KeyServicesSection;