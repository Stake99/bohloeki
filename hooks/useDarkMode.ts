'use client';

import { useEffect, useState } from 'react';

/**
 * Hook for dark mode management
 */
export function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    // Check localStorage
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      setIsDark(stored === 'true');
    }

    const handler = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('darkMode') === null) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggle = () => {
    setIsDark((prev) => {
      const newValue = !prev;
      localStorage.setItem('darkMode', String(newValue));
      return newValue;
    });
  };

  return { isDark, toggle };
}
