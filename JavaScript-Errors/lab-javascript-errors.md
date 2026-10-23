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

# Déboguer cinq erreurs JavaScript

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

- Diagnostiquer cinq erreurs observées dans une application de recettes.
- Relier chaque message à sa cause, puis choisir une correction adaptée.
- Reproduire les cas dans le mini-projet [`prjt`](./prjt/frontend/index.html) ou examiner la copie de [`live`](./live/frontend/index.html).

---
<!-- _class: light -->

## 2. Technical Stack

- **JavaScript :** DOM, événements, tableaux, fonctions et `fetch`.
- **PHP :** API JSON de démonstration.
- **JSON :** format d'échange entre interface et API, ainsi que stockage d'exemple.
- **HTML et CSS :** page de démonstration dans `prjt/frontend`.
- Le projet utilise du PHP natif; Laravel, Alpine.js, MySQL, Tailwind CSS et Kotlin ne sont pas requis pour ces exemples.

---

## 3. Definition

- **DOM :** représentation des éléments HTML manipulable en JavaScript.
- **API JSON :** endpoint qui répond avec des données encodées en JSON.
- **Promise rejetée :** résultat asynchrone signalant un échec, à gérer avec `try...catch` ou `.catch()`.
- Les messages exacts peuvent varier selon le navigateur.

---
<!-- _class: light -->

## 4. Problem Statement

La page d'administration ne peut pas afficher ou envoyer ses données si :

- un élément DOM est absent ;
- l'API répond avec une page HTML à la place de JSON ;
- le code suppose que les données sont un tableau ;
- la requête réseau échoue ;
- une fonction appelée n'existe pas encore.

Le mini-projet affiche les cinq cas pour qu'on puisse les reproduire et comparer leur correction.

---

## 5. Solution — DOM et données

### 1. `addEventListener` sur `null`

```javascript
// Erreur : l'identifiant ne correspond à aucun élément.
document.getElementById("form-commentaire")
  .addEventListener("submit", handleSubmit);

// Correction : vérifier que l'élément existe avant de l'utiliser.
const form = document.getElementById("form-commentaire");
if (form) form.addEventListener("submit", handleSubmit);
```

### 2. HTML reçu à la place de JSON

Une erreur fatale PHP peut renvoyer une page `<!DOCTYPE html>`. Corriger l'erreur serveur et s'assurer que l'endpoint répond avec JSON; côté client, vérifier le type de contenu et gérer l'échec du parsing.

---
<!-- _class: light -->

## 5. Solution — réseau et ordre d'exécution

### 3. `posts.forEach is not a function`

L'API renvoie parfois `{ data: [...] }` plutôt qu'un tableau direct. Vérifier le format, puis parcourir la bonne liste :

```javascript
const posts = Array.isArray(payload) ? payload : payload.data;
if (!Array.isArray(posts)) throw new TypeError("Liste d'articles invalide");
posts.forEach(renderPost);
```

### 4. `Failed to fetch`

Vérifier que le serveur est démarré, l'URL correcte et l'origine autorisée. Capturer le rejet et afficher un état d'erreur au lieu de laisser la page échouer silencieusement.

### 5. `displayArticles is not defined`

Déclarer et charger la fonction avant de l'appeler; vérifier le nom du fichier, le chemin du `<script>` et l'ordre de chargement.

---

## Messages d'erreur observés

| # | Message | Cause |
|:---:|:---|:---|
| 1 | `Cannot read properties of null (reading 'addEventListener')` | Élément DOM absent ou mauvais identifiant |
| 2 | `Unexpected token '<' ... is not valid JSON` | Réponse HTML analysée comme du JSON |
| 3 | `posts.forEach is not a function` | Structure inattendue, `posts` n'est pas un tableau |
| 4 | `Failed to fetch` | URL, serveur ou politique réseau/CORS |
| 5 | `displayArticles is not defined` | Fonction manquante, mal nommée ou chargée trop tard |

---
<!-- _class: light -->

## 6. Practice: reproduire puis corriger

Ouvrez [`prjt/frontend/index.html`](./prjt/frontend/index.html) avec le serveur de développement PHP décrit dans [`prjt/README.md`](./prjt/README.md).

1. Cliquez sur **Reproduire** pour chaque cas et lisez le diagnostic affiché.
2. Cliquez sur **Appliquer la correction** pour comparer le comportement.
3. Démarrez l'API et testez la liste de recettes.
4. Arrêtez l'API et observez le traitement du `fetch` rejeté.
5. Pour chaque problème, notez cause, correctif et vérification.

**Source de référence du squelette :** [lab-erreur-js/live](https://github.com/mesbahimohammedyassirsolicode-star/lab/tree/main/lab-erreur-js/live). Les exemples et l'interface locale sont adaptés pour rendre visibles les cinq erreurs demandées.

Une copie de la structure `live` demandée est également conservée sous [`live/`](./live/). Elle garde les sources de l'exercice original pour les comparer avec les corrections guidées de `prjt`.
