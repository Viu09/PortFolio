# Developer Documentation

## Purpose
This document explains how to install, run, and maintain the portfolio over time.

## Prerequisites
- Node.js 18 or later
- npm 9 or later

## Install
```
npm install
```

## Useful commands
- `npm run dev` : start the dev server
- `npm run build` : build for production
- `npm run start` : run the production build
- `npm run lint` : run lint checks
- `npm run test` : run tests in watch mode
- `npm run test:run` : run tests once

## Project structure
- `app/` : pages, components, and sections
- `app/sections/` : modular homepage blocks
- `app/components/` : reusable UI pieces
- `app/lib/` : pure utilities
- `app/content.js` : all FR/EN copy and project data
- `docs/` : documentation
- `tests/` : unit tests

## Content management
All displayable text is centralized in `app/content.js`.
- Update FR and EN in parallel.
- Project `slug` values must be unique and identical across languages.

## Add a project
1. Add a project object in `content.fr.projects.groups`.
2. Mirror it in `content.en.projects.groups` with the same `slug`.
3. Choose a `visual` supported by `ProjectVisual`.
4. Add a repository `link` if needed.

## Add a skill
1. Update `content.*.skills.groups`.
2. Add an icon in `app/components/SkillIcon.jsx` if needed.

## Add a project visual
1. Open `app/components/ProjectVisual.jsx`.
2. Add a new SVG to `visualMap`.
3. Use the key in `project.visual`.

## Professional conventions
- Avoid hardcoded text in components.
- Prefer pure sections when possible.
- Put reusable logic into `app/lib/`.
- Add tests for critical or reused behavior.

## Troubleshooting
- If language does not update, check `sessionStorage`.
- If a project page fails, verify `slug` and FR/EN alignment.
- If build fails, run `npm run lint` then `npm run test:run`.
