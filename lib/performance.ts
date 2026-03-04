/**
 * Performance optimization utilities
 * Ensures 3D and animations maintain 60fps
 */

/**
 * Check if device can handle 3D rendering
 */
export function canHandle3D(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check for WebGL support
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  
  if (!gl) return false;
  
  // Check device capabilities
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  
  // Disable 3D on low-end mobile devices
  if (isMobile && isLowEnd) return false;
  
  return true;
}

/**
 * Get optimal animation settings based on device
 */
export function getAnimationSettings() {
  if (typeof window === 'undefined') {
    return { reducedMotion: false, enable3D: false };
  }
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;
  
  return {
    reducedMotion: prefersReducedMotion,
    enable3D: !isMobile && canHandle3D(),
    enableParallax: !prefersReducedMotion,
    enableHoverEffects: !isMobile,
  };
}

/**
 * Debounce function for performance
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for scroll events
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Lazy load images with Intersection Observer
 */
export function lazyLoadImage(img: HTMLImageElement) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target as HTMLImageElement;
        if (image.dataset.src) {
          image.src = image.dataset.src;
          image.classList.add('loaded');
          observer.unobserve(image);
        }
      }
    });
  });
  
  observer.observe(img);
}

/**
 * Preload critical assets
 */
export function preloadAssets(urls: string[]) {
  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    
    if (url.endsWith('.woff2') || url.endsWith('.woff')) {
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
    } else if (url.match(/\.(jpg|jpeg|png|webp|avif)$/)) {
      link.as = 'image';
    }
    
    link.href = url;
    document.head.appendChild(link);
  });
}

/**
 * Monitor performance metrics
 */
export function logPerformanceMetrics() {
  if (typeof window === 'undefined' || !window.performance) return;
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      const connectTime = perfData.responseEnd - perfData.requestStart;
      const renderTime = perfData.domComplete - perfData.domLoading;
      
      console.log('Performance Metrics:', {
        pageLoadTime: `${pageLoadTime}ms`,
        connectTime: `${connectTime}ms`,
        renderTime: `${renderTime}ms`,
      });
      
      // Log Core Web Vitals if available
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              console.log('Web Vital:', entry.name, entry);
            }
          });
          
          observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
        } catch {
          // PerformanceObserver not supported
        }
      }
    }, 0);
  });
}
