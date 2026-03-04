/**
 * Form-related TypeScript type definitions for Bohloeki Enterprises website
 * These interfaces define form data structures and component props for form handling
 */

// ============================================================================
// Contact Form Types
// ============================================================================

/**
 * Contact form data interface
 * Defines the structure of data collected from the contact form
 * 
 * @property name - User's full name (required)
 * @property email - User's email address (required)
 * @property phone - User's phone number (optional)
 * @property company - User's company name (optional)
 * @property message - User's message or inquiry (required)
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

/**
 * Contact form component props interface
 * Defines props for the ContactForm component
 * 
 * @property onSubmit - Async callback function to handle form submission
 * @property className - Optional CSS class name for styling
 */
export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  className?: string;
}

// ============================================================================
// Form Field Component Props
// ============================================================================

/**
 * Form field component props interface
 * Defines props for reusable form input components
 * 
 * @property label - Label text for the form field
 * @property name - Field name for form registration
 * @property type - Input type (text, email, tel, or textarea)
 * @property error - Optional error message to display
 * @property required - Whether the field is required
 * @property register - React Hook Form register function
 * @property placeholder - Optional placeholder text
 */
export interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  error?: string;
  required?: boolean;
  register: any;
  placeholder?: string;
}
