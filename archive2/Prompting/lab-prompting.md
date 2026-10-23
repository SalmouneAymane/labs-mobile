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

# Writing Effective Task Prompts

---
<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## 1. Introduction

- **Purpose & scope:** Learn to describe a task so an AI assistant can produce a useful, reviewable result.
- **Objectives:** define the goal, provide relevant context, set constraints, specify the output, and check the result.
- **Key concepts:** audience, inputs, examples, acceptance criteria, ambiguity, iteration, and verification.

---
<!-- _class: light -->

## 2. Problems Encountered

- A broad request can leave the task, audience, or expected result unclear.
- Missing context or constraints can lead to irrelevant assumptions.
- Without an output format or success criteria, it is difficult to judge whether the answer is usable.
- No blocking technical problems encountered during implementation.

---

## 3. Solutions Implemented

- State one concrete goal and include only the context needed to complete it.
- Provide inputs, limits, and relevant examples; label them clearly.
- Describe the desired output and how success will be checked.
- Resolve important ambiguity with a question or an explicit assumption, then review and refine the result.

---
<!-- _class: light -->

## The parts of a useful task prompt

| Part | Ask yourself | Example |
|:---|:---|:---|
| Goal | What should be done? | Summarize the survey feedback |
| Context | What does the assistant need to know? | Feedback is from first-time workshop attendees |
| Input | What material should it use? | Use the comments below |
| Constraints | What must it include or avoid? | Do not invent causes or statistics |
| Output | What should the result look like? | Three themes and three actions |
| Success check | What makes the result useful? | Every action is linked to a theme |

---

## Start with a clear goal

Weak:

```text
Help with the feedback.
```

Stronger:

```text
Group the attendee comments into recurring themes and recommend practical improvements for the next workshop.
```

- Use an action verb: **summarize**, **compare**, **draft**, **debug**, or **classify**.
- Name the deliverable, not just the general topic.
- If a task has several unrelated outcomes, separate them into steps.

---
<!-- _class: light -->

## Add context, inputs, and boundaries

- **Context:** who will use the result, and for what decision?
- **Inputs:** what source text, data, or requirements should be used?
- **Boundaries:** what should the assistant not assume, change, or include?

```text
Context: The team is planning the next beginner workshop.
Input: Use only the anonymous comments below.
Boundary: Do not infer attendee demographics or invent numerical results.
```

Keep confidential details and credentials out of prompts. Share only the information needed for the task.

---

## Specify the output and success criteria

Tell the assistant how to shape the response:

- Format: table, checklist, short email, code patch, or structured data.
- Scope: number of items, length, sections, or level of detail.
- Quality checks: required coverage, evidence, or constraints to preserve.

```text
Return a table with columns: Theme, Supporting comment, Suggested action.
Include up to three themes. Use only the provided comments.
```

---
<!-- _class: light -->

## A reusable task-prompt template

```text
Goal:
[One specific thing to produce or do]

Context:
[Who this is for and why it is needed]

Input:
[Source material, requirements, or data]

Constraints:
[What to include, preserve, avoid, or ask about]

Output:
[Format, length, and sections]

Success criteria:
[How I will check that the result is useful and correct]
```

Use the sections that matter; a simple task does not need a long prompt.

---

## Before and after: feedback summary

**Before**

```text
Summarize these comments and suggest what to improve.
```

**After**

```text
Goal: Identify recurring themes in the attendee comments below.
Context: The team will use the summary to plan its next beginner workshop.
Constraints: Use only these comments. Do not invent statistics or explain causes
that the comments do not support. Keep anonymous details anonymous.
Output: A table with up to three themes, one supporting comment per theme,
and one practical action for each theme. Finish with one open question.
```

The revised prompt makes the audience, evidence limits, structure, and decision use explicit.

---
<!-- _class: light -->

## Handle ambiguity; then iterate

1. Identify what is unclear or missing.
2. If it changes the answer substantially, ask a focused question.
3. If it is minor, state a reasonable assumption and invite correction.
4. Review the answer against the success criteria.
5. Add a precise follow-up when something is missing or unsupported.

Example follow-up:

```text
Keep the same three themes, but add a direct quote from the input for each one.
Do not add new themes or infer information not present in the comments.
```

---

## Practice: improve a vague task

Rewrite this request using the template:

```text
Make a website for my event.
```

Include:

- The type of event and intended visitors.
- The requested deliverable (for example, a page outline or starter HTML).
- Required content and any constraints.
- The desired format and one way to check completion.

**Pair review:** Can another person tell what to create, for whom, and how to judge it?

---
<!-- _class: light -->

## Summary & Verification Matrix

| Objective | Status | Evidence |
|:---|:---:|:---|
| Identify the main parts of a task prompt | Covered | Prompt components and reusable template |
| Improve a vague request | Covered | Feedback before-and-after example |
| Clarify and review an answer | Covered | Ambiguity and iteration checklist |
| Apply the approach independently | Practice | Rewrite exercise and pair-review question |

**Further reading:** [OpenAI prompt engineering guide](https://developers.openai.com/api/docs/guides/prompt-engineering)
