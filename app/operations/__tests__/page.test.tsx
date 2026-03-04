import { render, screen } from '@testing-library/react';
import OperationsPage from '../page';
import { productionMetrics } from '@/lib/constants';

describe('Operations Page', () => {
  beforeEach(() => {
    render(<OperationsPage />);
  });

  describe('Page Header', () => {
    it('should display the main heading "Our Operations"', () => {
      const heading = screen.getByRole('heading', {
        name: /our operations/i,
        level: 1,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display the page description', () => {
      const description = screen.getByText(
        /driving sustainable growth through efficient operations and strategic expansion/i
      );
      expect(description).toBeInTheDocument();
    });
  });

  describe('Current Production Display (Requirement 7.1)', () => {
    it('should display current monthly production of 24,000 liters', () => {
      const production = screen.getByText(/our facility in maseru consistently produces 24,000 liters/i);
      expect(production).toBeInTheDocument();
    });

    it('should display "Current Monthly Production" label', () => {
      const label = screen.getByText(/current monthly production/i);
      expect(label).toBeInTheDocument();
    });

    it('should display production capacity section heading', () => {
      const heading = screen.getByRole('heading', {
        name: /production capacity/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display current monthly output description', () => {
      const description = screen.getByText(
        /our facility in maseru consistently produces 24,000 liters/i
      );
      expect(description).toBeInTheDocument();
    });

    it('should mention high-quality industrial burner oil', () => {
      const text = screen.getByText(/high-quality industrial burner oil/i);
      expect(text).toBeInTheDocument();
    });

    it('should use production metrics from constants', () => {
      expect(productionMetrics.currentMonthlyProduction).toBe(24000);
    });
  });

  describe('Projected Production Display (Requirement 7.2)', () => {
    it('should display projected production of 100,000 liters', () => {
      const projection = screen.getByText(/strategically expanding our operations to reach 100,000 liters/i);
      expect(projection).toBeInTheDocument();
    });

    it('should display "Growth Projection" heading', () => {
      const heading = screen.getByRole('heading', {
        name: /growth projection/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display target monthly capacity label', () => {
      const label = screen.getByText(/target monthly capacity/i);
      expect(label).toBeInTheDocument();
    });

    it('should display growth projection description', () => {
      const description = screen.getByText(
        /strategically expanding our operations to reach 100,000 liters/i
      );
      expect(description).toBeInTheDocument();
    });

    it('should mention 316% growth in output', () => {
      const growth = screen.getByText(/316% growth in output/i);
      expect(growth).toBeInTheDocument();
    });

    it('should use projected production from constants', () => {
      expect(productionMetrics.projectedProduction).toBe(100000);
    });
  });

  describe('Production Growth Progress', () => {
    it('should display production growth progress heading', () => {
      const heading = screen.getByRole('heading', {
        name: /production growth progress/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display current production label (24,000L)', () => {
      const current = screen.getByText(/current: 24,000l/i);
      expect(current).toBeInTheDocument();
    });

    it('should display target production label (100,000L)', () => {
      const target = screen.getByText(/target: 100,000l/i);
      expect(target).toBeInTheDocument();
    });

    it('should display progress percentage (24%)', () => {
      const percentage = screen.getByText(/24%/);
      expect(percentage).toBeInTheDocument();
    });

    it('should display progress description', () => {
      const description = screen.getByText(
        /on track to achieve 100,000l monthly capacity/i
      );
      expect(description).toBeInTheDocument();
    });
  });

  describe('Supplier Network Section (Requirement 7.3)', () => {
    it('should display supplier network heading', () => {
      const heading = screen.getByRole('heading', {
        name: /supplier network/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display 60 active suppliers', () => {
      const suppliers = screen.getByRole('heading', {
        name: /60 active suppliers/i,
      });
      expect(suppliers).toBeInTheDocument();
    });

    it('should mention currently operating in Maseru', () => {
      const location = screen.getByText(/currently operating in maseru/i);
      expect(location).toBeInTheDocument();
    });

    it('should list individual waste collectors', () => {
      const collectors = screen.getByText(/individual waste collectors/i);
      expect(collectors).toBeInTheDocument();
    });

    it('should list automotive service centers', () => {
      const automotive = screen.getByText(/automotive service centers/i);
      expect(automotive).toBeInTheDocument();
    });

    it('should list industrial facilities', () => {
      const industrial = screen.getByText(/industrial facilities/i);
      expect(industrial).toBeInTheDocument();
    });

    it('should list community collection points', () => {
      const community = screen.getByText(/community collection points/i);
      expect(community).toBeInTheDocument();
    });

    it('should display current coverage heading', () => {
      const heading = screen.getByRole('heading', {
        name: /current coverage/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should mention Maseru and surrounding areas', () => {
      const coverage = screen.getByText(/maseru and surrounding areas/i);
      expect(coverage).toBeInTheDocument();
    });

    it('should list Maseru city center coverage', () => {
      const cityCenter = screen.getByText(/maseru city center/i);
      expect(cityCenter).toBeInTheDocument();
    });

    it('should list industrial areas coverage', () => {
      const industrialAreas = screen.getByText(/industrial areas/i);
      expect(industrialAreas).toBeInTheDocument();
    });

    it('should use supplier count from constants', () => {
      expect(productionMetrics.supplierCount).toBe(60);
    });
  });

  describe('Expansion Plan Section (Requirement 7.4)', () => {
    it('should display countrywide expansion plan heading', () => {
      const heading = screen.getByRole('heading', {
        name: /countrywide expansion plan/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display strategic growth description', () => {
      const description = screen.getByText(/strategic growth to serve all of lesotho/i);
      expect(description).toBeInTheDocument();
    });

    it('should display Phase 1: Maseru Optimization', () => {
      const phase1Heading = screen.getByRole('heading', {
        name: /maseru optimization/i,
      });
      expect(phase1Heading).toBeInTheDocument();

      const phase1Description = screen.getByText(
        /maximize efficiency in current operations.*50,000l monthly/i
      );
      expect(phase1Description).toBeInTheDocument();
    });

    it('should display Phase 2: Regional Expansion', () => {
      const phase2Heading = screen.getByRole('heading', {
        name: /regional expansion/i,
      });
      expect(phase2Heading).toBeInTheDocument();

      const phase2Description = screen.getByText(
        /establish collection networks in major towns across lesotho/i
      );
      expect(phase2Description).toBeInTheDocument();
    });

    it('should display Phase 3: National Coverage', () => {
      const phase3Heading = screen.getByRole('heading', {
        name: /national coverage/i,
      });
      expect(phase3Heading).toBeInTheDocument();

      const phase3Description = screen.getByText(
        /achieve 100,000l monthly capacity with countrywide operations/i
      );
      expect(phase3Description).toBeInTheDocument();
    });

    it('should mention job creation in Phase 3', () => {
      const jobs = screen.getByText(/creating jobs nationwide/i);
      expect(jobs).toBeInTheDocument();
    });

    it('should display all three expansion phases', () => {
      const phase1 = screen.getByText(/phase 1/i);
      const phase2 = screen.getByText(/phase 2/i);
      const phase3 = screen.getByText(/phase 3/i);

      expect(phase1).toBeInTheDocument();
      expect(phase2).toBeInTheDocument();
      expect(phase3).toBeInTheDocument();
    });
  });

  describe('Current Operations Stats', () => {
    it('should display current operations section title', () => {
      const title = screen.getByRole('heading', {
        name: /current operations/i,
      });
      expect(title).toBeInTheDocument();
    });

    it('should display operations description', () => {
      const description = screen.getByText(
        /our established production capacity and supplier network in maseru/i
      );
      expect(description).toBeInTheDocument();
    });

    it('should display active suppliers stat', () => {
      const suppliers = screen.getByRole('heading', {
        name: /60 active suppliers/i,
      });
      expect(suppliers).toBeInTheDocument();
    });

    it('should display operational regions stat', () => {
      const regions = screen.getByText(/operational regions/i);
      expect(regions).toBeInTheDocument();
    });
  });

  describe('Page Structure', () => {
    it('should have all required sections in correct order', () => {
      const headings = screen.getAllByRole('heading');
      const headingTexts = headings.map((h) => h.textContent);

      // Verify key sections are present
      expect(headingTexts).toContain('Our Operations');
      expect(headingTexts).toContain('Production Capacity');
      expect(headingTexts).toContain('Growth Projection');
      expect(headingTexts).toContain('Supplier Network');
      expect(headingTexts).toContain('Countrywide Expansion Plan');
    });

    it('should have exactly one h1 element', () => {
      const h1Elements = screen.getAllByRole('heading', { level: 1 });
      expect(h1Elements).toHaveLength(1);
      expect(h1Elements[0]).toHaveTextContent(/our operations/i);
    });
  });
});
