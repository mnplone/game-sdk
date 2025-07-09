import {
	literal,
	number,
	object,
	optional,
	picklist,
	pipe,
	string,
	transform,
} from 'valibot';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	object({
		id: string(),
		type: literal('bank.income'),
		user_id: number(),
		amount: number(),
	}),
	object({
		id: string(),
		type: literal('bank.fee'),
		user_id: number(),
		amount: number(),
	}),
	object({
		id: string(),
		type: literal('bank.fee.pay'),
		user_id: number(),
		amount: number(),
	}),
	object({
		id: string(),
		type: literal('bank.return'),
		user_id: number(),
		amount: number(),
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
	pipe(
		object({
			_id: optional(string()),
			type: literal('cash_plus'),
			user_id: number(),
			money: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'bank.income' as const,
				user_id: value.user_id,
				amount: value.money,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: picklist(['cash_minus', 'tax_income', 'tax_luxury']),
			user_id: number(),
			money: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'bank.fee' as const,
				user_id: value.user_id,
				amount: value.money,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('feePaid'),
			user_id: number(),
			money: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'bank.fee.pay' as const,
				user_id: value.user_id,
				amount: value.money,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('insuranceReturn'),
			user_id: number(),
			money: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'bank.return' as const,
				user_id: value.user_id,
				amount: value.money,
			};
		}),
	),
];
