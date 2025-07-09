import * as v from 'valibot';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('rent.pay'),
		user_id: v.number(),
		field_id: v.number(),
		amount: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('rent.pay.complete'),
		user_id: v.number(),
		field_id: v.number(),
		amount: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('rent.pay.cancel'),
		user_id: v.number(),
		user_id_receiver: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('rent.zero'),
		user_id: v.number(),
		field_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('rent.zero.self'),
		user_id: v.number(),
		field_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('rent.zero.teammate'),
		user_id: v.number(),
		field_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('rent.zero.mortgaged'),
		user_id: v.number(),
		field_id: v.number(),
	}),
];

export const enrichments = {
	'rent.pay.complete'(options: EventEnrichOptions<'rent.pay.complete'>) {
		const { amount } = options.event;

		const player_payer = options.status.players.get(options.event.user_id)!;
		player_payer.cash -= amount;

		const user_id_receiver = options.status.fields.get(
			options.event.field_id,
		)!.owner_user_id;
		const player_receiver = options.status.players.get(user_id_receiver)!;
		player_receiver.cash += amount;
	},
};

export const valiV1Schemas = [
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('payRent'),
			user_id: v.number(),
			field: v.number(),
			money: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'rent.pay' as const,
				user_id: value.user_id,
				field_id: value.field,
				amount: value.money,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('payRentSuccess'),
			user_id: v.number(),
			field: v.number(),
			money: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'rent.pay.complete' as const,
				user_id: value.user_id,
				field_id: value.field,
				amount: value.money,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('payRentFail'),
			user_id: v.number(),
			to: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'rent.pay.cancel' as const,
				user_id: value.user_id,
				user_id_receiver: value.to,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('payRentZero'),
			user_id: v.number(),
			field: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'rent.zero' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('payRentToSelf'),
			user_id: v.number(),
			field: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'rent.zero.self' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('payRentToTeammate'),
			user_id: v.number(),
			field: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'rent.zero.teammate' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('payRentCancelledMortgaged'),
			user_id: v.number(),
			field: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'rent.zero.mortgaged' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
];
