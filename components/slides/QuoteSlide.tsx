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
      <div className="max-w-[1200px]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="kicker text-hot mb-10"
        >
          ↓ on the record
        </motion.p>

        <div className="relative">
          {/* Hanging open-quote — large, decorative, sits in the gutter */}
          <motion.span
            initial={{ opacity: 0, x: -8, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            aria-hidden
            className="absolute -top-6 -left-2 md:-left-12 font-serif text-hot/50 leading-none select-none"
            style={{ fontSize: "clamp(5rem, 9vw, 10rem)" }}
          >
            “
          </motion.span>

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[clamp(2rem,5.2vw,5.2rem)] leading-[1.05] text-ink relative"
          >
            {quote}
          </motion.blockquote>
        </div>

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
