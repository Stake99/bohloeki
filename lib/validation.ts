import { z } from 'zod';

/**
 * Contact form validation schema
 * Validates user input for the contact form
 * 
 * Requirements:
 * - 10.2: Form validation with field-specific errors
 * - 10.6: Email format validation
 * - 10.7: Required field validation
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  phone: z
    .string()
    .regex(/^[\d\s\-\+\(\)]+$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  company: z
    .string()
    .max(100, 'Company name must be less than 100 characters')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

/**
 * Contact form data type inferred from schema
 * Use this type for form data throughout the application
 */
export type ContactFormData = z.infer<typeof contactFormSchema>;
