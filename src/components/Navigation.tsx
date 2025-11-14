import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up">
      <div className="glass rounded-full px-6 py-3 flex items-center gap-6 border border-white/10">
        <div className="flex items-center gap-4">
          <a href="/Vrinda_Kalani#hero" className="w-10 h-10 rounded-full overflow-hidden border-2 border-border transition-transform hover:scale-105">
            <img src={import.meta.env.BASE_URL + 'Covers/vrinda.jpeg'} alt="Vrinda Kalani" className="w-full h-full object-cover" />
          </a>
          
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        
        <a href="#contact">
          <Button 
            size="sm" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Let's talk
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;