"use client";

import { useEffect } from "react";

type Handlers = {
  onNext: () => void;
  onPrev: () => void;
  onFirst: () => void;
  onLast: () => void;
  onToggleNotes: () => void;
  onToggleOverview: () => void;
};

export function useKeyboardNav(h: Handlers) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Don't intercept if the user is typing somewhere
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return;
      }
      switch (e.key) {
        case "ArrowRight":
        case " ":
        case "PageDown":
        case "j":
        case "l":
          e.preventDefault();
          h.onNext();
          break;
        case "ArrowLeft":
        case "PageUp":
        case "k":
        case "h":
          e.preventDefault();
          h.onPrev();
          break;
        case "Home":
          e.preventDefault();
          h.onFirst();
          break;
        case "End":
          e.preventDefault();
          h.onLast();
          break;
        case "n":
          e.preventDefault();
          h.onToggleNotes();
          break;
        case "o":
          e.preventDefault();
          h.onToggleOverview();
          break;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [h]);
}
