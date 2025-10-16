import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface Project {
  title: string;
  subtitle?: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  image?: string;
  color?: string; // for dot/line color
}

const projects: Project[] = [
  {
    title: "SwasthyaPath - Health Symptom Checker",
    subtitle: "MERN + AI Symptom Checker",
    description:
      "AI-powered symptom checker built with the MERN stack. Provides educational insights using Google's Gemini, session history, rate limiting, and a modern responsive UI. Designed strictly for educational purposes, not medical advice.",
    techStack: [
      "React",
      "Vite",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Gemini AI",
      "Framer Motion"
    ],
    githubLink: "https://github.com/divyanshsingh07/Helth-Symptom-Checker.git",
    liveLink: "https://helthsymptomchecker.onrender.com/",
    image: "/images/project12.png",
    color: "#f59e0b", // amber
  },
  {
    title: "Vedified Blogs",
    subtitle: "AI-Powered Blogging Platform",
    description:
      "A full-stack blogging website with AI integration using Google Gemini. Features include rich text editing with TipTap, image management via ImageKit, admin dashboard, user authentication, and real-time content management. Built with modern React 19 and Node.js backend.",
    techStack: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Gemini AI",
      "ImageKit",
      "TipTap Editor",
      "TailwindCSS",
      "JWT Auth"
    ],
    githubLink: "https://github.com/divyanshsingh07/Vedified-Blogs.git",
    liveLink: "https://vedt.onrender.com/",
    image: "/images/project10.png",
    color: "#8b5cf6", // violet
  },
  {
    title: "OMGVA Wellness Website",
    subtitle: "Frontend Development & Deployment Project",
    description:
      "Designed and developed the complete OMGVa Wellness website from UI to deployment. Implemented a modern, responsive interface using HTML, CSS, JavaScript, and Tailwind CSS. Integrated Google Forms APIs for handling user interactions, registrations, and feedback submissions, ensuring a smooth and user-friendly experience.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Google Forms API"
    ],
    githubLink: "https://github.com/divyanshsingh07/omgva.git",
    liveLink: "https://omgvawellness.omgva.in",
    image: "/images/project11.png",
    color: "#14b8a6", // teal
  },
  {
    title: "OMGVA.in",
    subtitle: "Spiritual Foundation Website",
    description:
      "A modern, responsive website for OMGVA Foundation, featuring information about the ashram, mission, events, gallery, and donation options. Built for accessibility and engagement.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "ShadCN UI",
      "Framer Motion"
    ],
    githubLink: "https://github.com/divyanshsingh07/OMGVA-Foundation.git",
    liveLink: "https://omgva.in",
    image: "/images/project9.png", // Please add a relevant screenshot to your public folder
    color: "#f97316", // orange
  },
  {
    title: "Portfolio for My Maths Teacher",
    subtitle: "Personal Portfolio",
    description:
      "A modern, animated portfolio website for my mathematics teacher, showcasing achievements, teaching philosophy, and resources.",
    techStack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "ShadCN UI",
      "Framer Motion",
    ],
    githubLink: "https://github.com/divyanshsingh07/Dr.Arun-Kumar-Yadav",
    liveLink: "https://dr-arun-kumar-yadav.vercel.app/",
    image: "/images/project1.png",
    color: "#6366f1", // indigo
  },
  {
    title: "KundanPandey.in",
    subtitle: "Personal Portfolio (Team Project)",
    description:
      "A personal portfolio website for Kundan Pandey. Built collaboratively with my friend Aditya Pandey. The site showcases Kundan's work, achievements, and contact information.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/adityapandeydev/kundanpandey_portfolio.git",
    liveLink: "https://kundanpandey.in",
    image: "/images/project2.png", // Make sure this image exists in your public folder
    color: "#10b981",
  },
 
  {
    title: "Ved Portfolio",
    subtitle: "Personal Portfolio for a Friend",
    description:
      "A personal portfolio website created for my friend Ved. The site highlights Ved's skills, projects, and achievements, providing a professional online presence.",
    techStack: ["React", "TypeScript", "TailwindCSS", "ShadCN UI", "Framer Motion"],
    githubLink: "https://github.com/divyanshsingh07/Ved.git",
    liveLink: "https://ved-xi.vercel.app/",
    image: "/images/project4.png", // Make sure this image exists in your public folder
    color: "#f43f5e", // rose or any color you like
  },
  // Add more projects as needed

  {
    title: "Cloudi",
    
      subtitle: "Cloud Storage Web App",
      description: "A web application that detects your current location's weather and displays the data using interactive, visually appealing charts. It provides real-time weather forecasts with graphical representation, making it easy to understand temperature, humidity, and other weather parameters at a glance.",
      techStack: ["React", "Vite", "TailwindCSS", "JavaScript"],
      githubLink: "https://github.com/divyanshsingh07/cloudi.git",
      liveLink: "https://cloudi-taupe.vercel.app/",
      image: "/images/project6.png",
      color: "#38bdf8"
    
  },
  {
    title: "CopyPaste Blocker Extension",
    subtitle: "Browser Extension for Coding Platforms",
    description:
      "A browser extension that blocks copy-paste actions on coding platforms like LeetCode, GeeksforGeeks, and CodeChef to encourage original problem solving and prevent plagiarism.",
    techStack: ["JavaScript", "Chrome Extension", "Web APIs"],
    githubLink: "https://github.com/divyanshsingh07/CopyPasteBlocker.git", 
    liveLink: "", // You can add a Chrome Web Store link or leave empty
    image: "/images/project7.png", // Place a relevant screenshot in your public folder
    color: "#6366f1", // Use any color you like
  },
  {
    title: "Divyansh 3D Portfolio",
    subtitle: "React, Three.js, Tailwind CSS",
    description:
      "Created an interactive 3D portfolio featuring 10+ animated components with Three.js, achieving 95%+ Lighthouse performance score. Enhanced user engagement by 40% through dynamic animations and optimized 3D models (under 500KB each). Streamlined development using Tailwind CSS, reducing UI implementation time by 30%.",
    techStack: ["React", "Three.js", "TailwindCSS"],
    githubLink: "https://github.com/divyanshsingh07/Divyansh-3d",
    liveLink: "https://divyansh-3d.vercel.app/",
    image: "/images/project8.png", // Please add a relevant screenshot to your public folder
    color: "#6366f1", // Indigo or any color you like
  },
];

const Projects = () => {
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

  const handleImageLoad = (imagePath: string) => {
    setLoadedImages(prev => ({ ...prev, [imagePath]: true }));
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">
          <span className="border-b-4 border-primary px-4 pb-1">Latest Works</span>
        </h2>
        <div className="relative flex flex-col gap-y-24">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-muted-foreground/20 -translate-x-1/2 z-0" />
          {projects.map((project, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={project.title}
                className={`relative z-10 flex flex-col md:flex-row items-center md:items-stretch ${isLeft ? '' : 'md:flex-row-reverse'}`}
              >
                {/* Dot and horizontal line, now centered with the image and touching the image edge, never overlapping */}
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" style={{ height: '0', width: '0' }}>
                  <span
                    className="w-5 h-5 rounded-full border-4 border-background block z-10"
                    style={{ background: project.color || '#6366f1', borderColor: '#fff', position: 'absolute', left: '-10px', top: '-10px' }}
                  />
                  <span
                    className={
                      isLeft
                        ? 'absolute top-1/2 left-0 h-1 md:w-[calc(19vw-180px)] bg-muted-foreground/30 z-0 -translate-y-1/2 -translate-x-full'
                        : 'absolute top-1/2 right-0 h-1 md:w-[calc(19vw-180px)] bg-muted-foreground/30 z-0 -translate-y-1/2 translate-x-full'
                    }
                  />
                </div>
                {/* Image with hover effect and tooltip */}
                <div
                  className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0 relative z-10"
                  style={{ marginLeft: isLeft ? '8px' : undefined, marginRight: !isLeft ? '8px' : undefined }}
                >
                  {project.image && (
                    <div className="relative group">
                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <div className="bg-foreground text-background px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap">
                          {project.title}
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45"></div>
                        </div>
                      </div>
                      {project.liveLink ? (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className="relative w-full max-w-md aspect-video">
                            {/* Blur placeholder */}
                            {!loadedImages[project.image] && (
                              <div className="absolute inset-0 bg-gray-200 rounded-xl" />
                            )}
                          <img
                            src={project.image}
                            alt={project.title}
                              loading="lazy"
                              width={800}
                              height={450}
                              className={`w-full h-full object-cover rounded-xl border shadow-lg transition-transform duration-300 group-hover:scale-[1.02] ${
                                loadedImages[project.image] ? 'opacity-100' : 'opacity-0'
                              }`}
                              onLoad={() => handleImageLoad(project.image!)}
                          />
                          </div>
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                            <div className="text-white text-center px-4">
                              <p className="text-lg font-semibold mb-1">View Live Demo</p>
                              <p className="text-sm opacity-90">{project.title}</p>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="relative w-full max-w-md aspect-video">
                          {/* Blur placeholder */}
                          {!loadedImages[project.image] && (
                            <div className="absolute inset-0 bg-gray-200 rounded-xl" />
                          )}
                    <img
                      src={project.image}
                      alt={project.title}
                            loading="lazy"
                            width={800}
                            height={450}
                            className={`w-full h-full object-cover rounded-xl border shadow-lg ${
                              loadedImages[project.image] ? 'opacity-100' : 'opacity-0'
                            }`}
                            onLoad={() => handleImageLoad(project.image!)}
                    />
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {/* Info */}
                <div
                  className="w-full md:w-1/2 flex flex-col justify-center px-2 md:px-8"
                >
                  <h3 className="text-2xl font-bold mb-1 flex items-center gap-2" style={{ color: project.color }}>{project.title}</h3>
                  {project.subtitle && (
                    <div className="text-primary/70 text-base mb-2">{project.subtitle}</div>
                  )}
                  <p className="mb-4 text-muted-foreground text-sm md:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs md:text-sm bg-muted text-foreground rounded-full border"
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:bg-primary/10 border"
                    >
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:bg-primary/10 border"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
