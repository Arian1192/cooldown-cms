import type { Core } from '@strapi/strapi';

function readEnv(name: string): string | undefined {
  const value = process.env[name];
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : undefined;
}

function requireEnv(name: string): void {
  if (!readEnv(name)) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
}

function validateCriticalEnv(): void {
  const requiredAlways = [
    'APP_KEYS',
    'API_TOKEN_SALT',
    'ADMIN_JWT_SECRET',
    'TRANSFER_TOKEN_SALT',
    'JWT_SECRET',
    'ENCRYPTION_KEY',
  ];

  for (const key of requiredAlways) {
    requireEnv(key);
  }

  if (process.env.NODE_ENV === 'production') {
    requireEnv('STRAPI_URL');
    requireEnv('SITE_URL');
  }
}

type WeeklySeedEntry = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  city: 'barcelona' | 'madrid';
  tags: string[];
  coverImageSrc: string;
  coverImageAlt: string;
  episode: number;
  trackArtist: string;
  trackLabel: string;
  trackReleaseDate: string;
  bpm: number;
  musicalKey: string;
  rating: number;
  verdict: string;
  technicalBite: string;
  moodScenario: string;
  energyLevel: number;
  setMoment: 'warm-up' | 'peak-time' | 'closing' | 'after-hours';
  embedUrl: string;
};

const weeklySeedEs: WeeklySeedEntry[] = [
  {
    slug: 'discover-1',
    title: 'Adam Beyer - Your Mind',
    excerpt:
      'El track con el que Beyer consolido su dominio del peak time en los 2010. Drumcode en estado puro.',
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
    moodScenario: 'Las 2am en cabina, pista en trance y sistema de PA empujado al limite.',
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
  {
    slug: 'discover-4',
    title: 'ANNA - Hidden Beauties',
    excerpt:
      'Techno melodico con textura oscura y progresion sostenida. Construccion precisa para sets largos.',
    date: '2026-02-10',
    city: 'madrid',
    tags: ['techno', 'melodic'],
    coverImageSrc: '/placeholders/urban-cover.svg',
    coverImageAlt: 'ANNA - Hidden Beauties',
    episode: 4,
    trackArtist: 'ANNA',
    trackLabel: 'Afterlife',
    trackReleaseDate: 'Jan 2024',
    bpm: 128,
    musicalKey: 'F Minor',
    rating: 4,
    verdict:
      'Track de tension constante que funciona tanto en warm-up avanzado como en subida a peak-time.',
    technicalBite:
      'Capas de sintes con automation lenta, percusion seca y low-end controlado para PA grande.',
    moodScenario:
      'Primera hora fuerte de la noche: sala llena, luces bajas y foco total en la narrativa del set.',
    energyLevel: 4,
    setMoment: 'warm-up',
    embedUrl: 'https://open.spotify.com/track/6fpkN3e2QfCj8fP2xg5nbI',
  },
];

const weeklySeedEn: WeeklySeedEntry[] = [
  {
    slug: 'discover-1',
    title: 'Adam Beyer - Your Mind',
    excerpt:
      'The track where Beyer cemented his peak-time dominance in the 2010s. Pure Drumcode energy.',
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
      'A precise, no-compromise peak-time machine. Predictable in structure, devastating in the club.',
    technicalBite:
      'Saturated kick in the low-mids, ultra-short snare decay, and clean sub-bass below 80Hz.',
    moodScenario: '2am in the booth, crowd in trance, and the PA system pushed hard.',
    energyLevel: 5,
    setMoment: 'peak-time',
    embedUrl: 'https://open.spotify.com/track/1WsHKAuN9vDthcmimdqqaY',
  },
  {
    slug: 'discover-2',
    title: 'Ben Klock - Subzero',
    excerpt:
      'A definitive Berghain reference: dense minimalism with surgical frequency design.',
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
      'A masterwork that sustains tension with minimal tools and unmistakable sonic identity.',
    technicalBite:
      'Controlled low-end spectral architecture, slowly micro-modulated pads, and tight dynamics.',
    moodScenario: 'Sunday 7am, long set, low lights: this track organizes the room effortlessly.',
    energyLevel: 3,
    setMoment: 'closing',
    embedUrl: 'https://open.spotify.com/track/0SSZR0TTrvDttPqiBQZkig',
  },
  {
    slug: 'discover-3',
    title: 'Amelie Lens - Follow',
    excerpt:
      'Hypnotic groove and contemporary production in a track with extreme economy and constant punch.',
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
      'Four well-chosen elements, zero filler. Mixes perfectly and maintains steady pressure.',
    technicalBite:
      'Bassline with micro-modulated cutoff, short white-noise snare, and compact master bus for PA.',
    moodScenario:
      'First night in a new city: you enter the club without a plan and never leave the dance floor.',
    energyLevel: 4,
    setMoment: 'peak-time',
    embedUrl: 'https://open.spotify.com/track/5UsfWcP6SThHlZ4oAgx7ge',
  },
  {
    slug: 'discover-4',
    title: 'ANNA - Hidden Beauties',
    excerpt:
      'Melodic techno with dark texture and sustained progression. Precise construction for long sets.',
    date: '2026-02-10',
    city: 'madrid',
    tags: ['techno', 'melodic'],
    coverImageSrc: '/placeholders/urban-cover.svg',
    coverImageAlt: 'ANNA - Hidden Beauties',
    episode: 4,
    trackArtist: 'ANNA',
    trackLabel: 'Afterlife',
    trackReleaseDate: 'Jan 2024',
    bpm: 128,
    musicalKey: 'F Minor',
    rating: 4,
    verdict:
      'A steadily tense track that works in late warm-up and in the climb toward peak-time.',
    technicalBite:
      'Layered synths with slow automation, dry percussion, and controlled low-end for large PA systems.',
    moodScenario:
      'First strong hour of the night: packed room, low lights, and full focus on set storytelling.',
    energyLevel: 4,
    setMoment: 'warm-up',
    embedUrl: 'https://open.spotify.com/track/6fpkN3e2QfCj8fP2xg5nbI',
  },
];

const weeklySeedByLocale = {
  es: weeklySeedEs,
  en: weeklySeedEn,
} as const;

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {
    validateCriticalEnv();
  },

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const uid = 'api::weekly-discover.weekly-discover';

    for (const locale of ['es', 'en'] as const) {
      for (const row of weeklySeedByLocale[locale]) {
        const existing = await strapi.db.query(uid).findOne({
          where: { slug: row.slug, locale },
        });

        if (existing) {
          continue;
        }

        await strapi.db.query(uid).create({
          data: {
            ...row,
            locale,
          },
        });
      }
    }
  },
};
