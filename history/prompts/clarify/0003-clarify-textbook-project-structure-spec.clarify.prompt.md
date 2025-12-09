---
id: 0003
title: Clarify Textbook Project Structure Spec
stage: clarify
date: 2025-12-5
surface: agent
model: claude-sonnet-4-5-20250929
feature: textbook-project-structure
branch: master
user: Icon
command: /sp.clarify The Physical AI textbook spec lives at specs/1-textbook-project-structure/spec.md for the wrapper repo `physical-ai-book/`. Please review it for ambiguity, missing assumptions, incomplete requirements, and scope conflicts (especially around auth/personalization/Urdu and real hardware). Suggest concrete edits so the spec matches the current structure created in 0002 (Docusaurus app in `book/`, docs in `book/docs/physical-ai/`, RAG backend in `rag-backend/`) and is ready for planning.
labels: ["spec", "clarification"]
links:
  spec: specs/1-textbook-project-structure/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/1-textbook-project-structure/spec.md
tests: null
---
## Prompt

The Physical AI textbook project is rooted at the wrapper repo `physical-ai-book/` with:

- Docusaurus v3 (TypeScript) app in the `book/` subfolder (config + docs in `book/`).
- Docs under `book/docs/` and `book/docs/physical-ai/`.
- RAG backend under `rag-backend/`.
- Spec-Kit Plus materials under `specs/1-textbook-project-structure/`.

The main feature spec is at `specs/1-textbook-project-structure/spec.md`.

Please:

1. **Find ambiguous terms**

- Identify phrases like “interactive textbook,” “RAG chatbot,” “simulation examples,” or “lab setup” that may be interpreted in multiple ways.
- For each, propose a short, precise definition that fits our structure and scope (Docusaurus docs in `book/docs/...` + `rag-backend`, no bonus features).

2. **Add missing assumptions**

- Reader prerequisites (e.g., basic Python and AI familiarity, but no prior ROS 2 skills).
- Environment assumptions:
  - Node + npm versions (for Docusaurus in `book/`).
  - Python version (for FastAPI).
  - Expected OS (e.g., “Linux/macOS recommended, Windows via WSL is ok”).
  - Reasonable assumptions about free tiers of Neon/Qdrant/OpenAI (e.g., testing only, not production scale).
- Tooling (Git, VS Code, a terminal).

3. **Complete RAG requirements**

Clarify:

- What kinds of questions the RAG chatbot must support:
  - Direct factual questions about content.
  - “Explain this section in simpler words” questions.
- How it must behave when:
  - The question is off-topic.
  - The textbook does not contain the answer.
- Whether it must show citations (e.g., file + heading) with answers.
- How many test questions we will use to judge RAG quality (e.g., at least 20–30 across all chapters, with a target “good answer” rate).

4. **Check scope conflicts**

- Remove or mark as “future work” any references to:
  - Auth
  - Personalization
  - Urdu translation
  - Bonus sub-agents or advanced features
- Ensure the spec is consistent with the docs structure from 0002:

  - `book/docs/intro.md`
  - `book/docs/physical-ai/physical-ai-basics.md`
  - `book/docs/physical-ai/humanoid-robots.md`
  - `book/docs/physical-ai/ros2-and-software-stack.md`
  - `book/docs/physical-ai/simulation-and-digital-twins.md`
  - `book/docs/physical-ai/lab-setup-and-hardware.md`
  - `book/docs/physical-ai/projects-and-skills.md`

- Confirm it treats hardware as simulation-first (no requirement for real robots).

For each issue found:

- Label it as **CRITICAL** (must fix before planning) or **NICE-TO-HAVE**.
- Suggest the exact text change (e.g., “Under RAG Behavior, add a bullet: ‘If the information is not in the book, the chatbot must say so.’”).

Finally, answer:

> Is the spec now clear enough to generate an implementation plan for the current scope (Docusaurus in `book/` + RAG backend only, no bonus features)?

Explain your answer in 3–5 sentences.

## Response snapshot

The spec at `specs/1-textbook-project-structure/spec.md` was reviewed and updated to match the `physical-ai-book/book` Docusaurus structure and the reduced scope: Docusaurus docs in `book/docs/...` + `rag-backend` RAG API only. Ambiguous terms were clarified, assumptions about readers and tools were added, and RAG behavior (including off-topic handling and citations) was made explicit. Any references to auth, personalization, Urdu, or real hardware were removed or marked as future work. The spec is now ready for planning.

## Outcome

- ✅ Impact: Spec aligned with actual filesystem layout (`book/docs/...`) and focused scope.
- 🧪 Tests: N/A.
- 📁 Files: `specs/1-textbook-project-structure/spec.md` updated.
- 🔁 Next prompts: Produce the implementation plan in `plan.md`.
- 🧠 Reflection: Tightening spec language around RAG behavior will prevent surprises later.

## Evaluation notes (flywheel)

- Failure modes observed: Earlier drafts implied extra features and unclear RAG behavior.
- Next experiment: Use this clarified spec directly to drive the implementation plan.
