import * as v from 'valibot';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('jackpot'),
		user_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('jackpot.pay'),
		user_id: v.number(),
		amount: v.number(),
		jackpot_size: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('jackpot.play'),
		user_id: v.number(),
		dice_bet: v.array(v.number()),
		dice_rolled: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('jackpot.win'),
		user_id: v.number(),
		/** Amount of money that player won. */
		amount: v.number(),
		/** Dice value rolled. Exists only on Jackpot V2. */
		dice_rolled: v.optional(v.number()),
	}),
	v.object({
		id: v.string(),
		type: v.literal('jackpot.lose'),
		user_id: v.number(),
		/** Amount of money that player lost. Exists only on Jackpot V1. */
		amount: v.optional(v.number()),
		/** Dice value rolled. Exists only on Jackpot V2. */
		dice_rolled: v.optional(v.number()),
	}),
	v.object({
		id: v.string(),
		type: v.literal('jackpot.superprize.win'),
		user_id: v.number(),
		amount: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('jackpot.superprize.increase'),
		user_id: v.number(),
		superprize: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('jackpot.reject'),
		user_id: v.number(),
	}),
];

export const enrichments = {
	'jackpot.pay'(options: EventEnrichOptions<'jackpot.pay'>) {
		const player = options.status.players.get(options.event.user_id)!;
		player.cash -= options.event.amount;
	},
	'jackpot.play'(options: EventEnrichOptions<'jackpot.play'>) {
		const player = options.status.players.get(options.event.user_id)!;
		player.cash -= options.setup.config.mechanics.jackpot!.bet;
	},
	'jackpot.win'(options: EventEnrichOptions<'jackpot.win'>) {
		const player = options.status.players.get(options.event.user_id)!;
		player.cash += options.event.amount;
	},
	'jackpot.superprize.win'(
		options: EventEnrichOptions<'jackpot.superprize.win'>,
	) {
		const player = options.status.players.get(options.event.user_id)!;
		player.cash += options.event.amount;
	},
};

export const valiV1Schemas = [
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('jackpot'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'jackpot' as const,
				user_id: value.user_id,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('jackpot_paid'),
			user_id: v.number(),
			money: v.number(),
			jackpot_money: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'jackpot.pay' as const,
				user_id: value.user_id,
				amount: value.money,
				jackpot_size: value.jackpot_money,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('jackpot_play'),
			user_id: v.number(),
			dices_betted: v.array(v.number()),
			dice_rolled: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'jackpot.play' as const,
				user_id: value.user_id,
				dice_bet: value.dices_betted,
				dice_rolled: value.dice_rolled,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('jackpot_win'),
			user_id: v.number(),
			money: v.number(),
			dice_rolled: v.optional(v.number()),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'jackpot.win' as const,
				user_id: value.user_id,
				amount: value.money,
				dice_rolled: value.dice_rolled,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('jackpot_lose'),
			user_id: v.number(),
			money: v.optional(v.number()),
			dice_rolled: v.optional(v.number()),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'jackpot.lose' as const,
				user_id: value.user_id,
				amount: value.money,
				dice_rolled: value.dice_rolled,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('jackpot_superprize_win'),
			user_id: v.number(),
			money: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'jackpot.superprize.win' as const,
				user_id: value.user_id,
				amount: value.money,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('jackpot_superprize_funded'),
			user_id: v.number(),
			jackpot_superprize_money: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'jackpot.superprize.increase' as const,
				user_id: value.user_id,
				superprize: value.jackpot_superprize_money,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('jackpot_declined'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'jackpot.reject' as const,
				user_id: value.user_id,
			};
		}),
	),
];
