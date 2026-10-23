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

# starter

---
<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## 1. Introduction

- **Purpose & scope:** Découvrir des outils et réglages de l'environnement de développement décrits dans le support.
- **Objectifs :** mieux repérer les fichiers, suivre des rappels dans le code et prévisualiser pages Web et slides.
- **Outils cités :** explorateur VS Code, Todo Highlight, Live Server et aperçu Marp.

---
<!-- _class: light -->

## 2. Problems Encountered

Le support initial rapporte les difficultés suivantes :

- fichiers et dossiers cachés difficiles à repérer ;
- `README.md` absent de l'explorateur ;
- rappels de code faciles à oublier ;
- fichiers Marp ouverts sans l'aperçu attendu.

---

## 3. Solutions Implemented

Le support source indique ces pistes de résolution :

- ajuster les paramètres pertinents de l'explorateur ;
- vérifier les réglages ou extensions liés à l'affichage de `README.md` ;
- utiliser Todo Highlight pour repérer des rappels dans le code ;
- installer ou configurer Live Server et l'extension Marp.

Les libellés exacts des réglages dépendent de la version de VS Code et des extensions installées.

---
<!-- _class: light -->

## Repérer les fichiers

- Afficher les fichiers et dossiers cachés peut aider à comprendre la structure d'un projet.
- Vérifier que les filtres et exclusions de l'explorateur ne masquent pas des fichiers.
- Le dépôt doit rester la source de vérité : ne pas supprimer un fichier simplement parce qu'il est masqué.

---

## Rappels dans le code

- Todo Highlight peut aider à retrouver des commentaires et marqueurs de tâche.
- Adopter des conventions d'équipe pour ces marqueurs.
- Un marqueur signale un point à revoir ; il ne remplace pas une tâche suivie ni un test.

---
<!-- _class: light -->

## Prévisualiser une page Web

Live Server peut démarrer un serveur local pour prévisualiser des pages pendant leur édition.

Workflow :

1. Ouvrir le dossier du projet dans l'éditeur.
2. Lancer le serveur selon l'extension installée.
3. Modifier une page.
4. Vérifier le rendu dans le navigateur.

---

## Prévisualiser Marp

- Ouvrir le fichier Markdown de présentation.
- Activer l'aperçu Marp fourni par l'extension.
- Vérifier les délimitations, le débordement et l'ordre des slides.
- Exporter uniquement si l'outil installé le permet.

---
<!-- _class: light -->

## Activité : vérifier son environnement

Sur un petit projet de démonstration :

1. Confirmer quels fichiers sont visibles dans l'explorateur.
2. Créer un rappel de code et vérifier comment le repérer.
3. Prévisualiser une page Web.
4. Ouvrir une présentation Marp en aperçu.
5. Noter les noms et versions des outils réellement utilisés.

---

## À retenir

- Ajuster l'explorateur peut faciliter la découverte des fichiers.
- Les rappels améliorent la visibilité, mais ne remplacent pas la gestion du travail.
- Live Server et l'aperçu Marp couvrent des types de prévisualisation différents.
- Les noms de réglages et fonctions peuvent changer selon la version.

---
<!-- _class: light -->

## Summary & Verification Matrix

| Objectif | Statut | Preuve |
|:---|:---:|:---|
| Repérer les difficultés décrites | Couvert | Liste des problèmes rapportés |
| Présenter les pistes d'amélioration | Couvert | Réglages et extensions cités |
| Vérifier l'environnement local | Pratique | Activité de contrôle |
