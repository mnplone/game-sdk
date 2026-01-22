import * as v from 'valibot';
import { bit } from '../../utils/valibot.js';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('movement.picker'),
		user_id: v.number(),
		source: v.picklist(['reverse', 'triple']),
		field_ids: v.array(v.number()),
	}),
	v.object({
		id: v.string(),
		type: v.literal('movement.go'),
		user_id: v.number(),
		field_id: v.number(),
		move_reversed: bit(false),
	}),
];

export const enrichments = {
	'movement.picker'(options: EventEnrichOptions<'movement.picker'>) {
		// default value when server returned no fields (old versions)
		if (options.event.field_ids.includes(Number.MAX_SAFE_INTEGER)) {
			// const field_ids_move = [];
			switch (options.event.source) {
				case 'triple': {
					const field_ids_move = new Map(
						Array.from(
							{ length: options.setup!.config.fields.length },
							(_, index) => [index, { field_id: index }],
						),
					);

					const { user_id } = options.status.turn.action;
					if (user_id === null) {
						throw new Error(
							'Invalid state: received movement.picker action without user_id.',
						);
					}

					const position = options.status.players.get(user_id)?.position;
					if (position === undefined) {
						throw new Error(
							"Invalid state: received movement.picker action without player's position.",
						);
					}

					field_ids_move.delete(position);

					options.status.turn.field_ids_move = field_ids_move;
					options.event.field_ids = [...field_ids_move.keys()];
					break;
				}

				default:
					throw new Error(
						`Unknown source for movement.picker event: ${options.event.source}`,
					);
			}
		}
	},
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
			source: v.fallback(v.picklist(['reverse', 'triple']), 'triple'),
			fields_to_move: v.optional(v.array(v.number())),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'movement.picker' as const,
				user_id: value.user_id,
				source: value.source,
				field_ids: value.fields_to_move ?? [Number.MAX_SAFE_INTEGER],
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
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'movement.go' as const,
				user_id: value.user_id,
				field_id: value.field_id,
				move_reversed: value.move_reverse,
			};
		}),
	),
];
