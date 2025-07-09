import {
	literal,
	number,
	object,
	optional,
	pipe,
	string,
	transform,
} from 'valibot';
import { bit } from '../../utils/valibot.js';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	object({
		id: string(),
		type: literal('triple'),
		user_id: number(),
	}),
	object({
		id: string(),
		type: literal('triple.move'),
		user_id: number(),
		field_id: number(),
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
	pipe(
		object({
			_id: optional(string()),
			type: literal('chooseFieldToMove'),
			user_id: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'triple' as const,
				user_id: value.user_id,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('fieldToMoveChoosed'),
			user_id: number(),
			field_id: number(),
			move_reverse: bit(false),
		}),
		transform((value) => {
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
