---
name: create-labs
description: "Create or adapt lab READMEs and presentation outlines from verified lab context. Use when preparing technical exercises, teaching material, or presentation plans for a lab."
---

# Lab creation

This skill coordinates the preparation of lab deliverables. For presentation formatting, also apply the `marp` skill. To create a file structure or a new skill, apply the `skill-creator` skill.

## Lab README template

When creating or restructuring a lab README, use [`templates/lab-readme-template.md`](./templates/lab-readme-template.md) as the required structure. Read the template and replace its placeholders with verified information from the lab files and user-provided context. Keep its three main sections, in order:

1. Technical Project Need
2. Concepts and Techniques to Learn
3. Expected Practical Work

Adapt the heading wording to the README's language when needed. Preserve useful existing content, placing setup instructions and links within the practical-work section. Leave unknown project-specific details clearly marked rather than inventing them. A brief note may invite the AI to suggest relevant, optional improvements.

## When to use this skill

Use this skill when you need to generate, update, or adapt lab content based on an existing README and a generic presentation structure. It is especially useful when preparing teaching material, project labs, technical exercises, or presentation plans for a course.

## Inputs and context

- Read the target lab README and the available generic plan in the workspace.
- If a file named `template-plan.md` is missing, search for the workspace's generic plan and use it without claiming it has a different name.
- Keep the existing lab title/slug unchanged in the `lab-*` format. Do not replace it with a reformulated title.
- Adapt the wording to the real objectives, concepts, and constraints described in the README.

## Workflow

1. Review the existing lab README and identify the actual learning goals, stack, tasks, and technical constraints.
2. Find the generic presentation plan used by the project or workspace and reuse it as the basis for the presentation.
3. When creating or restructuring a README, read and apply `templates/lab-readme-template.md`; ground its content in the actual lab files and user-provided context.
4. Write lab content in English unless the user or existing README calls for another language.
5. Place the presentation plan in `presentation.md` and do not duplicate it in the README.
6. For a technical lab, include a Quick Start section and a working Hello World example. Verify that the commands, versions, and setup match the actual project.
7. If the student problem or solution is not provided, do not invent it. Ask the user:
   - “What concrete problem are you encountering?”
   - “What solution are you proposing?”
   If the answers are missing, leave those sections as placeholders and do not present them as facts.
8. Keep the final structure focused and consistent with the repository's lab format.

## Rules

- Keep the existing lab title/slug exactly as it is, in the format `lab-*`.
- Do not duplicate the presentation plan inside the README.
- Do not add a conclusion or thank-you slide.
- Do not run Git commands if the user explicitly forbids it.
- Do not invent the student's problem, chosen solution, or project history.
- Write in English and align the content with what is actually present in the README.

## Completion checklist

- The lab title remains unchanged and uses the expected `lab-*` format.
- A created or restructured README follows `templates/lab-readme-template.md`.
- The README and the presentation plan are consistent with the actual lab scope.
- The presentation outline is placed in `presentation.md` only.
- The lab content is written in English and adapted to the real README content.
- The Quick Start and Hello World are included only when relevant to a technical lab.
- Unverified student-specific sections are clearly marked as to be completed rather than stated as fact.
