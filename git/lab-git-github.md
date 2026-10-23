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

# Git et GitHub

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

- Comprendre le suivi de versions et le partage de code.
- Distinguer les opérations locales des opérations avec un dépôt distant.
- Pratiquer un cycle de changement court et contrôlé.

---
<!-- _class: light -->

## 2. Technical Stack

- **Git :** outil de suivi de versions.
- **GitHub :** service d'hébergement et de collaboration autour de dépôts Git.
- **Stack applicative :** sans objet pour ce lab; les commandes s'appliquent aux projets Laravel, JavaScript, PHP natif ou Kotlin.

---

## 3. Definition

- **Working tree :** fichiers du projet dans leur état de travail.
- **Staging area :** changements sélectionnés pour le prochain commit.
- **Commit :** instantané nommé dans l'historique local.
- **Remote :** dépôt distant utilisé pour partager ou synchroniser des commits.

---
<!-- _class: light -->

## 4. Problem Statement

Comment suivre et partager les modifications sans perdre l'historique ni inclure par erreur des changements non souhaités ?

Il faut pouvoir voir ce qui a changé, sélectionner les fichiers concernés et comprendre ce qui sera partagé.

---

## 5. Solution

```bash
git status
git diff
git add chemin/vers/fichier
git diff --staged
git commit -m "Décrire le changement"
```

- Vérifier l'état avant et après la préparation.
- Créer une branche pour isoler une tâche.
- Utiliser les remotes et pull requests selon le workflow de l'équipe.

---
<!-- _class: light -->

## 6. Practice: préparer un commit

Dans un dépôt de test :

1. Modifiez un fichier et observez `git status`.
2. Lisez `git diff`.
3. Ajoutez uniquement ce fichier.
4. Vérifiez `git diff --staged`.
5. Créez un commit descriptif et consultez l'historique.

N'effectuez pas cette pratique sur un dépôt partagé sans autorisation.
