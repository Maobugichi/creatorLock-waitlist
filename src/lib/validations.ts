import { z } from "zod";

export const waitlistSchema = z.object({
  name:z.string().min(2, "Name must be at least 2 charaters").optional(),
  email:z.email("Please enter a valid email address")
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;