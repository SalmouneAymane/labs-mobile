---
name: create-labs
description: "Create or expand a learning lab, workshop, or technical presentation in this repository. Use when writing lab materials or formatting a lab deliverable as a standardized Marp slide deck."
argument-hint: "Topic and any audience, language, or format preferences"
---

# Create Labs

## Overview

Create or expand a complete, teachable lab that fits this repository and can be opened from its presentation directory. Keep the material accurate, accessible, and consistent with existing labs.

When the requested deliverable is a slide deck, create a Marp presentation with a consistent visual style and the required section sequence. Keep the editable slide content in one `lab-<topic>.md` file.

## When to Use

Use this skill when:

- Creating a new learning lab, workshop, technical presentation, or teaching resource in this repository.
- Expanding or adapting an existing lab while preserving repository conventions.
- Turning a completed lab, technical assignment, code examples, debugging notes, or implementation into a Marp slide deck.
- Standardizing slide presentations across technical modules.

Do not use this skill for unrelated application features or edits to existing lab content that do not involve creating or expanding a learning resource.

When the user asks to create a new lab and has not said whether they want hands-on practice, ask them if the lab should include a practice exercise or project before drafting. If they have already specified this, do not ask again. If they do not answer, use a concise practice activity as the default.

## Mandatory Lab Structure

Every new or remade lab must:

- Live in its own clearly named, root-level folder.
- Use one editable Marp source named `lab-<topic>.md` as its presentation.
- Have no lab-specific `index.html` or generated `presentation.html`; do not export HTML unless explicitly requested.
- Be discoverable from the root `index.html` catalog, which links directly to the Marp Markdown source.
- Preserve existing practice files, code, diagrams, and other useful assets when remaking a lab.

Keep slide explanations, examples, and guided practice in the Marp source. Separate practice files may remain alongside it when they are existing hands-on assets or are necessary to complete the exercise. Do not replace or overwrite an existing lab unless asked. When the user requests a remake or archive, preserve the old version in the requested archive and create the new iteration separately.

## Mandatory Slide Architecture

Every Marp presentation must start with `marp: true`. After the title slide, follow this agenda and section order:

1. **Title:** The lab name or topic only. Do not put an author or presenter name, student ID, organization, date, or decorative subtitle on this slide unless explicitly requested.
2. **Lab Plan:** Use this agenda:

   ```markdown
   <!-- _class: light -->

   ## Lab Plan

   1. Introduction
   2. Technical Stack
   3. Definition (if needed)
   4. Problem Statement
   5. Solution
   6. Practice
   ```

3. **Introduction:** Briefly explain the lab's purpose, scope, audience, and learning objectives.
4. **Technical Stack:** Identify relevant technologies from the project's stack: Laravel, Alpine.js, MySQL, JSON, Tailwind CSS, Preline, JavaScript, native PHP, and Kotlin. Explain each selected technology's role. Do not imply every lab uses the entire stack; identify the topic's relevant tools when it is not about application development.
5. **Definition (if needed):** Define essential terms before relying on them. Omit this section when the audience can follow the material without a separate definition section.
6. **Problem Statement:** Describe the concrete need, user problem, or technical challenge the lab addresses. Do not invent implementation incidents.
7. **Solution:** Explain the approach and key implementation decisions that address the problem.
8. **Practice:** Include a hands-on exercise or guided implementation, with clear steps and expected outcomes. Keep and link relevant existing practice files.

Use these sections as the presentation architecture in the listed order; a section may span multiple slides. Keep the presentation in one Marp Markdown file. Use complete, runnable code when appropriate and declare the language on every code fence. End with a concise recap or verification matrix when it fits; report only validation that actually occurred.

## Design & Formatting Standards

1. **Frontmatter:** Start every Marp source with the following configuration:

   ```yaml
   ---
   marp: true
   theme: default
   paginate: true
   size: 16:9
   style: |
     section {
       background-color: #0f172a;
       color: #f8fafc;
       font-family: 'Inter', system-ui, sans-serif;
       padding: 40px 60px;
     }
     h1, h2, h3 {
       font-family: 'Inter', system-ui, sans-serif;
       font-weight: 600;
       letter-spacing: -0.02em;
     }
     h1 {
       color: #38bdf8;
       font-size: 1.8em;
     }
     h2 {
       color: #38bdf8;
       font-size: 1.3em;
     }
     h3 {
       color: #7dd3fc;
       font-size: 1.05em;
     }
     section.light {
       background-color: #f8fafc;
       color: #0f172a;
     }
     section.light h1, section.light h2, section.light h3 {
       color: #0284c7;
     }
     pre, code {
       background-color: #1e293b;
       color: #e2e8f0;
       border-radius: 6px;
       font-family: 'Fira Code', 'Consolas', monospace;
     }
     section.light pre, section.light code {
       background-color: #e2e8f0;
       color: #0f172a;
     }
     table {
       width: 100%;
       border-collapse: collapse;
       font-size: 0.78em;
       line-height: 1.35;
     }
     th {
       background-color: #1e293b;
       color: #f8fafc;
       font-weight: 600;
       padding: 8px 10px;
       text-align: left;
       vertical-align: top;
     }
     td {
       background-color: #172033;
       color: #f8fafc;
       padding: 8px 10px;
       border-bottom: 1px solid #475569;
       vertical-align: top;
     }
     section.light th {
       background-color: #e0f2fe;
       color: #0f172a;
     }
     section.light td {
       background-color: #ffffff;
       color: #0f172a;
     }
     section.light tbody tr:nth-child(even) td {
       background-color: #f1f5f9;
     }
     section.light td {
       border-bottom: 1px solid #cbd5e1;
     }
   ---
   ```

2. **Slide delimiters:** Separate every slide with `---` on its own line.
3. **Visual rhythm:** Alternate dark slides (the default) and light slides using `<!-- _class: light -->` immediately after the slide delimiter.
4. **Code:** Specify a language on every fenced code block, such as `html`, `javascript`, `bash`, `php`, `json`, or `sql`; never use an untagged code fence.
5. **Tables:** Use explicit Markdown column alignment markers, for example `:---`, `:---:`, and `---:`.
6. **Language and accuracy:** Write in the requested language. Do not invent problems, fixes, test results, or validation evidence.

## Slide Deck Template

After the required frontmatter above, follow this outline. Replace bracketed guidance with content grounded in the actual lab:

````markdown
# [Lab Name Only]

---
<!-- _class: light -->

## Lab Plan

1. Introduction
2. Technical Stack
3. Definition (if needed)
4. Problem Statement
5. Solution
6. Practice

---

## 1. Introduction

- **Purpose & Scope:** [Audience, lab purpose, and learning objectives]

---
<!-- _class: light -->

## 2. Technical Stack

- [List only the relevant technologies from Laravel, Alpine.js, MySQL, JSON, Tailwind CSS, Preline, JavaScript, native PHP, and Kotlin.]
- [Explain the role each selected technology plays in this lab.]

---

## 3. Definition (if needed)

- [Define essential terms; omit this section if separate definitions are unnecessary.]

---

## 4. Problem Statement

- [Describe the real need or challenge this lab addresses.]

---

## 5. Solution

- [Explain the approach and implementation decisions that address the problem.]

---
<!-- _class: light -->

## 6. Practice: [Exercise Name]

- [Give clear steps and expected outcomes.]
- [Include relevant examples or complete, runnable code when appropriate.]

---
<!-- _class: light -->

## Recap & Verification Matrix (when useful)

| Objective | Status | Evidence |
|:---|:---:|:---|
| [Objective] | [Actual status] | [Observed evidence] |
````

## Content & Repository Standards

1. **Fit the audience and goal.** Identify the topic, audience, language, learning goals, and requested format. Use sensible defaults from nearby labs; ask a focused question only if an essential choice would otherwise be a significant guess.
2. **Teach clearly.** Explain concepts in original, accessible language. Include relevant examples, a practical activity or reflection, and a concise recap. Keep the scope coherent and avoid unsupported claims.
3. **Follow local conventions.** Match the root `index.html` catalog markup. Link directly to `./<folder-name>/lab-<topic>.md`; do not add per-lab HTML entry points.
4. **Use reliable sources.** Verify factual claims against reliable sources when research tools are available, and include useful source links in the material.
5. **Preserve the repository.** Inspect the working tree before editing and preserve unrelated user changes. Keep changes focused on the requested lab.
6. **Follow nearby examples.** Use `Marp/marp.md` for Marp conventions and `MVC/presentation-mvc.md` for slide content with speaker notes, while keeping the required section sequence for new Marp decks.

## Workflow

1. Read the root `index.html`, the closest existing lab sources, and any practice files that should be preserved.
2. Choose a clear, consistent folder name and create one `lab-<topic>.md` Marp source inside the lab folder.
3. Develop the material for the intended audience. For a Marp deck, follow the mandatory section sequence, select relevant technologies from the defined stack, then add practical examples and a concise evidence-based recap.
4. Verify factual claims against reliable sources when research tools are available.
5. Preserve relevant practice files and assets beside the Marp source.
6. Add or update a root `index.html` catalog link directly to the Marp Markdown source.
7. Check relevant links, the catalog path, the Marp section sequence, and that no per-lab HTML output was added. Run focused validation when requested or when the format provides it.

## Output & Verification

Deliver a lab folder with one editable `lab-<topic>.md` Marp source, preserved relevant practice files, and a root catalog link. Do not create per-lab HTML entry pages or generated HTML decks unless explicitly requested. Report the files created or updated, summarize the lab, and state which validations ran or could not be performed.

## Red Flags & Anti-Patterns

| Avoid | Why | Required approach |
|:---|:---|:---|
| Adding names, IDs, dates, or subtitles to the title slide without being asked | The required opening slide is only the lab title. | Keep slide 1 to the lab name or topic. |
| Omitting or reordering required Marp sections | It breaks the consistent presentation architecture. | Keep Title > Lab Plan > Introduction > Technical Stack > Definition (if needed) > Problem Statement > Solution > Practice. |
| Inventing technical incidents or claiming unrun tests passed | It makes the presentation misleading. | Describe real issues and fixes; state when no blocking problems occurred and report only actual validation. |
| Omitting language tags on code blocks or alignments on tables | Examples become harder to read and inconsistent. | Tag every code fence and explicitly align Markdown table columns. |
| Requiring per-lab HTML to display a Marp source | It duplicates the editable deck and is not part of the Marp-only workflow. | Keep one Marp source and link directly to it from the root catalog. |
| Dropping existing practice files while remaking a lab | Hands-on activities or supporting examples may be lost. | Preserve useful practice files and assets alongside the new source. |
| Overwriting an existing lab without permission | Existing learning material may be lost. | Create a new folder or edit an existing lab only when requested; archive old versions when asked. |
| Leaving catalog links or source files out of sync | The delivered lab may be incomplete or difficult to find. | Verify catalog paths and source links before finishing. |
