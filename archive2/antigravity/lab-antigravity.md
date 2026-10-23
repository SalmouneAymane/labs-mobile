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

# antigravity

---
<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## 1. Introduction

- **Purpose & scope:** Découvrir un environnement de développement où des agents IA peuvent aider à planifier, modifier et vérifier du code.
- **Objectifs :** structurer une demande, examiner les propositions et vérifier les changements.
- **Notions clés :** contexte, périmètre, contraintes, plan, revue et validation.

---
<!-- _class: light -->

## 2. Problems Encountered

- Le support source ne décrit pas d'incident technique précis lié à l'utilisation d'Antigravity.
- **No blocking technical problems encountered during implementation.**
- Les fonctions, menus et chemins peuvent dépendre de la version et de la configuration de l'environnement.

---

## 3. Solutions Implemented

- Aucune correction d'outil n'est documentée dans le support.
- Pour réduire les ambiguïtés, formuler l'objectif, le contexte, le périmètre et le critère de réussite.
- Garder une étape de revue avant les modifications, puis vérifier le résultat par des tests adaptés.

---
<!-- _class: light -->

## Un environnement avec des agents

Un agent peut assister certaines étapes du développement, par exemple :

- proposer un plan ;
- modifier des fichiers ;
- lancer des commandes ou tests, si l'environnement lui en donne l'accès.

L'utilisateur reste responsable de la consigne, de la revue des changements et de la validation.

---

## Un flux de travail contrôlé

**Planifier → Examiner → Exécuter → Vérifier**

1. Demander un plan clair.
2. Relire ce plan et préciser les zones à ne pas toucher.
3. Autoriser les changements pertinents.
4. Lire le diff et lancer les validations adaptées au projet.

---
<!-- _class: light -->

## Structurer une demande

| Partie | Question à préciser |
|:---|:---|
| Objectif | Que faut-il créer ou corriger ? |
| Contexte | Quel projet, langage ou framework ? |
| Périmètre | Quels fichiers inclure ou exclure ? |
| Contraintes | Quelles règles ou dépendances respecter ? |
| Réussite | Quel résultat vérifiable est attendu ? |

---

## Exemple de prompt

```text
Objectif : corriger le rendu du menu sur petits écrans.
Contexte : application web existante en HTML et CSS.
Périmètre : examiner les styles du menu; ne pas modifier les autres pages.
Contraintes : conserver l'accessibilité clavier et les conventions du projet.
Réussite : le menu reste utilisable à 320 px et sur grand écran.
Processus : expliquer brièvement le plan, effectuer les changements,
puis indiquer les fichiers modifiés et les vérifications effectuées.
```

---
<!-- _class: light -->

## Règles et skills

| Ressource | Rôle général | Exemple |
|:---|:---|:---|
| Règle | Consigne réutilisable qui encadre le travail | Conventions de code du projet |
| Skill | Procédure spécialisée chargée pour un type de tâche | Créer un lab ou lancer une revue |

Les noms, emplacements et mécanismes de chargement dépendent de l'outil utilisé. Vérifier la documentation de son environnement.

---

## Revue et sécurité du travail

- Examiner les fichiers que l'agent propose de modifier.
- Ne pas partager de secrets ni de données privées dans les prompts.
- Examiner les commandes proposées avant leur exécution.
- Vérifier les tests réellement exécutés et leurs résultats.
- Refuser ou corriger un résultat qui ne respecte pas le périmètre.

---
<!-- _class: light -->

## Activité : améliorer un prompt

Choisissez une petite tâche de programmation :

1. Rédigez un prompt avec les cinq parties du tableau.
2. Ajoutez une limite explicite de périmètre.
3. Définissez un critère de réussite observable.
4. Demandez une vérification, sans prétendre qu'elle a déjà eu lieu.

---

## À retenir

- Un agent est un assistant, pas un substitut à la revue.
- Un prompt précis borne les changements et décrit la réussite attendue.
- Planifier, examiner, exécuter et vérifier aide à garder le contrôle.
- Les paramètres exacts dépendent de la version de l'outil.

---
<!-- _class: light -->

## Summary & Verification Matrix

| Objectif | Statut | Preuve |
|:---|:---:|:---|
| Décrire le flux de travail | Couvert | Étapes Planifier → Vérifier |
| Construire un prompt cadré | Couvert | Exemple et exercice |
| Expliquer la revue humaine | Couvert | Liste de vérification |
