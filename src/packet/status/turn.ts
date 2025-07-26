import * as v from 'valibot';
import type { SetElement } from '../../utils/types.js';
import { bit } from '../../utils/valibot.js';

export const valiM1DemoContractSchema = v.pipe(
	v.tuple([
		v.object({
			user_id: v.number(),
			field_ids: v.array(v.number()),
			cash: v.number(),
		}),
		v.object({
			user_id: v.number(),
			field_ids: v.array(v.number()),
			cash: v.number(),
		}),
	]),
	v.transform(([initiator, responder]) => {
		return {
			initiator: {
				user_id: initiator.user_id,
				field_ids: new Set(initiator.field_ids),
				cash: initiator.cash,
			},
			responder: {
				user_id: responder.user_id,
				field_ids: new Set(responder.field_ids),
				cash: responder.cash,
			},
		};
	}),
);
export type M1DemoContract = v.InferOutput<typeof valiM1DemoContractSchema>;

export const valiM1DemoPacketStatusTurnSchema = v.object({
	/** User ID of the player whose turn it is. */
	user_id: v.nullable(v.number()),
	action: v.object({
		/** User ID of the player from which action is expected. */
		user_id: v.nullable(v.number()),
		list: v.pipe(
			v.array(
				v.picklist([
					// Auction
					'auction.put',
					'auction.bid',
					'auction.reject',
					// Bank
					'bank.fee.pay',
					// Bus
					'bus.move',
					// Contract
					'contract.send',
					'contract.accept',
					'contract.reject',
					'contract.review.approve',
					'contract.review.object',
					'contract.fallback',
					// Jackpot
					'jackpot.reject',
					'jackpot.play',
					// 'jackpot.pay',
					// Jail
					'jail.release.pay',
					// Levels
					'level.build',
					'level.sell',
					// Loan
					'loan.take',
					'loan.repay',
					// Mortgage
					'mortgage.put',
					'mortgage.buyback',
					// 'mortgage.transfer',
					'mortgage.auction',
					// 'waive',
					// Purchase
					'purchase',
					'purchase.reject',
					// Rent
					'rent.pay',
					// Rolling dices
					'roll-dices',
					// Russian roulette
					'russian-roulette.play',
					'russian-roulette.reject',
					// Start
					'start.tax.pay',
					// Taxi
					// 'taxi.move',
					// Triple
					'triple.move',
					// Wormhole
					'wormhole.use',
					'wormhole.open',
					'wormhole.jump',
					'wormhole.reject',
					// Other
					'restart',
				]),
			),
			v.transform((value) => new Set(value)),
		),
	}),
	move_reversed: bit(false),
	auction: v.optional(
		v.object({
			field_id: v.number(),
			bid: v.number(),
			user_ids_rejected: v.pipe(
				v.array(v.number()),
				v.transform((value) => new Set(value)),
			),
		}),
	),
	contract: v.optional(valiM1DemoContractSchema),
	contracts_sent: v.optional(v.number()),
	jackpot: v.optional(
		v.object({
			superprize: v.number(),
		}),
	),
	payment: v.optional(
		v.object({
			to_user_id: v.optional(v.number()),
			amount: v.number(),
		}),
	),
	/** Fields on which player can move in this action. */
	field_ids_move: v.optional(
		v.pipe(
			v.array(
				v.object({
					field_id: v.number(),
					data: v.union([
						// bus, taxi
						v.object({
							stop: v.number(),
						}),
						// triple, wormhole
						v.object({
							field_id: v.number(),
						}),
					]),
				}),
			),
			v.transform(
				(value) => new Map(value.map((item) => [item.field_id, item.data])),
			),
		),
	),
	/** Fields on which player already built a level this turn. */
	field_ids_level_built: v.optional(
		v.pipe(
			v.array(v.number()),
			v.transform((value) => new Set(value)),
		),
	),
	/** Fields which player already mortgaged this turn. */
	field_ids_mortgaged: v.optional(
		v.pipe(
			v.array(v.number()),
			v.transform((value) => new Set(value)),
		),
	),
});

export type M1DemoPacketStatusTurn = v.InferOutput<
	typeof valiM1DemoPacketStatusTurnSchema
>;
export type M1DemoPacketStatusTurnActionListElement = SetElement<
	M1DemoPacketStatusTurn['action']['list']
>;
