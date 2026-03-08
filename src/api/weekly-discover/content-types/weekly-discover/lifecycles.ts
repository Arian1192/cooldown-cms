const UID = 'api::weekly-discover.weekly-discover';

function isEpisodeMissing(value: unknown): boolean {
  return value === undefined || value === null || value === '';
}

function shouldRegenerateSlug(slug: unknown): boolean {
  if (!slug || String(slug).trim() === '') {
    return true;
  }

  const normalized = String(slug).toLowerCase();
  return normalized.includes('undefined') || normalized.includes('null');
}

async function getNextEpisode(strapi: any): Promise<number> {
  const latest = await strapi.db.query(UID).findMany({
    select: ['episode'],
    orderBy: { episode: 'desc' },
    limit: 1,
  });

  const lastEpisode =
    Array.isArray(latest) && latest[0]?.episode ? Number(latest[0].episode) : 0;
  return lastEpisode + 1;
}

export default {
  async beforeCreate(event: any) {
    const data = event.params?.data ?? {};

    // If episode is missing, assign the next available number automatically.
    if (isEpisodeMissing(data.episode)) {
      data.episode = await getNextEpisode(strapi);
    }

    // Keep slug predictable if it is not provided by the caller.
    if (shouldRegenerateSlug(data.slug)) {
      data.slug = `discover-${data.episode}`;
    }

    event.params.data = data;
  },

  async beforeUpdate(event: any) {
    const data = event.params?.data ?? {};
    const where = event.params?.where;

    // Only apply auto-increment on publish-like updates.
    const isPublishing =
      data.publishedAt !== undefined ||
      data.status === 'published' ||
      data.status === 'publish';

    if (!isPublishing || !isEpisodeMissing(data.episode)) {
      return;
    }

    // Keep existing episode when present on the stored entry.
    if (where) {
      const current = await strapi.db.query(UID).findOne({
        where,
        select: ['episode'],
      });

      if (current && !isEpisodeMissing(current.episode)) {
        return;
      }
    }

    data.episode = await getNextEpisode(strapi);
    event.params.data = data;
  },
};
