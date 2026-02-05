# Architecture

## Goals
- Centralize all bilingual content.
- Keep the homepage modular and evolvable.
- Make project pages fully data-driven.

## Overview
- Framework: Next.js App Router
- Main page: `app/page.jsx`
- Project pages: `app/projects/[slug]/page.jsx`
- Data source: `app/content.js`

## Main modules
- `app/sections/` for homepage blocks
- `app/components/` for reusable components
- `app/lib/` for lookup and transformation logic
- `app/hooks/` for language persistence

## Data flow
1. `useLang` resolves the active language.
2. `content[lang]` is passed to sections.
3. Sections render from props only.
4. Project pages use `findProject` and `flattenProjects`.

## State management
- Minimal global state: language in sessionStorage.
- Local state: active section for nav highlight.

## Routing
- Anchor navigation on the homepage.
- Dynamic route `/projects/[slug]` for details.

## Styling
- Global styles in `app/globals.css`.
- Components rely on stable class names.

## Extensibility
- Add a section: create a component in `app/sections/` and render it in `app/page.jsx`.
- Add a project: edit `app/content.js` only.
- Add a visual: edit `ProjectVisual`.

## Tradeoffs
- Centralized content is fast to edit but requires FR/EN discipline.
- Minimal global state keeps code simple but no shared store.
