"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const headingRef = useRef();
  const paragraphRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!headingRef.current || !paragraphRef.current) return;

    const headingSplit = new SplitText(headingRef.current, { type: "chars" });
    const paraSplit = new SplitText(paragraphRef.current, { type: "chars" });

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
    <section className="relative overflow-hidden top-[-40px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 text-center">
        <h2 ref={headingRef} className="text-5xl font-bold text-white">
          Who We Are
        </h2>

        <p
          ref={paragraphRef}
          className="mt-6 text-gray-300 text-base leading-7"
        >
          overview of the company
        </p>

        <motion.p
          className="mt-10 text-gray-300 text-base leading-7"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          YESHO Intelligence is a leading expert in the field of garment and
          textile mending, located in Kaduwela, Sri Lanka. With over ten years
          of experience, we have built a reputation as a trusted partner for
          businesses seeking high-quality garment restoration services. Our core
          competencies include meticulous reviewing, repairing, stain removal,
          and mending of fabrics and finished garments.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutUs;
