"use client";

import { useEffect, useRef } from "react";

type Variant = "title" | "lineage" | "subtle" | "argument";

/**
 * A canvas backdrop that draws Vera Molnár-inspired drift patterns or 10 PRINT mazes,
 * depending on the slide. Lightweight, runs in rAF, respects prefers-reduced-motion.
 */
export function GenerativeBackdrop({ variant = "subtle" }: { variant?: Variant }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    let t = 0;

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      if (variant === "title") {
        drawMolnarDrift(ctx, w, h, t);
      } else if (variant === "lineage") {
        drawTenPrint(ctx, w, h, t);
      } else if (variant === "argument") {
        drawDither(ctx, w, h, t);
      } else {
        drawSubtleGrid(ctx, w, h, t);
      }

      if (!reduce) {
        t += 0.005;
        raf = requestAnimationFrame(draw);
      }
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [variant]);

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden />;
}

/* ---------- Vera Molnár "désordres" inspired drift ---------- */
function drawMolnarDrift(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  t: number,
) {
  const cols = 12;
  const rows = 8;
  const margin = Math.min(w, h) * 0.06;
  const cw = (w - margin * 2) / cols;
  const ch = (h - margin * 2) / rows;
  const size = Math.min(cw, ch) * 0.7;

  ctx.save();
  ctx.lineWidth = 1;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = margin + cw * (i + 0.5);
      const y = margin + ch * (j + 0.5);
      const dist = Math.hypot(i - cols / 2, j - rows / 2);
      const intensity = Math.min(1, dist / (cols * 0.5));
      const angle =
        intensity * (Math.sin(t + i * 0.3 + j * 0.2) * 0.6 + (i + j) * 0.04);
      const offset = intensity * 6;

      ctx.save();
      ctx.translate(
        x + Math.sin(t * 0.7 + i) * offset,
        y + Math.cos(t * 0.7 + j) * offset,
      );
      ctx.rotate(angle);

      // accent-color near edges, paper near center
      const isAccent = intensity > 0.7 && (i + j) % 5 === 0;
      ctx.strokeStyle = isAccent
        ? "rgba(255,45,111,0.55)"
        : "rgba(245,243,238,0.16)";
      ctx.strokeRect(-size / 2, -size / 2, size, size);
      ctx.restore();
    }
  }
  ctx.restore();
}

/* ---------- 10 PRINT-style maze ---------- */
function drawTenPrint(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  t: number,
) {
  const cell = 28;
  ctx.save();
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = "rgba(245,243,238,0.16)";
  for (let x = 0; x < w; x += cell) {
    for (let y = 0; y < h; y += cell) {
      // deterministic pseudo-random with slight time drift
      const r = pseudoRandom(x * 0.01 + y * 0.013 + t * 0.05);
      ctx.beginPath();
      if (r > 0.5) {
        ctx.moveTo(x, y);
        ctx.lineTo(x + cell, y + cell);
      } else {
        ctx.moveTo(x + cell, y);
        ctx.lineTo(x, y + cell);
      }
      ctx.stroke();
    }
  }
  ctx.restore();
}

/* ---------- Subtle grid ---------- */
function drawSubtleGrid(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  t: number,
) {
  ctx.save();
  ctx.strokeStyle = "rgba(245,243,238,0.05)";
  ctx.lineWidth = 1;
  const step = 60;
  for (let x = 0; x < w; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y < h; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }
  // accent: a moving hot dot at a knot
  const ix = Math.floor((Math.sin(t * 0.3) * 0.5 + 0.5) * (w / step));
  const iy = Math.floor((Math.cos(t * 0.4) * 0.5 + 0.5) * (h / step));
  ctx.fillStyle = "rgba(255,45,111,0.6)";
  ctx.beginPath();
  ctx.arc(ix * step, iy * step, 3, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

/* ---------- Bayer-dither field ---------- */
function drawDither(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  t: number,
) {
  const cell = 12;
  ctx.save();
  for (let x = 0; x < w; x += cell) {
    for (let y = 0; y < h; y += cell) {
      const v = (Math.sin((x + t * 30) * 0.01) + Math.cos((y - t * 20) * 0.013)) / 2;
      const a = Math.max(0, v) * 0.18;
      ctx.fillStyle = `rgba(110,231,255,${a})`;
      ctx.fillRect(x, y, 2, 2);
    }
  }
  ctx.restore();
}

function pseudoRandom(s: number) {
  return Math.abs(Math.sin(s * 999.13) * 43758.5453) % 1;
}
