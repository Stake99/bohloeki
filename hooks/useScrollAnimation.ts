'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook for GSAP scroll-triggered animations
 */
export function useScrollAnimation<T extends HTMLElement>(
  animationConfig: gsap.TweenVars,
  scrollConfig?: ScrollTrigger.Vars
) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(elementRef.current, {
        ...animationConfig,
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          ...scrollConfig,
        },
      });
    });

    return () => ctx.revert();
  }, [animationConfig, scrollConfig]);

  return elementRef;
}
