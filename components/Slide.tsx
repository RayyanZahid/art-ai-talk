"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

const variants: Variants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 60 : -60,
    filter: "blur(8px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -60 : 60,
    filter: "blur(8px)",
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 1, 1],
    },
  }),
};

export type SlideProps = {
  children: ReactNode;
  /** Direction of the last navigation (1 = forward, -1 = back). */
  direction?: number;
  className?: string;
  /** Use this to skip the default centered max-w padding. */
  bare?: boolean;
};

export function Slide({ children, direction = 1, className, bare }: SlideProps) {
  return (
    <motion.section
      key="slide"
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className={cn(
        "absolute inset-0",
        // Allow vertical scroll on slides that overflow the viewport (mostly mobile).
        // Desktop content fits, so this is mostly a safety net.
        !bare && "overflow-y-auto overscroll-contain",
        bare
          ? "p-0"
          : "px-[5vw] py-[7vh] sm:px-[6vw] sm:py-[6vh] pb-[14vh] sm:pb-[6vh]",
        className,
      )}
    >
      <div
        className={cn(
          "relative z-10",
          bare
            ? "w-full h-full"
            : "w-full max-w-[1200px] mx-auto min-h-full flex flex-col justify-center",
        )}
      >
        {children}
      </div>
    </motion.section>
  );
}
