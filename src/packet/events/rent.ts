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
		type: literal('rent.pay'),
		user_id: number(),
		field_id: number(),
		amount: number(),
	}),
	object({
		id: string(),
		type: literal('rent.pay.complete'),
		user_id: number(),
		field_id: number(),
		amount: number(),
	}),
	object({
		id: string(),
		type: literal('rent.pay.cancel'),
		user_id: number(),
		user_id_receiver: number(),
	}),
	object({
		id: string(),
		type: literal('rent.zero'),
		user_id: number(),
		field_id: number(),
	}),
	object({
		id: string(),
		type: literal('rent.zero.self'),
		user_id: number(),
		field_id: number(),
	}),
	object({
		id: string(),
		type: literal('rent.zero.teammate'),
		user_id: number(),
		field_id: number(),
	}),
	object({
		id: string(),
		type: literal('rent.zero.mortgaged'),
		user_id: number(),
		field_id: number(),
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
	pipe(
		object({
			_id: optional(string()),
			type: literal('payRent'),
			user_id: number(),
			field: number(),
			money: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'rent.pay' as const,
				user_id: value.user_id,
				field_id: value.field,
				amount: value.money,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('payRentSuccess'),
			user_id: number(),
			field: number(),
			money: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'rent.pay.complete' as const,
				user_id: value.user_id,
				field_id: value.field,
				amount: value.money,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('payRentFail'),
			user_id: number(),
			to: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'rent.pay.cancel' as const,
				user_id: value.user_id,
				user_id_receiver: value.to,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('payRentZero'),
			user_id: number(),
			field: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'rent.zero' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('payRentToSelf'),
			user_id: number(),
			field: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'rent.zero.self' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('payRentToTeammate'),
			user_id: number(),
			field: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'rent.zero.teammate' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('payRentCancelledMortgaged'),
			user_id: number(),
			field: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'rent.zero.mortgaged' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
];
