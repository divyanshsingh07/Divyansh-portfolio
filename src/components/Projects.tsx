import { Github, ExternalLink } from 'lucide-react';

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
    title: "Bike Rent",
    subtitle: "Bike Rental Platform",
    description:
      "A web application for renting bikes online. Users can browse available bikes, book rentals, and manage their bookings. Built with a modern tech stack for a seamless rental experience.",
    techStack: ["React", "Vite", "TailwindCSS", "JavaScript", "node.js", "express.js", "mongodb"],
    githubLink: "https://github.com/divyanshsingh07/BikeRent.git",
    liveLink: "https://bike-rent-beta.vercel.app/",
    image: "/images/project5.png",
    color: "#fbbf24",
  },
  {
    title: "Cloudi",
    subtitle: "Cloud Storage Web App",
    description:
      "A web app that predicts weather using an API and displays the data graphically through interactive charts. It provides real-time weather forecasts with visually appealing graphs for better data understanding.",
    techStack: ["React", "Vite", "TailwindCSS", "JavaScript"],
    githubLink: "https://github.com/divyanshsingh07/cloudi.git",
    liveLink: "https://cloudi-taupe.vercel.app/",
    image: "/images/project6.png", // Make sure this image exists in your public folder
    color: "#38bdf8", // sky blue or any color you like
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
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full max-w-md h-full object-cover rounded-xl border shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                            <div className="text-white text-center px-4">
                              <p className="text-lg font-semibold mb-1">View Live Demo</p>
                              <p className="text-sm opacity-90">{project.title}</p>
                            </div>
                          </div>
                        </a>
                      ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full max-w-md h-full object-cover rounded-xl border shadow-lg"
                    />
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