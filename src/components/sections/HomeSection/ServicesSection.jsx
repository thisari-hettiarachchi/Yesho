"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import SplitText from "gsap/SplitText";
import { services } from "@/utils";
import StyledWrapper from "@/components/ui/StyledWrapper";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const textSlidesRef = useRef([]);
  const imageSlidesRef = useRef([]);
  const headingRef = useRef();
  const paragraphRef = useRef();
  const contentRef = useRef(null);

  useEffect(() => {
    const headingSplit = new SplitText(headingRef.current, {
      type: "chars, words",
    });
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

  useEffect(() => {
    const textSlides = textSlidesRef.current;
    const imageSlides = imageSlidesRef.current;
    const content = contentRef.current;

    imageSlides.forEach((img, i) => {
      gsap.set(img, {
        opacity: 1,
        zIndex: i,
        y: `${i * 3}%`,
        x: `${i * -2.5}%`,
        rotation: i * -2.5 + 1,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: content,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    services.forEach((_, i) => {
      if (i === 0) {
        tl.fromTo(
          textSlides[i],
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
      } else {
        tl.to(
          textSlides[i - 1],
          {
            opacity: 0,
            y: -50,
            duration: 0.5,
            ease: "power2.in",
          },
          `slide${i}`
        )
          .fromTo(
            textSlides[i],
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            `slide${i}+=0.3`
          )
          .to(
            imageSlides[i],
            {
              zIndex: 100 + i,
              y: 0,
              x: 0,
              rotation: 0,
              scale: 1.05,
              duration: 1.2,
              ease: "power2.out",
            },
            `slide${i}+=0.3`
          )
          .to(
            imageSlides[i],
            {
              scale: 1,
              duration: 0.5,
              ease: "power2.inOut",
            },
            `slide${i}+=1.2`
          );
      }
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative  pb-12 md:pb-20">
      {/* Pinned Content Section */}
      <div
        ref={contentRef}
        className="min-h-screen flex flex-col justify-center py-12 md:py-16 bg-gradient-to-b from-black via-gray-900 to-gray-900/30"
      >
        <div className="absolute top-40 left-30 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
        {/* Header Section - Inside Pinned Area */}
        <div className="text-center mb-8 md:mb-12 px-4 sm:px-8 mt-22">
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Key Services <span className="text-red-500">We Offer</span>
          </h2>
          <p
            ref={paragraphRef}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4"
          >
            Discover our comprehensive range of solutions designed to elevate
            your experience
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-28 items-center container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          {/* Left Side - Text Content */}
          <div className="relative h-[400px] sm:h-[450px] lg:h-[500px]">
            {services.map((service, i) => (
              <div
                key={`text-${i}`}
                ref={(el) => (textSlidesRef.current[i] = el)}
                className="absolute inset-0 flex flex-col justify-center opacity-0 px-2 sm:px-0"
              >
                <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-2xl border border-gray-800 shadow-2xl">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-11 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-base text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Images */}
          <div className="relative h-[400px] sm:h-[450px] lg:h-[500px]">
            {services.map((service, i) => (
              <div
                key={`image-${i}`}
                ref={(el) => (imageSlidesRef.current[i] = el)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-[90%] h-[80%]">
                  <div className="absolute inset-0 bg-red-500 opacity-5 blur-3xl rounded-xl"></div>
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-gray-700/50">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 40vw"
                      className="rounded-xl object-cover"
                      style={{
                        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6)",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button - Centered below content */}
        <div className="flex justify-center mt-8 md:mt-16 pb-20">
          <StyledWrapper>
            <Link href="/services">
              <motion.button
                className="animated-button"
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
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
