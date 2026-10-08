---
marp: true
theme: default
paginate: true
size: 16:9
title: Projet fil rouge — version premium
description: Présentation alternative du projet fil rouge
style: |
  :root {
    --bg: #101010;
    --bg-soft: #1b1b1b;
    --panel: rgba(32, 32, 32, 0.88);
    --panel-strong: rgba(24, 24, 24, 0.96);
    --text: #f2f2f2;
    --muted: #c4c4c4;
    --accent: #f2f2f2;
    --accent-2: #d8d8d8;
    --accent-3: #a8a8a8;
    --line: rgba(220, 220, 220, 0.2);
  }

  section {
    background:
      radial-gradient(circle at top left, rgba(220, 220, 220, 0.1), transparent 22%),
      radial-gradient(circle at bottom right, rgba(160, 160, 160, 0.08), transparent 24%),
      var(--bg);
    color: var(--text);
    font-family: "Segoe UI", "Aptos", sans-serif;
    padding: 54px 72px;
  }

  h1 {
    color: #f5f5f5;
    font-size: 48px;
    border-bottom: 3px solid var(--accent);
    padding-bottom: 12px;
    margin-bottom: 18px;
  }

  h2 {
    color: #e4e4e4;
    font-size: 28px;
    margin-bottom: 12px;
  }

  h3 {
    color: #f5f5f5;
    font-size: 24px;
    margin-bottom: 10px;
  }

  p, li {
    color: var(--muted);
    font-size: 21px;
    line-height: 1.45;
  }

  ul {
    padding-left: 26px;
  }

  li::marker {
    color: var(--accent);
  }

  strong {
    color: #ffffff;
  }

  section.lead {
    background:
      linear-gradient(135deg, rgba(8, 8, 8, 0.98), rgba(24, 24, 24, 0.94) 48%, rgba(42, 42, 42, 0.96) 100%),
      var(--bg);
    text-align: left;
  }

  .lead h1, .lead h2 {
    border: none;
    color: #f5f5f5;
    padding: 0;
    margin: 0;
  }

  .lead h1 {
    font-size: 62px;
    margin-bottom: 12px;
  }

  .lead h2 {
    color: #c4c4c4;
    font-size: 30px;
  }

  .card {
    background: rgba(32, 32, 32, 0.88);
    border: 1px solid var(--line);
    border-radius: 18px;
    padding: 18px 20px;
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
  }

  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin-top: 18px;
  }

  .badge {
    display: inline-block;
    background: rgba(220, 220, 220, 0.08);
    border: 1px solid rgba(220, 220, 220, 0.24);
    color: #e4e4e4;
    padding: 8px 14px;
    border-radius: 999px;
    font-size: 16px;
    margin-bottom: 18px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .quote {
    background: linear-gradient(135deg, rgba(230, 230, 230, 0.08), rgba(120, 120, 120, 0.1));
    border-left: 4px solid var(--accent);
    border-radius: 12px;
    padding: 18px 20px;
    font-size: 22px;
    color: #f2f2f2;
  }

  footer {
    color: #a8a8a8;
  }
---

<!-- _class: lead -->

# Projet fil rouge

## Présentation finale

<div class="badge">Digital transformation</div>

---

# Introduction générale

## Contexte et vision du projet

<div class="two-col">
<div class="card">
<h3>Contexte</h3>
<p>Le projet vise à moderniser la gestion des opérations, améliorer la visibilité des processus et renforcer l’expérience utilisateur.</p>
</div>
<div class="card">
<h3>Vision</h3>
<p>Créer une solution plus rapide, plus fiable et plus intelligente, capable de répondre aux besoins réels du terrain.</p>
</div>
</div>

---

# Contexte du projet

- Un environnement opérationnel soumis à une forte demande et à des contraintes de coordination.
- Un besoin croissant de centralisation, de suivi et d’analyse des informations.
- Une volonté d’aligner les outils existants avec les attentes des utilisateurs et des décideurs.
- Une opportunité de transformer des processus manuels en flux numériques plus efficaces.

---

# Défis opérationnels

- Coordination entre plusieurs acteurs et services.
- Gestion des priorités et des ressources disponibles.
- Suivi des commandes, tâches et délais en temps réel.
- Réduction des erreurs liées aux traitements manuels.
- Adaptation aux besoins changeants sans perdre la qualité de service.

---

# Objectifs de la solution

- Optimiser la gestion globale des activités.
- Améliorer la qualité de service et la satisfaction utilisateur.
- Automatiser les tâches répétitives et les flux critiques.
- Centraliser les données afin de faciliter la prise de décision.
- Faciliter la collaboration entre les équipes et les départements.

---

# Définition du problème

<div class="quote">
Les processus actuels sont fragmentés, peu traçables et souvent dépendants de tâches manuelles, ce qui ralentit les opérations et limite l’efficacité de la gestion.
</div>

---

# Méthode de travail

## Approche hybride : Scrum, Design Thinking et 2TUP

- Scrum pour organiser le travail en itérations rapides et testables.
- Design Thinking pour mieux comprendre les usages et les attentes.
- 2TUP pour structurer la conception et le développement autour de l’utilisateur et de la valeur métier.

---

# Scrum

<div class="card">
<ul>
<li>Découpage du projet en sprints.</li>
<li>Planification, revue et amélioration continue.</li>
<li>Priorisation des tâches selon la valeur apportée.</li>
<li>Suivi régulier des avancées et des blocages.</li>
</ul>
</div>

---

# Design Thinking

<div class="card">
<ul>
<li>Comprendre les besoins réels des utilisateurs.</li>
<li>Définir les problèmes à résoudre avec précision.</li>
<li>Générer des idées concrètes et réalisables.</li>
<li>Valider les solutions à travers des retours et des tests.</li>
</ul>
</div>

---

# 2TUP

<div class="card">
<ul>
<li>Approche centrée sur l’utilisateur et l’utilisabilité.</li>
<li>Conception itérative des interfaces et des parcours.</li>
<li>Validation continue avant la mise en production.</li>
<li>Alignement entre l’expérience utilisateur et la performance technique.</li>
</ul>
</div>

---

# Gestion des tâches

- Répartition claire des tâches par sprint.
- Suivi des priorités et des dépendances.
- Évaluation des efforts et des risques.
- Contrôle régulier de l’avancement en équipe.

---

# Branche fonctionnelle

## Comprendre les besoins des utilisateurs

- Identifier les points de friction dans les parcours actuels.
- Mieux cerner les attentes des clients et du personnel.
- Définir des solutions adaptées aux cas d’usage réels.

---

# Empathie

- Analyse des besoins et des frustrations.
- Observation des usages existants.
- Identification des facteurs clés de satisfaction.
- Traduction des besoins en solutions concrètes.

---

# Profil : le client

- Exigences fonctionnelles fortes et claires.
- Besoin de fluidité, de rapidité et de fiabilité.
- Importance de la performance et de la transparence.
- Demande d’un service facile à utiliser et à suivre.

---

# Profil : le personnel

- Besoin d’outils simples et efficaces.
- Importance de la traçabilité des actions.
- Exigence de coordination sans friction.
- Demande de visibilité sur les priorités et les résultats.

---

# Synthèse de la vision

<div class="quote">
La solution doit allier simplicité d’usage, efficacité opérationnelle et capacité d’adaptation aux évolutions du métier.
</div>

---

# Définition du problème

- Les workflows sont trop dispersés.
- Le traitement des demandes manque de cohérence.
- Les informations sont parfois incomplètes ou difficilement exploitable.
- L’équipe ne dispose pas d’un cadre de suivi suffisamment structuré.

---

# Idéation

- Brainstorming sur les besoins métiers et les usages cibles.
- Priorisation des idées selon la valeur ajoutée et la faisabilité.
- Structuration des solutions en fonctionnalités cohérentes.
- Validation des concepts avant développement.

---

# Architecture des cas d’utilisation

## UML

- Représentation des interactions entre acteurs et système.
- Clarification des responsabilités et des parcours utilisateur.
- Formalisation des fonctionnalités clés à développer.

---

# Les acteurs du système

- Client
- Personnel opérationnel
- Gestionnaire / administrateur
- Système d’information et services associés

---

# Détail des cas d’utilisation

- Consultation des informations et des ressources.
- Création, suivi et validation des demandes.
- Gestion des tâches et des opérations critiques.
- Suivi des performances et des indicateurs clés.

---

# Cas d’utilisation global

- Vue d’ensemble des interactions principales.
- Identification des flux critiques et des dépendances.
- Alignement entre besoin métier et architecture technique.

---

# Planification agile

## Sprints et cas d’utilisation

- Sprint 1 : fondations, ressources et configuration.
- Sprint 2 : gestion client et traitement en temps réel.
- Sprint 3 : assistant IA, paiement et optimisation continue.

---

# Stratégie de développement

- Priorisation des fonctionnalités par valeur métier.
- Mises à jour régulières et tests itératifs.
- Validation fonctionnelle au fil des cycles de développement.
- Préparation à l’évolution future de la plateforme.

---

# Sprint 1

## Fondations et gestion des ressources

- Mise en place de la base technique.
- Modélisation des ressources et des données de base.
- Définition des premiers flux critiques.

---

# Sprint 2

## Système client et commandes en temps réel

- Gestion des clients et des interactions.
- Traitement des commandes et suivi des états.
- Mises à jour temps réel et gestion des alertes.

---

# Sprint 3

## Assistant IA et opérations de paiement

- Intégration d’assistance intelligente.
- Automatisation des étapes de paiement et de validation.
- Amélioration de l’expérience et réduction des friction points.

---

# Branche technique

## Architecture et diagramme de classe

<div class="two-col">
<div class="card">
<h3>Architecture</h3>
<p>Structure modulaire, évolutive et orientée services.</p>
</div>
<div class="card">
<h3>Diagramme de classes</h3>
<p>Modélisation des entités, relations et responsabilités.</p>
</div>
</div>

---

# Besoins techniques

- Sécurité des données et gestion des accès.
- Scalabilité pour les usages futurs.
- Performance des traitements et des interfaces.
- Fiabilité des services et intégration des modules.

---

# Analyse technique

- Vérification des contraintes fonctionnelles et non fonctionnelles.
- Identification des composants clés à développer.
- Évaluation des risques techniques et des solutions de contournement.

---

# Conception générale

- Structure cohérente des modules.
- Séparation des rôles et responsabilités.
- Facilitation des évolutions et des maintenances.

---

# Architecture logicielle

- Couche présentation
- Couche métier
- Couche données
- Services annexes et intégrations

---

# Conception

## Diagramme de classe

- Modélisation des principaux objets du système.
- Définition des relations et attributs.
- Clarification des mécanismes de gestion et de persistance.

---

# Maquettes UI/UX

- Interfaces simples, lisibles et orientées utilisateur.
- Parcours optimisés pour la rapidité et la compréhension.
- Cohérence visuelle et ergonomie renforcée.

---

# Réalisation et développement

## Outils et technologies

- Langages et frameworks adaptés au besoin métier.
- Outils de gestion de projet et de collaboration.
- Environnement de développement structuré et évolutif.

---

# Outils de développement

- Git pour le versionnement.
- IDE et outils de debug.
- Environnements de test et validation.
- Analyse des performances et correction des écarts.

---

# Conclusion

## Résultat attendu

<div class="quote">
Une solution plus fluide, fiable et orientée utilisateur capable de soutenir la croissance des opérations et d’améliorer la décision au bon moment.
</div>

---

<!-- _class: lead -->

# Merci

## Questions & discussion


# Technologies utilisées


---

# Bilan d’implémentation des sprints


---

# Conclusion


---

<!-- _class: lead -->

# Merci pour votre attention