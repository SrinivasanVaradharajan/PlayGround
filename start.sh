#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
/usr/bin/time -p pwd
/usr/bin/time -p test -f index.html
: "${PORT:=3000}"
/usr/bin/time -p test -n "$PORT"
/usr/bin/time -p node "${RUNTIME_DIR:?}/scripts/default-start.mjs"
