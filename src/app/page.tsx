import Link from 'next/link';

export const revalidate = 0;

export default function Home() {
  return (
    <main className="main" style={{ backgroundColor: 'white', lineHeight: '1.3' }}>
      <div>
        <h2 style={{ color: 'blue', fontSize: '24px' }}>SystemOne LLC</h2>
      </div>
      <Link href="/your-partner-in-health">
        <a style={{ color: 'green', fontSize: '18px' }}>your partner in health</a>
      </Link>
      <p style={{ color: 'orange', fontSize: '16px', marginTop: '10px' }}>Always You</p>
    </main>
  );
}
