"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waitlistSchema, WaitlistInput } from "@/lib/validations";
import { motion, AnimatePresence } from "motion/react";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");
  const [hovered, setHovered] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistInput>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistInput) => {
    setServerError("");
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/waitlist`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      const json = await res.json();
      setServerError(json.error ?? "Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="success">
        <div className="success-icon">✓</div>
        <h2>You&apos;re on the list!</h2>
        <p>
          We&apos;ll reach out at <strong>{getValues("email")}</strong> when
          it&apos;s your turn.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-[90%]  max-w-[clamp(280px,80vw,448px)] mx-auto"
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
          disabled={isSubmitting}
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
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          />

         
          <motion.span
            className="relative z-10"
            animate={{ color: hovered ? "#FF5C00" : "#ffffff" }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {isSubmitting ? "Joining..." : "Join the waitlist"}
          </motion.span>
        </motion.button>
      </div>

      {errors.email && (
        <p className="error mt-2 text-sm">{errors.email.message}</p>
      )}
      {serverError && (
        <p className="error mt-2 text-sm">{serverError}</p>
      )}
    </form>
  );
}