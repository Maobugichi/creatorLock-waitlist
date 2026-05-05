"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waitlistSchema, WaitlistInput } from "@/lib/validations";
import { motion } from "motion/react";
import Image from "next/image";
import { useWaitlist, getErrorMessage } from "@/hooks/useWaitlist";
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
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="mx-auto w-[90%] max-w-md rounded-2xl p-6 text-center 
                   bg-[#0b0b0c] border border-white/5"
      >
          <div className="relative mx-auto mb-4 w-14 h-14 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#FF5C00]/20 blur-xl" />

          <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-[#FF5C00]/10 border border-[#FF5C00]/30">
            <Check size={20} weight="bold" className="text-[#FF5C00]" />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-white">
          You’re l
          <span>
            <Image
              src="/og-icon.svg"
              alt="o"
              width={40}
              height={40}
              style={{
                display: "inline",
                width: "0.7em",
                height: "0.7em",
                verticalAlign: "middle",
              }}
            />
          </span>
          cked in 
        </h2>

        <p className="text-gray-400 text-sm mt-2">
          We’ll notify{" "}
          <span className="text-white">{getValues("email")}</span> when your
          spot unlocks.
        </p>
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