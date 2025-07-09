import * as v from 'valibot';
import { bit } from '../../utils/valibot.js';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('triple'),
		user_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('triple.move'),
		user_id: v.number(),
		field_id: v.number(),
		move_reversed: bit(false),
	}),
];

export const enrichments = {
	'triple.move'(options: EventEnrichOptions<'triple.move'>) {
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
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'triple' as const,
				user_id: value.user_id,
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
				type: 'triple.move' as const,
				user_id: value.user_id,
				field_id: value.field_id,
				move_reversed: value.move_reverse,
			};
		}),
	),
];
