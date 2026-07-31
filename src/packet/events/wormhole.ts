import * as v from 'valibot';
import { bit } from '../../utils/valibot.js';
// import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('wormhole'),
		user_id: v.number(),
	}),
	// v.object({
	// 	id: v.string(),
	// 	type: v.literal('wormhole.open'),
	// 	user_id: v.number(),
	// 	exits_count: v.number(),
	// }),
	v.object({
		id: v.string(),
		type: v.literal('wormhole.reject'),
		user_id: v.number(),
	}),
	// v.object({
	// 	id: v.string(),
	// 	type: v.literal('wormhole.move'),
	// 	user_id: v.number(),
	// 	field_id: v.number(),
	// 	move_reversed: bit(false),
	// }),
];

// export const enrichments = {
// 	'wormhole.open'(options: EventEnrichOptions<'wormhole.open'>) {
// 		const mechanics_wormhole = options.setup.config.mechanics.wormhole!;
// 		const player = options.status.players.get(options.event.user_id)!;
// 		player.cash -=
// 			Math.max(
// 				0,
// 				options.event.exits_count - mechanics_wormhole.exits_free_count,
// 			) * mechanics_wormhole.exits_extra_price;
// 	},
// 	'wormhole.move'(options: EventEnrichOptions<'wormhole.move'>) {
// 		const player = options.status.players.get(options.event.user_id)!;
// 		player.position = options.event.field_id;
// 	},
// };

export const valiV1Schemas = [
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('wormhole'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'wormhole' as const,
				user_id: value.user_id,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('wormhole_opened'),
			user_id: v.number(),
			destinations_count: v.number(),
		}),
		v.transform((value) => {
			// return {
			// 	id: value._id,
			// 	type: 'wormhole.open' as const,
			// 	user_id: value.user_id,
			// 	exits_count: value.destinations_count,
			// };
			return {
				id: value._id,
				type: 'movement.picker' as const,
				user_id: value.user_id,
				movement: {
					source: 'wormhole' as const,
					exit_count: value.destinations_count,
				},
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('wormhole_declined'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'wormhole.reject' as const,
				user_id: value.user_id,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('wormhole_used'),
			user_id: v.number(),
			field_id: v.number(),
			move_reverse: bit(false),
		}),
		v.transform((value) => {
			// return {
			// 	id: value._id,
			// 	type: 'wormhole.move' as const,
			// 	user_id: value.user_id,
			// 	field_id: value.field_id,
			// 	move_reversed: value.move_reverse,
			// };
			return {
				id: value._id,
				type: 'movement.go' as const,
				user_id: value.user_id,
				field_id: value.field_id,
				move_reversed: value.move_reverse,
				auto_selected: false,
				movement: {
					source: 'wormhole' as const,
				},
			};
		}),
	),
];
