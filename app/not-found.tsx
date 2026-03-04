import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Container size="md">
        <div className="text-center py-12">
          <h1 className="text-6xl sm:text-7xl font-extrabold text-primary-forest mb-4">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <Link href="/">
            <Button variant="primary" size="lg">
              Return Home
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
