import {
	literal,
	number,
	object,
	optional,
	pipe,
	string,
	transform,
} from 'valibot';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	object({
		id: string(),
		type: literal('level.build'),
		user_id: number(),
		field_id: number(),
	}),
	object({
		id: string(),
		type: literal('level.sell'),
		user_id: number(),
		field_id: number(),
	}),
];

export const enrichments = {
	'level.build'(options: EventEnrichOptions<'level.build'>) {
		const field = options.status.fields.get(options.event.field_id)!;
		field.level++;

		const field_setup = options.setup.config.fields[options.event.field_id];
		if (!field_setup) {
			throw new Error(
				`Field ${options.event.field_id} is not defined in match config.`,
			);
		}

		if (field_setup.type !== 'company') {
			throw new Error(`Field ${field} is not a company`);
		}

		const { monopoly_id } = field_setup;
		const monopoly = options.setup.config.monopolies.get(monopoly_id)!;
		if ('rent_by_level' in monopoly === false) {
			throw new Error(`Levels cannot be built for monopoly ${monopoly_id}`);
		}

		const player = options.status.players.get(field.owner_user_id)!;
		player.cash -= monopoly.level_cost;
	},

	'level.sell'(options: EventEnrichOptions<'level.sell'>) {
		const field = options.status.fields.get(options.event.field_id)!;
		field.level--;

		const field_setup = options.setup.config.fields[options.event.field_id];
		if (!field_setup) {
			throw new Error(
				`Field ${options.event.field_id} is not defined in match config.`,
			);
		}

		if (field_setup.type !== 'company') {
			throw new Error(`Field ${field} is not a company`);
		}

		const { monopoly_id } = field_setup;
		const monopoly = options.setup.config.monopolies.get(monopoly_id)!;
		if ('rent_by_level' in monopoly === false) {
			throw new Error(`Levels cannot be built for monopoly ${monopoly_id}`);
		}

		const player = options.status.players.get(field.owner_user_id)!;
		player.cash += monopoly.level_cost;
	},
};

export const valiV1Schemas = [
	pipe(
		object({
			_id: optional(string()),
			type: literal('levelUp'),
			user_id: number(),
			field: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'level.build' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('levelDown'),
			user_id: number(),
			field: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'level.sell' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
];
