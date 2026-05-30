import * as v from 'valibot';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('auction.put'),
		user_id: v.number(),
		field_id: v.number(),
		bid: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('auction.bid'),
		user_id: v.number(),
		bid: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('auction.reject'),
		user_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('auction.win'),
		user_id: v.number(),
		field_id: v.number(),
		user_id_seller: v.optional(v.number()),
		price: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('auction.cancel'),
		field_id: v.number(),
		user_id_seller: v.optional(v.number()),
		price: v.optional(v.number()),
	}),
];

export const enrichments = {
	'auction.win'(options: EventEnrichOptions<'auction.win'>) {
		// subtract cash from buyer
		const player = options.status.players.get(options.event.user_id)!;
		player.cash -= options.event.price;

		// add field to player
		options.status.fields.set(options.event.field_id, {
			field_id: options.event.field_id,
			owner_user_id: options.event.user_id,
			level: 0,
			protection: options.setup.config.mechanics.charges?.features
				.buyoutProtection
				? 1
				: 0,
		});

		// add cash to seller
		const { user_id_seller } = options.event;
		if (typeof user_id_seller === 'number') {
			const player_seller = options.status.players.get(user_id_seller)!;
			player_seller.cash += options.event.price;
		}
	},
	'auction.cancel'(options: EventEnrichOptions<'auction.cancel'>) {
		// add cash to seller
		const { user_id_seller } = options.event;
		if (typeof user_id_seller === 'number') {
			const player_seller = options.status.players.get(user_id_seller)!;
			player_seller.cash += options.event.price!;

			// remove field from seller
			options.status.fields.delete(options.event.field_id);
		}
	},
};

export const valiV1Schemas = [
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('toAuction'),
			user_id: v.number(),
			field: v.number(),
			bet: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'auction.put' as const,
				user_id: value.user_id,
				field_id: value.field,
				bid: value.bet,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('auctionAccept'),
			user_id: v.number(),
			bet: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'auction.bid' as const,
				user_id: value.user_id,
				bid: value.bet,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('auctionDecline'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'auction.reject' as const,
				user_id: value.user_id,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('auctionWinner'),
			user_id: v.number(),
			user_id_seller: v.optional(v.number()),
			field: v.number(),
			money: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'auction.win' as const,
				user_id: value.user_id,
				field_id: value.field,
				user_id_seller: value.user_id_seller,
				price: value.money,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('auctionFail'),
			field: v.number(),
			user_id_seller: v.optional(v.number()),
			money: v.optional(v.number()),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'auction.cancel' as const,
				field_id: value.field,
				user_id_seller: value.user_id_seller,
				price: value.money,
			};
		}),
	),
];
