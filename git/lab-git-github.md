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

# git

---
<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## 1. Introduction

- **Purpose & scope:** Apprendre les bases du suivi de versions avec Git et du partage de dépôts sur GitHub.
- **Objectifs :** distinguer dépôt local et plateforme distante, suivre les changements et comprendre les branches.
- **Notions clés :** working tree, staging area, commit, branche, remote, push et pull.

---
<!-- _class: light -->

## 2. Problems Encountered

- Le support d'origine est une présentation des fondamentaux et ne rapporte pas d'incident d'exécution précis.
- **No blocking technical problems encountered during implementation.**

---

## 3. Solutions Implemented

- Aucun correctif logiciel n'est documenté.
- Le cycle présenté sépare l'inspection des changements, leur préparation, l'enregistrement et le partage.
- Examiner `git status` et les différences avant de créer un commit réduit les erreurs de périmètre.

---
<!-- _class: light -->

## Git et GitHub

- **Git** suit l'historique des modifications dans un dépôt.
- Il aide à comparer les versions et à travailler sur des branches.
- **GitHub** héberge des dépôts Git et fournit des outils de collaboration.
- Git peut s'utiliser localement ; GitHub est un service distant qui peut héberger un dépôt.

---

## Les zones du travail Git

**Working tree** → **Staging area** → **Commit**

- Le working tree contient les fichiers modifiés.
- La staging area prépare les changements à inclure.
- Le commit enregistre un ensemble préparé dans l'historique local.
- Un remote permet de partager ou synchroniser des commits avec un dépôt distant.

---
<!-- _class: light -->

## Cycle de base

```bash
git status
git diff
git add chemin/vers/fichier
git diff --staged
git commit -m "Décrire le changement"
```

Remplacez le chemin et le message par ceux de votre projet. Vérifiez le contenu préparé avant le commit.

---

## Branches et collaboration

- Une branche nommée permet d'isoler un travail en cours.
- Une pull request facilite la revue et la discussion avant l'intégration.
- Après revue, les changements peuvent être intégrés à la branche cible.
- La collaboration exige de synchroniser et de résoudre les éventuels conflits.

```bash
git switch -c feature/navigation
```

---
<!-- _class: light -->

## Dépôt distant : commandes courantes

| Commande | Usage |
|:---|:---|
| `git clone` | Créer une copie locale d'un dépôt distant |
| `git remote -v` | Afficher les remotes configurés |
| `git fetch` | Récupérer des références distantes |
| `git pull` | Récupérer et intégrer des changements selon la configuration |
| `git push` | Publier des commits vers un remote autorisé |

---

## Activité : préparer un commit

Dans un dépôt de test :

1. Modifiez un fichier.
2. Comparez `git status` et `git diff`.
3. Ajoutez uniquement le fichier voulu.
4. Vérifiez `git diff --staged`.
5. Créez un commit descriptif et consultez l'historique.

N'utilisez pas cette activité sur un dépôt partagé sans autorisation.

---
<!-- _class: light -->

## Summary & Verification Matrix

| Objectif | Statut | Preuve |
|:---|:---:|:---|
| Distinguer Git et GitHub | Couvert | Slides d'introduction |
| Expliquer le cycle commit | Couvert | Commandes et zones Git |
| Décrire la collaboration | Couvert | Branches, remotes et exercice |
