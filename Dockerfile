# ── Stage 1: Build ───────────────────────────────────────────────────────────
FROM node:22-alpine AS build

RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ── Stage 2: Production ─────────────────────────────────────────────────────
FROM node:22-alpine AS production

RUN apk add --no-cache vips-dev

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY --from=build /app/dist ./dist
COPY --from=build /app/build ./build
COPY ./config ./config
COPY ./public ./public
COPY ./database ./database

EXPOSE 1337

CMD ["npm", "run", "start"]
