const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-10 border-t border-stroke/50 bg-background w-full">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Divyansh Singh. Designed & Built with precision.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="#home" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Home</a>
          <a href="#about" className="text-muted-foreground hover:text-foreground text-sm transition-colors">About</a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Projects</a>
          <a href="#skills" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Skills</a>
          <a href="#experience" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Experience</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
