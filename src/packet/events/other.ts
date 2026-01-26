import * as v from 'valibot';
import { bit } from '../../utils/valibot.js';
import type { EventEnrichOptions } from '../events.all.js';

const valiChanceDataSchema = v.union([
	// cash_in, cash_out, repair, insurance, birthday
	v.strictObject({
		amount: v.number(),
	}),
	// teleport
	v.strictObject({
		field_id: v.number(),
		move_reversed: bit(false),
	}),
	// jail, move_skip, fields_disaster, reverse
	v.undefined_(),
]);

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('bankrupt'),
		user_id: v.number(),
		user_id_bankrupt: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('chance'),
		user_id: v.number(),
		chance_index: v.number(),
		data: valiChanceDataSchema,
	}),
	v.object({
		id: v.string(),
		type: v.literal('game-over'),
	}),
	v.object({
		id: v.string(),
		type: v.literal('leave'),
		user_id: v.number(),
		kicked: bit(false),
	}),
	v.object({
		id: v.string(),
		type: v.literal('message'),
		user_id: v.number(),
		private: v.optional(
			v.object({
				user_id: v.optional(v.number()),
			}),
		),
		is_forced: bit(false),
		text: v.string(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('park'),
		user_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('restart'),
		user_id: v.number(),
		restart_price: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('skip'),
		user_id: v.number(),
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

			case 'goto.jail':
				player.position = options.field_id_jail;
				player.jail = {
					roll_double_attempts: 0,
				};
				break;

			case 'goto.start':
				player.position = 0;
				break;

			case 'teleport':
			case 'move.undo':
				// in some older demos, there can be no "position" in "teleport"
				if (options.event.data && 'field_id' in options.event.data) {
					player.position = options.event.data.field_id;
				}
				break;

			// no default
		}
	},
};

/**
 * Replaces HTML entities with their respective characters.
 *
 * This method replaces only entities that were escaped in old server versions.
 * @param text - Text to unescape.
 * @returns Unescaped text.
 */
function unescapeHtml(text: string) {
	return text
		.replaceAll('&#39;', "'")
		.replaceAll('&#34;', '"')
		.replaceAll('&lt;', '<')
		.replaceAll('&gt;', '>')
		.replaceAll('&amp;', '&');
}

export const valiV1Schemas = [
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('bankrupted'),
			user_id: v.number(),
			to: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'bankrupt' as const,
				user_id: value.user_id,
				user_id_bankrupt: value.to,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('chance'),
			user_id: v.number(),
			chance_id: v.number(),
			// cash_in, cash_out, repair, insurance, birthday
			money: v.optional(v.number()),
			// teleport, move_undo
			move_reverse: v.optional(bit(false)),
			mean_position: v.optional(v.number()),
		}),
		v.transform((value) => {
			let data: v.InferOutput<typeof valiChanceDataSchema>;
			// More complex structures first.
			// teleport, move_undo
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
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('gameOver'),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'game-over' as const,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('leave'),
			user_id: v.number(),
			is_kicked: bit(false),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'leave' as const,
				user_id: value.user_id,
				kicked: value.is_kicked,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('message'),
			user_id: v.number(),
			private: v.optional(
				v.object({
					user: v.optional(v.number()),
					team: v.optional(v.unknown()),
				}),
			),
			forced: bit(false),
			text: v.string(),
			is_unsafe: bit(false),
		}),
		v.transform((value) => {
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
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('relax'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'park' as const,
				user_id: value.user_id,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('restart'),
			user_id: v.number(),
			money: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'restart' as const,
				user_id: value.user_id,
				restart_price: value.money,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('skip'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'skip' as const,
				user_id: value.user_id,
			};
		}),
	),
];
