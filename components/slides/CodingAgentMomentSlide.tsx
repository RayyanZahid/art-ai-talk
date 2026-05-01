"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";

export function CodingAgentMomentSlide({ direction }: { direction: number }) {
  return (
    <Slide direction={direction}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="kicker text-hot mb-4"
          >
            ✱ Feb 2 · 2025 · 22:17 UTC
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="border border-line rounded-2xl p-6 bg-ink/[0.03] font-mono text-[15px] leading-relaxed text-ink/85"
          >
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-line">
              <div className="w-9 h-9 rounded-full bg-acid/30 grid place-items-center text-acid">
                <span className="font-serif italic">k</span>
              </div>
              <div>
                <div className="text-ink text-sm">Andrej Karpathy</div>
                <div className="text-ink/40 text-xs">@karpathy</div>
              </div>
            </div>
            <p className="mb-3">
              there&rsquo;s a new kind of coding i call <span className="text-acid">&ldquo;vibe coding&rdquo;</span>,
              where you fully give in to the vibes, embrace exponentials, and forget that the code even exists&hellip;
            </p>
            <p className="mb-3">
              i &lsquo;Accept All&rsquo; always, i don&rsquo;t read the diffs anymore.
            </p>
            <p>
              it&rsquo;s not really coding — i just see stuff, say stuff, run stuff, and copy paste stuff,
              and it mostly works.
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            className="mt-3 label text-right"
          >
            x.com/karpathy/status/1886192184808149383
          </motion.p>
        </div>

        <div className="md:col-span-7">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="headline text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.98]"
          >
            The largest expansion of <span className="italic text-acid">who-makes-software</span> since
            the personal computer.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6"
          >
            <Stat n="63%" label="of vibe coders are non-developers" src="State of Vibe Coding 2025/26" />
            <Stat n="200K" label="new projects per day on Lovable" src="TechCrunch · Mar 2026" />
            <Stat n="+84%" label="YoY App Store submissions, Q1 2026" />
            <Stat n="$9.25" label="cost in compute to ship a piece of interactive art on Replit Agent" src="Replit · 2025 in Review" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="mt-10 text-lg text-ink/65 max-w-[58ch] border-l-2 border-hot pl-5 italic"
          >
            &ldquo;The hottest new programming language is English.&rdquo;
            <span className="not-italic block mt-2 label">— Karpathy, Software 3.0 · Jun 2025</span>
          </motion.p>
        </div>
      </div>
    </Slide>
  );
}

function Stat({ n, label, src }: { n: string; label: string; src?: string }) {
  return (
    <div>
      <div className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] text-sky leading-none">{n}</div>
      <div className="text-sm text-ink/75 mt-2 leading-snug">{label}</div>
      {src && <div className="text-[11px] text-ink/35 mt-1 font-mono">{src}</div>}
    </div>
  );
}
