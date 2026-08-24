import * as v from 'valibot';
import { bit } from '../../utils/valibot.js';
import type { EventEnrichOptions } from '../events.all.js';

const movementPickerMovementSchema = v.variant('source', [
	v.object({
		source: v.literal('bus'),
		distances: v.array(v.number()),
	}),
	v.object({
		source: v.literal('wormhole'),
		exit_count: v.number(),
	}),
	v.object({
		source: v.picklist(['mini_die', 'taxi', 'triple']),
	}),
]);
const movementGoMovementSchema = v.variant('source', [
	v.object({
		source: v.literal('bus'),
		stop_id: v.picklist([-1, 0, 1]),
	}),
	v.object({
		source: v.literal('mini_die'),
		stop_id: v.picklist([0, 1]),
	}),
	v.object({
		source: v.picklist(['taxi', 'triple', 'wormhole']),
	}),
]);

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('movement.picker'),
		user_id: v.number(),
		movement: movementPickerMovementSchema,
	}),
	v.object({
		id: v.string(),
		type: v.literal('movement.go'),
		user_id: v.number(),
		field_id: v.number(),
		move_reversed: bit(false),
		auto_selected: bit(false),
		movement: movementGoMovementSchema,
	}),
];

export const enrichments = {
	// FIXME: decrease cash when wormhole is opened
	// 'movement.picker'(options: EventEnrichOptions<'movement.picker'>) {
	// 	const { movement } = options.event;
	// 	// default value when server returned no fields (old versions)
	// 	if (movement.field_ids.includes(Number.MAX_SAFE_INTEGER)) {
	// 		switch (movement.source) {
	// 			// TODO: case 'bus':

	// 			// 'reverse' should never be recalculated here as it was added with "movement"

	// 			// TODO: case 'taxi':

	// 			case 'triple': {
	// 				const movement_options = new Map(
	// 					Array.from(
	// 						{ length: options.setup!.config.fields.length },
	// 						(_, index) => [index, { field_id: index }],
	// 					),
	// 				);

	// 				const { user_id } = options.status.turn.action;
	// 				if (user_id === null) {
	// 					throw new Error(
	// 						'Invalid state: received movement.picker action without user_id.',
	// 					);
	// 				}

	// 				const position = options.status.players.get(user_id)?.position;
	// 				if (position === undefined) {
	// 					throw new Error(
	// 						"Invalid state: received movement.picker action without player's position.",
	// 					);
	// 				}

	// 				movement_options.delete(position);

	// 				options.status.turn.movement = {
	// 					source: 'triple',
	// 					options: movement_options,
	// 				};
	// 				movement.field_ids = movement_options.keys().toArray();
	// 				break;
	// 			}

	// 			// TODO: case 'wormhole':

	// 			default:
	// 				throw new Error(
	// 					`Unknown source for movement.picker event: ${movement.source}`,
	// 				);
	// 		}
	// 	}
	// },
	'movement.go'(options: EventEnrichOptions<'movement.go'>) {
		const player = options.status.players.get(options.event.user_id)!;
		player.position = options.event.field_id;
	},
};

export const valiV1Schemas = [
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('chooseFieldToMove'),
			user_id: v.number(),
			movement: v.optional(movementPickerMovementSchema),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'movement.picker' as const,
				user_id: value.user_id,
				// this event previously appeared as triple event
				// so, when no "movement" is provided, we assume it was a triple from old format
				movement: value.movement ?? {
					source: 'triple',
				},
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('fieldToMoveChoosed'),
			user_id: v.number(),
			field_id: v.number(),
			move_reverse: bit(false),
			movement: v.optional(movementGoMovementSchema),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'movement.go' as const,
				user_id: value.user_id,
				field_id: value.field_id,
				move_reversed: value.move_reverse,
				auto_selected: false,
				// this event previously appeared as triple event
				// so, when no "movement" is provided, we assume it was a triple from old format
				movement: value.movement ?? {
					source: 'triple',
				},
			};
		}),
	),
];
