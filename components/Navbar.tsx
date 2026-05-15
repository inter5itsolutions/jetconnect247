import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Plane, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Fleet', path: '/fleet' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12',
        isScrolled ? 'bg-white/90 backdrop-blur-md py-3 border-b border-gray-200 shadow-sm' : 'bg-white/60 shadow-md'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/assets/logo.png" alt="JetConnect247" className="h-10 w-auto" />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter leading-none text-brand-white">JETCONNECT<span className="text-brand-silver-blue">247</span></span>
            <span className="text-[10px] tracking-[0.2em] text-brand-soft-silver uppercase font-medium">Aviation Excellence</span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <NavLink key={link.name} to={link.path}
              className={({ isActive }) => cn('text-sm font-medium tracking-wide transition-colors hover:text-brand-silver-blue', isActive ? 'text-brand-silver-blue' : 'text-brand-soft-silver/80')}>
              {link.name}
            </NavLink>
          ))}
          <Link to="/quote" className="bg-brand-silver-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-accent-blue transition-all flex items-center gap-2">
            <PhoneCall className="w-4 h-4" />
            Request Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg p-6 md:hidden flex flex-col gap-4">
            {navLinks.map(link => (
              <Link key={link.name} to={link.path} className="text-lg font-medium py-2 border-b border-gray-100 text-brand-white" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
            <Link to="/quote" className="mt-4 bg-brand-silver-blue text-white p-4 rounded-xl text-center font-bold" onClick={() => setIsOpen(false)}>
              Request Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
