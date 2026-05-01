"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";

const lines = [
  {
    label: "01",
    text: "Artists have been writing code for sixty years.",
    accent: "text-sky",
  },
  {
    label: "02",
    text: "Coding agents just collapsed the gap between taste and shipping.",
    accent: "text-acid",
  },
  {
    label: "03",
    text: "Your AI infra is incomplete without them.",
    accent: "text-hot",
  },
];

export function ThesisSlide({ direction }: { direction: number }) {
  return (
    <Slide direction={direction}>
      <div className="max-w-[1100px]">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="kicker text-hot mb-12"
        >
          Thesis
        </motion.p>

        <ol className="space-y-10">
          {lines.map((l, i) => (
            <motion.li
              key={l.label}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-8"
            >
              <span className="font-mono text-sm pt-3 text-ink/40 tabular-nums">{l.label}</span>
              <span className={`headline text-[clamp(1.7rem,4vw,3.6rem)] leading-tight ${l.accent}`}>
                {l.text}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </Slide>
  );
}
