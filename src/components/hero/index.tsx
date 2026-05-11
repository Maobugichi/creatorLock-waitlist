"use client";

import Image from "next/image";
import WaitlistForm from "@/components/waitlist/form/index";
import WaitlistBadge from "./waitlist-badge";
import ParallaxCoin from "./parallax-coin";
import { useParallax } from "./hero.hooks";
import { COINS } from "@/constant/hero.constant";

const Hero = ({ initialCount }: { initialCount: number }) => {
  const { sectionRef, smoothX, smoothY } = useParallax();

  return (
    <section
      ref={sectionRef}
      className="min-h-[clamp(600px,90vh,900px)] flex items-center justify-center bg-neutral-950 text-white relative overflow-hidden"
    >
      {COINS.map((coin, i) => (
        <ParallaxCoin key={i} {...coin} smoothX={smoothX} smoothY={smoothY} />
      ))}

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
                style={{ display: "inline", width: "0.7em", height: "0.7em", verticalAlign: "middle" }}
              />
            </span>
            tected.
          </span>{" "}
          Profitable.
        </h1>

        <p className="text-gray-400 mb-6 text-center leading-8 mx-auto text-[clamp(1.1rem,2.5vw,1.25rem)] max-w-[clamp(280px,80vw,560px)]">
          CreatorLock is the platform built for Nigerian creatives to sell digital products, protect their work, and get paid without the stress.
        </p>

        <WaitlistBadge count={initialCount} />
        <WaitlistForm />
      </div>
    </section>
  );
};

export default Hero;