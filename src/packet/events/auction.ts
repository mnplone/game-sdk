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
		type: literal('auction.put'),
		user_id: number(),
		field_id: number(),
		bid: number(),
	}),
	object({
		id: string(),
		type: literal('auction.bid'),
		user_id: number(),
		bid: number(),
	}),
	object({
		id: string(),
		type: literal('auction.reject'),
		user_id: number(),
	}),
	object({
		id: string(),
		type: literal('auction.win'),
		user_id: number(),
		field_id: number(),
		user_id_seller: optional(number()),
		price: number(),
	}),
	object({
		id: string(),
		type: literal('auction.cancel'),
		field_id: number(),
		user_id_seller: optional(number()),
		price: optional(number()),
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
	pipe(
		object({
			_id: optional(string()),
			type: literal('toAuction'),
			user_id: number(),
			field: number(),
			bet: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'auction.put' as const,
				user_id: value.user_id,
				field_id: value.field,
				bid: value.bet,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('auctionAccept'),
			user_id: number(),
			bet: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'auction.bid' as const,
				user_id: value.user_id,
				bid: value.bet,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('auctionDecline'),
			user_id: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'auction.reject' as const,
				user_id: value.user_id,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('auctionWinner'),
			user_id: number(),
			user_id_seller: optional(number()),
			field: number(),
			money: number(),
		}),
		transform((value) => {
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
	pipe(
		object({
			_id: optional(string()),
			type: literal('auctionFail'),
			field: number(),
			user_id_seller: optional(number()),
			money: optional(number()),
		}),
		transform((value) => {
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
