import * as v from 'valibot';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('mortgage.put'),
		user_id: v.number(),
		field_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('mortgage.buyback'),
		user_id: v.number(),
		field_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('mortgage.waive'),
		user_id: v.number(),
		field_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('mortgage.expire'),
		user_id: v.number(),
		field_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('waive'),
		user_id: v.number(),
		field_id: v.number(),
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

		if (!('multiplier' in mechanics_mortgage)) {
			throw new Error(
				'Mechanics "mortgage" does not allow mortgaging in match config.',
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

		if (!('multiplier' in mechanics_mortgage)) {
			throw new Error(
				'Mechanics "mortgage" does not allow mortgaging in match config.',
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
			monopoly.buy_price
			* mechanics_mortgage.multiplier
			* mechanics_mortgage.buyback_multiplier;

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
	'mortgage.waive'(options: EventEnrichOptions<'mortgage.waive'>) {
		const mechanics_mortgage = options.setup.config.mechanics.mortgage;
		if (!mechanics_mortgage) {
			throw new Error(
				'There is no "mortgage" mechanics defined in match config.',
			);
		}

		if (!('multiplier' in mechanics_mortgage)) {
			throw new Error(
				'Mechanics "mortgage" does not allow mortgaging in match config.',
			);
		}

		if (!('waive_multiplier' in mechanics_mortgage)) {
			throw new Error(
				'Mechanics "mortgage" does not allow waiving the property ownership in match config.',
			);
		}

		const field = options.status.fields.get(options.event.field_id)!;

		options.status.fields.delete(options.event.field_id);

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
		const cash_to_receive =
			monopoly.buy_price
			* (1 - mechanics_mortgage.multiplier)
			* mechanics_mortgage.waive_multiplier;

		const player = options.status.players.get(field.owner_user_id)!;
		player.cash += cash_to_receive;
	},
	waive(options: EventEnrichOptions<'waive'>) {
		const mechanics_mortgage = options.setup.config.mechanics.mortgage;
		if (!mechanics_mortgage) {
			throw new Error(
				'There is no "mortgage" mechanics defined in match config.',
			);
		}

		if ('multiplier' in mechanics_mortgage) {
			throw new Error(
				'Mechanics "mortgage" requires that company be mortgaged before waiving ownership.',
			);
		}

		const field = options.status.fields.get(options.event.field_id)!;

		options.status.fields.delete(options.event.field_id);

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
		const cash_to_receive =
			monopoly.buy_price * mechanics_mortgage.waive_multiplier;

		const player = options.status.players.get(field.owner_user_id)!;
		player.cash += cash_to_receive;
	},
};

export const valiV1Schemas = [
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('mortgage'),
			user_id: v.number(),
			field: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'mortgage.put' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('unmortgage'),
			user_id: v.number(),
			field: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'mortgage.buyback' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('rejectMortgaged'),
			user_id: v.number(),
			field: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'mortgage.waive' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('mortgage_limit'),
			field: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'mortgage.expire' as const,
				user_id: -1,
				field_id: value.field,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('fieldDropped'),
			user_id: v.number(),
			field: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'waive' as const,
				user_id: value.user_id,
				field_id: value.field,
			};
		}),
	),
];
