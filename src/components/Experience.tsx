import { motion } from 'framer-motion';

const animationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  viewport: { once: true, margin: "-50px" as any }
};

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "ChitralAI",
    period: "Present",
    description: "Architecting scalable media systems and optimizing full-stack workflows for production-level AI applications.",
    points: [
      "Building production-grade AI systems with high-scale throughput",
      "Optimizing backend performance and RESTful API architectures",
      "Managing cloud-native infrastructure on AWS for reliability",
      "Leading DevOps initiatives to streamline deployment cycles"
    ],
    tags: ["AI", "Backend", "AWS", "DevOps"]
  },
  {
    role: "Web Developer Intern",
    company: "OMGVA Foundation",
    period: "2024",
    description: "Spearheaded the digital presence for a social foundation, integrating workflow automation and dynamic user systems.",
    points: [
      "Developed an end-to-end web platform from UI design to launch",
      "Built interactive frontend experiences using a modern logic stack",
      "Automated organizational workflows with Google Apps Script",
      "Integrated secure form-handling and user data management systems"
    ],
    tags: ["Frontend", "Automation", "Google APIs"]
  },
  {
    role: "Freelance Systems Developer",
    company: "Social Organizations & NGOs",
    period: "2023 - 2024",
    description: "Dedicated to building high-impact platforms for non-profits with a focus on accessibility and real-world scalability.",
    points: [
      "Delivered production-ready platforms for multiple NGOs",
      "Ensured high performance, accessibility, and smooth UX",
      "Handled total project lifecycle from architecture to production"
    ],
    tags: ["Fullstack", "System Scaling", "Impact"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-background py-24 md:py-32 relative z-10 w-full overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-3xl">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 font-semibold animate-fade-rise">
              Career Timeline
            </p>
            <h2 
               className="text-5xl sm:text-6xl md:text-8xl font-normal tracking-[-2px] text-foreground mb-6 animate-fade-rise"
               style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Work & <em className="not-italic text-muted-foreground">impact.</em>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl animate-fade-rise-delay">
              Hands-on experience building and deploying real-world applications across full-stack, AI, and DevOps environments.
            </p>
          </div>
        </div>

        {/* Experience Timeline Grid */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line - hidden on very small, visible on all others */}
          <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-px bg-stroke/30 -translate-x-1/2 hidden sm:block"></div>

          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              {...animationProps}
              className={`relative mb-16 md:mb-32 last:mb-0 w-full flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-0 font-body`}
            >
              {/* Timeline Indicator Dot (Centered on Desktop) */}
              <div className="absolute left-[11px] md:left-1/2 top-2 md:top-12 w-[12px] h-[12px] rounded-full bg-foreground/40 group-hover:bg-foreground transition-all duration-500 scale-100 group-hover:scale-125 z-10 ring-4 ring-background -translate-x-1/2 hidden sm:block"></div>

              {/* Company Info Column */}
              <div className={`w-full md:w-1/2 flex flex-col ${idx % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'} pl-10 sm:pl-12 md:pl-0`}>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em] mb-2 opacity-70">
                  {exp.period}
                </span>
                <h3 
                  className="text-4xl md:text-5xl text-foreground mb-4 leading-tight"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {exp.company}
                </h3>
                <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-surface/30 border border-stroke rounded-full text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Role Card Column */}
              <div className={`w-full md:w-1/2 pl-10 sm:pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                <div className="bg-surface/20 border border-stroke/50 hover:border-stroke/80 hover:bg-surface/30 rounded-3xl p-8 transition-all duration-700 shadow-sm hover:shadow-2xl group">
                  <h4 className="text-xl md:text-2xl font-medium text-foreground mb-4">
                    {exp.role}
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-base mb-8 leading-relaxed opacity-80 group-hover:opacity-100">
                    {exp.description}
                  </p>

                  <div className="flex flex-col gap-4">
                    {exp.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-4 text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        <div className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground/30 shrink-0"></div>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Footer Quote */}
        <div className="mt-32 md:mt-48 text-center animate-fade-rise" style={{ animationDelay: "0.2s" }}>
           <p 
             className="text-2xl md:text-4xl lg:text-5xl font-normal italic text-muted-foreground max-w-4xl mx-auto leading-tight"
             style={{ fontFamily: "'Instrument Serif', serif" }}
           >
             "I focus on building systems that are not just functional—but <span className="text-foreground">production-ready</span>, <span className="text-foreground">scalable</span>, and <span className="text-foreground">impactful</span>."
           </p>
        </div>

      </div>
    </section>
  );
};

export default Experience;
