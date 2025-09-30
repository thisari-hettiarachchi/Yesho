"use client";
import { features } from "@/utils";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChoose = () => {
  const headingRef = useRef();
  const paragraphRef = useRef();

  useEffect(() => {
    const headingSplit = new SplitText(headingRef.current, {
      type: "chars, words",
    });
    // Split paragraph
    const paraSplit = new SplitText(paragraphRef.current, {
      type: "chars, words",
    });


    gsap.from(headingSplit.chars, {
      opacity: 0,
      y: 50,
      stagger: 0.05,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    gsap.from(paraSplit.chars, {
      opacity: 0,
      y: 20,
      stagger: 0.02,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    });

    return () => {
      headingSplit.revert();
      paraSplit.revert();
    };
  }, []);

  return (
    <section className="relative overflow-hidden pb-20">
      <div className="relative mx-auto px-10">
        {/* Section Title */}
        <div className="text-center">
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold text-white mb-3"
          >
            Why Choose <span className="text-red-500">YESHO</span>
          </h2>

          <p
            ref={paragraphRef}
            className="text-gray-300 text-base max-w-xl mx-auto mt-6"
          >
            Excellence in{" "}
            <span className="text-white font-semibold">quality</span>,{" "}
            <span className="text-white font-semibold">trust</span>, and{" "}
            <span className="text-white font-semibold">perfection</span>.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-wrap gap-10 justify-center mt-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-center text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl px-4 py-6 shadow-lg border border-white/10 hover:border-red-400/50 hover:shadow-red-400/20 transform hover:-translate-y-2 transition-all duration-300 w-64 bg-slate-950/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: false }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={feature.icon}
                  alt={feature.alt}
                  width={80}
                  height={80}
                  className="drop-shadow-md"
                />
              </div>

              <h3 className="font-semibold text-white text-[14px] mb-2 tracking-tight">
                {feature.title}
              </h3>

              {feature.subtitle && (
                <p className="text-red-300 text-[12px] font-semibold uppercase mb-1 tracking-wider">
                  {feature.subtitle}
                </p>
              )}

              {feature.description && (
                <p className="text-gray-300/80 text-[11px] leading-relaxed">
                  {feature.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Text Section */}
        <motion.div
          className="mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <p className="text-center text-white text-base sm:text-lg leading-relaxed">
            At YESHO Intelligence, we understand the importance of quality and
            compliance in the textile industry. We ensure that every piece we
            handle meets the highest standards, allowing our clients to maintain
            their reputation for excellence...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
