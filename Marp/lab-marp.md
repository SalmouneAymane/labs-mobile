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

# Marp

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

- Créer des diapositives à partir d'un fichier texte Markdown.
- Comprendre les délimitations, le front matter et les directives de slide.
- Prévisualiser le deck et vérifier le rendu avant tout export demandé.

---
<!-- _class: light -->

## 2. Technical Stack

- **Markdown :** source éditable du deck.
- **Marp :** directives et moteur de rendu de présentation.
- **Éditeur/CLI :** extension ou commande disponible selon l'environnement.
- Les exports dépendent des outils installés; ce lab n'en exige aucun.

---

## 3. Definition

Marp est un ensemble d'outils pour créer des présentations à partir de Markdown. Une ligne `---` sépare les diapositives; le front matter configure le deck.

---
<!-- _class: light -->

## 4. Problem Statement

Comment produire et maintenir des diapositives sans disperser le contenu dans des objets visuels difficiles à comparer ?

Le source doit rester lisible et le rendu doit garder un ordre et une mise en page compréhensibles.

---

## 5. Solution

```markdown
---
marp: true
theme: default
paginate: true
---

# Titre

---

## Deuxième slide

- Une idée par point
```

- Commencer chaque slide par une hiérarchie de titre cohérente.
- Ajouter du style seulement pour améliorer la lisibilité.
- Utiliser l'aperçu Marp disponible et vérifier débordements et liens.

---
<!-- _class: light -->

## 6. Practice: créer trois slides

1. Créez un fichier `mini-deck.md` avec `marp: true`.
2. Ajoutez une slide de titre et deux slides de contenu.
3. Prévisualisez le deck dans un outil Marp installé.
4. Vérifiez les délimitations, la lisibilité et le texte qui déborde.
5. N'exportez que si un format de sortie est requis.

**Livrable :** source Markdown et une courte liste de vérifications effectuées.
