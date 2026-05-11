"use client";

import { motion } from "motion/react";
import WaitlistSuccess from "./waitlist-success";
import WaitlistError from "./waitlist-error";
import { useWaitlistForm } from "./form.hooks";

export default function WaitlistForm() {
  const {
    form,
    submitted,
    hovered,
    setHovered,
    isPending,
    errorMessage,
    onSubmit,
  } = useWaitlistForm();

  const { register, handleSubmit, getValues, formState: { errors } } = form;

  if (submitted) {
    return <WaitlistSuccess email={getValues("email")} />;
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      animate={errorMessage ? { x: [0, -3, 3, -2, 2, 0] } : {}}
      transition={{ duration: 0.25 }}
      className="relative mx-auto w-[90%] max-w-[clamp(280px,80vw,448px)]"
    >
      <div className="relative h-14">
        <input
          {...register("email")}
          type="email"
          placeholder="your@email.com"
          className="h-full w-full rounded-xl border border-gray-700 bg-transparent p-3 pr-36 placeholder:text-gray-500 focus:border-[#FF5C00]/70 focus:outline-none"
        />

        <motion.button
          type="submit"
          disabled={isPending}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          className="absolute bottom-1 right-1 top-1 overflow-hidden rounded-lg px-4 text-sm font-medium whitespace-nowrap disabled:opacity-60"
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
        <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
      )}

      {errorMessage && <WaitlistError message={errorMessage} />}
    </motion.form>
  );
}