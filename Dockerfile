FROM node:22-alpine

RUN apk add --no-cache python3 make g++ vips-dev

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

ENV NODE_ENV=production

EXPOSE 1337

CMD ["npm", "run", "start"]
