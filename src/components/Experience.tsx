import { motion } from 'framer-motion';

const animationProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  viewport: { once: true, margin: "-100px" as any }
};

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "ChitralAI",
    type: "Remote",
    points: [
      "Worked on production-grade AI systems",
      "Built and optimized backend + APIs",
      "Contributed to scalable cloud infrastructure",
      "Focused on performance and system reliability"
    ],
    tags: ["AI", "Backend", "AWS", "DevOps"]
  },
  {
    role: "Web Developer Intern",
    company: "OMGVA Foundation",
    type: "",
    points: [
      "Developed full website from UI to deployment",
      "Built interactive interfaces using modern frontend stack",
      "Automated workflows using Google Apps Script",
      "Integrated forms, APIs, and user systems"
    ],
    tags: ["Frontend", "Automation", "APIs"]
  },
  {
    role: "Freelance Developer",
    company: "NGOs",
    type: "",
    points: [
      "Delivered real-world platforms for NGOs",
      "Focused on usability, accessibility, and deployment",
      "Managed complete lifecycle from build to launch"
    ],
    tags: ["Fullstack", "Deployment", "Real-world impact"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-bg py-16 md:py-24 relative z-10 w-full overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center">
        
        {/* Header */}
        <motion.div 
          {...animationProps}
          className="text-center mb-16 max-w-2xl mx-auto flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-6 h-px bg-stroke"></div>
            <span className="text-xs text-muted-foreground uppercase tracking-[0.3em] font-medium">Experience</span>
            <div className="w-6 h-px bg-stroke"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
            Work & <span className="italic" style={{ fontFamily: "var(--font-display)" }}>impact</span>
          </h2>
          
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Hands-on experience building and deploying real-world applications across full-stack, AI, and DevOps environments.
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="w-full max-w-[900px] flex flex-col gap-8 relative">
          {/* Vertical Timeline Indicator (Optional background line) */}
          <div className="absolute left-6 md:left-[51px] top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-stroke to-transparent hidden md:block"></div>

          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              {...animationProps}
              transition={{ ...animationProps.transition, delay: idx * 0.15 } as any}
              className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start group"
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex mt-8 z-10 w-6 h-6 rounded-full bg-surface border-4 border-bg shadow-[0_0_0_1px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:border-white/10 transition-all duration-300">
                <div className="w-full h-full bg-foreground rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>

              {/* Card */}
              <div className="w-full bg-surface/30 hover:bg-surface border border-stroke rounded-2xl p-6 md:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-display text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground text-sm font-medium">
                      {exp.company} {exp.type && <span className="text-stroke mx-2">|</span>} {exp.type}
                    </p>
                  </div>
                </div>

                <ul className="mb-8 space-y-3">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                      <span className="text-foreground/30 mt-0.5">•</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-stroke/50">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-bg border border-stroke rounded-full text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <motion.div 
          {...animationProps}
          transition={{ ...animationProps.transition, delay: 0.6 } as any}
          className="mt-24 text-center max-w-2xl px-6"
        >
          <p className="text-lg md:text-xl font-display italic text-muted-foreground">
            "I focus on building systems that are not just functional—but <span className="text-foreground">production-ready</span>, <span className="text-foreground">scalable</span>, and <span className="text-foreground">impactful</span>."
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
