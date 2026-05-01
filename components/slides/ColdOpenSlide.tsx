"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";

export function ColdOpenSlide({ direction }: { direction: number }) {
  return (
    <Slide direction={direction}>
      <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-12 items-center">
        {/* Left: Vera Molnár-inspired plotter sketch (SVG, animated draw) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square w-full max-w-md mx-auto"
        >
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full text-ink/85"
            fill="none"
            stroke="currentColor"
            strokeWidth={0.7}
          >
            {/* (Désordres-style) — concentric squares with progressive rotation */}
            {Array.from({ length: 32 }).map((_, i) => {
              const size = 8 + i * 5.5;
              const rot = (i * (i % 2 === 0 ? 2.4 : -3.1)) + (i > 18 ? (i - 18) * 4 : 0);
              return (
                <motion.rect
                  key={i}
                  x={100 - size / 2}
                  y={100 - size / 2}
                  width={size}
                  height={size}
                  transform={`rotate(${rot} 100 100)`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.025, duration: 1.2, ease: "easeInOut" }}
                  stroke={i > 24 ? "var(--color-hot)" : "currentColor"}
                />
              );
            })}
          </svg>
          <div className="mt-3 text-center label">
            after Vera Molnár · <span className="italic">Désordres</span> · 1974
          </div>
        </motion.div>

        {/* Right: hook copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="kicker text-hot mb-6"
          >
            Cold open
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="headline text-[clamp(2rem,4.6vw,4.5rem)] leading-[0.98]"
          >
            In <span className="italic text-acid">1968</span>, a 44-year-old
            painter walked into a Sorbonne computer lab,
            taught herself <span className="font-mono not-italic text-sky text-[0.85em]">FORTRAN</span>,
            and started telling a plotter what to draw.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mt-8 text-lg text-ink/65 max-w-[58ch]"
          >
            She kept doing it for the next fifty-five years. She died in
            December 2023 at age <span className="text-ink">99</span>, two
            months after her first major retrospective at the Centre
            Pompidou.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.6 }}
            className="mt-6 text-xl md:text-2xl text-acid font-serif italic"
          >
            None of you have heard of her.
          </motion.p>
        </div>
      </div>
    </Slide>
  );
}
