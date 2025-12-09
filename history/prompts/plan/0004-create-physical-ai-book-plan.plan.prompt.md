---
id: 0004
title: Create Physical AI Book Plan
stage: plan
date: 2025-12-5
surface: agent
model: claude-sonnet-4-5-20250929
feature: textbook-project-structure
branch: master
user: Icon
command: /sp.plan
labels: ["plan", "architecture"]
links:
  spec: specs/1-textbook-project-structure/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/1-textbook-project-structure/plan.md
tests: null
---
## Prompt

Create a practical implementation plan for the **Physical AI Book** project based on the clarified spec and the structure from 0002.

### Project layout

- Root: `physical-ai-book/`
- Docusaurus v3 TypeScript app (inside `book/`):
  - Config + TS tooling in `book/` (`book/docusaurus.config.ts`, `book/sidebars.ts`, `book/tsconfig.json`, `book/package.json`, etc.).
  - Docs in `book/docs/` and `book/docs/physical-ai/`.
- RAG backend:
  - `rag-backend/main.py`
  - `rag-backend/requirements.txt`
  - `rag-backend/README.md`
- Specs under `specs/1-textbook-project-structure/`.

### Scope

1. **Textbook (Docusaurus in `book/`)**

- Intro: `book/docs/intro.md`
- Six chapters under `book/docs/physical-ai/`:
  - `book/docs/physical-ai/physical-ai-basics.md`
  - `book/docs/physical-ai/humanoid-robots.md`
  - `book/docs/physical-ai/ros2-and-software-stack.md`
  - `book/docs/physical-ai/simulation-and-digital-twins.md`
  - `book/docs/physical-ai/lab-setup-and-hardware.md`
  - `book/docs/physical-ai/projects-and-skills.md`

2. **RAG backend (`rag-backend/`)**

- FastAPI app exposing a minimal `/ask` endpoint.
- Qdrant Cloud as vector store for book chunks.
- Neon (Postgres) optionally for logs/metadata.
- OpenAI for embeddings + answer generation.

3. **Out of scope for now**

- Auth
- Personalization
- Urdu translation
- Sub-agents / multi-agent orchestration
- Real hardware integration

### Plan requirements

Write the plan to `specs/1-textbook-project-structure/plan.md` and include:

1. **Architecture overview**

Explain how:

- The Docusaurus site in `book/` serves the textbook and a simple chat UI component.
- The chat UI calls `rag-backend`’s `/ask` endpoint with:
  - `question`
  - Optional `selectedText`
- `rag-backend`:
  - Loads book chunks from a Postgres/Neon table (or from disk) and Qdrant.
  - Uses embeddings to find the most relevant chunks.
  - Calls OpenAI to generate an answer grounded in those chunks.
  - Returns answer + optional sources to the frontend.

2. **Chapter structure**

For each of the 7 docs under `book/docs/`:

- Give 1–2 sentences on what the reader should learn.
- Indicate the kind of examples (e.g., “high-level diagrams,” “terminal command walkthroughs,” “short bullet checklists”).

3. **Indexing and RAG behavior**

Describe:

- How docs in `book/docs/` will be converted into chunks (e.g., 300–500 word segments with file + heading + order).
- When and how the initial indexing job runs (e.g., local script run after content is stable).
- RAG behavior:
  - How many chunks are retrieved per question (e.g., 3–5).
  - How off-topic questions are handled.
  - How to handle “Explain this part” questions using `selectedText`.

4. **Quality and testing**

Define:

- A small set of test questions (20–30) covering all chapters.
- A target success expectation (e.g., “good answer” 85–90% of the time).
- Simple manual checks to ensure:
  - Docs in `book/docs/` render correctly.
  - `/ask` endpoint works locally.
  - The chatbot does not fabricate major facts outside the book.

5. **Phases and tasks (high-level)**

Break into phases (to be expanded in tasks):

- Phase 1: Project + tooling setup.
- Phase 2: Chapter drafting and editing.
- Phase 3: RAG backend and indexing.
- Phase 4: Integration, testing, and deployment.

For each phase:

- List the main goals.
- Mention key dependencies (e.g., RAG indexing depends on docs being written).

6. **Key decisions to track later**

List 3–5 decisions that warrant ADRs later, for example:

- Choice of OpenAI model family.
- Embedding model and vector dimension.
- Where to host `rag-backend` (e.g., Railway, Render, Fly.io).
- How to handle environment variables for API keys in a hackathon-friendly way.

## Response snapshot

An implementation plan for the Physical AI Book project was written to `specs/1-textbook-project-structure/plan.md`. It describes the architecture (Docusaurus in `book/` + `rag-backend`), chapter structure (for `book/docs/intro.md` and the 6 `book/docs/physical-ai/*.md` files), indexing and RAG behavior, quality checks, and 4 implementation phases aligned with the existing file structure.

## Outcome

- ✅ Impact: Clear plan aligned with the real filesystem layout (`physical-ai-book/book` + `rag-backend`) and constrained scope.
- 🧪 Tests: N/A.
- 📁 Files: `specs/1-textbook-project-structure/plan.md` created or updated.
- 🔁 Next prompts: Generate atomic tasks in `tasks.md`.
- 🧠 Reflection: Anchoring the plan on the actual repo structure prevents drift between docs and code.

## Evaluation notes (flywheel)

- Failure modes observed: None yet; complexity is manageable.
- Next experiment: Use this plan as the sole input to task generation.
