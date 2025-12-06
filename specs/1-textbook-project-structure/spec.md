User Story 1 – Initialize Physical AI Book Project (Priority: P1)

A project maintainer wants to quickly set up the foundational structure for the **“Physical AI Book”** so that:

- It uses a **Docusaurus v3 TypeScript site inside `book/`**.
- It has a clear structure for the textbook docs (Intro + 6 chapters).
- It includes a basic skeleton for a **RAG backend** under `rag-backend/`.
- It is ready for GitHub Pages deployment with minimal configuration.

Why this priority:
This is the foundational step; without a correct repo + app structure, neither content writing nor RAG integration can proceed smoothly.

Independent Test:
From the repo root:

- `ls -R physical-ai-book/` shows the expected directories and files.
- `cd physical-ai-book/book && npm install && npm run start` works (even if content is placeholder).
- `rag-backend/` contains a minimal FastAPI-ready layout.

Acceptance Scenarios

1. Root Repo & Docusaurus App

Given an empty workspace,  
When the project structure is initialized,  
Then a root directory named `physical-ai-book` exists and contains a **Docusaurus v3 TypeScript app inside the `book/` directory** with standard files (e.g., `book/package.json`, `book/docusaurus.config.ts`, `book/sidebars.ts`, `book/tsconfig.json`).

2. Spec & Backend Folders

Given the Docusaurus `book/` structure is in place,  
When additional project-specific folders are created,  
Then the following top-level entries are present under `physical-ai-book/`:

- `book/`
- `specs/`
- `rag-backend/`
- `.github/workflows/`
- `.gitignore`
- `README.md`

3. Textbook Docs Structure

Given the project structure is created,  
When the docs folder is inspected,  
Then the following files exist (with **no finished chapter content yet**, only headings/outline):

- `book/docs/intro.md`
- `book/docs/physical-ai/_category_.json`
- `book/docs/physical-ai/physical-ai-basics.md`
- `book/docs/physical-ai/humanoid-robots.md`
- `book/docs/physical-ai/ros2-and-software-stack.md`
- `book/docs/physical-ai/simulation-and-digital-twins.md`
- `book/docs/physical-ai/lab-setup-and-hardware.md`
- `book/docs/physical-ai/projects-and-skills.md`

4. RAG Backend Skeleton

Given the project structure is created,  
When the `rag-backend/` folder is inspected,  
Then at least the following exist:

- `rag-backend/README.md`
- `rag-backend/main.py` (placeholder FastAPI app or stub)
- `rag-backend/requirements.txt`

5. Deployment & Meta Files

Given the project structure is created,  
When essential configuration and meta files are checked,  
Then the following are present:

- `.gitignore`
- `README.md`
- `.github/workflows/deploy.yml` (minimal Docusaurus deploy workflow)
- `book/package.json`
- `book/docusaurus.config.ts`
- `book/postcss.config.js`
- `book/babel.config.js`
- `book/sidebars.ts`
- `book/tsconfig.json`

Edge Cases

- Root folder already exists:  
  Out of scope for now; this feature assumes a **new** project setup.
- Missing Docusaurus config:  
  The feature explicitly creates all required Docusaurus configuration files under `book/`.

Clarifications
Session 2025-11-28 (adapted to new structure)

Q: Should we pre-configure advanced Docusaurus plugins (search, analytics, etc.) at this stage?  
A: No. Use the **minimal** Docusaurus config required to run the site and build for GitHub Pages. Plugins can be added later.

Q: What should be in `.github/workflows/deploy.yml` initially?  
A: A basic Docusaurus deploy workflow targeting GitHub Pages is enough; custom domains and advanced options can be added later.

Requirements (mandatory)

Functional Requirements

- FR-001: The system MUST create a root directory named `physical-ai-book`.
- FR-002: The system MUST initialize a standard Docusaurus v3 TypeScript project **inside** `physical-ai-book/book/`.
- FR-003: The system MUST include minimal but valid Docusaurus configuration in:
  - `book/docusaurus.config.ts`
  - `book/package.json`
  - `book/sidebars.ts`
  - `book/tsconfig.json`
- FR-004: The system MUST create top-level folders:
  - `specs/`
  - `rag-backend/`
  - `.github/workflows/`
- FR-005: The system MUST create the textbook doc files at:
  - `book/docs/intro.md`
  - `book/docs/physical-ai/_category_.json`
  - `book/docs/physical-ai/physical-ai-basics.md`
  - `book/docs/physical-ai/humanoid-robots.md`
  - `book/docs/physical-ai/ros2-and-software-stack.md`
  - `book/docs/physical-ai/simulation-and-digital-twins.md`
  - `book/docs/physical-ai/lab-setup-and-hardware.md`
  - `book/docs/physical-ai/projects-and-skills.md`
- FR-006: The system MUST create at least the following RAG backend skeleton files:
  - `rag-backend/README.md`
  - `rag-backend/main.py`
  - `rag-backend/requirements.txt`
- FR-007: The system MUST include:
  - `.gitignore` and `README.md` at the repo root.
  - `.github/workflows/deploy.yml` with a basic Docusaurus deploy workflow.
- FR-008: The system MUST NOT include finalized chapter content; doc files can contain **only placeholders/outline** at this stage.

Key Entities

- **Project Structure**  
  The hierarchical arrangement of directories and files under `physical-ai-book/`.

- **Docusaurus Configuration**  
  Files under `book/` (`docusaurus.config.ts`, `package.json`, etc.) governing the site build and appearance.

- **Textbook Docs**  
  Markdown files under `book/docs/` and `book/docs/physical-ai/` representing the textbook chapters.

- **RAG Backend Skeleton**  
  The minimal FastAPI-ready layout under `rag-backend/`, including entrypoint and requirements.

- **Deployment Workflow**  
  GitHub Actions workflow at `.github/workflows/deploy.yml` for automating Docusaurus builds and deployment.

Success Criteria (mandatory)

Measurable Outcomes

- SC-001: `ls -R physical-ai-book/` shows all specified directories and files (including `book/`, `specs/`, `rag-backend/`, `.github/workflows/deploy.yml`, and the docs paths under `book/docs/`).
- SC-002: Running
  - `cd physical-ai-book/book`
  - `npm install`
  - `npm run start`  
  succeeds without structure-related errors (content may still be placeholder).
- SC-003: The deployment workflow file (`.github/workflows/deploy.yml`) is correctly placed and named, and can be filled in later to deploy the Docusaurus site.
