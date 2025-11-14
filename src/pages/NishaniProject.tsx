import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NishaniProject = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    document.title = "Nishani - Jewellery Brand Experience | Portfolio";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Nishani jewellery brand experience design - A bold, glamorous boutique retail space featuring confident curves, vibrant accents, and an intimate yet dynamic shopping environment.");
    }
  }, []);

  const products = [
    {
      name: "Retail Experience Design",
      description: "A thoughtfully crafted retail space that embodies the elegance and warmth of the Nishani brand. The design creates an intimate atmosphere where customers can explore and connect with jewellery in a personal, elevated setting.",
    image: import.meta.env.BASE_URL + 'Nishani/Nishani1.jpg',
    },
    {
      name: "Brand Environment",
      description: "The space features signature pink tones and sophisticated display elements that create a cohesive brand experience. Each design detail reinforces the brand's identity while maintaining functionality and flow.",
    image: import.meta.env.BASE_URL + 'Nishani/Nishani2.jpg',
    },
    {
      name: "Product Display System",
      description: "Custom-designed display solutions that showcase jewellery pieces with appropriate lighting and sightlines. The modular system allows for flexible arrangements while maintaining visual harmony throughout the space.",
    image: import.meta.env.BASE_URL + 'Nishani/Nishani3.jpg',
    },
    {
      name: "Customer Interaction Zones",
      description: "Dedicated areas designed for customer engagement and consultation. The layout balances openness with intimacy, creating comfortable spaces for browsing and detailed product exploration.",
    image: import.meta.env.BASE_URL + 'Nishani/Nishani4.jpg',
    },
    {
      name: "Architectural Details",
      description: "Refined architectural elements including curved frames, integrated signage, and layered spatial design. These details create visual interest while supporting the overall brand narrative.",
    image: import.meta.env.BASE_URL + 'Nishani/Nishani5.jpg',
    },
    {
      name: "Material Palette",
      description: "A curated selection of materials including soft pinks, natural wood tones, and metallic accents. The palette creates warmth and sophistication while ensuring durability in a retail environment.",
    image: import.meta.env.BASE_URL + 'Nishani/Nishani6.jpg',
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
          backgroundImage: `url('${import.meta.env.BASE_URL}Covers/Nishani cover.png')`,
          minHeight: "70vh"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Design Brief Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6">Concept</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Create a bold, glamorous boutique that feels intimate yet energetic. The space should express confidence through sculptural forms, vibrant accents, and a high-impact visual identity.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Mood & Vibe</h3>
            <ul className="text-lg text-foreground/80 leading-relaxed mb-8 list-disc list-inside space-y-2">
              <li>Bold, luxurious, and attitude-driven</li>
              <li>Boutique intimacy with an immersive, high-energy feel</li>
              <li>Photogenic curves, lighting, and standout details</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Color & Materials</h3>
            <ul className="text-lg text-foreground/80 leading-relaxed mb-8 list-disc list-inside space-y-2">
              <li><strong>Base:</strong> Soft neutrals balanced with elevated brand tones</li>
              <li><strong>Accents:</strong> Glossy acrylics, tinted mirrors, and polished metal trims</li>
              <li><strong>Textures:</strong> Velvet-touch laminates, reflective finishes, tactile stone</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Spatial Layout</h3>
            <ul className="text-lg text-foreground/80 leading-relaxed list-disc list-inside space-y-2">
              <li><strong>Central Statement Table:</strong> Sculptural focal point that encourages interaction</li>
              <li><strong>Display Modules:</strong> Curved/tiered units creating flow and visual rhythm</li>
              <li><strong>Cash/Wrap:</strong> Minimal, discreet, and seamlessly integrated with hidden storage</li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={import.meta.env.BASE_URL + 'mood_boards/Nishani Mood Board.png'} 
              alt="Nishani Mood Board" 
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Store Renders */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Store Renders</h2>
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

      {/* Physical Store Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Physical Store</h2>
          <p className="text-xl text-muted-foreground mb-12">As displayed in Jio World Mall, Mumbai, 2025</p>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="group bg-card rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="overflow-hidden">
                <img 
                  src={import.meta.env.BASE_URL + 'Nishani/store_1.jpg'} 
                  alt="Physical Store View 1"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </article>
            <article className="group bg-card rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="overflow-hidden">
                <img 
                  src={import.meta.env.BASE_URL + 'Nishani/store_2.jpg'} 
                  alt="Physical Store View 2"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </article>
            <article className="group bg-card rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="overflow-hidden">
                <img 
                  src={import.meta.env.BASE_URL + 'Nishani/store_3.jpg'} 
                  alt="Physical Store View 3"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </article>
            <article className="group bg-card rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="overflow-hidden">
                <img 
                  src={import.meta.env.BASE_URL + 'Nishani/store_4.jpg'} 
                  alt="Physical Store View 4"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </article>
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

export default NishaniProject;
