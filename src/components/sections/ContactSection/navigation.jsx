import { MapPin } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary w-8 h-8 rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">Y</span>
            </div>
            <span className="font-bold text-xl text-foreground">YESHO</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Our Services
            </a>
            <a href="#contact" className="text-primary font-medium">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
