import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-8 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`flex items-center justify-between transition-all duration-500 rounded-full ${
          isScrolled ? 'bg-dark-800/80 backdrop-blur-lg border border-gray-800/50 px-6 py-3 shadow-xl' : 'px-2'
        }`}>
          
          {/* Logo */}
          <a href="#home" className="text-xl font-display font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-400 to-brand-600 flex items-center justify-center text-dark-900 text-sm">
              DS
            </span>
            Divyansh
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a href="#contact" className="hidden sm:inline-block btn-primary py-2 px-5 text-sm">
              Let's Build
            </a>
          </div>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
