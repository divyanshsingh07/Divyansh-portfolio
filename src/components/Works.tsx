import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import imgBlog from '../assets/blog.png';
import imgCourse from '../assets/course.png';
import imgChitra from '../assets/chitra.png';
import imgFlashman from '../assets/flashman.png';
import imgYpf from '../assets/ypf.png';

const animationProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  viewport: { once: true, margin: "-100px" as any }
};

const works = [
  {
    span: "md:col-span-7",
    title: "AI Blogging Platform",
    type: "AI • Fullstack • DevOps",
    description: "AI-powered blogging platform with Gemini integration, JWT auth, and production deployment",
    tech: "React 19, Node.js, MongoDB, Docker, AWS",
    liveUrl: "https://blog.divyansh.codes/",
    githubUrl: "#",
    label: "View — AI Blogging Platform",
    image: imgBlog
  },
  {
    span: "md:col-span-5",
    title: "MiniCourses Platform",
    type: "SaaS • Fullstack",
    description: "Role-based course platform with secure APIs and cloud deployment",
    tech: "MERN, AWS, CI/CD",
    liveUrl: "https://course.divyansh.codes/",
    label: "View — MiniCourses",
    image: imgCourse
  },
  {
    span: "md:col-span-5",
    title: "ChitralAI",
    type: "AI • Cloud • DevOps",
    description: "Worked on full-stack and infrastructure for face recognition and media search system",
    tech: "AI, AWS, Backend, DevOps",
    liveUrl: "https://chitralai.in/",
    label: "View — ChitralAI",
    image: imgChitra
  },
  {
    span: "md:col-span-7",
    title: "DevOps CI/CD System (Flashman)",
    type: "DevOps • Infrastructure",
    description: "Designed and implemented CI/CD pipelines for frontend and backend deployment",
    tech: "Docker, GitHub Actions, AWS",
    liveUrl: "https://getflashman.com/",
    label: "View — CI/CD System",
    image: imgFlashman
  },
  {
    span: "md:col-span-12",
    title: "NGO Platforms",
    type: "Freelance • Real-world",
    description: "Built and deployed websites for NGOs focusing on accessibility and real usage",
    tech: "Fullstack, Deployment",
    liveUrl: "https://ypfngo.in",
    label: "View — NGO Work",
    image: imgYpf
  }
];

const Works = () => {
  return (
    <section id="projects" className="bg-bg py-12 md:py-16 relative z-10 w-full">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          {...animationProps}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-stroke"></div>
              <span className="text-xs text-muted-foreground uppercase tracking-[0.3em]">Selected Work</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
              <span className="italic" style={{ fontFamily: "var(--font-display)" }}>Real</span> projects
            </h2>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              A selection of production-ready systems, AI products, and full-stack applications built and deployed in real environments.
            </p>
          </div>


        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {works.map((work, idx) => (
            <motion.div
              key={idx}
              {...animationProps}
              transition={{ ...animationProps.transition, delay: idx * 0.1 } as any}
              className={`${work.span} group relative bg-surface border border-stroke rounded-3xl overflow-hidden min-h-[360px] md:min-h-[420px] flex flex-col justify-end p-8`}
            >
              {/* Background gradient/image placeholder */}
              {work.image ? (
                <>
                  <div className="absolute inset-0 bg-surface z-0"></div>
                  <img
                    src={work.image}
                    alt={work.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none opacity-20 md:opacity-30 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent pointer-events-none"></div>
                </>
              ) : (
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-bg to-surface group-hover:scale-105 transition-transform duration-700 pointer-events-none"></div>
              )}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-0" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

              {/* Content */}
              <div className="relative z-10 transform md:translate-y-4 md:group-hover:translate-y-0 opacity-100 md:opacity-80 md:group-hover:opacity-100 transition-all duration-500">
                <span className="text-xs text-muted-foreground uppercase tracking-widest block mb-3 font-medium">
                  {work.type}
                </span>

                <h3 className="text-2xl md:text-3xl font-display text-foreground mb-3">
                  {work.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
                  {work.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
                  <span className="px-3 py-1 border border-stroke rounded-full">{work.tech}</span>

                  <div className="flex items-center gap-3 ml-auto transition-opacity duration-300 z-20">
                    {work.githubUrl && (
                      <a href={work.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors p-2 bg-bg/50 rounded-full border border-stroke"><FaGithub size={16} /></a>
                    )}
                    <a href={work.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors p-2 bg-bg/50 rounded-full border border-stroke"><ExternalLink size={16} /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Works;
