"use client";
import { FiMail, FiMessageCircle, FiPhone, FiMapPin, FiStar } from "react-icons/fi";

const TESTIMONIALS = [
  {
    text: "Divyansh delivered our website end-to-end with great attention to detail and performance. The entire process was smooth, and the final product exceeded our expectations. His ability to combine design and functionality is truly impressive.",
    author: "🌿 OMGVA Foundation",
    role: "Non-Profit Organization"
  },
  {
    text: "Working with Divyansh was a great experience. He built a clean, user-friendly platform that truly represents our mission. His professionalism and understanding of real-world needs made a big difference.",
    author: "🌱 Yuva Prerna Foundation",
    role: "ypfngo.in"
  },
  {
    text: "Divyansh contributed significantly to our full-stack and DevOps workflows. His ability to work on scalable systems and handle production-level challenges made him a valuable part of the team.",
    author: "🧠 ChitralAI",
    role: "Tech Startup"
  },
  {
    text: "Divyansh developed a modern and responsive platform for our institution with great precision. The website is easy to use, visually appealing, and performs reliably across devices.",
    author: "🎓 NLCS School",
    role: "Educational Institution"
  }
];

export default function ContactPage() {
  return (
    <section id="contact" className="relative min-h-[80vh] flex items-center justify-center px-6 py-24 bg-background z-10 w-full overflow-hidden border-t border-border/30">
      {/* Background radial gradient for subtle lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-white/5 via-background to-background pointer-events-none opacity-60"></div>
      
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-12 items-center">
        
        {/* Left Side: Contact Information */}
        <div className="flex flex-col items-start text-left w-full max-w-xl mx-auto xl:mx-0">
          
          {/* Heading */}
          <h2 
            className="text-6xl sm:text-7xl md:text-8xl font-normal tracking-[-2px] text-foreground mb-8 animate-fade-rise"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Let’s build <em className="not-italic text-muted-foreground">something real.</em>
          </h2>

          {/* Subtext */}
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-12 animate-fade-rise-delay">
            Have an idea, a product to ship, or a system to scale?<br className="hidden md:block" />
            I’m always open to working on meaningful projects and collaborating on real-world solutions.
          </p>

          {/* Contact Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full mb-12 animate-fade-rise-delay-2">
            {/* Email */}
            <a
              href="mailto:divyanshsingharsh@gmail.com"
              className="flex items-center justify-center gap-2.5 rounded-full px-6 py-4 bg-foreground text-background font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <FiMail size={18} />
              Send Email
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919517593294"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-full px-6 py-4 border border-border bg-background/50 backdrop-blur-sm text-foreground hover:bg-border/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <FiMessageCircle size={18} />
              WhatsApp
            </a>

            {/* Call */}
            <a
              href="tel:+919517593294"
              className="flex items-center justify-center gap-2.5 rounded-full px-6 py-4 border border-border bg-background/50 backdrop-blur-sm text-foreground hover:bg-border/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <FiPhone size={18} />
              Call Me
            </a>
          </div>

          {/* Divider */}
          <div className="w-16 h-[1px] bg-border mb-10 animate-fade-rise-delay-2 hidden sm:block"></div>

          {/* Info Contacts */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-wrap text-muted-foreground text-sm md:text-base animate-fade-rise-delay-2 pt-4 sm:pt-0 border-t border-border/30 sm:border-none w-full">
            <a 
              href="mailto:divyanshsingharsh@gmail.com" 
              className="flex items-center gap-3 hover:text-foreground transition-colors group"
            >
              <span className="p-2 rounded-full border border-border/50 group-hover:bg-border/50 transition-colors hidden sm:block">
                <FiMail className="w-4 h-4" />
              </span>
              divyanshsingharsh@gmail.com
            </a>
            
            <a 
              href="tel:+919517593294" 
              className="flex items-center gap-3 hover:text-foreground transition-colors group"
            >
              <span className="p-2 rounded-full border border-border/50 group-hover:bg-border/50 transition-colors hidden sm:block">
                <FiPhone className="w-4 h-4" />
              </span>
              +91 9517593294
            </a>
            
            <div className="flex items-center gap-3 group">
              <span className="p-2 rounded-full border border-border/50 hidden sm:block">
                <FiMapPin className="w-4 h-4" />
              </span>
              India
            </div>
          </div>
        </div>

        {/* Right Side: Testimonials Slider */}
        <div className="w-full h-full flex flex-col justify-center relative overflow-hidden animate-fade-rise-delay xl:pl-6 max-w-[100vw] sm:max-w-full">
          
          {/* Subtle decoration */}
          <div className="flex items-center gap-3 mb-6 opacity-60 px-2 lg:px-0 mx-auto xl:mx-0">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="text-foreground fill-foreground w-4 h-4" />
              ))}
            </div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Trusted by founders</span>
          </div>

          {/* Slider Container with Mask */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee py-4 hover:[animation-play-state:paused]">
              
              {/* Render twice for infinite loop */}
              {[...TESTIMONIALS, ...TESTIMONIALS].map((item, idx) => (
                <div 
                  key={idx} 
                  className="w-[300px] sm:w-[350px] shrink-0 mx-3 p-8 rounded-2xl border border-border/40 bg-surface/30 backdrop-blur-sm flex flex-col gap-6 transition-colors hover:bg-surface/50"
                >
                  <p className="text-foreground/90 text-lg leading-relaxed font-body">"{item.text}"</p>
                  <div className="mt-auto flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-border flex items-center justify-center text-muted-foreground font-display text-lg">
                      {Array.from(item.author)[0]}
                    </div>
                    <div>
                      <p className="text-foreground font-medium text-sm">{item.author}</p>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
