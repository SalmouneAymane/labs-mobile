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

# 2TUP

---
<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## 1. Introduction

- **Purpose & scope:** Comprendre la méthode de développement 2TUP (*Two-Track Unified Process*).
- **Objectif :** voir comment les besoins métier et les contraintes techniques avancent en parallèle avant de converger vers la réalisation.
- **Notions clés :** branche fonctionnelle, branche technique, prototype, conception, tests et recette.

---
<!-- _class: light -->

## 2. Problems Encountered

- Ce support présente une méthode de développement ; il ne rapporte pas d'incident d'exécution.
- **No blocking technical problems encountered during implementation.**

---

## 3. Solutions Implemented

- Aucun correctif logiciel n'est requis pour cette présentation.
- La démarche rend explicites deux questions complémentaires : **que doit faire le système ?** et **comment peut-on le construire ?**
- Un prototype aide à tester tôt les choix techniques qui présentent un risque.

---
<!-- _class: light -->

## Le principe : deux pistes, un projet

| Branche | Question | Travail principal |
|:---|:---|:---|
| Fonctionnelle | Que doit faire le système ? | Besoins, acteurs, règles métier |
| Technique | Comment le construire ? | Architecture, contraintes, faisabilité |

Les deux pistes progressent en parallèle, puis leurs résultats sont réunis pour concevoir le système.

---

## La branche fonctionnelle

- Identifier les acteurs et leurs objectifs.
- Décrire les besoins et les comportements attendus.
- Analyser les règles et les concepts métier.
- Représenter le problème sans imposer trop tôt une solution technique.

**Résultat :** une compréhension partagée du besoin à satisfaire.

---
<!-- _class: light -->

## La branche technique

- Examiner performance, sécurité, plateforme et autres contraintes.
- Définir une architecture générique et ses composants.
- Construire un prototype lorsque cela aide à vérifier la faisabilité d'un choix risqué.

**Le prototype est exploratoire :** il aide à apprendre et à ajuster avant de généraliser une solution.

---

## Convergence et conception

**Analyse métier** + **architecture technique** → **conception du système**

La conception précise les éléments nécessaires à la réalisation : composants, interfaces et données. Les choix dépendent du projet ; 2TUP ne prescrit pas à lui seul une pile technologique.

---
<!-- _class: light -->

## De la conception à la recette

1. **Coder** les composants et leurs interfaces.
2. **Tester** les éléments puis leurs interactions.
3. **Corriger** les écarts constatés.
4. **Vérifier** les besoins et scénarios attendus.
5. **Faire la recette** avec les utilisateurs ou le client.

---

## Activité : choisir un prototype utile

Pour un système à concevoir :

- Citez une question métier à clarifier.
- Citez une incertitude technique à tester.
- Proposez un prototype limité qui permettrait d'apprendre sur cette incertitude.
- Indiquez quel résultat ferait décider de poursuivre, d'ajuster ou de changer de piste.

---
<!-- _class: light -->

## Summary & Verification Matrix

| Objectif | Statut | Preuve |
|:---|:---:|:---|
| Distinguer les deux branches | Couvert | Tableau fonctionnel / technique |
| Expliquer la convergence | Couvert | Séquence conception et réalisation |
| Comprendre l'utilité d'un prototype | Couvert | Exemple d'activité de validation |
