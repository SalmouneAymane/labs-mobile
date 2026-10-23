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

# Laravel

---
<!-- _class: light -->

## Lab Plan

1. Introduction
2. Problems Encountered
3. Solutions Implemented

---

## 1. Introduction

- **Purpose & scope:** Découvrir Laravel et comprendre comment il structure une application Web PHP.
- **Objectifs :** expliquer le rôle d'un framework, suivre une requête et repérer les outils courants.
- **Notions clés :** PHP, HTTP, routes, contrôleurs, Eloquent, Blade et migrations.

---
<!-- _class: light -->

## 2. Problems Encountered

- Le support présente les concepts de Laravel ; aucun incident d'exécution précis n'est documenté.
- **No blocking technical problems encountered during implementation.**
- La version et la configuration d'un projet Laravel ne sont pas précisées dans ce support.

---

## 3. Solutions Implemented

- Aucun correctif de code n'est documenté dans le support.
- Les exemples séparent la route, le contrôleur, l'accès aux données et la présentation.
- Vérifier les exemples contre la version du projet avant de les intégrer à une application.

---
<!-- _class: light -->

## Qu'est-ce que Laravel ?

- Framework open source écrit en **PHP** pour construire des applications Web.
- Fournit des conventions et des composants réutilisables.
- Peut répondre avec une page HTML ou des données JSON.
- Il complète PHP ; il ne remplace ni le langage ni les bases du Web.

---

## Le rôle d'un framework Web

1. Recevoir une requête HTTP.
2. Associer la requête à une route.
3. Exécuter le traitement applicatif et accéder aux données si nécessaire.
4. Retourner une réponse au client.

Le framework aide à organiser ces étapes et les responsabilités du code.

---
<!-- _class: light -->

## Architecture MVC

| Élément | Responsabilité | Exemple Laravel |
|:---|:---|:---|
| Model | Représenter et manipuler les données | Modèle Eloquent |
| View | Présenter les informations | Vue Blade |
| Controller | Coordonner le traitement d'une requête | Contrôleur PHP |

MVC répartit les responsabilités ; une petite route peut aussi renvoyer une réponse directement.

---

## Parcours d'une requête

**Navigateur** → **Route** → **Contrôleur** → **Modèle / données**

**Réponse :** vue HTML, JSON ou autre réponse HTTP

- La route associe une méthode et une URL à un traitement.
- Le contrôleur coordonne la logique.
- Le modèle intervient si l'application lit ou modifie des données.

---
<!-- _class: light -->

## Outils courants

| Outil | Utilité |
|:---|:---|
| Routage | Associer une URL et une méthode HTTP à une action |
| Middleware | Examiner ou filtrer des requêtes |
| Eloquent | Interagir avec les données à travers des modèles |
| Migrations | Décrire les changements du schéma de données |
| Blade | Construire des vues HTML réutilisables |
| Tests et validation | Vérifier le comportement et les entrées |

---

## Exemple : une route

Dans `routes/web.php`, une route `GET` peut répondre directement :

```php
<?php

use Illuminate\Support\Facades\Route;

Route::get('/bonjour', function () {
    return 'Bonjour !';
});
```

**Réponse attendue :** une requête `GET /bonjour` reçoit le texte `Bonjour !`.

---
<!-- _class: light -->

## Déléguer au contrôleur

```php
<?php

use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;

Route::get('/bienvenue', [WelcomeController::class, 'index']);
```

Le contrôleur peut préparer une réponse ou transmettre des données à une vue. La structure exacte dépend du projet Laravel.

---

## Blade : afficher des données

```blade
<h1>Bonjour, {{ $name }} !</h1>
```

Une action de contrôleur peut transmettre la variable à la vue :

```php
return view('welcome', ['name' => 'Aymane']);
```

Blade échappe par défaut le contenu affiché avec `{{ ... }}`.

---
<!-- _class: light -->

## Activité : suivre la requête

1. Repérez la méthode et l'URL de la route d'exemple.
2. Décrivez ce que la route renvoie.
3. Expliquez ce qui changerait si elle appelait un contrôleur.
4. Consultez la documentation correspondant à la version Laravel du projet.

---

## À retenir

- Laravel est un framework PHP côté serveur.
- Les routes orientent les requêtes vers un traitement.
- MVC distingue données, présentation et coordination.
- Eloquent, Blade et les migrations répondent à des besoins différents.

---
<!-- _class: light -->

## Summary & Verification Matrix

| Objectif | Statut | Preuve |
|:---|:---:|:---|
| Expliquer le rôle de Laravel | Couvert | Slides de présentation |
| Décrire MVC et une requête | Couvert | Tableau et parcours |
| Lire les exemples de route et Blade | Couvert | Extraits PHP et Blade |
| Exécuter les exemples dans un projet | À réaliser | Aucun projet/version fourni pour test |
