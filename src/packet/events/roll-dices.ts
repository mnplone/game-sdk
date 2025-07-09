import {
	literal,
	number,
	object,
	optional,
	pipe,
	string,
	transform,
	tuple,
} from 'valibot';
import { normalizeFieldId } from '../../utils/table.js';
import { bit } from '../../utils/valibot.js';
import type { EventEnrichOptions, ExtractEvent } from '../events.all.js';
import type { M1DemoPacketSetup } from '../setup.js';

export const valiSchemas = [
	object({
		id: string(),
		type: literal('roll-dices'),
		user_id: number(),
		dices: tuple([number(), optional(number()), optional(number())]),
		move_reversed: bit(false),
		double_spent: bit(false),
	}),
	object({
		id: string(),
		type: literal('roll-dices.jail.success'),
		user_id: number(),
	}),
	object({
		id: string(),
		type: literal('roll-dices.jail.fail'),
		user_id: number(),
	}),
];

export const enrichments = {
	'roll-dices'(options: EventEnrichOptions<'roll-dices'>) {
		const player = options.status.players.get(options.event.user_id)!;
		const event_zero_distance = options.events_after.find(
			(event) => event.type === 'jail.put.double',
		);

		const distance =
			player.jail || event_zero_distance
				? 0
				: getRolledDistance(options.event.dices, options.setup);

		player.position = normalizeFieldId(
			options.setup,
			player.position + (options.event.move_reversed ? -1 : 1) * distance,
		);
	},
	'roll-dices.jail.success'(
		options: EventEnrichOptions<'roll-dices.jail.success'>,
	) {
		options.status.players.get(options.event.user_id)!.jail = undefined;

		const event_roll_dices = options.events_before.find(
			(event) => event.type === 'roll-dices',
		);
		if (!event_roll_dices) {
			throw new Error(
				'Invalid state: no "roll-dices" event found before "roll-dices.jail.success".',
			);
		}

		const player = options.status.players.get(options.event.user_id)!;
		const distance = getRolledDistance(event_roll_dices.dices, options.setup);
		player.position = normalizeFieldId(
			options.setup,
			player.position + distance,
		);
	},
};

export const valiV1Schemas = [
	pipe(
		object({
			_id: optional(string()),
			type: literal('rollDices'),
			user_id: number(),
			dices: tuple([number(), optional(number()), optional(number())]),
			move_reverse: bit(false),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'roll-dices' as const,
				user_id: value.user_id,
				dices: value.dices,
				move_reversed: value.move_reverse,
				double_spent: false,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('double_spended'),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: value.type,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('rollDicesForUnjailSuccess'),
			user_id: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'roll-dices.jail.success' as const,
				user_id: value.user_id,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('rollDicesForUnjailFail'),
			user_id: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'roll-dices.jail.fail' as const,
				user_id: value.user_id,
			};
		}),
	),
];

/**
 * Get distance by rolled dices.
 * @param dices - Rolled dices.
 * @param setup - Game setup.
 * @returns -
 */
function getRolledDistance(
	dices: ExtractEvent<'roll-dices'>['dices'],
	setup: M1DemoPacketSetup,
) {
	const { game_submode } = setup.flags;

	let distance = dices[0];
	if (game_submode === 2) {
		distance += dices[1]!;

		// if speed die was rolled
		if (typeof dices[2] === 'number') {
			// if number was rolled on speed die
			if (dices[2] <= 3) {
				// triple
				if (dices[0] === dices[1] && dices[1] === dices[2]) {
					return 0;
				}

				distance += dices[2];
			}
			// if bus was rolled, no movement
			else if (dices[2] === 4 || dices[2] === 6) {
				return 0;
			}
		}
	} else if (game_submode === 5) {
		// if mini die was rolled
		if (typeof dices[1] === 'number') {
			// if number was rolled on mini die
			if (dices[1] <= 4) {
				distance += dices[1];
			}
			// if taxi was rolled, no movement
			else if (dices[1] === 6) {
				return 0;
			}
		}
	} else {
		distance += dices[1]!;
	}

	return distance;
}
