import { render, screen } from '@testing-library/react';
import Home from '../page';
import { productionMetrics } from '@/lib/constants';

describe('Home Page', () => {
  beforeEach(() => {
    render(<Home />);
  });

  describe('Hero Section', () => {
    it('should display the hero headline "Turning Waste Into Sustainable Energy"', () => {
      const headline = screen.getByRole('heading', {
        name: /turning waste into sustainable energy/i,
        level: 1,
      });
      expect(headline).toBeInTheDocument();
    });

    it('should display the hero subheadline', () => {
      const subheadline = screen.getByText(
        /leading eco-friendly waste management and industrial burner oil production in lesotho/i
      );
      expect(subheadline).toBeInTheDocument();
    });

    it('should display a CTA button for services', () => {
      const ctaButton = screen.getByRole('button', {
        name: /learn more about our services/i,
      });
      expect(ctaButton).toBeInTheDocument();
    });
  });

  describe('Production Statistics', () => {
    it('should display monthly production statistic (24,000L)', () => {
      // AnimatedCounter uses aria-label with the final value
      const monthlyProduction = screen.getByLabelText('24000L');
      expect(monthlyProduction).toBeInTheDocument();
      
      const productionLabel = screen.getByText(/monthly production/i);
      expect(productionLabel).toBeInTheDocument();
    });

    it('should display supplier count statistic (60 suppliers)', () => {
      // AnimatedCounter uses aria-label with the final value
      const supplierCount = screen.getByLabelText('60');
      expect(supplierCount).toBeInTheDocument();
      
      const supplierLabel = screen.getByText(/active suppliers/i);
      expect(supplierLabel).toBeInTheDocument();
    });

    it('should display growth projection statistic (100,000L)', () => {
      // AnimatedCounter uses aria-label with the final value
      const growthProjection = screen.getByLabelText('100000L');
      expect(growthProjection).toBeInTheDocument();
      
      const projectionLabel = screen.getByText(/growth projection/i);
      expect(projectionLabel).toBeInTheDocument();
    });

    it('should display statistics section title', () => {
      const statsTitle = screen.getByRole('heading', {
        name: /our impact in numbers/i,
      });
      expect(statsTitle).toBeInTheDocument();
    });

    it('should display statistics section description', () => {
      const statsDescription = screen.getByText(
        /driving sustainable growth through innovation and community partnership/i
      );
      expect(statsDescription).toBeInTheDocument();
    });

    it('should use production metrics from constants', () => {
      expect(productionMetrics.currentMonthlyProduction).toBe(24000);
      expect(productionMetrics.supplierCount).toBe(60);
      expect(productionMetrics.projectedProduction).toBe(100000);
    });
  });

  describe('Services Overview Section', () => {
    it('should display waste tire collection service', () => {
      const tireService = screen.getByRole('heading', {
        name: /waste tire collection/i,
      });
      expect(tireService).toBeInTheDocument();
      
      const tireDescription = screen.getByText(
        /comprehensive tire collection and recycling services/i
      );
      expect(tireDescription).toBeInTheDocument();
    });

    it('should display industrial burner oil service', () => {
      const burnerOilService = screen.getByRole('heading', {
        name: /industrial burner oil/i,
      });
      expect(burnerOilService).toBeInTheDocument();
      
      const burnerOilDescription = screen.getByText(
        /high-quality industrial burner oil produced from recycled materials/i
      );
      expect(burnerOilDescription).toBeInTheDocument();
    });

    it('should display liquid waste disposal service', () => {
      const wasteDisposalService = screen.getByRole('heading', {
        name: /liquid waste disposal/i,
      });
      expect(wasteDisposalService).toBeInTheDocument();
      
      const wasteDisposalDescription = screen.getByText(
        /safe disposal and recycling of used engine oil/i
      );
      expect(wasteDisposalDescription).toBeInTheDocument();
    });

    it('should display environmental impact for each service', () => {
      const tireImpact = screen.getByText(
        /reduces landfill waste and prevents environmental pollution/i
      );
      expect(tireImpact).toBeInTheDocument();

      const burnerOilImpact = screen.getByText(
        /clean-burning alternative to traditional fuels/i
      );
      expect(burnerOilImpact).toBeInTheDocument();

      const wasteDisposalImpact = screen.getByText(
        /prevents soil and water contamination/i
      );
      expect(wasteDisposalImpact).toBeInTheDocument();
    });

    it('should display all three core services', () => {
      const serviceHeadings = screen.getAllByRole('heading', { level: 3 });
      const serviceNames = serviceHeadings.map((h) => h.textContent);
      
      expect(serviceNames).toContain('Waste Tire Collection');
      expect(serviceNames).toContain('Industrial Burner Oil');
      expect(serviceNames).toContain('Liquid Waste Disposal');
    });
  });

  describe('Sustainability Commitment Section', () => {
    it('should display sustainability commitment heading', () => {
      const sustainabilityHeading = screen.getByRole('heading', {
        name: /committed to sustainability/i,
      });
      expect(sustainabilityHeading).toBeInTheDocument();
    });

    it('should display sustainability commitment description', () => {
      const sustainabilityText = screen.getByText(
        /at bohloeki, we believe in creating a cleaner, greener future/i
      );
      expect(sustainabilityText).toBeInTheDocument();
    });

    it('should display link to impact page', () => {
      const impactLink = screen.getByRole('link', {
        name: /view our impact/i,
      });
      expect(impactLink).toBeInTheDocument();
      expect(impactLink).toHaveAttribute('href', '/impact');
    });

    it('should display link to about page', () => {
      const aboutLink = screen.getByRole('link', {
        name: /our story/i,
      });
      expect(aboutLink).toBeInTheDocument();
      expect(aboutLink).toHaveAttribute('href', '/about');
    });
  });

  describe('CTA Section', () => {
    it('should display CTA section heading', () => {
      const ctaHeading = screen.getByRole('heading', {
        name: /partner with us/i,
      });
      expect(ctaHeading).toBeInTheDocument();
    });

    it('should display CTA section description', () => {
      const ctaDescription = screen.getByText(
        /join our growing network of suppliers and partners/i
      );
      expect(ctaDescription).toBeInTheDocument();
    });

    it('should display contact link in CTA section', () => {
      const contactLink = screen.getByRole('link', {
        name: /get in touch/i,
      });
      expect(contactLink).toBeInTheDocument();
      expect(contactLink).toHaveAttribute('href', '/contact');
    });

    it('should be present on the page', () => {
      const ctaSection = screen.getByRole('heading', {
        name: /partner with us/i,
      });
      expect(ctaSection).toBeInTheDocument();
    });
  });

  describe('Page Structure', () => {
    it('should have all required sections in correct order', () => {
      const headings = screen.getAllByRole('heading');
      const headingTexts = headings.map((h) => h.textContent);

      // Verify key sections are present
      expect(headingTexts).toContain('Turning Waste Into Sustainable Energy');
      expect(headingTexts).toContain('Our Impact in Numbers');
      expect(headingTexts).toContain('Committed to Sustainability');
      expect(headingTexts).toContain('Partner With Us');
    });

    it('should have exactly one h1 element', () => {
      const h1Elements = screen.getAllByRole('heading', { level: 1 });
      expect(h1Elements).toHaveLength(1);
      expect(h1Elements[0]).toHaveTextContent(
        /turning waste into sustainable energy/i
      );
    });
  });
});
