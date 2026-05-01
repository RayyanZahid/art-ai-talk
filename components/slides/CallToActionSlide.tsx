"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";

const asks = [
  {
    n: "01",
    do: "Hire an artist as a full-time evaluator.",
    not: "Not a $5K honorarium. A $200K eval lead from a critic, writer, or curator background.",
  },
  {
    n: "02",
    do: "Fund a 6–12 month residency.",
    not: "Pioneer Works · Onassis ONX · Gray Area · Rhizome · NEW INC · Ars Electronica. They already know how. Write the check.",
  },
  {
    n: "03",
    do: "Pair-program with an artist — publicly.",
    not: "Stream it. Anthropic Project Vend reframed what models can do; pair-coding with non-engineer artists reframes what they’re for.",
  },
  {
    n: "04",
    do: "Open-source enough that artists can fork it.",
    not: "Inference servers, agent harnesses, eval frameworks. Closed tools push artists into the demo layer; open ones let them author the medium.",
  },
  {
    n: "05",
    do: "Put a writer on the model spec.",
    not: "Constitutions and model specs are texts. Right now they read like internal policy docs; they could be Magna Cartas.",
  },
];

export function CallToActionSlide({ direction }: { direction: number }) {
  return (
    <Slide direction={direction}>
      <div className="max-w-[1300px]">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="kicker text-hot mb-3">On Monday</p>
          <h2 className="headline text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.98] max-w-[26ch]">
            Five concrete things, in order of cheapest to hardest.
          </h2>
        </motion.div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {asks.map((a, i) => (
            <motion.li
              key={a.n}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.1, duration: 0.5 }}
              className="flex gap-5 border-b border-line pb-5"
            >
              <span className="font-mono text-sm text-acid pt-1">{a.n}</span>
              <div>
                <div className="text-xl md:text-2xl text-ink mb-2 leading-tight headline">{a.do}</div>
                <div className="text-sm text-ink/55 leading-relaxed">{a.not}</div>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="mt-10 text-base text-acid/85 max-w-[80ch] italic font-serif"
        >
          Bonus: add an aesthetic line to your post-training rubric. Not “is this safe” — “is this good
          prose, good image, good code-as-craft.” If you cannot rate it, you cannot improve it.
        </motion.p>
      </div>
    </Slide>
  );
}
