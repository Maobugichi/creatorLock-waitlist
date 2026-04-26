import WaitlistForm from "./form";
import Image from "next/image";
import Coin from "./ui/coin";

const Hero = () => {
  return (
    <section className="min-h-[clamp(600px,90vh,900px)] flex items-center justify-center bg-neutral-950 text-white relative overflow-hidden">

     
      <Coin
        size={200}
        rotate={10}
        skewX={-5}
        skewY={-10}
        scale={0.8}
        opacity={0.55}
        blur={0}
        position={{ top: "8%", left: "10%" }}
      />
      <Coin
        size={210}
        rotate={30}
        skewX={-10}
        skewY={2}
        scale={1.0}
        opacity={0.55}
        blur={0.4}
        position={{ bottom: "10%", left: "-3%" }}
      />

      <Coin
        size={165}
        rotate={18}
        skewX={-8}
        skewY={6}
        scale={0.8}
        opacity={0.45}
        blur={0.8}
        position={{ top: "3%", right: "-2%" }}
      />
      <Coin
        size={220}
        rotate={-8}
        skewX={14}
        skewY={-6}
        scale={1.15}
        opacity={0.72}
        blur={0}
        position={{ top: "35%", right: "-5%" }}
      />
      <Coin
        size={185}
        rotate={-14}
        skewX={10}
        skewY={-8}
        scale={0.92}
        opacity={0.58}
        blur={0.3}
        position={{ bottom: "4%", right: "25%" }}
      />

     
      <div className="max-w-3xl relative z-10">
        <h1 className="text-[clamp(2rem,5vw,3.75rem)] text-center font-bold mb-4">
          Your knowledge.<br />
          <span className="text-[#FB5C06]">
            Pr
            <span>
              <Image
                src="/og-icon.svg"
                alt="o"
                width={40}
                height={40}
                priority
                style={{
                  display: "inline",
                  width: "0.7em",
                  height: "0.7em",
                  verticalAlign: "middle",
                }}
              />
            </span>
            tected.
          </span>
          Profitable.
        </h1>
        <p className="text-gray-400 mb-6 text-center leading-8 mx-auto text-[clamp(1.1rem,2.5vw,1.25rem)] max-w-[clamp(280px,80vw,560px)]">
          CreatorLock is the platform built for Nigerian creatives to sell digital products, protect their work, and get paid without the stress.
        </p>
        <WaitlistForm />
      </div>
    </section>
  );
}

export default Hero