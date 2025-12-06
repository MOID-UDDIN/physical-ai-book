---
id: 0005
title: Generate Physical AI Book Project Tasks
stage: tasks
date: 2025-12-5
surface: agent
model: claude-sonnet-4-5-20250929
feature: textbook-project-structure
branch: master
user: icon
command: /sp.tasks Generate atomic tasks from specs/1-textbook-project-structure/spec.md and specs/1-textbook-project-structure/plan.md for the Physical AI Book project, using the structure from 0002 (wrapper `physical-ai-book/`, Docusaurus app in `book/`, RAG backend in `rag-backend/`). Focus only on: the textbook docs (Intro + 6 chapters under `book/docs/physical-ai/`) and the simple RAG backend (FastAPI + Neon + Qdrant + OpenAI). Break work into 4 phases (setup, content, RAG, testing/deploy). Save tasks to `specs/1-textbook-project-structure/tasks.md`.
labels: ["tasks", "generation"]
links:
  spec: specs/1-textbook-project-structure/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/1-textbook-project-structure/tasks.md
tests: null
---
## Prompt

Generate **atomic tasks** for the **Physical AI Book** project, based on:

- `specs/1-textbook-project-structure/spec.md`
- `specs/1-textbook-project-structure/plan.md`

Use the repo structure from 0002:

- Root: `physical-ai-book/`
- Docusaurus app + docs under `book/` (`book/docusaurus.config.ts`, `book/sidebars.ts`, `book/docs/`, etc.).
- RAG backend under `rag-backend/`.

### Scope

1. **Textbook docs (in `book/docs/`)**

- `book/docs/intro.md`
- `book/docs/physical-ai/physical-ai-basics.md`
- `book/docs/physical-ai/humanoid-robots.md`
- `book/docs/physical-ai/ros2-and-software-stack.md`
- `book/docs/physical-ai/simulation-and-digital-twins.md`
- `book/docs/physical-ai/lab-setup-and-hardware.md`
- `book/docs/physical-ai/projects-and-skills.md`
- `book/docs/physical-ai/_category_.json`

2. **RAG backend (`rag-backend/`)**

- `main.py` with FastAPI `/ask` endpoint.
- `requirements.txt` with FastAPI, Uvicorn, Qdrant client, Postgres/Neon driver, OpenAI SDK.
- Simple indexing flow (script or function) to push doc chunks from `book/docs/` into Qdrant.
- No auth, no personalization, no Urdu translation.

### Phases

Create tasks grouped into 4 phases:

1. **Phase 1: Setup**

   - Initialize repo and install Docusaurus dependencies in `book/`.
   - Verify `npm run start` from `book/` and basic docs routing.
   - Create `rag-backend/` skeleton and verify `uvicorn` can serve a “hello” endpoint.

2. **Phase 2: Content**

   - Create and fill the 7 docs in `book/docs/` with initial content following the constitution.
   - Ensure sidebar and `book/docs/physical-ai/_category_.json` work as expected.
   - Run a local review for clarity and consistency.

3. **Phase 3: RAG Backend**

   - Write indexing logic to read from `book/docs/` and send chunks to Qdrant.
   - Implement `/ask` in FastAPI to:
     - Embed the question.
     - Query Qdrant.
     - Call OpenAI with top chunks as context.
   - Optionally log queries/answers in Neon.

4. **Phase 4: Testing & Deploy**

   - Define and run test questions against `/ask`.
   - Fix obvious answer-quality issues (e.g., not grounded responses).
   - Configure and test GitHub Pages (or another simple hosting) using `.github/workflows/deploy.yml`.
   - Confirm end-to-end: user opens site → reads docs in `book/docs/` → asks question in chat → gets grounded answer.

### Task format

Write all tasks to `specs/1-textbook-project-structure/tasks.md` using:

- Numbering: `1.1`, `1.2`, … for Phase 1; `2.1`, `2.2`, … for Phase 2, etc.
- For each task include:
  - **ID**
  - **Title**
  - **Phase**
  - **Estimated duration** (15–30 minutes)
  - **Dependencies**
  - **Acceptance criterion**
  - **Output** (what proves it’s done)
  - **Lineage** (which spec/plan section it traces to)

Do not add tasks for auth, personalization, Urdu, or real hardware.

## Response snapshot

Atomic tasks were generated for the Physical AI Book project and written to `specs/1-textbook-project-structure/tasks.md`, aligned with the `physical-ai-book` wrapper structure and the Docusaurus app in `book/`, plus the limited scope (textbook docs under `book/docs/` + RAG backend).

## Outcome

- ✅ Impact: Work is broken into small, concrete tasks that match the `book/`-based layout.
- 🧪 Tests: N/A.
- 📁 Files: `specs/1-textbook-project-structure/tasks.md` created or updated.
- 🔁 Next prompts: Start executing tasks from Phase 1.
- 🧠 Reflection: Mapping tasks directly to spec/plan and filesystem (`book/docs/...`) helps keep execution focused.

## Evaluation notes (flywheel)

- Failure modes observed: None yet; risk is underestimating writing time for chapters.
- Next experiment: After Phase 1, validate task estimates against actual time taken.
