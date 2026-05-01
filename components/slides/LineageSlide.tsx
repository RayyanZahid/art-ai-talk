"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { GenerativeBackdrop } from "@/components/visuals/GenerativeBackdrop";

const events: { year: number; who: string; what: string; accent?: boolean }[] = [
  { year: 1965, who: "Nees · Nake · Mohr", what: "First public computer-art shows · Stuttgart" },
  { year: 1968, who: "Vera Molnár", what: "Teaches herself FORTRAN, drives a CDC plotter", accent: true },
  { year: 1971, who: "Harold Cohen", what: "Begins AARON — an autonomous painter, maintained 40 years" },
  { year: 1967, who: "Sol LeWitt", what: "“The idea becomes a machine that makes the art.”" },
  { year: 1966, who: "Bell Labs · E.A.T.", what: "9 Evenings · Klüver, Rauschenberg, Cage, 30 engineers" },
  { year: 1999, who: "John Maeda", what: "Design By Numbers · the MIT artist-coder lineage" },
  { year: 2001, who: "Reas + Fry", what: "Processing — sketchbook for software as medium", accent: true },
  { year: 2005, who: "Lieberman et al.", what: "openFrameworks — installation-art in C++" },
  { year: 2013, who: "Lauren McCarthy", what: "p5.js · web-native creative coding" },
  { year: 2018, who: "Olivia Jack", what: "Hydra · live-coded video synth from Bogotá" },
  { year: 2019, who: "Crawford + Paglen", what: "Excavating AI · ImageNet purges 600,000 images" },
  { year: 2025, who: "Karpathy (Feb)", what: "“Vibe coding”", accent: true },
  { year: 2025, who: "Sam Aaron · Tau5", what: "MCP server: Claude Code as creative partner" },
  { year: 2026, who: "you, in this room", what: "make the next move", accent: true },
];

export function LineageSlide({ direction }: { direction: number }) {
  return (
    <Slide direction={direction}>
      <div className="absolute inset-0 -z-0 opacity-50">
        <GenerativeBackdrop variant="lineage" />
      </div>

      <div className="relative max-w-[1300px]">
        <div className="flex items-baseline justify-between mb-10">
          <motion.h2
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="headline text-3xl md:text-5xl"
          >
            Sixty years of <span className="italic text-acid">artists writing code</span>.
          </motion.h2>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="kicker text-ink/40 hidden md:inline"
          >
            non-exhaustive · 1965 → 2026
          </motion.span>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="origin-left h-px bg-line mb-10"
        />

        <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
          {events.map((e, i) => (
            <motion.li
              key={`${e.year}-${e.who}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.06, duration: 0.4 }}
              className="grid grid-cols-[5rem_1fr] gap-4 items-baseline border-b border-line/60 pb-2"
            >
              <span
                className={`font-mono text-sm tabular-nums ${
                  e.accent ? "text-hot" : "text-ink/40"
                }`}
              >
                {e.year}
              </span>
              <span>
                <span
                  className={`block text-base ${
                    e.accent ? "text-acid" : "text-ink"
                  }`}
                >
                  {e.who}
                </span>
                <span className="block text-sm text-ink/55 italic">
                  {e.what}
                </span>
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </Slide>
  );
}
