"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { services } from "@/utils";

const KeyServicesSection = () => {
    
    return (
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto ">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-foreground">KEY SERVICES</span>{" "}
              <span className="text-red-600">WE OFFER</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mt-3">
              Discover our comprehensive range of solutions designed to elevate
              your experience.
            </p>
          </motion.div>

          {/* Services */}
          <div className="px-4 md:px-6 space-y-16 mt-20">
            {services.map((service, index) => {
              const isImageLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: false }}
                  className="flex flex-col md:flex-row gap-12 items-center"
                >
                  {/* Image - Left side */}
                  {isImageLeft && (
                    <div className="flex-shrink-0 w-full md:w-[250px]">
                      <div className="relative w-full h-[160px] overflow-hidden rounded-lg">
                        <Image
                          src={service.img}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>  
                    </div>
                  )}

                  {/* Text Content */}
                  <div className="flex-1 space-y-4 ">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Image - Right side */}
                  {!isImageLeft && (
                    <div className="flex-shrink-0 w-full md:w-[250px]">
                      <div className="relative w-full h-[160px] overflow-hidden rounded-lg">
                        <Image
                          src={service.img}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
};

export default KeyServicesSection;
