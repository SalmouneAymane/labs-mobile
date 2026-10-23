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

# markdown

---
<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## 1. Introduction

- **Purpose & scope:** Learn Markdown's basic syntax for writing readable, structured plain-text documents.
- **Objectives:** create headings, formatted text, lists, links, code and tables.
- **Key idea:** Markdown source stays readable as text and can be rendered by compatible tools.

---
<!-- _class: light -->

## 2. Problems Encountered

- No specific Markdown parsing error is documented in the source material.
- **No blocking technical problems encountered during implementation.**
- Rendered appearance can vary slightly between Markdown applications.

---

## 3. Solutions Implemented

- No correction to a specific document is documented.
- Use consistent syntax and preview the file in the target renderer.
- Keep a blank line around block elements when the renderer expects one.

---
<!-- _class: light -->

## Headings and paragraphs

Use `#` characters to mark heading levels:

```markdown
# Main title
## Section
### Subsection
```

Separate paragraphs with a blank line. Use heading levels in a logical order.

---

## Emphasis and lists

```markdown
**Bold text**
*Italic text*
`inline code`

- First item
- Second item

1. First step
2. Next step
```

Choose a list type that matches the information.

---
<!-- _class: light -->

## Links and images

```markdown
[Markdown guide](https://www.markdownguide.org/)

![Descriptive alternative text](images/example.png)
```

- Links use `[label](URL)`.
- Images use `![alternative text](path)`.
- Use useful link text and describe meaningful images for accessibility.

---

## Code examples

Inline code uses backticks: `npm run build`.

For a code block, specify the language after the opening fence:

~~~markdown
```javascript
console.log("Hello, Markdown!");
```
~~~

---
<!-- _class: light -->

## Tables and task lists

| Item | Status |
|:---|:---:|
| Headings | Practiced |
| Links | Practiced |
| Tables | Next |

Task lists are supported by many Markdown renderers:

```markdown
- [x] Write headings
- [ ] Add a useful link
```

---

## Practice: write a short README

Create a small Markdown document with:

1. A project title and two section headings.
2. One paragraph and a short list.
3. A link with descriptive text.
4. A fenced code block with a language label.
5. A table with aligned columns.

Preview it in the renderer where it will be published.

---
<!-- _class: light -->

## Summary & Verification Matrix

| Objective | Status | Evidence |
|:---|:---:|:---|
| Format readable text | Covered | Headings, paragraphs and emphasis |
| Add useful content blocks | Covered | Lists, links, images, code and tables |
| Check renderer output | Practice | README exercise |
