"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";

type Props = {
  direction: number;
  quote: string;
  attribution: string;
  sub?: string;
};

export function QuoteSlide({ direction, quote, attribution, sub }: Props) {
  return (
    <Slide direction={direction}>
      <div className="max-w-[1100px]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="kicker text-hot mb-8"
        >
          ↓ on the record
        </motion.p>
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[clamp(2rem,5.2vw,5.2rem)] leading-[1.05] text-ink"
        >
          <span className="text-hot/70 mr-2 align-top text-[1.4em] leading-none">“</span>
          {quote}
          <span className="text-hot/70 ml-2 align-baseline text-[1.4em] leading-none">”</span>
        </motion.blockquote>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="mt-12 flex items-baseline gap-4"
        >
          <span className="block w-10 h-px bg-hot" />
          <span className="font-mono text-sm uppercase tracking-widest text-ink/85">
            {attribution}
          </span>
          {sub && <span className="text-sm text-ink/40 italic">{sub}</span>}
        </motion.div>
      </div>
    </Slide>
  );
}
