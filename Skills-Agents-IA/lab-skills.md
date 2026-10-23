---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section { background-color: #0f172a; color: #f8fafc; font-family: 'Inter', system-ui, sans-serif; padding: 40px 60px; }
  h1, h2, h3 { font-family: 'Inter', system-ui, sans-serif; font-weight: 600; letter-spacing: -0.02em; }
  h1 { color: #38bdf8; font-size: 1.8em; }
  h2 { color: #38bdf8; font-size: 1.3em; }
  h3 { color: #7dd3fc; font-size: 1.05em; }
  section.light { background-color: #f8fafc; color: #0f172a; }
  section.light h1, section.light h2, section.light h3 { color: #0284c7; }
  pre, code { background-color: #1e293b; color: #e2e8f0; border-radius: 6px; font-family: 'Fira Code', 'Consolas', monospace; }
  section.light pre, section.light code { background-color: #e2e8f0; color: #0f172a; }
  table { width: 100%; border-collapse: collapse; font-size: 0.78em; line-height: 1.35; }
  th { background-color: #1e293b; color: #f8fafc; font-weight: 600; padding: 8px 10px; text-align: left; vertical-align: top; }
  td { background-color: #172033; color: #f8fafc; padding: 8px 10px; border-bottom: 1px solid #475569; vertical-align: top; }
  section.light th { background-color: #e0f2fe; color: #0f172a; }
  section.light td { background-color: #ffffff; color: #0f172a; }
  section.light tbody tr:nth-child(even) td { background-color: #f1f5f9; }
  section.light td { border-bottom: 1px solid #cbd5e1; }
---

# Créer un Skill pour une tâche

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

- Transformer une tâche récurrente en méthode réutilisable par un agent.
- Définir quand le Skill s'applique, son workflow et son résultat attendu.
- Exemple fil rouge : le Skill `create-labs` de ce dépôt.

---
<!-- _class: light -->

## 2. Technical Stack

- **Format :** dossier Agent Skill contenant `SKILL.md`.
- **Agents :** Antigravity et GitHub Copilot dans VS Code.
- **Stack applicative :** aucune, sauf si la tâche choisie porte sur une technologie du projet.

---

## 3. Definition

Un **Skill** est un ensemble de consignes spécialisées chargé quand un agent estime que la tâche correspond. Il peut inclure un fichier `SKILL.md` et des ressources facultatives.

Le prompt décrit la demande actuelle; le Skill explique une procédure réutilisable.

---
<!-- _class: light -->

## 4. Problem Statement

Sans procédure réutilisable, les mêmes étapes sont répétées dans les prompts. Une description imprécise peut aussi empêcher l'agent de reconnaître quand le Skill est utile.

---

## 5. Solution: apprendre de `create-labs`

Un Skill utile rend explicites :

1. **Déclencheurs :** les tâches pour lesquelles le charger.
2. **Périmètre :** ce qui est inclus et exclu.
3. **Workflow :** les étapes à suivre.
4. **Contraintes :** conventions, formats et limites.
5. **Résultat :** fichiers ou livrables attendus.
6. **Vérification :** comment juger l'exécution.

Dans ce dépôt, `create-labs` demande une source Marp, les sections requises, la préservation des fichiers de pratique et une entrée au catalogue.

---
<!-- _class: light -->

## Exemple de `SKILL.md`

```markdown
---
name: example-task
description: "Create a project task report. Use when drafting or updating a lab report."
---

# Example Task

## Workflow
1. Inspect the relevant project context.
2. Produce the requested deliverable.
3. Preserve unrelated files.
4. Report what was created and what was verified.
```

Le nom doit correspondre au dossier du Skill. Utiliser les champs et emplacements pris en charge par les agents visés.

---

## 6. Practice: créer puis essayer un Skill

Choisissez une tâche fréquente et rédigez un `SKILL.md` avec :

1. Un nom et une description précise.
2. Le périmètre et le résultat attendu.
3. Trois à cinq étapes actionnables.
4. Une règle de préservation et un critère de vérification.
5. Une demande qui doit activer le Skill et une demande voisine qui ne doit pas le déclencher.

Essayez-le séparément dans Antigravity et VS Code; comparez le résultat sans supposer que leurs fonctions sont identiques.

**Sources :** [VS Code Agent Skills](https://code.visualstudio.com/docs/agent-customization/agent-skills) · [Antigravity Agent Skills](https://antigravity.google/docs/skills)
