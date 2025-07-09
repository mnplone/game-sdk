import {
	literal,
	number,
	object,
	optional,
	pipe,
	string,
	transform,
} from 'valibot';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	object({
		id: string(),
		type: literal('start.income'),
		user_id: number(),
	}),
	object({
		id: string(),
		type: literal('start.bonus'),
		user_id: number(),
	}),
];

export const enrichments = {
	'start.income'(options: EventEnrichOptions<'start.income'>) {
		const player = options.status.players.get(options.event.user_id)!;
		player.cash += options.setup.config.mechanics.start.income_amount;
	},
	'start.bonus'(options: EventEnrichOptions<'start.bonus'>) {
		const player = options.status.players.get(options.event.user_id)!;
		player.cash += options.setup.config.mechanics.start.bonus_amount;
	},
};

export const valiV1Schemas = [
	pipe(
		object({
			_id: optional(string()),
			type: literal('startBypass'),
			user_id: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'start.income' as const,
				user_id: value.user_id,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('start_bonus'),
			user_id: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'start.bonus' as const,
				user_id: value.user_id,
			};
		}),
	),
];
