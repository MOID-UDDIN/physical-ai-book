---
id: 0002
title: Create Textbook Project Structure and Spec
stage: spec
date: 2025-12-5
surface: agent
model: claude-sonnet-4-5-20250929
feature: textbook-project-structure
branch: master
user: Icon
command: /sp.specify Create the complete empty folder and file structure for the Physical AI & Humanoid Robotics textbook project under the root folder `physical-ai-book`. Do NOT write any chapter content yet — only create all the required files and folders with proper names and paths. Use a Docusaurus v3 (TypeScript) + Spec-Kit Plus structure that works with GitHub Pages deployment. Include a separate folder for a simple RAG backend (FastAPI/Neon/Qdrant). Do NOT add auth, personalization, or Urdu translation bonus pages. After creating the structure, show the full tree.
labels: ["spec", "structure"]
links:
  spec: specs/1-textbook-project-structure/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - physical-ai-book/README.md
  - physical-ai-book/book/docusaurus.config.ts
  - physical-ai-book/book/sidebars.ts
  - physical-ai-book/book/tsconfig.json
  - physical-ai-book/book/src/css/custom.css
  - physical-ai-book/book/src/pages/index.tsx
  - physical-ai-book/book/docs/intro.md
  - physical-ai-book/book/docs/physical-ai/physical-ai-basics.md
  - physical-ai-book/book/docs/physical-ai/humanoid-robots.md
  - physical-ai-book/book/docs/physical-ai/ros2-and-software-stack.md
  - physical-ai-book/book/docs/physical-ai/simulation-and-digital-twins.md
  - physical-ai-book/book/docs/physical-ai/lab-setup-and-hardware.md
  - physical-ai-book/book/docs/physical-ai/projects-and-skills.md
  - physical-ai-book/book/docs/physical-ai/_category_.json
  - physical-ai-book/specs/1-textbook-project-structure/spec.md
  - physical-ai-book/specs/1-textbook-project-structure/plan.md
  - physical-ai-book/specs/1-textbook-project-structure/tasks.md
  - physical-ai-book/rag-backend/README.md
  - physical-ai-book/rag-backend/main.py
  - physical-ai-book/rag-backend/requirements.txt
  - physical-ai-book/book/package.json
tests: null
---

## Prompt

Create the complete empty folder and file structure for my Physical AI textbook project.

Requirements:

- Root folder name: **`physical-ai-book`**

- Tech stack:
  - Docusaurus v3 (TypeScript template) **inside `book/`**.
  - Spec-Kit Plus structure for `specs/plan/tasks` at the root.
  - Simple RAG backend folder using FastAPI + Neon (Postgres) + Qdrant under `rag-backend/`.

- Deployment:
  - Ready for GitHub Pages workflow (`.github/workflows/deploy.yml`).

- Docs structure (inside the Docusaurus app in `book/`):

  - `book/docs/intro.md` – book introduction
  - `book/docs/physical-ai/_category_.json` – category for the textbook
  - `book/docs/physical-ai/physical-ai-basics.md`
  - `book/docs/physical-ai/humanoid-robots.md`
  - `book/docs/physical-ai/ros2-and-software-stack.md`
  - `book/docs/physical-ai/simulation-and-digital-twins.md`
  - `book/docs/physical-ai/lab-setup-and-hardware.md`
  - `book/docs/physical-ai/projects-and-skills.md`

- Spec-Kit Plus:

  - `specs/1-textbook-project-structure/spec.md`
  - `specs/1-textbook-project-structure/plan.md`
  - `specs/1-textbook-project-structure/tasks.md`

- RAG backend:

  - `rag-backend/main.py` (FastAPI entrypoint)
  - `rag-backend/requirements.txt`
  - `rag-backend/README.md` (how to run backend)

- Do NOT create any files for:

  - auth
  - personalization
  - Urdu translation

After creating, print the full tree of `physical-ai-book` so it can be verified (ensure the Docusaurus app is under `book/` and the docs paths match `book/docs/...`).

## Response snapshot

The `physical-ai-book` project structure was created with a Docusaurus v3 TypeScript site in `book/`, a clean `book/docs` folder for the textbook chapters, a Spec-Kit Plus spec/plan/tasks area at the root, and a minimal `rag-backend` folder for the FastAPI + Neon + Qdrant service.

## Outcome

- ✅ Impact: Project skeleton ready for chapter writing and RAG backend work, aligned with the `book/` subdirectory structure.
- 🧪 Tests: Spec structure validated against a basic requirements checklist.
- 📁 Files: All core project files and folders under `physical-ai-book/` (with the Docusaurus app in `book/`) created.
- 🔁 Next prompts: Create the implementation plan, then generate tasks.
- 🧠 Reflection: Keeping the structure small and focused will help finish during the hackathon while matching the actual `book/` layout.
