import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground text-sm">
          &copy; 2025 Vrinda Kalani. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;