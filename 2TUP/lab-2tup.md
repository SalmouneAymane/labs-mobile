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

# Méthode 2TUP

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

- Comprendre comment 2TUP organise l'étude et la conception d'un projet logiciel.
- Distinguer exploration du besoin et exploration des choix techniques.
- Objectif : relier les deux pistes pour concevoir une solution cohérente.

---
<!-- _class: light -->

## 2. Technical Stack

- **Stack applicative :** aucune technologie imposée par 2TUP.
- **Artefacts de pratique conservés :** `workflow.mmd`, `schema.png`, `script.js` et `styles.css`.
- Les choix de langage, framework et stockage dépendent du projet étudié.

---

## 3. Definition

**2TUP** (*Two-Track Unified Process*) est une démarche de développement qui fait progresser deux pistes complémentaires :

- **Fonctionnelle :** comprendre ce que le système doit faire.
- **Technique :** étudier comment il pourra être construit.

Les pistes convergent ensuite vers la conception et la réalisation.

---
<!-- _class: light -->

## 4. Problem Statement

Comment éviter de concevoir un système qui répond mal aux besoins ou repose sur des choix techniques non vérifiés ?

- Le besoin métier et la faisabilité technique sont différents.
- Les traiter trop tard peut entraîner des retours coûteux.
- Une piste seule ne donne pas une vue complète du système.

---

## 5. Solution

1. Analyser les acteurs, objectifs et règles métier.
2. Examiner architecture, contraintes et risques techniques.
3. Prototyper les choix incertains lorsque c'est utile.
4. Confronter les résultats des deux pistes.
5. Concevoir, réaliser, tester et faire valider le système.

La méthode guide l'organisation; elle ne prescrit pas une pile technologique unique.

---
<!-- _class: light -->

## 6. Practice: deux pistes et un prototype

À partir d'un système que vous connaissez :

1. Décrivez un besoin utilisateur sans proposer de solution.
2. Notez une contrainte technique à étudier.
3. Consultez `workflow.mmd` et `schema.png` comme supports.
4. Proposez un prototype minimal pour réduire une incertitude.
5. Indiquez quel résultat ferait poursuivre, ajuster ou abandonner le choix.

**Livrable :** une courte synthèse reliant besoin, risque technique et décision.
