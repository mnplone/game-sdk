import * as v from 'valibot';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('purchase.offer'),
		user_id: v.number(),
		field_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('purchase'),
		user_id: v.number(),
		field_id: v.number(),
		price: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('purchase.reject'),
		user_id: v.number(),
		field_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('purchase.buyout'),
		user_id: v.number(),
		user_id_receiver: v.number(),
		field_id: v.number(),
		price: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('purchase.buyout.reject'),
		user_id: v.number(),
		field_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('purchase.buyout.protect'),
		user_id: v.number(),
		field_id: v.number(),
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
			protection: options.setup.config.mechanics.charges?.features
				.buyoutProtection
				? 1
				: 0,
		});
	},
	'purchase.buyout'(options: EventEnrichOptions<'purchase.buyout'>) {
		const player = options.status.players.get(options.event.user_id)!;
		player.cash -= options.event.price;

		const player_receiver = options.status.players.get(
			options.event.user_id_receiver,
		)!;
		player_receiver.cash += options.event.price;

		options.status.fields.get(options.event.field_id)!.owner_user_id =
			options.event.user_id;
	},
};

export const valiV1Schemas = [
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('canBuy'),
			user_id: v.number(),
			field: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'purchase.offer' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('buy'),
			user_id: v.number(),
			field: v.number(),
			money: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'purchase' as const,
				user_id: value.user_id,
				field_id: value.field,
				price: value.money,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('noBuy'),
			user_id: v.number(),
			field: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'purchase.reject' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('buyOut'),
			field: v.number(),
			user_id: v.number(),
			to: v.number(),
			money: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'purchase.buyout' as const,
				user_id: value.user_id,
				user_id_receiver: value.to,
				field_id: value.field,
				price: value.money,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('noBuyOut'),
			user_id: v.number(),
			field: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'purchase.buyout.reject' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('buyoutProtected'),
			user_id: v.number(),
			field: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'purchase.buyout.protect' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
];
