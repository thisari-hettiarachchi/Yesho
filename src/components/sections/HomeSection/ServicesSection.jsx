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

  
  useEffect(() => {
     const headingSplit = new SplitText(headingRef.current, {
       type: "chars, words",
     });
     const paraSplit = new SplitText(paragraphRef.current, {
       type: "chars, words",
     });

     // Set initial state - everything hidden
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

     // Paragraph animation
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
    const totalScroll = services.length * 500;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalScroll}`,
        scrub: true,
        pin: true, // pin section
      },
    });

    cardsRef.current.forEach((card, i) => {
      const text = textsRef.current[i];

      // Initial position slightly offscreen
      gsap.set([card, text], {
        opacity: 0,
        scale: 0.8,
        x: services[i].enterX,
        y: 50 + i * 20, // add vertical offset for less overlap
        zIndex: 50 + i,
      });

      // Bring card to front
      tl.set(card, { zIndex: 50 + i });

      // Enter animation
      tl.to(
        [card, text],
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: i * 10, // slight vertical offset when fully visible
          duration: 1,
          ease: "power2.out",
        },
        i * 0.9 // increase delay between cards to reduce overlap
      );

      // Exit animation
      if (i < cardsRef.current.length - 1) {
        tl.to(
          [card, text],
          {
            opacity: 0,
            scale: 1.1, // slightly less zoom to reduce visual jump
            x: services[i].exitX,
            y: services[i].exitX > 0 ? -30 - i * 10 : 30 + i * 10, // adjusted vertical exit
            duration: 1,
            ease: "power2.in",
          },
          i * 0.9 + 0.5 // overlap timing slightly reduced
        );
      }
    });
  }, []);


  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-background py-20 px-4 relative"
    >
      <div className="absolute top-10 right-10 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center my-12">
          <h2
            ref={headingRef}
            className="text-4xl font-bold text-foreground mb-3"
          >
            KEY SERVICES <span className="text-red-500">WE OFFER</span>
          </h2>
          <p ref={paragraphRef} className="text-muted text-lg">
            Discover our comprehensive range of solutions designed to elevate
            your experience
          </p>
        </div>

        <div className="relative md:h-[450px]">
          {services.map((card, i) => (
            <React.Fragment key={i}>
              <div
                ref={(el) => (cardsRef.current[i] = el)}
                className={`absolute rounded-3xl shadow-xl overflow-hidden ${card.cardStyle}`}
              >
                <div className="relative h-72">
                  <Image
                    src={card.img}
                    alt="card image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div
                ref={(el) => (textsRef.current[i] = el)}
                className={`absolute text-lg text-gray-900 font-medium max-w-sm ${card.textStyle}`}
              >
                <h3 className="font-semibold text-xl mb-2 text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/ourservices"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-red-500 text-red-500 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            View More
            <ArrowRight size={20} />
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
