# Rapport de tests detaille

Ce document decrit la couverture des tests. Il ne remplace pas le rapport d'execution dans `tests/TEST_REPORT.md`.

## `tests/useLang.test.jsx`
1. Fallback sur la langue par defaut si le parametre est invalide.
2. Utilise la langue du parametre si aucun stockage n'est defini.
3. Respecte la langue stockee meme si le parametre differe.
4. Persistente la selection dans `sessionStorage`.
5. Met a jour `document.documentElement.lang`.

## `tests/projects.test.js` - findProject
1. Trouve un projet a partir de son slug.
2. Retourne `null` pour un slug inconnu.
3. Retourne le bon groupe du projet.
4. Fonctionne avec la copie anglaise.
5. Trouve un projet place dans un groupe tardif.

## `tests/projects.test.js` - flattenProjects
1. Retourne le nombre total de projets attendu.
2. Ajoute `groupTitle` a chaque element.
3. Preserve l'ordre d'origine des projets.
4. Retourne de nouveaux objets (pas de references directes).
5. Garantit l'unicite des slugs.

## `tests/LanguageToggle.test.jsx`
1. Rend un controle `switch`.
2. Bascule vers `en` si la langue courante est `fr`.
3. Bascule vers `fr` si la langue courante est `en`.
4. Applique la classe `is-fr` ou `is-en`.
5. Marque un seul drapeau comme actif.

## `tests/SkillIcon.test.jsx`
1. Rend un SVG pour une competence connue.
2. Rend un fallback texte pour une competence inconnue.
3. Utilise le label pour les initiales fallback.
4. Utilise le nom si le label est absent.
5. Affiche `?` si aucune donnee n'est fournie.

## `tests/ProjectVisual.test.jsx`
1. Rend le conteneur `.card-visual`.
2. Rend un visuel par defaut si le type est inconnu.
3. Rend un visuel connu si le type existe.
4. Applique un `className` personnalise.
5. Rend un visuel meme sans type fourni.

## `tests/NavBar.test.jsx`
1. Rend le nom du profil.
2. Rend tous les liens de navigation.
3. Met en surbrillance la section active.
4. Declenche `onSectionChange` au clic.
5. Rend le toggle de langue.

## `tests/SectionHeader.test.jsx`
1. Rend le titre.
2. Rend le kicker s'il est fourni.
3. N'affiche pas de kicker si omis.
4. N'affiche pas de kicker si vide.
5. Rend le conteneur `.section-header`.

## `tests/AmbientBackground.test.jsx`
1. Rend le conteneur `.ambient`.
2. Rend les 3 orbes decoratives.
3. Rend la grille.
4. Marque l'ensemble en `aria-hidden`.
5. Contient exactement 4 spans decoratifs.

## `tests/HeroSection.test.jsx`
1. Rend le nom et le role.
2. Rend la tagline.
3. Rend les liens CTA avec les bons `href`.
4. Rend le bon nombre de stats.
5. Rend les textes du panneau.

## `tests/AboutSection.test.jsx`
1. Rend la section `#about`.
2. Rend le kicker.
3. Rend le titre.
4. Rend le texte.
5. Rend une carte `.copy-card`.

## `tests/ProjectsSection.test.jsx`
1. Rend la section `#projects`.
2. Rend tous les titres de groupes.
3. Rend une carte par projet.
4. Construit le lien projet avec `lang`.
5. Rend un visuel par projet.

## `tests/SkillsSection.test.jsx`
1. Rend la section `#skills`.
2. Rend les titres de groupes.
3. Rend le texte de description.
4. Rend un badge par competence.
5. Rend les icones de competence.

## `tests/ServicesSection.test.jsx`
1. Rend la section `#services`.
2. Rend le kicker et le titre.
3. Rend une carte par service.
4. Rend les titres de service.
5. Rend les descriptions de service.

## `tests/ContactSection.test.jsx`
1. Rend la section `#contact`.
2. Rend le kicker et le titre.
3. Rend le texte.
4. Rend le lien email avec `mailto:`.
5. Rend les liens GitHub et LinkedIn.

## `tests/ProjectPage.test.jsx`
1. Affiche l'etat introuvable pour un slug invalide.
2. Affiche le titre pour un slug valide.
3. Rend le lien retour vers `/#projects`.
4. Affiche au moins un tag de stack.
5. Rend le placeholder video.

## `tests/HomePage.test.jsx`
1. Rend les liens de navigation.
2. Rend le titre hero (h1).
3. Rend le titre de la section A propos.
4. Rend au moins un projet.
5. Rend le lien email.

## `tests/RootLayout.test.jsx`
1. Rend l'element `<html>`.
2. Defini `lang="fr"`.
3. Rend `<body>`.
4. Rend les enfants.
5. Rend un seul `<body>`.
