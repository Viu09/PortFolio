# Testing

## Tooling
- Vitest
- React Testing Library
- @testing-library/jest-dom

## Run
```
npm run test
npm run test:run
```

## Execution report
- The `menu.sh` script generates `tests/TEST_REPORT.md` after tests.
- The raw log is stored in `tests/test-output.log`.

## Organization
- Tests live in `tests/`.
- Files follow `*.test.js` or `*.test.jsx`.

## Best practices
- Test behavior instead of implementation details.
- Keep tests short and readable.
- Update `docs/fr/TEST_REPORT.md` and `docs/en/TEST_REPORT.md` when coverage changes.
