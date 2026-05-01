# Art and AI: Lineage and Argument

*Research brief for a 25-minute conference talk at "AI Infra" — audience: ML/infra engineers, researchers.*
*Thesis: artist–coder collaboration is not a 2026 phenomenon. It is a 60-year tradition. AI agents are the next chapter, not the first one.*

---

## TL;DR

- **The lineage is 60 years old, not 6.** Computer art's first public exhibitions were in 1965 (Nees, Nake, Mohr in Stuttgart). Vera Molnár taught herself Fortran in 1968. Harold Cohen started building AARON, an autonomous AI painter, around 1971–73 — and kept iterating for over 40 years. Bell Labs hosted artists in residence in the 1960s.
- **Artists have always built their own infrastructure.** Processing (Reas/Fry, 2001), openFrameworks (Lieberman/Watson, 2005), p5.js (McCarthy, 2013), TidalCycles (McLean, ~2009), Hydra (Olivia Jack, ~2018). The "tools artists make for artists" pattern is the strongest precedent for what coding agents democratize today.
- **Bell Labs / E.A.T. (1966–67) is the canonical model — and the canonical cautionary tale.** "9 Evenings" famously went wrong on stage. The lessons (artist–engineer parity, time-on-the-machine, shared authorship) are exactly the lessons AI labs need to relearn.
- **The historical critiques are real.** "Engineer as god / artist as decorator," the novelty cycle, the missing aesthetic theory, and erased artist credit have dogged art-and-tech collaborations for six decades. Preempt them; do not rediscover them.
- **Artists are useful to AI infra specifically.** They are natural red-teamers, UX leads for natural-language systems, and "Turing-test-for-taste" evaluators. Treating them as decoration wastes a load-bearing input signal.

---

## The 60-year lineage

### 1965–1970: The first exhibitions and the first artist-coders

The earliest public exhibitions of computer art happened almost simultaneously in 1965. **Georg Nees** showed *Computer Graphik* at Stuttgart's Studiengalerie of the Technical University in February; **Frieder Nake** joined him in November at Galerie Niedlich in Stuttgart; **A. Michael Noll and Béla Julesz** showed at the Howard Wise Gallery in New York in April. These three Ns — Nees, Nake, plus **Manfred Mohr** soon after — formed what is loosely called the **"Stuttgart school."** Nake and Nees both worked under the influence of the philosopher **Max Bense**, whose "information aesthetics" (drawing on Shannon and Peirce) gave computer art its first theoretical scaffolding ([Frieder Nake — Wikipedia](https://en.wikipedia.org/wiki/Frieder_Nake), [compArt DB](http://dada.compart-bremen.de/item/exhibition/171)).

**Vera Molnár** is the lineage's archetypal artist-coder. In 1968 she got access to a CDC computer at a Sorbonne research lab and **taught herself Fortran**, then drove plotters to make algorithmic drawings. Her husband **François Molnár** (a perceptual psychologist and artist, not a mathematician — minor correction to the brief [UNVERIFIED on his discipline detail, but not a mathematician per Wikipedia]) was a long-term collaborator; together they later developed the **Molnart** software in 1976 ([Vera Molnár — Wikipedia](https://en.wikipedia.org/wiki/Vera_Moln%C3%A1r), [Sotheby's profile](https://www.sothebys.com/en/articles/vera-molnar-the-grande-dame-of-generative-art)).

**Harold Cohen** is the lineage's archetypal "AI artist" — decades before the term existed. A successful British painter, he encountered programming in 1968 as a visiting professor at UCSD. He named his program **AARON** in the early 1970s, took it to the **Stanford AI Lab from 1973–75**, and continued developing it until his death in 2016. AARON is widely cited as one of the longest continuously maintained AI systems in history ([Computer History Museum — Harold Cohen and AARON: A 40-Year Collaboration](https://computerhistory.org/blog/harold-cohen-and-aaron-a-40-year-collaboration/), [Whitney Museum — Harold Cohen: AARON](https://whitney.org/exhibitions/harold-cohen-aaron)).

### 1966–1970s: Bell Labs and the artist-engineer pairing

At Bell Labs, **Ken Knowlton** collaborated with a sequence of five artists across the 1960s–70s: **Leon Harmon, Stan VanDerBeek, Lillian Schwartz, Laurie Spiegel, and Emmanuel Ghent**. The Knowlton/Schwartz pairing produced ten of the first computer-animated films exhibited as fine art (*Pixillation*, *UFOs*, *Enigma*, *Olympiad* and others) and the **EXPLOR** language ([Computer History Museum — Lillian Schwartz: Pushing the Medium](https://computerhistory.org/blog/lillian-schwartz-pushing-the-medium/), [Lillian Schwartz — Wikipedia](https://en.wikipedia.org/wiki/Lillian_Schwartz)).

Knowlton's own essay *On the Frustrations of Collaborating with Artists* is, for our purposes, required reading: it lays out — from the engineer's seat — every collaboration failure mode that contemporary AI labs are about to rediscover ([kenknowlton.com](https://www.kenknowlton.com/pages/05collab.htm)).

### 1967: Sol LeWitt and the conceptual proto-code

Sol LeWitt's *Paragraphs on Conceptual Art* (Artforum, June 1967) contains one of the most quoted lines in 20th-century art writing — and one that any AI engineer should pin to the wall:

> "The idea becomes a machine that makes the art."

LeWitt's wall drawings are executed by other people from written instructions. This is **art as code, decades before Processing**. Conceptual art's "instruction-as-medium" is a structural ancestor of generative systems ([LeWitt, *Paragraphs on Conceptual Art*, PDF](https://monoskop.org/images/3/3d/LeWitt_Sol_1967_1999_Paragraphs_on_Conceptual_Art.pdf)).

### 1990s–2000s: MIT Media Lab and the "designers who code"

**John Maeda** returned to the MIT Media Lab in 1996 and founded the **Aesthetics + Computation Group** (ACG) — explicitly described as "designers who code, engineers who design" — succeeding Muriel Cooper's Visible Language Workshop. In 1999 he published *Design By Numbers* (DBN), a beginner-friendly programming environment and book ([John Maeda — Wikipedia](https://en.wikipedia.org/wiki/John_Maeda), [Design By Numbers — MIT Press](https://mitpress.mit.edu/9780262632447/design-by-numbers/)).

His students **Casey Reas** and **Ben Fry** initiated **Processing** in 2001 as a direct descendant of DBN, scaled past 100×100 monochrome canvases. Processing's lineage is therefore: Cooper → Maeda → Reas/Fry — three generations of the same MIT artist-coder culture ([Processing Foundation — A Modern Prometheus](https://medium.com/processing-foundation/a-modern-prometheus-59aed94abe85), [Processing — Wikipedia](https://en.wikipedia.org/wiki/Processing)).

### 2000s–Present: Lynn Hershman Leeson and AI agents *as art*

**Lynn Hershman Leeson** built **Agent Ruby** (2002, MoMA / SFMOMA) as a chatbot companion to her film *Teknolust* — "her eDream Portal came out at least a decade before Apple's Siri and Amazon's Alexa." In 2004 she built **DiNA**, a face-rendered conversational AI cast as a "Telepresident candidate." She has been working with AI as an artistic medium since the early 2000s ([SFMOMA — Lynn Hershman Leeson: The Agent Ruby Files](https://www.sfmoma.org/exhibition/lynn-hershman-leeson/), [DiNA project page](https://www.lynnhershman.com/project/dina/)).

### 2010s–2020s: Contemporary AI artists

- **Trevor Paglen** — *A Study of Invisible Images* (2017) and the *Adversarially Evolved Hallucinations* GAN series, made during a Stanford residency, where he hand-curated training sets of "American predators" (eagles, stealth bombers), "omens" (eclipses, comets), and "metaphors for capitalism" (octopuses, vampires) and let GANs hallucinate against them. He also did *Machine Readable Hito* (2017), running hundreds of images of **Hito Steyerl** through facial-recognition algorithms — the artist literally datafied to interrogate the system ([Brooklyn Rail review](https://brooklynrail.org/2017/10/artseen/TREVOR-PAGLEN-A-Study-of-Invisible-Things/)).
- **Memo Akten** — *Learning to See* (2017–) trains image-to-image models on landscape and art datasets and feeds them live webcam input of household objects, producing real-time hallucinations.
- **Refik Anadol** — large-scale data-driven projections and AI "data sculptures"; *Unsupervised* at MoMA (2022) used the museum's own collection as training data ([Refik Anadol — Wikipedia](https://en.wikipedia.org/wiki/Refik_Anadol), [MoMA — Refik Anadol: Unsupervised](https://www.moma.org/calendar/exhibitions/5535)).
- **Holly Herndon + Mat Dryhurst** — built **Spawn** (a singing neural network, with engineer **Jules LaPlace**) starting in 2016. Their album *PROTO* (May 2019) featured Spawn as an ensemble member. Later **Holly+** is a public AI voice-twin of Herndon — the artist *publishing the model itself* as a creative substrate ([Holly Herndon — Wikipedia](https://en.wikipedia.org/wiki/Holly_Herndon), [The FADER on Spawn](https://www.thefader.com/2019/05/21/holly-herndon-proto-ai-spawn-interview)).
- **Allison Parrish, Darius Kazemi, Sam Lavigne** — coding-as-poetics. Parrish's *Everyword* tweeted every word in English over seven years; Kazemi built dozens of Twitter bots and wrote the canonical "Basics of Bot Building" essays; Lavigne's *Slow Hot Computer* and ICE-employee database use code as a critical instrument ([Allison Parrish — decontextualize.com](https://www.decontextualize.com/), [Sam Lavigne — Wikipedia](https://en.wikipedia.org/wiki/Sam_Lavigne)).
- **Lauren McCarthy** — created **p5.js** (2013), a JavaScript reinterpretation of Processing now used by 1.5M+ people. Her performance work *LAUREN* (2017) installed cameras and microphones in subscribers' homes and had her personally play the role of an Alexa-like assistant for days at a time — a meditation on what we are signing up for ([p5.js people page](https://p5js.org/people/), [Lauren McCarthy — Wikipedia](https://en.wikipedia.org/wiki/Lauren_McCarthy)).
- **Char Stiles** — live-codes shaders in performance; co-founded Hex House and built **Shader.Place**, a collaborative shader editor ([MIT Media Lab — Char Stiles](https://www.media.mit.edu/posts/live-coding-performance-and-computational-art-with-char-stiles/)).

---

## Tools artists made for artists (and what each enabled)

| Tool | Year | Maker(s) | What it enabled |
|---|---|---|---|
| **EXPLOR** | ~1970 | Ken Knowlton (Bell Labs) | First DSL for artist-readable graphic generation; underwrote Schwartz's films. |
| **Design By Numbers (DBN)** | 1999 | John Maeda (MIT ACG) | First in-browser teaching language explicitly for non-programmer designers. |
| **Processing** | 2001 | Casey Reas, Ben Fry | The Java-based "sketchbook" that made creative coding teachable to a generation. |
| **openFrameworks** | 2005 | Zach Lieberman + Theo Watson + Arturo Castro | C++ toolkit for low-level access (computer vision, sound, hardware) — the workhorse for serious installation art. |
| **TidalCycles** | ~2009 | Alex McLean | Haskell DSL for live-coded rhythm; co-creator of the Algorave format. |
| **p5.js** | 2013 | Lauren McCarthy | Processing for the web. 1.5M+ users; explicit accessibility-first community design. |
| **Hydra** | ~2018 | Olivia Jack | Browser-based live-coded video synthesis, inspired by analog video synths; emerged from Bogota's live-coding scene. |
| **TouchDesigner** | 2000– | Derivative (Hermanovic, Bairos, Smith) | Node-based real-time visuals; descended from PRISMS (1984–87). |
| **vvvv** | 1998– | vvvv group (Berlin) | Node-based real-time graphics and physical computing. |
| **Cables.gl** | 2010s– | undev (Berlin) | Browser-based node graph for WebGL; open-sourced ~2024. |

**Why this pattern matters for the talk.** Every one of these tools was made by an artist (or an artist-engineer hybrid) who needed something the industry wasn't building. Coding agents in 2026 lower the cost of *that exact move* — a painter who needs a custom tool no longer needs to negotiate access to a research lab to get one. The artist–coder gap narrows not because artists are forced to learn C++, but because the *tool-making capacity* itself becomes more available. **This is the line through which AI infra meets art history.**

---

## Bell Labs E.A.T. — Lessons for 2026 AI labs

**E.A.T.** (Experiments in Art and Technology) was founded in 1967 by engineers **Billy Klüver** and **Fred Waldhauer** with artists **Robert Rauschenberg** and **Robert Whitman**. Its kickoff was **9 Evenings: Theatre and Engineering** (Oct 13–23, 1966) at the 69th Regiment Armory in NYC: **10 artists, ~30 Bell Labs engineers**, including John Cage, Lucinda Childs, Yvonne Rainer, Steve Paxton, David Tudor ([9 Evenings — Wikipedia](https://en.wikipedia.org/wiki/9_Evenings:_Theatre_and_Engineering), [Nokia — The genesis of E.A.T.](https://www.nokia.com/bell-labs/about/history/innovation-stories/genesis-eat/)).

**What worked:**
- **Engineer–artist pairing as a unit, not as a service relationship.** The pairing became the credited authoring entity (Knowlton-Schwartz, Klüver-Rauschenberg).
- **Time on the machine.** Artists got *real* lab access, not gated demos.
- **Persistence.** E.A.T. continued for decades and produced 9 Evenings, the Pepsi Pavilion at Expo '70, and dozens of artist residencies.

**What didn't:**
- **The technology broke on stage.** 9 Evenings had a 6-second reverb in the Armory; signals interfered with each other; many performances misfired technically. Audiences walked out. Cage's *Variations VII* essentially turned the failure into the piece.
- **Communication asymmetry.** Early meetings between artists and engineers "lacked communication" — only resolved when engineers actively presented the *capability surface* before artists were asked to imagine pieces.
- **Critic / press framing.** The art press lionized engineers; the tech press lionized artists; neither did the work of explaining the actual creative loop.

**Lessons for AI labs in 2026:**
1. **Don't ship a demo and call it collaboration.** Artists need the same access infra engineers have — eval harnesses, raw model checkpoints, system prompt control, fine-tune budget. A read-only API is a service relationship, not a collaboration.
2. **Lead with the capability surface.** What can it actually do, what fails, what surprises you when you push on it. Then ask. (This is the lesson Knowlton learned the hard way.)
3. **Pair, credit, persist.** Name the pairing publicly. Persist past the first six months — most of E.A.T.'s value compounded across years.
4. **Failure on stage is a feature only if you've planned for it.** Be honest about brittleness; it's better material than fake success.

---

## Historical critiques to preempt

You should name these in the talk before the audience does:

1. **"Engineer as god, artist as decorator."** The pattern where engineers build the system, the artist applies a "look," and the resulting work is presented as the engineer's intellectual achievement with the artist as flair. E.A.T. struggled with this; AI demos do it constantly today (compare *Refik Anadol Studio* press treatment to how *NVIDIA AI demo* press treatment names individual researchers).
2. **The novelty cycle.** Tech-art ages on a 6–24 month half-life: *deepdream → StyleGAN → CLIP-guided diffusion → Midjourney → ?*. Work that doesn't develop a durable conceptual core gets retired with its toolchain. Antidote: Cohen worked on AARON for 40 years; Hershman Leeson on agent-art for 25.
3. **No aesthetic theory.** Engineers building "art tools" without aesthetic literacy produce, at best, demos with sliders. Bense's information aesthetics, Maeda's pedagogy, McCarthy's accessibility-first design, Reas's *{Software} Structures* — these are *theories* that survive their toolchains. AI infra should be reading them.
4. **Erased artist labor and credit.** The *PROTO* pattern is instructive: Spawn was made by Holly Herndon, **Mat Dryhurst, and Jules LaPlace** — and tech press routinely drops LaPlace, while music press drops Dryhurst, while art press drops everyone except Herndon. Each erasure misrepresents the actual division of labor. AI infra collaborations should default to *all-three-named* crediting.
5. **Whose data, whose voice, whose pose?** Holly+ exists partly as a *response* to this: rather than fight unauthorized voice cloning, Herndon publishes a sanctioned, licensed model of her own voice. That's an aesthetic-and-political position AI labs should engage with, not paper over.

---

## Why artists matter to AI infra (the engineer-friendly argument)

This section is the talk's payoff for an infra audience. Frame artists not as decoration but as *load-bearing roles*:

1. **Artists are unpaid red-teamers — and the best ones.** They already optimize for "weird input that breaks the model in interesting ways." Trevor Paglen literally generates adversarial-curated training sets for fun. Sam Lavigne builds entire pieces around making technology fail in revealing ways. Compare to formal red-teaming literature (e.g. *Red-Teaming the Stable Diffusion Safety Filter*, arXiv:2210.04610) — artists have been doing the qualitative version of this for a decade longer.
2. **Artists are UX leads for natural-language interfaces.** Voice, register, phrasing, surprise, refusal — the things poets and performance artists obsess over are exactly the affordances that determine whether a chat interface feels alive or dead. Allison Parrish's *Compasses*, Kazemi's bots, McCarthy's *LAUREN* — these are NLI usability studies disguised as art. Hire them.
3. **Artists are evaluators of model capability — the "Turing test for taste."** Quantitative benchmarks measure capability; artists measure *interestingness*. Holly Herndon's training process was, effectively, an iterative human-in-the-loop quality eval where the loss function was "does this sound like an ensemble I'd want to perform with?" That's a benchmark category infra teams haven't formalized yet.
4. **Artists carry the historical theory.** Bense's information aesthetics, Eno's generative-music framework, LeWitt's instruction-art, Maeda's design-by-numbers, Reas's process compendiums — there is a *literature* on what makes algorithmic systems aesthetically meaningful. Engineers who skip it rebuild it badly; engineers who read it ship better tools.
5. **Coding agents democratize tool-making — which is the thing artists have always wanted.** This is the talk's punchline. Every tool in the table above represents an artist who paid an enormous cost-of-entry to build their own infrastructure. Coding agents drop that cost by an order of magnitude. The 2026 question is: who do we let make the next Processing? If the answer is "anyone who can describe what they want," that's a different and much wider artist–coder lineage than the one we inherited.

---

## Quotes (with attribution)

- **Sol LeWitt**, *Paragraphs on Conceptual Art*, Artforum, June 1967: **"The idea becomes a machine that makes the art."** ([PDF](https://monoskop.org/images/3/3d/LeWitt_Sol_1967_1999_Paragraphs_on_Conceptual_Art.pdf))
- **Sol LeWitt**, same essay: *"When an artist uses a conceptual form of art, all planning and decisions are made beforehand and the execution is a perfunctory affair."*
- **Ezra Pound** (often misattributed to McLuhan, who quoted it): **"Artists are the antennae of the race, but the bullet-headed many will never learn to trust their great artists."** McLuhan adopted and re-deployed this in *Understanding Media* (2nd ed.) ([McLuhan Galaxy](https://mcluhangalaxy.wordpress.com/2014/04/26/artists-as-the-antennae-of-the-race/)).
- **Brian Eno**, on art as a simulator: *"I think what artists do, and what people who make culture do, is somehow produce simulators where new ideas like this can be explored."* ([Long Now profile](https://longnow.org/ideas/brian-eno-profile/))
- **Brian Eno**, citing Stafford Beer's *Brain of the Firm*: *"Instead of trying to specify a system in full detail, specify it only somewhat."* — Eno's stated guiding principle in his 1970s studio practice.
- **Brian Eno**, on generative music: *"From now on there are three alternatives: live music, recorded music and generative music."* ([In Motion Magazine, 1996](https://www.inmotionmagazine.com/eno1.html))
- **Casey Reas / Ben Fry** on Processing's premise [UNVERIFIED exact wording, but consistent across interviews]: software is a medium for artists, and a medium needs sketchbooks. (See *A Modern Prometheus*, Processing Foundation.)
- **Ken Knowlton**, *On Frustrations of Collaborating with Artists*: a primary-source field report from the engineer's seat at Bell Labs ([kenknowlton.com](https://www.kenknowlton.com/pages/05collab.htm)).
- **Vera Molnár**, in interviews: described her practice as "imaginary machines" — algorithmic processes she would have run by hand if she had to. (Repeated in many obituaries — see [Sotheby's profile](https://www.sothebys.com/en/articles/vera-molnar-the-grande-dame-of-generative-art).) [UNVERIFIED exact wording across sources.]

---

## Sources

**Primary lineage:**
- [Vera Molnár — Wikipedia](https://en.wikipedia.org/wiki/Vera_Moln%C3%A1r)
- [Sotheby's — Vera Molnár, the Grande Dame of Generative Art](https://www.sothebys.com/en/articles/vera-molnar-the-grande-dame-of-generative-art)
- [Computer History Museum — Harold Cohen and AARON: A 40-Year Collaboration](https://computerhistory.org/blog/harold-cohen-and-aaron-a-40-year-collaboration/)
- [Whitney Museum — Harold Cohen: AARON](https://whitney.org/exhibitions/harold-cohen-aaron)
- [Computer History Museum — Lillian Schwartz: Pushing the Medium](https://computerhistory.org/blog/lillian-schwartz-pushing-the-medium/)
- [Lillian Schwartz — Wikipedia](https://en.wikipedia.org/wiki/Lillian_Schwartz)
- [Ken Knowlton — On Frustrations of Collaborating with Artists](https://www.kenknowlton.com/pages/05collab.htm)
- [Frieder Nake — Wikipedia](https://en.wikipedia.org/wiki/Frieder_Nake)
- [compArt DB — Computer Grafik exhibition (Nake & Nees, 1965)](http://dada.compart-bremen.de/item/exhibition/171)

**E.A.T. and 9 Evenings:**
- [9 Evenings: Theatre and Engineering — Wikipedia](https://en.wikipedia.org/wiki/9_Evenings:_Theatre_and_Engineering)
- [Experiments in Art and Technology — Wikipedia](https://en.wikipedia.org/wiki/Experiments_in_Art_and_Technology)
- [Nokia Bell Labs — The genesis of E.A.T.](https://www.nokia.com/bell-labs/about/history/innovation-stories/genesis-eat/)
- [MIT List Visual Arts Center — 9 Evenings Reconsidered](https://listart.mit.edu/exhibitions/9-evenings-reconsidered-art-theatre-engineering-1966)
- [Red Bull Music Academy — An Introduction to E.A.T.](https://daily.redbullmusicacademy.com/2016/05/e-a-t-experiments-in-art-technology/)

**MIT lineage and tools:**
- [John Maeda — Wikipedia](https://en.wikipedia.org/wiki/John_Maeda)
- [Design By Numbers — MIT Press](https://mitpress.mit.edu/9780262632447/design-by-numbers/)
- [Processing — Wikipedia](https://en.wikipedia.org/wiki/Processing)
- [Processing Foundation — A Modern Prometheus (Casey Reas)](https://medium.com/processing-foundation/a-modern-prometheus-59aed94abe85)
- [openFrameworks — Wikipedia](https://en.wikipedia.org/wiki/OpenFrameworks)
- [VICE — Q&A With Zach Lieberman, Founder of openFrameworks](https://www.vice.com/en/article/qa-with-zach-lieberman-founder-of-openframeworks-pt-i/)
- [p5.js — People](https://p5js.org/people/)
- [Lauren McCarthy — Wikipedia](https://en.wikipedia.org/wiki/Lauren_McCarthy)
- [TidalCycles — Wikipedia](https://en.wikipedia.org/wiki/TidalCycles)
- [Hydra (Olivia Jack)](https://hydra.ojack.xyz/)
- [TouchDesigner — Wikipedia](https://en.wikipedia.org/wiki/TouchDesigner)

**Conceptual lineage:**
- [Sol LeWitt — Paragraphs on Conceptual Art (PDF, Monoskop)](https://monoskop.org/images/3/3d/LeWitt_Sol_1967_1999_Paragraphs_on_Conceptual_Art.pdf)
- [McLuhan Galaxy — Artists as Antennae of the Race](https://mcluhangalaxy.wordpress.com/2014/04/26/artists-as-the-antennae-of-the-race/)
- [Brian Eno — Generative Music (In Motion Magazine, 1996)](https://www.inmotionmagazine.com/eno1.html)
- [Long Now — Brian Eno profile](https://longnow.org/ideas/brian-eno-profile/)

**Contemporary AI artists:**
- [SFMOMA — Lynn Hershman Leeson: The Agent Ruby Files](https://www.sfmoma.org/exhibition/lynn-hershman-leeson/)
- [Lynn Hershman Leeson — DiNA project page](https://www.lynnhershman.com/project/dina/)
- [Brooklyn Rail — Trevor Paglen: A Study of Invisible Things](https://brooklynrail.org/2017/10/artseen/TREVOR-PAGLEN-A-Study-of-Invisible-Things/)
- [Refik Anadol — Wikipedia](https://en.wikipedia.org/wiki/Refik_Anadol)
- [MoMA — Refik Anadol: Unsupervised](https://www.moma.org/calendar/exhibitions/5535)
- [Holly Herndon — Wikipedia](https://en.wikipedia.org/wiki/Holly_Herndon)
- [The FADER — Holly Herndon, PROTO, and Spawn](https://www.thefader.com/2019/05/21/holly-herndon-proto-ai-spawn-interview)
- [Allison Parrish — decontextualize.com](https://www.decontextualize.com/)
- [Sam Lavigne — Wikipedia](https://en.wikipedia.org/wiki/Sam_Lavigne)
- [MIT Media Lab — Char Stiles](https://www.media.mit.edu/posts/live-coding-performance-and-computational-art-with-char-stiles/)

**Red-teaming literature (for the AI-infra payoff):**
- [Rando et al., Red-Teaming the Stable Diffusion Safety Filter, arXiv:2210.04610](https://arxiv.org/abs/2210.04610)
