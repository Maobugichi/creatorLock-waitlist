"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waitlistSchema, WaitlistInput } from "@/lib/validations";
import { motion } from "motion/react";
import Image from "next/image";
import { useWaitlist, getErrorMessage } from "../hooks/useWaitlist";
import { Check } from "@phosphor-icons/react";


export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<WaitlistInput>({
    resolver: zodResolver(waitlistSchema),
  });

  const { mutate, isPending, error } = useWaitlist();

  const errorMessage = error ? getErrorMessage(error) : null;

  const onSubmit = (data: WaitlistInput) => {
    mutate(data, {
      onSuccess: () => {
        setSubmitted(true);
        reset();
      },
    });
  };


  if (submitted) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto w-[90%] max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0B]/90 p-7 text-center backdrop-blur-2xl"
    >
      {/* ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,92,0,0.15),transparent_55%)]" />

      {/* floating gradient orb */}
      <div className="absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#FF5C00]/10 blur-3xl animate-pulse" />

      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10">
        
        {/* icon */}
        <motion.div
          initial={{ scale: 0.7, rotate: -8, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
          className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center"
        >
          {/* rotating ring */}
          <div className="absolute inset-0 rounded-full border border-[#FF5C00]/30" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="absolute inset-[-6px] rounded-full border-t border-[#FF5C00]/40 border-r border-transparent border-b border-transparent border-l border-transparent"
          />

          {/* core */}
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#FF5C00]/10 border border-[#FF5C00]/25 backdrop-blur-md">
            <Check
              size={20}
              weight="bold"
              className="text-[#FF5C00]"
            />
          </div>
        </motion.div>

        {/* heading */}
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          You’re l
          <span>
            <Image
              src="/og-icon.svg"
              alt="o"
              width={40}
              height={40}
              style={{
                display: "inline",
                width: "0.72em",
                height: "0.72em",
                verticalAlign: "middle",
              }}
            />
          </span>
          cked in
        </h2>

        {/* subtext */}
        <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-neutral-400">
          Your access request has been secured.  
          We’ll notify{" "}
          <span className="text-white font-medium">
            {getValues("email")}
          </span>{" "}
          when CreatorLock opens its vault.
        </p>

        {/* mini badge */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-neutral-300">
          <div className="h-1.5 w-1.5 rounded-full bg-[#FF5C00] animate-pulse" />
          Early creator access reserved
        </div>
      </div>
    </motion.div>
  );
}

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      animate={errorMessage ? { x: [0, -3, 3, -2, 2, 0] } : {}}
      transition={{ duration: 0.25 }}
      className="relative w-[90%] max-w-[clamp(280px,80vw,448px)] mx-auto"
    >
      <div className="relative h-14">
        <input
          {...register("email")}
          type="email"
          placeholder="your@email.com"
          className="w-full h-full rounded-xl p-3 pr-36 border border-gray-700 bg-transparent focus:outline-none focus:border-[#FF5C00]/70 placeholder:text-gray-500"
        />

        <motion.button
          type="submit"
          disabled={isPending}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          className="absolute right-1 top-1 bottom-1 px-4 rounded-lg text-sm font-medium whitespace-nowrap disabled:opacity-60 overflow-hidden"
          style={{ backgroundColor: "#FF5C00" }}
        >
          <motion.span
            aria-hidden
            className="absolute inset-0 bg-white"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          <motion.span
            className="relative z-10"
            animate={{ color: hovered ? "#FF5C00" : "#ffffff" }}
            transition={{ duration: 0.3 }}
          >
            {isPending ? "Joining..." : "Join the waitlist"}
          </motion.span>
        </motion.button>
      </div>

      {errors.email && (
        <p className="error mt-2 text-sm">{errors.email.message}</p>
      )}

      {errorMessage && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-3 flex items-start gap-3 p-3 rounded-xl 
                    bg-[#0b0b0c] border border-[#FF5C00]/20"
        >
          <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-md bg-[#FF5C00]/10">
            <span className="text-[#FF5C00] text-sm">!</span>
          </div>

          <p className="text-sm text-gray-300 leading-snug">
            {errorMessage}
          </p>
        </motion.div>
      )}
    </motion.form>
  );
}