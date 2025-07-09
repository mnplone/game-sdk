import * as v from 'valibot';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('loan.take'),
		user_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('loan.deadline'),
		user_id: v.number(),
		amount: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('loan.repay'),
		user_id: v.number(),
		amount: v.number(),
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
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('credit_taken'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'loan.take' as const,
				user_id: value.user_id,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('credit_timeToPay'),
			user_id: v.number(),
			sum: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'loan.deadline' as const,
				user_id: value.user_id,
				amount: value.sum,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.picklist(['credit_paid', 'credit_payed']),
			user_id: v.number(),
			sum: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'loan.repay' as const,
				user_id: value.user_id,
				amount: value.sum,
			};
		}),
	),
];
