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

# Découvrir Laravel

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

- Comprendre le rôle de Laravel dans une application Web PHP.
- Suivre une requête de son URL jusqu'à la réponse.
- Identifier routes, contrôleurs, modèles, vues et migrations.

---
<!-- _class: light -->

## 2. Technical Stack

- **Laravel et PHP :** framework et langage côté serveur.
- **MySQL :** base de données possible, selon la configuration du projet.
- **JSON :** format de réponse possible pour une API.
- **Alpine.js, Tailwind CSS et JavaScript :** peuvent enrichir l'interface; ils ne sont pas obligatoires pour chaque page Laravel.
- **Kotlin :** non utilisé dans l'exemple Web.

---

## 3. Definition

Un **framework** fournit des composants et conventions pour organiser une application. Laravel peut recevoir une requête HTTP, l'associer à une route, exécuter une action et produire une réponse HTML ou JSON.

---
<!-- _class: light -->

## 4. Problem Statement

Comment construire une application Web dont les requêtes, les données et l'affichage restent compréhensibles et maintenables ?

Mélanger toutes ces responsabilités dans un seul bloc rend le changement et la vérification plus difficiles.

---

## 5. Solution

Séparer les rôles selon le besoin :

- **Route :** associer méthode et URL à une action.
- **Contrôleur :** coordonner le traitement.
- **Modèle Eloquent :** représenter et consulter les données.
- **Vue Blade :** construire le HTML.
- **Migration :** décrire une évolution du schéma.

Les versions Laravel diffèrent : consulter la documentation correspondant au projet.

---
<!-- _class: light -->

## 6. Practice: suivre une route

Dans un projet Laravel existant :

1. Repérez une route `GET` et notez son URL.
2. Suivez l'action vers le contrôleur, si elle en utilise un.
3. Identifiez les données transmises à la vue ou à la réponse JSON.
4. Décrivez le trajet requête → réponse.
5. Vérifiez l'exemple avec la documentation de la version du projet.

**Livrable :** un petit schéma du parcours et une phrase par composant.
