import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'OMGVA Foundation Team',
    role: 'OMGVA Foundation',
    text: `Divyansh Singh did an outstanding job developing our website from UI design to deployment. The final product exceeded our expectations, and we were so impressed that we immediately asked him to build our second website, omgvawellness.in. His professionalism, creativity, and technical expertise made the entire process smooth and stress-free. Highly recommended!`,
  },
  {
    name: 'Kundan Pandey',
    role: 'Journalist',
    text: `Divyansh created my personal portfolio website with great attention to detail. The design is clean, responsive, and perfectly reflects my work as a journalist. He was easy to communicate with, understood my vision, and delivered everything on time. I couldn’t be happier with the result!`,
  },
  {
    name: 'Friend',
    role: 'Personal Portfolio Client',
    text: `I asked Divyansh to build a portfolio for me, and he did an incredible job. The UI is modern, intuitive, and visually appealing. He made sure the website represented me well, and I’m extremely satisfied with the final product.`,
  },
  {
    name: 'College Professor',
    role: 'Professor',
    text: `Divyansh developed my personal portfolio website with professionalism and creativity. He handled everything from design to deployment, ensuring the site was fully responsive and functional. I’m very happy with his work and would highly recommend him for web development projects.`,
  },
];

const slideVariants = {
  enter: { x: '100%', opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
};

const AUTO_SLIDE_INTERVAL = 6000;

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(next, AUTO_SLIDE_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-4 border-primary px-4 pb-1">Testimonials</span>
        </h2>
        <div className="flex justify-center">
          <div
            ref={containerRef}
            onMouseEnter={() => {
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
              }
            }}
            onMouseLeave={() => {
              if (!timeoutRef.current) timeoutRef.current = setTimeout(next, AUTO_SLIDE_INTERVAL);
            }}
            className="relative w-full max-w-3xl"
          >
            <div className="relative h-auto">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={index}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="relative w-full rounded-2xl p-6 sm:p-8 backdrop-blur bg-white/70 dark:bg-gray-900/60 border border-border shadow-xl"
                >
                  <p className="text-base sm:text-lg text-foreground/90 mb-4 text-center leading-relaxed">“{testimonials[index].text}”</p>
                  <div className="text-primary font-semibold text-center">{testimonials[index].name}</div>
                  <div className="text-sm text-muted-foreground text-center">{testimonials[index].role}</div>
                </motion.div>
              </AnimatePresence>
              {/* Manual Controls */}
              <button
                onClick={prev}
                className="absolute -left-3 sm:left-2 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-white rounded-full p-2 shadow-md transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute -right-3 sm:right-2 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-white rounded-full p-2 shadow-md transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            {/* Pagination Dots */}
            <div className="mt-5 flex items-center justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${i === index ? 'bg-primary w-7' : 'bg-muted-foreground/40 hover:bg-muted-foreground/70'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 