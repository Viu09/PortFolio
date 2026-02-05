# Documentation developpeur

## Objectif
Ce document explique comment installer, executer et faire evoluer le portfolio sur le long terme.

## Pre-requis
- Node.js 18 ou plus
- npm 9 ou plus

## Installation
```
npm install
```

## Commandes utiles
- `npm run dev` : lancer le serveur de dev
- `npm run build` : construire le build de production
- `npm run start` : lancer le build de production
- `npm run lint` : verifier le lint
- `npm run test` : lancer les tests en mode watch
- `npm run test:run` : lancer les tests une fois

## Structure du projet
- `app/` : pages, composants et sections
- `app/sections/` : blocs modulaires de la page d'accueil
- `app/components/` : elements reutilisables
- `app/lib/` : utilitaires purs
- `app/content.js` : toutes les copies FR/EN et les projets
- `docs/` : documentation
- `tests/` : tests unitaires

## Gestion du contenu
Tout le texte affichable est centralise dans `app/content.js`.
- Mettre a jour les versions FR et EN en meme temps.
- Les `slug` de projets doivent etre uniques et identiques entre FR et EN.

## Ajouter un projet
1. Ajouter un objet projet dans `content.fr.projects.groups`.
2. Dupliquer le projet en anglais dans `content.en.projects.groups` avec le meme `slug`.
3. Choisir un `visual` supporte par `ProjectVisual`.
4. Ajouter un `link` vers le depot si besoin.

## Ajouter une competence
1. Modifier `content.*.skills.groups`.
2. Ajouter une icone dans `app/components/SkillIcon.jsx` si necessaire.

## Ajouter un visuel de projet
1. Ouvrir `app/components/ProjectVisual.jsx`.
2. Ajouter un nouveau SVG a `visualMap`.
3. Utiliser la cle dans `project.visual`.

## Conventions pro
- Eviter le texte en dur dans les composants.
- Preferer des sections pures (sans etat interne) quand c'est possible.
- Mettre la logique reutilisable dans `app/lib/`.
- Ecrire des tests quand un comportement est critique ou reutilise.

## Depannage
- Si la langue ne se met pas a jour, verifier `sessionStorage`.
- Si un projet ne se charge pas, verifier le `slug` et la coherence FR/EN.
- En cas d'erreur de build, lancer `npm run lint` puis `npm run test:run`.
