import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { value: 20, label: "Projects Built", suffix: "+" },
  { value: 700, label: "GitHub Contributions", suffix: "+" },
  { value: 5, label: "Production Deployments", suffix: "+" },
  { value: 100, label: "AI + Cloud Focus", suffix: "%" },
];

const Stats = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const counters = gsap.utils.toArray('.stat-value');
      
      counters.forEach((counter: any) => {
        const targetNumber = parseFloat(counter.getAttribute('data-target'));
        gsap.to(counter, {
          innerHTML: targetNumber,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          }
        });
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="stats" className="py-12" ref={statsRef}>
      <div className="glass-panel p-8 md:p-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-400/10 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-800/50">
          {statsData.map((stat, idx) => (
            <div key={idx} className={`text-center ${idx === 0 || idx === 2 ? 'pl-0' : ''}`}>
              <div className="flex items-center justify-center font-display font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-2">
                <span className="stat-value" data-target={stat.value}>0</span>
                <span className="text-brand-500">{stat.suffix}</span>
              </div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
