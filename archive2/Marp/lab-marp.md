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
    color: #38bdf8;
  }
  h1 { font-size: 1.8em; }
  h2 { font-size: 1.3em; }
  h3 { font-size: 1.05em; color: #7dd3fc; }
  section.light { background-color: #f8fafc; color: #0f172a; }
  section.light h1, section.light h2, section.light h3 { color: #0284c7; }
  pre, code {
    background-color: #1e293b;
    color: #e2e8f0;
    border-radius: 6px;
    font-family: 'Fira Code', 'Consolas', monospace;
  }
  section.light pre, section.light code { background-color: #e2e8f0; color: #0f172a; }
  table { width: 100%; border-collapse: collapse; font-size: 0.78em; line-height: 1.35; }
  th { background-color: #1e293b; color: #f8fafc; font-weight: 600; padding: 8px 10px; text-align: left; vertical-align: top; }
  td { background-color: #172033; color: #f8fafc; padding: 8px 10px; border-bottom: 1px solid #475569; vertical-align: top; }
  section.light th { background-color: #e0f2fe; color: #0f172a; }
  section.light td { background-color: #fff; color: #0f172a; border-bottom: 1px solid #cbd5e1; }
  section.light tbody tr:nth-child(even) td { background-color: #f1f5f9; }
---

# Marp

---
<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## 1. Introduction

- **Purpose & scope:** Create slide presentations from Markdown using Marp.
- **Objectives:** recognize slide boundaries, configure a deck and understand preview/export options.
- **Notions clés:** Markdown, front matter, theme, directives and rendered output.

---
<!-- _class: light -->

## 2. Problems Encountered

- The source overview does not report a specific error from a Marp installation or export.
- **No blocking technical problems encountered during implementation.**
- Features and export options can depend on the Marp tool and version.

---

## 3. Solutions Implemented

- No installation or export fix is documented in the source.
- Keep slide boundaries and configuration explicit, then preview the rendered deck.
- Confirm supported themes and export formats in the installed Marp tool.

---
<!-- _class: light -->

## What is Marp?

- A presentation ecosystem that uses Markdown as its authoring format.
- A Markdown source can be rendered as a sequence of slides.
- Plain-text sources are readable and easy to compare in version control.
- The content remains editable without a visual slide editor.

---

## A minimal Marp source

```markdown
---
marp: true
theme: default
paginate: true
---

# My presentation

---

## A second slide
```

The front matter enables Marp, and `---` separates slides.

---
<!-- _class: light -->

## Directives and themes

- Global options belong in YAML front matter, such as `theme` and `paginate`.
- Slide-level directives can adjust the presentation of an individual slide.
- Available themes and directives depend on the renderer.
- Use a theme supported by the Marp environment where the deck will be previewed.

---

## Preview and export

Typical ways to work with a Marp source include:

1. Open the Markdown file in an editor with Marp preview.
2. Inspect slide breaks, code, tables, and overflow.
3. Export only in a format supported by the installed extension or CLI.
4. Re-open the exported output to verify the result.

---
<!-- _class: light -->

## Marp and visual slide editors

| Aspect | Marp | Visual slide editor |
|:---|:---|:---|
| Authoring | Markdown text | Visual controls |
| Review | Text diff and source review | Slide-by-slide visual review |
| Styling | Theme and CSS options | Templates and editor controls |
| Output | Depends on installed Marp tools | Depends on the editor |

---

## Practice: make a short deck

Create a three-slide source:

1. Add `marp: true` and a supported theme.
2. Add a title slide and two content slides separated by `---`.
3. Preview the deck and check text fit and slide order.
4. Export if the installed tool supports the required format.

---
<!-- _class: light -->

## Summary & Verification Matrix

| Objective | Status | Evidence |
|:---|:---:|:---|
| Describe Markdown slide authoring | Covered | Introduction and minimal source |
| Explain slide boundaries and front matter | Covered | Tagged Markdown example |
| Preview and check a rendered deck | Practice | Three-slide exercise |
