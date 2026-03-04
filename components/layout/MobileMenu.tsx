'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { NavLink } from '@/lib/constants';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  activeHref?: string;
}

export function MobileMenu({
  isOpen,
  onClose,
  links,
  activeHref,
}: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;

    const focusableElements = menuRef.current?.querySelectorAll<HTMLElement>(
      'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus the close button when menu opens
    closeButtonRef.current?.focus();

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActiveLink = (href: string) => {
    if (!activeHref) return false;
    if (href === '/') {
      return activeHref === '/';
    }
    return activeHref.startsWith(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <motion.div
            ref={menuRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 300,
            }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gradient-to-br from-white via-gray-50 to-accent-goldLight/30 backdrop-blur-xl shadow-2xl border-l-4 border-accent-gold z-50 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b-2 border-accent-gold/30">
              <h2 className="text-2xl font-bold text-primary-forestDark">Menu</h2>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="p-2 rounded-lg bg-accent-gold/20 text-primary-forestDark hover:bg-accent-gold/40 transition-all hover:scale-110"
                aria-label="Close menu"
              >
                <X className="h-7 w-7" aria-hidden="true" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-6" aria-label="Mobile navigation">
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`block px-6 py-4 rounded-xl text-lg font-bold transition-all ${
                        isActiveLink(link.href)
                          ? 'bg-gradient-to-r from-accent-gold to-accent-goldLight text-primary-forestDark shadow-xl shadow-accent-gold/30 scale-105'
                          : 'bg-white text-primary-forestDark hover:bg-accent-gold/20 hover:translate-x-2 hover:shadow-lg border-2 border-gray-200 hover:border-accent-gold/50'
                      }`}
                      aria-current={isActiveLink(link.href) ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
