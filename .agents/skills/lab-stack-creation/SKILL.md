---
name: lab-stack-creation
description: 'Primary skill for preparing consistent technical Lab presentations in this repository. Use for the generic seven-slide Lab plan, explanations of each section, a worked Lab example, Marp decks, or Lab Stack presentation updates.'
user-invocable: true
disable-model-invocation: false
---

# Technical Lab Presentations

## Purpose

Prepare a simple, reusable structure for presenting technical Labs, adapt it to each Lab's subject and requested work, and demonstrate it with a real example when asked. Keep slides concise, accurate, and easy to present.

## Presenter Defaults

- Learner: **Aymane Salmoune**
- Teacher: **FOUAD ESSARRAJ**

Use these names on cover slides unless the user supplies different names or asks for placeholders.

## Shared Presentation Logos

Use the repository folder `presentation-assets/logos/` for logos shared across presentations. Put logo image files there and link to them with paths relative to each presentation. Inspect the folder before use and do not assume a logo exists when it has not been added.

## Standard Seven-Slide Plan

Use this sequence as the default for a generic technical Lab presentation. Adapt the contents, terminology, and technologies to the specific Lab without dropping a section unless the user or assignment requests a different structure.

1. **Cover:** Lab title, learner name, and teacher name.
2. **Plan:** Short list of the presentation sections.
3. **Technical stack:** Relevant technologies and tools, with each role identified.
4. **Definitions:** Essential terms and concepts used in the Lab.
5. **Problem and need:** The problem addressed and why the Lab is useful.
6. **Solution and practice:** Work steps, examples, and tests relevant to the Lab.
7. **Results and conclusion:** The result, evidence, and what the learner learned.

## When the Assignment Requests a Generic Plan and an Example

Deliver both parts:

1. Explain the purpose and expected content of each of the seven sections above.
2. Choose a real, well-scoped Lab from the repository and show how its content fits all seven sections.
3. Keep the example grounded in its actual source files and technologies. Do not invent test results, implementation details, or outcomes.
4. Save the editable source in the repository as requested. For Marp, use one `.md` presentation source; do not generate HTML unless asked.
5. If asked to submit to GitHub, prepare the repository content and follow the user's requested publishing workflow. Do not commit or push without authorization.

## Marp and Repository Workflow

1. Inspect the worktree, the assignment, relevant existing Labs, and the shared logo folder before editing. Preserve unrelated work and existing assets.
2. Follow existing repository conventions and any applicable instructions. Keep each Lab's editable presentation with its Lab materials unless the assignment specifies another location.
3. Use `lab-stack/prompt.md` and `lab-stack/lab-stack.md` only when the task concerns Lab Stack; use the relevant Lab's own source materials for other examples.
4. Keep text minimal: use short phrases, scannable lists, and concise definitions rather than prose-heavy slides.
5. If using Marp, start with valid Marp frontmatter, use clear slide separators, and declare languages on all fenced code examples. Reuse an existing theme when appropriate; ensure table text and backgrounds have strong contrast.
6. Use logos from `presentation-assets/logos/` when present. Ensure paths resolve from the presentation file's location.
7. For repository catalog changes, follow the current root `index.html` conventions and link to the editable presentation source.
8. Do not add generated HTML or unrelated assets unless requested.

## Lab Stack Context

The existing Lab Stack deck introduces the technical project, its stack, the purpose of Labs, and a list of planned Labs. Its original brief requested five slides, while the current deck contains six, including a separate Project Tools slide. Do not silently conflate that deck with the generic seven-slide plan. When asked to update Lab Stack, preserve its actual content and structure unless the user explicitly requests conversion to the generic plan.

The Lab Stack brief identifies Alpine.js and Tailwind CSS for the frontend, and PHP, Laravel, and MySQL for the backend. Verify against the source prompt before using these details.

## Verification

Before finishing, check that:

- The requested deliverables are present and saved in the requested repository location.
- A generic-plan presentation has the seven sections in order, unless the assignment says otherwise.
- Any worked example follows the same plan and is supported by repository evidence.
- Names and logo paths are correct; referenced assets exist.
- Marp separators, code-fence language tags, and table contrast are valid where applicable.

Report only validation that was actually performed. Do not claim a GitHub submission, commit, test, or build that did not occur.
