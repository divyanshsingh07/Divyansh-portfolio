"use client";

import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-12 bg-background text-foreground overflow-hidden">
      
      <div className="relative z-10 max-w-[1200px] mx-auto rounded-3xl overflow-hidden shadow-2xl group border border-stroke/50 group-hover:border-stroke transition-all duration-700 animate-fade-rise">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=1600" 
            alt="Divyansh Singh"
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
          />
          {/* Gradient Overlay so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/40 group-hover:via-background/90 transition-all duration-700"></div>
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center text-center p-8 md:p-16 pt-[250px] md:pt-[350px]">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-4 font-semibold">
            About Me
          </p>

          <h2 
             className="text-4xl md:text-5xl lg:text-7xl font-normal tracking-[-1px] text-white mb-8"
             style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Building systems that <em className="not-italic text-white/70">scale.</em>
          </h2>

          <div className="space-y-6 text-white/90 text-sm md:text-base leading-relaxed mb-10 max-w-4xl">
            <p>
              I’m Divyansh Singh, a Full-Stack Developer and DevOps Engineer focused on building scalable, production-ready systems. I work across the entire stack—from crafting responsive frontend experiences to designing backend architectures and managing cloud infrastructure.
            </p>
            <p>
              I’ve built and deployed multiple real-world applications, including AI-powered platforms and SaaS products, using technologies like MERN, Docker, and AWS. My work is driven by performance, reliability, and the ability to scale systems in real environments.
            </p>
            <p>
              Currently, I’m working with ChitralAI, contributing to full-stack development and DevOps workflows for production systems. I enjoy solving complex problems and turning ideas into systems that actually work in the real world.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-white/80">
            <span className="border border-white/20 bg-black/30 backdrop-blur-md px-5 py-2 rounded-full cursor-default hover:bg-black/50 transition-colors">Fullstack</span>
            <span className="border border-white/20 bg-black/30 backdrop-blur-md px-5 py-2 rounded-full cursor-default hover:bg-black/50 transition-colors">DevOps</span>
            <span className="border border-white/20 bg-black/30 backdrop-blur-md px-5 py-2 rounded-full cursor-default hover:bg-black/50 transition-colors">AI</span>
            <span className="border border-white/20 bg-black/30 backdrop-blur-md px-5 py-2 rounded-full cursor-default hover:bg-black/50 transition-colors">Cloud Systems</span>
          </div>

        </div>
      </div>
    </section>
  );
}
