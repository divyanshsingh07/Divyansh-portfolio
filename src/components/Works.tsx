import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import imgBlog from '../assets/blog.png';
import imgCourse from '../assets/course.png';
import imgChitra from '../assets/chitra.png';
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
    type: "MERN • AWS • CI/CD",
    description: "Full-stack blogging platform with AI content generation, secure authentication, and automated deployment pipelines.",
    tech: "React, Node.js, MongoDB, AWS, CI/CD",
    liveUrl: "https://blog.divyansh.codes/",
    githubUrl: "https://github.com/divyanshsingh07/ai-blog.git",
    label: "View AI Blog",
    image: imgBlog
  },
  {
    span: "md:col-span-5",
    title: "Course Subscription Suite",
    type: "MERN • AWS Deployment",
    description: "End-to-end course management platform with secure payment integration and production-grade hosting on a custom domain.",
    tech: "MERN Stack, AWS, Personal Domain",
    liveUrl: "https://course.divyansh.codes/",
    githubUrl: "https://github.com/divyanshsingh07/CourseSubscription.git",
    label: "View Courses",
    image: imgCourse
  },
  {
    span: "md:col-span-5",
    title: "OMGVA Foundation",
    type: "Real-world • Non-Profit",
    description: "Official platform for a social foundation, featuring dynamic integrations with Google Apps Script for automated data handling.",
    tech: "HTML5, CSS3, JS, Apps Script",
    liveUrl: "https://omgvafoundation.com",
    githubUrl: "https://github.com/divyanshsingh07/omgva.git",
    label: "View OMGVA",
    image: imgBlog // Using imgBlog as a placeholder if precise asset is not available
  },
  {
    span: "md:col-span-7",
    title: "Yuva Prerna Foundation",
    type: "NGO • Web Platform",
    description: "Built a modern, responsive web home for the YPF NGO, simplifying their digital outreach and volunteer management.",
    tech: "HTML5, CSS3, JS, Apps Script",
    liveUrl: "https://ypfngo.in",
    githubUrl: "https://github.com/divyanshsingh07/YPFNGO.git",
    label: "View YPFNGO",
    image: imgYpf
  },
  {
    span: "md:col-span-12",
    title: "ChitralAI",
    type: "AI • Infrastructure • DevOps",
    description: "Core contributor to full-stack and DevOps architectures for high-scale media recognition and search systems in production.",
    tech: "Full-Stack, DevOps, AI, AWS",
    liveUrl: "https://chitralai.in/",
    label: "View ChitralAI",
    image: imgChitra
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
