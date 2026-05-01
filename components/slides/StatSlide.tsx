"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";

type Props = {
  direction: number;
  number: string;
  label: string;
  sub?: string;
  source?: string;
};

export function StatSlide({ direction, number, label, sub, source }: Props) {
  return (
    <Slide direction={direction}>
      <div className="max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[clamp(7rem,22vw,22rem)] leading-[0.85] tracking-tight"
        >
          <span className="bg-gradient-to-br from-acid via-sky to-hot bg-clip-text text-transparent">
            {number}
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 text-2xl md:text-4xl headline max-w-[40ch]"
        >
          {label}
        </motion.p>
        {sub && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-6 text-base md:text-lg text-ink/55 max-w-[60ch]"
          >
            {sub}
          </motion.p>
        )}
        {source && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.4 }}
            className="mt-4 label"
          >
            {source}
          </motion.p>
        )}
      </div>
    </Slide>
  );
}
