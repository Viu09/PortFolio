# Detailed Test Report

This document describes the test coverage. It does not replace the execution report in `tests/TEST_REPORT.md`.

## `tests/useLang.test.jsx`
1. Falls back to the default language when the param is invalid.
2. Uses the param language when storage is empty.
3. Honors stored language even when the param differs.
4. Persists the selection in `sessionStorage`.
5. Updates `document.documentElement.lang`.

## `tests/projects.test.js` - findProject
1. Finds a project by slug.
2. Returns `null` for unknown slugs.
3. Returns the correct group for the project.
4. Works with English content.
5. Finds a project in later groups.

## `tests/projects.test.js` - flattenProjects
1. Returns the expected total number of projects.
2. Adds `groupTitle` to each item.
3. Preserves the original ordering.
4. Returns new objects (no direct references).
5. Ensures slug uniqueness.

## `tests/LanguageToggle.test.jsx`
1. Renders a `switch` control.
2. Switches to `en` when current language is `fr`.
3. Switches to `fr` when current language is `en`.
4. Applies `is-fr` or `is-en` classes.
5. Marks a single flag as active.

## `tests/SkillIcon.test.jsx`
1. Renders an SVG for known skills.
2. Renders a text fallback for unknown skills.
3. Uses the label for fallback initials.
4. Uses the name when the label is missing.
5. Shows `?` when no data is provided.

## `tests/ProjectVisual.test.jsx`
1. Renders the `.card-visual` wrapper.
2. Renders a default visual for unknown types.
3. Renders a known visual when the type exists.
4. Applies a custom `className`.
5. Renders even when no type is provided.

## `tests/NavBar.test.jsx`
1. Renders the profile name.
2. Renders all nav items.
3. Highlights the active section.
4. Calls `onSectionChange` on click.
5. Renders the language toggle.

## `tests/SectionHeader.test.jsx`
1. Renders the title.
2. Renders the kicker when provided.
3. Does not render a kicker when omitted.
4. Does not render a kicker when empty.
5. Renders the `.section-header` container.

## `tests/AmbientBackground.test.jsx`
1. Renders the `.ambient` container.
2. Renders the three orb layers.
3. Renders the grid layer.
4. Marks the container as `aria-hidden`.
5. Contains exactly four spans.

## `tests/HeroSection.test.jsx`
1. Renders the name and role.
2. Renders the tagline.
3. Renders CTA links with correct `href`.
4. Renders the correct number of stats.
5. Renders the panel texts.

## `tests/AboutSection.test.jsx`
1. Renders the `#about` section.
2. Renders the kicker.
3. Renders the title.
4. Renders the body text.
5. Renders a `.copy-card`.

## `tests/ProjectsSection.test.jsx`
1. Renders the `#projects` section.
2. Renders all group titles.
3. Renders one card per project.
4. Builds the project link with the `lang` param.
5. Renders one visual per project.

## `tests/SkillsSection.test.jsx`
1. Renders the `#skills` section.
2. Renders group titles.
3. Renders the description text.
4. Renders one pill per skill.
5. Renders skill icons.

## `tests/ServicesSection.test.jsx`
1. Renders the `#services` section.
2. Renders the kicker and title.
3. Renders one card per service.
4. Renders service titles.
5. Renders service descriptions.

## `tests/ContactSection.test.jsx`
1. Renders the `#contact` section.
2. Renders the kicker and title.
3. Renders the body text.
4. Renders the email link with `mailto:`.
5. Renders GitHub and LinkedIn links.

## `tests/ProjectPage.test.jsx`
1. Shows the not-found state for unknown slugs.
2. Shows the project title for a valid slug.
3. Renders the back link to `/#projects`.
4. Shows at least one stack tag.
5. Renders the video placeholder.

## `tests/HomePage.test.jsx`
1. Renders the navigation links.
2. Renders the hero title (h1).
3. Renders the About section title.
4. Renders at least one project.
5. Renders the email link.

## `tests/RootLayout.test.jsx`
1. Renders the `<html>` element.
2. Sets `lang="fr"`.
3. Renders `<body>`.
4. Renders children content.
5. Renders a single `<body>`.
