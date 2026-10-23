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

# Environnement de développement

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

- Découvrir des réglages et outils qui facilitent le travail dans un projet.
- Repérer fichiers, rappels de code et moyens de prévisualisation.
- Noter les versions et extensions réellement installées.

---
<!-- _class: light -->

## 2. Technical Stack

- **Éditeur :** Visual Studio Code dans le support source.
- **Prévisualisation :** Live Server pour les pages Web et une extension Marp pour les slides, si disponibles.
- **Projet :** peut utiliser Laravel, JavaScript, PHP natif ou Kotlin; configurer seulement les outils nécessaires.

---

## 3. Definition

Un **environnement de développement** regroupe l'éditeur, les outils, les paramètres et les extensions qui aident à créer, exécuter et inspecter un projet.

---
<!-- _class: light -->

## 4. Problem Statement

Des fichiers masqués, des filtres, des rappels peu visibles ou une prévisualisation absente peuvent ralentir le travail et compliquer la compréhension d'un projet.

---

## 5. Solution

- Vérifier les filtres et exclusions de l'explorateur avant de conclure qu'un fichier manque.
- Utiliser des marqueurs de tâches selon les conventions de l'équipe.
- Utiliser un serveur local pour prévisualiser une page Web.
- Ouvrir un aperçu Marp pour vérifier le deck.
- Consulter les noms de paramètres propres aux versions et extensions installées.

---
<!-- _class: light -->

## 6. Practice: inspecter son environnement

Dans un petit projet :

1. Vérifiez les fichiers visibles et les exclusions de l'explorateur.
2. Ajoutez un commentaire `TODO` et retrouvez-le.
3. Prévisualisez une page Web avec l'outil disponible.
4. Ouvrez un fichier Marp dans l'aperçu.
5. Notez les outils réellement utilisés et les difficultés observées.

Ne modifiez pas un réglage sans comprendre son effet sur le projet.
