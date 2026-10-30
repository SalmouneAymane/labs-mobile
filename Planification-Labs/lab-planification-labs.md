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

# Une structure commune pour nos labs

---
<!-- _class: light -->

## Plan du lab

1. Introduction
2. Stack technique
3. Problématique
4. Définition (si nécessaire)
5. Solution
6. Pratique (si nécessaire)

---

## 1. Introduction

Chaque personne peut traiter un sujet avec ses propres idées et exemples. Pour que nos labs soient faciles à suivre et à comparer, nous adoptons un **plan commun**.

- **Objectif :** harmoniser l'ordre des parties.
- **Public :** les membres de la classe qui préparent ou suivent un lab.
- **Principe :** le plan est commun; le contenu reste libre et propre au sujet.

---
<!-- _class: light -->

## 2. Stack technique

Ce lab porte sur la façon de structurer une présentation, pas sur la construction d'une application.

- **Markdown :** écrire et organiser le contenu du lab.
- **Marp :** transformer le fichier Markdown en diapositives.
- **VS Code :** modifier et prévisualiser le fichier avec les outils disponibles.
- **Git :** partager et suivre les changements apportés au modèle commun.

---

## 3. Problématique

Quand chacun choisit un plan différent, les labs peuvent être difficiles à parcourir : une notion apparaît avant son contexte, les explications changent d'ordre et les apprenants doivent retrouver les informations à chaque présentation.

Le problème n'est **pas** que les sujets ou les explications soient différents. La diversité du contenu est attendue. C'est l'ordre général des parties qui manque de cohérence.

---
<!-- _class: light -->

## 4. Définition

- **Plan commun :** ordre partagé des grandes parties d'un lab.
- **Contenu :** explications, exemples, outils et détails propres à chaque sujet.
- **Standardiser le plan :** rendre la structure prévisible sans rendre tous les labs identiques.

> Même parcours pour le lecteur; contenu adapté au sujet.

---

## 5. Solution : adopter le même parcours

1. **Introduction** — présenter le sujet, son objectif et son périmètre.
2. **Stack technique** — nommer les technologies et expliquer leur rôle dans le sujet.
3. **Problématique** — exposer le besoin ou la difficulté abordée.
4. **Définition (si nécessaire)** — clarifier les termes indispensables à la compréhension.
5. **Solution** — décrire l'approche, les étapes ou les choix qui répondent au problème.
6. **Pratique (si nécessaire)** — proposer un exercice lorsque cela aide à atteindre les objectifs.

Les sections gardent cet ordre. Une définition ou une pratique peut être omise si elle n'est pas nécessaire; les autres sections accueillent le contenu spécifique du lab.

---
<!-- _class: light -->

## Un cadre commun, pas un contenu uniforme

| Élément | À garder commun | À adapter au sujet |
|:---|:---|:---|
| Ordre des parties | Introduction, stack, problématique, définition, solution, pratique | — |
| Exemples | — | Choix et difficulté des exemples |
| Technologies | — | Outils réellement pertinents |
| Explications | — | Niveau de détail et vocabulaire du sujet |
| Pratique | La placer à la fin si elle est utile | Type et durée de l'activité |

Le modèle sert de repère; il ne remplace pas la réflexion de l'auteur.

---

## À retenir

- Un plan partagé rend les labs plus prévisibles à suivre.
- Le plan définit l'ordre, pas les idées ni les exemples.
- Les définitions et les activités pratiques sont facultatives quand elles ne sont pas utiles.
- Chaque auteur reste responsable de la qualité et de l'exactitude de son contenu.
