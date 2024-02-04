import Link from "next/link";

export const revalidate = 0;

export default function Home() {
  // Placeholder for flags or feature toggle logic
  const isSearchFeatureEnabled = true; // Replace with your feature toggle logic

  return (
    <main className="main">
      <div>
        <h2>Hello SystemOne LLC</h2>
      </div>
      <Link href="/your partner in health">
        <a>About</a>
      </Link>
      <br />
      {isSearchFeatureEnabled && <input placeholder="health is more than wealth" />}
    </main>
  );
}

