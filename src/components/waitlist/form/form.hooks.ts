import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waitlistSchema, WaitlistInput } from "@/lib/validations";
import { useWaitlist, getErrorMessage } from "@/hooks/useWaitlist";

export const useWaitlistForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [hovered, setHovered] = useState(false);

  const form = useForm<WaitlistInput>({
    resolver: zodResolver(waitlistSchema),
  });

  const { mutate, isPending, error } = useWaitlist();
  const errorMessage = error ? getErrorMessage(error) : null;

  const onSubmit = (data: WaitlistInput) => {
    mutate(data, {
      onSuccess: () => {
        setSubmitted(true);
        form.reset();
      },
    });
  };

  return {
    form,
    submitted,
    hovered,
    setHovered,
    isPending,
    errorMessage,
    onSubmit,
  };
};