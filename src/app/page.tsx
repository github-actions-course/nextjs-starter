import Link from "next/link";
import flag from "@/app/utils/flagsmith";
import flagsmith from "@/app/utils/flagsmith";

export const revalidate = 0;

export default async function Home() {
  const flags = await flagsmith.getEnvironmentFlags();
  return (
    <main className="main">
      <div>
        <h2>Hello World</h2>
        <p>Based Testing Environment -- Development 1/22/2024</p>
      </div>
      <Link href="/about">About</Link>
      <br />
      {flags.isFeatureEnabled("search") && <input placeholder="Search" />}
    </main>
  );
}
