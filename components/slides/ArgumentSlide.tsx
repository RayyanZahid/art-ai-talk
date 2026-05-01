"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { GenerativeBackdrop } from "@/components/visuals/GenerativeBackdrop";

const claims = [
  {
    n: "A",
    title: "Evals are an aesthetic problem.",
    body:
      "As models get better, the eval gap stops being “is it correct” and becomes “is it good.” Good is a humanities word. LMSYS Arena is a giant aesthetic-preference machine. Critics answer this for a living.",
    color: "text-acid",
  },
  {
    n: "B",
    title: "Latency is rhythm.",
    body:
      "When the cursor blinks, when tools fire, when the agent hands back control — these are timing decisions. The people who understand timing are filmmakers and choreographers, not infra engineers.",
    color: "text-sky",
  },
  {
    n: "C",
    title: "Interface is voice.",
    body:
      "Every coding-agent company’s moat is interface — Claude Code’s TUI, Cursor’s diff inspector, Devin’s chat-feel. Same model under the hood. Whoever has artists in the room wins this layer.",
    color: "text-hot",
  },
];

export function ArgumentSlide({ direction }: { direction: number }) {
  return (
    <Slide direction={direction}>
      <div className="absolute inset-0 -z-0 opacity-60">
        <GenerativeBackdrop variant="argument" />
      </div>
      <div className="relative max-w-[1300px]">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="kicker text-hot mb-3">For this room, specifically</p>
          <h2 className="headline text-[clamp(2.2rem,5vw,4.5rem)] leading-[1] max-w-[28ch]">
            AI infra is, secretly,
            <br />
            an <span className="italic text-acid">aesthetic discipline</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {claims.map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.18, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-line pt-6 pr-6"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className={`font-serif text-5xl ${c.color}`}>{c.n}</span>
                <span className="kicker text-ink/40">claim</span>
              </div>
              <h3 className={`text-xl md:text-2xl headline mb-4 ${c.color}`}>{c.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className="mt-12 text-sm text-ink/45 max-w-[80ch] italic"
        >
          If your model has bad taste at any of these, your product is dead — and you do not have the literacy to fix it alone.
        </motion.p>
      </div>
    </Slide>
  );
}
