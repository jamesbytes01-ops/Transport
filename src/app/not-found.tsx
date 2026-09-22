import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1E3A8A', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ color: '#64748B', marginBottom: '1.5rem', maxWidth: '480px' }}>
        The page or freight documentation you are looking for does not exist or has been relocated.
      </p>
      <Link
        href="/"
        style={{ padding: '0.75rem 1.5rem', backgroundColor: '#1E3A8A', color: '#FFF', borderRadius: '0.375rem', fontWeight: 600, textDecoration: 'none' }}
      >
        Return to Home Page
      </Link>
    </div>
  );
}
