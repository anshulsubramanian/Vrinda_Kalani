import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const TgrProject = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  
  const products = [
    {
      name: "Yucca Coffee Table",
      description: "Rooted in form and balance, the Yucca Coffee Table embodies quiet sophistication. Its sculptural silhouette and refined finish bring depth and intention to contemporary living spaces.",
      image: "/TGR/Yucca Coffee Table.jpeg",
    },
    {
      name: "The Orba Bar Table",
      description: "Brings form and function into perfect balance. Defined by clean lines, tactile finishes, and enduring materials, designed for open-air gatherings that blend ease with sophistication.",
      image: "/TGR/Orba Bar Table.jpeg",
    },
    {
      name: "Dunea Sofa",
      description: "Captures the fluid elegance of desert landscapes. Its softly curved frame and tactile weave evoke the rhythm of shifting sands, while generous cushions offer an inviting sense of ease.",
      image: "/TGR/Dunea Sofa.jpeg",
    },
    {
      name: "Sirocco Swing",
      description: "Inspired by the warm desert winds, it embodies effortless grace and balance. Its rounded form and woven texture create a sense of weightless comfort, inviting calm and gentle motion.",
      image: "/TGR/Sirocco Swing.jpeg",
    },
    {
      name: "Canna Side Table",
      description: "Playful yet poised, draws inspiration from natural balance and sculptural simplicity. Its geometric composition creates a sense of grounded elegance.",
      image: "/TGR/Canna Side Table.png",
    },
    {
      name: "Agava Dining Table",
      description: "Celebrates contrast and balance through its sculptural composition and tactile presence. The interplay of smooth and woven textures creates a sense of warmth and refinement.",
      image: "/TGR/Agava Dining Table.png",
    },
    {
      name: "Avara Cabinet",
      description: "Combines lightness and function with a sculptural, pole-mounted form. Blending woven textures and warm wood, it offers elegant storage and a refined presence.",
      image: "/TGR/Avara Cabinet.jpeg",
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
          backgroundImage: "url('/Covers/Garden Room Cover.png')",
          minHeight: "70vh"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Design Brief & Concept Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6">Design Brief</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              The Garden Room celebrates natural beauty through elegant, modern designs that blur the boundaries between indoor comfort and outdoor living. The collection embodies a seamless dialogue between sophistication and nature, refined forms, tactile materials, and a sense of quiet luxury. Each piece is crafted using premium PPE rope, seasoned teak wood, aluminum, and wicker — materials chosen for their strength, weather resistance, and natural appeal.
            </p>
            
            <h2 className="text-4xl font-bold mb-6 mt-12">Inspiration & Concept</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Inspired by the quiet strength and sculptural beauty of the desert, this collection captures the essence of a landscape shaped by wind, light, and time. The forms flow naturally, echoing the gentle curves of dunes, the smoothness of weathered stone, and the rhythm of shifting sands. Materials reflect the desert's balance of strength and softness, offering warmth, texture, and lasting endurance.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/mood_boards/TGR Mood Board.jpeg" 
              alt="TGR Mood Board" 
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sketches Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Sketches</h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/TGR/TGR sketches.png" 
              alt="TGR Design Sketches" 
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Product Collection */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">The Collection</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <article 
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{product.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Gallery Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Additional Views</h2>
          <h2 className="text-xl text-muted-foreground mb-12">As showcased in Design Democracy, Hyderabad, September 2025</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src="/TGR/TGRAdditional1.jpg" alt="Additional View 1" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src="/TGR/TGRAddtional2.jpg" alt="Additional View 2" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src="/TGR/TGRAdditional3.jpg" alt="Additional View 3" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src="/TGR/TGRAdditonal4.jpg" alt="Additional View 4" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src="/TGR/TGRAdditional5.jpg" alt="Additional View 5" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <video src="/TGR/TGRV1.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <video src="/TGR/TGRV2.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Recognition</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            This collection, created in collaboration with Pallavi Agarwal, was showcased at Design Democracy Hyderabad and India Design Mumbai 2025, reflecting a shared vision of contemporary craftsmanship and outdoor sophistication. The collection represents a significant milestone in redefining outdoor living spaces through thoughtful design and material innovation.
          </p>
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

export default TgrProject;
