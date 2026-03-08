import { factories } from '@strapi/strapi';

const UID = 'api::weekly-discover.weekly-discover';

function isEpisodeMissing(value: unknown): boolean {
	if (value === undefined || value === null || value === '') {
		return true;
	}

	const numericValue = Number(value);
	return !Number.isFinite(numericValue);
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

export default factories.createCoreController(UID, ({ strapi }) => ({
	async create(ctx) {
		const body = (ctx.request.body ?? {}) as Record<string, any>;
		const data = (body.data ?? {}) as Record<string, any>;

		if (isEpisodeMissing(data.episode)) {
			data.episode = await getNextEpisode(strapi);
		}

		if (shouldRegenerateSlug(data.slug)) {
			data.slug = `discover-${data.episode}`;
		}

		body.data = data;
		ctx.request.body = body;

		return await super.create(ctx);
	},
}));
