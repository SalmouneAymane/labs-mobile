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

# Écrire un prompt efficace pour une tâche

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

- Formuler une demande qui aide un assistant IA à produire un résultat utile et vérifiable.
- Définir objectif, contexte, limites, format et critères de réussite.
- Réviser le résultat et préciser la demande si nécessaire.

---
<!-- _class: light -->

## 2. Technical Stack

- **Outil :** assistant IA choisi par l'utilisateur.
- **Stack applicative :** inclure Laravel, Alpine.js, MySQL, JSON, Tailwind CSS, JavaScript, PHP natif ou Kotlin uniquement si la tâche porte dessus.
- Ne pas coller de secrets ni de données privées dans un prompt.

---

## 3. Definition

Un **prompt de tâche** décrit le travail demandé à un modèle : le résultat visé, le contexte utile, les limites et la manière de juger la réponse.

---
<!-- _class: light -->

## 4. Problem Statement

Une demande vague laisse l'assistant deviner l'objectif, le public, les sources ou la forme du résultat. La réponse peut sembler convaincante tout en manquant le besoin.

---

## 5. Solution

Utiliser les éléments utiles :

| Élément | Question |
|:---|:---|
| Objectif | Quel résultat produire ? |
| Contexte | Pour qui et pourquoi ? |
| Entrées | Quelles sources utiliser ? |
| Contraintes | Quoi inclure, préserver ou éviter ? |
| Sortie | Quel format et niveau de détail ? |
| Réussite | Comment vérifier la réponse ? |

Clarifier une ambiguïté importante; pour un détail mineur, expliciter une hypothèse.

---
<!-- _class: light -->

## Exemple : améliorer une demande

**Vague :** « Résume ces commentaires et propose des améliorations. »

**Cadrée :**

```text
Objectif : regrouper les commentaires en thèmes récurrents.
Contexte : l'équipe prépare un prochain atelier débutant.
Contraintes : utiliser uniquement les commentaires; ne pas inventer
de statistiques ni de causes.
Sortie : tableau de trois thèmes maximum, un commentaire à l'appui
et une action concrète pour chacun.
Réussite : chaque action est reliée à un élément observé.
```

---

## 6. Practice: préciser une demande

Réécrivez : « Crée un site pour mon événement. »

Précisez le type d'événement, les visiteurs, le livrable (plan ou code de départ), les contenus obligatoires, les limites et un critère de réussite.

**Relecture par pair :** une autre personne peut-elle dire ce qu'il faut créer, pour qui et comment évaluer le résultat ?

**Source :** [Guide de prompt engineering OpenAI](https://developers.openai.com/api/docs/guides/prompt-engineering)
