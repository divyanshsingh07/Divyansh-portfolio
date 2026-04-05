"use client";
import React from "react";
import { 
  SiKubernetes, SiGithubactions, SiJenkins, SiLinux, SiNginx,
  SiTailwindcss, SiExpress, SiJsonwebtokens,
  SiMongodb, SiMongoose, SiMysql,
  SiJavascript, SiPython, SiDocker
} from "react-icons/si";
import { FaJava, FaAws, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";

import { Database, Code2, Cloud, Layout, Zap, Clock, MessageSquare, BrainCircuit, Users, FileCode2, RefreshCw } from "lucide-react";

// Use local svg components if generic Lucide icons aren't perfect
function ServerIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>;
}

const SKILL_CATEGORIES = [
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5 text-foreground" />,
    skills: [
      { name: "Docker", p: 85, icon: <SiDocker /> },
      { name: "Kubernetes", p: 75, icon: <SiKubernetes /> },
      { name: "AWS", p: 75, icon: <FaAws /> },
      { name: "CI/CD (GitHub Actions)", p: 85, icon: <SiGithubactions /> },
      { name: "Jenkins", p: 70, icon: <SiJenkins /> },
      { name: "Linux", p: 80, icon: <SiLinux /> },
      { name: "YAML", p: 80, icon: <FileCode2 className="w-4 h-4" /> },
      { name: "Nginx", p: 70, icon: <SiNginx /> },
    ]
  },
  {
    title: "Frontend Development",
    icon: <Layout className="w-5 h-5 text-foreground" />,
    skills: [
      { name: "React.js", p: 85, icon: <FaReact /> },
      { name: "HTML5", p: 90, icon: <FaHtml5 /> },
      { name: "CSS3", p: 85, icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", p: 80, icon: <SiTailwindcss /> },
    ]
  },
  {
    title: "Backend Development",
    icon: <ServerIcon />,
    skills: [
      { name: "Node.js", p: 80, icon: <FaNodeJs /> },
      { name: "Express.js", p: 75, icon: <SiExpress /> },
      { name: "REST APIs", p: 80, icon: <Zap className="w-4 h-4" /> },
      { name: "JWT Authentication", p: 70, icon: <SiJsonwebtokens /> },
    ]
  },
  {
    title: "Database & Storage",
    icon: <Database className="w-5 h-5 text-foreground" />,
    skills: [
      { name: "MongoDB", p: 75, icon: <SiMongodb /> },
      { name: "Mongoose", p: 70, icon: <SiMongoose /> },
      { name: "MySQL / SQL", p: 60, icon: <SiMysql /> },
    ]
  },
  {
    title: "Programming Languages",
    icon: <Code2 className="w-5 h-5 text-foreground" />,
    skills: [
      { name: "JavaScript", p: 90, icon: <SiJavascript /> },
      { name: "Python", p: 70, icon: <SiPython /> },
      { name: "Java", p: 70, icon: <FaJava /> },
    ]
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-5 h-5 text-foreground" />,
    skills: [
      { name: "Problem-Solving", p: 90, icon: <BrainCircuit className="w-4 h-4" /> },
      { name: "Communication", p: 85, icon: <MessageSquare className="w-4 h-4" /> },
      { name: "Adaptability", p: 85, icon: <RefreshCw className="w-4 h-4" /> },
      { name: "Time Management", p: 80, icon: <Clock className="w-4 h-4" /> },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-background z-10 w-full overflow-hidden border-t border-stroke/30 text-foreground">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/5 via-background to-background pointer-events-none opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <h2 
            className="text-6xl sm:text-7xl md:text-8xl font-normal tracking-[-2px] text-foreground mb-4 animate-fade-rise"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            My <em className="not-italic text-muted-foreground">Skills.</em>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl animate-fade-rise-delay">
            A comprehensive overview of my technical expertise, frameworks, and methodologies.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-surface/30 backdrop-blur-sm border border-stroke rounded-3xl p-6 sm:p-8 flex flex-col gap-6 hover:bg-surface/60 transition-colors animate-fade-rise group"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 text-foreground mb-4">
                <div className="p-3 bg-bg rounded-xl border border-stroke flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-medium tracking-tight font-body">
                  {category.title}
                </h3>
              </div>
              
              {/* Skills List */}
              <div className="flex flex-col gap-5 flex-1">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2.5 text-foreground/80 group-hover:text-foreground transition-colors">
                        <span className="opacity-70">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">{skill.p}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="w-full bg-stroke/50 h-1.5 rounded-full overflow-hidden relative">
                      <div 
                        className="absolute inset-y-0 left-0 bg-foreground/30 group-hover:bg-foreground/50 transition-colors rounded-full"
                        style={{ width: `${skill.p}%`, transitionDuration: "1s" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
