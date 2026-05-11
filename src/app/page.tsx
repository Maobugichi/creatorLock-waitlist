import Hero from "@/components/hero/index"
import Nav from "@/components/nav";
import { CardStack } from "../components/card/CardStack";
import { getWaitlistCount } from "@/lib/api/waitlist";

export default async function Home() {
  const count = await getWaitlistCount();
  return (
    <div >
      <main >
        <Nav/>
      
        <Hero initialCount={count} />;
        <CardStack/>
      </main>
    </div>
  );
}
