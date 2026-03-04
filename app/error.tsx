'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error boundary caught:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Container size="md">
        <div className="text-center py-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Something went wrong!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We apologize for the inconvenience. An error occurred while loading this page.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={reset}
          >
            Try again
          </Button>
        </div>
      </Container>
    </div>
  );
}
