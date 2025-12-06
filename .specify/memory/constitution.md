# Physical AI Book Constitution

## Core Principles

### I. Clarity-First Learning
The textbook must prioritize clear, simple, and beginner-friendly explanations.  
All concepts in Physical AI & Humanoid Robotics must be taught using intuitive language, real examples, diagrams, and step-by-step reasoning. Heavy math, jargon, and unnecessary complexity should be avoided unless absolutely needed for understanding.

### II. Simulation-First Robotics Practice
All examples, exercises, and demonstrations must be entirely runnable in simulation.  
ROS 2, Gazebo/Unity-style simulators, and digital twins must be the default environment.  
No real hardware is required; hardware discussions should remain conceptual.

### III. Ethical & Safe Robotics (NON-NEGOTIABLE)
All content must emphasize safety, ethical use, human oversight, transparency, and responsible robotics.  
The book and RAG system must *not* produce misleading or unsafe instructions, and must clearly communicate limitations when information is incomplete or unavailable.

### IV. Grounded, Honest Retrieval-Augmented Generation
The RAG backend must answer strictly from the textbook content in `book/docs/`.  
If an answer is not present in the material, the system must explicitly state that.  
No hallucinated facts, unsafe robotics steps, or fabricated technical claims are allowed.

### V. Reproducibility & Robust Workflow
Every chapter and code example must be reproducible.  
Command sequences, folder structures, and environment setups must be clear, minimal, and repeatable.  
The repository must maintain predictable behavior across environments, with a clean build process for both the `book/` Docusaurus site and the `rag-backend/`.

### VI. Small-Step, Testable Development
All work must follow small, atomic, testable steps.  
Chapters, RAG features, indexing scripts, and UI components must be implemented in small increments that can be validated independently, ensuring continuous progress without regressions.

## Technical Standards
The project must follow these technical constraints:

- **Docusaurus v3 TypeScript** app resides in `physical-ai-book/book/`.
- **RAG backend** resides in `rag-backend/` using FastAPI + Qdrant + OpenAI (Neon optional).
- All robotics teaching must follow a **simulation-only** requirement.
- Accessibility must target **WCAG 2.1 AA** where reasonable.
- Repository must remain compatible with **MIT License**.
- All services used must be **free-tier friendly**.

## Development Workflow
All development must follow a structured Spec-Driven approach:

- Write or update the **spec** before building features.  
- Convert the spec into a **plan**, then into **atomic tasks**.  
- Ensure each chapter, code example, API endpoint, and RAG step is validated manually or through small tests.  
- RAG grounding must be checked regularly with a test set of 20–30 questions.  
- Every Docusaurus build (`npm run build`) must remain clean and error-free before merge.

## Governance
This constitution supersedes all other development practices.  
Any change to:

- Textbook structure  
- RAG behavior  
- Folder layout  
- Technical stack  
- Core chapter list  

…requires a documented proposal, review, and if approved, an ADR entry with a migration plan.

All contributions must comply with the principles of clarity, safety, reproducibility, and grounded RAG behavior.

---

**Version:** 1.1.0 | **Ratified:** 2025-01-01 | **Last Amended:** 2025-12-05

