import Link from "next/link";
import flagsmith from "@utils/flagsmith";
 export const revalidate = 0
export default function Home() {
  const flags = flagsmith.getEnvironmentalflags();
  return (
    <main className="main" >
      <div>
        <h2>Hello World</h2>
      </div>
      <Link href="/about">About</Link>
      <br/>
      {flags.isfeatureEnabled("search") && 
      <input placeholder="search" />}
    </main>
  );
}
