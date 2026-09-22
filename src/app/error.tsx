'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled Application Error:', error);
  }, [error]);

  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Something went wrong!</h2>
      <p style={{ color: '#64748B', marginBottom: '1.5rem', maxWidth: '480px' }}>
        An unexpected error occurred while loading this page. Please try reloading or returning to the homepage.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={() => reset()}
          style={{ padding: '0.75rem 1.5rem', backgroundColor: '#1E3A8A', color: '#FFF', borderRadius: '0.375rem', fontWeight: 600, border: 'none', cursor: 'pointer' }}
        >
          Try again
        </button>
        <Link
          href="/"
          style={{ padding: '0.75rem 1.5rem', backgroundColor: '#F1F5F9', color: '#0F172A', borderRadius: '0.375rem', fontWeight: 600, textDecoration: 'none' }}
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
