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
  }
  h1 {
    color: #38bdf8;
    font-size: 1.8em;
  }
  h2 {
    color: #38bdf8;
    font-size: 1.3em;
  }
  h3 {
    color: #7dd3fc;
    font-size: 1.05em;
  }
  section.light {
    background-color: #f8fafc;
    color: #0f172a;
  }
  section.light h1, section.light h2, section.light h3 {
    color: #0284c7;
  }
  pre, code {
    background-color: #1e293b;
    color: #e2e8f0;
    border-radius: 6px;
    font-family: 'Fira Code', 'Consolas', monospace;
  }
  section.light pre, section.light code {
    background-color: #e2e8f0;
    color: #0f172a;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.78em;
    line-height: 1.35;
  }
  th {
    background-color: #1e293b;
    color: #f8fafc;
    font-weight: 600;
    padding: 8px 10px;
    text-align: left;
    vertical-align: top;
  }
  td {
    background-color: #172033;
    color: #f8fafc;
    padding: 8px 10px;
    border-bottom: 1px solid #475569;
    vertical-align: top;
  }
  section.light th {
    background-color: #e0f2fe;
    color: #0f172a;
  }
  section.light td {
    background-color: #ffffff;
    color: #0f172a;
  }
  section.light tbody tr:nth-child(even) td {
    background-color: #f1f5f9;
  }
  section.light td {
    border-bottom: 1px solid #cbd5e1;
  }
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
- **Objectifs :**
  - Expliquer le rôle d'un framework côté serveur.
  - Décrire le parcours d'une requête et l'architecture MVC.
  - Repérer les principaux outils de l'écosystème Laravel.
- **Technologies & notions clés :** PHP, HTTP, routes, contrôleurs, Eloquent, Blade, migrations.

---
<!-- _class: light -->

## 2. Problems Encountered

- Aucun incident d'exécution précis n'est documenté dans le support d'origine.
- **No blocking technical problems encountered during implementation.**
- Les exemples qui suivent illustrent le fonctionnement du framework ; ils ne prétendent pas résoudre des erreurs réellement observées.

---

## 3. Solutions Implemented

- Utiliser une route pour associer une méthode HTTP et une URL à une action.
- Confier la coordination d'une requête à un contrôleur lorsque la logique grandit.
- Séparer l'accès aux données, leur présentation et le traitement applicatif.
- Vérifier les exemples dans le contexte du projet Laravel concerné ; sa version et sa configuration ne sont pas précisées ici.

---
<!-- _class: light -->

## Qu'est-ce que Laravel ?

- Framework **open source écrit en PHP** pour développer des applications Web côté serveur.
- Fournit des conventions et des composants réutilisables.
- Peut produire des pages HTML ou des réponses JSON.
- Laravel structure le développement PHP : il ne remplace ni le langage ni les bases du Web.

---

## Le rôle de Laravel dans une application Web

1. Recevoir une requête HTTP.
2. Trouver la route qui correspond à la méthode et à l'URL.
3. Exécuter le traitement applicatif et, si nécessaire, accéder aux données.
4. Renvoyer une réponse HTML, JSON ou un autre type de réponse HTTP.

**But :** garder le code organisé et faciliter son évolution.

---
<!-- _class: light -->

## Architecture MVC

| Élément | Responsabilité | Exemple Laravel |
|:---|:---|:---|
| **Model** | Représenter et manipuler les données | Modèle Eloquent |
| **View** | Présenter les informations | Vue Blade |
| **Controller** | Coordonner une action et préparer une réponse | Contrôleur PHP |

MVC est une manière de répartir les responsabilités ; une petite route peut aussi répondre directement.

---

## Parcours d'une requête

**Navigateur** → **Route** → **Contrôleur** → **Modèle / base de données**

**Réponse :** vue HTML ou données JSON

- La route associe une méthode HTTP et une URL à un traitement.
- Le contrôleur coordonne le traitement.
- Le modèle est utilisé si des données doivent être lues ou modifiées.
- La réponse est renvoyée au client.

---
<!-- _class: light -->

## Outils courants de Laravel

| Outil | Utilité |
|:---|:---|
| Routage | Associer des URL et méthodes HTTP à des actions |
| Middleware | Filtrer ou examiner des requêtes, par exemple pour l'authentification |
| Eloquent ORM | Interagir avec les données à travers des modèles PHP |
| Migrations | Décrire et faire évoluer le schéma de la base de données |
| Blade | Composer des vues HTML réutilisables |
| Tests, validation, cache et files d'attente | Couvrir des besoins fréquents d'une application |

---

## Exemple : une route simple

Dans `routes/web.php`, une route `GET` peut renvoyer directement une réponse texte :

```php
<?php

use Illuminate\Support\Facades\Route;

Route::get('/bonjour', function () {
    return 'Bonjour !';
});
```

**Résultat attendu :** une requête `GET /bonjour` reçoit le texte `Bonjour !`.

---
<!-- _class: light -->

## Exemple : déléguer au contrôleur

La route peut référencer une méthode de contrôleur plutôt que contenir le traitement :

```php
<?php

use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;

Route::get('/bienvenue', [WelcomeController::class, 'index']);
```

```php
<?php

namespace App\Http\Controllers;

class WelcomeController extends Controller
{
    public function index()
    {
        return view('welcome');
    }
}
```

La vue correspondante se trouve généralement dans `resources/views/welcome.blade.php`.

---

## Exemple : une vue Blade

Blade permet d'afficher des données échappées dans un gabarit :

```blade
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Bienvenue</title>
</head>
<body>
    <h1>Bonjour, {{ $name }} !</h1>
</body>
</html>
```

Dans une action de contrôleur, transmettre la valeur à la vue :

```php
return view('welcome', ['name' => 'Aymane']);
```

---
<!-- _class: light -->

## Pourquoi choisir Laravel ?

- Démarrer plus vite avec des composants et conventions prêts à l'emploi.
- Garder une organisation commune entre les parties d'une application.
- Faciliter les tests, la maintenance et le travail en équipe.
- S'appuyer sur un écosystème PHP riche.

**À retenir :** le framework n'élimine pas le besoin de conception, de tests ni de bonnes pratiques de sécurité.

---

## Activité : suivre une requête

En groupe ou individuellement :

1. Repérer la méthode HTTP et l'URL de la route d'exemple.
2. Identifier le code exécuté à la réception de la requête.
3. Décrire comment la route déléguée atteint son contrôleur puis sa vue.
4. Proposer une variante qui renvoie une réponse JSON.
5. Expliquer quand une route simple devrait être déplacée dans un contrôleur.

---
<!-- _class: light -->

## Ressources

- [Documentation officielle Laravel](https://laravel.com/docs)
- [Site officiel Laravel](https://laravel.com/)
- [Manuel PHP en français](https://www.php.net/manual/fr/)

Consulter la documentation correspondant à la version de Laravel utilisée par le projet.

---
<!-- _class: light -->

## Summary & Verification Matrix

| Objectif | Statut | Preuve |
|:---|:---:|:---|
| Présenter le rôle de Laravel | Couvert | Slides d'introduction et usages |
| Expliquer MVC et le parcours d'une requête | Couvert | Schéma textuel et tableau des responsabilités |
| Illustrer routes, contrôleurs et Blade | Couvert | Exemples de code dans les slides |
| Vérifier les exemples dans un projet Laravel | À réaliser | Aucun projet/version Laravel n'a été fourni pour exécution |
