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
		type: literal('purchase.offer'),
		user_id: number(),
		field_id: number(),
	}),
	object({
		id: string(),
		type: literal('purchase'),
		user_id: number(),
		field_id: number(),
		price: number(),
	}),
	object({
		id: string(),
		type: literal('purchase.reject'),
		user_id: number(),
		field_id: number(),
	}),
];

export const enrichments = {
	purchase(options: EventEnrichOptions<'purchase'>) {
		const player = options.status.players.get(options.event.user_id)!;
		player.cash -= options.event.price;

		options.status.fields.set(options.event.field_id, {
			field_id: options.event.field_id,
			owner_user_id: options.event.user_id,
			level: 0,
		});
	},
};

export const valiV1Schemas = [
	pipe(
		object({
			_id: optional(string()),
			type: literal('canBuy'),
			user_id: number(),
			field: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'purchase.offer' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('buy'),
			user_id: number(),
			field: number(),
			money: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'purchase' as const,
				user_id: value.user_id,
				field_id: value.field,
				price: value.money,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('noBuy'),
			user_id: number(),
			field: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'purchase.reject' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
];
