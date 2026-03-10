import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  i18n: {
    enabled: true,
    config: {
      defaultLocale: env('I18N_DEFAULT_LOCALE', 'es'),
      locales: ['es', 'en'],
    },
  },
});

export default config;
