import { Mail, Github, Linkedin } from 'lucide-react';

const contactLinks = [
  {
    href: 'mailto:divyanshsingharsh@gmail.com',
    icon: <Mail className="w-7 h-7 group-hover:scale-110 transition-transform" />,
    label: 'Gmail',
    tooltip: 'divyanshsingharsh@gmail.com',
  },
  {
    href: 'https://github.com/divyanshsingh07',
    icon: <Github className="w-7 h-7 group-hover:scale-110 transition-transform" />,
    label: 'GitHub',
    tooltip: 'github.com/divyanshsingh07',
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/divyansh-singh-a33976255/',
    icon: <Linkedin className="w-7 h-7 group-hover:scale-110 transition-transform" />,
    label: 'LinkedIn',
    tooltip: 'linkedin.com/in/divyansh-singh-a33976255',
    external: true,
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-background border-t border-border relative">
      {/* Up Arrow to Hero */}
      <button
        onClick={() => {
          const el = document.getElementById('hero');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Scroll to Top"
        className="absolute left-1/2 -top-6 -translate-x-1/2 z-20 bg-background/80 rounded-full p-2 shadow-lg hover:bg-primary hover:text-background transition-colors border border-primary"
      >
        <svg className="w-7 h-7 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 gap-16 max-w-4xl mx-auto text-center">
          {/* Contact Information in a row with names below icons */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-primary mb-8">Contact</h3>
            <div className="flex flex-row justify-center items-end gap-12">
              {contactLinks.map((item) => (
                <div key={item.label} className="flex flex-col items-center group relative">
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.icon}
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded bg-foreground text-background text-xs font-medium opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-10 shadow-lg">
                      {item.tooltip}
                    </span>
                  </a>
                  <span className="mt-2 text-xs text-muted-foreground group-hover:text-primary transition-colors font-semibold tracking-wide uppercase">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-border text-center text-muted-foreground">
          <p className="text-base">© {new Date().getFullYear()} Divyansh Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;