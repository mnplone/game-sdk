import {
	literal,
	number,
	object,
	optional,
	// picklist,
	pipe,
	string,
	transform,
} from 'valibot';
import { bit } from '../../utils/valibot.js';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	object({
		id: string(),
		type: literal('wormhole'),
		user_id: number(),
	}),
	object({
		id: string(),
		type: literal('wormhole.open'),
		user_id: number(),
		exits_count: number(),
	}),
	object({
		id: string(),
		type: literal('wormhole.reject'),
		user_id: number(),
	}),
	object({
		id: string(),
		type: literal('wormhole.move'),
		user_id: number(),
		field_id: number(),
		move_reversed: bit(false),
	}),
];

export const enrichments = {
	'wormhole.open'(options: EventEnrichOptions<'wormhole.open'>) {
		const mechanics_wormhole = options.setup.config.mechanics.wormhole!;
		const player = options.status.players.get(options.event.user_id)!;
		player.cash -=
			Math.max(
				0,
				options.event.exits_count - mechanics_wormhole.exits_free_count,
			) * mechanics_wormhole.exits_extra_price;
	},
	'wormhole.move'(options: EventEnrichOptions<'wormhole.move'>) {
		const player = options.status.players.get(options.event.user_id)!;
		player.position = options.event.field_id;
	},
};

export const valiV1Schemas = [
	pipe(
		object({
			_id: optional(string()),
			type: literal('wormhole'),
			user_id: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'wormhole' as const,
				user_id: value.user_id,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('wormhole_opened'),
			user_id: number(),
			destinations_count: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'wormhole.open' as const,
				user_id: value.user_id,
				exits_count: value.destinations_count,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('wormhole_declined'),
			user_id: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'wormhole.reject' as const,
				user_id: value.user_id,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('wormhole_used'),
			user_id: number(),
			field_id: number(),
			move_reverse: bit(false),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'wormhole.move' as const,
				user_id: value.user_id,
				field_id: value.field_id,
				move_reversed: value.move_reverse,
			};
		}),
	),
];
