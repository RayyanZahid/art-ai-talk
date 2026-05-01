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

      {/* Top-left wordmark — minimal on mobile, full on tablet+ */}
      <div className="fixed top-3 sm:top-5 left-3 sm:left-6 z-40 flex items-center gap-2 sm:gap-3 select-none pointer-events-none">
        <span className="block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-hot rounded-full" />
        <span className="kicker text-ink/70 hidden sm:inline">
          Art × AI · AI Infra Conf · 2026
        </span>
        <span className="kicker text-ink/70 sm:hidden">Art × AI</span>
      </div>

      {/* Top-right slide title + counter */}
      <div className="fixed top-3 sm:top-5 right-3 sm:right-6 z-40 flex items-center gap-2 sm:gap-4 select-none">
        {title && (
          <span className="kicker text-ink/50 hidden lg:inline truncate max-w-[18ch]">
            {title}
          </span>
        )}
        <span className="font-mono text-[10px] sm:text-xs text-ink/60 tabular-nums">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Bottom-left help — keys on tablet+, swipe affordance on mobile */}
      <div className="fixed bottom-3 sm:bottom-5 left-3 sm:left-6 z-40 flex items-center gap-2 sm:gap-3 select-none">
        <div className="hidden sm:flex items-center gap-3">
          <kbd className="kbd">←</kbd>
          <kbd className="kbd">→</kbd>
          <span className="kicker text-ink/40">navigate</span>
        </div>
        <span className="kicker text-ink/40 sm:hidden">swipe</span>
        <button
          onClick={onToggleNotes}
          className={cn(
            "nav-btn ml-1 sm:ml-3 kicker px-2 py-1 rounded transition-colors",
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
