"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, CheckCircle2 } from "lucide-react";
import { serviceImages, services, stats, teamMembers } from "@/utils";
import StyledWrapper from "@/components/shared/StyledWrapper";
import Image from "next/image";
import Link from "next/link";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const headingRef = useRef();
  const containerRef = useRef();
  const [selectedService, setSelectedService] = useState(0);
  useEffect(() => {
    const headingSplit = new SplitText(headingRef.current, {
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

    return () => {
      headingSplit.revert();
    };
  }, []);

  const currentImages = serviceImages[selectedService];

  return (
    <section ref={containerRef} className="relative pb-20 overflow-hidden bg-background">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-36 items-center">
          {/* Left side - Content */}
          <div>
            <h2
              ref={headingRef}
              className="text-4xl md:text-5xl font-bold text-foreground"
            >
              WHO <span className="text-red-500">WE ARE</span>
            </h2>

            <motion.p
              className="text-muted text-sm leading-relaxed mt-8"
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

            <div className="bg-background flex items-center justify-center">
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
                    className="group relative cursor-pointer"
                    variants={{
                      hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
                      visible: {
                        opacity: 1,
                        x: 0,
                        filter: "blur(0px)",
                        transition: {
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                    onClick={() => setSelectedService(index)}
                  >
                    {/* Main content card */}
                    <motion.div
                      className={`relative flex items-center gap-3 p-2 rounded-xl backdrop-blur-sm overflow-hidden transition-all duration-300 ${selectedService === index
                          ? "bg-slate-400/30 border border-red-500 hover:bg-slate-400/30 hover:border-red-400"
                          : "bg-slate-300/10 border border-slate-700/50 hover:bg-slate-400/30 hover:border-muted"
                        }`}
                      whileHover={{
                        scale: 1.02,
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
                        animate={
                          selectedService === index ? { rotate: 360 } : {}
                        }
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <div
                          className={`absolute inset-0 rounded-full blur-md transition-opacity ${selectedService === index
                              ? "opacity-100"
                              : "opacity-50 group-hover:opacity-100"
                            }`}
                        />
                        <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-foreground" />
                        </div>
                      </motion.div>

                      {/* Text content */}
                      <div className="flex-1 relative z-10">
                        <motion.p
                          className={`text-sm md:text-sm lg:text-sm font-medium transition-colors duration-300 ${selectedService === index
                              ? "text-foreground"
                              : "text-foreground group-hover:text-muted"
                            }`}
                        >
                          {item.title}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <StyledWrapper>
              <Link href="/aboutus">
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
              </Link>
            </StyledWrapper>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <h3 className="text-3xl md:text-3xl font-bold text-foreground mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-muted text-sm">{stat.label}</p>
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
              <div className="flex -space-x-4">
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
              </div>

              <button className="flex items-center gap-3 text-foreground hover:text-red-500 transition-colors group cursor-pointer">
                <div className="w-8 h-8 rounded-full border-2 border-white group-hover:border-red-500 flex items-center justify-center transition-colors">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                <span className="font-sm">WATCH INTRO</span>
              </button>
            </motion.div>
          </div>

          {/* Right side - Images */}
          <div className="relative">
            <motion.div className="relative">
              <AnimatePresence mode="wait">
                {/* Main large image */}
                <motion.div
                  key={`main-${selectedService}`}
                  className="relative rounded-2xl overflow-hidden mb-6 w-full h-96"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={currentImages.main}
                    alt="Service showcase"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Top right cards */}
              <motion.div className="absolute -top-6 -right-6 grid grid-cols-2 gap-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`top1-${selectedService}`}
                    className="relative rounded-xl w-36 h-36 overflow-hidden"
                    initial={{ opacity: 0, x: 20, rotate: -5 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    exit={{ opacity: 0, x: -20, rotate: 5 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={currentImages.top1}
                      alt="Detail 1"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                      {currentImages.tags1.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`top2-${selectedService}`}
                    className="relative rounded-xl overflow-hidden w-36 h-36"
                    initial={{ opacity: 0, x: 20, rotate: 5 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    exit={{ opacity: 0, x: -20, rotate: -5 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Image
                      src={currentImages.top2}
                      alt="Detail 2"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                      {currentImages.tags2.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
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

export default AboutSection;
