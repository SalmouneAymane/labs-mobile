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

# Markdown

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

- Rédiger des documents structurés dans un format texte lisible.
- Utiliser titres, listes, liens, images, code et tableaux.
- Prévisualiser le résultat dans le moteur qui recevra le document.

---
<!-- _class: light -->

## 2. Technical Stack

- **Markdown :** syntaxe de balisage légère.
- **Marp :** outil de présentation fondé sur des fichiers Markdown.
- La syntaxe prise en charge peut varier selon le moteur de rendu.

---

## 3. Definition

Markdown utilise des caractères simples pour exprimer une structure. Le fichier source reste du texte; un outil compatible peut le convertir en HTML ou en d'autres rendus.

---
<!-- _class: light -->

## 4. Problem Statement

Comment écrire un document facile à lire comme texte, à modifier et à convertir sans dépendre d'un éditeur visuel particulier ?

---

## 5. Solution

```markdown
# Titre

Un paragraphe avec **gras**, *italique* et `code`.

- Première idée
- Deuxième idée

[Guide Markdown](https://www.markdownguide.org/)

| Sujet | État |
|:---|:---|
| Liens | Ajoutés |
```

Séparer les blocs par des lignes vides et vérifier les extensions Markdown utilisées par le moteur cible.

---
<!-- _class: light -->

## 6. Practice: écrire un README

Créez un court README qui contient :

1. Un titre et deux sections.
2. Un paragraphe et une liste.
3. Un lien descriptif.
4. Un bloc de code avec étiquette de langage.
5. Un tableau avec colonnes alignées.

Prévisualisez le document dans le moteur visé et corrigez les écarts de rendu.
