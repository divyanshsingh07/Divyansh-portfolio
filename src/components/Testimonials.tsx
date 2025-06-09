import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
 
  {
    name: 'Mitra Shree Ji',
    role: 'Director, OMGVA Foundation',
    text: `Divyansh truly understood our foundation's mission and translated it into a beautiful, functional website. We are grateful for his dedication to our cause.`,
  },
  {
    name: 'Ved Prakash Tiwari',
    role: 'Mass communication ',
    text: `Divyansh built my portfolio with a modern, project-focused design. He was responsive and delivered beyond expectations. Highly recommended!`,
  },
  {
    name: 'Arun Yadav',
    role: 'Mathematics Teacher',
    text: `Working with Divyansh was a pleasure. He created a professional academic portfolio for me that is both minimal and elegant, making my achievements stand out. I appreciate his creative approach and technical expertise.`,
  },
  {
    name: 'Eventify Team',
    role: 'Product Team, Eventify',
    text: `Divyansh developed our event management platform with a sleek dark theme and a focus on usability. His clean UI design and thoughtful features have made a significant impact on our users' experience.`,
  },
  {
    name: 'Aarav Mehta',
    role: 'Frontend Lead, Bluestock',
    text: `During his internship at Bluestock, Divyansh contributed high-quality, responsive UI components and was quick to resolve bugs. His proactive attitude and technical skills made him a valuable part of our team.`,
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
          <div className="relative w-full max-w-xl h-64">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={index}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute w-full h-full flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8"
              >
                <p className="text-lg text-gray-700 dark:text-gray-200 mb-4 text-center">“{testimonials[index].text}”</p>
                <div className="text-primary font-semibold">{testimonials[index].name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{testimonials[index].role}</div>
              </motion.div>
            </AnimatePresence>
            {/* Manual Controls */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white rounded-full p-2 shadow-md transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white rounded-full p-2 shadow-md transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 