import WaitlistForm from "./form";
import { Lock } from "./Lock";
import { Node } from "./Node";
import { Token } from "./Token";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-neutral-950 text-white">
        
        <div className="max-w-3xl">
          <h1 className="text-6xl  text-center font-bold mb-4">
          Your knowledge. <span className="text-[#FB5C06]">Protected.</span> Profitable.
          </h1>

          <p className="text-gray-400 mb-6 text-center max-w-lg mx-auto">
          CreatorLock is the platform built for Nigerian creatives to sell digital products, protect their work, and get paid — without the stress.
          </p>
         <WaitlistForm/>
         
        </div>
    </section>
  );
}