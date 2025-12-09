import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-0 right-0 z-50 mx-auto w-[95%] max-w-5xl rounded-full border transition-all duration-300 ${
          isScrolled
            ? 'border-white/10 bg-black/50 backdrop-blur-xl dark:border-white/10 dark:bg-black/50 bg-white/70 border-black/5'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="flex h-14 items-center justify-between px-6">
          {/* Logo */}
          <a href="#" className="text-lg font-bold tracking-tight text-foreground">
            True Hives
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-surface/50 dark:bg-white/5 rounded-full px-2 py-1 border border-black/5 dark:border-white/5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-foreground hover:bg-white/10 dark:hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="group relative flex h-9 w-14 items-center rounded-full bg-zinc-200 p-1 transition-colors dark:bg-zinc-800"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                className={`flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm ${isDark ? 'translate-x-5' : 'translate-x-0'}`}
              >
                {isDark ? (
                  <Moon className="h-4 w-4 text-zinc-900" />
                ) : (
                  <Sun className="h-4 w-4 text-amber-500" />
                )}
              </motion.div>
            </button>
            <button className="rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition-transform hover:scale-105 active:scale-95">
              Book a Call
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 p-2 text-foreground"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="flex flex-col items-center gap-8 text-2xl font-medium">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-4 mt-8">
                 <button
                  onClick={() => { toggleTheme(); }}
                  className="rounded-full border border-border p-4"
                >
                  {isDark ? <Moon /> : <Sun />}
                </button>
              </div>
              <button className="mt-4 rounded-full bg-foreground px-8 py-3 text-lg font-bold text-background">
                Book a Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
