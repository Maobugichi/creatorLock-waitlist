import Hero from "@/components/Hero";
import Nav from "@/components/nav";
import { CardStack } from "../../components/card/CardStack";

export default function Home() {
  return (
    <div >
      <main >
        <Nav/>
        <Hero/>
        <CardStack/>
      </main>
    </div>
  );
}
