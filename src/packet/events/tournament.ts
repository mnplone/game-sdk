import {
	array,
	literal,
	number,
	object,
	optional,
	pipe,
	string,
	transform,
} from 'valibot';
// import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	object({
		id: string(),
		type: literal('tournament.drop'),
		user_ids: array(number()),
	}),
];

export const enrichments = {};

export const valiV1Schemas = [
	pipe(
		object({
			_id: optional(string()),
			type: literal('tournament_drop'),
			user_id: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'tournament.drop' as const,
				user_ids: [value.user_id],
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('tournament_drop_multi'),
			user_ids: array(number()),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'tournament.drop' as const,
				user_ids: value.user_ids,
			};
		}),
	),
];
