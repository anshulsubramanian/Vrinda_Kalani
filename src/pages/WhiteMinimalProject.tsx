import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import moodBoard from "@/assets/white-minimal/mood_board.png";
import sketches from "@/assets/white-minimal/sketches.png";
import NOAH1 from "@/assets/white-minimal/NOAH_1.png";
import NOAH2 from "@/assets/white-minimal/NOAH_2.png";
import noahVideo from "@/assets/white-minimal/noah_video.mp4";
import HUG from "@/assets/white-minimal/hug.png";
import HALO from "@/assets/white-minimal/HALO.png";
import HALO2 from "@/assets/white-minimal/HALO_2.png";
import FOLD from "@/assets/white-minimal/FOLD.png";
import FOLD1 from "@/assets/white-minimal/FOLD_1.png";
import SWAY from "@/assets/white-minimal/swayyyyy.png";
import SWAY1 from "@/assets/white-minimal/SWAY_1.png";
import SWAY2 from "@/assets/white-minimal/SWAY_2.png";
import SWAY3 from "@/assets/white-minimal/SWAY_3.png";
import ORO from "@/assets/white-minimal/oro.png";
import ORO1 from "@/assets/white-minimal/oro_1.png";
import ORO2 from "@/assets/white-minimal/oro_2.png";
import ORO3 from "@/assets/white-minimal/ORO_3.png";
import WhatsApp1 from "@/assets/white-minimal/WhatsApp_1.jpeg";
import WhatsApp2 from "@/assets/white-minimal/WhatsApp_2.jpeg";
import WhatsApp3 from "@/assets/white-minimal/WhatsApp_3.jpeg";
import WhatsApp4 from "@/assets/white-minimal/WhatsApp_4.jpeg";
import WhatsApp5 from "@/assets/white-minimal/WhatsApp_5.jpeg";
import WhatsApp6 from "@/assets/white-minimal/WhatsApp_6.jpeg";
import WhatsApp7 from "@/assets/white-minimal/WhatsApp_7.jpeg";
import WhatsApp8 from "@/assets/white-minimal/WhatsApp_8.jpeg";
import { useEffect } from "react";

const WhiteMinimalProject = () => {
  // SEO setup
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    document.title = "White Studios";
    const desc =
      "Warm minimalism by White Studios: sculptural tables and seating crafted in metal, leather and stone.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.href);
  }, []);

  const products = [
    {
      name: "FOLD",
      description:
        "A table that challenges symmetry and celebrates structure. Built from a single sheet of metal bent, cut and composed to hold unexpected balance—bold and functional without compromise.",
      images: [FOLD, FOLD1],
    },
    {
      name: "HALO Noir",
      description:
        "Built around balance: a cast metal base—half textured, half smooth—grounds the form while a circular arm lifts the top above it. Contrast of weight and lightness held in a quiet, confident form.",
      images: [HALO, HALO2],
    },
    {
      name: "HUG",
      description:
        "A table that embraces connection and contrast. A single sheet of metal meets, curves and supports itself with quiet grace—comfort in structure, emotion in form.",
      images: [HUG],
    },
    {
      name: "SWAY",
      description:
        "Graceful movement captured in form. Where cantilevered design meets sculptural presence, this piece balances on the edge of possibility—fluid, dynamic and unapologetically bold.",
      images: [SWAY, SWAY2, SWAY3],
    },
    {
      name: "ORO",
      description:
        "Elegance in every detail. A harmonious blend of cylindrical forms and reflective surfaces creates a sophisticated side table that plays with light and shadow in equal measure.",
      images: [ORO, ORO1, ORO2, ORO3],
    },
    {
      name: "NOAH",
      description:
        "Comfort in simplicity. A single metal shell forms the structure while a hand‑finished leather seat softens and shapes with use. Honest craft and material at the forefront.",
      images: [NOAH1, NOAH2],
      video: noahVideo,
    },
  ];

  const additionalImages: string[] = [
    WhatsApp1,
    WhatsApp2,
    WhatsApp3,
    WhatsApp4,
    WhatsApp5,
    WhatsApp6,
    WhatsApp7,
    WhatsApp8,
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-6 left-6 z-50">
        <Link to="/#work">
          <Button variant="secondary" size="lg" className="rounded-full glass">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section
        className="pt-32 pb-16 px-4 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/Covers/yellow white cover.png')", minHeight: "70vh" }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Concept Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl font-bold mb-6">White Studios</h1>
            <h2 className="text-2xl font-semibold mb-4">Concept</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              At White Studios, design begins with curiosity. We often ask ourselves — what if minimalism could feel warmer, more human, more alive?
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              This collection explores form, material and emotion, where art meets craft and restraint meets expression. Minimalism is not the absence of detail, but the presence of intention.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              Metal bends like fabric, marble holds light, and leather softens the coolness of steel—creating balance through contrast. Each piece celebrates the handmade where small imperfections become part of its story.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              This is minimalism that invites emotion—quiet, soulful and confidently simple in any space.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src="/mood_boards/YellowWhiteMoodBoard.jpeg" alt="White Studios Minimal mood board" className="w-full h-[600px] object-cover" />
          </div>
        </div>
      </section>

      {/* Sketches */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Sketches</h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            {/* Zoom into the second sketch area by adjusting object-position and scale */}
            <div className="w-full overflow-hidden">
              <img
                src={sketches}
                alt="White Studios Minimal sketches"
                className="w-full h-[700px] object-cover"
                style={{ objectPosition: '70% 50%', transform: 'scale(1.12)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">The Collection</h2>
          <div className="space-y-16">
            {products.map((product, index) => (
              <article key={index} className="bg-card rounded-2xl overflow-hidden shadow-lg p-8">
                <h3 className="text-3xl font-semibold mb-4">{product.name}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                
                {/* Video if available */}
                {product.video && (
                  <div className="mb-6 rounded-xl overflow-hidden">
                    <video 
                      src={product.video} 
                      controls 
                      className="w-full"
                      style={{ maxHeight: "600px" }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
                
                {/* Images */}
                {product.images.length > 0 && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="rounded-xl overflow-hidden flex items-center justify-center bg-white">
                        <img
                          src={image}
                          alt={`${product.name} view ${imgIndex + 1}`}
                          className="max-h-64 md:max-h-80 w-auto object-contain"
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

      {/* Additional Gallery - placeholder for future WhatsApp/IMG assets */}
      {additionalImages.length > 0 && (
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Additional Gallery</h2>
            <h2 className="text-xl text-muted-foreground mb-12">As showcased in Design Democracy, Hyderabad, September 2025</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalImages.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-2xl bg-white">
                  <img src={img} alt={`Additional ${i + 1}`} className="w-full h-full object-contain" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black"
          style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #581c87 50%, #000000 100%)" }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white text-sm">Available to work with you</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">Let's design next one together</h2>

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

export default WhiteMinimalProject;
