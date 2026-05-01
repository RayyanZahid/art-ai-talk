# The Argument: Art and AI — Why AI Infra Is Incomplete Without Artists

*Research brief for a 25-minute conference talk to ML/infra engineers and researchers. Last updated 2026-05-01.*

---

## TL;DR — the spine of the argument

1. **The author class is widening.** With coding agents (Claude Code, Cursor, Replit Agent, Lovable), the gap between "having taste" and "shipping software" has collapsed. Karpathy named it "vibe coding" in February 2025; one year later 63% of vibe coders are *non-developers*, Lovable hit $400M ARR with 200K new projects/day, and App Store submissions jumped 84% YoY. Software is no longer gated by syntax.
2. **Engineers have a documented aesthetic and ethical blind-spot record.** The most famous AI bias incidents — Gender Shades, ImageNet Roulette, the "Excavating AI" essay — were surfaced or amplified by artists and artist-collaborators (Joy Buolamwini's "coded gaze," Trevor Paglen + Kate Crawford, Memo Akten, Hito Steyerl). ImageNet stripped 600,000 images from its "person" category *because of an art project*.
3. **Interdisciplinary labs win.** Bell Labs ran artist residencies (Nam June Paik, Lillian Schwartz, Stan VanDerBeek) alongside the people who invented the transistor. PARC seeded modern UI. Pixar's Brain Trust institutionalized cross-discipline candor. Bret Victor's Dynamicland is what happens when you take "creators need an immediate connection to what they're creating" seriously. The pattern is consistent: the breakthroughs come from the seam between disciplines.
4. **AI infra is, secretly, an aesthetic discipline.** Eval is taste. Streaming pacing is rhythm. Multimodal models need multimodal critics. The TUI of Claude Code, the diff UI of Cursor, the chat-feel of Devin — all of it is design work, and it's where the products are won or lost.
5. **The ask is concrete:** hire artists as evaluators, fund residencies, open-source the tooling so artists can fork it, and stop treating "design" as the polish layer applied after the model ships.

---

## The thesis, sharpened

> AI infra without artists is incomplete and possibly dangerous. Coding agents are the first interface where the gap between "having taste" and "shipping software" collapses. That gives artists first-class participation in software for the first time in 50 years, gives engineers access to literacies (aesthetic, ethical, cultural) we have historically been bad at, and produces software that is more humane, more weird, more legible — all things AI infra desperately needs as it scales.

Three sub-claims:

- **Claim A (capability):** the tools now exist for non-engineers to ship real software, so the historical division of labor (artist briefs engineer, engineer ships) is obsolete.
- **Claim B (necessity):** the failure modes of AI systems — bias, slop, surveillance creep, homogenization, illegibility — are exactly the failure modes that artists have been trained for two centuries to detect.
- **Claim C (infra-specific):** the work AI infra people do now (evals, multimodal training, agent UX, red-teaming, interpretability) is more aesthetic than the field admits.

---

## 1. Evidence the gap is closing (2024–2026)

**Karpathy, Feb 2 2025 (the canonical post):**
> "There's a new kind of coding I call 'vibe coding,' where you fully give in to the vibes, embrace exponentials, and forget that the code even exists. ... I 'Accept All' always, I don't read the diffs anymore. ... It's not really coding — I just see stuff, say stuff, run stuff, and copy paste stuff, and it mostly works."

He follows up with **Software 3.0** at AI Startup School: *"prompts are the new programs"* and *"the hottest new programming language is English."*

**Vibe coding by the numbers (2025–early 2026):**
- 63% of vibe coders are non-developers (UI generators 44%, full-stack apps 20%, personal software 11%). [State of Vibe Coding 2025/2026]
- Vibe-coding market reached ~$4.7B in 2025, projected $12.3B by 2027.
- Q1 2026 App Store submissions: 235,800, **+84% YoY**.
- Y Combinator Winter 2025: 21% of cohort companies have codebases that are >91% AI-generated.
- Lovable: $400M ARR (Q1 2026, up from $200M end of 2025), **200,000 new projects/day**.
- Replit: 50M users, $24M → $240M ARR after Agent launch (Sept 2024); $400M Series D at $9B valuation.

**Stack Overflow 2025 Developer Survey:**
- 84% of developers use or plan to use AI tools (up from 76% in 2024); 51% of professionals daily.
- 44% of *learners* used AI to learn a new language/technique (up from 37%).
- ChatGPT (82%) and Copilot (68%) lead the market.
- *But:* trust collapsed — only 29% trust AI, down 11 points from 2024. [Use this to argue the trust deficit is exactly what artist sensibility addresses.]

**GitHub Octoverse 2025:**
- 180M developers on GitHub; one new developer per second for a year (+25% YoY).
- 80% of new developers use Copilot in their first week.
- Copilot at ~20M users by July 2025; 4.7M paid by Jan 2026.

**Anthropic Economic Index (Jan & Mar 2026 reports, on Claude usage):**
- Coding ≈ 35–36% of Claude.ai conversations and dominates the platform.
- *But the long tail is creative:* multimedia artists (~7%) and video game designers (~6%) show substantial extended-thinking usage, sitting just below research scientists and software developers.
- Educational tasks rose from 9.3% → 12.4%; scientific 6.3% → 7.2% (Sept 2025 → early 2026). Top-10 task concentration *fell* from 24% → 19% — usage is broadening, not narrowing.

**Simon Willison's 2025 year-in-review:**
> "An LLM agent runs tools in a loop to achieve a goal."

He calls Claude Code's quiet Feb 2025 release "the most impactful event of 2025" and predicts a split in the industry between *outcome-driven* people (who use agents to ship faster) and *process-driven* people (who derive meaning from the engineering itself). Artists are aggressively in the first camp and have always been.

**Adobe Creators' Toolkit Report 2025** (n=16,000 across 8 countries): **86%** of global creators are actively using generative AI; top uses are editing/upscaling (55%), asset generation (52%), ideation (48%). Top barriers: cost (38%), unreliable output (34%), training-data uncertainty (28%) — all *infra-side* problems.

**The takeaway for the slide:** in 18 months we went from "non-engineers cannot ship software" to "the majority of people shipping software with these tools are not engineers." This is not a vibe shift; it is a labor-market shift.

---

## 2. Engineer blind spots that artists have fixed

This section is the *teeth*. Each example is an engineering failure that an artist or art-trained collaborator surfaced first.

**Gender Shades (Buolamwini & Gebru, 2018).** The origin story is that Joy Buolamwini, working on a *facial-recognition art project* at MIT Media Lab, found that commercial vision systems detected her face better when she put on a white mask. She turned that aesthetic-art-project anomaly into a benchmark study showing IBM/Microsoft/Face++ had error rates up to **34.7%** on dark-skinned women vs. <1% on light-skinned men. The follow-on: IBM eventually shut down its facial-recognition product (2020); Microsoft and Amazon retrenched. Buolamwini coined the term "**coded gaze**." None of the engineers building those systems caught it; an artist-engineer with a camera and a mirror did.

**ImageNet Roulette / Excavating AI (Paglen & Crawford, 2019).** Paglen (artist) and Crawford (researcher) trained a classifier on ImageNet's "person" categories and let people upload selfies. Within weeks they had documented WordNet-derived labels classifying "a woman smiling in a bikini" as "slattern, slut, slovenly woman, trollop"; a child in sunglasses as "failure, loser, non-starter." ImageNet — the foundational dataset of modern computer vision — **purged ~600,000 images from its 'person' categories** as a direct consequence. The engineers who built ImageNet at Princeton/Stanford in 2009 had already shipped it for ten years; an artist plus a researcher destroyed half of it in a viral month. The methodology Crawford & Paglen used — *"an archaeology of datasets"* — is now a research paradigm.

**Memo Akten, "Learning to See" (2017).** Trained a GAN that hallucinates landscapes from whatever you wave at the camera. The point of the piece is *anti-objectivity*: machine vision doesn't see what's there, it sees its training set. This is now standard interpretability discourse, but Akten staged it as an installation years before "model spec" or "alignment" entered the lab vocabulary.

**Anna Ridler (custom datasets).** Hand-drew her own training data for *Fall of the House of Usher* (2017) and *Myriad (Tulips)*. Her practice — exposing the human labor inside data — anticipated the entire 2023–2026 conversation about data provenance, RLHF labelers, and "what's in the dataset."

**Refik Anadol, *Unsupervised* at MoMA (2022–23).** Took 200 years of MoMA's collection through StyleGAN. Forced a museum to ask: *who curates a latent space?* The infra question — what's the manifold, what's the metric, what's "good" — was answered with a public artwork that 1.2M visitors saw.

**Hito Steyerl on "artificial stupidity."** Her keynote work argues AI hype is overblown precisely because images circulate before they're understood; the artist's job is to interpret images programmers can't see. She's been doing this since *How Not to Be Seen* (2013).

**The "ChatGPT voice" problem.** Writers caught this first — *delve*, *realm*, *underscore*, *meticulous*, em-dashes, hedging verbs, predictable cadence. The engineering metric (perplexity, eval scores, MMLU) is fine. The *prose* is dead. AI detectors are a downstream symptom of a problem only readers can name. This is a homogenization tax: every model trained on model output gets blander. Engineers do not have the trained ear to detect this drift in real time. Editors, novelists, poets do — and do not get hired to do so.

**UX disasters artists would have caught:** Bing Sydney's affect collapse (Feb 2023). The "I'm sorry, as a large language model" tic. Sycophancy. The over-apologetic GPT-4 voice that made the model worse at math because it kept second-guessing. Each of these is a *character design failure* before it is an alignment failure.

**The pattern:** when a system fails on humans, the people best positioned to notice are people whose discipline is *paying attention to humans*. Engineering departments do not produce those people; art departments do.

---

## 3. Evidence collaboration produces better products

**Bell Labs (1940s–1970s).** The labs that invented the transistor, the laser, Unix, C, and information theory *also* funded artist residencies for Nam June Paik, Lillian Schwartz, James Tenney, and Stan VanDerBeek. The 700-foot main corridor was built that long deliberately so chemists, physicists, metallurgists, and engineers couldn't avoid each other. The interdisciplinarity was load-bearing, not garnish. (Source: Jon Gertner, *The Idea Factory*; Patrick McCray, *Making Art Work*.)

**Xerox PARC.** Modern UI — the windowed GUI, the mouse, WYSIWYG, laser printing, Ethernet, object-oriented programming — came from a lab where computer scientists worked next to designers and visual thinkers. Alan Kay's framing ("the best way to predict the future is to invent it") came out of that mixing.

**Pixar's Brain Trust (Ed Catmull, 2000s onward).** Periodic reviews where directors get unsparing peer feedback. Two key rules: the Brain Trust has *no authority* over the film, and *candor* is the operating principle. Catmull: the goal is *"push towards excellence, root out mediocrity."* Pixar's hit rate from *Toy Story* through *Inside Out* is what institutionalized cross-discipline candor produces. The closest AI-lab analog right now is the model-spec/red-team process, and it could be much better with artist participation.

**Bret Victor → Communications Design Group → Dynamicland.** Victor's 2012 talk *Inventing on Principle* argued: *"Creators need an immediate connection to what they're creating."* Alan Kay then hired him at CDG (2014); Dynamicland (2018–) is the long-form research embodiment. Every "live coding" feature in modern dev tooling — hot reload, in-editor previews, the inspector tab in v0/Bolt/Lovable — is downstream of that one principle. A designer's principle is now table stakes for AI-assisted IDEs.

**Runway Creative Partners Program.** Runway runs a beta-testing program (Sway Molina et al.) of artists who get early access to models before clients do. The community is also a free QA layer and a free marketing layer. They've now formalized this as a Talent Network for hiring AI filmmakers. This is the operational template: *artists as research-grade evaluators*, not as marketing assets.

**The current AI residency network.** Pioneer Works (Brooklyn), Onassis ONX (NYC + Athens), Gray Area (SF), Rhizome (NY), NEW INC, Ars Electronica — these are functioning institutions with track records. Onassis ONX explicitly partners with Pioneer Works and Rhizome. ONX fellows have been working at the intersection of XR/AI for five years. The infrastructure already exists; AI labs need only plug into it.

---

## 4. Counter-arguments + rebuttals

**"Artists are just users now — agents do the coding."**
*Rebuttal:* Vibe coding *is* artists doing the coding. The act of saying "make me a tool that does X" is authorship. Pretending it's just consumption mistakes the agent for the author. Also: every model needs trainers, evaluators, and red-teamers. Those roles are now *more* important, not less, and they reward exactly the cross-domain literacy artists have.

**"We don't need artists, we need product designers."**
*Rebuttal:* Product designers optimize an existing product surface; artists question whether the product should exist, and what it does culturally when it ships. You need both. The AI products of 2024 (sycophantic chatbots, slop pipelines, surveillance-grade vision models) are textbook cases of "product-designed but not artist-criticized." The product designer is downstream; the artist is the upstream conscience and weirdo.

**"Artist collaboration is performative DEI."**
*Rebuttal:* The ImageNet purge of 600K images was not performance. The shutdown of IBM facial recognition was not performance. The bipartisan Algorithmic Accountability Act drew on Algorithmic Justice League testimony. Hito Steyerl shows in major museums and shapes how regulators talk about AI in Europe. If you measure by *artifacts changed in production systems and policy documents*, artists score higher per-capita than most academic AI ethics labs. Calling it performative is a way to avoid funding it.

**"Most art-tech collaborations fail."**
*Concession + reframe:* Most *anything* fails — most startups, most papers, most product launches, most evals. The success rate of art-tech collaborations is benchmarked against the success rate of *internal infra projects*, which is also famously low. The right framing: art-tech collaborations are venture-style asymmetric bets. The Buolamwini bet alone justified the cost of every artist residency that ever ran.

**"This will slow us down."**
*Rebuttal:* Anthropic and OpenAI's red-team networks already include "creative thinkers, strong writers, policy experts, psychologists" because adversarial thinking is "as much an art as a science." (OpenAI Red Teaming Network call, Anthropic GRT Challenge 2023.) The labs that ship fastest *already* hire these people — they just don't say so on stage.

---

## 5. Why AI INFRA specifically (the audience-tailored angle)

This is the section to lean into for this crowd.

**Evals are an aesthetic problem.**
The hardest problem in eval is not test set construction; it's defining "good." Is *Pride and Prejudice* better than *Twilight*? Most engineers will refuse to answer. Critics answer this for a living. As models get better, the eval gap is no longer "is the answer correct" but "is the answer good" — and *good* is a humanities word. LMSYS Chatbot Arena is, at root, a giant aesthetic-preference machine.

**Latency, streaming, pacing.**
The "feel" of a model is rhythmic. Token streaming pacing, when the cursor blinks, when tools fire, when the agent hands back control — these are timing decisions. The people who understand timing are filmmakers, choreographers, and game designers, not infra engineers. Claude Code's TUI and Cursor's diff UX are won and lost on these millisecond decisions. (See Bret Victor's *immediate connection* principle — already universal in IDEs, still nascent in agent loops.)

**Multimodal models need multimodal critics.**
You cannot build a SOTA video model with a team that only watches dashboards. You need people who watch *movies*, who can articulate why a Veo cut feels off, why the audio Foley breaks immersion, why a generated piece of music has the rhythm of a stock-photo metronome. Audio-visual taste is a trained skill, and AI labs are systematically under-hired in it relative to where the models are headed.

**Safety / red-teaming.**
Already the place artists are taken most seriously. Anthropic's Generative Red Teaming Challenge (DEF CON 2023) had thousands of non-technical participants; "creative thinkers, strong writers, policy experts, psychologists" are now in six-figure red-team roles. Anthropic's safety evaluation categories include *"Spirituality & Gratitude," "Bizarre Behavior," "Whistleblowing"* — these are humanistic categories, not engineering categories. Lean into this.

**The interface layer is artist territory.**
Claude Code (TUI), Cursor (composer + diff inspector), Devin (chat + screenshare), Replit Agent (mobile-first), v0/Lovable/Bolt (chat + canvas) — every one of these companies' moats is *interface*, not model. The model is mostly the same Anthropic/OpenAI API underneath. The differentiation is taste. Whoever has artists in the room wins this layer.

**Interpretability is a representational art problem.**
What does an attention pattern *look like*? What does a circuit *feel like*? Olah-style mech-interp visualizations are downstream of decades of information-design work (Tufte, Bertin, Rosling). Anthropic's interp team produces beautiful diagrams because someone there cares about visual rhetoric — but it's still under-staffed relative to its importance.

**Data provenance is a curatorial problem.**
*Excavating AI* and Anna Ridler's hand-drawn datasets prefigured the entire 2024–2026 conversation about training-data ethics, opt-outs, and synthetic-data pipelines. Curators are the natural hires for data team leadership and almost never get the offer.

---

## 6. Concrete call-to-action for the audience

For the "what to do Monday" slide. Five concrete asks:

1. **Hire artists as evaluators on a real budget.** Not a $5K honorarium — a $200K full-time eval lead who comes from a critic/writer/curator background. Treat eval as a staffed humanities discipline.
2. **Fund a 6–12 month artist-in-residence at your lab.** Use the existing infrastructure: Pioneer Works, Onassis ONX, Gray Area, Rhizome, NEW INC, Ars Electronica Futurelab, MIT Media Lab, the Studio for Creative Inquiry at CMU. They already know how to run residencies; you just have to write the check.
3. **Pair-program with artists publicly.** Stream it. The same way Anthropic's Project Vend or OpenAI Codex demos shaped the industry's understanding of what models can do, pair-coding with non-engineer artists shapes understanding of what they're *for*.
4. **Open-source enough of your tooling that artists can fork it.** Inference servers, agent harnesses, evaluation frameworks. Closed AI tools force artists into the demo layer; open ones let them author the medium. (See: ComfyUI, automatic1111 — the entire stable-diffusion creative ecosystem only exists because the weights got out.)
5. **Put artists in the room when you write the model spec.** Anthropic's Constitutional AI document and OpenAI's Model Spec are *texts*. Texts are what writers do. Right now they read like internal policy docs; they could be Magna Cartas. Hire a writer.

Bonus ask: **add an aesthetic line to your post-training rubric.** Not "is this safe" but "is this good prose / good image / good code-as-craft." If you cannot rate it, you cannot improve it.

---

## 7. Killer quotes & data points for slides

**Quotes:**

- Karpathy, Feb 2 2025: *"There's a new kind of coding I call 'vibe coding,' where you fully give in to the vibes... it's not really coding — I just see stuff, say stuff, run stuff, and copy paste stuff, and it mostly works."*
- Karpathy, Software 3.0 (June 2025): *"The hottest new programming language is English."*
- Bret Victor, *Inventing on Principle* (2012): *"Creators need an immediate connection to what they're creating."*
- Joy Buolamwini: term — **"the coded gaze."**
- Crawford & Paglen, *Excavating AI*: *"The automated interpretation of images is an inherently social and political project."*
- Ed Catmull on Pixar's Brain Trust: *"Push towards excellence, and root out mediocrity."*
- Simon Willison (2025): *"An LLM agent runs tools in a loop to achieve a goal."* — and his split-the-industry line about *outcome-driven vs. process-driven* engineers.

**Data points (good for big numbers on slides):**

- **63%** of vibe coders are non-developers. [State of Vibe Coding 2025/26]
- **84%** YoY increase in App Store submissions Q1 2026 vs Q1 2025.
- **200,000** new projects/day on Lovable; **$400M** ARR.
- **86%** of global creators are using generative AI (Adobe Creators' Toolkit, n=16,000).
- **84%** of devs use or plan to use AI; **only 29%** trust it. [Stack Overflow 2025]
- ImageNet purged **~600,000** images from its "person" categories after one art project.
- Gender Shades: **34.7%** error rate on dark-skinned women vs. **<1%** on light-skinned men in 2018 commercial systems.
- ~**7%** of Claude.ai extended-thinking conversations are by multimedia artists; ~**6%** by video game designers (Anthropic Economic Index).
- Y Combinator W25: **21%** of cohort companies have codebases >91% AI-generated.

**One image, one big claim per slide.** Don't crowd.

---

## 8. Sources

**Primary / canonical:**
- Karpathy, "Vibe coding" tweet, Feb 2 2025: https://x.com/karpathy/status/1886192184808149383
- Karpathy, "Software 3.0" / AI Startup School, summarized at https://www.latent.space/p/s3
- Simon Willison, "2025: The year in LLMs" — https://simonwillison.net/2025/Dec/31/the-year-in-llms/
- Simon Willison, "Not all AI-assisted programming is vibe coding (but vibe coding rocks)" — https://simonwillison.net/2025/Mar/19/vibe-coding/
- Buolamwini & Gebru, "Gender Shades" (PMLR 2018) — http://proceedings.mlr.press/v81/buolamwini18a.html ; project page https://www.media.mit.edu/projects/gender-shades/overview/
- Crawford & Paglen, "Excavating AI" (Sept 2019) — https://excavating.ai/
- Memo Akten, *Learning to See* — https://www.memo.tv/works/learning-to-see/
- Anna Ridler — overview at https://aiartists.org/anna-ridler [UNVERIFIED specific URL; verify before slide]
- Refik Anadol, *Unsupervised* at MoMA — https://www.moma.org/calendar/exhibitions/5535
- Bret Victor, *Inventing on Principle* — transcript https://jamesclear.com/great-speeches/inventing-on-principle-by-bret-victor ; Dynamicland https://dynamicland.org/

**Industry data:**
- Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/ai
- GitHub Octoverse 2025 — https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/
- Anthropic Economic Index, Jan 2026 — https://www.anthropic.com/research/anthropic-economic-index-january-2026-report ; March 2026 — https://www.anthropic.com/research/economic-index-march-2026-report
- Adobe Creators' Toolkit Report 2025 — https://news.adobe.com/news/2025/10/adobe-max-2025-creators-survey
- Vibe coding statistics — https://www.secondtalent.com/resources/vibe-coding-statistics/ ; https://findskill.ai/blog/vibe-coding-by-the-numbers/ ; https://www.hostinger.com/blog/vibe-coding-statistics
- Replit growth — https://blog.replit.com/what-is-vibe-coding ; SaaStr coverage https://www.saastr.com/from-zero-to-replit-fluent-how-9-apps-and-500000-users-taught-me-to-how-to-vibe-apps-into-production/
- Lovable ARR — https://techcrunch.com/2026/03/23/vibe-coding-startup-lovable-is-on-the-hunt-for-acquisitions/

**Institutional / lab history:**
- Jon Gertner, *The Idea Factory* (Bell Labs) — summarized at https://www.themarginalian.org/2012/03/28/the-idea-factory-bell-labs/
- Patrick McCray, *Making Art Work* (Bell Labs artist residencies) — https://www.engadget.com/hitting-the-books-making-art-work-patrick-mc-cray-mit-press-163038701.html
- Ed Catmull on Pixar Brain Trust — https://hbr.org/2008/09/how-pixar-fosters-collective-creativity
- Pioneer Works residency — https://pioneerworks.org/residency
- Onassis ONX — https://www.onx.studio/ ; partnership with Pioneer Works https://pioneerworks.org/news/pioneer-works-announces-2026-visual-art-and-music-residents
- Gray Area — https://grayarea.org/

**Red-team / safety:**
- Anthropic Frontier Red Team — https://www.anthropic.com/news/strategic-warning-for-ai-risk-progress-and-insights-from-our-frontier-red-team
- "Challenges in Red Teaming AI Systems" — https://www.anthropic.com/news/challenges-in-red-teaming-ai-systems
- OpenAI Red Teaming Network — https://openai.com/index/red-teaming-network/
- Anthropic ↔ OpenAI joint eval (2025) — https://openai.com/index/openai-anthropic-safety-evaluation/

**Industry — Runway:**
- Creative Partners Program — https://runwayml.com/creative-partners-program
- ArtNews on artists working with AI labs — https://www.artnews.com/art-news/news/openai-nvidia-runway-artists-creatives-beta-testing-residencies-1234716406/

---

*Items marked [UNVERIFIED] above need a 30-second URL check before going on a slide. All numerical claims should be re-verified within 24 hours of the talk; this field moves weekly.*
