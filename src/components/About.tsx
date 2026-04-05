"use client";

import myImage from "../assets/image.png";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-background text-foreground overflow-hidden">
      
      <div className="relative z-10 max-w-[1200px] mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group border border-stroke/50 group-hover:border-stroke transition-all duration-700 animate-fade-rise">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 bg-black">
          <img
            src={myImage} 
            alt="Divyansh Singh"
            className="w-full h-full object-cover filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-in-out"
          />
          {/* Intense Gradient Overlay for high text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-all duration-700"></div>
          <div className="absolute inset-0 bg-background/40"></div>
        </div>


        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center text-center p-6 sm:p-10 md:p-16 pt-[180px] sm:pt-[220px] md:pt-[320px]">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/70 mb-3 sm:mb-4 font-semibold">
            About Me
          </p>

          <h2 
             className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal tracking-[-1px] text-white mb-6 sm:mb-8"
             style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Building systems that <em className="not-italic text-white/70">scale.</em>
          </h2>

          <div className="space-y-4 sm:space-y-6 text-white/90 text-xs sm:text-sm md:text-base leading-relaxed mb-8 sm:mb-10 max-w-4xl">
            <p>
              I’m Divyansh Singh, a Full-Stack Developer and DevOps Engineer focused on building scalable, production-ready systems. I work across the entire stack—from crafting responsive frontend experiences to designing backend architectures and managing cloud infrastructure.
            </p>
            <p>
              I’ve built and deployed multiple real-world applications, including AI-powered platforms and SaaS products, using technologies like MERN, Docker, and AWS. My work is driven by performance, reliability, and the ability to scale systems in real environments.
            </p>
            <p className="hidden sm:block">
              Currently, I’m working with ChitralAI, contributing to full-stack development and DevOps workflows for production systems. I enjoy solving complex problems and turning ideas into systems that actually work in the real world.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-mono text-white/80">
            <span className="border border-white/20 bg-black/30 backdrop-blur-md px-3 sm:px-5 py-1.5 sm:py-2 rounded-full cursor-default hover:bg-black/50 transition-colors">Fullstack</span>
            <span className="border border-white/20 bg-black/30 backdrop-blur-md px-3 sm:px-5 py-1.5 sm:py-2 rounded-full cursor-default hover:bg-black/50 transition-colors">DevOps</span>
            <span className="border border-white/20 bg-black/30 backdrop-blur-md px-3 sm:px-5 py-1.5 sm:py-2 rounded-full cursor-default hover:bg-black/50 transition-colors">AI</span>
            <span className="border border-white/20 bg-black/30 backdrop-blur-md px-3 sm:px-5 py-1.5 sm:py-2 rounded-full cursor-default hover:bg-black/50 transition-colors">Cloud</span>
          </div>

        </div>
      </div>
    </section>
  );
}
