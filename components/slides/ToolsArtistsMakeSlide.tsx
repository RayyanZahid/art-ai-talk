"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";

const tools = [
  { tool: "EXPLOR", year: "~1970", maker: "Ken Knowlton", what: "First DSL for artist-readable graphics, Bell Labs" },
  { tool: "Design By Numbers", year: "1999", maker: "John Maeda", what: "Browser teaching language for designers" },
  { tool: "Processing", year: "2001", maker: "Reas + Fry", what: "The sketchbook that taught a generation to code" },
  { tool: "openFrameworks", year: "2005", maker: "Lieberman + Watson", what: "C++ workhorse for installation art" },
  { tool: "TidalCycles", year: "2009", maker: "Alex McLean", what: "Haskell DSL for live-coded rhythm · Algoraves" },
  { tool: "p5.js", year: "2013", maker: "Lauren McCarthy", what: "1.5M+ users · web-native, accessibility-first" },
  { tool: "Hydra", year: "2018", maker: "Olivia Jack", what: "Live-coded video synth from Bogotá" },
  { tool: "Tau5", year: "2025", maker: "Sam Aaron", what: "Live-coding hub with an opt-in MCP for Claude" },
];

export function ToolsArtistsMakeSlide({ direction }: { direction: number }) {
  return (
    <Slide direction={direction}>
      <div className="max-w-[1300px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="kicker text-hot mb-3">Pattern</p>
          <h2 className="headline text-[clamp(2rem,4.5vw,4.2rem)] leading-[1] max-w-[24ch]">
            Artists build their own infrastructure when ours doesn’t fit.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((t, i) => (
            <motion.div
              key={t.tool}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
              className="border border-line rounded-lg p-5 bg-ink/[0.02] hover:bg-ink/[0.04] transition-colors group"
            >
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-mono text-xs text-ink/40">{t.year}</span>
                <span className="block w-1.5 h-1.5 rounded-full bg-hot/60 group-hover:bg-hot transition-colors" />
              </div>
              <div className="text-xl text-ink mb-1 headline">{t.tool}</div>
              <div className="text-sm text-acid mb-3">{t.maker}</div>
              <div className="text-sm text-ink/60 leading-relaxed">{t.what}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="mt-8 text-base text-ink/65 max-w-[80ch]"
        >
          Coding agents lower the cost of <em className="text-acid not-italic">that exact move</em> by an order of magnitude.
          The painter who needs a custom tool no longer has to negotiate access to a research lab to get one.
        </motion.p>
      </div>
    </Slide>
  );
}
