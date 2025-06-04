import { motion } from 'framer-motion';
import { Home, FolderKanban, BadgePercent, Mail } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Home', icon: Home },
  { href: '#projects', label: 'Projects', icon: FolderKanban },
  { href: '#skills', label: 'Skills', icon: BadgePercent },
  { href: '#contact', label: 'Contact', icon: Mail },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-6 right-0 z-50 rounded-l-full rounded-r-none bg-background/70 backdrop-blur-md shadow-lg border border-border border-r-0 px-6 py-2 flex gap-2 items-center justify-center"
      style={{ minWidth: 260, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
    >
      {navLinks.map(({ href, label, icon: Icon }) => (
        <a
          key={href}
          href={href}
          className="group flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:bg-primary/10"
        >
          <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">{label}</span>
        </a>
      ))}
    </motion.nav>
  );
};

export default Navbar; 