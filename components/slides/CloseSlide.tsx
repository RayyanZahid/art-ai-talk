"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";
import { GenerativeBackdrop } from "@/components/visuals/GenerativeBackdrop";

export function CloseSlide({ direction }: { direction: number }) {
  return (
    <Slide direction={direction} bare>
      <div className="absolute inset-0 grain">
        <GenerativeBackdrop variant="title" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-[6vw]">
        <div className="relative z-10 max-w-[1200px]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="kicker text-hot mb-10"
          >
            ✱ The inversion
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-2 headline text-[clamp(2.5rem,6vw,5.5rem)] leading-[1]"
          >
            <p className="line-through text-ink/30">
              Artists build on top of AI infra.
            </p>
            <p>
              <span className="text-acid">AI infra builds on top of </span>
              <span className="italic text-hot">artists</span>
              <span className="text-acid">.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-lg text-ink/75 max-w-[1100px]"
          >
            <p>Without taste, you can&rsquo;t ship.</p>
            <p>Without ethics, you can&rsquo;t scale.</p>
            <p>Without weirdness, you can&rsquo;t matter.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.6 }}
            className="mt-16 flex items-baseline gap-4 text-sm font-mono text-ink/55"
          >
            <span className="text-hot">Thank you.</span>
            <span className="text-ink/25">·</span>
            <span>art-ai-talk.vercel.app</span>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
