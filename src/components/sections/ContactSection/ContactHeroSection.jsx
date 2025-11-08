import { contactbg } from "@/assets";
import Image from "next/image";

const ContactHeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-[70vh] overflow-hidden rounded-b-[5%]">
      {/* Background Image */}
      <Image
        src={contactbg}
        alt="hero background"
        fill
        className="object-cover opacity-90 dark:opacity-40"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

      {/* Text Content */}
      <div className="relative z-10 text-center text-white/70 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Have questions, feedback, or partnership ideas?
          <br />
          Reach out and we'll respond as soon as possible.
        </p>
      </div>
    </section>
  );
};

export default ContactHeroSection;
