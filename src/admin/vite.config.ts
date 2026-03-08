import { mergeConfig } from 'vite';

export default (config: any) =>
  mergeConfig(config, {
    server: {
      allowedHosts: ['cms-dev-cooldown-roan.ariancoro.com'],
    },
  });
