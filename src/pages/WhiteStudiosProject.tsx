import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import bamboo1 from "@/assets/white-studios/bamboo-1.png";
import bamboo2 from "@/assets/white-studios/bamboo-2.png";
import bamboo3 from "@/assets/white-studios/bamboo-3.png";
import bloom1 from "@/assets/white-studios/bloom-1.png";
import bloom2 from "@/assets/white-studios/bloom-2.png";
import bloom3 from "@/assets/white-studios/bloom-3.png";
import bloom4 from "@/assets/white-studios/bloom-4.png";
import WWA1 from "@/assets/white-studios/WWA1.jpg";
import WWA2 from "@/assets/white-studios/WWA2.jpg";

const WhiteStudiosProject = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  
  const products = [
    {
      name: "Bamboo Lamp",
      description:
        "Bamboo brings together light and life in one form. Its metal body, hand-finished in deep green, holds warm alabaster panels that diffuse a soft, natural glow. An integrated planter adds a living accent. A quiet nod to nature within a crafted, minimal structure.",
      images: [bamboo1, bamboo2, bamboo3],
    },
    {
      name: "Bloom",
      description:
        "Bloom is a sculptural floor lamp where metal meets life. Its cast-metal base anchors five elevated bowls, three illuminated, two cradling living greens. Contrasting finishes play between rough and reflective, solid and soft. A composition that feels both grounded and growing.",
      images: [bloom1, bloom2, bloom3, bloom4],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-6 left-6 z-50">
        <Link to="/#work">
          <Button 
            variant="secondary" 
            size="lg"
            className="rounded-full glass"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 px-4 relative bg-cover bg-center"
        style={{ 
          backgroundImage: `url('${import.meta.env.BASE_URL}Covers/White White Studio.png')`,
          minHeight: "70vh"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Design Brief & Concept Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6">Concept</h2>
            <h3 className="text-2xl font-semibold mb-4">Light & Life</h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              What if light could grow, and life could glow?
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Light & Life is born from this quiet question, an exploration of coexistence and how two worlds that seem apart can complete each other.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              It reflects on how contrasts create harmony, how stillness can hold energy, and how creation feels alive when it embraces the unpredictable. Here, design becomes a gesture of care rather than control, allowing nature and light to share space, to respond, to breathe together.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Each piece becomes a small universe of balance, a reminder that beauty often happens in between, where intention meets instinct and form finds feeling.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Light & Life is not just about what we see, but what we sense warmth, growth, and the quiet poetry of things learning to coexist.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={import.meta.env.BASE_URL + 'mood_boards/mood board new.png'} 
              alt="White Studios Mood Board" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Sketches Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Sketches</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={import.meta.env.BASE_URL + 'White_Studios/sketches_1.png'} 
                  alt="White Studios Design Sketches 1" 
                  className="w-full object-cover"
                />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={import.meta.env.BASE_URL + 'White_Studios/sketches_2.png'} 
                  alt="White Studios Design Sketches 2" 
                  className="w-full object-cover"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Product Collection */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">The Collection</h2>
          <div className="space-y-16">
            {products.map((product, index) => (
              <article 
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-lg p-8"
              >
                <h3 className="text-3xl font-semibold mb-4">{product.name}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                {product.images.length > 0 && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.images.map((image, imgIndex) => (
                              <div key={imgIndex} className="rounded-xl overflow-hidden flex items-center justify-center bg-white">
                                <img
                                  src={image}
                                  alt={`${product.name} view ${imgIndex + 1}`}
                                  className="w-full h-auto object-contain"
                                  loading="lazy"
                                />
                              </div>
                            ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Gallery */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Additional Gallery</h2>
          <h2 className="text-xl text-muted-foreground mb-12">As showcased in Design Democracy, Hyderabad, September 2025</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[WWA1, WWA2].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={img} alt={`White Studios additional ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Talk CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black"
          style={{
            background: "linear-gradient(135deg, #1e3a8a 0%, #581c87 50%, #000000 100%)"
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white text-sm">Available to work with you</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Let's design next one together
          </h2>
          
          <Link to="/#contact">
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-full text-lg px-8 py-6 font-semibold transition-all duration-300 hover:scale-105"
            >
              Let's talk →
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhiteStudiosProject;
