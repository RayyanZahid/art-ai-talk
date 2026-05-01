"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";

const counters = [
  {
    objection: "“Artists are just users now — agents do the coding.”",
    rebuttal:
      "Saying ‘make me a tool that does X’ is authorship. And every model needs trainers, evaluators, red-teamers — the cross-domain literacy artists carry is now more important, not less.",
  },
  {
    objection: "“We don’t need artists. We need product designers.”",
    rebuttal:
      "Product designers polish a surface; artists ask whether the product should exist and what it does culturally when it ships. Sycophantic chatbots and slop pipelines were product-designed, not artist-criticized.",
  },
  {
    objection: "“Artist collaboration is performative DEI.”",
    rebuttal:
      "Tell that to ImageNet, which lost 600,000 images. Tell it to IBM facial recognition. Tell it to the Algorithmic Accountability Act. Measured by artifacts changed in production, artists score high per-capita.",
  },
  {
    objection: "“Most art-tech collabs fail.”",
    rebuttal:
      "Most everything fails. Art-tech collaborations are venture-style asymmetric bets — the Buolamwini bet alone justified the cost of every artist residency that ever ran.",
  },
  {
    objection: "“This will slow us down.”",
    rebuttal:
      "Anthropic, OpenAI and others already hire ‘creative thinkers, strong writers, policy experts, psychologists’ for red teams. The labs that ship fastest already do this — they just don’t say so on stage.",
  },
];

export function CountersSlide({ direction }: { direction: number }) {
  return (
    <Slide direction={direction}>
      <div className="max-w-[1300px]">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="kicker text-hot mb-3">Steel-manning</p>
          <h2 className="headline text-[clamp(2rem,4.5vw,4rem)] leading-tight max-w-[28ch]">
            What you’re thinking right now.
          </h2>
        </motion.div>

        <ul className="space-y-3">
          {counters.map((c, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + i * 0.1, duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-[minmax(280px,1fr)_2fr] gap-4 md:gap-8 border-b border-line pb-4 items-baseline"
            >
              <span className="font-serif italic text-xl text-hot/85 leading-snug">
                {c.objection}
              </span>
              <span className="text-base text-ink/80 leading-relaxed">
                <span className="kicker text-acid mr-2">→</span>
                {c.rebuttal}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </Slide>
  );
}
