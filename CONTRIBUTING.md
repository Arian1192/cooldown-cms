# Contributing — Cooldown CMS (Strapi)

## Branch Strategy

```
main      ← production (auto-deploys to VPS on push)
develop   ← development (working branch)
```

### Rules

| Action | How |
|---|---|
| **New feature / fix** | Branch from `develop` → PR to `develop` |
| **Deploy to production** | PR from `develop` → `main` (triggers GitHub Actions auto-deploy) |
| **Hotfix** | Branch from `main` → PR to `main` + cherry-pick to `develop` |

**Never push directly to `main`.**

## AI Agent Guidelines

When working on this repo:

1. Always start from `develop`: `git checkout develop && git pull`
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make your changes and commit
4. Push and open a PR to `develop`
5. Only merge `develop → main` when ready to deploy

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
