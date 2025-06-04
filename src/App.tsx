import { ThemeProvider } from './components/theme-provider';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground scroll-smooth">
        <Navbar />
        <ThemeToggle />
        <Hero />
        <Projects />
        <Skills />
        <Testimonials /> 
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;