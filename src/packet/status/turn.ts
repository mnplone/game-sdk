import {
	array,
	type InferOutput,
	nullable,
	number,
	object,
	optional,
	picklist,
	pipe,
	transform,
	tuple,
	union,
} from 'valibot';
import type { SetElement } from '../../utils/types.js';
import { bit } from '../../utils/valibot.js';

export const valiM1DemoContractSchema = pipe(
	tuple([
		object({
			user_id: number(),
			field_ids: array(number()),
			cash: number(),
		}),
		object({
			user_id: number(),
			field_ids: array(number()),
			cash: number(),
		}),
	]),
	transform(([initiator, responder]) => {
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
export type M1DemoContract = InferOutput<typeof valiM1DemoContractSchema>;

export const valiM1DemoPacketStatusTurnSchema = object({
	/** User ID of the player whose turn it is. */
	user_id: nullable(number()),
	action: object({
		/** User ID of the player from which action is expected. */
		user_id: nullable(number()),
		list: pipe(
			array(
				picklist([
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
					// 'contract.review.approve',
					// 'contract.review.object',
					// ??? 'contract.fallback',
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
					// 'russian-roulette.play',
					// 'russian-roulette.reject',
					// Start
					// 'start.tax.pay',
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
			transform((value) => new Set(value)),
		),
	}),
	move_reversed: bit(false),
	auction: optional(
		object({
			field_id: number(),
			bid: number(),
			user_ids_rejected: pipe(
				array(number()),
				transform((value) => new Set(value)),
			),
		}),
	),
	contract: optional(valiM1DemoContractSchema),
	contracts_sent: optional(number()),
	jackpot: optional(
		object({
			superprize: number(),
		}),
	),
	payment: optional(
		object({
			to_user_id: optional(number()),
			amount: number(),
		}),
	),
	/** Fields on which player can move in this action. */
	field_ids_move: optional(
		pipe(
			array(
				object({
					field_id: number(),
					data: union([
						// bus, taxi
						object({
							stop: number(),
						}),
						// triple, wormhole
						object({
							field_id: number(),
						}),
					]),
				}),
			),
			transform(
				(value) => new Map(value.map((item) => [item.field_id, item.data])),
			),
		),
	),
	/** Fields on which player already built a level this turn. */
	field_ids_level_built: optional(
		pipe(
			array(number()),
			transform((value) => new Set(value)),
		),
	),
	/** Fields which player already mortgaged this turn. */
	field_ids_mortgaged: optional(
		pipe(
			array(number()),
			transform((value) => new Set(value)),
		),
	),
});

export type M1DemoPacketStatusTurn = InferOutput<
	typeof valiM1DemoPacketStatusTurnSchema
>;
export type M1DemoPacketStatusTurnActionListElement = SetElement<
	M1DemoPacketStatusTurn['action']['list']
>;
