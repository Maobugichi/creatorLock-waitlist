import Image from "next/image";

interface CoinProps {
  size?: number;
  rotate?: number;
  skewX?: number;
  skewY?: number;
  scale?: number;
  opacity?: number;
  blur?: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

export default function Coin({
  size = 180,
  rotate = 0,
  skewX = 0,
  skewY = 0,
  scale = 1,
  opacity = 0.5,
  blur = 0,
  position,
}: CoinProps) {
  return (
    <div
      className="absolute"
      style={{
        ...position,
        transform: `rotate(${rotate}deg) skewX(${skewX}deg) skewY(${skewY}deg) scale(${scale})`,
        opacity,
        filter: blur ? `blur(${blur}px)` : undefined,
        zIndex: 0,
      }}
    >
      <Image
        src="/coinIllustration.png"
        alt="coin"
        width={size}
        height={size}
      />
    </div>
  );
}