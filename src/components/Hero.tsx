"use client";

import WaitlistForm from "./form";
import Image from "next/image";
import Coin from "./ui/coin";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { COINS } from "@/constant/hero.constant";



const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { stiffness: 60, damping: 20, mass: 1 };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      rawX.set((e.clientX - rect.left - rect.width / 2) / rect.width);
      rawY.set((e.clientY - rect.top - rect.height / 2) / rect.height);
    };

    const handleMouseLeave = () => {
      rawX.set(0);
      rawY.set(0);
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [rawX, rawY]);

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
};

interface ParallaxCoinProps {
  size: number;
  rotate: number;
  skewX: number;
  skewY: number;
  scale: number;
  opacity: number;
  blur: number;
  depth: number;
  className: string;
  smoothX: ReturnType<typeof useSpring>;
  smoothY: ReturnType<typeof useSpring>;
}

const ParallaxCoin = ({
  smoothX,
  smoothY,
  depth,
  className,
  ...coinProps
}: ParallaxCoinProps) => {
  const x = useTransform(smoothX, (v: number) => v * depth * 800);
  const y = useTransform(smoothY, (v: number) => v * depth * 800);

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ x, y, width: coinProps.size, height: coinProps.size }}
    >
      <Coin {...coinProps} />
    </motion.div>
  );
};

export default Hero;