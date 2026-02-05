# Architecture

## Objectifs
- Centraliser tout le contenu bilingue.
- Garder une page d'accueil modulaire et evolutive.
- Rendre les pages projet 100% data-driven.

## Vue d'ensemble
- Framework: Next.js App Router
- Page principale: `app/page.jsx`
- Pages projet: `app/projects/[slug]/page.jsx`
- Donnees: `app/content.js`

## Modules principaux
- `app/sections/` pour les blocs de la homepage
- `app/components/` pour les composants reutilisables
- `app/lib/` pour la logique de recherche et de transformation
- `app/hooks/` pour la persistance de langue

## Flux de donnees
1. `useLang` determine la langue active.
2. `content[lang]` est passe aux sections.
3. Les sections rendent uniquement a partir des props.
4. Les pages projets utilisent `findProject` et `flattenProjects`.

## Gestion d'etat
- Etat global minimal: langue en sessionStorage.
- Etat local: section active pour la navigation.

## Routage
- Ancre locale pour la homepage.
- Route dynamique `/projects/[slug]` pour les details.

## Styling
- Styles globaux centralises dans `app/globals.css`.
- Composants relies a des classes stables.

## Extensibilite
- Ajouter une section = nouveau composant dans `app/sections/` + appel dans `app/page.jsx`.
- Ajouter un projet = edit `app/content.js` uniquement.
- Ajouter un visuel = edit `ProjectVisual`.

## Risques et arbitrages
- Contenu centralise = rapide a modifier, mais demande une discipline FR/EN.
- Peu d'etat global = code simple, mais pas de store partage.
