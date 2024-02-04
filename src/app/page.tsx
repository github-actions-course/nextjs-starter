import Link from "next/link";

export const revalidate = 0;

export default function Home() {
  // Placeholder for flags or feature toggle logic
  const isSearchFeatureEnabled = true; // Replace with your feature toggle logic

  return (
    <main className="main">
      <div>
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
    </main>
  );
}

