"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { GenerativeBackdrop } from "@/components/visuals/GenerativeBackdrop";

export function TitleSlide({ direction }: { direction: number }) {
  return (
    <Slide direction={direction} bare>
      <div className="absolute inset-0 grain">
        <GenerativeBackdrop variant="title" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-[6vw]">
        <div className="relative z-10 max-w-[1300px] w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="kicker text-hot mb-8"
          >
            ✱ AI Infra Conf · 2026 · 25 min
          </motion.div>

          <h1 className="headline text-[clamp(3.5rem,10vw,11rem)] font-normal tracking-tight">
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Art
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="block italic text-muted text-[0.55em] -mt-3 ml-[6vw]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              and the
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.95, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="block ml-[12vw]"
            >
              <span className="bg-gradient-to-r from-acid via-sky to-hot bg-clip-text text-transparent">
                Coders.
              </span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-12 max-w-[44ch] text-lg md:text-xl text-ink/70 leading-relaxed"
          >
            On coding agents, sixty years of artists writing code,
            and why AI infra is incomplete without taste.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mt-12 flex items-baseline gap-6 text-sm text-ink/40 font-mono"
          >
            <span className="text-ink/30">press → to begin</span>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
