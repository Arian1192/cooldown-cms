# Contributing — Cooldown CMS (Strapi)

## Branch Strategy

```
main      ← single source of truth (PR-only)
          ← production deploys to VPS on push
```

### Rules

| Action | How |
|---|---|
| **New feature / fix** | Branch from `main` → PR to `main` |
| **Deploy to production** | Merge PR to `main` (triggers GitHub Actions auto-deploy) |
| **Hotfix** | Branch from `main` → PR to `main` |

**Never push directly to `main`.**

## AI Agent Guidelines

When working on this repo:

1. Always start from `main`: `git checkout main && git pull`
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make your changes and commit
4. Push and open a PR to `main`
5. Merge after checks pass and review is complete

## Local Development

```bash
cp .env.example .env      # fill in secrets
npm install
npm run develop
```

## Production Deployment

Automatic via GitHub Actions on push to `main`. Manual:

```bash
ssh your-vps
cd /path/to/cooldown-cms
./scripts/deploy.sh
```

## Environment Variables

See `.env.production.example` for all required variables.

### GitHub Repo Secrets (for CI/CD)

| Secret | Description |
|---|---|
| `VPS_HOST` | VPS IP or hostname |
| `VPS_USER` | SSH user on VPS |
| `VPS_SSH_KEY` | Private SSH key for deploy |
| `VPS_DEPLOY_PATH` | Absolute path to repo on VPS |
