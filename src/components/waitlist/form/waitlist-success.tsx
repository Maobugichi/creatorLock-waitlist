import { motion } from "motion/react";
import Image from "next/image";
import { Check } from "@phosphor-icons/react";

interface WaitlistSuccessProps {
  email: string;
}

const WaitlistSuccess = ({ email }: WaitlistSuccessProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.94, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="relative mx-auto w-[90%] max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0B]/90 p-7 text-center backdrop-blur-2xl"
  >
    {/* ambient glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,92,0,0.15),transparent_55%)]" />

    {/* floating orb */}
    <div className="absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#FF5C00]/10 blur-3xl animate-pulse" />

    {/* grid */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />

    <div className="relative z-10">
      <motion.div
        initial={{ scale: 0.7, rotate: -8, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 18 }}
        className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center"
      >
        <div className="absolute inset-0 rounded-full border border-[#FF5C00]/30" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute inset-[-6px] rounded-full border-t border-[#FF5C00]/40 border-r border-transparent border-b border-transparent border-l border-transparent"
        />
        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#FF5C00]/10 border border-[#FF5C00]/25 backdrop-blur-md">
          <Check size={20} weight="bold" className="text-[#FF5C00]" />
        </div>
      </motion.div>

      <h2 className="text-2xl font-semibold tracking-tight text-white">
        You`&apos;`re l
        <span>
          <Image
            src="/og-icon.svg"
            alt="o"
            width={40}
            height={40}
            style={{ display: "inline", width: "0.72em", height: "0.72em", verticalAlign: "middle" }}
          />
        </span>
        cked in
      </h2>

      <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-neutral-400">
        Your access request has been secured. We`&apos;`ll notify{" "}
        <span className="font-medium text-white">{email}</span>{" "}
        when CreatorLock opens its vault.
      </p>

      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-neutral-300">
        <div className="h-1.5 w-1.5 rounded-full bg-[#FF5C00] animate-pulse" />
        Early creator access reserved
      </div>
    </div>
  </motion.div>
);

export default WaitlistSuccess;