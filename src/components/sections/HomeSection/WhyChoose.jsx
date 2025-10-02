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
  const sectionRef = useRef();
  const headingRef = useRef();
  const paragraphRef = useRef();
  const cardsRef = useRef([]);
  const linesRef = useRef([]);

  useEffect(() => {
    const headingSplit = new SplitText(headingRef.current, {
      type: "chars, words",
    });
    const paraSplit = new SplitText(paragraphRef.current, {
      type: "chars, words",
    });

    // Pin the entire section
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=3000", // Adjust this value based on how long you want the section pinned
      pin: true,
      pinSpacing: true,
      scrub: 1,
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

    // Create a timeline for sequential card animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2500",
        scrub: 1,
      },
    });

    // Animate cards and lines sequentially
    cardsRef.current.forEach((card, index) => {
      if (card) {
        tl.fromTo(
          card,
          {
            opacity: 0,
            scale: 0.9,
            y: 30,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          index * 0.3
        );

        // Animate connecting line after each card (except the last one)
        if (index < linesRef.current.length && linesRef.current[index]) {
          tl.fromTo(
            linesRef.current[index],
            {
              opacity: 0,
              scaleX: 0,
            },
            {
              opacity: 1,
              scaleX: 1,
              duration: 0.4,
              ease: "power2.out",
            },
            index * 0.3 + 0.3
          );
        }
      }
    });

    return () => {
      headingSplit.revert();
      paraSplit.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pb-20 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative mx-auto px-10">
        {/* Section Title */}
        <div className="text-center mt-16">
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

        {/* Feature Cards with Connecting Lines */}
        <div className="relative max-w-7xl mx-auto mt-20">
          {/* Cards Container */}
          <div className="flex gap-x-0 gap-y-10 justify-center items-start">
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                {/* Card */}
                <div
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="group relative flex flex-col items-center text-center backdrop-blur-xl rounded-2xl px-6 py-8 shadow-2xl border border-blue-500/40 hover:border-blue-400/70 hover:shadow-blue-500/40 transform hover:scale-105 transition-all duration-300 w-72 bg-slate-900/70"
                  style={{
                    boxShadow:
                      "0 10px 40px 0 rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                    zIndex: 10,
                    marginTop: index % 2 === 0 ? "0" : "80px",
                  }}
                >
                  {/* Top glow effect */}
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>

                  {/* Icon container */}
                  <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-blue-400/40 shadow-lg shadow-blue-500/20">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-transparent blur-md"></div>
                    <Image
                      src={feature.icon}
                      alt={feature.alt}
                      width={80}
                      height={80}
                      className="drop-shadow-md relative z-10"
                    />
                  </div>

                  {/* Content */}
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

                  {/* Bottom glow effect */}
                  <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
                </div>

                {/* Connecting Line (between cards) */}
                {index < features.length - 1 && (
                  <div
                    ref={(el) => (linesRef.current[index] = el)}
                    className="relative"
                    style={{
                      width: "100px",
                      height: "200px",
                      zIndex: 5,
                      alignSelf: "center",
                    }}
                  >
                    {/* Curved Dashed SVG Line */}
                    <svg
                      width="100"
                      height="200"
                      viewBox="0 0 100 200"
                      className="absolute top-0 left-0"
                      style={{
                        overflow: "visible",
                      }}
                    >
                      <defs>
                        <linearGradient
                          id={`gradient-${index}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="rgba(59, 130, 246, 0.7)"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgba(59, 130, 246, 0.7)"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d={
                          index % 2 === 0
                            ? "M 0 80 Q 25 120, 50 100 Q 75 80, 100 120"
                            : "M 0 120 Q 25 80, 50 100 Q 75 120, 100 80"
                        }
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="2"
                        strokeDasharray="6 4"
                        fill="none"
                        strokeLinecap="round"
                        className="connection-path"
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Extended Paragraph */}
        <motion.div
          className="mt-12 max-w-4xl mx-auto text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            At{" "}
            <span className="text-white font-semibold">YESHO Intelligence</span>
            , we are partners in your journey toward excellence, helping you
            achieve long-term success through quality, compliance, and
            innovation.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We ensure every garment exceeds industry standards, building your
            reputation for{" "}
            <span className="text-red-400 font-semibold">trust</span>,{" "}
            <span className="text-red-400 font-semibold">quality</span>, and{" "}
            <span className="text-red-400 font-semibold">perfection</span>.
          </p>
        </motion.div>

        {/* Vision & Mission */}

        {/* Philosophy & Compliance */}
        <motion.div
          className="mt-12 max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Client Partnership Philosophy */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Client Partnership Philosophy
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              At YESHO Intelligence, we believe in building strong, long-term
              partnerships based on trust, transparency, and mutual growth. By
              understanding each client’s unique needs, we deliver tailored
              garment and textile solutions that not only solve problems but
              also add measurable value to your operations. Our philosophy
              revolves around reliability, proactive communication, and
              consistently exceeding expectations, ensuring that your success is
              always our priority.
            </p>
          </div>

          {/* Compliance and Certificates */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Compliance and Certificates
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We adhere strictly to all industry compliance standards, holding
              all necessary certifications to guarantee quality, safety, and
              ethical operations. Our processes are aligned with global
              benchmarks, ensuring that every garment and textile we handle
              meets the highest quality requirements. By maintaining rigorous
              compliance and certification practices, we give our clients peace
              of mind and confidence in every aspect of our service.
            </p>
          </div>
        </motion.div>

        {/* Core Competencies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
          {[
            "High-Quality Reviewing",
            "Expert Repair & Mending",
            "Professional Stain Removal",
            "Quality Assurance & Compliance Checks",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/70 border border-blue-400/30 shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <span className="text-3xl text-blue-400 mb-3">✔</span>
              <h4 className="text-white text-base font-semibold">{item}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;