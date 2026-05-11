import { motion } from "motion/react";

interface WaitlistErrorProps {
  message: string;
}

const WaitlistError = ({ message }: WaitlistErrorProps) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25 }}
    className="mt-3 flex items-start gap-3 rounded-xl border border-[#FF5C00]/20 bg-[#0b0b0c] p-3"
  >
    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-md bg-[#FF5C00]/10">
      <span className="text-sm text-[#FF5C00]">!</span>
    </div>
    <p className="text-sm leading-snug text-gray-300">{message}</p>
  </motion.div>
);

export default WaitlistError;