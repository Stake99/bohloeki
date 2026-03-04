/**
 * AnimatedCounter Component
 * Animated number counter that triggers when entering the viewport
 * Validates: Requirements 12.3, 16.1
 */

'use client';

import React, { useState, useEffect, useRef } from 'react';

/**
 * AnimatedCounter component props interface
 * @property value - Target number to count to
 * @property duration - Animation duration in milliseconds (default: 2000)
 * @property suffix - Optional suffix to append (e.g., "L", "%", "+")
 * @property prefix - Optional prefix to prepend (e.g., "$", "#")
 * @property decimals - Number of decimal places to display (default: 0)
 */
export interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

/**
 * Easing function for smooth counter animation
 * Uses ease-out quad for natural deceleration
 * @param t - Progress value between 0 and 1
 * @returns Eased value between 0 and 1
 */
const easeOutQuad = (t: number): number => {
  return t * (2 - t);
};

/**
 * AnimatedCounter component with viewport trigger and smooth animation
 */
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0,
}) => {
  const [count, setCount] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const counterRef = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Set up Intersection Observer for viewport trigger
  useEffect(() => {
    if (!counterRef.current || hasAnimated) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px',
      }
    );

    observerRef.current.observe(counterRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasAnimated]);

  // Animate counter when visible
  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    const startTime = Date.now();
    const startValue = 0;
    const endValue = value;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const currentValue = startValue + (endValue - startValue) * easedProgress;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
        setHasAnimated(true);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, hasAnimated, value, duration]);

  // Format the displayed value
  const formattedValue = count.toFixed(decimals);
  const displayValue = `${prefix}${formattedValue}${suffix}`;

  return (
    <span
      ref={counterRef}
      className="tabular-nums"
      aria-live="polite"
      aria-atomic="true"
      aria-label={`${prefix}${value.toFixed(decimals)}${suffix}`}
    >
      {displayValue}
    </span>
  );
};

AnimatedCounter.displayName = 'AnimatedCounter';
