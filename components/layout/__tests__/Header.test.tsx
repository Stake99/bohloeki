import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../Header';
import { navigationLinks } from '@/lib/constants';
import * as navigation from 'next/navigation';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock MobileMenu component
jest.mock('../MobileMenu', () => ({
  MobileMenu: ({ isOpen, onClose, links, activeHref }: any) => (
    <div data-testid="mobile-menu" data-open={isOpen}>
      {isOpen && (
        <div>
          <button onClick={onClose}>Close</button>
          {links.map((link: any) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeHref === link.href ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  ),
}));

describe('Header Component - Navigation Behavior', () => {
  beforeEach(() => {
    // Reset window.scrollY before each test
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Desktop Viewport - Horizontal Menu (>= 1024px)', () => {
    beforeEach(() => {
      // Set viewport to desktop size
      global.innerWidth = 1024;
      global.innerHeight = 768;
    });

    it('should display horizontal navigation menu on desktop viewport', () => {
      render(<Header />);
      
      // Desktop navigation should be present (hidden lg:flex)
      const nav = screen.getByRole('navigation');
      const desktopNav = nav.querySelector('.lg\\:flex');
      
      expect(desktopNav).toBeInTheDocument();
    });

    it('should display all navigation links in horizontal menu', () => {
      render(<Header />);
      
      navigationLinks.forEach((link) => {
        const navLink = screen.getByRole('link', { name: link.label });
        expect(navLink).toBeInTheDocument();
        expect(navLink).toHaveAttribute('href', link.href);
      });
    });

    it('should hide hamburger menu button on desktop viewport', () => {
      render(<Header />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      
      // Button should have lg:hidden class
      expect(menuButton).toHaveClass('lg:hidden');
    });

    it('should display navigation links with proper styling', () => {
      render(<Header />);
      
      const homeLink = screen.getByRole('link', { name: 'Home' });
      
      expect(homeLink).toHaveClass('text-sm');
      expect(homeLink).toHaveClass('font-medium');
      expect(homeLink).toHaveClass('transition-colors');
    });

    it('should highlight active link on desktop', () => {
      const usePathname = jest.mocked(navigation.usePathname);
      usePathname.mockReturnValue('/about');
      
      render(<Header />);
      
      const aboutLink = screen.getByRole('link', { name: 'About' });
      
      expect(aboutLink).toHaveAttribute('aria-current', 'page');
    });

    it('should display active link indicator for current page', () => {
      const usePathname = jest.mocked(navigation.usePathname);
      usePathname.mockReturnValue('/');
      
      render(<Header />);
      
      const homeLink = screen.getByRole('link', { name: 'Home' });
      const indicator = homeLink.querySelector('span[aria-hidden="true"]');
      
      expect(indicator).toBeInTheDocument();
    });

    it('should show all seven navigation links', () => {
      render(<Header />);
      
      expect(navigationLinks).toHaveLength(7);
      
      const links = screen.getAllByRole('link');
      const navLinkLabels = navigationLinks.map((link) => link.label);
      
      navLinkLabels.forEach((label) => {
        const link = links.find((l) => l.textContent === label);
        expect(link).toBeDefined();
      });
    });
  });

  describe('Mobile Viewport - Hamburger Menu (< 1024px)', () => {
    beforeEach(() => {
      // Set viewport to mobile size
      global.innerWidth = 375;
      global.innerHeight = 667;
    });

    it('should display hamburger menu button on mobile viewport', () => {
      render(<Header />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      
      expect(menuButton).toBeInTheDocument();
      expect(menuButton).toHaveClass('lg:hidden');
    });

    it('should hide horizontal navigation on mobile viewport', () => {
      render(<Header />);
      
      const nav = screen.getByRole('navigation');
      const desktopNav = nav.querySelector('.hidden.lg\\:flex');
      
      expect(desktopNav).toBeInTheDocument();
      expect(desktopNav).toHaveClass('hidden');
    });

    it('should display menu icon in hamburger button', () => {
      render(<Header />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      const menuIcon = menuButton.querySelector('svg');
      
      expect(menuIcon).toBeInTheDocument();
      expect(menuIcon).toHaveClass('h-6');
      expect(menuIcon).toHaveClass('w-6');
    });

    it('should have proper ARIA attributes on hamburger button', () => {
      render(<Header />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      
      expect(menuButton).toHaveAttribute('aria-label', 'Open menu');
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
      expect(menuButton).toHaveAttribute('aria-controls', 'mobile-menu');
    });

    it('should update aria-expanded when menu is opened', () => {
      render(<Header />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
      
      fireEvent.click(menuButton);
      
      expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('Mobile Menu Open/Close Functionality', () => {
    beforeEach(() => {
      // Set viewport to mobile size
      global.innerWidth = 375;
      global.innerHeight = 667;
    });

    it('should open mobile menu when hamburger button is clicked', () => {
      render(<Header />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      const mobileMenu = screen.getByTestId('mobile-menu');
      
      expect(mobileMenu).toHaveAttribute('data-open', 'false');
      
      fireEvent.click(menuButton);
      
      expect(mobileMenu).toHaveAttribute('data-open', 'true');
    });

    it('should close mobile menu when close button is clicked', () => {
      render(<Header />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      
      // Open menu
      fireEvent.click(menuButton);
      
      const mobileMenu = screen.getByTestId('mobile-menu');
      expect(mobileMenu).toHaveAttribute('data-open', 'true');
      
      // Close menu
      const closeButton = screen.getByRole('button', { name: /close/i });
      fireEvent.click(closeButton);
      
      expect(mobileMenu).toHaveAttribute('data-open', 'false');
    });

    it('should toggle mobile menu state on multiple clicks', () => {
      render(<Header />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      const mobileMenu = screen.getByTestId('mobile-menu');
      
      // Initially closed
      expect(mobileMenu).toHaveAttribute('data-open', 'false');
      
      // Open
      fireEvent.click(menuButton);
      expect(mobileMenu).toHaveAttribute('data-open', 'true');
      
      // Close
      fireEvent.click(menuButton);
      expect(mobileMenu).toHaveAttribute('data-open', 'false');
      
      // Open again
      fireEvent.click(menuButton);
      expect(mobileMenu).toHaveAttribute('data-open', 'true');
    });

    it('should pass navigation links to mobile menu', () => {
      render(<Header />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      fireEvent.click(menuButton);
      
      // Check that all navigation links are passed to mobile menu
      // Use getAllByRole since links appear in both desktop and mobile menus
      navigationLinks.forEach((link) => {
        const navLinks = screen.getAllByRole('link', { name: link.label });
        // Should have at least one link (could be in desktop nav and mobile menu)
        expect(navLinks.length).toBeGreaterThanOrEqual(1);
        // Check that at least one has the correct href
        const linkWithHref = navLinks.find((l) => l.getAttribute('href') === link.href);
        expect(linkWithHref).toBeDefined();
      });
    });

    it('should pass current pathname to mobile menu for active link highlighting', () => {
      const usePathname = jest.mocked(navigation.usePathname);
      usePathname.mockReturnValue('/services');
      
      render(<Header />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      fireEvent.click(menuButton);
      
      // Use getAllByRole since links appear in both desktop and mobile menus
      const servicesLinks = screen.getAllByRole('link', { name: 'Services' });
      // At least one should have aria-current="page"
      const activeLink = servicesLinks.find((link) => link.getAttribute('aria-current') === 'page');
      expect(activeLink).toBeDefined();
    });

    it('should maintain menu state independently', () => {
      render(<Header />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      const mobileMenu = screen.getByTestId('mobile-menu');
      
      // Open menu
      fireEvent.click(menuButton);
      expect(mobileMenu).toHaveAttribute('data-open', 'true');
      
      // Menu should stay open until explicitly closed
      expect(mobileMenu).toHaveAttribute('data-open', 'true');
    });
  });

  describe('Responsive Behavior', () => {
    it('should have responsive container with max-width', () => {
      render(<Header />);
      
      const nav = screen.getByRole('navigation');
      
      expect(nav).toHaveClass('mx-auto');
      expect(nav).toHaveClass('max-w-screen-xl');
    });

    it('should have responsive padding', () => {
      render(<Header />);
      
      const nav = screen.getByRole('navigation');
      
      expect(nav).toHaveClass('px-4');
      expect(nav).toHaveClass('sm:px-6');
      expect(nav).toHaveClass('lg:px-8');
    });

    it('should have responsive header height', () => {
      render(<Header />);
      
      const nav = screen.getByRole('navigation');
      const container = nav.querySelector('div');
      
      expect(container).toHaveClass('h-16');
      expect(container).toHaveClass('lg:h-20');
    });
  });

  describe('Requirements Validation', () => {
    it('should satisfy Requirement 3.3: horizontal menu on desktop viewport', () => {
      global.innerWidth = 1024;
      render(<Header />);
      
      const nav = screen.getByRole('navigation');
      const desktopNav = nav.querySelector('.lg\\:flex');
      
      expect(desktopNav).toBeInTheDocument();
      
      navigationLinks.forEach((link) => {
        const navLink = screen.getByRole('link', { name: link.label });
        expect(navLink).toBeInTheDocument();
      });
    });

    it('should satisfy Requirement 3.4: hamburger menu on mobile viewport', () => {
      global.innerWidth = 375;
      render(<Header />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      
      expect(menuButton).toBeInTheDocument();
      expect(menuButton).toHaveClass('lg:hidden');
    });

    it('should satisfy mobile menu open/close functionality', () => {
      global.innerWidth = 375;
      render(<Header />);
      
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      const mobileMenu = screen.getByTestId('mobile-menu');
      
      // Initially closed
      expect(mobileMenu).toHaveAttribute('data-open', 'false');
      
      // Open on click
      fireEvent.click(menuButton);
      expect(mobileMenu).toHaveAttribute('data-open', 'true');
      
      // Close on click
      const closeButton = screen.getByRole('button', { name: /close/i });
      fireEvent.click(closeButton);
      expect(mobileMenu).toHaveAttribute('data-open', 'false');
    });
  });
});
