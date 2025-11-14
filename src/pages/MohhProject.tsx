import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// New product assets
import renneCoffee from "@/assets/mohh/renne_coffee_table.jpg";
import lianaCoffee from "@/assets/mohh/liana_coffee_table.jpg";
import celiaEndTable from "@/assets/mohh/celia_end_table.png";
import puzzleSideTable from "@/assets/mohh/puzzle_side_table.png";
import nerissaTable from "@/assets/mohh/nerissa_table.png";
import carmelEndTable from "@/assets/mohh/carmel_end_table.jpg";
import junoConsole from "@/assets/mohh/juno_console.png";
import devoaraConsole from "@/assets/mohh/devoara_console.jpg";
import devoaraConsole1 from "@/assets/mohh/devoara_console_1.jpg";
const MohhProject = () => {
  // SEO setup
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    document.title = "Mohh Furniture – Design Portfolio";
    const desc =
      "Contemporary furniture design by Mohh — chairs, bar stools, consoles and tables crafted for modern Indian homes.";
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

  // Bar stools
  const barStools = [
    { name: "Raya Bar Stool", images: [import.meta.env.BASE_URL + 'Mohh/Raya_Bar_Stool.jpg'] },
    { name: "Evara Bar Stool", images: [import.meta.env.BASE_URL + 'Mohh/Evara_Bar_Stool.jpg'] },
  ];

  const chairs = [
    { name: "Ukiyo Chair", images: [import.meta.env.BASE_URL + 'Mohh/Ukiyo_Chair.jpg'] },
    { name: "Ludic Dining Chair", images: [import.meta.env.BASE_URL + 'Mohh/Ludic_Chair_1.jpg', import.meta.env.BASE_URL + 'Mohh/Ludic_Chair_2.jpg'] },
    { name: "Elora Dining Chair", images: [import.meta.env.BASE_URL + 'Mohh/Elora_Chair_1.jpg', import.meta.env.BASE_URL + 'Mohh/Elora_Chair_2.jpg'] },
  ];

  const consoles = [
    { name: "Juno Console", images: [junoConsole] },
    { name: "Devoara Console", images: [devoaraConsole, devoaraConsole1] },
  ];

  const tables = [
    { name: "Renne Coffee Table", images: [renneCoffee, import.meta.env.BASE_URL + 'Mohh/Renne Coffee Table_Lifestyle.jpg'] },
    { name: "Liana Coffee Table", images: [lianaCoffee] },
    { name: "Nerissa Coffee Table", images: [nerissaTable] },
    { name: "Celia End Table", images: [celiaEndTable] },
    { name: "Carmel End Table", images: [carmelEndTable] },
    { name: "Puzzle Side Table", images: [puzzleSideTable] },
  ];

  const loungeChairs = [
    { name: "Quinn Lounge Chair", images: [import.meta.env.BASE_URL + 'Mohh/lounge_chairs/quinn_lounge_chair_2.jpg', import.meta.env.BASE_URL + 'Mohh/lounge_chairs/quinn_lounge_chair_1.jpg'] },
    { name: "Kalon Swivel Chair", images: [import.meta.env.BASE_URL + 'Mohh/lounge_chairs/kalon_swivel_chair.jpg', import.meta.env.BASE_URL + 'Mohh/lounge_chairs/kalon_swivel_chair_1.jpg'] },
  ];

  const sofas = [
    { name: "Marlow", images: [import.meta.env.BASE_URL + 'Mohh/sofas/sectional_sofa.png'] },
    { name: "Bexley", images: [import.meta.env.BASE_URL + 'Mohh/sofas/sofa_lifestyle.jpg', import.meta.env.BASE_URL + 'Mohh/sofas/sofa_lifestyle_1.jpg'] },
    { name: "Astra", images: [import.meta.env.BASE_URL + 'Mohh/sofas/curved_sofa.png'] },
  ];

  const storage = [
    { name: "Zephyr Sideboard", images: [import.meta.env.BASE_URL + 'Mohh/storage/zephyr_sideboard_lifestyle.jpg', import.meta.env.BASE_URL + 'Mohh/storage/zephyr_sideboard_lifestyle_1.jpg'] },
    { name: "Zephyr Media Unit", images: [import.meta.env.BASE_URL + 'Mohh/storage/zephyr_media_unit_lifestyle.jpg', import.meta.env.BASE_URL + 'Mohh/storage/zephyr_media_unit_lifestyle_1.jpg'] },
    { name: "Brooks Sideboard", images: [import.meta.env.BASE_URL + 'Mohh/storage/brooks_sideboard.png'] },
    { name: "Mike Media Unit", images: [import.meta.env.BASE_URL + 'Mohh/storage/mike media unit.png'] },
  ];

  const drawings = [
    //{ name: "Brooks Sideboard Technical Drawing", images: [import.meta.env.BASE_URL + 'Mohh/drawings/brooks_sideboard_drawing.jpg'] },
    //{ name: "Evara Barstool Technical Drawing", images: [import.meta.env.BASE_URL + 'Mohh/drawings/evara_barstool_drawing.jpg'] },
    { name: "Quinn Lounge Chair Technical Drawing", images: [
        import.meta.env.BASE_URL + 'Mohh/drawings/quinn_lounge_chair_page_1.jpg',
        import.meta.env.BASE_URL + 'Mohh/drawings/quinn_lounge_chair_page_2.jpg',
        import.meta.env.BASE_URL + 'Mohh/drawings/quinn_lounge_chair_page_3.jpg',
        import.meta.env.BASE_URL + 'Mohh/drawings/quinn_lounge_chair_page_4.jpg',
        import.meta.env.BASE_URL + 'Mohh/drawings/quinn_lounge_chair_page_5.jpg',
        import.meta.env.BASE_URL + 'Mohh/drawings/quinn_lounge_chair_page_6.jpg',
        import.meta.env.BASE_URL + 'Mohh/drawings/quinn_lounge_chair_page_7.jpg',
        import.meta.env.BASE_URL + 'Mohh/drawings/quinn_lounge_chair_page_8.jpg',
        import.meta.env.BASE_URL + 'Mohh/drawings/quinn_lounge_chair_page_9.jpg',
        import.meta.env.BASE_URL + 'Mohh/drawings/quinn_lounge_chair_page_10.jpg',
        import.meta.env.BASE_URL + 'Mohh/drawings/quinn_lounge_chair_page_11.jpg',
        import.meta.env.BASE_URL + 'Mohh/drawings/quinn_lounge_chair_page_12.jpg',
        import.meta.env.BASE_URL + 'Mohh/drawings/quinn_lounge_chair_page_13.jpg',
    ] },
  ];

  const decorObjects = [
    { name: "Florie Trivet", images: [import.meta.env.BASE_URL + 'Mohh/decor/florie_trivet.png'] },
    { name: "Florie Tea Coaster", images: [import.meta.env.BASE_URL + 'Mohh/decor/forie_tea_coaster.png'] },
    { name: "Florie Cake Stand", images: [import.meta.env.BASE_URL + 'Mohh/decor/florie_cake_stand_lifestyle.jpg', import.meta.env.BASE_URL + 'Mohh/decor/florie_cake_stand_lifestyle_2.jpg'] },
    { name: "Cora Cake Stand", images: [import.meta.env.BASE_URL + 'Mohh/decor/cora_cake_stand_lifestyle.jpg'] },
    { name: "Dallas Lamp", images: [import.meta.env.BASE_URL + 'Mohh/decor/dallas_lamp.png'] },
    { name: "Fika Bookends", images: [import.meta.env.BASE_URL + 'Mohh/decor/fika_bookends_lifestyle_1.jpg'] },
    { name: "Camilia Wall Mirror", images: [import.meta.env.BASE_URL + 'Mohh/decor/camilia_wall_mirror.png'] },
    { name: "Briar Vase", images: [import.meta.env.BASE_URL + 'Mohh/decor/briar_vase.png'] },
    { name: "Ayla Tissue Box", images: [import.meta.env.BASE_URL + 'Mohh/decor/ayla_tissue_box.png'] },
    { name: "Florie Planter", images: [import.meta.env.BASE_URL + 'Mohh/decor/florie_planter.png'] },
    { name: "Kai Tealight Holder", images: [import.meta.env.BASE_URL + 'Mohh/decor/kai_tealight_holder.jpg'] },
    { name: "Oven Table Lamp", images: [import.meta.env.BASE_URL + 'Mohh/decor/oven_table_lamp.jpg'] },
    { name: "Hugo Lamp", images: [import.meta.env.BASE_URL + 'Mohh/decor/hugo_lamp.png'] },
    { name: "Hayes Candle Holder", images: [import.meta.env.BASE_URL + 'Mohh/decor/hayes_candle_holder.jpg'] },
    { name: "Freya Vase", images: [import.meta.env.BASE_URL + 'Mohh/decor/freya_vase.jpg'] },
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
  style={{ backgroundImage: `url('${import.meta.env.BASE_URL}Covers/Mohh cover.png')`, minHeight: "70vh" }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Concept Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Mohh Furniture</h1>
          <h2 className="text-2xl font-semibold mb-4">Design & Concept</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-4">
            At Mohh Furniture, our design process is rooted in a balance of spontaneity and sensitivity to the market pulse. Unlike concept-driven workflows that begin with rigid themes or mood boards, our approach here is more fluid—grounded in observation, trend awareness, and a designer's instinct.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed mb-4">
            Ideas are pitched directly to the founder – allowing space for iterative feedback and hands-on collaboration with our in-house team. It's a nimble, fast-paced environment that celebrates quick thinking, originality, and market relevance. What results is a collection of furniture that's not only aesthetically engaging but also commercially viable and thoughtfully built for modern Indian homes.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Beyond design, we place equal emphasis on precision and execution. At Mohh, we prepare detailed production drawings with complete journey specifications, exploded views, and assembly drawings for both factory teams and customers. Every product is documented with foam layering details, bill of materials, and cost calculations, ensuring clarity, consistency, and manufacturing efficiency from concept to completion.
          </p>

          <Tabs defaultValue="storage" className="mt-8">
            <div className="w-full flex justify-center">
              <TabsList className="inline-flex space-x-4">
                <TabsTrigger value="storage" className="px-4">Storage</TabsTrigger>
                <TabsTrigger value="chairs" className="px-4">Chairs</TabsTrigger>
                <TabsTrigger value="barstools" className="px-4">Barstools</TabsTrigger>
                <TabsTrigger value="consoles" className="px-4">Consoles</TabsTrigger>
                <TabsTrigger value="tables" className="px-4">Tables</TabsTrigger>
                <TabsTrigger value="loungechairs" className="px-4">Lounge Chairs</TabsTrigger>
                <TabsTrigger value="sofas" className="px-4">Sofas</TabsTrigger>
                <TabsTrigger value="decor" className="px-4">Decor</TabsTrigger>
                <TabsTrigger value="drawings" className="px-4">Drawings</TabsTrigger>
                
              </TabsList>
            </div>

            <TabsContent value="chairs" className="mt-8">
              <div className="space-y-12">
                {chairs.map((product, index) => (
                  <article key={index} className="bg-card rounded-2xl overflow-hidden shadow-lg p-8">
                    <h3 className="text-3xl font-semibold mb-6">{product.name}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {product.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="rounded-xl overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${product.name} view ${imgIndex + 1}`} 
                            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300" 
                            loading="lazy" 
                          />
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="barstools" className="mt-8">
              <div className="space-y-12">
                {barStools.map((product, index) => (
                  <article key={index} className="bg-card rounded-2xl overflow-hidden shadow-lg p-8">
                    <h3 className="text-3xl font-semibold mb-6">{product.name}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {product.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="rounded-xl overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${product.name} view ${imgIndex + 1}`} 
                            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300" 
                            loading="lazy" 
                          />
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="consoles" className="mt-8">
              <div className="space-y-12">
                {consoles.map((product, index) => (
                  <article key={index} className="bg-card rounded-2xl overflow-hidden shadow-lg p-8">
                    <h3 className="text-3xl font-semibold mb-6">{product.name}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {product.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="rounded-xl overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${product.name} view ${imgIndex + 1}`} 
                            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300" 
                            loading="lazy" 
                          />
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tables" className="mt-8">
              <div className="space-y-12">
                {tables.map((product, index) => (
                  <article key={index} className="bg-card rounded-2xl overflow-hidden shadow-lg p-8">
                    <h3 className="text-3xl font-semibold mb-6">{product.name}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {product.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="rounded-xl overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${product.name} view ${imgIndex + 1}`} 
                            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300" 
                            loading="lazy" 
                          />
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="loungechairs" className="mt-8">
              <div className="space-y-12">
                {loungeChairs.map((product, index) => (
                  <article key={index} className="bg-card rounded-2xl overflow-hidden shadow-lg p-8">
                    <h3 className="text-3xl font-semibold mb-6">{product.name}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {product.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="rounded-xl overflow-hidden">
                          <img
                            src={image}
                            alt={`${product.name} view ${imgIndex + 1}`}
                            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sofas" className="mt-8">
              <div className="space-y-12">
                {sofas.map((product, index) => (
                  <article key={index} className="bg-card rounded-2xl overflow-hidden shadow-lg p-8">
                    <h3 className="text-3xl font-semibold mb-6">{product.name}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {product.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="rounded-xl overflow-hidden">
                          <img
                            src={image}
                            alt={`${product.name} view ${imgIndex + 1}`}
                            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="storage" className="mt-8">
              <div className="space-y-12">
                {storage.map((product, index) => (
                  <article key={index} className="bg-card rounded-2xl overflow-hidden shadow-lg p-8">
                    <h3 className="text-3xl font-semibold mb-6">{product.name}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {product.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="rounded-xl overflow-hidden">
                          <img
                            src={image}
                            alt={`${product.name} view ${imgIndex + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="drawings" className="mt-8">
              <div className="space-y-12">
                {drawings.map((product, index) => (
                  <article key={index} className="bg-card rounded-2xl overflow-hidden shadow-lg p-8">
                    <h3 className="text-3xl font-semibold mb-6">{product.name}</h3>
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                      {product.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="rounded-xl overflow-hidden">
                          <img
                            src={image}
                            alt={`${product.name} view ${imgIndex + 1}`}
                            className="w-full h-full object-contain bg-white hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="decor" className="mt-8">
              {/* Compact grid for decor objects: small tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {decorObjects.map((product, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-3 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-full aspect-square rounded-md overflow-hidden bg-white flex items-center justify-center">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-3 text-sm font-medium text-foreground/90">{product.name}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

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

export default MohhProject;
