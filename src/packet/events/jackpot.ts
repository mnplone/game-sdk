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
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	object({
		id: string(),
		type: literal('jackpot'),
		user_id: number(),
	}),
	object({
		id: string(),
		type: literal('jackpot.pay'),
		user_id: number(),
		amount: number(),
		jackpot_size: number(),
	}),
	object({
		id: string(),
		type: literal('jackpot.play'),
		user_id: number(),
		dice_bet: array(number()),
		dice_rolled: number(),
	}),
	object({
		id: string(),
		type: literal('jackpot.win'),
		user_id: number(),
		/** Amount of money that player won. */
		amount: number(),
		/** Dice value rolled. Exists only on Jackpot V2. */
		dice_rolled: optional(number()),
	}),
	object({
		id: string(),
		type: literal('jackpot.lose'),
		user_id: number(),
		/** Amount of money that player lost. Exists only on Jackpot V1. */
		amount: optional(number()),
		/** Dice value rolled. Exists only on Jackpot V2. */
		dice_rolled: optional(number()),
	}),
	object({
		id: string(),
		type: literal('jackpot.superprize.win'),
		user_id: number(),
		amount: number(),
	}),
	object({
		id: string(),
		type: literal('jackpot.superprize.increase'),
		user_id: number(),
		superprize: number(),
	}),
	object({
		id: string(),
		type: literal('jackpot.reject'),
		user_id: number(),
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
	pipe(
		object({
			_id: optional(string()),
			type: literal('jackpot'),
			user_id: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'jackpot' as const,
				user_id: value.user_id,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('jackpot_paid'),
			user_id: number(),
			money: number(),
			jackpot_money: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'jackpot.pay' as const,
				user_id: value.user_id,
				amount: value.money,
				jackpot_size: value.jackpot_money,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('jackpot_play'),
			user_id: number(),
			dices_betted: array(number()),
			dice_rolled: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'jackpot.play' as const,
				user_id: value.user_id,
				dice_bet: value.dices_betted,
				dice_rolled: value.dice_rolled,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('jackpot_win'),
			user_id: number(),
			money: number(),
			dice_rolled: optional(number()),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'jackpot.win' as const,
				user_id: value.user_id,
				amount: value.money,
				dice_rolled: value.dice_rolled,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('jackpot_lose'),
			user_id: number(),
			money: optional(number()),
			dice_rolled: optional(number()),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'jackpot.lose' as const,
				user_id: value.user_id,
				amount: value.money,
				dice_rolled: value.dice_rolled,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('jackpot_superprize_win'),
			user_id: number(),
			money: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'jackpot.superprize.win' as const,
				user_id: value.user_id,
				amount: value.money,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('jackpot_superprize_funded'),
			user_id: number(),
			jackpot_superprize_money: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'jackpot.superprize.increase' as const,
				user_id: value.user_id,
				superprize: value.jackpot_superprize_money,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('jackpot_declined'),
			user_id: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'jackpot.reject' as const,
				user_id: value.user_id,
			};
		}),
	),
];
