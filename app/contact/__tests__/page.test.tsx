import { render, screen } from '@testing-library/react';
import ContactPage from '../page';
import { companyInfo } from '@/lib/constants';

describe('Contact Page', () => {
  beforeEach(() => {
    render(<ContactPage />);
  });

  describe('Contact Form Section', () => {
    it('should display the contact form heading', () => {
      const heading = screen.getByRole('heading', {
        name: /send us a message/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display the contact form description', () => {
      const description = screen.getByText(
        /fill out the form below and we'll get back to you as soon as possible/i
      );
      expect(description).toBeInTheDocument();
    });

    it('should render the ContactForm component with name field', () => {
      const nameInput = screen.getByLabelText(/name/i);
      expect(nameInput).toBeInTheDocument();
      expect(nameInput).toHaveAttribute('type', 'text');
    });

    it('should render the ContactForm component with email field', () => {
      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toBeInTheDocument();
      expect(emailInput).toHaveAttribute('type', 'email');
    });

    it('should render the ContactForm component with phone field', () => {
      const phoneInput = screen.getByLabelText(/phone/i);
      expect(phoneInput).toBeInTheDocument();
      expect(phoneInput).toHaveAttribute('type', 'tel');
    });

    it('should render the ContactForm component with company field', () => {
      const companyInput = screen.getByLabelText(/company/i);
      expect(companyInput).toBeInTheDocument();
      expect(companyInput).toHaveAttribute('type', 'text');
    });

    it('should render the ContactForm component with message field', () => {
      const messageInput = screen.getByLabelText(/message/i);
      expect(messageInput).toBeInTheDocument();
      expect(messageInput.tagName).toBe('TEXTAREA');
    });

    it('should render the ContactForm component with submit button', () => {
      const submitButton = screen.getByRole('button', {
        name: /send message/i,
      });
      expect(submitButton).toBeInTheDocument();
    });
  });

  describe('Company Information Section', () => {
    it('should display the company information heading', () => {
      const heading = screen.getByRole('heading', {
        name: /company information/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display the company address heading', () => {
      const addressHeading = screen.getByRole('heading', {
        name: /^address$/i,
      });
      expect(addressHeading).toBeInTheDocument();
    });

    it('should display the company street address', () => {
      const address = screen.getByText(companyInfo.address.street);
      expect(address).toBeInTheDocument();
    });

    it('should display the company city and country', () => {
      const cityCountry = screen.getByText(
        `${companyInfo.address.city}, ${companyInfo.address.country}`
      );
      expect(cityCountry).toBeInTheDocument();
    });

    it('should display the phone number heading', () => {
      const phoneHeading = screen.getByRole('heading', {
        name: /^phone$/i,
      });
      expect(phoneHeading).toBeInTheDocument();
    });

    it('should display the company phone number as a clickable link', () => {
      const phoneLink = screen.getByRole('link', {
        name: companyInfo.contact.phone,
      });
      expect(phoneLink).toBeInTheDocument();
      expect(phoneLink).toHaveAttribute(
        'href',
        `tel:${companyInfo.contact.phone.replace(/\s/g, '')}`
      );
    });

    it('should display the email heading', () => {
      const emailHeading = screen.getByRole('heading', {
        name: /^email$/i,
      });
      expect(emailHeading).toBeInTheDocument();
    });

    it('should display the company email as a clickable link', () => {
      const emailLink = screen.getByRole('link', {
        name: companyInfo.contact.email,
      });
      expect(emailLink).toBeInTheDocument();
      expect(emailLink).toHaveAttribute(
        'href',
        `mailto:${companyInfo.contact.email}`
      );
    });

    it('should display the business hours heading', () => {
      const hoursHeading = screen.getByRole('heading', {
        name: /business hours/i,
      });
      expect(hoursHeading).toBeInTheDocument();
    });

    it('should display weekday business hours', () => {
      const weekdayHours = screen.getByText(companyInfo.businessHours.weekdays);
      expect(weekdayHours).toBeInTheDocument();
    });

    it('should display weekend business hours', () => {
      const weekendHours = screen.getByText(companyInfo.businessHours.weekend);
      expect(weekendHours).toBeInTheDocument();
    });

    it('should display "What to Expect" section', () => {
      const expectHeading = screen.getByRole('heading', {
        name: /what to expect/i,
      });
      expect(expectHeading).toBeInTheDocument();
    });

    it('should display response time expectation', () => {
      const responseTime = screen.getByText(
        /response within 24 hours during business days/i
      );
      expect(responseTime).toBeInTheDocument();
    });

    it('should display professional consultation expectation', () => {
      const consultation = screen.getByText(
        /professional consultation for your needs/i
      );
      expect(consultation).toBeInTheDocument();
    });

    it('should display transparent pricing expectation', () => {
      const pricing = screen.getByText(
        /transparent pricing and service information/i
      );
      expect(pricing).toBeInTheDocument();
    });
  });

  describe('Map Placeholder Section', () => {
    it('should display the location heading', () => {
      const locationHeading = screen.getByRole('heading', {
        name: /our location/i,
      });
      expect(locationHeading).toBeInTheDocument();
    });

    it('should display the location description', () => {
      const description = screen.getByText(
        /visit us at our facility in maseru/i
      );
      expect(description).toBeInTheDocument();
    });

    it('should display the map placeholder with company address', () => {
      const mapPlaceholder = screen.getByText(companyInfo.address.street);
      expect(mapPlaceholder).toBeInTheDocument();
    });

    it('should display "Interactive map coming soon" message', () => {
      const comingSoon = screen.getByText(/interactive map coming soon/i);
      expect(comingSoon).toBeInTheDocument();
    });
  });

  describe('Quick Links Section', () => {
    it('should display the quick links heading', () => {
      const heading = screen.getByRole('heading', {
        name: /looking for something specific/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display link to Services page', () => {
      const servicesLink = screen.getByRole('link', {
        name: /our services/i,
      });
      expect(servicesLink).toBeInTheDocument();
      expect(servicesLink).toHaveAttribute('href', '/services');
    });

    it('should display link to Partners page', () => {
      const partnersLink = screen.getByRole('link', {
        name: /become a supplier/i,
      });
      expect(partnersLink).toBeInTheDocument();
      expect(partnersLink).toHaveAttribute('href', '/partners');
    });

    it('should display link to About page', () => {
      const aboutLink = screen.getByRole('link', {
        name: /about bohloeki/i,
      });
      expect(aboutLink).toBeInTheDocument();
      expect(aboutLink).toHaveAttribute('href', '/about');
    });
  });

  describe('Page Structure', () => {
    it('should have exactly one h1 element', () => {
      const h1Elements = screen.getAllByRole('heading', { level: 1 });
      expect(h1Elements).toHaveLength(1);
      expect(h1Elements[0]).toHaveTextContent(/contact us/i);
    });

    it('should have all required sections in correct order', () => {
      const headings = screen.getAllByRole('heading');
      const headingTexts = headings.map((h) => h.textContent);

      // Verify key sections are present
      expect(headingTexts).toContain('Contact Us');
      expect(headingTexts).toContain('Send Us a Message');
      expect(headingTexts).toContain('Company Information');
      expect(headingTexts).toContain('Our Location');
      expect(headingTexts).toContain('Looking for Something Specific?');
    });
  });
});
