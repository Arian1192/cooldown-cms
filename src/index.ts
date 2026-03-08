import type { Core } from '@strapi/strapi';

const weeklySeed = [
  {
    slug: 'discover-1',
    title: 'Adam Beyer - Your Mind',
    excerpt:
      'El track con el que Beyer consolidó su dominio del peak time en los 2010. Drumcode en estado puro.',
    date: '2026-03-03',
    city: 'barcelona',
    tags: ['techno', 'peak-time'],
    coverImageSrc: '/placeholders/urban-cover.svg',
    coverImageAlt: 'Adam Beyer - Your Mind',
    episode: 1,
    trackArtist: 'Adam Beyer',
    trackLabel: 'Drumcode',
    trackReleaseDate: 'Nov 2017',
    bpm: 140,
    musicalKey: 'A Minor',
    rating: 4,
    verdict:
      'Una maquina de peak time precisa y sin concesiones. Predecible en estructura, devastador en club.',
    technicalBite:
      'Bombo saturado en low-mids, snare de decay ultracorto y subgrave limpio por debajo de 80Hz.',
    moodScenario:
      'Las 2am en cabina, pista en trance y sistema de PA empujado al limite.',
    energyLevel: 5,
    setMoment: 'peak-time',
    embedUrl: 'https://open.spotify.com/track/1WsHKAuN9vDthcmimdqqaY',
  },
  {
    slug: 'discover-2',
    title: 'Ben Klock - Subzero',
    excerpt:
      'Una referencia absoluta del sonido Berghain: minimalismo denso con diseno de frecuencias quirurgico.',
    date: '2026-02-24',
    city: 'barcelona',
    tags: ['techno', 'minimal'],
    coverImageSrc: '/placeholders/urban-cover.svg',
    coverImageAlt: 'Ben Klock - Subzero',
    episode: 2,
    trackArtist: 'Ben Klock',
    trackLabel: 'Ostgut Ton',
    trackReleaseDate: 'May 2009',
    bpm: 135,
    musicalKey: 'B Minor',
    rating: 5,
    verdict:
      'Una pieza maestra que mantiene tension con recursos minimos y una identidad sonora inconfundible.',
    technicalBite:
      'Arquitectura espectral contenida en graves, pad con micromodulacion lenta y control dinamico impecable.',
    moodScenario:
      'Domingo 7am, set largo, luces bajas: este track ordena la sala sin levantar la voz.',
    energyLevel: 3,
    setMoment: 'closing',
    embedUrl: 'https://open.spotify.com/track/0SSZR0TTrvDttPqiBQZkig',
  },
  {
    slug: 'discover-3',
    title: 'Amelie Lens - Follow',
    excerpt:
      'Groove hipnotico y produccion contemporanea en un track de economia extrema y pegada constante.',
    date: '2026-02-17',
    city: 'madrid',
    tags: ['techno', 'groove'],
    coverImageSrc: '/placeholders/urban-cover.svg',
    coverImageAlt: 'Amelie Lens - Follow',
    episode: 3,
    trackArtist: 'Amelie Lens',
    trackLabel: 'Lenske Records',
    trackReleaseDate: 'Feb 2020',
    bpm: 130,
    musicalKey: 'G Minor',
    rating: 4,
    verdict:
      'Cuatro elementos bien elegidos, cero relleno. Funciona perfecto en mezcla y sostiene tension continua.',
    technicalBite:
      'Bassline con cutoff micromodulado, snare con ruido blanco corto y bus master compacto para PA.',
    moodScenario:
      'Primera noche en una ciudad nueva: entras al club sin plan y no sales de la pista.',
    energyLevel: 4,
    setMoment: 'peak-time',
    embedUrl: 'https://open.spotify.com/track/5UsfWcP6SThHlZ4oAgx7ge',
  },
];

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const uid = 'api::weekly-discover.weekly-discover';

    const count = await strapi.db.query(uid).count();
    if (count > 0) {
      return;
    }

    for (const row of weeklySeed) {
      await strapi.db.query(uid).create({ data: row });
    }
  },
};
