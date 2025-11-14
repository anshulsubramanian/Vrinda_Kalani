import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectRefs = useRef<(HTMLElement | null)[]>([]);
  
  const projects = [
    {
      title: "The Garden Room",
      subtitle: "Outdoor Furniture Collection",
      year: "2025",
      type: "Product Design",
  image: import.meta.env.BASE_URL + 'Covers/Garden Room Cover.png',
      link: "/tgr-project",
      bgColor: "#1E3432",
      textColor: "white",
    },
    {
      title: "White Studios",
      subtitle: "Artsy and Modern Design Products",
      year: "2025",
      type: "Lighting",
  image: import.meta.env.BASE_URL + 'Covers/White White Studio.png',
      link: "/white-studios-project",
      bgColor: "#F5F5F0",
      textColor: "black",
    },
    {
      title: "White Studios",
      subtitle: "Warm minimalism: lighting and furniture",
      year: "2025",
      type: "Furniture Design",
  image: import.meta.env.BASE_URL + 'Covers/yellow white cover.png',
      link: "/white-minimal-project",
      bgColor: "#F5F5F0",
      textColor: "black",
    },
    {
      title: "Nishani",
      subtitle: "Jewellery Brand Experience",
      year: "2025",
      type: "Retail Space Design",
  image: import.meta.env.BASE_URL + 'Covers/Nishani cover.png',
      link: "/nishani-project",
      bgColor: "#FF385C",
      textColor: "white",
    },
    {
      title: "Mohh Furniture",
      subtitle: "Contemporary Affordable Furniture Design",
      year: "2024-2025",
      type: "Furniture Design",
  image: import.meta.env.BASE_URL + 'Covers/Mohh cover.png',
      link: "/mohh-project",
      bgColor: "#E07A5F",
      textColor: "white",
    },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      projectRefs.current.forEach((item, index) => {
        if (!item) return;

        const rect = item.getBoundingClientRect();
        const centerPosition = window.innerHeight / 2;
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(centerPosition - itemCenter);
        const maxDistance = window.innerHeight * 0.75;
        const progress = Math.max(0, Math.min(1, 1 - (distance / maxDistance)));

        // Check if item is in viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          item.classList.add('visible');
          
          // Simple scale and opacity based on distance from center
          const scale = 0.95 + (progress * 0.05);
          const opacity = 0.5 + (progress * 0.5);
          
          item.style.transform = `scale(${scale})`;
          item.style.opacity = opacity.toString();
          item.style.zIndex = String(1000 + Math.round(progress * 100));
        } else {
          item.style.opacity = '0';
        }
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="work" className="py-20 bg-background min-h-screen perspective-[1000px]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-fade-in-up">
          My Work
        </h2>

        <div className="flex flex-col gap-8 relative">
          {projects.map((project, index) => (
            <article
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="sticky top-[20vh] rounded-3xl max-w-5xl mx-auto w-full opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden"
              style={{
                zIndex: projects.length - index,
                transform: 'translateY(100px) scale(0.95) rotateX(10deg)',
                transformOrigin: 'center center'
              }}
            >
              <div className="relative min-h-[500px]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 h-full flex flex-col justify-center max-w-xl p-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight text-white">
                      {project.title}
                    </h3>
                    <p className="text-lg text-white/90">
                      {project.subtitle}
                    </p>
                    <div className="flex gap-6 text-sm text-white/80">
                      <div className="font-semibold">{project.year}</div>
                      <div>{project.type}</div>
                    </div>
                    <Link
                      to={project.link}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/60 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-lg text-white"
                    >
                      View Work
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;