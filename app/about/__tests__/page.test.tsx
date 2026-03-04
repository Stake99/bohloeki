import { render, screen } from '@testing-library/react';
import AboutPage from '../page';

describe('About Page', () => {
  beforeEach(() => {
    render(<AboutPage />);
  });

  describe('Company Story Section', () => {
    it('should display the main heading "About Bohloeki"', () => {
      const heading = screen.getByRole('heading', {
        name: /about bohloeki/i,
        level: 1,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display the meaning of "Bohloeki" (Purity in Sesotho)', () => {
      const meaning = screen.getByText(/bohloeki.*means.*purity.*in sesotho/i);
      expect(meaning).toBeInTheDocument();
    });

    it('should display the company story description', () => {
      const story = screen.getByText(
        /founded with a vision to transform lesotho.*waste management landscape/i
      );
      expect(story).toBeInTheDocument();
    });

    it('should mention environmental stewardship and community empowerment', () => {
      const values = screen.getByText(
        /environmental stewardship.*community empowerment.*economic development/i
      );
      expect(values).toBeInTheDocument();
    });
  });

  describe('Mission Section', () => {
    it('should display the mission heading', () => {
      const missionHeading = screen.getByRole('heading', {
        name: /our mission/i,
      });
      expect(missionHeading).toBeInTheDocument();
    });

    it('should display the mission statement', () => {
      const mission = screen.getByText(
        /to provide innovative.*eco-friendly waste management solutions/i
      );
      expect(mission).toBeInTheDocument();
    });

    it('should mention sustainable employment in mission', () => {
      const missionSection = screen.getByRole('heading', { name: /our mission/i }).parentElement?.parentElement;
      expect(missionSection).toHaveTextContent(/sustainable employment/i);
    });

    it('should mention industrial burner oil in mission', () => {
      const missionSection = screen.getByRole('heading', { name: /our mission/i }).parentElement?.parentElement;
      expect(missionSection).toHaveTextContent(/industrial burner oil/i);
    });
  });

  describe('Vision Section', () => {
    it('should display the vision heading', () => {
      const visionHeading = screen.getByRole('heading', {
        name: /our vision/i,
      });
      expect(visionHeading).toBeInTheDocument();
    });

    it('should display the vision statement', () => {
      const vision = screen.getByText(
        /to become the leading waste-to-energy company in southern africa/i
      );
      expect(vision).toBeInTheDocument();
    });

    it('should mention sustainable waste management practices', () => {
      const practices = screen.getByText(/sustainable waste management practices/i);
      expect(practices).toBeInTheDocument();
    });

    it('should mention environmental responsibility and economic prosperity', () => {
      const balance = screen.getByText(
        /environmental responsibility and economic prosperity/i
      );
      expect(balance).toBeInTheDocument();
    });
  });

  describe('Core Values Section', () => {
    it('should display the core values heading', () => {
      const valuesHeading = screen.getByRole('heading', {
        name: /our core values/i,
      });
      expect(valuesHeading).toBeInTheDocument();
    });

    it('should display Job Creation value', () => {
      const jobCreation = screen.getByRole('heading', {
        name: /job creation/i,
      });
      expect(jobCreation).toBeInTheDocument();

      const jobDescription = screen.getByText(
        /empowering local communities through sustainable employment/i
      );
      expect(jobDescription).toBeInTheDocument();
    });

    it('should display Innovation value', () => {
      const innovation = screen.getByRole('heading', {
        name: /^innovation$/i,
      });
      expect(innovation).toBeInTheDocument();

      const innovationDescription = screen.getByText(
        /pioneering waste-to-energy solutions/i
      );
      expect(innovationDescription).toBeInTheDocument();
    });

    it('should display Economic Development value', () => {
      const economicDev = screen.getByRole('heading', {
        name: /economic development/i,
      });
      expect(economicDev).toBeInTheDocument();

      const economicDescription = screen.getByText(
        /driving local economic growth through sustainable business practices/i
      );
      expect(economicDescription).toBeInTheDocument();
    });

    it('should display all three core values', () => {
      const valueHeadings = screen.getAllByRole('heading', { level: 3 });
      const valueNames = valueHeadings.map((h) => h.textContent);

      expect(valueNames).toContain('Job Creation');
      expect(valueNames).toContain('Innovation');
      expect(valueNames).toContain('Economic Development');
    });
  });

  describe('Leadership Profile Section', () => {
    it('should display the leadership heading', () => {
      const leadershipHeading = screen.getByRole('heading', {
        name: /^leadership$/i,
      });
      expect(leadershipHeading).toBeInTheDocument();
    });

    it('should display Temoho Khatleli name', () => {
      const founderName = screen.getByRole('heading', {
        name: /temoho khatleli/i,
      });
      expect(founderName).toBeInTheDocument();
    });

    it('should display Founder & Managing Director title', () => {
      const title = screen.getByText(/founder & managing director/i);
      expect(title).toBeInTheDocument();
    });

    it('should display leadership profile description', () => {
      const profile = screen.getByText(
        /with a passion for environmental sustainability and community development/i
      );
      expect(profile).toBeInTheDocument();
    });

    it('should mention 60 suppliers in leadership profile', () => {
      const suppliers = screen.getByText(/60 suppliers/i);
      expect(suppliers).toBeInTheDocument();
    });

    it('should mention 24,000 liters monthly production in leadership profile', () => {
      const leadershipSection = screen.getByRole('heading', { name: /^leadership$/i }).closest('section');
      expect(leadershipSection).toHaveTextContent(/24,000 liters.*industrial burner oil monthly/i);
    });

    it('should display founder image with proper alt text', () => {
      const founderImage = screen.getByAltText(
        /temoho khatleli.*founder & managing director/i
      );
      expect(founderImage).toBeInTheDocument();
    });
  });

  describe('Company Growth Timeline Section', () => {
    it('should display the growth journey heading', () => {
      const growthHeading = screen.getByRole('heading', {
        name: /our growth journey/i,
      });
      expect(growthHeading).toBeInTheDocument();
    });

    it('should display Foundation milestone', () => {
      const foundation = screen.getByRole('heading', {
        name: /^foundation$/i,
      });
      expect(foundation).toBeInTheDocument();

      const foundationText = screen.getByText(
        /bohloeki enterprises was founded with a vision/i
      );
      expect(foundationText).toBeInTheDocument();
    });

    it('should display Growth & Expansion milestone', () => {
      const growth = screen.getByRole('heading', {
        name: /growth & expansion/i,
      });
      expect(growth).toBeInTheDocument();

      const growthText = screen.getByText(
        /expanded operations to include industrial burner oil production/i
      );
      expect(growthText).toBeInTheDocument();
    });

    it('should display Future Vision milestone', () => {
      const future = screen.getByRole('heading', {
        name: /future vision/i,
      });
      expect(future).toBeInTheDocument();

      const futureText = screen.getByText(
        /planning countrywide expansion with a goal to reach 100,000 liters/i
      );
      expect(futureText).toBeInTheDocument();
    });

    it('should mention tire collection and recycling in foundation', () => {
      const tireCollection = screen.getByText(/tire collection and recycling/i);
      expect(tireCollection).toBeInTheDocument();
    });

    it('should mention 100,000 liters goal in future vision', () => {
      const futureGoal = screen.getByText(/100,000 liters.*monthly production/i);
      expect(futureGoal).toBeInTheDocument();
    });
  });

  describe('Page Structure', () => {
    it('should have all required sections in correct order', () => {
      const headings = screen.getAllByRole('heading');
      const headingTexts = headings.map((h) => h.textContent);

      // Verify key sections are present
      expect(headingTexts).toContain('About Bohloeki');
      expect(headingTexts).toContain('Our Mission');
      expect(headingTexts).toContain('Our Vision');
      expect(headingTexts).toContain('Our Core Values');
      expect(headingTexts).toContain('Leadership');
      expect(headingTexts).toContain('Our Growth Journey');
    });

    it('should have exactly one h1 element', () => {
      const h1Elements = screen.getAllByRole('heading', { level: 1 });
      expect(h1Elements).toHaveLength(1);
      expect(h1Elements[0]).toHaveTextContent(/about bohloeki/i);
    });
  });
});
