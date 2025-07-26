import * as v from 'valibot';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('russian-roulette'),
		user_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('russian-roulette.play'),
		user_id: v.number(),
		bullets_count: v.number(),
		reward_amount: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('russian-roulette.survive'),
		user_id: v.number(),
		reward_amount: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('russian-roulette.die'),
		user_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('russian-roulette.reject'),
		user_id: v.number(),
	}),
];

export const enrichments = {
	'russian-roulette.survive'(
		options: EventEnrichOptions<'russian-roulette.survive'>,
	) {
		const player = options.status.players.get(options.event.user_id)!;
		player.cash += options.event.reward_amount;
	},
};

export const valiV1Schemas = [
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('russianRoulette'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'russian-roulette' as const,
				user_id: value.user_id,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('russianRoulette_process'),
			user_id: v.number(),
			bullets: v.number(),
			reward: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'russian-roulette.play' as const,
				user_id: value.user_id,
				bullets_count: value.bullets,
				reward_amount: value.reward,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('russianRoulette_alive'),
			user_id: v.number(),
			sum: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'russian-roulette.survive' as const,
				user_id: value.user_id,
				reward_amount: value.sum,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('russianRoulette_died'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'russian-roulette.die' as const,
				user_id: value.user_id,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('russianRoulette_declined'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'russian-roulette.reject' as const,
				user_id: value.user_id,
			};
		}),
	),
];
