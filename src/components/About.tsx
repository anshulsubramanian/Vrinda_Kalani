const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in-up">
          About
        </h2>
        
        <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
          <p className="animate-fade-in-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            Versatile and forward-thinking Product Designer with a strong foundation in furniture and lifestyle design. I specialize in crafting contemporary, user-centered products that balance form and function, with a keen sensitivity to materials, aesthetics, and storytelling.
          </p>
          
          <p className="animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            With hands-on experience at Mohh Furniture and collaborative freelance projects across luxury, outdoor, and kids' segments, I bring a deep understanding of both design execution and market appeal. Trained at NIFT, I thrive in dynamic environments where research, creativity, and technical precision converge to shape meaningful physical experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
