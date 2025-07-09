import {
	literal,
	number,
	object,
	optional,
	picklist,
	pipe,
	string,
	transform,
} from 'valibot';
import { bit } from '../../utils/valibot.js';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	object({
		id: string(),
		type: literal('m1.move'),
		user_id: number(),
		rule: pipe(
			picklist([0, 1]),
			transform((value) => (value === 0 ? 'free' : 'enemy_owned')),
		),
		field_id: number(),
		move_reversed: bit(false),
	}),
	object({
		id: string(),
		type: literal('m1.fail'),
		user_id: number(),
	}),
];

export const enrichments = {
	'm1.move'(options: EventEnrichOptions<'m1.move'>) {
		const player = options.status.players.get(options.event.user_id)!;
		player.position = options.event.field_id;
	},
};

export const valiV1Schemas = [
	pipe(
		object({
			_id: optional(string()),
			type: literal('mrMonopoly'),
			user_id: number(),
			field_type: pipe(
				picklist([0, 1]),
				transform((value) => (value === 0 ? 'free' : 'enemy_owned')),
			),
			field_id: number(),
			move_reverse: bit(false),
		}),
		transform((value) => {
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
	pipe(
		object({
			_id: optional(string()),
			type: literal('mrMonopolyFailed'),
			user_id: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'm1.fail' as const,
				user_id: value.user_id,
			};
		}),
	),
];
