import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Zap, ArrowRight, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';

const roles = [
  "Full-Stack Developer",
  "DevOps Enthusiast",
  "AI Builder",
  "Cloud Engineer"
];

const Hero = () => {
  const roleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });
      roles.forEach((role) => {
        tl.to(roleRef.current, {
          duration: 0.5,
          text: role,
          opacity: 1,
          y: 0,
          ease: "power2.out",
        })
        .to(roleRef.current, {
          duration: 0.5,
          opacity: 0,
          y: -10,
          ease: "power2.in",
          delay: 2
        })
        .set(roleRef.current, { y: 10, text: "" });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="pt-20 min-h-[90vh] flex flex-col justify-center relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8 space-y-8"
        >
          {/* Info Tags */}
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-800 text-gray-300 border border-gray-700">
              <MapPin size={14} className="text-brand-400" /> Ayodhya, India
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-800 text-gray-300 border border-gray-700">
              <GraduationCap size={14} className="text-brand-400" /> B.Tech CSE @ VIT-AP
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
              <Zap size={14} /> Full-Stack + DevOps
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1]">
              Hi, I'm <span className="text-white">Divyansh Singh</span>
              <br />
              <span className="text-gradient inline-block min-h-[1.2em]">
                {/* Fallback text before JS loads */}
                <span ref={roleRef} className="inline-block opacity-0 translate-y-2">Full-Stack Developer</span>
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              I am a passionate Full-Stack Developer and DevOps enthusiast from Ayodhya, India, specializing in frontend development and cloud-native DevOps practices. I build scalable, responsive web applications using React, Node.js, and the MERN stack, while automating deployments and managing cloud infrastructure with Docker, Kubernetes, AWS, Azure, and CI/CD pipelines.
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-3">
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Core Technologies</p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'MERN', 'AWS', 'Azure', 'Oracle Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-dark-800 hover:bg-dark-700 transition-colors border border-gray-800 text-gray-300 rounded-md text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#projects" className="btn-primary flex items-center gap-2 group">
              Explore My Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="btn-secondary">
              View Resume
            </a>
            <a 
              href="https://blog.divyansh.codes/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-brand-300 font-medium flex items-center gap-1 transition-colors px-4 py-3"
            >
              AI Blog <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Right Column / Visuals */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-4"
        >
          <div className="glass-panel p-6 space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 blur-3xl rounded-full" />
            
            <div>
              <p className="text-sm text-brand-400 font-semibold uppercase tracking-wider mb-2">Experience Highlight</p>
              <h3 className="text-xl font-display font-bold text-white mb-4">Web Developer Intern <br/>@ OMGVA Foundation</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-brand-500 mt-0.5">•</span>
                  Built end-to-end websites + automated workflows
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500 mt-0.5">•</span>
                  Worked with Google Apps Script + real deployments
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-800/50 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">Connect with me</span>
              <div className="flex items-center gap-3">
                <a href="https://github.com/divyanshsingh07" target="_blank" rel="noopener noreferrer" className="p-2 bg-dark-900 border border-gray-800 rounded-full text-gray-400 hover:text-white hover:border-gray-600 transition-all">
                  <FaGithub size={18} />
                </a>
                <a href="https://linkedin.com/in/divyansh-singh-a33976255" target="_blank" rel="noopener noreferrer" className="p-2 bg-dark-900 border border-gray-800 rounded-full text-gray-400 hover:text-white hover:border-gray-600 transition-all">
                  <FaLinkedin size={18} />
                </a>
                <a href="#" className="p-2 bg-dark-900 border border-gray-800 rounded-full text-gray-400 hover:text-white hover:border-gray-600 transition-all">
                  <Code2 size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
