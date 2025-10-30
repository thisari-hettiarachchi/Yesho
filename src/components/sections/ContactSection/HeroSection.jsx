import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      
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
