"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/about', label: 'Tentang' },
  { href: '/projects', label: 'Proyek' },
  { href: '/contact', label: 'Kontak' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleToggleMobileMenu();
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'py-3 bg-background/80 backdrop-blur-md border-b border-border-light'
          : 'py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gradient-primary"
            >
              Surreal<span className="text-gradient-secondary">Dreamscape</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                active={pathname === link.href}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="ml-4">
              <Button
                variant="primary"
                size="sm"
                glowEffect="primary"
                className="ml-2"
              >
                Hubungi Saya
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
              className="relative z-10 p-2 focus:outline-none"
              onClick={handleToggleMobileMenu}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              <div className="w-6 flex flex-col items-end justify-center gap-1.5">
                <span
                  className={cn(
                    'block h-0.5 bg-foreground transition-all duration-300',
                    isMobileMenuOpen
                      ? 'w-6 translate-y-2 rotate-45'
                      : 'w-6'
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 bg-foreground transition-all duration-300',
                    isMobileMenuOpen ? 'opacity-0' : 'w-4 opacity-100'
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 bg-foreground transition-all duration-300',
                    isMobileMenuOpen
                      ? 'w-6 -translate-y-2 -rotate-45'
                      : 'w-5'
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'calc(100vh - 4rem)' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={cn(
          'md:hidden fixed inset-x-0 top-16 bg-background/95 backdrop-blur-lg overflow-hidden z-40 border-b border-border-light'
        )}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center space-y-6 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'py-2 px-4 rounded-full transition-all duration-300',
                  pathname === link.href
                    ? 'text-primary font-medium'
                    : 'text-foreground hover:text-primary'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="primary"
              size="md"
              glowEffect="primary"
              className="mt-4 w-full"
            >
              Hubungi Saya
            </Button>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink = ({ href, active, children }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'relative py-2 px-4 rounded-full transition-all duration-300 hover:text-primary',
        active ? 'text-primary' : 'text-foreground'
      )}
    >
      {active && (
        <motion.span
          layoutId="activeNavIndicator"
          className="absolute inset-0 rounded-full bg-foreground/5 border border-border-light"
          transition={{ type: 'spring', duration: 0.6 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </Link>
  );
};

export default Navbar; 