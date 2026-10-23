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

# MVC

---
<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## 1. Introduction

- **Purpose & scope:** Comprendre MVC et le rôle de Model, View et Controller dans une application.
- **Objectifs :** suivre une requête Laravel et identifier la responsabilité de chaque composant.
- **Notions clés :** route, contrôleur, modèle Eloquent, vue Blade et réponse.

---
<!-- _class: light -->

## 2. Problems Encountered

- Le support explique l'architecture ; il ne rapporte pas d'erreur d'exécution.
- **No blocking technical problems encountered during implementation.**
- Les exemples illustrent les rôles, mais doivent être vérifiés dans le projet et sa version Laravel.

---

## 3. Solutions Implemented

- Aucun correctif de code n'est documenté.
- L'exemple sépare l'accès aux articles, le traitement de la requête et le rendu HTML.
- Cette séparation facilite la lecture ; elle n'impose pas une architecture identique à tous les projets.

---
<!-- _class: light -->

## MVC : trois responsabilités

| Composant | Responsabilité | Exemple |
|:---|:---|:---|
| Model | Représenter et manipuler les données | `Article` |
| View | Présenter les données à l'utilisateur | Vue Blade |
| Controller | Coordonner la requête et préparer une réponse | `ArticleController` |

---

## Le modèle

Un modèle Eloquent représente un type de données utilisé par l'application :

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
}
```

Les conventions de table et les attributs dépendent du modèle et du projet.

---
<!-- _class: light -->

## La vue Blade

Une vue reçoit les données préparées par le contrôleur et construit l'affichage :

```blade
<h1>Articles</h1>

<ul>
    @forelse ($articles as $article)
        <li>{{ $article->title }}</li>
    @empty
        <li>Aucun article pour le moment.</li>
    @endforelse
</ul>
```

Les doubles accolades Blade affichent une valeur échappée par défaut.

---

## Route et contrôleur

**Route (`routes/web.php`)**

```php
use App\Http\Controllers\ArticleController;
use Illuminate\Support\Facades\Route;

Route::get('/articles', [ArticleController::class, 'index']);
```

**Action du contrôleur**

```php
$articles = Article::all();
return view('articles', ['articles' => $articles]);
```

---
<!-- _class: light -->

## Suivre la requête

**Navigateur** → `GET /articles` → **Route** → **Contrôleur**

Le contrôleur récupère des articles via le modèle, puis transmet le résultat à la vue Blade qui construit le HTML.

**Idée clé :** le contrôleur orchestre les composants au lieu de mélanger la requête, l'accès aux données et tout le balisage.

---

## Activité : classer les responsabilités

Pour une page qui liste des articles :

1. Où décririez-vous la requête de la page ?
2. Quel composant prépare ou récupère les articles ?
3. Quel composant affiche leur titre ?
4. Quel flux relie la route, le contrôleur, le modèle et la vue ?

---
<!-- _class: light -->

## Summary & Verification Matrix

| Objectif | Statut | Preuve |
|:---|:---:|:---|
| Distinguer Model, View et Controller | Couvert | Tableau des responsabilités |
| Décrire le parcours d'une requête | Couvert | Route, contrôleur et vue |
| Vérifier le code dans un projet Laravel | À réaliser | Aucun projet/version fourni pour test |
