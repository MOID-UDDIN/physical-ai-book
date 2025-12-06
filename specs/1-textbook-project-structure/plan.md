Implementation Plan: Physical AI Book (Docusaurus + RAG)
Feature Branch: 1-textbook-project-structure
Created: 2025-12-05
Status: Draft

Technical Context (mandatory)
The project will develop an interactive online textbook called **“Physical AI Book”** focused on Physical AI & Humanoid Robotics.

Tech stack and layout:

- Root repo: `physical-ai-book/`
- Docusaurus v3 (TypeScript) site inside `book/`
  - Config + tooling: `book/docusaurus.config.ts`, `book/sidebars.ts`, `book/tsconfig.json`, `book/package.json`, `book/babel.config.js`, `book/postcss.config.js`
  - Docs: `book/docs/intro.md` and `book/docs/physical-ai/*.md`
- RAG backend: `rag-backend/` (FastAPI + Neon + Qdrant + OpenAI)

Scope of this feature:

1. Set up the **repo + Docusaurus app in `book/`**.
2. Define and create the **7 textbook docs** (Intro + 6 chapters under `book/docs/physical-ai/`).
3. Implement a **simple RAG backend** the site can call.
4. Deploy the Docusaurus site (e.g., GitHub Pages).

Out of scope for this plan:

- Auth / login
- Personalization and signup quizzes
- Urdu translation
- Sub-agents and complex multi-agent flows
- Real hardware integration

The project will be built under **MIT license**, aim for **WCAG 2.1 AA** accessibility for the Docusaurus site, and will rely on **free-tier services** (Neon, Qdrant, OpenAI) for development and small-scale use. All robotics content is **simulation-first** (no real hardware required).

Constitution Check (mandatory)
Against the updated Physical AI Book constitution:

I. Clarity-First Teaching: Compliant  
- The plan focuses on a small, well-defined textbook (Intro + 6 chapters) with concrete examples, diagrams, and simple explanations.

II. Simulation-First Robotics Practice: Compliant  
- All examples are designed to run in simulation (ROS 2, Gazebo/Unity-style environments, cloud/local compute). No real robot hardware is required.

III. Ethical and Safe Robotics: Compliant  
- Textbook chapters explicitly include safety, human-in-the-loop, and limitations where relevant. The RAG backend is required to avoid hallucinated safety-critical advice.

IV. Robustness & Reproducibility: Compliant  
- The plan emphasizes small, testable examples, explicit install/run steps, and a repeatable RAG pipeline.

V. RAG Grounding & Honesty: Compliant  
- The backend is constrained to answer only using content from `book/docs/`. Off-topic questions or missing information must be handled with honest “not in the book” responses, optionally with pointers to relevant sections.

Technical Standards: Compliant.  
Research & Development Workflow: Compliant. The plan uses an iterative approach (chapters and RAG improving in parallel, but with clear phase boundaries).

Gates (mandatory)

- Gate 1 – Specification Clarity  
  `specs/1-textbook-project-structure/spec.md` must clearly define:
  - Repo layout
  - Docs list
  - RAG behavior and limits  
  Status: PASS (assumed after clarify step).

- Gate 2 – Resource Availability  
  Confirm free-tier feasibility for:
  - Neon (Postgres)
  - Qdrant
  - OpenAI  
  Status: PASS (with the assumption that low-volume hackathon usage fits free tiers).

- Gate 3 – Core Structure  
  - Docusaurus v3 initialized in `book/`
  - `npm install` and `npm run start` succeed from the `book/` directory
  - Basic GitHub Pages workflow stub exists in `.github/workflows/deploy.yml`  
  Status: PENDING

Architecture Sketch (mandatory)

High-level components:

1. Docusaurus Site (`physical-ai-book/book/`)
   - Serves the textbook:
     - `book/docs/intro.md`
     - `book/docs/physical-ai/physical-ai-basics.md`
     - `book/docs/physical-ai/humanoid-robots.md`
     - `book/docs/physical-ai/ros2-and-software-stack.md`
     - `book/docs/physical-ai/simulation-and-digital-twins.md`
     - `book/docs/physical-ai/lab-setup-and-hardware.md`
     - `book/docs/physical-ai/projects-and-skills.md`
   - Uses `book/sidebars.ts` and `book/docs/physical-ai/_category_.json` for navigation.
   - Hosts a simple chat UI (e.g., a React component under `book/src/components/` or `book/src/pages/`) which calls the RAG backend.

2. RAG Backend (`physical-ai-book/rag-backend/`)
   - FastAPI app (`main.py`) exposing at least:
     - `POST /ask` with body:
       - `question: string`
       - `selectedText?: string` (optional)
   - Uses:
     - Neon (Postgres) for metadata/logging (optional).
     - Qdrant (cloud) as vector database (stores embeddings of textbook chunks).
     - OpenAI for embeddings + answer generation.

Request flow:

- Frontend chat sends `{ question, selectedText? }` to `/ask`.
- Backend:
  - Embeds `question` (and optionally `selectedText`) using OpenAI embeddings.
  - Queries Qdrant for top N chunks (e.g., 3–5) from `book/docs/`.
  - Constructs a prompt containing:
    - User question
    - Retrieved chunks
    - Instructions to stay grounded in content
  - Calls OpenAI completions/chat.
  - Returns JSON:
    - `answer`
    - `sources` (list of `{ file, heading }`)

Section Structure (mandatory)

Textbook docs (v1):

- `book/docs/intro.md`  
  Overview of Physical AI & Humanoid Robotics, how to use the book, simulation-first approach.

- `book/docs/physical-ai/physical-ai-basics.md`  
  Core concepts: embodiment, sensors/actuators, control loops, examples of physical AI systems.

- `book/docs/physical-ai/humanoid-robots.md`  
  What makes a robot “humanoid”, examples of modern humanoids, design trade-offs, safety & interaction.

- `book/docs/physical-ai/ros2-and-software-stack.md`  
  ROS 2 basics, nodes/topics/services, minimal examples, high-level software layering.

- `book/docs/physical-ai/simulation-and-digital-twins.md`  
  Role of simulation, digital twins, typical toolchains, why simulation-first is safer and cheaper.

- `book/docs/physical-ai/lab-setup-and-hardware.md`  
  “Virtual lab”: dev environment, simulation setup, folders, optional notes on where real hardware would fit.

- `book/docs/physical-ai/projects-and-skills.md`  
  Suggested mini-projects, skills roadmap, how to continue learning after this book.

Each chapter will:

- Use simple, clear English.
- Include at least:
  - One diagram or conceptual figure (can be described in Markdown initially).
  - One small “try it yourself” style example (commands or code).
  - A short recap and “check your understanding” bullets.

Research Approach (mandatory)

- For each chapter, identify **3–5 solid sources**:
  - Official ROS 2 / simulator docs
  - Well-vetted tutorials
  - Occasional academic or industrial overview papers

Approach:

- Research is done **concurrently** with writing each chapter:
  - Start with a short outline.
  - Gather key references.
  - Write the first draft with citations and links.
- Trade-off:
  - Pros: keeps content practical and up-to-date.
  - Cons: may need a consistency pass at the end.  
  → Mitigation: final editing pass after all 7 docs exist.

Quality Validation (mandatory)

- RAG Accuracy:
  - Define 20–30 test questions, spread across all chapters.
  - Target: at least **85–90%** of answers judged “good” (correct, grounded, and helpful).

- Deployment:
  - Docusaurus site builds (`npm run build` in `book/`) without errors.
  - GitHub Pages (or similar) deployment is successful and publicly accessible.

- User flows to simulate:
  - Reader opens site → navigates via sidebar → reads a chapter.
  - Reader highlights or copies a confusing part → asks the chatbot a question.
  - Chatbot returns a grounded answer with sources.

- Accessibility:
  - Run at least one automated accessibility checker (e.g., Lighthouse).
  - Fix obvious WCAG issues (contrast, headings, alt text for key images).

Implementation Phases (mandatory)

Phase 1: Core Repo & Docusaurus Setup

Goals:

- Initialize `physical-ai-book/` repo.
- Create `book/` Docusaurus v3 TypeScript app.
- Add basic GitHub Pages workflow.

Key steps:

- Run `npx create-docusaurus@latest book classic --typescript` inside `physical-ai-book/` (or equivalent).
- Configure `book/docusaurus.config.ts` for:
  - Correct `organizationName`, `projectName`, `baseUrl`.
- Add `.github/workflows/deploy.yml` with a minimal Docusaurus deploy workflow.
- Verify:
  - `cd physical-ai-book/book`
  - `npm install`
  - `npm run start` works locally.

Dependencies: none.

Phase 2: Textbook Content (Docs in `book/docs/`)

Goals:

- Create and fill all 7 docs at the correct paths.
- Ensure sidebar and category metadata work.

Key steps:

- Create `book/docs/physical-ai/_category_.json` with label and position.
- For each Markdown file:
  - Add frontmatter with title and sidebar position.
  - Write first-pass content (sections, examples, recap bullets).
- Update `book/sidebars.ts` if needed to ensure clean navigation.
- Run `npm run build` (from `book/`) to ensure no docs-related errors.

Dependencies: Phase 1.

Phase 3: RAG Backend (FastAPI + Neon + Qdrant)

Goals:

- Implement a minimal but working RAG pipeline.

Key steps:

- Create `rag-backend/requirements.txt` (fastapi, uvicorn, qdrant-client, psycopg/asyncpg, openai, pydantic, etc.).
- Implement a simple FastAPI `main.py`:
  - Root health endpoint
  - `POST /ask` endpoint
- Implement indexing script or function:
  - Read Markdown files from `book/docs/`.
  - Chunk into ~300–500 word segments.
  - Compute embeddings and upsert into Qdrant.
- Implement query flow:
  - Embed question.
  - Query Qdrant for top N chunks.
  - Call OpenAI with clear grounding instructions.
  - Return `answer + sources`.

Dependencies: Phase 2 (docs need to exist before meaningful indexing).

Phase 4: Testing, Integration & Deployment

Goals:

- Ensure end-to-end flow works and meets basic quality thresholds.

Key steps:

- Define 20–30 test questions and evaluate RAG answers.
- Fix obvious grounding and safety issues (especially for safety or hardware topics).
- Integrate frontend chat UI with backend `/ask` endpoint.
- Finalize GitHub Pages (or similar) deployment:
  - Ensure environment variables are not exposed.
  - Document how to run frontend + backend locally.

Dependencies: Phases 1–3.

Dependencies (mandatory)

- Docusaurus setup (`book/`) must be complete before writing chapters (Phase 1 → Phase 2).
- Chapters must exist before meaningful RAG indexing (Phase 2 → Phase 3).
- RAG backend must be running before end-to-end testing (Phase 3 → Phase 4).

Decisions Needing Documentation (mandatory)

1. RAG Vector Database
   - Options: Qdrant Cloud vs. simple local/in-memory store.
   - Choice: **Qdrant Cloud** for persistence and production-like behavior.
   - ADR: Capture reasons (free-tier limits, ease of use).

2. Embedding & LLM Models
   - Options: Different OpenAI embedding and chat model families.
   - Decision points:
     - Cost vs. quality
     - Context length needed
   - ADR: Note chosen models and why.

3. Chunking Strategy
   - Options: Fixed-size word/character chunks vs. heading-aware splits.
   - ADR: Decide initial strategy and note trade-offs (answer quality vs. implementation complexity).

4. Backend Hosting
   - Options: Railway, Render, Fly.io, or similar.
   - ADR: Document chosen host and how it fits free-tier constraints.

Technical Details (mandatory)

- License: MIT.
- Accessibility: Target WCAG 2.1 AA for core Docusaurus pages.
- Cost: Must remain within free-tier limits for all external services.
- Hardware focus: Simulation-only; examples must not require owning hardware.

Follow-ups and Risks (mandatory)

- Follow-up: Validate Neon + Qdrant free-tier limits with realistic chunk and query counts.
  - Risk: Hitting throughput/size limits earlier than expected.

- Follow-up: Define a content update process (e.g., when a chapter changes, re-run indexing).
  - Risk: RAG answers falling out of sync with docs if updates are not re-indexed.

- Follow-up: Plan for future Phase 2 (beyond this feature) to explore:
  - Auth
  - Personalization
  - Additional languages  
  - Risk: Scope creep into future features before the core book + RAG are stable.
