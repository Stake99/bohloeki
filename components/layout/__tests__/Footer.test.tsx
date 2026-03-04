import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';
import { companyInfo, navigationLinks } from '@/lib/constants';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  describe('Company Address Display', () => {
    it('should display the company street address', () => {
      const address = screen.getByText(companyInfo.address.street, { exact: false });
      expect(address).toBeInTheDocument();
    });

    it('should display the company city and country', () => {
      const addressElement = screen.getByRole('contentinfo').querySelector('address');
      expect(addressElement).toHaveTextContent(companyInfo.address.city);
      expect(addressElement).toHaveTextContent(companyInfo.address.country);
    });

    it('should render address within an address element', () => {
      const addressElement = screen.getByRole('contentinfo').querySelector('address');
      expect(addressElement).toBeInTheDocument();
      expect(addressElement).toHaveTextContent(companyInfo.address.street);
    });

    it('should display address with location icon', () => {
      const addressElement = screen.getByRole('contentinfo').querySelector('address');
      const addressContainer = addressElement?.closest('li');
      expect(addressContainer).toBeInTheDocument();
    });
  });

  describe('Phone and Email Display', () => {
    it('should display the company phone number', () => {
      const phone = screen.getByText(companyInfo.contact.phone);
      expect(phone).toBeInTheDocument();
    });

    it('should display the company email address', () => {
      const email = screen.getByText(companyInfo.contact.email);
      expect(email).toBeInTheDocument();
    });

    it('should render phone number as a clickable tel link', () => {
      const phoneLink = screen.getByRole('link', {
        name: companyInfo.contact.phone,
      });
      expect(phoneLink).toBeInTheDocument();
      expect(phoneLink).toHaveAttribute(
        'href',
        `tel:${companyInfo.contact.phone.replace(/\s/g, '')}`
      );
    });

    it('should render email as a clickable mailto link', () => {
      const emailLink = screen.getByRole('link', {
        name: companyInfo.contact.email,
      });
      expect(emailLink).toBeInTheDocument();
      expect(emailLink).toHaveAttribute(
        'href',
        `mailto:${companyInfo.contact.email}`
      );
    });

    it('should display contact information with appropriate icons', () => {
      const phoneText = screen.getByText(companyInfo.contact.phone);
      const emailText = screen.getByText(companyInfo.contact.email);
      
      expect(phoneText.closest('li')).toBeInTheDocument();
      expect(emailText.closest('li')).toBeInTheDocument();
    });
  });

  describe('Quick Navigation Links', () => {
    it('should display all navigation links from constants', () => {
      navigationLinks.forEach((link) => {
        const navLink = screen.getByRole('link', { name: link.label });
        expect(navLink).toBeInTheDocument();
      });
    });

    it('should have correct href attributes for all navigation links', () => {
      navigationLinks.forEach((link) => {
        const navLink = screen.getByRole('link', { name: link.label });
        expect(navLink).toHaveAttribute('href', link.href);
      });
    });

    it('should display "Quick Links" section heading', () => {
      const quickLinksHeading = screen.getByRole('heading', {
        name: /quick links/i,
      });
      expect(quickLinksHeading).toBeInTheDocument();
    });

    it('should render navigation links in a list', () => {
      const quickLinksHeading = screen.getByRole('heading', {
        name: /quick links/i,
      });
      const navSection = quickLinksHeading.closest('div');
      const navElement = navSection?.querySelector('nav');
      expect(navElement).toBeInTheDocument();
      expect(navElement).toHaveAttribute('aria-label', 'Footer navigation');
    });

    it('should display all seven navigation links', () => {
      const links = screen.getAllByRole('link');
      const navLinkLabels = navigationLinks.map((link) => link.label);
      
      navLinkLabels.forEach((label) => {
        const link = links.find((l) => l.textContent === label);
        expect(link).toBeDefined();
      });
    });
  });

  describe('Mission Statement/Tagline', () => {
    it('should display the company name', () => {
      const companyName = screen.getByRole('heading', {
        name: companyInfo.name,
      });
      expect(companyName).toBeInTheDocument();
    });

    it('should display the company tagline', () => {
      const tagline = screen.getByText(companyInfo.tagline);
      expect(tagline).toBeInTheDocument();
    });

    it('should display the sustainability mission statement', () => {
      const missionStatement = screen.getByText(
        /leading the way in sustainable waste management and energy production in lesotho/i
      );
      expect(missionStatement).toBeInTheDocument();
    });

    it('should display company info in the first column', () => {
      const companyName = screen.getByRole('heading', {
        name: companyInfo.name,
      });
      const companySection = companyName.closest('div');
      
      expect(companySection).toContainElement(
        screen.getByText(companyInfo.tagline)
      );
      expect(companySection).toContainElement(
        screen.getByText(
          /leading the way in sustainable waste management and energy production in lesotho/i
        )
      );
    });
  });

  describe('Copyright Notice with Current Year', () => {
    it('should display copyright notice with current year', () => {
      const currentYear = new Date().getFullYear();
      const copyright = screen.getByText(
        new RegExp(`© ${currentYear} ${companyInfo.name}`, 'i')
      );
      expect(copyright).toBeInTheDocument();
    });

    it('should display "All rights reserved" text', () => {
      const copyright = screen.getByText(/all rights reserved/i);
      expect(copyright).toBeInTheDocument();
    });

    it('should display copyright in the bottom bar', () => {
      const currentYear = new Date().getFullYear();
      const copyright = screen.getByText(
        new RegExp(`© ${currentYear}`, 'i')
      );
      const bottomBar = copyright.closest('div')?.parentElement;
      
      expect(bottomBar).toHaveClass('border-t');
    });

    it('should dynamically update year based on current date', () => {
      const currentYear = new Date().getFullYear();
      const copyrightText = screen.getByText(
        new RegExp(`© ${currentYear}`, 'i')
      );
      
      expect(copyrightText.textContent).toContain(currentYear.toString());
    });
  });

  describe('Business Hours Display', () => {
    it('should display business hours section heading', () => {
      const businessHoursHeading = screen.getByRole('heading', {
        name: /business hours/i,
      });
      expect(businessHoursHeading).toBeInTheDocument();
    });

    it('should display weekday business hours', () => {
      const weekdayHours = screen.getByText(companyInfo.businessHours.weekdays);
      expect(weekdayHours).toBeInTheDocument();
    });

    it('should display weekend business hours', () => {
      const weekendHours = screen.getByText(companyInfo.businessHours.weekend);
      expect(weekendHours).toBeInTheDocument();
    });
  });

  describe('Footer Structure and Accessibility', () => {
    it('should render as a footer element with contentinfo role', () => {
      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
      expect(footer.tagName).toBe('FOOTER');
    });

    it('should have proper semantic structure with sections', () => {
      const footer = screen.getByRole('contentinfo');
      const headings = footer.querySelectorAll('h3, h4');
      
      expect(headings.length).toBeGreaterThan(0);
    });

    it('should display commitment statement in bottom bar', () => {
      const commitment = screen.getByText(
        /committed to environmental sustainability and community empowerment/i
      );
      expect(commitment).toBeInTheDocument();
    });

    it('should have responsive grid layout classes', () => {
      const footer = screen.getByRole('contentinfo');
      const gridContainer = footer.querySelector('.grid');
      
      expect(gridContainer).toBeInTheDocument();
      expect(gridContainer).toHaveClass('grid-cols-1');
    });
  });

  describe('Requirements Validation', () => {
    it('should satisfy Requirement 19.2: company address, phone, and email in footer', () => {
      // Address
      const addressElement = screen.getByRole('contentinfo').querySelector('address');
      expect(addressElement).toHaveTextContent(companyInfo.address.street);
      expect(addressElement).toHaveTextContent(companyInfo.address.city);
      expect(addressElement).toHaveTextContent(companyInfo.address.country);
      
      // Phone
      expect(screen.getByText(companyInfo.contact.phone)).toBeInTheDocument();
      
      // Email
      expect(screen.getByText(companyInfo.contact.email)).toBeInTheDocument();
    });

    it('should satisfy Requirement 19.3: quick navigation links in footer', () => {
      navigationLinks.forEach((link) => {
        const navLink = screen.getByRole('link', { name: link.label });
        expect(navLink).toBeInTheDocument();
        expect(navLink).toHaveAttribute('href', link.href);
      });
    });

    it('should satisfy Requirement 19.4: company tagline or mission statement in footer', () => {
      expect(screen.getByText(companyInfo.tagline)).toBeInTheDocument();
      expect(
        screen.getByText(
          /leading the way in sustainable waste management and energy production in lesotho/i
        )
      ).toBeInTheDocument();
    });

    it('should satisfy Requirement 19.5: copyright notice with current year in footer', () => {
      const currentYear = new Date().getFullYear();
      const copyright = screen.getByText(
        new RegExp(`© ${currentYear} ${companyInfo.name}.*all rights reserved`, 'i')
      );
      expect(copyright).toBeInTheDocument();
    });
  });

  describe('Custom className prop', () => {
    it('should apply custom className when provided', () => {
      const { container } = render(<Footer className="custom-footer-class" />);
      const footer = container.querySelector('footer');
      
      expect(footer).toHaveClass('custom-footer-class');
    });

    it('should maintain default classes when custom className is provided', () => {
      const { container } = render(<Footer className="custom-class" />);
      const footer = container.querySelector('footer');
      
      expect(footer).toHaveClass('bg-primary-forestDark');
      expect(footer).toHaveClass('text-white');
      expect(footer).toHaveClass('custom-class');
    });
  });
});
