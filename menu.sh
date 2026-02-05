#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEST_REPORT="$ROOT_DIR/tests/TEST_REPORT.md"
TEST_LOG="$ROOT_DIR/tests/test-output.log"
DOC_REPORT_FR="$ROOT_DIR/docs/fr/TEST_REPORT.md"
DOC_REPORT_EN="$ROOT_DIR/docs/en/TEST_REPORT.md"

run_tests() {
  mkdir -p "$ROOT_DIR/tests"

  local status=0
  NO_COLOR=1 FORCE_COLOR=0 npm run test:run 2>&1 | tee "$TEST_LOG" || status=$?

  local timestamp
  timestamp="$(date +"%Y-%m-%d %H:%M:%S")"

  local suites_line tests_line
  suites_line="$(grep -m1 "^ *Test Files" "$TEST_LOG" || true)"
  tests_line="$(grep -m1 "^ *Tests" "$TEST_LOG" || true)"

  local suites_summary tests_summary
  suites_summary="${suites_line#*Test Files }"
  tests_summary="${tests_line#*Tests }"

  local status_fr status_en
  if [ "$status" -eq 0 ]; then
    status_fr="SUCCES"
    status_en="SUCCESS"
  else
    status_fr="ECHEC"
    status_en="FAILURE"
  fi

  cat > "$TEST_REPORT" <<REPORT
# Rapport de tests / Test Report

## Francais
- Date: $timestamp
- Commande: \`npm run test:run\`
- Statut: $status_fr
- Resume suites: ${suites_summary:-"n/a"}
- Resume tests: ${tests_summary:-"n/a"}
- Log brut: \`tests/test-output.log\`

## English
- Date: $timestamp
- Command: \`npm run test:run\`
- Status: $status_en
- Suites summary: ${suites_summary:-"n/a"}
- Tests summary: ${tests_summary:-"n/a"}
- Raw log: \`tests/test-output.log\`

---
REPORT

  if [[ -f "$DOC_REPORT_FR" ]]; then
    echo "" >> "$TEST_REPORT"
    cat "$DOC_REPORT_FR" >> "$TEST_REPORT"
  else
    cat >> "$TEST_REPORT" <<REPORT
Aucun rapport detaille FR trouve dans \`docs/fr/TEST_REPORT.md\`.
REPORT
  fi

  if [[ -f "$DOC_REPORT_EN" ]]; then
    echo "" >> "$TEST_REPORT"
    cat "$DOC_REPORT_EN" >> "$TEST_REPORT"
  else
    cat >> "$TEST_REPORT" <<REPORT
No EN detailed report found in \`docs/en/TEST_REPORT.md\`.
REPORT
  fi

  return $status
}

while true; do
  echo ""
  echo "==== Menu ===="
  echo "1) Lancer le programme (dev)"
  echo "2) Lancer les tests"
  echo "3) Quitter"
  echo ""
  read -r -p "> " choice

  case "$choice" in
    1)
      npm run dev
      ;;
    2)
      run_tests
      ;;
    3)
      exit 0
      ;;
    *)
      echo "Choix invalide. Merci de saisir 1, 2 ou 3."
      ;;
  esac
done
