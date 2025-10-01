"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SplitText from "gsap/SplitText";
import { services } from "@/utils";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const textSlidesRef = useRef([]);
  const imageSlidesRef = useRef([]);
  const headingRef = useRef();
  const paragraphRef = useRef();

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
    const section = sectionRef.current;

    // Use percentages and viewport units for responsive scaling
    imageSlides.forEach((img, i) => {
      gsap.set(img, {
        opacity: 1,
        zIndex: i,
        y: `${i * 3}%`, // Changed from fixed pixels to percentage
        x: `${i * -2.5}%`, // Changed from fixed pixels to percentage
        rotation: i * -2.5 + 1,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true, // Recalculate on resize
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

    // Add resize handler to refresh ScrollTrigger
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
    <section
      ref={sectionRef}
      className="relative min-h-screen pb-12 md:pb-20 mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-12 md:pt-16"
    >
      {/* Top Center Heading */}
      <div className="text-center pt-4 md:pt-8 lg:pt-20">
        <h2
          ref={headingRef}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Key Services <span className="text-red-500">We Offer</span>
        </h2>
        <p
          ref={paragraphRef}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-4 md:mt-8 px-4"
        >
          Discover our comprehensive range of solutions designed to elevate your
          experience
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Left Side - Text Content */}
        <div className="relative h-[350px] sm:h-[400px] lg:h-[500px]">
          {services.map((service, i) => (
            <div
              key={`text-${i}`}
              ref={(el) => (textSlidesRef.current[i] = el)}
              className="absolute inset-0 flex flex-col justify-center opacity-0 px-2 sm:px-0"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
                {service.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side - Images */}
        <div className="relative h-[350px] sm:h-[400px] lg:h-[500px]">
          {services.map((service, i) => (
            <div
              key={`image-${i}`}
              ref={(el) => (imageSlidesRef.current[i] = el)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-[85%] h-[70%]">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 40vw"
                  className="rounded-xl shadow-2xl object-cover"
                  style={{
                    boxShadow: "0 15px 50px rgba(0, 0, 0, 0.4)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
