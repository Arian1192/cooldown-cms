#!/usr/bin/env bash
# deploy.sh — Pull latest code and rebuild containers.
# Usage: ./scripts/deploy.sh [service]
#   Without arguments: rebuilds everything.
#   With argument:      rebuilds only that service (e.g. "strapi").

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

echo "▸ Pulling latest changes…"
git pull --ff-only

if [ $# -gt 0 ]; then
  echo "▸ Rebuilding service: $1"
  docker compose up -d --build "$1"
else
  echo "▸ Rebuilding all services…"
  docker compose up -d --build
fi

echo "▸ Cleaning old images…"
docker image prune -f

echo "✓ Deploy complete"
docker compose ps
