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

# Architecture MVC avec Laravel

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

- Identifier les responsabilités Model, View et Controller.
- Suivre le parcours d'une requête dans une application Laravel.
- Comprendre comment ces rôles clarifient le code.

---
<!-- _class: light -->

## 2. Technical Stack

- **Laravel / PHP :** framework et langage serveur de l'exemple.
- **MySQL :** stockage possible pour les modèles, selon le projet.
- **JSON :** alternative à une vue HTML pour une réponse d'API.
- **JavaScript, Alpine.js et Tailwind CSS :** peuvent intervenir dans l'interface, mais ne définissent pas MVC.
- **Kotlin :** non utilisé dans cet exemple Laravel.

---

## 3. Definition

| Élément | Responsabilité |
|:---|:---|
| Model | Représenter et manipuler les données |
| View | Présenter les données à l'utilisateur |
| Controller | Coordonner une requête et préparer une réponse |

MVC décrit une séparation de responsabilités; les détails d'architecture dépendent du projet.

---
<!-- _class: light -->

## 4. Problem Statement

Comment éviter de mélanger accès aux données, traitement d'une requête et rendu de l'interface dans le même bloc de code ?

---

## 5. Solution

Dans un exemple de liste d'articles :

1. La route associe `GET /articles` à une action.
2. Le contrôleur récupère les articles via le modèle.
3. La vue Blade affiche leurs titres.

```php
Route::get('/articles', [ArticleController::class, 'index']);
```

Dans l'action, préparer `$articles`, puis retourner la vue avec les données. Consulter le projet pour ses noms et conventions réels.

---
<!-- _class: light -->

## 6. Practice: suivre les responsabilités

Dans une application Laravel :

1. Repérez une route qui affiche une collection.
2. Trouvez son action de contrôleur.
3. Repérez où les données sont chargées.
4. Identifiez la vue ou le format JSON de la réponse.
5. Dessinez le flux et expliquez le rôle de chaque composant.

**Livrable :** schéma Route → Controller → Model → View / JSON.
