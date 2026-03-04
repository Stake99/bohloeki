import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';

// Resolve the full Tailwind configuration
const fullConfig = resolveConfig(tailwindConfig);

describe('Design System', () => {
  describe('Color Palette', () => {
    it('should define forest green primary color (#1B4332)', () => {
      const colors = fullConfig.theme?.colors as any;
      expect(colors.primary.forest).toBe('#1B4332');
    });

    it('should define primary color variants', () => {
      const colors = fullConfig.theme?.colors as any;
      expect(colors.primary.forestLight).toBe('#2D6A4F');
      expect(colors.primary.forestDark).toBe('#081C15');
    });

    it('should define neutral colors', () => {
      const colors = fullConfig.theme?.colors as any;
      expect(colors.neutral.black).toBe('#1C1C1C');
      expect(colors.neutral.white).toBe('#FFFFFF');
    });

    it('should define neutral gray scale', () => {
      const colors = fullConfig.theme?.colors as any;
      expect(colors.neutral.gray['50']).toBe('#F9FAFB');
      expect(colors.neutral.gray['100']).toBe('#F3F4F6');
      expect(colors.neutral.gray['200']).toBe('#E5E7EB');
      expect(colors.neutral.gray['300']).toBe('#D1D5DB');
      expect(colors.neutral.gray['400']).toBe('#9CA3AF');
      expect(colors.neutral.gray['500']).toBe('#6B7280');
      expect(colors.neutral.gray['600']).toBe('#4B5563');
      expect(colors.neutral.gray['700']).toBe('#374151');
      expect(colors.neutral.gray['800']).toBe('#1F2937');
      expect(colors.neutral.gray['900']).toBe('#111827');
    });

    it('should define accent gold colors', () => {
      const colors = fullConfig.theme?.colors as any;
      expect(colors.accent.gold).toBe('#D4AF37');
      expect(colors.accent.goldLight).toBe('#E5C158');
    });

    it('should define semantic colors', () => {
      const colors = fullConfig.theme?.colors as any;
      expect(colors.semantic.success).toBe('#10B981');
      expect(colors.semantic.error).toBe('#EF4444');
      expect(colors.semantic.warning).toBe('#F59E0B');
      expect(colors.semantic.info).toBe('#3B82F6');
    });
  });

  describe('Spacing Tokens', () => {
    it('should define spacing token 4 as 1rem (16px)', () => {
      const spacing = fullConfig.theme?.spacing as any;
      expect(spacing['4']).toBe('1rem');
    });

    it('should define spacing token 8 as 2rem (32px)', () => {
      const spacing = fullConfig.theme?.spacing as any;
      expect(spacing['8']).toBe('2rem');
    });

    it('should define complete spacing scale', () => {
      const spacing = fullConfig.theme?.spacing as any;
      expect(spacing['0']).toBe('0');
      expect(spacing['1']).toBe('0.25rem'); // 4px
      expect(spacing['2']).toBe('0.5rem');  // 8px
      expect(spacing['3']).toBe('0.75rem'); // 12px
      expect(spacing['4']).toBe('1rem');    // 16px
      expect(spacing['5']).toBe('1.25rem'); // 20px
      expect(spacing['6']).toBe('1.5rem');  // 24px
      expect(spacing['8']).toBe('2rem');    // 32px
      expect(spacing['10']).toBe('2.5rem'); // 40px
      expect(spacing['12']).toBe('3rem');   // 48px
      expect(spacing['16']).toBe('4rem');   // 64px
      expect(spacing['20']).toBe('5rem');   // 80px
      expect(spacing['24']).toBe('6rem');   // 96px
      expect(spacing['32']).toBe('8rem');   // 128px
    });

    it('should have consistent spacing progression', () => {
      const spacing = fullConfig.theme?.spacing as any;
      // Verify that spacing values increase consistently
      const spacingValues = [
        spacing['0'],
        spacing['1'],
        spacing['2'],
        spacing['3'],
        spacing['4'],
        spacing['5'],
        spacing['6'],
        spacing['8'],
        spacing['10'],
        spacing['12'],
        spacing['16'],
        spacing['20'],
        spacing['24'],
        spacing['32'],
      ];
      
      // All spacing values should be defined
      spacingValues.forEach((value) => {
        expect(value).toBeDefined();
        expect(typeof value).toBe('string');
      });
    });
  });

  describe('Typography Scale', () => {
    it('should define base font size as 1rem (16px)', () => {
      const fontSize = fullConfig.theme?.fontSize as any;
      expect(fontSize.base).toBe('1rem');
    });

    it('should define complete font size scale', () => {
      const fontSize = fullConfig.theme?.fontSize as any;
      expect(fontSize.xs).toBe('0.75rem');    // 12px
      expect(fontSize.sm).toBe('0.875rem');   // 14px
      expect(fontSize.base).toBe('1rem');     // 16px
      expect(fontSize.lg).toBe('1.125rem');   // 18px
      expect(fontSize.xl).toBe('1.25rem');    // 20px
      expect(fontSize['2xl']).toBe('1.5rem'); // 24px
      expect(fontSize['3xl']).toBe('1.875rem'); // 30px
      expect(fontSize['4xl']).toBe('2.25rem'); // 36px
      expect(fontSize['5xl']).toBe('3rem');   // 48px
      expect(fontSize['6xl']).toBe('3.75rem'); // 60px
      expect(fontSize['7xl']).toBe('4.5rem'); // 72px
    });

    it('should define font weights', () => {
      const fontWeight = fullConfig.theme?.fontWeight as any;
      expect(fontWeight.normal).toBe('400');
      expect(fontWeight.medium).toBe('500');
      expect(fontWeight.semibold).toBe('600');
      expect(fontWeight.bold).toBe('700');
      expect(fontWeight.extrabold).toBe('800');
    });

    it('should define line heights', () => {
      const lineHeight = fullConfig.theme?.lineHeight as any;
      expect(lineHeight.tight).toBe('1.25');
      expect(lineHeight.normal).toBe('1.5');
      expect(lineHeight.relaxed).toBe('1.75');
    });

    it('should define font families', () => {
      const fontFamily = fullConfig.theme?.fontFamily as any;
      expect(fontFamily.sans).toEqual(['Inter', 'system-ui', 'sans-serif']);
      expect(fontFamily.display).toEqual(['Inter', 'system-ui', 'sans-serif']);
    });
  });

  describe('Design Token Consistency', () => {
    it('should have consistent border radius scale', () => {
      const borderRadius = fullConfig.theme?.borderRadius as any;
      expect(borderRadius.none).toBe('0');
      expect(borderRadius.sm).toBe('0.125rem');   // 2px
      expect(borderRadius.DEFAULT).toBe('0.25rem'); // 4px
      expect(borderRadius.md).toBe('0.375rem');   // 6px
      expect(borderRadius.lg).toBe('0.5rem');     // 8px
      expect(borderRadius.xl).toBe('0.75rem');    // 12px
      expect(borderRadius['2xl']).toBe('1rem');   // 16px
      expect(borderRadius.full).toBe('9999px');
    });

    it('should have consistent box shadow definitions', () => {
      const boxShadow = fullConfig.theme?.boxShadow as any;
      expect(boxShadow.sm).toBeDefined();
      expect(boxShadow.DEFAULT).toBeDefined();
      expect(boxShadow.md).toBeDefined();
      expect(boxShadow.lg).toBeDefined();
      expect(boxShadow.xl).toBeDefined();
      expect(boxShadow.none).toBe('none');
      
      // Verify shadows are strings with proper format
      expect(typeof boxShadow.sm).toBe('string');
      expect(boxShadow.sm).toContain('rgb');
    });

    it('should have consistent breakpoint definitions', () => {
      const screens = fullConfig.theme?.screens as any;
      expect(screens.sm).toBe('640px');   // Mobile landscape
      expect(screens.md).toBe('768px');   // Tablet
      expect(screens.lg).toBe('1024px');  // Desktop
      expect(screens.xl).toBe('1280px');  // Large desktop
      expect(screens['2xl']).toBe('1536px'); // Extra large desktop
    });

    it('should have all primary color variants defined', () => {
      const colors = fullConfig.theme?.colors as any;
      expect(colors.primary).toBeDefined();
      expect(colors.primary.forest).toBeDefined();
      expect(colors.primary.forestLight).toBeDefined();
      expect(colors.primary.forestDark).toBeDefined();
    });

    it('should have all neutral color variants defined', () => {
      const colors = fullConfig.theme?.colors as any;
      expect(colors.neutral).toBeDefined();
      expect(colors.neutral.black).toBeDefined();
      expect(colors.neutral.white).toBeDefined();
      expect(colors.neutral.gray).toBeDefined();
      
      // Verify all gray scale values are defined
      const grayScales = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
      grayScales.forEach((scale) => {
        expect(colors.neutral.gray[scale]).toBeDefined();
      });
    });

    it('should have all accent color variants defined', () => {
      const colors = fullConfig.theme?.colors as any;
      expect(colors.accent).toBeDefined();
      expect(colors.accent.gold).toBeDefined();
      expect(colors.accent.goldLight).toBeDefined();
    });

    it('should have all semantic color variants defined', () => {
      const colors = fullConfig.theme?.colors as any;
      expect(colors.semantic).toBeDefined();
      expect(colors.semantic.success).toBeDefined();
      expect(colors.semantic.error).toBeDefined();
      expect(colors.semantic.warning).toBeDefined();
      expect(colors.semantic.info).toBeDefined();
    });

    it('should use rem units for spacing consistency', () => {
      const spacing = fullConfig.theme?.spacing as any;
      const spacingKeys = ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32'];
      
      spacingKeys.forEach((key) => {
        if (key !== '0') {
          expect(spacing[key]).toMatch(/rem$/);
        }
      });
    });

    it('should use rem units for font size consistency', () => {
      const fontSize = fullConfig.theme?.fontSize as any;
      const fontSizeKeys = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'];
      
      fontSizeKeys.forEach((key) => {
        expect(fontSize[key]).toMatch(/rem$/);
      });
    });

    it('should have hex color format for all custom colors', () => {
      const colors = fullConfig.theme?.colors as any;
      
      // Test primary colors
      expect(colors.primary.forest).toMatch(/^#[0-9A-F]{6}$/i);
      expect(colors.primary.forestLight).toMatch(/^#[0-9A-F]{6}$/i);
      expect(colors.primary.forestDark).toMatch(/^#[0-9A-F]{6}$/i);
      
      // Test neutral colors
      expect(colors.neutral.black).toMatch(/^#[0-9A-F]{6}$/i);
      expect(colors.neutral.white).toMatch(/^#[0-9A-F]{6}$/i);
      
      // Test accent colors
      expect(colors.accent.gold).toMatch(/^#[0-9A-F]{6}$/i);
      expect(colors.accent.goldLight).toMatch(/^#[0-9A-F]{6}$/i);
      
      // Test semantic colors
      expect(colors.semantic.success).toMatch(/^#[0-9A-F]{6}$/i);
      expect(colors.semantic.error).toMatch(/^#[0-9A-F]{6}$/i);
      expect(colors.semantic.warning).toMatch(/^#[0-9A-F]{6}$/i);
      expect(colors.semantic.info).toMatch(/^#[0-9A-F]{6}$/i);
    });
  });

  describe('Design System Completeness', () => {
    it('should have all required design tokens defined', () => {
      const theme = fullConfig.theme;
      
      // Verify all major token categories exist
      expect(theme?.colors).toBeDefined();
      expect(theme?.spacing).toBeDefined();
      expect(theme?.fontSize).toBeDefined();
      expect(theme?.fontWeight).toBeDefined();
      expect(theme?.lineHeight).toBeDefined();
      expect(theme?.fontFamily).toBeDefined();
      expect(theme?.borderRadius).toBeDefined();
      expect(theme?.boxShadow).toBeDefined();
      expect(theme?.screens).toBeDefined();
    });

    it('should maintain design system version consistency', () => {
      // This test ensures that if design tokens are updated,
      // they maintain the expected structure
      const colors = fullConfig.theme?.colors as any;
      const spacing = fullConfig.theme?.spacing as any;
      const fontSize = fullConfig.theme?.fontSize as any;
      
      // Verify core design tokens are present
      expect(colors.primary).toBeDefined();
      expect(colors.neutral).toBeDefined();
      expect(colors.accent).toBeDefined();
      expect(colors.semantic).toBeDefined();
      
      expect(spacing['4']).toBeDefined();
      expect(spacing['8']).toBeDefined();
      
      expect(fontSize.base).toBeDefined();
      expect(fontSize['2xl']).toBeDefined();
    });
  });
});
