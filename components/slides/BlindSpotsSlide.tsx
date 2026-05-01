"use client";

import { motion } from "motion/react";
import { Slide } from "@/components/Slide";

const cases = [
  {
    year: "2018",
    title: "Gender Shades",
    artist: "Joy Buolamwini",
    body:
      "Started as a facial-recognition art project. She put on a white mask; the system saw her better. Turned that anomaly into a benchmark — error rates up to 34.7% on dark-skinned women, <1% on light-skinned men.",
    impact: "IBM shut down its facial-recognition product. The phrase “coded gaze” entered the literature.",
  },
  {
    year: "2019",
    title: "ImageNet Roulette / Excavating AI",
    artist: "Trevor Paglen + Kate Crawford",
    body:
      "A viral art piece let users upload selfies into an ImageNet “person” classifier. Within weeks they’d documented categories like “slattern,” “loser,” and worse — labels engineers had shipped a decade earlier.",
    impact: "ImageNet purged ~600,000 images. Dataset archaeology became a research paradigm.",
  },
  {
    year: "2017",
    title: "Learning to See",
    artist: "Memo Akten",
    body:
      "A GAN trained on landscapes hallucinates the world from whatever you wave at the camera. Staged interpretability years before the alignment community had the vocabulary.",
    impact: "Anti-objectivity as a thesis: the model sees its training set, not the room.",
  },
  {
    year: "2017→",
    title: "Hand-drawn datasets",
    artist: "Anna Ridler",
    body:
      "Drew her own training data — by hand — for Fall of the House of Usher and Myriad (Tulips). Made the human labor inside data visible, in a frame, on a wall.",
    impact: "Anticipated the entire 2024-26 conversation about provenance, RLHF labelers, and synthetic pipelines.",
  },
];

export function BlindSpotsSlide({ direction }: { direction: number }) {
  return (
    <Slide direction={direction}>
      <div className="max-w-[1300px]">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="kicker text-hot mb-3">The receipts</p>
          <h2 className="headline text-[clamp(2.2rem,4.6vw,4.4rem)] leading-tight max-w-[26ch]">
            Artists keep finding the things engineers <em className="text-acid not-italic">aren’t looking for</em>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.12, duration: 0.5 }}
              className="border border-line rounded-xl p-6 bg-ink/[0.025]"
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-sm text-hot tabular-nums">{c.year}</span>
                <span className="text-xl text-ink">{c.title}</span>
              </div>
              <div className="text-sm text-acid mb-3">{c.artist}</div>
              <p className="text-[15px] text-ink/75 leading-relaxed mb-4">{c.body}</p>
              <p className="text-sm text-sky border-l border-sky/40 pl-3 italic font-serif leading-relaxed">
                {c.impact}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-8 text-base text-ink/55 max-w-[80ch] italic"
        >
          Pattern: when a system fails on humans, the people best positioned to notice are people whose
          discipline is paying attention to humans. Engineering departments do not produce those people; art
          departments do.
        </motion.p>
      </div>
    </Slide>
  );
}
