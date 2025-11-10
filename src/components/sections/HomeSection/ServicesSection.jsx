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

  useEffect(() => {
    const totalScroll = services.length * 800;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalScroll}`,
        scrub: 1,
        pin: true,
      },
    });

    cardsRef.current.forEach((card, i) => {
      const text = textsRef.current[i];

      // Initial state - cards in 3D space with old positions
      gsap.set(card, {
        opacity: 0,
        scale: 0.7,
        x: services[i].enterX,
        y: 80 + i * 40, // increased for less overlap
        z: -1000 - i * 200,
        rotationY: services[i].enterX > 0 ? -30 : 30,
        rotationX: 10,
        zIndex: 50 + i,
      });

      gsap.set(text, {
        opacity: 0,
        scale: 0.7,
        x: services[i].enterX,
        y: 80 + i * 15,
        z: -1000 - i * 200,
        rotationY: services[i].enterX > 0 ? -30 : 30,
        rotationX: 10,
      });

      // Bring card to front
      tl.set(card, { zIndex: 50 + i });

      // Card enters from deep 3D space to original position
      tl.to(
        [card, text],
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: i * 12, // slightly more space
          z: 0,
          rotationY: 0,
          rotationX: 0,
          duration: 1.5,
          ease: "power3.out",
        },
        i * 1.8 // start next later (was 1.2)
      );

      // Hold state with subtle 3D tilt
      tl.to(
        [card, text],
        {
          rotationY: i % 2 === 0 ? 2 : -2,
          scale: 1.02,
          duration: 0.5,
          ease: "sine.inOut",
        },
        i * 1.2 + 1.5
      );

      // Exit - only if not last card
      if (i < cardsRef.current.length - 1) {
        tl.to(
          [card, text],
          {
            opacity: 0,
            scale: 1.1,
            x: services[i].exitX,
            y: services[i].exitX > 0 ? -50 - i * 12 : 50 + i * 12,
            z: 1000,
            rotationY: services[i].exitX > 0 ? 30 : -30,
            rotationX: -15,
            duration: 1.5,
            ease: "power2.in",
          },
          i * 1.8 + 1.7 // make exit later so next enters after previous exits
        );
      } else {
        // Last card stays visible
        tl.to(
          [card, text],
          {
            scale: 1.05,
            rotationY: 0,
            duration: 0.8,
            ease: "back.out(1.2)",
          },
          i * 1.2 + 2
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-background py-20 px-4 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl"></div>

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

        {/* 3D Container with perspective */}
        <div
          ref={containerRef}
          className="relative md:h-[450px] py-20"
          style={{ perspective: "2000px", perspectiveOrigin: "center center" }}
        >
          {services.map((card, i) => (
            <React.Fragment key={i}>
              <div
                ref={(el) => (cardsRef.current[i] = el)}
                className={`absolute rounded-3xl shadow-2xl overflow-hidden ${card.cardStyle}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative h-72">
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
                <div className="bg-card-foregroundbackdrop-blur-sm p-4 rounded-xl shadow-lg border border-card-foreground">
                  <h3 className="font-bold text-xl text-center text-foreground">
                    {card.title}
                  </h3>
                  <div className="w-12 h-1 bg-red-500 rounded-full mx-auto mt-2"></div>
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
