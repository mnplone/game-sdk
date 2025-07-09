import * as v from 'valibot';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('bank.income'),
		user_id: v.number(),
		amount: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('bank.fee'),
		user_id: v.number(),
		amount: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('bank.fee.pay'),
		user_id: v.number(),
		amount: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('bank.return'),
		user_id: v.number(),
		amount: v.number(),
	}),
];

export const enrichments = {
	'bank.income'(options: EventEnrichOptions<'bank.income'>) {
		const player = options.status.players.get(options.event.user_id)!;
		player.cash += options.event.amount;
	},
	'bank.fee.pay'(options: EventEnrichOptions<'bank.fee.pay'>) {
		const player = options.status.players.get(options.event.user_id)!;
		player.cash -= options.event.amount;
	},
	'bank.return'(options: EventEnrichOptions<'bank.return'>) {
		const player = options.status.players.get(options.event.user_id)!;
		player.cash += options.event.amount;
	},
};

export const valiV1Schemas = [
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('cash_plus'),
			user_id: v.number(),
			money: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'bank.income' as const,
				user_id: value.user_id,
				amount: value.money,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.picklist(['cash_minus', 'tax_income', 'tax_luxury']),
			user_id: v.number(),
			money: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'bank.fee' as const,
				user_id: value.user_id,
				amount: value.money,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('feePaid'),
			user_id: v.number(),
			money: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'bank.fee.pay' as const,
				user_id: value.user_id,
				amount: value.money,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('insuranceReturn'),
			user_id: v.number(),
			money: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'bank.return' as const,
				user_id: value.user_id,
				amount: value.money,
			};
		}),
	),
];
