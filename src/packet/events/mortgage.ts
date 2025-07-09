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
		type: literal('mortgage.put'),
		user_id: number(),
		field_id: number(),
	}),
	object({
		id: string(),
		type: literal('mortgage.buyback'),
		user_id: number(),
		field_id: number(),
	}),
	object({
		id: string(),
		type: literal('mortgage.expire'),
		user_id: number(),
		field_id: number(),
	}),
];

export const enrichments = {
	'mortgage.put'(options: EventEnrichOptions<'mortgage.put'>) {
		const mechanics_mortgage = options.setup.config.mechanics.mortgage;
		if (!mechanics_mortgage) {
			throw new Error(
				'There is no "mortgage" mechanics defined in match config.',
			);
		}

		const field = options.status.fields.get(options.event.field_id)!;
		field.mortgage = {
			round_until:
				typeof mechanics_mortgage.duration === 'number'
					? options.status.round + mechanics_mortgage.duration
					: undefined,
		};

		const field_setup = options.setup.config.fields[options.event.field_id];
		if (!field_setup) {
			throw new Error(`Field ${options.event.field_id} does not exist`);
		}

		if (field_setup?.type !== 'company') {
			throw new Error(`Field ${field} is not a company`);
		}

		const { monopoly_id } = field_setup;
		const monopoly = options.setup.config.monopolies.get(monopoly_id)!;
		const mortgage_price = monopoly.buy_price * mechanics_mortgage.multiplier;

		const player = options.status.players.get(field.owner_user_id)!;
		player.cash += mortgage_price;
	},
	'mortgage.buyback'(options: EventEnrichOptions<'mortgage.buyback'>) {
		const mechanics_mortgage = options.setup.config.mechanics.mortgage;
		if (!mechanics_mortgage) {
			throw new Error(
				'There is no "mortgage" mechanics defined in match config.',
			);
		}

		const field = options.status.fields.get(options.event.field_id)!;
		field.mortgage = undefined;

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
		const mortgage_price =
			monopoly.buy_price *
			mechanics_mortgage.multiplier *
			mechanics_mortgage.buyback_multiplier;

		const player = options.status.players.get(field.owner_user_id)!;
		player.cash -= mortgage_price;
	},
	'mortgage.expire'(options: EventEnrichOptions<'mortgage.expire'>) {
		// for packet v1
		if (options.event.user_id === -1) {
			options.event.user_id = options.status.fields.get(
				options.event.field_id,
			)!.owner_user_id;
		}

		options.status.fields.delete(options.event.field_id);
	},
};

export const valiV1Schemas = [
	pipe(
		object({
			_id: optional(string()),
			type: literal('mortgage'),
			user_id: number(),
			field: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'mortgage.put' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('unmortgage'),
			user_id: number(),
			field: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'mortgage.buyback' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('mortgage_limit'),
			field: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'mortgage.expire' as const,
				user_id: -1,
				field_id: value.field,
			};
		}),
	),
];
