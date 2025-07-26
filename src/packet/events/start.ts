import * as v from 'valibot';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('start.income'),
		user_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('start.bonus'),
		user_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('start.tax'),
		user_id: v.number(),
		amount: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('start.tax.pay'),
		user_id: v.number(),
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
	// 'start.tax.pay'(options: EventEnrichOptions<'start.tax.pay'>) {
	// 	// we don't know amount paid, also we don't know time when player crossed start
	// },
};

export const valiV1Schemas = [
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('startBypass'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'start.income' as const,
				user_id: value.user_id,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('start_bonus'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'start.bonus' as const,
				user_id: value.user_id,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('startBypassFee'),
			user_id: v.number(),
			money: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'start.tax' as const,
				user_id: value.user_id,
				amount: value.money,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('startBypassFeePaid'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'start.tax.pay' as const,
				user_id: value.user_id,
			};
		}),
	),
];
