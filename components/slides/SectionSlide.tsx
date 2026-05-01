"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";

type Props = {
  direction: number;
  kicker: string;
  title: string;
  subtitle?: string;
};

export function SectionSlide({ direction, kicker, title, subtitle }: Props) {
  return (
    <Slide direction={direction}>
      <div className="grid grid-cols-12 gap-6 items-baseline">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-12 md:col-span-3"
        >
          <span className="text-[clamp(4rem,9vw,9rem)] font-serif text-hot leading-none">
            {kicker}
          </span>
        </motion.div>
        <div className="col-span-12 md:col-span-9">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="headline text-[clamp(2.5rem,7vw,6rem)] leading-[0.95]"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 text-xl text-ink/55 max-w-[60ch]"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </Slide>
  );
}
