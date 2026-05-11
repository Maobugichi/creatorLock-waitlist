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


export const getWaitlistCount = async (): Promise<number> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/waitlist/count`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return 0;
  const data = await res.json();
  return data.data.count as number;
};