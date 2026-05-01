"use client";

import { AnimatePresence } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Chrome } from "./Chrome";
import { NotesDrawer } from "./NotesDrawer";
import { useKeyboardNav } from "@/lib/useKeyboardNav";
import { slides } from "@/lib/slides";

export function Deck() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showNotes, setShowNotes] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const total = slides.length;
  const initialized = useRef(false);

  // Sync ↔ URL hash so slides are linkable
  useEffect(() => {
    if (typeof window === "undefined") return;
    const fromHash = () => {
      const h = window.location.hash.replace("#", "");
      const n = parseInt(h, 10);
      if (Number.isFinite(n)) {
        setIndex(Math.max(0, Math.min(total - 1, n - 1)));
      }
    };
    if (!initialized.current) {
      fromHash();
      initialized.current = true;
    }
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [total]);

  useEffect(() => {
    if (typeof window === "undefined" || !initialized.current) return;
    const next = `#${index + 1}`;
    if (window.location.hash !== next) {
      window.history.replaceState(null, "", next);
    }
  }, [index]);

  const goNext = useCallback(() => {
    setDirection(1);
    setIndex((i) => Math.min(total - 1, i + 1));
  }, [total]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  const goFirst = useCallback(() => {
    setDirection(-1);
    setIndex(0);
  }, []);

  const goLast = useCallback(() => {
    setDirection(1);
    setIndex(total - 1);
  }, [total]);

  useKeyboardNav({
    onNext: goNext,
    onPrev: goPrev,
    onFirst: goFirst,
    onLast: goLast,
    onToggleNotes: () => setShowNotes((s) => !s),
    onToggleOverview: () => setShowOverview((s) => !s),
  });

  const current = slides[index];

  // Touch swipe (mobile / trackpad-as-touchscreen)
  // Track both axes so we can ignore vertical scrolls on slides whose content
  // overflows (Examples, Counters, etc.) — only horizontal swipes navigate.
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    // Only treat as a slide-nav swipe if mostly horizontal AND moved enough.
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      if (dx < 0) goNext();
      else goPrev();
    }
    touchStart.current = null;
  };

  const overviewSlides = useMemo(() => slides.map((s, i) => ({ ...s, i })), [slides]);

  return (
    <main
      className="fixed inset-0 overflow-hidden bg-paper text-ink select-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <Chrome
        index={index}
        total={total}
        title={current.title}
        showNotes={showNotes}
        onToggleNotes={() => setShowNotes((s) => !s)}
      />

      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={direction}>
          <div key={current.id} className="absolute inset-0">
            {current.render({ direction })}
          </div>
        </AnimatePresence>
      </div>

      {/* Click-zone navigation: invisible left/right halves for click-to-advance.
          Desktop only — on touch devices we rely on swipe so taps don't intercept
          interactions inside slides. */}
      <button
        aria-label="Previous slide"
        onClick={goPrev}
        className="hidden sm:block fixed left-0 top-12 bottom-12 w-[8vw] z-30 cursor-w-resize bg-transparent"
      />
      <button
        aria-label="Next slide"
        onClick={goNext}
        className="hidden sm:block fixed right-0 top-12 bottom-12 w-[8vw] z-30 cursor-e-resize bg-transparent"
      />

      <NotesDrawer
        open={showNotes}
        notes={current.notes}
        title={current.title}
        index={index}
        total={total}
      />

      {/* Overview grid */}
      <AnimatePresence>
        {showOverview && (
          <div
            className="fixed inset-0 z-40 bg-paper/95 backdrop-blur-md p-8 overflow-auto"
            onClick={() => setShowOverview(false)}
          >
            <div className="grid grid-cols-4 gap-3">
              {overviewSlides.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setIndex(s.i);
                    setShowOverview(false);
                  }}
                  className="aspect-video rounded-lg border border-line p-3 text-left hover:border-hot transition"
                >
                  <div className="kicker text-ink/40">{String(s.i + 1).padStart(2, "0")}</div>
                  <div className="text-sm mt-1">{s.title}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
