import type { ReactNode } from "react";
import { TitleSlide } from "@/components/slides/TitleSlide";
import { ColdOpenSlide } from "@/components/slides/ColdOpenSlide";
import { ThesisSlide } from "@/components/slides/ThesisSlide";
import { LineageSlide } from "@/components/slides/LineageSlide";
import { ToolsArtistsMakeSlide } from "@/components/slides/ToolsArtistsMakeSlide";
import { CodingAgentMomentSlide } from "@/components/slides/CodingAgentMomentSlide";
import { ExamplesSlide } from "@/components/slides/ExamplesSlide";
import { ArgumentSlide } from "@/components/slides/ArgumentSlide";
import { BlindSpotsSlide } from "@/components/slides/BlindSpotsSlide";
import { CountersSlide } from "@/components/slides/CountersSlide";
import { CallToActionSlide } from "@/components/slides/CallToActionSlide";
import { LearningLayerLabsSlide } from "@/components/slides/LearningLayerLabsSlide";
import { CloseSlide } from "@/components/slides/CloseSlide";
import { QuoteSlide } from "@/components/slides/QuoteSlide";
import { SectionSlide } from "@/components/slides/SectionSlide";

export type SlideRender = (ctx: { direction: number }) => ReactNode;

export type SlideEntry = {
  id: string;
  title: string;
  notes?: string;
  render: SlideRender;
};

export const slides: SlideEntry[] = [
  {
    id: "title",
    title: "Title",
    notes:
      "Open with a beat. Don't say the title — let it sit. Then: 'I'm not here to tell you AI will replace artists, or that artists will save AI. I'm here to argue that the most interesting software being shipped right now lives in the gap between them — and that coding agents just collapsed that gap.'",
    render: ({ direction }) => <TitleSlide direction={direction} />,
  },
  {
    id: "cold-open",
    title: "Cold open · Vera Molnár",
    notes:
      "Goal: disrupt the audience's prior. Most AI Infra talks open with model performance graphs. We're opening with a 1968 plotter drawing. Land 'None of you have heard of her.' Wait. Then click. — Verified: Molnár (1924–2023), Sorbonne CDC access in 1968, taught herself FORTRAN, retrospective at Centre Pompidou opened October 2023.",
    render: ({ direction }) => <ColdOpenSlide direction={direction} />,
  },
  {
    id: "thesis",
    title: "Thesis",
    notes:
      "Three lines. Read each. Don't editorialize. Let the structure carry it. Engineers read structures faster than prose.",
    render: ({ direction }) => <ThesisSlide direction={direction} />,
  },
  {
    id: "section-lineage",
    title: "§1 Lineage",
    notes:
      "Section break. 'I'm going to do three things. First, give you the lineage so this isn't 2026 hype. Second, show you what coding agents change. Third, make a concrete ask.'",
    render: ({ direction }) => (
      <SectionSlide
        direction={direction}
        kicker="§1"
        title="Lineage"
        subtitle="Sixty years of artists writing code, mostly without us noticing."
      />
    ),
  },
  {
    id: "lineage",
    title: "Lineage timeline",
    notes:
      "Walk the timeline. Don't read every name. Pause on Vera Molnár (1968), Harold Cohen (AARON, 1971-2016 — one of the longest continuously maintained AI systems in history), Casey Reas + Ben Fry (Processing, 2001 — artists building tools for artists). Bell Labs E.A.T. is the canonical model AND the canonical cautionary tale: 9 Evenings 1966, technology broke on stage, Cage made the failure into the piece. The lesson: artists need real lab access, not gated demos.",
    render: ({ direction }) => <LineageSlide direction={direction} />,
  },
  {
    id: "tools-artists-make",
    title: "Tools artists make",
    notes:
      "Processing (Reas/Fry, 2001), openFrameworks (Lieberman, 2005), p5.js (McCarthy, 2013, 1.5M+ users), TidalCycles (McLean ~2009), Hydra (Olivia Jack, 2018), Tau5 (Sam Aaron, 2025). The pattern is: artists build their own infrastructure when ours doesn't fit. Why does this matter for AI infra? Because they're about to build infrastructure on top of yours — whether you invite them or not.",
    render: ({ direction }) => <ToolsArtistsMakeSlide direction={direction} />,
  },
  {
    id: "quote-lewitt",
    title: "Quote · Sol LeWitt",
    notes:
      "LeWitt's 'Paragraphs on Conceptual Art', Artforum, June 1967. Source on Monoskop. Pin this quote to the wall. Conceptual art's instruction-as-medium is the structural ancestor of every prompt, every Skill, every model spec we ship today.",
    render: ({ direction }) => (
      <QuoteSlide
        direction={direction}
        quote="The idea becomes a machine that makes the art."
        attribution="Sol LeWitt"
        sub="Paragraphs on Conceptual Art · Artforum · June 1967"
      />
    ),
  },
  {
    id: "section-agents",
    title: "§2 Coding agents",
    notes: "Section break. Hard pivot. Stop talking about history.",
    render: ({ direction }) => (
      <SectionSlide
        direction={direction}
        kicker="§2"
        title="Coding agents change who can author."
        subtitle="Claude Code, Cursor, Devin, Replit Agent, Aider, Codex, Lovable, v0."
      />
    ),
  },
  {
    id: "coding-agent-moment",
    title: "The coding-agent moment",
    notes:
      "Karpathy's 'vibe coding' tweet was Feb 2 2025 (verified URL on slide). Simon Willison's clarifying definition followed in March: 'building software with an LLM without reviewing the code it writes.' His golden rule: 'I won't commit any code if I couldn't explain exactly what it does.' Use both — show the spectrum. The gap between 'I have an idea' and 'I have a thing on the internet' became hours, not months.",
    render: ({ direction }) => <CodingAgentMomentSlide direction={direction} />,
  },
  {
    id: "examples",
    title: "Specimens",
    notes:
      "Show, don't tell. Six artist+agent pieces, each verified primary source. Sam Aaron / Tau5 (Sonic Pi creator, MCP server, GOTO 2025 keynote). Les Orchard / Hunting Horizon (full transcript published). Emmet Connolly / Strudel (4-hour first contact with a new medium). Matt DesLauriers / Filigree (constrained agents — the read-every-diff end). Replit Agent Voronoi Cam ($9.25 of compute). TouchDesigner MCP servers (the unglamorous backbone of museum-scale AI art). If you have time for one expansion, expand on Sam Aaron — he is your strongest case study because he is an engineer making an aesthetic argument.",
    render: ({ direction }) => <ExamplesSlide direction={direction} />,
  },
  {
    id: "quote-connolly",
    title: "Quote · Emmet Connolly",
    notes:
      "Emmet Connolly, June 2025, blog at thoughtwax.com. The most artist-sounding line in the entire 2025 corpus. Land it slowly. Then look up. Don't gloss it.",
    render: ({ direction }) => (
      <QuoteSlide
        direction={direction}
        quote="You can parachute directly into the middle of someplace you've no real business being, and then just start breaking things to see what happens."
        attribution="Emmet Connolly"
        sub="On live-coding music with Claude · June 2025"
      />
    ),
  },
  {
    id: "section-argument",
    title: "§3 The argument",
    notes: "Section break. Argument time. The audience has the facts; now make the case.",
    render: ({ direction }) => (
      <SectionSlide
        direction={direction}
        kicker="§3"
        title="Why this matters to you."
        subtitle="An infra argument, not an art argument."
      />
    ),
  },
  {
    id: "argument",
    title: "Argument",
    notes:
      "Three claims. Each one specifically aimed at the AI infra audience: evals are aesthetic, latency is rhythm, interface is voice. If your model has bad taste at any of these, your product is dead — and you do not have the literacy to fix it alone. Lean into the line about LMSYS Arena being a giant aesthetic-preference machine; engineers respect it.",
    render: ({ direction }) => <ArgumentSlide direction={direction} />,
  },
  {
    id: "blindspots",
    title: "The receipts",
    notes:
      "Joy Buolamwini caught Gender Shades because she was working on a facial-recognition art project (white-mask anomaly). Trevor Paglen + Kate Crawford's Excavating AI / ImageNet Roulette caused ImageNet to purge ~600,000 images from its 'person' category. Memo Akten staged interpretability before the alignment community had vocabulary. Anna Ridler hand-drew her own training data, made the labor visible. Pattern: when a system fails on humans, the people best positioned to notice are people whose discipline is paying attention to humans.",
    render: ({ direction }) => <BlindSpotsSlide direction={direction} />,
  },
  {
    id: "counters",
    title: "Counter-arguments",
    notes:
      "Steelman the objections. Acknowledge each one — the audience respects you for naming what they're already thinking. The performative-DEI rebuttal is the strongest: measured by artifacts changed in production systems and policy documents, artists score very high per-capita. Calling it performative is a way to avoid funding it.",
    render: ({ direction }) => <CountersSlide direction={direction} />,
  },
  {
    id: "quote-eno",
    title: "Quote · Brian Eno",
    notes:
      "Eno is a useful bridge — both an artist and a systems thinker engineers respect. From A Year with Swollen Appendices, 1996. Read it slowly. Then go to the CTA.",
    render: ({ direction }) => (
      <QuoteSlide
        direction={direction}
        quote="Whatever you now find weird, ugly, uncomfortable and nasty about a new medium will surely become its signature."
        attribution="Brian Eno"
        sub="A Year with Swollen Appendices · 1996"
      />
    ),
  },
  {
    id: "section-cta",
    title: "§4 What to do",
    notes: "Section break. Land the plane.",
    render: ({ direction }) => (
      <SectionSlide
        direction={direction}
        kicker="§4"
        title="What to do on Monday."
        subtitle="Five concrete asks for the room."
      />
    ),
  },
  {
    id: "cta",
    title: "Five asks",
    notes:
      "Five things. Pick the one that hits hardest. The aim is to leave one specific action in every engineer's head. If they remember nothing else, they remember 'pair-program with an artist next sprint.' Optional bonus: 'add an aesthetic line to your post-training rubric.' If you cannot rate it, you cannot improve it.",
    render: ({ direction }) => <CallToActionSlide direction={direction} />,
  },
  {
    id: "lll",
    title: "Learning Layer Labs",
    notes:
      "Personal-stake slide. The audience just heard 'do these five things.' Now show them you do. Brief setup: 'I run an initiative in Brooklyn called Learning Layer Labs. We work with artists, roboticists, and coding agents on the merger of AI, tech, and art. The thing you are looking at is what that looks like — one biomorphic motif carried across mural, canvas, sculpture, robotic arm, and identity. The pattern is the system. The system is the pattern.' Don't over-explain. Let the work do the work. ~45-60 seconds on this slide. Land 'we're hiring / always looking for collaborators' if it lands; otherwise pivot straight to Eno.",
    render: ({ direction }) => <LearningLayerLabsSlide direction={direction} />,
  },
  {
    id: "close",
    title: "Close",
    notes:
      "End on the inversion. AI infra is not the substrate that artists build on. Artists are the substrate that AI infra builds on. Without taste, you can't ship. Without ethics, you can't scale. Without weirdness, you can't matter. Hire artists. Pair with artists. Build with artists. Thank you.",
    render: ({ direction }) => <CloseSlide direction={direction} />,
  },
];
