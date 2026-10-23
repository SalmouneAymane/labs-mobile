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

# Antigravity et le développement assisté par IA

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

- Découvrir une façon de travailler avec un agent IA dans un environnement de développement.
- Apprendre à cadrer une tâche, examiner les changements et garder le contrôle.
- Les fonctions et interfaces peuvent varier selon la version et l'environnement Antigravity.

---
<!-- _class: light -->

## 2. Technical Stack

- **Application :** choisir les technologies pertinentes parmi Laravel, Alpine.js, MySQL, JSON, Tailwind CSS, JavaScript, PHP natif et Kotlin.
- **Environnement :** Antigravity et le projet ouvert.
- L'agent utilise seulement les fichiers et outils auxquels l'environnement lui donne accès.

---

## 3. Definition

Un **agent de développement** peut analyser du contexte et aider à planifier ou réaliser une tâche. Selon l'environnement et les autorisations, il peut aussi modifier des fichiers ou exécuter des commandes.

L'agent propose; la personne reste responsable de la portée, de la revue et de la validation.

---
<!-- _class: light -->

## 4. Problem Statement

Comment accélérer une tâche de développement sans perdre la compréhension ni le contrôle des changements ?

- Une demande vague peut conduire à des modifications hors périmètre.
- Un résultat plausible n'est pas nécessairement correct.
- Des commandes ou changements importants doivent être examinés avant approbation.

---

## 5. Solution

Adopter un flux contrôlé :

1. Formuler objectif, contexte, fichiers concernés et critères de réussite.
2. Demander un plan pour les changements non triviaux.
3. Examiner le plan et préciser les limites.
4. Revoir le diff et comprendre chaque modification.
5. Exécuter les vérifications pertinentes et lire leurs résultats.

Ne jamais transmettre de secrets ou de données privées dans un prompt.

---
<!-- _class: light -->

## 6. Practice: cadrer une petite tâche

Dans un projet de démonstration :

1. Demandez de corriger un défaut d'interface précis.
2. Indiquez un périmètre limité et une contrainte d'accessibilité.
3. Définissez un résultat observable, sans dicter une solution non nécessaire.
4. Examinez le plan et le diff avant d'accepter.
5. Faites exécuter une vérification pertinente et consignez le résultat réel.

**Livrable :** prompt, résumé du diff et preuve de vérification.
