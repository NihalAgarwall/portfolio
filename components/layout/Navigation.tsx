'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Work', href: '#work' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-gold/15 ${
          scrolled ? 'py-6 bg-noir/95 backdrop-blur-3xl' : 'py-9 bg-noir/40 backdrop-blur-3xl'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-8 md:px-24 flex justify-between items-center">
          <Link href="/" className="group">
            <div className="flex items-center gap-4">
              <div className="font-playfair text-3xl md:text-4xl font-black tracking-wider">
                <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent group-hover:from-gold-light group-hover:to-gold-dark transition-all duration-500">
                  NA
                </span>
              </div>
              <div className="hidden md:block border-l border-gold/30 pl-4">
                <div className="text-xs tracking-[0.3em] uppercase text-platinum font-semibold">
                  Nihal Agrawal
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-gold/70">
                  Full-Stack Developer
                </div>
              </div>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-12 lg:gap-16">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-platinum text-xs lg:text-sm tracking-[0.2em] uppercase font-semibold relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
          >
            <span className={`w-6 h-0.5 bg-gold transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-gold transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-gold transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-noir/98 backdrop-blur-3xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-4xl font-playfair font-black text-platinum hover:text-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
