"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";

const examples = [
  {
    title: "Tau5",
    artist: "Sam Aaron",
    role: "creator of Sonic Pi",
    blurb:
      "A live-coding hub for music, visuals, and interactive art. Ships an opt-in MCP server so Claude Code can become — in his words — a full creative partner.",
    pull: "“Not what machines can replace, but how they might improvise with us.”",
    tag: "MCP · Claude Code · live coding",
    src: "GOTO 2025 · cdm.link",
  },
  {
    title: "Hunting Horizon",
    artist: "Les Orchard",
    role: "engineer-turned-creative-coder",
    blurb:
      "A web sketch of birds hunting fish at the air/water seam. Built with Claude + the algorithmic-art Skill. The full agent transcript is published.",
    pull: "“I gave it ideas, did some debugging, and steered things to make it my own.”",
    tag: "Claude · Skills · p5.js",
    src: "blog.lmorchard.com · Nov 2025",
  },
  {
    title: "Strudel · 4 hours",
    artist: "Emmet Connolly",
    role: "musician",
    blurb:
      "First-time use of Strudel (TidalCycles for the browser). Described the style, got code back, ran it through a guitar pedal, recorded a piece — same afternoon.",
    pull: "“You can parachute directly into the middle of someplace you’ve no real business being.”",
    tag: "Claude · Strudel · live performance",
    src: "thoughtwax.com · Jun 2025",
  },
  {
    title: "Filigree",
    artist: "Matt DesLauriers",
    role: "generative artist · MUTEK",
    blurb:
      "Treats ML models as constrained subordinates — color and tonality only — feeding outputs as pixel data into a generative pipeline he authors. The “read every diff” end of the spectrum.",
    pull: "“The desired relationship is Art Director ↔ graphic designer.”",
    tag: "constrained agents · authorship",
    src: "Le Random · 2024",
  },
  {
    title: "Voronoi Cam",
    artist: "Replit Agent user",
    role: "anonymous, full-stack absent",
    blurb:
      "Camera feed re-rendered as Voronoi tiles pulsing to ambient sound. End-to-end on Replit Agent. Total compute: $9.25. The shipping cost of an idea, in dollars.",
    pull: "$9.25.",
    tag: "Replit Agent · interactive art",
    src: "Replit 2025 in Review",
  },
  {
    title: "TouchDesigner ⇄ MCP",
    artist: "Komaki, bottobot, rheadsh",
    role: "installation-art plumbing",
    blurb:
      "Open-source MCP servers that let Claude Code introspect and live-mutate TouchDesigner networks — 629 operators, 69 Python classes — through natural-language steering.",
    pull: "The unglamorous backbone of every museum-scale piece you’ve seen.",
    tag: "MCP · TouchDesigner · live VJing",
    src: "GitHub · Derivative forum",
  },
];

export function ExamplesSlide({ direction }: { direction: number }) {
  return (
    <Slide direction={direction}>
      <div className="max-w-[1300px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="kicker text-hot mb-3">Specimens · 2025</p>
          <h2 className="headline text-[clamp(2rem,4vw,3.6rem)] leading-tight">
            What it actually looks like.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {examples.map((e, i) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
              className="border border-line rounded-xl p-5 bg-ink/[0.025] hover:border-hot/50 transition-colors flex flex-col gap-3 min-h-[260px]"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl text-acid">{e.title}</h3>
                <span className="font-mono text-[10px] text-ink/40 uppercase tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <div className="text-ink text-sm">{e.artist}</div>
                <div className="text-ink/45 text-xs italic">{e.role}</div>
              </div>
              <p className="text-sm text-ink/70 leading-relaxed flex-1">{e.blurb}</p>
              <p className="text-sm text-sky/90 italic font-serif border-l border-sky/40 pl-3 leading-relaxed">
                {e.pull}
              </p>
              <div className="flex items-baseline justify-between mt-1 pt-3 border-t border-line/60">
                <span className="font-mono text-[10px] text-ink/45 uppercase tracking-widest">
                  {e.tag}
                </span>
                <span className="font-mono text-[10px] text-ink/35">{e.src}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Slide>
  );
}
