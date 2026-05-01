# Coding Agents in Artistic Practice: Research Notes

_Compiled May 2026 for "Art and AI: bridging the gap between artists and coders through collaboration."_
_Bias: 2024-2026, with foundational threads where they reframe present practice. All citations are linked. Anything I could not verify is marked **[UNVERIFIED]**._

---

## TL;DR

- **The dominant artist-facing artifact in 2025 was not a model release but a Claude Skill.** Anthropic's `algorithmic-art` Skill (Oct 2025), framed entirely in artist's language ("process over product", "living algorithms, not static images with randomness", "jazz musician quoting another song through algorithmic harmony"), is one of the most explicit attempts by a frontier lab to encode a creative-coder aesthetic into an agent. It ships in the official `anthropics/skills` repo. ([SKILL.md](https://github.com/anthropics/skills/blob/main/skills/algorithmic-art/SKILL.md))
- **"Vibe coding" is the most quotable phrase of the era and the most misused.** Karpathy's original Feb 2 2025 tweet is specifically about *not reading the diffs* — "I just see stuff, say stuff, run stuff, and copy paste stuff, and it mostly works." Simon Willison's clarifying line ("vibe coding = building software with an LLM without reviewing the code it writes") is the engineer-friendly definition. Both quotes will land with this audience. ([Karpathy tweet](https://x.com/karpathy/status/1886192184808149383), [Willison](https://simonwillison.net/2025/Mar/19/vibe-coding/))
- **Sam Aaron (creator of Sonic Pi) is the strongest single case study** for "agent as creative collaborator." His new platform Tau5 ships an *optional* MCP server explicitly so Claude Code can become a "full creative partner" in live-coded music + visuals. He gave a GOTO 2025 keynote titled "Beyond Sonic Pi: Tau5 and the Art of Coding with AI." ([CDM article](https://cdm.link/tau5-hub-for-live-coding/), [GOTO 2025 talk](https://www.youtube.com/watch?v=RAd5RkuZPb4))
- **The infrastructure layer that made artist adoption real in 2025 is MCP + Skills, not the underlying models.** Anthropic shipped connectors for Blender, Ableton, Adobe, Autodesk, Resolume, SketchUp, Splice. There are TouchDesigner MCP servers (Komaki et al.), an `audiovisual-production-skills` Claude Skills set, and Resolume Wire integrations for live VJing. The plumbing is the story for an infra audience. ([Anthropic announcement](https://www.anthropic.com/news/claude-for-creative-work))
- **The "agent operator" stance, not "prompt engineer," matches how working artists describe their practice.** Matt DesLauriers explicitly frames AI as a constrained subordinate ("focus only on color and tonality... full control over composition"); Memo Akten has used a director/editor metaphor for over a decade. This is the right framing for an ML/infra audience that is suspicious of magic. ([DesLauriers](https://www.lerandom.art/editorial/matt-deslauriers-on-challenging-the-image), [Akten](https://www.memo.tv/))

---

## Concrete examples (artists actually shipping with coding agents)

### 1. Sam Aaron — Tau5 + Claude Code as creative partner
- **Who:** Dr. Sam Aaron, creator of Sonic Pi (>50k musicians, used in classrooms globally).
- **What:** Tau5 is a new live-coding platform for music, visuals, and interactive art. It ships an *optional, off-by-default* MCP server "directly connected to its core API — to enable LLM/AI agents to work directly with it." Aaron's framing: "Tau5 also experiments with AI as a creative partner, asking not what machines can replace, but how they might improvise with us."
- **Talk:** "Beyond Sonic Pi: Tau5 and the Art of Coding with AI", GOTO 2025 ([video](https://www.youtube.com/watch?v=RAd5RkuZPb4), [YOW Brisbane 2025 listing](https://yowcon.com/brisbane-2025/sessions/3907/beyond-sonic-pi-tau5-and-the-art-of-coding-with-ai)).
- **Source:** [CDM long-form](https://cdm.link/tau5-hub-for-live-coding/), [Aaron's Patreon explainer](https://www.patreon.com/posts/what-is-tau5-136095977), [GitHub](https://github.com/samaaron/tau5).
- **Why it matters for the talk:** This is a primary source. Aaron is a CS PhD, not "an artist who learned to code." He is an engineer making an aesthetic argument about agents. His talk title alone ("the art of coding *with* AI") is the thesis of your talk in eight words.

### 2. Anthropic's `algorithmic-art` Skill — agent-as-aesthetic-artifact
- **Who:** Originally shipped in `anthropics/skills`. A community-authored variant by GitHub user *lifangda* exists in plugin marketplaces.
- **What:** A Claude Skill that produces seeded p5.js sketches with explicit aesthetic doctrine baked in. Quotes from the skill itself: "beauty emerges from the algorithm's execution", "this is about making LIVING ALGORITHMS, not static images with randomness", "Think like a jazz musician quoting another song through algorithmic harmony — only those who know will catch it." It is closer to artist's writing than typical SDK docs.
- **Source:** [SKILL.md on GitHub](https://github.com/anthropics/skills/blob/main/skills/algorithmic-art/SKILL.md), [community variant](https://lobehub.com/skills/lifangda-claude-plugins-algorithmic-art).
- **Why it matters:** It's the cleanest demo you can give live: turn the Skill on, ask Claude Code for a piece "based on everything you know about me", get an algorithmic portrait. (Twitter user @jay_wooow demoed exactly this prompt going viral in late 2025: [tweet](https://x.com/jay_wooow/status/1996293060842463328).)
- **[UNVERIFIED]:** Lingdong Huang's involvement. Search results connect him via the *category* (his MIT Media Lab procedural Chinese landscape paintings are the canonical reference), but no source confirms authorship of the official Anthropic skill. Don't claim it on stage.

### 3. Les Orchard — "Hunting Horizon" (documented agent workflow)
- **Who:** Les Orchard, blogger at lmorchard.com, software engineer-turned-creative-coder.
- **What:** A web-component generative sketch of birds hunting fish at the air/water interface. Built using Claude + the `algorithmic-art` Skill in November 2025. Orchard published the full workflow log: vague creative prompt → Skill emitted a "philosophy statement" + first-pass code → iterative requests for behavioral phases (ascending birds, twinkling stars, fish scattering, dead-bird attraction, moon movement) → human debugging.
- **Quote:** "While Claude generated the bulk of the code, I didn't just sit back: I gave it ideas, did some debugging and coding, and steered things to make it my own."
- **Source:** [blog.lmorchard.com/2025/11/05/hunting-horizon/](https://blog.lmorchard.com/2025/11/05/hunting-horizon/).
- **Why it matters:** This is the rare *published transcript* of an artist-agent loop. It is honest about scope ("the result isn't groundbreaking art") which lets you use it without overclaiming. Good slide material: side-by-side of the prompt and the output frame.

### 4. Emmet Connolly — Strudel live-coding via Claude
- **Who:** Emmet Connolly (musician, posts at thoughtwax.com).
- **What:** First-time use of Strudel (the JS port of TidalCycles); described style to Claude, got Strudel code back, manually patched hallucinated sample names, asked Claude to restructure for live performance, ran the result through a Chroma Console pedal. Total: ~4 hours to a recorded piece.
- **Quote:** "You can parachute directly into the middle of someplace you've no real business being, and then just start breaking things to see what happens."
- **Source:** [thoughtwax.com/2025/06/live-coding/](http://thoughtwax.com/2025/06/live-coding/).
- **Why it matters:** Direct artist quote about agents lowering the *barrier to first contact* with a new medium. The "parachute" line is keynote-quotable. Note: this was Claude.ai chat, not Claude Code — be precise about it.

### 5. Matt DesLauriers — agent-as-constrained-subordinate
- **Who:** Canadian generative artist, ex-Avant Arte, MUTEK Montréal performer, prolific creative-coding open source contributor.
- **What:** "Filigree" and surrounding 2024-25 work uses ML models *as constrained inputs* (color, tonality only) to a generative pipeline he authors. Explicitly rejects "black box" generative AI in favor of holding compositional control.
- **Quote (paraphrased from Le Random interview):** Previously when working with AI it "felt like a black box" — his current approach constrains the model and uses its output "as pixel data inputs into his generative tool while maintaining full control over composition."
- **Source:** [Le Random editorial](https://www.lerandom.art/editorial/matt-deslauriers-on-challenging-the-image), [mattdesl.com](https://www.mattdesl.com/), [MUTEK profile](https://montreal.mutek.org/en/artists/matt-deslauriers).
- **Why it matters:** Counterpoint to vibe coding. DesLauriers is the art-world equivalent of "I read every diff." Useful for the part of your talk that pushes back on the genre.

### 6. Maya Man + Rhizome × TITLES — custom model authorship
- **Who:** Maya Man (artist, identity-and-internet themes; shown at Whitney, bitforms, Tate Britain, MOCA LA).
- **What:** Winter 2025 commission: Rhizome × TITLES paid five artists (Man, Louis Osmosis, balfua, Alix Vernet, Aarati Akkapeddi) to *train their own custom generative models*. Trainings were directed by Derrick Schultz of TITLES. Man's separate solo "StarQuest" at Feral File restages Dance Moms choreography using generative AI.
- **Source:** [Rhizome × TITLES program page](https://rhizome.org/events/titles-studio-program/), [Autre interview Nov 2025](https://autre.love/interviewsmain/2025/11/18/the-choreography-of-posting-online-read-an-interview-of-maya-man).
- **Why it matters:** This is the "training-as-authorship" thread: an artist using engineering tools (data curation, training, eval) as her *medium*, not just generation. Fits the "software as medium" framing.

### 7. Replit Agent for creative micro-projects
- **Who:** Replit users. Replit's own 2025 retro flags interactive art among Agent's outputs.
- **What:** "Voronoi Cam" — an interactive piece where the camera feed is rendered as Voronoi tiles pulsing to ambient sound. Built end-to-end via Replit Agent for **$9.25 in compute**.
- **Source:** [Replit 2025 in Review](https://blog.replit.com/2025-replit-in-review), [Replit Agent product page](https://replit.com/products/agent).
- **Why it matters:** Concrete dollar figure, concrete artifact. Useful as a "what changed in 2025" data point: agents are now cheap enough that throwaway interactive art is throwaway-priced.

### 8. Holly Herndon & Mat Dryhurst — protocol/training-as-art (lineage anchor)
- **Who:** Herndon (musician), Dryhurst (artist/researcher); studio in Berlin.
- **What:** Holly+ (2021), Spawning (haveibeentrained.com, Kudurru, Source.Plus), and 2025's "Arboretum" + "Ur-Hildegard Training Corpus" / "Starmirror" at KW Berlin (Oct 2025 - Jan 2026). Awarded the 2025 Kairos Prize. They explicitly treat *the technical process of collaborating with AI* as the artwork.
- **Source:** [Herndon Dryhurst Studio](https://herndondryhurst.studio/), [Berlin Art Link studio visit Nov 2025](https://www.berlinartlink.com/2025/11/25/holly-herndon-mat-dryhurst-studio-visit-berlin/), [Art Basel feature on training-as-art](https://www.artbasel.com/stories/ai-holly-herndon-mat-dryhurst-data-training-art-making).
- **Why it matters:** They are the lineage. They predate the coding-agent era but their argument ("data training as art-making") is the prerequisite for taking the agent-as-collaborator claim seriously.

### 9. TouchDesigner + MCP — installation-art plumbing
- **Who:** Sadao Komaki (touchdesigner-mcp), bottobot (TouchDesigner Documentation MCP Server), rheadsh (`audiovisual-production-skills` Claude Skill set).
- **What:** Multiple MCP servers shipped in 2025 that let Claude Code introspect and modify TouchDesigner networks live. The bottobot server indexes 629 operators, 14 tutorials, 69 Python API classes. rheadsh's Skills target real-time graphics + video processing for installation work.
- **Source:** [Komaki touchdesigner-mcp](https://github.com/8beeeaaat/touchdesigner-mcp), [bottobot/touchdesigner-mcp-server](https://github.com/bottobot/touchdesigner-mcp-server), [audiovisual-production-skills](https://github.com/rheadsh/audiovisual-production-skills), [Derivative forum thread](https://forum.derivative.ca/t/i-created-a-touchdesigner-mcp-server/747858).
- **Why it matters:** Installation art is the unglamorous backbone of "AI + art" — Refik Anadol scale stuff is downstream of pipelines like these. For an infra audience, showing an MCP server live-mutating a TouchDesigner patch via Claude Code is the most "this is real engineering" demo on offer.

---

## Studios & platforms

- **Anthropic — Claude for Creative Work (April 2026 announcement).** Connectors for Ableton, Adobe, Affinity by Canva, Autodesk Fusion, Blender, Resolume Arena/Wire, SketchUp, Splice. Education partnerships with **RISD (Art and Computation), Ringling College (Fundamentals of AI for Creatives), Goldsmiths (MA/MFA Computational Arts)**. ([source](https://www.anthropic.com/news/claude-for-creative-work))
- **Anthropic + Edinburgh Festival Fringe 2025.** Anthropic was Official Education Partner; ran Claude workshops for Fringe artists. ([source](https://www.edfringe.com/about-us/news-and-blog/anthropic-to-bring-ai-workshops-designed-for-artists-to-the-fringe/))
- **Onassis ONX (NYC + Athens).** AI/XR fellowship platform. 2025–26 Collider cohort with Lincoln Center includes Stephanie Dinkins, whose practice uses AI agents trained on community data. ([ONX members](https://www.onx.studio/members), [open call](https://www.onx.studio/apply))
- **Pioneer Works (Brooklyn).** Tech Residency now *invite-only* as of 2025. Tech Lab supports robotics, AI, mixed reality. ([source](https://pioneerworks.org/residency/technology))
- **Rhizome.** 2025–26 Microgrants explicitly include a **"Synthetic Agents"** track ("collaborating with other intelligences... experimental models, virtual clones, algorithmic authors"). 17 awardees announced Dec 2025. Plus the TITLES partnership above. ([microgrants](https://rhizome.org/editorial/2025/sep/15/open-call-microgrants-2025/), [awardees](https://rhizome.org/editorial/2025/dec/16/2025-26-microgrants-awardees/))
- **Gray Area (San Francisco).** Festival 2025 (Sept 11-14) cohort included 30+ artists working at the AI/digital-culture intersection (Zach Blas, Stelarc, micha cárdenas, Xin Liu, Toby Shorin, etc.). Not specifically agent-focused but the canonical SF venue. ([festival](https://grayarea.org/))
- **NEW INC × Rhizome Y12 "Art & Code" cohort (Sept 2025).** Direct artist-coder collaboration program. ([source](https://rhizome.org/editorial/2025/sep/02/announcing-new-incs-y12-art-code-cohort/))
- **NeurIPS 2025 Creative AI Track.** 3rd year; theme "Humanity"; accepts both papers and artworks. The right venue to namecheck for this audience. ([CFP](https://neurips.cc/Conferences/2025/CallForCreativeAI))
- **AI Engineer Code Summit (NYC, Nov 19-22 2025).** Coding-agent focused; Anthropic, Cursor, Cognition all present. Useful as the "engineering counterpart" to Gray Area / NeurIPS Creative AI. ([source](https://www.ai.engineer/code))

---

## Quotes (with attribution + source URL)

> "There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists... I 'Accept All' always, I don't read the diffs anymore... I just see stuff, say stuff, run stuff, and copy paste stuff, and it mostly works."
— **Andrej Karpathy**, Feb 2 2025. ([X/Twitter](https://x.com/karpathy/status/1886192184808149383))

> "Vibe coding [is] building software with an LLM without reviewing the code it writes... My golden rule for production-quality AI-assisted programming is that I won't commit any code if I couldn't explain exactly what it does."
— **Simon Willison**, Mar 19 2025. ([source](https://simonwillison.net/2025/Mar/19/vibe-coding/))

> "Everyone deserves the ability to automate tedious tasks in their lives with computers."
— **Simon Willison**, same essay. (Use this as the democratization line.)

> "The hottest new programming language is English."
— **Andrej Karpathy**, Software 3.0 keynote, Y Combinator AI Startup School, Jun 19 2025. ([NextBigFuture writeup](https://www.nextbigfuture.com/2025/06/software-3-0-by-karpathy.html))

> "Tau5 also experiments with AI as a creative partner, asking not what machines can replace, but how they might improvise with us."
— **Sam Aaron** / Tau5 documentation, 2025. ([CDM](https://cdm.link/tau5-hub-for-live-coding/))

> "While Claude generated the bulk of the code, I didn't just sit back: I gave it ideas, did some debugging and coding, and steered things to make it my own."
— **Les Orchard**, on building Hunting Horizon. ([source](https://blog.lmorchard.com/2025/11/05/hunting-horizon/))

> "You can parachute directly into the middle of someplace you've no real business being, and then just start breaking things to see what happens."
— **Emmet Connolly**, on live-coding music with Claude + Strudel. ([thoughtwax](http://thoughtwax.com/2025/06/live-coding/))

> "Claude can't replace taste or imagination, but it can open up new ways of working — faster and more ambitious ideation, a more expansive skill set, and the ability for creatives to take on larger-scale projects."
— **Anthropic**, Claude for Creative Work announcement. ([source](https://www.anthropic.com/news/claude-for-creative-work))

> "The desired relationship between human and machine in his work is analogous to that between an Art Director and graphic designer, or film director and video editor — where a visionary communicates their vision to a 'doer' who produces the actual output under the direction of the visionary."
— **Memo Akten**, artist statement (paraphrasing his director/editor framing of human-AI collaboration). ([memo.tv](https://www.memo.tv/))

From the `algorithmic-art` SKILL.md itself (anonymous Anthropic authorship — quote it as official documentation, not as an artist statement):
> "Process over Product: beauty emerges from the algorithm's execution — each run is unique."
> "This is about making LIVING ALGORITHMS, not static images with randomness."
> "Think like a jazz musician quoting another song through algorithmic harmony — only those who know will catch it, but everyone appreciates the generative beauty."
([SKILL.md](https://github.com/anthropics/skills/blob/main/skills/algorithmic-art/SKILL.md))

---

## Engineer-friendly framings (concepts they'll respect)

1. **"Vibe coding" is a *spectrum*, not a slur.** Karpathy's original definition (no diff review, throwaway projects) is at one end. Willison's "I won't commit code I can't explain" is at the other. *Most working artists land somewhere in between, and that middle is where the interesting craft is.* This framing immunizes you against the engineer in row 3 who hates the term.

2. **Software 3.0 (Karpathy, Jun 19 2025).** S1 = handwritten code; S2 = trained weights; S3 = English-as-program. For an art audience, the framing is: *natural language is the lowest-friction interface generative artists have ever had with the machine, and it shifts authorship from the syntax layer to the systems layer.* ([source](https://www.analyticsvidhya.com/blog/2025/06/andrej-karpathy-on-the-rise-of-software-3-0/))

3. **MCP / Skills / connectors are the artist-enabling infra, not the model.** For an infra crowd, this lands hard: the breakthrough wasn't a new model in 2025, it was the protocol layer (MCP, Anthropic's Skills, Codex skills, Cursor's Composer agentic loop) that let agents *operate creative software*. Cite: TouchDesigner MCP servers, Resolume Wire connectors, Blender connector, Ableton connector.

4. **Software-as-medium vs software-as-tool (lineage thread).** The 2025 moment is continuous with Casey Reas/Ben Fry founding Processing (2001) and Lauren McCarthy founding p5.js (2013). McCarthy is now a Stanford HAI Artist-in-Residence alum (2022-23) and Just Tech Fellow (2024-26) doing performance work *about* AI — same person, different stack. ([HAI feature](https://hai.stanford.edu/news/lauren-lee-mccarthy-exploring-human-relationship-ai)) The thread is: code has been a medium for 25 years, agents are the latest tooling shift.

5. **Generative pipelines as authorship.** ComfyUI workflows are *exported, shared, executed programmatically* — so are Claude Skills, so are MCP server configs. The "thing" the artist makes is increasingly the pipeline, not the rendered output. This is the strongest engineer-friendly claim in your talk: *the artwork is the system.* (Compare: Herndon/Dryhurst's "data training as art-making.")

6. **The "Co-Authored-By: Claude" git trailer as cultural artifact.** Claude Code defaults to adding itself as co-author on commits. Engineers find this either charming or annoying ([Ian Nuttall](https://x.com/iannuttall/status/1934624932094435510), [Hacker News thread](https://news.ycombinator.com/item?id=47575427)). For artists this is a non-trivial credit-and-authorship question. Cite it as a tiny example of the agent-collaborator framing showing up in the *toolchain itself*.

---

## Live demos / on-stage moments that worked

I could not verify a single high-profile *artist-on-stage-with-Claude-Code* keynote moment from a major conference. The strongest demo material I found is:

- **Karpathy's Software 3.0 keynote (YC, Jun 19 2025)** — engineer, not artist, but the live demo of natural-language programming was the moment that made "Software 3.0" stick. ([writeup](https://www.analyticsvidhya.com/blog/2025/06/andrej-karpathy-on-the-rise-of-software-3-0/))
- **Sam Aaron's GOTO 2025 talk** — live-coded Sonic Pi/Tau5 with AI integration on stage. Best primary case study you could cite or even (with permission) embed a short clip from. ([video](https://www.youtube.com/watch?v=RAd5RkuZPb4))
- **The "algorithmic-art skill + 'make art about everything you know about me' prompt" demo** — viral on X late 2025 ([source tweet](https://x.com/jay_wooow/status/1996293060842463328)). Reproducible live in ~60 seconds. *Strong recommendation: do this one yourself, on stage, with the audience's hashtag as input.*

---

## Gaps / things I couldn't verify (do NOT claim from stage)

- **Lingdong Huang's authorship of the `algorithmic-art` Skill.** Plausible given his work, but no source confirms it. Treat as **[UNVERIFIED]**.
- **Inigo Quilez using AI shader generation.** No 2024-2026 primary source surfaced. Speculation only.
- **Char Stiles + LLMs.** No 2025 source. Skip her unless you have a private channel.
- **Refik Anadol Studio using *coding agents* (Claude Code/Cursor) specifically.** They use custom-trained models extensively (LAM for Gehry/Guggenheim, etc.), but I found no source describing their internal use of agentic coding tools. Don't claim "Refik uses Cursor."
- **Memo Akten using coding agents specifically.** His written framing of human-AI collaboration is *perfect* for the talk, but his current practice with coding agents (vs. trained models) is undocumented in public sources I could find.
- **Universal Everything / Field / Onformative / Dpt. / Resn / Active Theory** — no public material on coding-agent use specifically. Studios of this caliber don't publish their pipelines. Don't speculate.
- **Olivia Jack (Hydra) + agents.** Hydra remains agent-free as of indexed 2025-2026 sources. There is community interest but no shipped integration.
- **Jenna Sutela's coding agent practice.** No specific sources surfaced.
- **Specific "live demo on a major stage where an artist + agent built something compelling"** — I could not verify a singular moment that the audience would recognize. This is genuinely a gap; the strongest candidate remains Sam Aaron at GOTO 2025.

---

_Total verified primary or near-primary sources: ~30. The strongest five if you have to cut: (1) Karpathy tweet, (2) Willison vibe-coding essay, (3) Aaron/Tau5/CDM article, (4) `algorithmic-art` SKILL.md, (5) Orchard's Hunting Horizon writeup. If you only want one demo, do the algorithmic-art Skill on stage with audience input. If you only want one quote, use Connolly's "parachute" line — it is the most artist-sounding line in the entire corpus._
