import axios from "axios";
import { WaitlistInput } from "@/lib/validations";

export type ApiErrorResponse = {
  message?: string;
  error?: string;
};

export const joinWaitlist = async (data: WaitlistInput) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/waitlist`,
    data
  );
  return res.data;
};