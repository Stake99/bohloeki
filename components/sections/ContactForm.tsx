'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '@/lib/validation';
import { Button } from '@/components/ui/Button';

export interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>;
  className?: string;
}

/**
 * ContactForm component with React Hook Form, Zod validation, and field-level errors.
 * Features loading state, success/error feedback, and accessible form labels.
 */
export function ContactForm({ onSubmit, className = '' }: ContactFormProps) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleFormSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus('idle');
      setSubmitMessage('');

      if (onSubmit) {
        await onSubmit(data);
      } else {
        // Default behavior: log to console
        console.log('Form data:', data);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setSubmitStatus('success');
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(
        'Sorry, there was an error submitting your message. Please try again.'
      );
      console.error('Form submission error:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className={`space-y-6 ${className}`}
      noValidate
      aria-labelledby="contact-form-heading"
    >
      <h2 id="contact-form-heading" className="sr-only">
        Contact Form
      </h2>

      {/* Name Field */}
      <FormField
        label="Name"
        name="name"
        type="text"
        required
        error={errors.name?.message}
        register={register}
        placeholder="Your full name"
      />

      {/* Email Field */}
      <FormField
        label="Email"
        name="email"
        type="email"
        required
        error={errors.email?.message}
        register={register}
        placeholder="your.email@example.com"
      />

      {/* Phone Field */}
      <FormField
        label="Phone"
        name="phone"
        type="tel"
        error={errors.phone?.message}
        register={register}
        placeholder="+266 XXXX XXXX"
      />

      {/* Company Field */}
      <FormField
        label="Company"
        name="company"
        type="text"
        error={errors.company?.message}
        register={register}
        placeholder="Your company name"
      />

      {/* Message Field */}
      <FormField
        label="Message"
        name="message"
        type="textarea"
        required
        error={errors.message?.message}
        register={register}
        placeholder="Tell us about your inquiry..."
        rows={6}
      />

      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          className="w-full sm:w-auto"
        >
          Send Message
        </Button>
      </div>

      {/* Success Message with aria-live */}
      {submitStatus === 'success' && (
        <div
          className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg"
          role="alert"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="text-green-800 dark:text-green-200 font-medium">{submitMessage}</p>
        </div>
      )}

      {/* Error Message with aria-live */}
      {submitStatus === 'error' && (
        <div
          className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <p className="text-red-800 dark:text-red-200 font-medium">{submitMessage}</p>
        </div>
      )}
    </form>
  );
}

/**
 * FormField component for reusable form inputs
 */
interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  error?: string;
  required?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  placeholder?: string;
  rows?: number;
}

function FormField({
  label,
  name,
  type = 'text',
  error,
  required,
  register,
  placeholder,
  rows,
}: FormFieldProps) {
  const Component = type === 'textarea' ? 'textarea' : 'input';
  const inputId = `contact-form-${name}`;
  const errorId = `${inputId}-error`;

  const baseClasses =
    'w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-forest focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400';
  const errorClasses = error
    ? 'border-red-500 focus:ring-red-500 dark:border-red-400 dark:focus:ring-red-400'
    : 'border-gray-300 dark:border-gray-600';
  const inputClasses = `${baseClasses} ${errorClasses}`;

  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-900 dark:text-white">
        {label}
        {required && <span className="text-red-500 dark:text-red-400 ml-1" aria-label="required">*</span>}
      </label>
      <Component
        id={inputId}
        type={type !== 'textarea' ? type : undefined}
        rows={type === 'textarea' ? rows : undefined}
        {...register(name)}
        placeholder={placeholder}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : undefined}
        aria-required={required ? 'true' : 'false'}
        className={inputClasses}
      />
      {error && (
        <p id={errorId} className="text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
