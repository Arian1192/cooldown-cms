# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>

## Docker deployment (Strapi + Umami + Cloudflare Tunnel)

This repository includes a `docker-compose.yml` with:

- `postgres` (databases: `strapi`, `umami`)
- `strapi`
- `umami`
- `cloudflared` (named tunnel using token auth)

### 1) Configure environment

Copy and fill production env vars:

```bash
cp .env.production.example .env
```

Required for Umami public access:

- `UMAMI_APP_SECRET`
- `CLOUDFLARED_TUNNEL_TOKEN`

### 2) Start services

```bash
docker compose up -d --build
```

### 3) Verify tunnel and Umami

```bash
docker compose ps
docker compose logs -f cloudflared
curl -I http://127.0.0.1:${UMAMI_PORT:-3002}
```

If tunnel DNS is configured to your named tunnel in Cloudflare Zero Trust, your public analytics domain should now resolve to `umami:3000` through `cloudflared`.

## Quality checks

Before opening a PR, run:

```bash
npm run check:toolchain
npm run typecheck
npm run build
```

Quality workflow: `.github/workflows/quality.yml`
