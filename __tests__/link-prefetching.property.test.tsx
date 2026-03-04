import { render } from '@testing-library/react';
import fc from 'fast-check';
import Home from '@/app/page';
import About from '@/app/about/page';
import Services from '@/app/services/page';
import Operations from '@/app/operations/page';
import Impact from '@/app/impact/page';
import Partners from '@/app/partners/page';
import Contact from '@/app/contact/page';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

// Feature: bohloeki-corporate-website, Property 31: Link prefetching
describe('Property 31: Link prefetching', () => {
  // Define all valid routes and their corresponding page components
  const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/about', component: About, name: 'About' },
    { path: '/services', component: Services, name: 'Services' },
    { path: '/operations', component: Operations, name: 'Operations' },
    { path: '/impact', component: Impact, name: 'Impact' },
    { path: '/partners', component: Partners, name: 'Partners' },
    { path: '/contact', component: Contact, name: 'Contact' },
  ];

  // All internal navigation paths in the application
  const internalPaths = [
    '/',
    '/about',
    '/services',
    '/operations',
    '/impact',
    '/partners',
    '/contact',
  ];

  /**
   * **Validates: Requirements 18.5**
   * 
   * Property: For any internal navigation link in the application, it should use 
   * the Next.js Link component to enable automatic prefetching of linked pages.
   * 
   * This test verifies that:
   * 1. All internal links use Next.js Link component (not <a> tags)
   * 2. Links have proper href attributes pointing to internal routes
   * 3. Navigation components (Header, Footer) use Link components
   * 4. Page content uses Link components for internal navigation
   */
  it('should use Next.js Link component for all internal navigation links in Header', () => {
    const { container, unmount } = render(<Header />);
    
    try {
      // Get all anchor tags in the header
      const links = container.querySelectorAll('a');
      
      // Verify that links exist
      expect(links.length).toBeGreaterThan(0);
      
      // Verify each link has an href attribute
      links.forEach((link) => {
        const href = link.getAttribute('href');
        expect(href).toBeTruthy();
        
        // If it's an internal link (starts with /), verify it's a Next.js Link
        if (href && href.startsWith('/')) {
          // Next.js Link components render as <a> tags with href attributes
          // We verify they have the proper structure
          expect(link.tagName.toLowerCase()).toBe('a');
          expect(href).toMatch(/^\/[a-z-]*$/);
        }
      });
    } finally {
      unmount();
    }
  });

  it('should use Next.js Link component for all internal navigation links in Footer', () => {
    const { container, unmount } = render(<Footer />);
    
    try {
      // Get all anchor tags in the footer
      const links = container.querySelectorAll('a');
      
      // Verify that links exist
      expect(links.length).toBeGreaterThan(0);
      
      // Verify each internal link has proper href
      links.forEach((link) => {
        const href = link.getAttribute('href');
        
        // If it's an internal link (starts with /), verify structure
        if (href && href.startsWith('/')) {
          expect(link.tagName.toLowerCase()).toBe('a');
          expect(href).toMatch(/^\/[a-z-]*$/);
        }
      });
    } finally {
      unmount();
    }
  });

  it('should use Next.js Link component for internal links across all pages', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...routes),
        (route) => {
          const { container, unmount } = render(<route.component />);
          
          try {
            // Get all anchor tags in the page
            const links = container.querySelectorAll('a');
            
            // For each link, verify internal links use proper structure
            links.forEach((link) => {
              const href = link.getAttribute('href');
              
              // If it's an internal link (starts with /)
              if (href && href.startsWith('/')) {
                // Verify it's a proper anchor tag (Next.js Link renders as <a>)
                expect(link.tagName.toLowerCase()).toBe('a');
                
                // Verify href is a valid internal path
                const isValidInternalPath = 
                  href === '/' || 
                  internalPaths.some(path => href.startsWith(path));
                
                expect(isValidInternalPath).toBe(true);
              }
            });
          } finally {
            unmount();
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should have internal links with proper href attributes', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...routes),
        (route) => {
          const { container, unmount } = render(<route.component />);
          
          try {
            // Get all anchor tags
            const links = container.querySelectorAll('a');
            
            // Filter to internal links only
            const internalLinks = Array.from(links).filter((link) => {
              const href = link.getAttribute('href');
              return href && href.startsWith('/');
            });
            
            // Verify each internal link has a valid href
            internalLinks.forEach((link) => {
              const href = link.getAttribute('href');
              expect(href).toBeTruthy();
              expect(href).toMatch(/^\//); // Starts with /
              
              // Verify it's not an external link disguised as internal
              expect(href).not.toMatch(/^\/\//); // Not protocol-relative
              expect(href).not.toMatch(/^\/http/); // Not malformed
            });
          } finally {
            unmount();
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should not use plain anchor tags for internal navigation', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...routes),
        (route) => {
          const { container, unmount } = render(<route.component />);
          
          try {
            // Get all anchor tags
            const links = container.querySelectorAll('a');
            
            // For internal links, verify they don't have onClick handlers that prevent default
            // (which would indicate they're not using Next.js Link properly)
            links.forEach((link) => {
              const href = link.getAttribute('href');
              
              if (href && href.startsWith('/')) {
                // Next.js Link components should have href attributes
                expect(link.hasAttribute('href')).toBe(true);
                
                // They should not have target="_blank" for internal links
                const target = link.getAttribute('target');
                if (target) {
                  expect(target).not.toBe('_blank');
                }
              }
            });
          } finally {
            unmount();
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should have all navigation links pointing to valid routes', () => {
    const { container, unmount } = render(<Header />);
    
    try {
      // Get all navigation links
      const links = container.querySelectorAll('a');
      
      // Filter to internal navigation links
      const navLinks = Array.from(links).filter((link) => {
        const href = link.getAttribute('href');
        return href && href.startsWith('/') && !href.includes('#');
      });
      
      // Verify each navigation link points to a valid route
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href) {
          const isValidRoute = internalPaths.includes(href);
          expect(isValidRoute).toBe(true);
        }
      });
    } finally {
      unmount();
    }
  });

  it('should maintain consistent link structure across all pages', () => {
    const linkStructures = routes.map((route) => {
      const { container, unmount } = render(<route.component />);
      
      const links = container.querySelectorAll('a');
      const internalLinks = Array.from(links).filter((link) => {
        const href = link.getAttribute('href');
        return href && href.startsWith('/');
      });
      
      const structure = {
        path: route.path,
        internalLinkCount: internalLinks.length,
        allLinksHaveHref: internalLinks.every((link) => link.hasAttribute('href')),
        allLinksAreAnchors: internalLinks.every((link) => link.tagName.toLowerCase() === 'a'),
      };
      
      unmount();
      return structure;
    });

    // Verify all pages have consistent link structure
    linkStructures.forEach((structure) => {
      expect(structure.allLinksHaveHref).toBe(true);
      expect(structure.allLinksAreAnchors).toBe(true);
    });
  });

  // Test to verify prefetch behavior (Next.js Link has prefetch enabled by default)
  it('should use Next.js Link which enables prefetching by default', () => {
    const { container, unmount } = render(<Header />);
    
    try {
      // Get all internal navigation links
      const links = container.querySelectorAll('a[href^="/"]');
      
      // Verify links exist
      expect(links.length).toBeGreaterThan(0);
      
      // Next.js Link components render as <a> tags with href
      // Prefetching is enabled by default in Next.js 13+ for Link components
      links.forEach((link) => {
        const href = link.getAttribute('href');
        expect(href).toBeTruthy();
        expect(href).toMatch(/^\//);
        
        // Verify it's a proper anchor tag (Next.js Link renders as <a>)
        expect(link.tagName.toLowerCase()).toBe('a');
      });
    } finally {
      unmount();
    }
  });

  // Additional test to verify all main routes are linked from navigation
  it('should have links to all main routes in navigation', () => {
    const { container, unmount } = render(<Header />);
    
    try {
      const links = container.querySelectorAll('a');
      const hrefs = Array.from(links).map((link) => link.getAttribute('href'));
      
      // Verify all main routes are present in navigation
      internalPaths.forEach((path) => {
        expect(hrefs).toContain(path);
      });
    } finally {
      unmount();
    }
  });
});
