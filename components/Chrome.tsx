"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";

type ChromeProps = {
  index: number;
  total: number;
  title: string;
  showNotes: boolean;
  onToggleNotes: () => void;
};

export function Chrome({ index, total, title, showNotes, onToggleNotes }: ChromeProps) {
  const progress = ((index + 1) / total) * 100;

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-hot z-50"
        initial={false}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Top-left wordmark */}
      <div className="fixed top-5 left-6 z-40 flex items-center gap-3 select-none pointer-events-none">
        <span className="block w-2 h-2 bg-hot rounded-full" />
        <span className="kicker text-ink/70">Art × AI · AI Infra Conf · 2026</span>
      </div>

      {/* Top-right slide title + counter */}
      <div className="fixed top-5 right-6 z-40 flex items-center gap-4 select-none">
        <span className="kicker text-ink/50 hidden md:inline">{title}</span>
        <span className="font-mono text-xs text-ink/60 tabular-nums">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Bottom-left help */}
      <div className="fixed bottom-5 left-6 z-40 flex items-center gap-3 select-none">
        <kbd className="kbd">←</kbd>
        <kbd className="kbd">→</kbd>
        <span className="kicker text-ink/40">navigate</span>
        <button
          onClick={onToggleNotes}
          className={cn(
            "nav-btn ml-3 kicker px-2 py-1 rounded transition-colors",
            showNotes ? "text-hot" : "text-ink/40 hover:text-ink/80",
          )}
        >
          [n] notes
        </button>
      </div>

      <style jsx>{`
        :global(.kbd) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 1.4rem;
          height: 1.4rem;
          padding: 0 0.35rem;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: rgba(245, 243, 238, 0.7);
          background: rgba(245, 243, 238, 0.06);
          border: 1px solid rgba(245, 243, 238, 0.12);
          border-bottom-width: 2px;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}
