import Image from "next/image";
import contact from "@/assets/contact.jpg";

const Hero = () => {
  return (
    <div className="relative h-[650px] flex items-center justify-center overflow-hidden">
      <Image
        src={contact}
        alt="Contact background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Have questions, feedback, or partnership ideas?
          <br />
          Reach out and we'll respond as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default Hero;
