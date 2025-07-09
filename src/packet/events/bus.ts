import {
	array,
	literal,
	number,
	object,
	optional,
	picklist,
	pipe,
	string,
	transform,
} from 'valibot';
import { normalizeFieldId } from '../../utils/table.js';
import { bit } from '../../utils/valibot.js';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	object({
		id: string(),
		type: literal('bus.select'),
		user_id: number(),
		field_ids_move: pipe(
			array(number()),
			transform((value) => new Set(value)),
		),
	}),
	object({
		id: string(),
		type: literal('bus.move'),
		user_id: number(),
		selection: object({
			stop_id: picklist([0, 1, -1]),
			field_id: number(),
			auto: bit(false),
		}),
		move_reversed: bit(false),
	}),
];

export const enrichments = {
	'bus.select'(options: EventEnrichOptions<'bus.select'>) {
		// for packet v1
		if (options.event.field_ids_move.size === 0) {
			const player = options.status.players.get(options.event.user_id)!;
			const event_roll_dices = options.events_before.find(
				(event) => event.type === 'roll-dices',
			);

			if (!event_roll_dices) {
				throw new Error('No "roll-dices" event found before "bus.select".');
			}

			const direction = options.status.turn.move_reversed ? -1 : 1;

			options.event.field_ids_move = new Set(
				[
					event_roll_dices.dices[0],
					event_roll_dices.dices[1]!,
					event_roll_dices.dices[0] + event_roll_dices.dices[1]!,
				].map((value) =>
					normalizeFieldId(options.setup, player.position + direction * value),
				),
			);
		}
	},
	'bus.move'(options: EventEnrichOptions<'bus.move'>) {
		const player = options.status.players.get(options.event.user_id)!;
		player.position = options.event.selection.field_id;
	},
};

export const valiV1Schemas = [
	pipe(
		object({
			_id: optional(string()),
			type: literal('chooseBusStop'),
			user_id: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'bus.select' as const,
				user_id: value.user_id,
				field_ids_move: new Set<number>(),
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('busStopChoosed'),
			user_id: number(),
			stop: picklist([0, 1, -1]),
			mean_position: number(),
			move_reverse: bit(false),
			auto_selected: bit(false),
		}),
		transform((value) => {
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
		}),
	),
];
