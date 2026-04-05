import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "AI Blogging Platform (Vedified Blogs)",
    description: "AI-powered blogging using Gemini, TipTap editor + ImageKit for media. Features JWT auth and a full dashboard.",
    tags: ["React 19", "Node.js", "Gemini AI", "JWT"],
    featured: true,
  },
  {
    title: "ChitralAI",
    description: "Production-level face recognition system. Deployed AI capabilities with robust cloud infrastructure.",
    tags: ["AI", "Cloud Infra", "Python", "Real-world"],
    highlight: true,
  },
  {
    title: "SwasthyaPath (AI Health App)",
    description: "AI symptom checker powered by Gemini and MERN stack. Includes robust session tracking and rate limiting.",
    tags: ["MERN", "Gemini", "Rate Limiting"],
  },
  {
    title: "Yuva Prerna Foundation (NGO)",
    description: "Full end-to-end website build for a social impact project using Google Apps Script & EmailJS for automated workflows.",
    tags: ["Google Apps Script", "EmailJS", "Impact"],
  },
  {
    title: "MiniCourses Platform",
    description: "SaaS course system with comprehensive role-based access control, hosted on AWS with CI/CD pipelines.",
    tags: ["AWS", "CI/CD", "SaaS", "RBAC"],
  },
  {
    title: "Chrome Extension (CopyPaste Blocker)",
    description: "Utility to prevent cheating in coding platforms by restricting copy-paste actions using background browser APIs.",
    tags: ["JavaScript", "Browser APIs", "Tooling"],
  },
  {
    title: "3D Portfolio",
    description: "Immersive 3D portfolio experience built with Three.js and sophisticated animations. Scored 95% on Lighthouse.",
    tags: ["Three.js", "GSAP", "Performance"],
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="mb-16">
        <h2 className="reveal-up text-3xl sm:text-4xl font-display font-bold text-white mb-4">Latest Works</h2>
        <div className="reveal-up w-20 h-1 bg-brand-500 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`reveal-up glass-panel p-6 flex flex-col group hover:-translate-y-2 transition-all duration-300 ${
              project.highlight ? 'ring-2 ring-brand-500/50 bg-brand-900/10' : ''
            } ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
          >
            {project.highlight && (
              <span className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-4 block">
                ⭐ Highlight / Real-world Deployment
              </span>
            )}
            
            <div className="flex-1">
              {project.featured && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-500/20 text-brand-400 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                  🚀 Featured Product
                </span>
              )}
              <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="space-y-6 mt-auto">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-dark-900 border border-gray-800 rounded-md text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-800/50">
                <a href="https://github.com/divyanshsingh07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                  <FaGithub size={16} /> Code
                </a>
                <a 
                  href={project.featured ? "https://blog.divyansh.codes/" : "#"} 
                  target={project.featured ? "_blank" : "_self"} 
                  rel={project.featured ? "noopener noreferrer" : ""}
                  className="flex items-center gap-1.5 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
