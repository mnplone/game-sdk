import * as v from 'valibot';
import { bit } from '../../utils/valibot.js';

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('bus.select'),
		user_id: v.number(),
		move_distances: v.pipe(
			v.array(v.number()),
			v.transform((value) => new Set(value)),
		),
	}),
	v.object({
		id: v.string(),
		type: v.literal('bus.move'),
		user_id: v.number(),
		selection: v.object({
			stop_id: v.picklist([0, 1, -1]),
			field_id: v.number(),
			auto: bit(false),
		}),
		move_reversed: bit(false),
	}),
];

// export const enrichments = {
// 	'bus.select'(options: EventEnrichOptions<'bus.select'>) {
// 		// for packet v1
// 		if (options.event.move_distances.size === 0) {
// 			const event_roll_dices = options.events_before.find(
// 				(event) => event.type === 'roll-dices',
// 			);

// 			if (!event_roll_dices) {
// 				throw new Error('No "roll-dices" event found before "bus.select".');
// 			}

// 			options.event.move_distances = new Set([
// 				event_roll_dices.dices[0],
// 				event_roll_dices.dices[1]!,
// 				event_roll_dices.dices[0] + event_roll_dices.dices[1]!,
// 			]);
// 		}
// 	},
// 	'bus.move'(options: EventEnrichOptions<'bus.move'>) {
// 		const player = options.status.players.get(options.event.user_id)!;
// 		player.position = options.event.selection.field_id;
// 	},
// };

export const valiV1Schemas = [
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('chooseBusStop'),
			user_id: v.number(),
			stops: v.array(v.number()),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'bus.select' as const,
				user_id: value.user_id,
				move_distances: new Set<number>(),
			};
			// return {
			// 	id: value._id,
			// 	type: 'movement.picker' as const,
			// 	user_id: value.user_id,
			// 	movement: {
			// 		source: 'bus',
			// 		distances: value.stops,
			// 	},
			// };
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('busStopChoosed'),
			user_id: v.number(),
			stop: v.picklist([-1, 0, 1]),
			mean_position: v.number(),
			move_reverse: bit(false),
			auto_selected: bit(false),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'bus.move' as const,
				user_id: value.user_id,
				selection: {
					stop_id: value.stop,
					field_id: value.mean_position,
					auto: value.auto_selected,
				},
				move_reversed: value.move_reverse,
			};
			// return {
			// 	id: value._id,
			// 	type: 'movement.go' as const,
			// 	user_id: value.user_id,
			// 	field_id: value.mean_position,
			// 	move_reversed: value.move_reverse,
			// 	auto_selected: value.auto_selected,
			// 	movement: {
			// 		source: 'bus',
			// 		stop_id: value.stop,
			// 	},
			// };
		}),
	),
];
