"use client";

import { motion, AnimatePresence } from "motion/react";

type NotesDrawerProps = {
  open: boolean;
  notes?: string;
  title: string;
  index: number;
  total: number;
};

export function NotesDrawer({ open, notes, title, index, total }: NotesDrawerProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-paper/95 backdrop-blur-xl border-t border-line"
          style={{ maxHeight: "45vh" }}
        >
          <div className="flex items-baseline justify-between px-8 pt-5">
            <div className="flex items-baseline gap-3">
              <span className="kicker text-hot">Speaker notes</span>
              <span className="kicker text-ink/40">
                {String(index + 1).padStart(2, "0")} · {title}
              </span>
            </div>
            <span className="font-mono text-xs text-ink/40 tabular-nums">
              {index + 1} / {total}
            </span>
          </div>
          <div className="notes-scroll px-8 pb-7 pt-3 overflow-y-auto" style={{ maxHeight: "calc(45vh - 60px)" }}>
            <div className="prose prose-invert max-w-3xl">
              {notes ? (
                notes.split("\n\n").map((p, i) => (
                  <p key={i} className="text-[15px] leading-relaxed text-ink/85 mb-3">
                    {p}
                  </p>
                ))
              ) : (
                <p className="text-ink/40 italic">No speaker notes for this slide.</p>
              )}
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
