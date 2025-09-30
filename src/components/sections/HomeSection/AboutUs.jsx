"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, CheckCircle2, Sparkles } from "lucide-react";
import { stats, teamMembers, services } from "@/utils";
import { img2, img3, img4 } from "@/assets";
import Image from "next/image";
import StyledWrapper from "@/components/ui/StyledWrapper";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const headingRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    if (!headingRef.current) return;

    const words = headingRef.current.querySelectorAll(".word");

    gsap.from(words, {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-black py-20 overflow-hidden top-[-100px]"
    >
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Content */}
          <div>
            <motion.p
              className="text-white text-4xl uppercase tracking-widest mb-6 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="w-8 h-px bg-red-500"></span>
              <span ref={headingRef}>
                <span className="word">Who</span>{" "}
                <span className="word">are</span>{" "}
                <span className="word">we</span>
              </span>
            </motion.p>

            <motion.p
              className="text-white text-sm leading-relaxed mt-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              YESHO Intelligence is a leading expert in the field of garment and
              textile mending, located in Kaduwela, Sri Lanka. With over ten
              years of experience, we have built a reputation as a trusted
              partner for businesses seeking high-quality garment restoration
              services. Our core competencies include meticulous reviewing,
              repairing, stain removal, and mending of fabrics and finished
              garments.
            </motion.p>

            <div className="bg-black flex items-center justify-center ">
              <motion.div
                className="mt-10 space-y-4 max-w-2xl w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-50px" }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
              >
                {services.map((item, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    variants={{
                      hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
                      visible: {
                        opacity: 1,
                        x: 0,
                        filter: "blur(0px)",
                        transition: {
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1], // Custom easing
                        },
                      },
                    }}
                  >
                    {/* Animated background glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-purple-500/0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl"
                      initial={false}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Main content card */}
                    <motion.div
                      className="relative flex items-center gap-3 p-2 rounded-xl bg-gradient-to-r from-zinc-900/50 to-zinc-800/30 border border-zinc-800/50 backdrop-blur-sm overflow-hidden"
                      whileHover={{
                        scale: 1.02,
                        borderColor: "rgba(239, 68, 68, 0.5)",
                        transition: { duration: 0.3 },
                      }}
                    >
                      {/* Animated shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />

                      {/* Icon with animation */}
                      <motion.div
                        className="relative flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                      </motion.div>

                      {/* Text content */}
                      <div className="flex-1 relative z-10">
                        <motion.p
                          className="text-sm md:text-sm lg:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item}
                        </motion.p>
                      </div>

                      {/* Hover arrow indicator */}
                      <motion.div
                        className="flex-shrink-0 opacity-0 group-hover:opacity-100"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Sparkles className="w-4 h-4 text-red-400" />
                      </motion.div>

                      
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <StyledWrapper>
              <motion.button
                className="animated-button mt-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
                <span className="text">More Details</span>
                <span className="circle" />
                <svg
                  viewBox="0 0 24 24"
                  className="arr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
              </motion.button>
            </StyledWrapper>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <h3 className="text-3xl md:text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
            {/* Team & Watch Intro */}
            <motion.div
              className="flex items-center gap-6 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <motion.div
                className="flex -space-x-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }}
              >
                {teamMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="w-12 h-12 rounded-full border-2 border-black overflow-hidden"
                  >
                    <img
                      src={member.img}
                      alt="Team member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </motion.div>

              <button className="flex items-center gap-3 text-white hover:text-red-500 transition-colors group">
                <div className="w-12 h-12 rounded-full border-2 border-white group-hover:border-red-500 flex items-center justify-center transition-colors">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <span className="font-medium">WATCH INTRO</span>
              </button>
            </motion.div>
          </div>

          {/* Right side - Images */}
          <div className="relative">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Main large image */}
              <div className="relative rounded-2xl overflow-hidden mb-6 w-150 h-150">
                <Image
                  src={img4}
                  alt="Team collaboration"
                  className="w-full h-auto"
                />
              </div>

              {/* Top right cards */}
              <motion.div
                className="absolute -top-6 -right-6 grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-xl overflow-hidden w-40 h-40">
                  <Image
                    src={img2}
                    alt="Tech workspace"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs">
                      Reviewing
                    </span>
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs">
                      Mending
                    </span>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden w-40 h-40">
                  <Image
                    src={img3}
                    alt="Team meeting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs">
                      Repair
                    </span>
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs">
                      Quality
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative element */}
              <motion.div
                className="absolute top-1/4 -left-8 w-24 h-24"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="10 5"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
