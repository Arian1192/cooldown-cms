export default {
  routes: [
    {
      method: 'GET',
      path: '/weekly-discover-feed',
      handler: 'public-weekly-discover.list',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/weekly-discover-feed/:slug',
      handler: 'public-weekly-discover.bySlug',
      config: {
        auth: false,
      },
    },
  ],
};
