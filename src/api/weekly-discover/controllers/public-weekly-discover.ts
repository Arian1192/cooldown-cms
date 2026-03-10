import type { Core } from '@strapi/strapi';

const uid = 'api::weekly-discover.weekly-discover';

function toPublicPayload(entry: any) {
  const attrs = entry.attributes ?? entry;

  return {
    slug: attrs.slug,
    title: attrs.title,
    excerpt: attrs.excerpt,
    date: attrs.date,
    city: attrs.city,
    tags: Array.isArray(attrs.tags) ? attrs.tags : [],
    coverImageSrc: attrs.coverImageSrc ?? '/placeholders/urban-cover.svg',
    coverImageAlt: attrs.coverImageAlt ?? attrs.title,
    episode: attrs.episode,
    trackArtist: attrs.trackArtist,
    trackLabel: attrs.trackLabel,
    trackReleaseDate: attrs.trackReleaseDate,
    bpm: attrs.bpm,
    musicalKey: attrs.musicalKey,
    rating: attrs.rating,
    verdict: attrs.verdict,
    technicalBite: attrs.technicalBite,
    moodScenario: attrs.moodScenario,
    energyLevel: attrs.energyLevel,
    setMoment: attrs.setMoment,
    embedUrl: attrs.embedUrl,
    locale: attrs.locale,
  };
}

function readLocale(query: Record<string, unknown>) {
  const locale = typeof query.locale === 'string' ? query.locale.trim() : '';
  return locale.length > 0 ? locale : 'es';
}

export default {
  async list(ctx: any) {
    const locale = readLocale(ctx.query ?? {});

    const rows = await strapi.db.query(uid).findMany({
      where: { locale },
      orderBy: { episode: 'asc' },
    });

    ctx.body = {
      data: rows.map(toPublicPayload),
    };
  },

  async bySlug(ctx: any) {
    const { slug } = ctx.params;

    if (!slug) {
      return ctx.badRequest('Missing slug');
    }

    const locale = readLocale(ctx.query ?? {});

    const row = await strapi.db.query(uid).findOne({
      where: { slug, locale },
    });

    if (!row) {
      return ctx.notFound('Weekly discover entry not found');
    }

    ctx.body = {
      data: toPublicPayload(row),
    };
  },
} as Core.Controller;
