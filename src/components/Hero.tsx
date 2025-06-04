import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { Button } from './ui/button';
import { useTheme } from './theme-provider';
import { FolderKanban } from 'lucide-react';

import 'react-circular-progressbar/dist/styles.css';

const Hero = () => {
  const { theme } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 100]);
  const contentY = useTransform(scrollY, [0, 500], [0, 200]);

  // Choose gradient color based on theme
  const animatedGradient =
    theme === 'dark'
      ? [
          'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        ]
      : [
          'radial-gradient(circle at 20% 20%, rgba(0,0,0,0.07) 0%, transparent 50%)',
          'radial-gradient(circle at 80% 80%, rgba(0,0,0,0.07) 0%, transparent 50%)',
          'radial-gradient(circle at 20% 20%, rgba(0,0,0,0.07) 0%, transparent 50%)',
        ];

  // Mouse-following spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 30 });

  const spotlightColor = theme === 'dark'
    ? 'rgba(255,255,255,0.10)'
    : 'rgba(0,0,0,0.22)';

  const spotlightBg = useTransform(
    [springX, springY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, ${spotlightColor}, transparent 80%)`
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const bounds = heroRef.current?.getBoundingClientRect();
    if (!bounds) return;
    mouseX.set(e.clientX - bounds.left);
    mouseY.set(e.clientY - bounds.top);
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80"
    >
      {/* Animated background with parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: animatedGradient,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        {/* Mouse-following spotlight */}
        <motion.div
          style={{ background: spotlightBg }}
          className="absolute inset-0"
        />
      </motion.div>

      {/* Content with parallax */}
      <motion.div
        style={{ y: contentY }}
        className="container relative z-10 mx-auto px-4 py-32 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I'm <span className="text-primary">Divyansh Singh</span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
          I’m a Computer Science student at VIT Andhra Pradesh with strong skills in full-stack development using the MERN stack. I’ve built projects like a bike rental platform, 3D portfolio, and weather dashboard. I interned at Bluestock, focusing on frontend tools with HTML, CSS, and JavaScript. I also completed a freelance portfolio website for a journalist. Certified in Azure AI and AWS Cloud, I’m passionate about creating efficient, user-friendly web applications and continuously learning new technologies.
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center gap-4">
              <Button 
                size="lg" 
                asChild 
                className="group transition-all duration-300 hover:bg-background hover:text-primary border-2 border-primary rounded-full"
              >
                <a 
                  href="https://drive.google.com/file/d/1RCG9in9HtL_dUrtFvqdrbGE6P5AAghOW/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2"
                >
                  <FolderKanban className="w-5 h-5 group-hover:text-primary transition-colors" />
                  View Resume
                </a>
              </Button>
            </div>
            <div className="flex justify-center gap-4 mt-2">
              <Button asChild variant="ghost" size="icon" aria-label="GitHub" className="relative group">
                <a href="https://github.com/divyanshsingh07" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.012-1.243-.018-2.252-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.698.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-foreground text-background px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                      GitHub
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-foreground rotate-45"></div>
                    </div>
                  </div>
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" aria-label="LinkedIn" className="relative group">
                <a href="https://www.linkedin.com/in/divyansh-singh-a33976255/" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-foreground text-background px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                      LinkedIn
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-foreground rotate-45"></div>
                    </div>
                  </div>
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" aria-label="LeetCode" className="relative group">
                <a href="https://leetcode.com/u/divyanshsingh07/" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                  </svg>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="bg-foreground text-background px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                      LeetCode
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-foreground rotate-45"></div>
                    </div>
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* Down Arrow to Projects */}
      <div className="absolute left-1/2 bottom-16 -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="mb-2 text-sm font-semibold text-primary tracking-wide uppercase">Explore My Projects</span>
        <button
          onClick={() => {
            const el = document.getElementById('projects');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll to Projects"
          className="bg-background/80 rounded-full p-2 shadow-lg hover:bg-primary hover:text-background transition-colors border border-primary"
        >
          <svg className="w-7 h-7 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero; 