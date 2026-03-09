import type { Core } from '@strapi/strapi';

function normalizeUrl(value: string): string {
  return value.replace(/\/$/, '');
}

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Server => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: normalizeUrl(env('STRAPI_URL', 'http://127.0.0.1:1337')),
  app: {
    keys: env.array('APP_KEYS'),
  },
});

export default config;
