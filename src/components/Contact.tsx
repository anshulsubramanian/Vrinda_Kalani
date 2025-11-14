import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in-up">
          Let's talk
        </h2>
        
        <div className="flex flex-col gap-6">
          <a
            href="mailto:vrindakalaniapplications@gmail.com"
            className="inline-flex items-center gap-3 text-2xl md:text-3xl font-semibold text-foreground border-b-2 border-foreground hover:border-transparent transition-all duration-300 animate-fade-in-up w-fit"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            <Mail className="w-8 h-8" />
            Send Me a Message!
          </a>
          
          <a
            href="https://www.linkedin.com/in/vrinda-kalani-3998a81b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-2xl md:text-3xl font-semibold text-foreground border-b-2 border-foreground hover:border-transparent transition-all duration-300 animate-fade-in-up w-fit"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            <Linkedin className="w-8 h-8" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
