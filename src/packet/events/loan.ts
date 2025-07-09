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
		type: literal('loan.take'),
		user_id: number(),
	}),
	object({
		id: string(),
		type: literal('loan.deadline'),
		user_id: number(),
		amount: number(),
	}),
	object({
		id: string(),
		type: literal('loan.repay'),
		user_id: number(),
		amount: number(),
	}),
];

export const enrichments = {
	'loan.take'(options: EventEnrichOptions<'loan.take'>) {
		const mechanics_loan = options.setup.config.mechanics.loan!;
		const player = options.status.players.get(options.event.user_id)!;

		player.cash += mechanics_loan.amount;
		player.loan = {
			taken: true as const,
			debt: mechanics_loan.amount * mechanics_loan.repay_multiplier,
			return_round: options.status.round + mechanics_loan.duration,
		};
	},
	'loan.repay'(options: EventEnrichOptions<'loan.repay'>) {
		const mechanics_loan = options.setup.config.mechanics.loan!;
		const player = options.status.players.get(options.event.user_id)!;

		player.cash -= options.event.amount;
		player.loan = {
			taken: false as const,
			unlock_round: options.status.round + mechanics_loan.cooldown.repay,
		};
	},
};

export const valiV1Schemas = [
	pipe(
		object({
			_id: optional(string()),
			type: literal('credit_taken'),
			user_id: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'loan.take' as const,
				user_id: value.user_id,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('credit_timeToPay'),
			user_id: number(),
			sum: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'loan.deadline' as const,
				user_id: value.user_id,
				amount: value.sum,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: picklist(['credit_paid', 'credit_payed']),
			user_id: number(),
			sum: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'loan.repay' as const,
				user_id: value.user_id,
				amount: value.sum,
			};
		}),
	),
];
