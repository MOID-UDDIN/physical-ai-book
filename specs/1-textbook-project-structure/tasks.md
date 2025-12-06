Tasks: Physical AI Book Project
Feature Branch: 1-textbook-project-structure
Created: 2025-12-05
Status: Draft

Implementation Strategy
The project will be implemented in four phases:

1. Repo + Docusaurus setup (`physical-ai-book/book/`).
2. Textbook content (7 docs under `book/docs/`).
3. RAG backend (`rag-backend/` + indexing).
4. Testing, integration, and deployment.

Tasks are atomic, independently testable, and aligned with:

- `specs/1-textbook-project-structure/spec.md`
- `specs/1-textbook-project-structure/plan.md`

Auth, personalization, and Urdu translation are **explicitly out of scope** for this feature.

---

Phase 1: Project Setup (Estimated: 60 min)

Goal  
Establish the foundational repo structure, Docusaurus v3 TypeScript site inside `book/`, and basic deployment workflow.

Independent Test  
Run `ls -R physical-ai-book/` and verify all required directories/files are present. Then:

- `cd physical-ai-book/book`
- `npm install`
- `npm run start`

and confirm the site runs locally.

Tasks

T001 Initialize Docusaurus v3 (TypeScript) in `physical-ai-book/book/`.  
- Duration: 15 min  
- Deps: None  
- Criterion: `physical-ai-book/book/` contains a fresh Docusaurus v3 TS project (`book/package.json`, `book/docusaurus.config.ts`, `book/sidebars.ts`, `book/tsconfig.json` present).  
- Output: Initialized `book/` directory with Docusaurus boilerplate.  
- Lineage: spec.md: FR-001, FR-002; plan.md: Technical Context, Phase 1

T002 Add minimal Docusaurus config for GitHub Pages in `book/docusaurus.config.ts` and `book/package.json`.  
- Duration: 15 min  
- Deps: T001  
- Criterion: Docusaurus config has correct `organizationName`, `projectName`, `baseUrl` for deployment; `npm run build` runs successfully from `book/`.  
- Output: Updated `book/docusaurus.config.ts`, `book/package.json`.  
- Lineage: spec.md: FR-003; plan.md: Architecture Sketch, Phase 1

T003 Create core repo structure (`specs/`, `rag-backend/`, `.github/workflows/`, meta files).  
- Duration: 15 min  
- Deps: T001  
- Criterion: At repo root (`physical-ai-book/`), the following exist:
  - `specs/`
  - `rag-backend/`
  - `.github/workflows/deploy.yml`
  - `.gitignore`
  - `README.md`  
- Output: Created directories and base files.  
- Lineage: spec.md: FR-004, FR-006, FR-007; plan.md: Gates, Phase 1

T004 Create empty textbook doc files under `book/docs/`.  
- Duration: 15 min  
- Deps: T001  
- Criterion: The following files exist with placeholder headings/frontmatter only:
  - `book/docs/intro.md`
  - `book/docs/physical-ai/_category_.json`
  - `book/docs/physical-ai/physical-ai-basics.md`
  - `book/docs/physical-ai/humanoid-robots.md`
  - `book/docs/physical-ai/ros2-and-software-stack.md`
  - `book/docs/physical-ai/simulation-and-digital-twins.md`
  - `book/docs/physical-ai/lab-setup-and-hardware.md`
  - `book/docs/physical-ai/projects-and-skills.md`  
- Output: All doc files created with minimal placeholders.  
- Lineage: spec.md: FR-005, FR-008; plan.md: Section Structure, Phase 2

Checkpoint: Phase 1 Completed  
Human review: Confirm structure matches spec, and Docusaurus runs locally from `book/`.

---

Phase 2: Content Creation (Estimated: 150–210 min)

Goal  
Populate all 7 textbook docs with first-pass content that follows clarity-first and simulation-first principles.

Independent Test  
Check each Markdown file in `book/docs/` and verify:

- Content exists (not empty placeholder).
- It roughly matches the described scope for that chapter.
- Site builds and renders all pages without errors.

Tasks

T005 Draft `book/docs/intro.md` (overview + how to use the book).  
- Duration: 20–30 min  
- Deps: T004  
- Criterion: Intro explains Physical AI, book goals, target reader, and simulation-first approach in clear language.  
- Output: Completed `book/docs/intro.md`.  
- Lineage: plan.md: Section Structure (Intro), Research Approach

T006 Draft `book/docs/physical-ai/physical-ai-basics.md`.  
- Duration: 25–30 min  
- Deps: T004  
- Criterion: Chapter explains core concepts (embodiment, sensors/actuators, control loops, examples) with at least one small example or diagram description.  
- Output: Completed `physical-ai-basics.md`.  
- Lineage: plan.md: Section Structure (Basics), Quality Validation

T007 Draft `book/docs/physical-ai/humanoid-robots.md`.  
- Duration: 25–30 min  
- Deps: T004  
- Criterion: Chapter covers what humanoid robots are, modern examples, design trade-offs, and safety/interaction notes.  
- Output: Completed `humanoid-robots.md`.  
- Lineage: plan.md: Section Structure (Humanoid Robots)

T008 Draft `book/docs/physical-ai/ros2-and-software-stack.md`.  
- Duration: 25–30 min  
- Deps: T004  
- Criterion: Chapter introduces ROS 2 basics, nodes/topics/services, and includes at least one “try it” style example (even if conceptual).  
- Output: Completed `ros2-and-software-stack.md`.  
- Lineage: plan.md: Section Structure (ROS 2 & Software Stack)

T009 Draft `book/docs/physical-ai/simulation-and-digital-twins.md`.  
- Duration: 25–30 min  
- Deps: T004  
- Criterion: Chapter explains simulations, digital twins, common tools, and why simulation-first is safer and cheaper.  
- Output: Completed `simulation-and-digital-twins.md`.  
- Lineage: plan.md: Section Structure (Simulation & Digital Twins)

T010 Draft `book/docs/physical-ai/lab-setup-and-hardware.md`.  
- Duration: 25–30 min  
- Deps: T004  
- Criterion: Chapter describes a “virtual lab” setup (dev env, folder structure, simulation tools) and clearly separates real hardware as optional/future.  
- Output: Completed `lab-setup-and-hardware.md`.  
- Lineage: plan.md: Section Structure (Lab Setup), Constitution (Simulation-First)

T011 Draft `book/docs/physical-ai/projects-and-skills.md`.  
- Duration: 25–30 min  
- Deps: T004  
- Criterion: Chapter lists mini-project ideas and a skills roadmap, with clear next steps after finishing the book.  
- Output: Completed `projects-and-skills.md`.  
- Lineage: plan.md: Section Structure (Projects & Skills)

T012 Verify sidebar + `_category_.json` integration.  
- Duration: 15–20 min  
- Deps: T005–T011  
- Criterion: All chapters appear in the sidebar in a logical order; `npm run build` from `book/` succeeds.  
- Output: Updated `book/sidebars.ts`, verified build.  
- Lineage: spec.md: FR-003, FR-005; plan.md: Architecture Sketch, Phase 2

Checkpoint: Phase 2 Completed  
Human review: Check chapter clarity, consistency, and basic alignment with the constitution.

---

Phase 3: RAG Backend Integration (Estimated: 150–180 min)

Goal  
Implement a minimal RAG backend in `rag-backend/` and connect it to the textbook docs.

Independent Test  
- Run the indexing step successfully (docs → Qdrant).  
- Call `/ask` locally and receive grounded answers that reference the correct chapters.

Tasks

T013 Initialize FastAPI app in `rag-backend/main.py` with health endpoint.  
- Duration: 20 min  
- Deps: T003  
- Criterion: `uvicorn rag-backend.main:app --reload` runs and `/health` (or `/`) returns a basic response.  
- Output: `rag-backend/main.py`, updated `rag-backend/requirements.txt`.  
- Lineage: spec.md: FR-006; plan.md: Architecture Sketch, Phase 3

T014 Configure Qdrant client and basic collection in `rag-backend/`.  
- Duration: 25–30 min  
- Deps: T013  
- Criterion: Qdrant client can connect to a configured Qdrant instance and create a collection for textbook chunks.  
- Output: e.g., `rag-backend/vector_store.py` or similar helper.  
- Lineage: plan.md: Decisions (Vector DB), Phase 3

T015 Implement indexing script to read `book/docs/` and upsert chunks into Qdrant.  
- Duration: 30–40 min  
- Deps: T014, T005–T011  
- Criterion: Running the script:
  - Reads all 7 Markdown docs.
  - Splits them into chunks (~300–500 words).
  - Upserts them into Qdrant with metadata (file path, heading, order).  
- Output: `rag-backend/index_docs.py` (or equivalent).  
- Lineage: plan.md: Indexing & RAG behavior, Phase 3

T016 Implement `/ask` endpoint using embeddings + Qdrant + OpenAI.  
- Duration: 40–45 min  
- Deps: T015  
- Criterion: `POST /ask` with `{ "question": "..." }`:
  - Embeds the question.
  - Retrieves top N chunks from Qdrant.
  - Calls OpenAI with grounding instructions.
  - Returns JSON `{ answer, sources }`.  
- Output: Updated `rag-backend/main.py` with `/ask`.  
- Lineage: plan.md: Architecture Sketch, RAG behavior

T017 Add optional logging of Q&A to Neon (if configured).  
- Duration: 20–25 min  
- Deps: T016  
- Criterion: When enabled, each `/ask` call writes a row (question, answer, timestamp, top sources) to Neon. Failure to log must not break `/ask`.  
- Output: e.g., `rag-backend/db.py` and modifications to `main.py`.  
- Lineage: plan.md: Architecture Sketch (Neon usage)

Checkpoint: Phase 3 Completed  
Human review: Manually query `/ask` with a handful of questions and check answer quality & grounding.

---

Phase 4: Testing & Deployment Refinement (Estimated: 75–90 min)

Goal  
Validate RAG quality, verify accessibility, and ensure smooth deployment of the Docusaurus site.

Independent Test  
- Use a small test set of 20–30 questions and measure “good answer” rate.  
- Confirm the deployed site is reachable and the chat works end-to-end.

Tasks

T018 Define and run RAG test set (20–30 questions).  
- Duration: 30–40 min  
- Deps: T016  
- Criterion: A test document (e.g., `specs/1-textbook-project-structure/rag-test-results.md`) shows:
  - Question list.
  - Manual rating for each answer.
  - Overall accuracy (aiming for 85–90% “good”).  
- Output: Test report file.  
- Lineage: plan.md: Quality Validation (RAG Accuracy)

T019 Perform basic accessibility and UX check of Docusaurus site.  
- Duration: 25–30 min  
- Deps: T012  
- Criterion: Run an automated checker (like Lighthouse) and manually verify headings, alt text for key images, and contrast issues. Record any major issues and fixes.  
- Output: Short accessibility/UX notes file (e.g., in `specs/` or `README.md` updates).  
- Lineage: plan.md: Quality Validation (WCAG), Technical Details

T020 Configure and verify GitHub Pages (or similar) deployment.  
- Duration: 20–25 min  
- Deps: T002, T019  
- Criterion:
  - `.github/workflows/deploy.yml` runs without errors.
  - Built site is accessible at the expected URL.
  - Docs and basic navigation work in production.  
- Output: Live site URL + updated `README.md` with deployment instructions.  
- Lineage: spec.md: FR-007; plan.md: Implementation Phases (Phase 1 & 4)

Checkpoint: Phase 4 Completed  
Human review: Final review of deployed site, RAG answers, and basic accessibility.

---

Dependencies

- Phase 1 must be completed before Phase 2.
- Phase 2 (docs) must be substantially complete before Phase 3 indexing and RAG.
- Phase 3 must be completed before Phase 4 RAG testing and deployment.

Parallel Execution Opportunities

- Phase 2: Drafting different chapters (T005–T011) can be split among multiple contributors once T004 is done.
- Phase 3: Some non-critical enhancements (like logging to Neon, T017) can be parallelized after the main `/ask` path (T016) is working.
