'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationLinks } from '@/lib/constants';
import { Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { DarkModeToggle } from '@/components/ui/DarkModeToggle';
import Image from 'next/image';

export interface HeaderProps {
  className?: string;
}

export function Header({ className = '' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary-forestDark/90 backdrop-blur-xl shadow-lg border-b border-white/10'
          : 'bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm'
      } ${className}`}
    >
      <nav className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-transform hover:scale-105 duration-300"
          >
            <Image
              src="/images/logo.png"
              alt="Bohloeki Enterprises"
              width={150}
              height={45}
              priority
              className={`transition-all duration-300 ${
                isScrolled ? 'brightness-0 invert' : ''
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="relative group px-4 py-2 rounded-lg overflow-hidden"
                  aria-current={isActiveLink(link.href) ? 'page' : undefined}
                >
                  {/* Hover background effect - Glassy Yellow/Gold */}
                  {!isActiveLink(link.href) && (
                    <motion.span
                      className="absolute inset-0 rounded-lg backdrop-blur-sm"
                      style={{
                        backgroundColor: 'rgba(212, 175, 55, 0.25)',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: 'rgba(229, 193, 88, 0.4)',
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Active background - Gold/White */}
                  {isActiveLink(link.href) && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg backdrop-blur-sm bg-accent-gold/30 border border-accent-gold/50"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Text */}
                  <motion.span
                    className={`relative text-sm font-medium transition-colors ${
                      isActiveLink(link.href)
                        ? 'text-white font-semibold'
                        : 'text-white/90 group-hover:text-accent-goldLight group-hover:font-semibold'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.span>
                  
                  {/* Underline animation - Only for hover, not active */}
                  {!isActiveLink(link.href) && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-goldLight"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0.5 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            
            {/* Dark Mode Toggle */}
            <div className="ml-4">
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            className="lg:hidden p-2 rounded-lg transition-all text-white hover:bg-white/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navigationLinks}
        activeHref={pathname}
      />
    </motion.header>
  );
}
