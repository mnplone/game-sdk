import * as v from 'valibot';
// import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('tournament.drop'),
		user_ids: v.array(v.number()),
	}),
];

export const enrichments = {};

export const valiV1Schemas = [
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('tournament_drop'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'tournament.drop' as const,
				user_ids: [value.user_id],
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('tournament_drop_multi'),
			user_ids: v.array(v.number()),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'tournament.drop' as const,
				user_ids: value.user_ids,
			};
		}),
	),
];
