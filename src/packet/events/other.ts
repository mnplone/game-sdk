import {
	type InferOutput,
	literal,
	number,
	object,
	optional,
	pipe,
	strictObject,
	string,
	transform,
	undefined_,
	union,
	unknown,
} from 'valibot';
import { bit } from '../../utils/valibot.js';
import type { EventEnrichOptions } from '../events.all.js';

const valiChanceDataSchema = union([
	// cash_in, cash_out, repair, insurance, birthday
	strictObject({
		amount: number(),
	}),
	// teleport
	strictObject({
		field_id: number(),
		move_reversed: bit(false),
	}),
	// jail, move_skip, fields_disaster, reverse
	undefined_(),
]);

export const valiSchemas = [
	object({
		id: string(),
		type: literal('bankrupt'),
		user_id: number(),
		user_id_bankrupt: number(),
	}),
	object({
		id: string(),
		type: literal('chance'),
		user_id: number(),
		chance_index: number(),
		data: valiChanceDataSchema,
	}),
	object({
		id: string(),
		type: literal('game-over'),
	}),
	object({
		id: string(),
		type: literal('leave'),
		user_id: number(),
		kicked: bit(false),
	}),
	object({
		id: string(),
		type: literal('message'),
		user_id: number(),
		private: optional(
			object({
				user_id: optional(number()),
			}),
		),
		is_forced: bit(false),
		text: string(),
	}),
	object({
		id: string(),
		type: literal('restart'),
		user_id: number(),
		restart_price: number(),
	}),
];

export const enrichments = {
	chance(options: EventEnrichOptions<'chance'>) {
		const chance_card_index = options.event.chance_index;
		const chance_card =
			options.setup.config.mechanics.chance!.cards[chance_card_index];

		const player = options.status.players.get(options.event.user_id)!;

		switch (chance_card?.type) {
			case 'income':
			case 'birthday':
				if (!options.event.data || 'amount' in options.event.data !== true) {
					throw new TypeError(
						`Invalid chance event data: missing "amount" field for "${chance_card.type}" chance card.`,
					);
				}

				player.cash += options.event.data.amount;
				break;

			case 'go-to-jail':
				player.position = options.field_id_jail;
				player.jail = {
					roll_double_attempts: 0,
				};
				break;

			case 'teleport':
				// in some older demos, there can be no "position"
				if (options.event.data && 'field_id' in options.event.data) {
					player.position = options.event.data.field_id;
				}
				break;

			// no default
		}
	},
};

const element = document.createElement('p');

/**
 * Replaces HTML entities with their respective characters.
 * @param text - Text to unescape.
 * @returns Unescaped text.
 */
function unescapeHtml(text: string) {
	element.innerHTML = text;
	return element.textContent!;
}

export const valiV1Schemas = [
	pipe(
		object({
			_id: optional(string()),
			type: literal('bankrupted'),
			user_id: number(),
			to: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'bankrupt' as const,
				user_id: value.user_id,
				user_id_bankrupt: value.to,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('chance'),
			user_id: number(),
			chance_id: number(),
			// cash_in, cash_out, repair, insurance, birthday
			money: optional(number()),
			// teleport
			move_reverse: optional(bit(false)),
			mean_position: optional(number()),
		}),
		transform((value) => {
			let data: InferOutput<typeof valiChanceDataSchema>;
			// More complex structures first.
			// teleport
			if (typeof value.mean_position === 'number') {
				data = {
					move_reversed: value.move_reverse ?? false,
					field_id: value.mean_position,
				};
			}
			// cash_in, cash_out, repair, insurance, birthday
			else if (typeof value.money === 'number') {
				data = {
					amount: value.money,
				};
			}

			return {
				id: value._id,
				type: 'chance' as const,
				user_id: value.user_id,
				chance_index: value.chance_id,
				data,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('gameOver'),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'game-over' as const,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('leave'),
			user_id: number(),
			is_kicked: bit(false),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'leave' as const,
				user_id: value.user_id,
				kicked: value.is_kicked,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('message'),
			user_id: number(),
			private: optional(
				object({
					user: optional(number()),
					team: optional(unknown()),
				}),
			),
			forced: bit(false),
			text: string(),
			is_unsafe: bit(false),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'message' as const,
				user_id: value.user_id,
				private: value.private
					? {
							user_id: value.private.user,
						}
					: undefined,
				is_forced: value.forced,
				text: value.is_unsafe ? value.text : unescapeHtml(value.text),
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('restart'),
			user_id: number(),
			money: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'restart' as const,
				user_id: value.user_id,
				restart_price: value.money,
			};
		}),
	),
];
