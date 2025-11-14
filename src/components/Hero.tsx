import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-gradient"
        style={{
          backgroundImage: "url('/gradient.png')",
          backgroundSize: "200% 200%"
        }}
      />
      
      <div className="max-w-6xl mx-auto text-left relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-fade-in">
          Designing products that{" "}
          <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            feels like it belongs
          </span>{" "}
          — to you, your space, and the{" "}
          <span className="bg-gradient-to-r from-white/90 via-white/80 to-white/70 bg-clip-text text-transparent">
            story around it.
          </span>
        </h1>
        
        <a href="#contact">
          <Button 
            size="lg" 
            className="mt-12 bg-white text-background hover:bg-white/90 rounded-full text-lg px-8 animate-scale-in" 
            style={{ animationDelay: "1.4s", opacity: 0 }}
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Let's talk
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;