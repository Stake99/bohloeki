import { render, screen } from '@testing-library/react';
import ImpactPage from '../page';

describe('Impact Page', () => {
  beforeEach(() => {
    render(<ImpactPage />);
  });

  describe('Environmental Metrics Display', () => {
    it('should display the main heading "Our Impact"', () => {
      const heading = screen.getByRole('heading', {
        name: /^our impact$/i,
        level: 1,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display page description about creating positive change', () => {
      const description = screen.getByText(
        /creating positive change for the environment, communities, and economy of lesotho/i
      );
      expect(description).toBeInTheDocument();
    });

    it('should display waste recycled metric (1000+ tons)', () => {
      const wasteMetric = screen.getByText(/1000\+/);
      expect(wasteMetric).toBeInTheDocument();

      const wasteLabel = screen.getByText(/tons of waste recycled/i);
      expect(wasteLabel).toBeInTheDocument();
    });

    it('should display CO2 emissions prevented metric (500+ tons)', () => {
      const co2Metric = screen.getByText(/500\+/);
      expect(co2Metric).toBeInTheDocument();

      const co2Label = screen.getByText(/tons co₂ emissions prevented/i);
      expect(co2Label).toBeInTheDocument();
    });

    it('should display environmental impact descriptions', () => {
      const wasteDescription = screen.getByText(
        /preventing environmental pollution through proper waste management/i
      );
      expect(wasteDescription).toBeInTheDocument();

      const co2Description = screen.getByText(
        /reducing carbon footprint through sustainable energy production/i
      );
      expect(co2Description).toBeInTheDocument();
    });
  });

  describe('Waste Reduction Section', () => {
    it('should display waste reduction achievements heading', () => {
      const heading = screen.getByRole('heading', {
        name: /waste reduction achievements/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display "Transforming waste into valuable resources" description', () => {
      const description = screen.getByText(
        /transforming waste into valuable resources/i
      );
      expect(description).toBeInTheDocument();
    });

    it('should display tire recycling impact section', () => {
      const tireHeading = screen.getByRole('heading', {
        name: /tire recycling impact/i,
      });
      expect(tireHeading).toBeInTheDocument();
    });

    it('should list tires diverted from landfills', () => {
      const achievement = screen.getByText(
        /thousands of tires diverted from landfills annually/i
      );
      expect(achievement).toBeInTheDocument();
    });

    it('should list prevention of illegal dumping and burning', () => {
      const achievement = screen.getByText(
        /prevention of illegal dumping and burning/i
      );
      expect(achievement).toBeInTheDocument();
    });

    it('should list elimination of mosquito breeding grounds', () => {
      const achievement = screen.getByText(
        /elimination of mosquito breeding grounds/i
      );
      expect(achievement).toBeInTheDocument();
    });

    it('should list conversion into clean-burning fuel', () => {
      const achievement = screen.getByText(
        /conversion into clean-burning industrial fuel/i
      );
      expect(achievement).toBeInTheDocument();
    });

    it('should display liquid waste management section', () => {
      const liquidHeading = screen.getByRole('heading', {
        name: /liquid waste management/i,
      });
      expect(liquidHeading).toBeInTheDocument();
    });

    it('should list safe disposal of used oils', () => {
      const achievement = screen.getByText(
        /safe disposal of used engine and hydraulic oils/i
      );
      expect(achievement).toBeInTheDocument();
    });

    it('should list prevention of soil and water contamination', () => {
      const achievement = screen.getByText(
        /prevention of soil and water contamination/i
      );
      expect(achievement).toBeInTheDocument();
    });

    it('should list protection of groundwater sources', () => {
      const achievement = screen.getByText(/protection of groundwater sources/i);
      expect(achievement).toBeInTheDocument();
    });

    it('should list recycling into valuable energy products', () => {
      const achievement = screen.getByText(
        /recycling into valuable energy products/i
      );
      expect(achievement).toBeInTheDocument();
    });
  });

  describe('Job Creation Statistics', () => {
    it('should display job creation heading', () => {
      const heading = screen.getByRole('heading', {
        name: /job creation & economic impact/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display "Building sustainable livelihoods" description', () => {
      const description = screen.getByText(
        /building sustainable livelihoods across lesotho/i
      );
      expect(description).toBeInTheDocument();
    });

    it('should display 60+ direct jobs statistic', () => {
      const jobsMetric = screen.getByText(/60\+/);
      expect(jobsMetric).toBeInTheDocument();

      const jobsLabel = screen.getByRole('heading', {
        name: /^direct jobs$/i,
      });
      expect(jobsLabel).toBeInTheDocument();
    });

    it('should display direct jobs description', () => {
      const description = screen.getByText(
        /suppliers, collectors, and operational staff earning sustainable income/i
      );
      expect(description).toBeInTheDocument();
    });

    it('should display 100+ families supported statistic', () => {
      const familiesMetric = screen.getByText(/100\+/);
      expect(familiesMetric).toBeInTheDocument();

      const familiesLabel = screen.getByRole('heading', {
        name: /families supported/i,
      });
      expect(familiesLabel).toBeInTheDocument();
    });

    it('should display families supported description', () => {
      const description = screen.getByText(
        /providing for families and contributing to community well-being/i
      );
      expect(description).toBeInTheDocument();
    });

    it('should display 100% local employment statistic', () => {
      const localEmploymentMetric = screen.getAllByText(/100%/);
      expect(localEmploymentMetric.length).toBeGreaterThan(0);

      const localEmploymentLabel = screen.getByRole('heading', {
        name: /local employment/i,
      });
      expect(localEmploymentLabel).toBeInTheDocument();
    });

    it('should display local employment description', () => {
      const description = screen.getByText(
        /all positions filled by basotho, keeping economic benefits local/i
      );
      expect(description).toBeInTheDocument();
    });
  });

  describe('Community Empowerment Section', () => {
    it('should display community empowerment heading', () => {
      const heading = screen.getByRole('heading', {
        name: /community empowerment initiatives/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display "Investing in the future" description', () => {
      const description = screen.getByText(
        /investing in the future of lesotho.*communities/i
      );
      expect(description).toBeInTheDocument();
    });

    it('should display supplier development section', () => {
      const supplierHeading = screen.getByRole('heading', {
        name: /supplier development/i,
      });
      expect(supplierHeading).toBeInTheDocument();
    });

    it('should display supplier development description', () => {
      const description = screen.getByText(
        /we provide training, equipment support, and fair pricing to our network of 60 suppliers/i
      );
      expect(description).toBeInTheDocument();
    });

    it('should list business skills training initiative', () => {
      const initiative = screen.getByText(/business skills training/i);
      expect(initiative).toBeInTheDocument();
    });

    it('should list equipment and tools support initiative', () => {
      const initiative = screen.getByText(/equipment and tools support/i);
      expect(initiative).toBeInTheDocument();
    });

    it('should list fair and timely payments initiative', () => {
      const initiative = screen.getByText(/fair and timely payments/i);
      expect(initiative).toBeInTheDocument();
    });

    it('should display environmental education section', () => {
      const educationHeading = screen.getByRole('heading', {
        name: /environmental education/i,
      });
      expect(educationHeading).toBeInTheDocument();
    });

    it('should display environmental education description', () => {
      const description = screen.getByText(
        /raising awareness about proper waste management and environmental protection/i
      );
      expect(description).toBeInTheDocument();
    });

    it('should list community workshops initiative', () => {
      const initiative = screen.getByText(/community workshops/i);
      expect(initiative).toBeInTheDocument();
    });

    it('should list school education programs initiative', () => {
      const initiative = screen.getByText(/school education programs/i);
      expect(initiative).toBeInTheDocument();
    });

    it('should list best practices sharing initiative', () => {
      const initiative = screen.getByText(/best practices sharing/i);
      expect(initiative).toBeInTheDocument();
    });
  });

  describe('Local Sourcing Messaging', () => {
    it('should display 100% local sourcing commitment heading', () => {
      const heading = screen.getByRole('heading', {
        name: /100% local sourcing commitment/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display local sourcing commitment message', () => {
      const message = screen.getByText(
        /every liter of industrial burner oil we produce comes from waste materials collected right here in lesotho/i
      );
      expect(message).toBeInTheDocument();
    });

    it('should mention keeping economic benefits local', () => {
      const message = screen.getByText(
        /we believe in keeping economic benefits local/i
      );
      expect(message).toBeInTheDocument();
    });

    it('should mention supporting Basotho entrepreneurs', () => {
      const message = screen.getByText(/supporting basotho entrepreneurs/i);
      expect(message).toBeInTheDocument();
    });

    it('should mention building a circular economy', () => {
      const message = screen.getByText(/building a circular economy/i);
      expect(message).toBeInTheDocument();
    });

    it('should display 100% materials from Lesotho statistic', () => {
      const materialsLabel = screen.getByText(/materials from lesotho/i);
      expect(materialsLabel).toBeInTheDocument();
    });

    it('should display 100% Basotho workforce statistic', () => {
      const workforceLabel = screen.getByText(/basotho workforce/i);
      expect(workforceLabel).toBeInTheDocument();
    });

    it('should display 100% local economic impact statistic', () => {
      const impactLabel = screen.getByText(/local economic impact/i);
      expect(impactLabel).toBeInTheDocument();
    });
  });

  describe('Page Structure', () => {
    it('should have exactly one h1 element', () => {
      const h1Elements = screen.getAllByRole('heading', { level: 1 });
      expect(h1Elements).toHaveLength(1);
      expect(h1Elements[0]).toHaveTextContent(/our impact/i);
    });

    it('should have all required sections in correct order', () => {
      const headings = screen.getAllByRole('heading');
      const headingTexts = headings.map((h) => h.textContent);

      // Verify key sections are present
      expect(headingTexts).toContain('Our Impact');
      expect(headingTexts).toContain('Waste Reduction Achievements');
      expect(headingTexts).toContain('Job Creation & Economic Impact');
      expect(headingTexts).toContain('Community Empowerment Initiatives');
      expect(headingTexts).toContain('100% Local Sourcing Commitment');
    });

    it('should display ImpactMetrics component with grouped categories', () => {
      // Verify that metrics are displayed
      const wasteMetric = screen.getByText(/tons of waste recycled/i);
      const jobsMetric = screen.getByText(/jobs created/i);
      const localSourcingMetrics = screen.getAllByText(/local sourcing/i);

      expect(wasteMetric).toBeInTheDocument();
      expect(jobsMetric).toBeInTheDocument();
      expect(localSourcingMetrics.length).toBeGreaterThan(0);
    });
  });
});
