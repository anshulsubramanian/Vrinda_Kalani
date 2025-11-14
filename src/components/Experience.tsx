import { useEffect, useRef } from "react";

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (!sectionRef.current) {
        ticking = false;
        return;
      }

      const items = Array.from(sectionRef.current.querySelectorAll('.experience-item'));
      const windowHeight = window.innerHeight;
      const viewportMiddle = windowHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      items.forEach((item, index) => {
        const rect = (item as HTMLElement).getBoundingClientRect();
        const itemMiddle = rect.top + rect.height / 2;
        const distance = Math.abs(itemMiddle - viewportMiddle);

        if (distance < closestDistance && rect.top < windowHeight && rect.bottom > 0) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      items.forEach((item, index) => {
        const el = item as HTMLElement;
        const rect = el.getBoundingClientRect();
        const itemMiddle = rect.top + rect.height / 2;
        const distanceFromCenter = Math.abs(itemMiddle - viewportMiddle);
        const maxDistance = windowHeight / 2;
        const opacity = Math.max(0.3, 1 - (distanceFromCenter / maxDistance) * 0.7);
        const scale = Math.max(0.95, 1 - (distanceFromCenter / maxDistance) * 0.05);
        
        if (index === closestIndex) {
          el.style.opacity = '1';
          el.style.transform = 'scale(1) translateY(0)';
          el.style.fontSize = '1.5rem'; // text-2xl
          el.classList.add('font-bold');
          el.classList.remove('font-normal');
        } else {
          el.style.opacity = opacity.toString();
          el.style.transform = `scale(${scale}) translateY(${distanceFromCenter * 0.02}px)`;
          el.style.fontSize = '1.125rem'; // text-lg
          el.classList.add('font-normal');
          el.classList.remove('font-bold');
        }
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update(); // Initial call

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const experiences = [
    {
      title: "Product Designer",
      company: "Mohh",
      duration: "Sep 2024 – Oct 2025 | Full-time",
      description: [
        "Led end-to-end development of contemporary indoor furniture collections, from conceptualization to production-ready execution.",
        "Collaborated closely with manufacturing teams to ensure design feasibility, material accuracy, and alignment with brand and market trends.",
      ],
    },
    {
      title: "Freelance Product Designer",
      duration: "",
      projects: [
        {
          name: "The Garden Room",
          description: "Designed outdoor furniture collections blending durability with elegance.",
        },
        {
          name: "Shop White Studio",
          description: "Designed bespoke home accessories and small furniture pieces rooted in artistic expression, with a focus on crafting thoughtful, out-of-the-box forms that elevated the brand's creative identity.",
        },
        {
          name: "Arcedo Kids",
          description: "Created engaging, safe, and playful furniture pieces tailored for children's spaces.",
        },
      ],
    },
    {
      title: "Graduation Project – Product Designer",
      company: "Maanavi Homes",
      duration: "Jan 2024 – May 2024 | Intern",
      description: [
        "Conceptualized and developed a luxurious living and dining room furniture collection for high-income clients.",
      ],
    },
    {
      title: "Product Design Intern",
      company: "Jaipur Furnitures",
      duration: "June 2023 – July 2023",
      description: [
        "Contributed to the design development of wooden furniture rooted in traditional Indian craftsmanship.",
      ],
    },
    {
      title: "Product Design Apprentice",
      company: "The Drilling Co. & Nexpert",
      duration: "",
      description: [
        "Assisted in conceptual prototyping and visual development for early-stage product ideas.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-fade-in-up">
          Work Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className="experience-item animate-fade-in-up transition-all duration-500 ease-out opacity-40 font-normal text-lg"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                willChange: 'opacity, transform, font-size'
              }}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                {exp.company && (
                  <div className="text-xl text-primary mb-1">{exp.company}</div>
                )}
                {exp.duration && (
                  <div className="text-sm text-muted-foreground">{exp.duration}</div>
                )}
              </div>

              {exp.description && (
                <div className="space-y-3">
                  {exp.description.map((desc, i) => (
                    <p key={i} className="text-lg leading-relaxed text-foreground/80">
                      {desc}
                    </p>
                  ))}
                </div>
              )}

              {exp.projects && (
                <ul className="space-y-4 mt-4">
                  {exp.projects.map((project, i) => (
                    <li key={i} className="text-lg leading-relaxed">
                      <strong className="font-semibold">{project.name}</strong> – {project.description}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
