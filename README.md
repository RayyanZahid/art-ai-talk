# Art and AI — bridging the gap between artists and coders

A 25-minute conference talk for the AI Infra crowd. Built as a Next.js single-page deck with a custom slide framework, keyboard navigation, speaker notes, and motion-driven transitions. Deployed on Vercel.

> **Thesis:** Artists have been writing code for sixty years. Coding agents just collapsed the gap between taste and shipping software. Your AI infra is incomplete without them.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** for styling
- **motion/react** (formerly framer-motion) for animations
- A small custom canvas backdrop (Vera Molnár-inspired drift, 10 PRINT maze, dither field)

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Keyboard

| Key | Action |
|-----|--------|
| → / Space / `j` / `l` | Next slide |
| ← / `k` / `h` | Previous slide |
| `Home` / `End` | First / last slide |
| `n` | Toggle speaker notes |
| `o` | Toggle overview grid |

Slides are linkable: `/#5` jumps to slide 5.

## Structure

```
app/
  page.tsx            renders <Deck />
  layout.tsx          fonts (Geist + Instrument Serif), metadata
  globals.css         tokens, paper-grain, dark theme
components/
  Deck.tsx            state, hash-sync, keyboard, touch, overview
  Slide.tsx           motion enter/exit wrapper
  Chrome.tsx          progress bar, counter, kicker
  NotesDrawer.tsx     speaker notes overlay
  visuals/
    GenerativeBackdrop.tsx
  slides/             one component per slide
lib/
  slides.tsx          registry: id, title, notes, render
  useKeyboardNav.ts
  cn.ts
research/             source material with [UNVERIFIED] flags
  01-coding-agents-in-art.md
  02-lineage-and-argument.md
  03-the-argument.md
```

## Sources

The deck only quotes from primary or near-primary sources. See `research/` for the full bibliography. Anything marked `[UNVERIFIED]` did **not** make it onto a slide.

Strongest five citations:

1. Karpathy — [Vibe coding tweet, Feb 2 2025](https://x.com/karpathy/status/1886192184808149383)
2. Simon Willison — [Not all AI-assisted programming is vibe coding, Mar 19 2025](https://simonwillison.net/2025/Mar/19/vibe-coding/)
3. Sam Aaron / Tau5 — [CDM long-form](https://cdm.link/tau5-hub-for-live-coding/)
4. Anthropic — [`algorithmic-art` Skill](https://github.com/anthropics/skills/blob/main/skills/algorithmic-art/SKILL.md)
5. Sol LeWitt — [Paragraphs on Conceptual Art (Monoskop PDF)](https://monoskop.org/images/3/3d/LeWitt_Sol_1967_1999_Paragraphs_on_Conceptual_Art.pdf)

## License

Code MIT. Talk content © the author, 2026.
