import * as v from 'valibot';
// import { normalizeFieldId } from '../../utils/table.js';
import { bit } from '../../utils/valibot.js';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('taxi.select'),
		user_id: v.number(),
		limit: v.optional(v.number()),
		// This field never returned from the server, it should be computed in SDK.
		// field_ids_move: v.pipe(
		// 	v.undefined(),
		// 	v.transform(() => new Set<number>()),
		// ),
	}),
	v.object({
		id: v.string(),
		type: v.literal('taxi.move'),
		user_id: v.number(),
		selection: v.object({
			stop_id: v.number(),
			field_id: v.number(),
			auto: bit(false),
		}),
		move_reversed: bit(false),
	}),
	v.object({
		id: v.string(),
		type: v.literal('taxi.fail'),
		user_id: v.number(),
		move_reversed: bit(false),
	}),
];

export const enrichments = {
	// 'taxi.select'(options: EventEnrichOptions<'taxi.select'>) {
	// 	const player = options.status.players.get(options.event.user_id)!;
	// 	const direction = options.status.turn.move_reversed ? -1 : 1;

	// 	for (let increment = 1; increment <= 6; increment++) {
	// 		options.event.field_ids_move.add(
	// 			normalizeFieldId(
	// 				options.setup,
	// 				player.position + direction * (options.event.taxi_value + increment),
	// 			),
	// 		);
	// 	}
	// },
	'taxi.move'(options: EventEnrichOptions<'taxi.move'>) {
		const player = options.status.players.get(options.event.user_id)!;
		player.position = options.event.selection.field_id;
	},
	'taxi.fail'(options: EventEnrichOptions<'taxi.fail'>) {
		const player = options.status.players.get(options.event.user_id)!;
		player.position += options.event.move_reversed ? -1 : 1;
	},
};

export const valiV1Schemas = [
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('chooseTaxiStop'),
			user_id: v.number(),
			limit: v.optional(v.number()),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'taxi.select' as const,
				user_id: value.user_id,
				limit: value.limit,
				// field_ids_move: new Set<number>(),
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('taxiStopChoosed'),
			user_id: v.number(),
			stop: v.number(),
			mean_position: v.number(),
			move_reverse: bit(false),
			auto_selected: bit(false),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'taxi.move' as const,
				user_id: value.user_id,
				selection: {
					stop_id: value.stop,
					field_id: value.mean_position,
					auto: value.auto_selected,
				},
				move_reversed: value.move_reverse,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('chooseTaxiStopFail'),
			user_id: v.number(),
			move_reverse: bit(false),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'taxi.fail' as const,
				user_id: value.user_id,
				move_reversed: value.move_reverse,
			};
		}),
	),
];
