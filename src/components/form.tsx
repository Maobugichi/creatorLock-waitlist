"use client"; // tells Next.js this runs in the browser

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waitlistSchema, WaitlistInput } from "@/lib/validations";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

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
    <form onSubmit={handleSubmit(onSubmit)} className="form relative max-w-md rounded-xl h-14 mx-auto">
    
      <input
        {...register("email")}
        type="email"
        placeholder="your@email.com"
        className="input w-full  h-full rounded-xl focus:outline-ring-300 placeholder:p-3 p-3 border py-1 focus:outline-1 focus:outline-[#FF5C00]/70 border-gray-700"
      />
      {errors.email && (
        <p className="error">{errors.email.message}</p>
      )}

      {serverError && <p className="error">{serverError}</p>}

      <button  type="submit" disabled={isSubmitting} className="btn bg-[#FF5C00] absolute py-4 px-3 w-[150px] right-0 rounded-xl">
        {isSubmitting ? "Joining..." : "Join the waitlist"}
      </button>

    
    </form>
  );
}