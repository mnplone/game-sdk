import * as v from 'valibot';
import { bit } from '../../utils/valibot.js';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('m1.move'),
		user_id: v.number(),
		rule: v.pipe(
			v.picklist([0, 1]),
			v.transform((value) => (value === 0 ? 'free' : 'enemy_owned')),
		),
		field_id: v.number(),
		move_reversed: bit(false),
	}),
	v.object({
		id: v.string(),
		type: v.literal('m1.fail'),
		user_id: v.number(),
	}),
];

export const enrichments = {
	'm1.move'(options: EventEnrichOptions<'m1.move'>) {
		const player = options.status.players.get(options.event.user_id)!;
		player.position = options.event.field_id;
	},
};

export const valiV1Schemas = [
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('mrMonopoly'),
			user_id: v.number(),
			field_type: v.pipe(
				v.picklist([0, 1]),
				v.transform((value) => (value === 0 ? 'free' : 'enemy_owned')),
			),
			field_id: v.number(),
			move_reverse: bit(false),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'm1.move' as const,
				user_id: value.user_id,
				rule: value.field_type,
				field_id: value.field_id,
				move_reversed: value.move_reverse,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('mrMonopolyFailed'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'm1.fail' as const,
				user_id: value.user_id,
			};
		}),
	),
];
