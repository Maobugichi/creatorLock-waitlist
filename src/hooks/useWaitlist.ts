import { useMutation } from "@tanstack/react-query";
import { joinWaitlist, ApiErrorResponse } from "@/lib/api/waitlist";
import axios from "axios";

export function useWaitlist() {
  return useMutation({
    mutationFn: joinWaitlist,

    onError: (err) => {
      console.error("Waitlist error:", err);
    },
  });
}


export function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    return (
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message
    );
  }

  return "Something went wrong. Please try again.";
}