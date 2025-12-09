---
id: 0001
title: Update Physical AI Book Constitution
stage: constitution
date: 2025-12-5
surface: agent
model: claude-sonnet-4-5-20250929
feature: textbook-project-structure
branch: master
user: Icon
command: /sp.constitution
labels: ["constitution", "update"]
links:
  spec: specs/1-textbook-project-structure/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests: null
---
## Prompt

Update the project constitution for the **Physical AI Book** project.

The repository layout is:

- Root: `physical-ai-book/`
- Docusaurus site: `book/` (config + docs live under `book/`, including `book/docusaurus.config.ts`, `book/sidebars.ts`, `book/tsconfig.json`, and `book/docs/...`).
- RAG backend: `physical-ai-book/rag-backend/`
- Specs: `physical-ai-book/specs/1-textbook-project-structure/...`

Please rewrite the constitution so that it clearly encodes the following principles:

1. **Clarity-First Teaching**

- Use simple, direct English.
- Target readers with basic programming knowledge but no deep robotics background.
- Always prefer intuition and concrete examples over heavy math or theory.
- Define technical terms (like “ROS 2”, “digital twin”, “vector database”) in context.

2. **Simulation-First Robotics Practice**

- The textbook must be usable **without** real robots.
- All examples must be testable using simulation tools and software.
- ROS 2, Gazebo/Unity-style simulation, and cloud + local compute are the main focus.

3. **Ethical and Safe Robotics**

- Frame robots and AI as tools to help people, not replace or harm them.
- Encourage safe operation, responsible use, and respect for human control.
- Make limitations and risks explicit where relevant.

4. **Robustness & Reproducibility**

- Encourage small, testable code examples and clear command sequences.
- Give step-by-step instructions for installing and running tools where needed.
- Avoid hand-wavy descriptions when a concrete sequence of steps can be given.

5. **RAG Grounding & Honesty**

- The RAG chatbot should answer **only** from the textbook and closely related notes.
- When information is not in the book, it should:
  - Say that clearly.
  - Optionally suggest where in the book the user could look instead.
- It must not hallucinate facts about robotics hardware, safety, or deployment.

Add explicit sections for:

- **Textbook Scope**

  - One introduction chapter (`book/docs/intro.md`).
  - Six core chapters in `book/docs/physical-ai/`:

    1. `book/docs/physical-ai/physical-ai-basics.md`
    2. `book/docs/physical-ai/humanoid-robots.md`
    3. `book/docs/physical-ai/ros2-and-software-stack.md`
    4. `book/docs/physical-ai/simulation-and-digital-twins.md`
    5. `book/docs/physical-ai/lab-setup-and-hardware.md`
    6. `book/docs/physical-ai/projects-and-skills.md`

- **RAG System Principles**

  - Frontend: Docusaurus v3 TypeScript app in `book/` under `physical-ai-book/`.
  - Backend: `rag-backend/` with FastAPI, Neon (Postgres), Qdrant, and OpenAI.
  - No auth, no personalization, no Urdu translation, no bonus features during this phase.
  - Minimal API: a small set of endpoints for Q&A and (optionally) simple logging.

Update the **governance section** so that:

- Any new feature or chapter must be checked against:
  - Clarity-first teaching
  - Simulation-first approach
  - Ethical + safe robotics
  - RAG grounding + honesty
- Any suggestion to add auth/personalization/Urdu or real hardware must be treated as a **future phase**, not part of this constitution.

## Response snapshot

The constitution for the Physical AI Book project was updated to encode clarity-first teaching, simulation-first robotics practice, ethical and safe robotics, robust/reproducible examples, and grounded RAG behavior. It now includes explicit scope (Intro + 6 chapters under `book/docs/physical-ai/`) and RAG system principles (Docusaurus frontend in `book/`, `rag-backend` FastAPI service, no bonus features). Governance requires all future changes to respect these principles.

## Outcome

- ✅ Impact: Constitution now matches the current `physical-ai-book` wrapper structure and the Docusaurus app in `book/` with a focused scope.
- 🧪 Tests: N/A.
- 📁 Files: `.specify/memory/constitution.md` updated.
- 🔁 Next prompts: Use this constitution when refining the spec and plan.
- 🧠 Reflection: Locking scope early helps avoid overloading the hackathon project.

## Evaluation notes (flywheel)

- Failure modes observed: Previous constitutions risked pulling in bonus features and hardware work.
- Graders run and results: N/A.
- Next experiment: Use this constitution as a checklist when reviewing spec and plan.
