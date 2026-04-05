import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="reveal-up glass-panel p-8 md:p-12 relative">
          <Quote size={48} className="absolute top-6 left-6 text-brand-500/20 rotate-180" />
          
          <div className="relative z-10 text-center space-y-6">
            <p className="text-xl md:text-2xl font-display text-gray-200 leading-relaxed italic">
              "Divyansh Singh did an outstanding job developing our website from UI design to deployment… Highly recommended!"
            </p>
            
            <div className="flex flex-col items-center justify-center pt-6 border-t border-gray-800/50">
              <span className="font-bold text-white tracking-wide">OMGVA Foundation</span>
              <span className="text-sm text-brand-400">Non-Governmental Organization</span>
            </div>
          </div>

          <Quote size={48} className="absolute bottom-6 right-6 text-brand-500/20" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
