import * as v from 'valibot';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('level.build'),
		user_id: v.number(),
		field_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('level.sell'),
		user_id: v.number(),
		field_id: v.number(),
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
		if (!('rent_by_level' in monopoly)) {
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
		if (!('rent_by_level' in monopoly)) {
			throw new Error(`Levels cannot be built for monopoly ${monopoly_id}`);
		}

		const player = options.status.players.get(field.owner_user_id)!;
		player.cash += monopoly.level_cost;
	},
};

export const valiV1Schemas = [
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('levelUp'),
			user_id: v.number(),
			field: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'level.build' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('levelDown'),
			user_id: v.number(),
			field: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'level.sell' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
];
