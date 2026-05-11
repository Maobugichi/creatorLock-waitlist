interface WaitlistBadgeProps {
  count: number;
}

const WaitlistBadge = ({ count }: WaitlistBadgeProps) => {
  if (count === 0) return null;

  return (
    <div className="mb-6 flex justify-center">
      <div className="group relative overflow-hidden rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 backdrop-blur-md">
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,92,6,0.14),transparent_65%)]" />
        </div>
        <div className="absolute inset-0">
          <div className="absolute -left-10 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#FB5C06]/30 blur-xl animate-[orbit_5s_linear_infinite]" />
        </div>
        <div className="relative flex items-center gap-2">
          <div className="relative h-2 w-2">
            <div className="absolute inset-0 rounded-full bg-[#FB5C06] animate-ping opacity-70" />
            <div className="relative h-2 w-2 rounded-full bg-[#FB5C06]" />
          </div>
          <p className="text-[12px] tracking-wide text-neutral-300">
            <span className="font-semibold text-white">{count.toLocaleString()}</span>{" "}
            creators locked in
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaitlistBadge;