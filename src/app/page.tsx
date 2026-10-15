import Link from "next/link";
import flagsmith from "./utilis/flagsmith";
export const dynamic = "force-dynamic";

export default async function Home() {
  const flags = await flagsmith.getEnvironmentFlags();

  return (
    <main className="main">
      <div>
        <h2>Hello World</h2>
      </div>
      <p>Env Staging, updated text</p>
      <p>Env Staging, updated text</p>
      <Link href="/about">About</Link>
      <br />
      {flags.isFeatureEnabled("search") && <input placeholder="Search" />}
    </main>
  );
}
