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
  h1 { color: #38bdf8; font-size: 1.8em; }
  h2 { color: #38bdf8; font-size: 1.3em; }
  h3 { color: #7dd3fc; font-size: 1.05em; }
  section.light { background-color: #f8fafc; color: #0f172a; }
  section.light h1, section.light h2, section.light h3 { color: #0284c7; }
  section.cover {
    background-color: #f8fafc;
    color: #0f172a;
    text-align: center;
  }
  section.cover h1, section.cover h2 { color: #075985; }
  section.cover img { max-height: 88px; width: auto; vertical-align: middle; }
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
---

<!-- _class: cover -->

![OFPPT](../presentation-assets/logos/ofppt.png) ![Solicode](../presentation-assets/logos/solicode.png)

# Plan générique de présentation d'un Lab

**Apprenant :** Aymane Salmoune  
**Encadrant :** FOUAD ESSARRAJ

---
<!-- _class: light -->

## Plan

1. Stack technique
2. Définitions
3. Problème et besoin
4. Solution et pratique
5. Résultats et démonstration
6. Conclusion et apprentissages

Un parcours commun, adapté au sujet et au travail demandé.

---

## Stack technique

Présenter les technologies **réellement utilisées** et leur rôle.

**Exemple · Lab CRUD avec Laravel**

- **PHP 8.2** — logique côté serveur.
- **Laravel 11** — structure MVC et outils applicatifs.
- **Blade** — génération des vues.
- **Tailwind CSS** — styles de l'interface.
- **MySQL** — stockage relationnel.
- **Composer / Git** — dépendances / versionnement.

*Exemple fourni dans le modèle; adapter les versions au projet réel.*

---
<!-- _class: light -->

## Définitions

- **MVC** — sépare données, logique et interface.
- **ORM** — manipule les données avec des objets.
- **Migration** — versionne la structure de la base.
- **CRUD** — créer, lire, modifier, supprimer.

Définir les notions avant de les utiliser.

---

## Problème et besoin

**Exemple · gestion de restaurants**

- Informations dispersées entre papier et tableurs.
- Suivi et mises à jour difficiles.
- Risques d'erreurs ou de perte de données.

**Besoin :** centraliser, gérer et sécuriser les informations.  
**Utilité du Lab :** apprendre CRUD, MVC et Laravel.

---
<!-- _class: light -->

## Solution · architecture

**Exemple de structure**

- **Modèle `Restaurant`** — données.
- **`RestaurantController`** — logique CRUD.
- **Vues Blade** — interface.
- **Routes `web.php`** — navigation.

Une architecture à adapter aux fichiers réellement créés.

---

## Solution · étapes et pratique

1. Configurer l'environnement Laravel.
2. Créer la base et les migrations.
3. Développer modèle, contrôleur, vues et routes.
4. Tester les opérations CRUD et la validation.
5. Préparer une démonstration.

**À montrer :** liste · ajout · modification · suppression.

---
<!-- _class: light -->

## Résultats et démonstration

Présenter des preuves observées, pas des résultats supposés.

- Captures ou démonstration de l'application.
- Tests effectués et comportement constaté.
- Objectifs atteints et limites connues.

**Exemple de critères à vérifier**

- Les opérations CRUD fonctionnent.
- Les données invalides sont refusées.
- Les informations restent cohérentes.

---

## Conclusion et apprentissages

**Bilan à compléter après le Lab**

- Compétences acquises : MVC · Laravel · base de données · validation.
- Difficultés rencontrées et solutions réellement appliquées.
- Améliorations possibles : recherche · filtres · authentification · API.

**Conclusion :** résumer ce que le Lab a permis de comprendre et de réaliser.

---
<!-- _class: light -->

## Conseils de présentation

**Avant**

- Adapter le plan et préparer exemples et démonstration.
- Anticiper les questions; répéter et chronométrer.

**Pendant**

- Être clair, concis et interagir avec le public.
- Privilégier schémas, captures et code pertinent.

**Repère :** 15–20 minutes, selon le sujet et les consignes.

---

## Adapter le plan au Lab

**Lab pratique · CRUD, API**

- Démonstration, code utile, tests.

**Lab conceptuel · architecture**

- Définitions, schémas, exemples d'application.

**Lab de recherche**

- Contexte, solutions comparées, choix justifiés.

---
<!-- _class: light -->

## À retenir

- Même structure; contenu adapté au sujet.
- Partir du besoin, montrer la démarche, puis les preuves.
- Rester honnête sur les résultats et les limites.
- Raconter un parcours cohérent : problème → solution → apprentissages.
