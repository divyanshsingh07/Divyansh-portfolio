import Works from './components/Works';
import AboutSection from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ContactPage from './components/Contact';
import Footer from './components/Footer';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  return (
    <div className="w-full bg-background text-foreground overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-stroke/30 transition-all duration-300">
        <div className="flex flex-row items-center justify-between px-6 sm:px-8 py-4 max-w-7xl mx-auto w-full">
          <a href="#home" className="flex items-center text-2xl sm:text-3xl tracking-tight text-foreground" style={{ fontFamily: "var(--font-display)" }}>
            Divyansh Singh
          </a>

          {/* nav links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-sm text-foreground transition-colors">Home</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skills</a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Experience</a>
          </div>

          <a href="#contact" className="liquid-glass rounded-full px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm text-foreground hover:scale-[1.03] transition-transform duration-300">
            Contact Me
          </a>
        </div>
      </nav>

      {/* Hero Section Container */}
      <div id="home" className="relative min-h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" type="video/mp4" />
        </video>



        {/* Hero Section */}
        <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 min-h-[calc(100vh-100px)]">
          <h1
            className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-1px] md:tracking-[-2.46px] max-w-5xl font-normal text-foreground animate-fade-rise"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Where <em className="not-italic text-muted-foreground">ideas</em> turn into <em className="not-italic text-muted-foreground">scalable products.</em>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
            I build AI-powered applications, full-stack systems, and cloud-native infrastructure for real-world impact. Focused on performance, scalability, and shipping production-ready solutions.
          </p>

          {/* Action Buttons (Pinned to Bottom) */}
          <div className="absolute bottom-8 sm:bottom-12 left-0 w-full px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-rise-delay-2 z-20">
            <a href="#projects" className="bg-black text-white border border-white/10 rounded-full px-10 sm:px-14 py-4 sm:py-5 text-base hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-xl w-full max-w-[320px] sm:w-auto font-medium text-center">
              Explore Projects
            </a>
            <div className="flex items-center gap-4 justify-center w-full sm:w-auto">
              <a 
                href="https://github.com/divyanshsingh07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white border border-white/10 relative flex items-center justify-center rounded-full w-14 h-14 sm:w-16 sm:h-16 hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 cursor-pointer group shadow-xl"
              >
                <FaGithub size={20} className="sm:w-[22px] sm:h-[22px]" />
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-surface border border-stroke text-foreground text-xs px-3 py-1.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  GitHub
                </div>
              </a>
              <a 
                href="https://www.linkedin.com/in/divyansharsh/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white border border-white/10 relative flex items-center justify-center rounded-full w-14 h-14 sm:w-16 sm:h-16 hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 cursor-pointer group shadow-xl"
              >
                <FaLinkedin size={20} className="sm:w-[22px] sm:h-[22px]" />
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-surface border border-stroke text-foreground text-xs px-3 py-1.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  LinkedIn
                </div>
              </a>
            </div>
          </div>
        </main>
      </div>

      <AboutSection />
      <Works />
      <Skills />
      <Experience />

      {/* Contact Section */}
      <ContactPage />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
