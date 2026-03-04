'use client';

import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '@/hooks';
import { motion } from 'framer-motion';

/**
 * Dark mode toggle button with smooth transition
 */
export function DarkModeToggle() {
  const { isDark, toggle } = useDarkMode();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
      className="relative p-3 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/30 transition-colors"
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-gray-100" />
        ) : (
          <Sun className="w-5 h-5 text-gray-900" />
        )}
      </motion.div>
    </motion.button>
  );
}
