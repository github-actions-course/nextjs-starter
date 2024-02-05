import Link from 'next/link';

export const revalidate = 0;

export default function Home() {
  return (
    <main className="main" style={{ backgroundColor: 'white', lineHeight: '1.3' }}>
      <div>
<<<<<<< HEAD
        <h2 style={{ color: 'blue', fontSize: '24px' }}>SystemOne LLC</h2>
      </div>
      <Link href="/your-partner-in-health">
        <a style={{ color: 'green', fontSize: '18px' }}>your partner in health</a>
      </Link>
      <p style={{ color: 'orange', fontSize: '16px', marginTop: '10px' }}>Always You</p>
=======
        <h2>SystemOne LLC</h2>
      </div>
      <Link href="/your 
      partner 
      in health">
        <a>your 
          partner
           in health</a>
      </Link>
      <br />
      {isSearchFeatureEnabled && <input color="Health is more than Wealth" />}
>>>>>>> b91cdba8231a3e1341ba2a3ec98ac0030b0e19ad
    </main>
  );
}
