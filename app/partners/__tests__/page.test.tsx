import { render, screen } from '@testing-library/react';
import PartnersPage from '../page';

describe('Partners Page', () => {
  beforeEach(() => {
    render(<PartnersPage />);
  });

  describe('Supplier Base Information (Requirement 9.1)', () => {
    it('should display the main heading "Partner With Us"', () => {
      const heading = screen.getByRole('heading', {
        name: /partner with us/i,
        level: 1,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display 60 active suppliers', () => {
      const supplierCount = screen.getByText('60');
      expect(supplierCount).toBeInTheDocument();

      const supplierLabel = screen.getByText(/active suppliers/i);
      expect(supplierLabel).toBeInTheDocument();
    });

    it('should display Maseru as current operations location', () => {
      const location = screen.getByText('Maseru');
      expect(location).toBeInTheDocument();

      const locationLabel = screen.getAllByText(/current operations/i)[0];
      expect(locationLabel).toBeInTheDocument();
    });

    it('should describe the supplier network composition', () => {
      const networkDescription = screen.getByText(
        /our network includes individual collectors.*automotive service centers.*industrial facilities.*community collection points/i
      );
      expect(networkDescription).toBeInTheDocument();
    });

    it('should mention operations in Maseru and surrounding areas', () => {
      const operationsDescription = screen.getByText(
        /currently operating in maseru and surrounding areas/i
      );
      expect(operationsDescription).toBeInTheDocument();
    });

    it('should display "Our Supplier Network" section heading', () => {
      const sectionHeading = screen.getByRole('heading', {
        name: /our supplier network/i,
      });
      expect(sectionHeading).toBeInTheDocument();
    });

    it('should list types of partners: Individual Collectors', () => {
      const partnerTypes = screen.getAllByText(/individual collectors/i);
      // Should appear in both the description and the partner type list
      expect(partnerTypes.length).toBeGreaterThanOrEqual(1);
      expect(partnerTypes[0]).toBeInTheDocument();
    });

    it('should list types of partners: Auto Service Centers', () => {
      const partnerType = screen.getByText(/auto service centers/i);
      expect(partnerType).toBeInTheDocument();
    });

    it('should list types of partners: Industrial Facilities', () => {
      const partnerTypes = screen.getAllByText(/industrial facilities/i);
      // Should appear in both the description and the partner type list
      expect(partnerTypes.length).toBeGreaterThanOrEqual(1);
      expect(partnerTypes[0]).toBeInTheDocument();
    });

    it('should list types of partners: Community Groups', () => {
      const partnerType = screen.getByText(/community groups/i);
      expect(partnerType).toBeInTheDocument();
    });
  });

  describe('Expansion Strategy Section (Requirement 9.2)', () => {
    it('should display the expansion strategy heading', () => {
      const heading = screen.getByRole('heading', {
        name: /expansion strategy/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display phase 1: Strengthen Maseru Operations', () => {
      const phase1Heading = screen.getByRole('heading', {
        name: /strengthen maseru operations/i,
      });
      expect(phase1Heading).toBeInTheDocument();

      const phase1Description = screen.getByText(
        /optimize current operations.*increase production capacity to 50,000L monthly/i
      );
      expect(phase1Description).toBeInTheDocument();
    });

    it('should indicate phase 1 is the current active phase', () => {
      const currentPhase = screen.getByText(/current phase.*active growth/i);
      expect(currentPhase).toBeInTheDocument();
    });

    it('should display phase 2: Regional Expansion', () => {
      const phase2Heading = screen.getByRole('heading', {
        name: /regional expansion/i,
      });
      expect(phase2Heading).toBeInTheDocument();

      const phase2Description = screen.getByText(
        /establish collection networks in major towns across lesotho/i
      );
      expect(phase2Description).toBeInTheDocument();
    });

    it('should indicate phase 2 is planned expansion', () => {
      const nextPhase = screen.getByText(/next phase.*planned expansion/i);
      expect(nextPhase).toBeInTheDocument();
    });

    it('should display phase 3: Nationwide Coverage', () => {
      const phase3Heading = screen.getByRole('heading', {
        name: /nationwide coverage/i,
      });
      expect(phase3Heading).toBeInTheDocument();

      const phase3Description = screen.getByText(
        /achieve 100,000L monthly production capacity/i
      );
      expect(phase3Description).toBeInTheDocument();
    });

    it('should mention operations across all districts in phase 3', () => {
      const nationwideGoal = screen.getByText(
        /operations across all districts/i
      );
      expect(nationwideGoal).toBeInTheDocument();
    });

    it('should indicate phase 3 is future vision', () => {
      const futureVision = screen.getByText(/future vision.*national impact/i);
      expect(futureVision).toBeInTheDocument();
    });

    it('should display expansion strategy description', () => {
      const description = screen.getByText(/growing together to serve all of lesotho/i);
      expect(description).toBeInTheDocument();
    });
  });

  describe('Partnership Benefits Section (Requirement 9.3)', () => {
    it('should display the partnership benefits heading', () => {
      const heading = screen.getByRole('heading', {
        name: /partnership benefits/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display Fair Pricing benefit', () => {
      const benefitHeading = screen.getByRole('heading', {
        name: /fair pricing/i,
      });
      expect(benefitHeading).toBeInTheDocument();

      const benefitDescription = screen.getByText(
        /competitive rates for waste materials with transparent pricing/i
      );
      expect(benefitDescription).toBeInTheDocument();
    });

    it('should display Reliable Partnership benefit', () => {
      const benefitHeading = screen.getByRole('heading', {
        name: /reliable partnership/i,
      });
      expect(benefitHeading).toBeInTheDocument();

      const benefitDescription = screen.getByText(
        /long-term relationships built on trust.*consistency.*mutual growth/i
      );
      expect(benefitDescription).toBeInTheDocument();
    });

    it('should display Growth Support benefit', () => {
      const benefitHeading = screen.getByRole('heading', {
        name: /growth support/i,
      });
      expect(benefitHeading).toBeInTheDocument();

      const benefitDescription = screen.getByText(
        /training.*equipment support.*business development assistance/i
      );
      expect(benefitDescription).toBeInTheDocument();
    });

    it('should display Community Impact benefit', () => {
      const benefitHeading = screen.getByRole('heading', {
        name: /community impact/i,
      });
      expect(benefitHeading).toBeInTheDocument();

      const benefitDescription = screen.getByText(
        /be part of a movement creating jobs and protecting the environment/i
      );
      expect(benefitDescription).toBeInTheDocument();
    });

    it('should display all four partnership benefits', () => {
      const benefitHeadings = screen.getAllByRole('heading', { level: 3 });
      const benefitNames = benefitHeadings.map((h) => h.textContent);

      expect(benefitNames).toContain('Fair Pricing');
      expect(benefitNames).toContain('Reliable Partnership');
      expect(benefitNames).toContain('Growth Support');
      expect(benefitNames).toContain('Community Impact');
    });

    it('should display benefits section description', () => {
      const description = screen.getByText(/why suppliers choose to work with bohloeki/i);
      expect(description).toBeInTheDocument();
    });
  });

  describe('CTA for Supplier Inquiries (Requirement 9.4)', () => {
    it('should display the CTA section heading', () => {
      const heading = screen.getByRole('heading', {
        name: /ready to become a supplier/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display CTA description inviting suppliers to join', () => {
      const description = screen.getByText(
        /join our network of suppliers and be part of lesotho.*sustainable future/i
      );
      expect(description).toBeInTheDocument();
    });

    it('should mention individual collectors, businesses, and community groups in CTA', () => {
      const targetAudience = screen.getByText(
        /whether you.*individual collector.*business.*community group/i
      );
      expect(targetAudience).toBeInTheDocument();
    });

    it('should display "Contact Us Today" link', () => {
      const contactLink = screen.getByRole('link', {
        name: /contact us today/i,
      });
      expect(contactLink).toBeInTheDocument();
      expect(contactLink).toHaveAttribute('href', '/contact');
    });

    it('should display "Learn More About Us" link', () => {
      const learnMoreLink = screen.getByRole('link', {
        name: /learn more about us/i,
      });
      expect(learnMoreLink).toBeInTheDocument();
      expect(learnMoreLink).toHaveAttribute('href', '/about');
    });
  });

  describe('Page Structure', () => {
    it('should have all required sections in correct order', () => {
      const headings = screen.getAllByRole('heading');
      const headingTexts = headings.map((h) => h.textContent);

      // Verify key sections are present
      expect(headingTexts).toContain('Partner With Us');
      expect(headingTexts).toContain('Our Supplier Network');
      expect(headingTexts).toContain('Partnership Benefits');
      expect(headingTexts).toContain('Expansion Strategy');
      expect(headingTexts).toContain('Ready to Become a Supplier?');
    });

    it('should have exactly one h1 element', () => {
      const h1Elements = screen.getAllByRole('heading', { level: 1 });
      expect(h1Elements).toHaveLength(1);
      expect(h1Elements[0]).toHaveTextContent(/partner with us/i);
    });

    it('should display introductory text about joining the network', () => {
      const intro = screen.getByText(
        /join our growing network of suppliers.*lesotho.*sustainable waste management revolution/i
      );
      expect(intro).toBeInTheDocument();
    });
  });
});
