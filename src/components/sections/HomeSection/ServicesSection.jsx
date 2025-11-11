"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { services } from "@/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const headingRef = useRef();
  const paragraphRef = useRef();
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const textsRef = useRef([]);
  const containerRef = useRef(null);

  // Heading + paragraph animations
  useEffect(() => {
    const headingSplit = new SplitText(headingRef.current, {
      type: "chars, words",
    });
    const paraSplit = new SplitText(paragraphRef.current, {
      type: "chars, words",
    });

    gsap.set(headingSplit.chars, { opacity: 0, y: 50 });
    gsap.set(paraSplit.chars, { opacity: 0, y: 20 });

    gsap.to(headingSplit.chars, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    gsap.to(paraSplit.chars, {
      opacity: 1,
      y: 0,
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

  // Card animation timeline
  useEffect(() => {
    const totalScroll = services.length * 1000;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalScroll}`,
        scrub: 1,
        pin: true,
      },
    });

    const totalCards = cardsRef.current.length;

    // Initial card setup
    cardsRef.current.forEach((card, i) => {
      const text = textsRef.current[i];

      const offsetX = i % 2 === 0 ? -200 : 200;
      const offsetZ = -i * 300;
      const scale = 1 - i * 0.15;

      gsap.set(card, {
        opacity: i === 0 ? 1 : 0.4,
        scale,
        x: offsetX,
        y: i * 40,
        z: offsetZ,
        rotationY: i % 2 === 0 ? -20 : 20,
        zIndex: totalCards - i,
      });

      gsap.set(text, {
        opacity: i === 0 ? 1 : 0,
        scale,
        x: offsetX,
        y: i * 40,
        z: offsetZ + 100,
        rotationY: 0,
        zIndex: totalCards - i + 1,
      });
    });

    // Scroll animation logic
    cardsRef.current.forEach((card, i) => {
      const text = textsRef.current[i];
      const startTime = i * 1.5;

      // Move card to front
      tl.to(
        card,
        {
          x: 0,
          y: 0,
          z: 200,
          scale: 1,
          rotationY: 0,
          opacity: 1,
          zIndex: 100,
          duration: 1.2,
          ease: "power3.out",
        },
        startTime
      );

      // Fade in text (delayed slightly so it shows *after* previous fades out)
      tl.to(
        text,
        {
          opacity: 1,
          x: 0,
          y: 0,
          z: 300,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        startTime + 0.4 // 👈 added slight delay to avoid overlap
      );

      // Hold briefly
      tl.to([card, text], { duration: 0.6 }, startTime + 1.2);

      if (i < totalCards - 1) {
        const exitX = i % 2 === 0 ? 200 : -200;
        const exitZ = -(totalCards - i) * 300;
        const exitScale = 1 - (totalCards - i) * 0.15;

        // Fade out text *before* next card text comes in
        tl.to(
          text,
          {
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut",
          },
          startTime + 1.2 // 👈 fades out before next one appears
        );

        // Move card behind again
        tl.to(
          card,
          {
            x: exitX,
            y: (totalCards - i) * 40,
            z: exitZ,
            scale: exitScale,
            rotationY: i % 2 === 0 ? 20 : -20,
            opacity: 0.4,
            zIndex: i,
            duration: 1.2,
            ease: "power2.inOut",
          },
          startTime + 1.6 // 👈 slightly after text fade-out
        );
      }
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/30 dark:bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/30 dark:bg-purple-300/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/20 dark:bg-cyan-300/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center my-12">
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-bold text-foreground mb-3"
          >
            KEY SERVICES <span className="text-red-500">WE OFFER</span>
          </h2>
          <p ref={paragraphRef} className="text-muted text-lg md:text-xl">
            Discover our comprehensive range of solutions designed to elevate
            your experience
          </p>
        </div>

        {/* 3D stacked cards */}
        <div
          ref={containerRef}
          className="relative md:h-[450px] py-20"
          style={{ perspective: "2000px", perspectiveOrigin: "center center" }}
        >
          {services.map((card, i) => (
            <React.Fragment key={i}>
              <div
                ref={(el) => (cardsRef.current[i] = el)}
                className={`absolute rounded-2xl shadow-2xl overflow-hidden ${card.cardStyle}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative h-64 w-96">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div
                ref={(el) => (textsRef.current[i] = el)}
                className={`absolute text-lg font-medium max-w-sm ${card.textStyle} flex items-center justify-center`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative group">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

                  {/* Main card */}
                  <div className="relative bg-background backdrop-blur-xl p-8 rounded-2xl shadow-2xl border-2 border-red-500/75 hover:border-red-500 transition-all duration-300">
                    <div className="space-y-4">
                      <h3 className="font-black text-2xl text-center text-foreground tracking-tight">
                        {card.title}
                      </h3>

                      {/* Decorative elements */}
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-red-500"></div>
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-red-500"></div>
                      </div>

                      
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/ourservices"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-red-500 text-red-500 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 group"
          >
            View More
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      <style jsx>{`
        em {
          font-family: Georgia, "Times New Roman", serif;
        }
      `}</style>
    </div>
  );
}
