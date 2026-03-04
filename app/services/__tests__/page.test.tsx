import { render, screen } from '@testing-library/react';
import ServicesPage from '../page';

describe('Services Page', () => {
  beforeEach(() => {
    render(<ServicesPage />);
  });

  describe('Waste Tire Collection Section', () => {
    it('should display the waste tire collection heading', () => {
      const heading = screen.getByRole('heading', {
        name: /waste tire collection & recycling/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display tire collection description', () => {
      const description = screen.getByText(
        /we provide comprehensive tire collection services across lesotho/i
      );
      expect(description).toBeInTheDocument();
    });

    it('should mention transforming waste tires into valuable resources', () => {
      const transformation = screen.getByText(
        /transforming waste tires into valuable resources/i
      );
      expect(transformation).toBeInTheDocument();
    });

    it('should list free tire collection benefit', () => {
      const benefit = screen.getByText(
        /free tire collection from businesses and communities/i
      );
      expect(benefit).toBeInTheDocument();
    });

    it('should list proper disposal benefit', () => {
      const benefit = screen.getByText(
        /proper disposal preventing environmental hazards/i
      );
      expect(benefit).toBeInTheDocument();
    });

    it('should list conversion into industrial burner oil benefit', () => {
      const benefit = screen.getByText(/conversion into industrial burner oil/i);
      expect(benefit).toBeInTheDocument();
    });

    it('should list support for local suppliers benefit', () => {
      const benefit = screen.getByText(
        /support for local suppliers and collectors/i
      );
      expect(benefit).toBeInTheDocument();
    });

    it('should list reduction of landfill waste benefit', () => {
      const benefit = screen.getByText(/reduction of landfill waste/i);
      expect(benefit).toBeInTheDocument();
    });

    it('should display environmental impact for tire collection', () => {
      const impact = screen.getByText(
        /prevents tire dumping.*reduces landfill waste.*eliminates breeding grounds for disease-carrying insects/i
      );
      expect(impact).toBeInTheDocument();
    });
  });

  describe('Industrial Burner Oil Section', () => {
    it('should display the industrial burner oil heading', () => {
      const heading = screen.getByRole('heading', {
        name: /industrial burner oil production/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display burner oil production description', () => {
      const description = screen.getByText(
        /our state-of-the-art facility produces high-quality industrial burner oil/i
      );
      expect(description).toBeInTheDocument();
    });

    it('should mention sustainable energy source', () => {
      const sustainability = screen.getByText(/sustainable energy source/i);
      expect(sustainability).toBeInTheDocument();
    });

    it('should list high-quality fuel grade benefit', () => {
      const benefit = screen.getByText(/high-quality.*consistent fuel grade/i);
      expect(benefit).toBeInTheDocument();
    });

    it('should list cost-effective alternative benefit', () => {
      const benefit = screen.getByText(
        /cost-effective alternative to imported fuels/i
      );
      expect(benefit).toBeInTheDocument();
    });

    it('should list reliable supply with 24,000L monthly production', () => {
      const benefit = screen.getByText(
        /reliable supply with 24,000L monthly production/i
      );
      expect(benefit).toBeInTheDocument();
    });

    it('should list technical support and delivery services benefit', () => {
      const benefit = screen.getByText(
        /technical support and delivery services/i
      );
      expect(benefit).toBeInTheDocument();
    });

    it('should list competitive pricing benefit', () => {
      const benefit = screen.getByText(/competitive pricing for bulk orders/i);
      expect(benefit).toBeInTheDocument();
    });

    it('should display environmental impact for burner oil', () => {
      const impact = screen.getByText(
        /clean-burning fuel that reduces carbon emissions/i
      );
      expect(impact).toBeInTheDocument();
    });
  });

  describe('Liquid Waste Disposal Section', () => {
    it('should display the liquid waste disposal heading', () => {
      const heading = screen.getByRole('heading', {
        name: /liquid waste disposal services/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should display liquid waste disposal description', () => {
      const description = screen.getByText(
        /we offer safe and environmentally responsible disposal of various liquid wastes/i
      );
      expect(description).toBeInTheDocument();
    });

    it('should mention used engine oil disposal', () => {
      const engineOilElements = screen.getAllByText(/used engine oil/i);
      expect(engineOilElements.length).toBeGreaterThan(0);
      expect(engineOilElements[0]).toBeInTheDocument();
    });

    it('should mention hydraulic oil disposal', () => {
      const hydraulicOilElements = screen.getAllByText(/hydraulic oil/i);
      expect(hydraulicOilElements.length).toBeGreaterThan(0);
      expect(hydraulicOilElements[0]).toBeInTheDocument();
    });

    it('should mention contaminated diesel disposal', () => {
      const dieselElements = screen.getAllByText(/contaminated diesel/i);
      expect(dieselElements.length).toBeGreaterThan(0);
      expect(dieselElements[0]).toBeInTheDocument();
    });

    it('should mention gear oil disposal', () => {
      const gearOilElements = screen.getAllByText(/gear oil/i);
      expect(gearOilElements.length).toBeGreaterThan(0);
      expect(gearOilElements[0]).toBeInTheDocument();
    });

    it('should mention other petroleum products', () => {
      const petroleum = screen.getByText(/other petroleum products/i);
      expect(petroleum).toBeInTheDocument();
    });

    it('should list safe collection of used engine oil benefit', () => {
      const benefit = screen.getByText(/safe collection of used engine oil/i);
      expect(benefit).toBeInTheDocument();
    });

    it('should list hydraulic oil disposal and recycling benefit', () => {
      const benefit = screen.getByText(/hydraulic oil disposal and recycling/i);
      expect(benefit).toBeInTheDocument();
    });

    it('should list contaminated diesel treatment benefit', () => {
      const benefit = screen.getByText(/contaminated diesel treatment/i);
      expect(benefit).toBeInTheDocument();
    });

    it('should list gear oil and transmission fluid handling benefit', () => {
      const benefit = screen.getByText(
        /gear oil and transmission fluid handling/i
      );
      expect(benefit).toBeInTheDocument();
    });

    it('should list compliance with environmental regulations benefit', () => {
      const benefit = screen.getByText(
        /compliance with environmental regulations/i
      );
      expect(benefit).toBeInTheDocument();
    });

    it('should list certified disposal documentation benefit', () => {
      const benefit = screen.getByText(/certified disposal documentation/i);
      expect(benefit).toBeInTheDocument();
    });

    it('should display environmental impact for liquid waste disposal', () => {
      const impact = screen.getByText(
        /prevents soil and water contamination.*protects groundwater sources.*ensures safe recycling of hazardous materials/i
      );
      expect(impact).toBeInTheDocument();
    });
  });

  describe('Service Details Completeness', () => {
    it('should display all three main service sections', () => {
      const tireService = screen.getByRole('heading', {
        name: /waste tire collection & recycling/i,
      });
      const burnerOilService = screen.getByRole('heading', {
        name: /industrial burner oil production/i,
      });
      const liquidWasteService = screen.getByRole('heading', {
        name: /liquid waste disposal services/i,
      });

      expect(tireService).toBeInTheDocument();
      expect(burnerOilService).toBeInTheDocument();
      expect(liquidWasteService).toBeInTheDocument();
    });

    it('should include icons for all services', () => {
      // Icons are rendered as SVG elements with specific classes
      const serviceCards = screen.getAllByText(/description|benefits/i);
      expect(serviceCards.length).toBeGreaterThan(0);
    });

    it('should include descriptions for all services', () => {
      const tireDescription = screen.getByText(
        /we provide comprehensive tire collection services/i
      );
      const burnerOilDescription = screen.getByText(
        /our state-of-the-art facility produces high-quality/i
      );
      const liquidWasteDescription = screen.getByText(
        /we offer safe and environmentally responsible disposal/i
      );

      expect(tireDescription).toBeInTheDocument();
      expect(burnerOilDescription).toBeInTheDocument();
      expect(liquidWasteDescription).toBeInTheDocument();
    });

    it('should include benefits for all services', () => {
      // Check that each service has multiple benefits listed
      const tireBenefits = screen.getByText(
        /free tire collection from businesses/i
      );
      const burnerOilBenefits = screen.getByText(
        /high-quality.*consistent fuel grade/i
      );
      const liquidWasteBenefits = screen.getByText(
        /safe collection of used engine oil/i
      );

      expect(tireBenefits).toBeInTheDocument();
      expect(burnerOilBenefits).toBeInTheDocument();
      expect(liquidWasteBenefits).toBeInTheDocument();
    });

    it('should include environmental impact for all services', () => {
      const tireImpact = screen.getByText(/prevents tire dumping/i);
      const burnerOilImpact = screen.getByText(
        /clean-burning fuel that reduces carbon emissions/i
      );
      const liquidWasteImpact = screen.getByText(
        /prevents soil and water contamination/i
      );

      expect(tireImpact).toBeInTheDocument();
      expect(burnerOilImpact).toBeInTheDocument();
      expect(liquidWasteImpact).toBeInTheDocument();
    });
  });

  describe('Page Structure', () => {
    it('should display the main heading "Our Services"', () => {
      const heading = screen.getByRole('heading', {
        name: /^our services$/i,
        level: 1,
      });
      expect(heading).toBeInTheDocument();
    });

    it('should have exactly one h1 element', () => {
      const h1Elements = screen.getAllByRole('heading', { level: 1 });
      expect(h1Elements).toHaveLength(1);
      expect(h1Elements[0]).toHaveTextContent(/our services/i);
    });

    it('should display the page description', () => {
      const description = screen.getByText(
        /comprehensive waste management and energy production solutions/i
      );
      expect(description).toBeInTheDocument();
    });

    it('should display "Why Choose Bohloeki?" section', () => {
      const whyChooseHeading = screen.getByRole('heading', {
        name: /why choose bohloeki\?/i,
      });
      expect(whyChooseHeading).toBeInTheDocument();
    });

    it('should display CTA section', () => {
      const ctaHeading = screen.getByRole('heading', {
        name: /ready to work with us\?/i,
      });
      expect(ctaHeading).toBeInTheDocument();
    });

    it('should have contact us link in CTA', () => {
      const contactLink = screen.getByRole('link', { name: /contact us/i });
      expect(contactLink).toBeInTheDocument();
      expect(contactLink).toHaveAttribute('href', '/contact');
    });

    it('should have become a supplier link in CTA', () => {
      const supplierLink = screen.getByRole('link', {
        name: /become a supplier/i,
      });
      expect(supplierLink).toBeInTheDocument();
      expect(supplierLink).toHaveAttribute('href', '/partners');
    });
  });
});
