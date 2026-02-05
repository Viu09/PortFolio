# Tests

## Outils
- Vitest
- React Testing Library
- @testing-library/jest-dom

## Execution
```
npm run test
npm run test:run
```

## Rapport d'execution
- Le script `menu.sh` genere `tests/TEST_REPORT.md` apres les tests.
- Le log brut est conserve dans `tests/test-output.log`.

## Organisation
- Les tests sont dans `tests/`.
- Les fichiers suivent le pattern `*.test.js` ou `*.test.jsx`.

## Bonnes pratiques
- Tester le comportement plutot que l'implementation.
- Garder des tests courts et lisibles.
- Mettre a jour `docs/fr/TEST_REPORT.md` et `docs/en/TEST_REPORT.md` si la couverture change.
