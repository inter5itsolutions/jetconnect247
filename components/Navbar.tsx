import { useState, useEffect, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Fleet', path: '/fleet' },
  { name: 'Services', path: '/services' },
  { name: 'Training', path: '/training' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const atTop = !isScrolled;

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 lg:px-12',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm'
            : isHome
              ? 'bg-transparent'
              : 'bg-white border-b border-gray-100'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 lg:h-22">
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src="/assets/logo2.png"
              alt="JetConnect247"
              className={cn(
                'h-5 lg:h-6 w-auto transition-all duration-500',
                atTop && isHome ? 'brightness-0 invert' : ''
              )}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => cn(
                  'relative px-3 xl:px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300',
                  isActive
                    ? cn(
                        'text-brand-silver-blue',
                        atTop && isHome ? 'bg-white/30 text-white' : 'bg-brand-silver-blue/90 text-white'
                      )
                    : cn(
                        'hover:text-brand-silver-blue',
                        atTop && isHome ? 'text-white/70 hover:text-white hover:bg-white/40' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      )
                )}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="ml-4 pl-4 border-l border-gray-200">
              <Link
                to="/quote"
                className={cn(
                  'inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300',
                  atTop && isHome
                    ? 'bg-white text-gray-900 hover:bg-brand-silver-blue hover:text-white shadow-lg shadow-black/10'
                    : 'bg-brand-silver-blue text-white hover:bg-accent-blue shadow-lg shadow-brand-silver-blue/20'
                )}
              >
                <PhoneCall className="w-4 h-4" />
                Request Quote
              </Link>
            </div>
          </div>

          {/* Mobile/Tablet toggle */}
          <button
            className={cn(
              'lg:hidden relative z-50 p-2.5 rounded-xl transition-colors active:scale-90',
              isOpen ? 'text-gray-900' : atTop && isHome ? 'text-white' : 'text-gray-700'
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <div className="relative w-6 h-5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                className="absolute left-0 top-0 w-full h-0.5 rounded-full bg-current origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                className="absolute left-0 top-2.25 w-full h-0.5 rounded-full bg-current"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                className="absolute left-0 bottom-0 w-full h-0.5 rounded-full bg-current origin-center"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/98 backdrop-blur-sm"
            />

            {/* Menu content */}
            <div className="relative h-full flex flex-col px-6 pt-24 pb-8 overflow-y-auto">
              <nav className="flex-1 flex flex-col gap-1.5 max-w-lg mx-auto w-full">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => cn(
                        'flex items-center justify-between px-5 py-3.5 rounded-xl text-base font-medium transition-all group',
                        isActive
                          ? 'bg-brand-silver-blue/10 text-brand-silver-blue'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      )}
                    >
                      {link.name}
                      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-brand-silver-blue transition-colors" />
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="max-w-lg mx-auto w-full space-y-3 pt-6 border-t border-gray-100 mt-6">
                <Link
                  to="/quote"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 w-full bg-brand-silver-blue text-white py-3.5 rounded-xl font-bold text-sm tracking-wide hover:bg-accent-blue transition-all shadow-lg shadow-brand-silver-blue/20 active:scale-[0.98]"
                >
                  <PhoneCall className="w-4 h-4" />
                  Request a Quote
                </Link>
                <a
                  href="tel:+234800JET247"
                  className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors py-2"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  +234 (0) 800 JET 247
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
