"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Slide } from "@/components/Slide";

/**
 * Personal-stake slide. Placed after the CTA: the audience has just heard
 * "do these five things"; this proves the speaker is doing them.
 *
 * Visual logic: one motif (the biomorphic vein/cell pattern) carried across
 * mural, canvas, sculpture, and identity. The collage echoes the LLL logo —
 * stacked layers of the same pattern in different materials.
 */
export function LearningLayerLabsSlide({ direction }: { direction: number }) {
  return (
    <Slide direction={direction} bare>
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-2 p-[3vw]">
        {/* Hero — team holding the painted robotic arms */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-7 row-span-4 relative overflow-hidden rounded-lg border border-line"
        >
          <Image
            src="/lll/team-with-robots.jpg"
            alt="Two artists holding hand-painted robotic arms in the Learning Layer Labs studio"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-paper/65 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
            <div>
              <div className="kicker text-acid">studio · brooklyn</div>
              <div className="text-ink text-lg mt-1">Painted robotic arms · the team</div>
            </div>
            <span className="font-mono text-[10px] text-ink/40">01</span>
          </div>
        </motion.div>

        {/* Logo + tagline panel */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="col-span-5 row-span-2 relative bg-ink/[0.03] border border-line rounded-lg p-6 flex flex-col justify-between"
        >
          <div className="flex items-start gap-4">
            <div className="relative w-16 h-16 shrink-0 rounded-md overflow-hidden bg-white">
              <Image
                src="/lll/logo.jpg"
                alt="Learning Layer Labs logo — translucent stacked layers"
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
            <div>
              <div className="kicker text-hot mb-1">From this room ↘</div>
              <h2 className="headline text-3xl md:text-[2.6rem] leading-[1] text-ink">
                Learning <span className="italic text-sky">Layer</span> Labs.
              </h2>
            </div>
          </div>
          <p className="text-sm text-ink/70 leading-relaxed mt-4">
            One motif — a biomorphic cell-vein pattern — carried across mural,
            canvas, sculpture, robotic arm, identity. Painters working with
            roboticists working with coding agents. <em className="text-acid not-italic">The pattern is the system.</em>
          </p>
        </motion.div>

        {/* Sculpture detail */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="col-span-2 row-span-2 relative overflow-hidden rounded-lg border border-line"
        >
          <Image
            src="/lll/robot-arms-trio.jpg"
            alt="Three painted robotic arms displayed as sculpture"
            fill
            sizes="20vw"
            className="object-cover"
          />
          <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
            <span className="kicker text-ink/85 drop-shadow-md">sculpture</span>
            <span className="font-mono text-[10px] text-ink/70">02</span>
          </div>
        </motion.div>

        {/* Canvas detail */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="col-span-3 row-span-2 relative overflow-hidden rounded-lg border border-line"
        >
          <Image
            src="/lll/canvas-pink-detail.jpg"
            alt="Detail of a painted canvas using the same vein motif in pink and black"
            fill
            sizes="25vw"
            className="object-cover"
          />
          <div className="absolute bottom-2 left-3 flex items-baseline gap-2">
            <span className="kicker text-ink drop-shadow-md">canvas</span>
            <span className="font-mono text-[10px] text-ink/70">03</span>
          </div>
        </motion.div>

        {/* Mural — blue room */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="col-span-3 row-span-2 relative overflow-hidden rounded-lg border border-line"
        >
          <Image
            src="/lll/mural-blue-room.jpg"
            alt="Large-scale blue mural extending across studio walls"
            fill
            sizes="25vw"
            className="object-cover"
          />
          <div className="absolute bottom-2 left-3 flex items-baseline gap-2">
            <span className="kicker text-ink drop-shadow-md">mural · interior</span>
            <span className="font-mono text-[10px] text-ink/70">04</span>
          </div>
        </motion.div>

        {/* Mural — black detail */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="col-span-3 row-span-2 relative overflow-hidden rounded-lg border border-line"
        >
          <Image
            src="/lll/mural-black.jpg"
            alt="Black-ink mural rendering of the same biomorphic motif"
            fill
            sizes="25vw"
            className="object-cover"
          />
          <div className="absolute bottom-2 left-3 flex items-baseline gap-2">
            <span className="kicker text-ink drop-shadow-md">mural · ink</span>
            <span className="font-mono text-[10px] text-ink/70">05</span>
          </div>
        </motion.div>

        {/* Mural — doorway */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="col-span-3 row-span-2 relative overflow-hidden rounded-lg border border-line"
        >
          <Image
            src="/lll/mural-blue-doorway.jpg"
            alt="Mural framing a black doorway with a small screen embedded in it"
            fill
            sizes="25vw"
            className="object-cover"
          />
          <div className="absolute bottom-2 left-3 flex items-baseline gap-2">
            <span className="kicker text-ink drop-shadow-md">installation</span>
            <span className="font-mono text-[10px] text-ink/70">06</span>
          </div>
        </motion.div>

        {/* Bottom strip caption / pull-quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="col-span-3 row-span-2 relative bg-ink/[0.04] border border-line rounded-lg p-5 flex flex-col justify-between"
        >
          <p className="font-serif italic text-base md:text-lg text-ink/85 leading-snug">
            “The pattern repeats — across mural, canvas, sculpture and code —
            because the system that <em>made</em> it does.”
          </p>
          <div className="flex items-baseline justify-between">
            <span className="kicker text-acid">— the brief</span>
            <span className="font-mono text-[10px] text-ink/40">learninglayerlabs</span>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}
