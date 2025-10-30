import * as v from 'valibot';
import {
	valiM1DemoPacketStatusFieldsSchema,
	valiM1DemoPacketV1StatusFieldsSchema,
} from './status/fields.js';
import {
	valiM1DemoPacketStatusPlayersSchema,
	valiM1DemoPacketV1StatusPlayersSchema,
} from './status/player.js';
import {
	type M1DemoContract,
	type M1DemoPacketStatusTurn,
	type M1DemoPacketStatusTurnActionListElement,
	valiM1DemoPacketStatusTurnSchema,
} from './status/turn.js';
// import { normalizeFieldId } from '@/js/table/.tools.js';

export const valiM1DemoPacketStatusSchema = v.object({
	/** Round number. */
	round: v.number(),
	/** Players. */
	players: valiM1DemoPacketStatusPlayersSchema,
	/** Current information about fields. */
	fields: valiM1DemoPacketStatusFieldsSchema,
	/** Information about current turn. */
	turn: valiM1DemoPacketStatusTurnSchema,
	/**
	 * Info about timer.
	 *
	 * If match set up with no timers, this object is not defined.
	 */
	timer: v.optional(
		v.union([
			v.object({
				/** Unix timestamp when timer for an action expires, in **milliseconds**. */
				ts_expires: v.number(),
				/** If timer is extra timer. */
				is_extra: v.boolean(),
			}),
			v.object({
				/** When match paused, time left in **milliseconds**. */
				expires_in: v.number(),
				/** If timer is extra timer. */
				is_extra: v.boolean(),
			}),
		]),
	),
	/** Number of viewers. */
	viewers_count: v.optional(v.number(), 0),
});

export type M1DemoPacketStatus = v.InferOutput<
	typeof valiM1DemoPacketStatusSchema
>;
export type M1DemoPacketStatusTimer = M1DemoPacketStatus['timer'];

// -------------------------------------------------
// --------------- TRANSFORM FROM V1 ---------------
// -------------------------------------------------

// type TablePacketV1Status = InferOutput<typeof valiTablePacketV1StatusSchema>;

const action_list_mapping = {
	// Auction
	toAuction: 'auction.put',
	auctionAccept: 'auction.bid',
	auctionDecline: 'auction.reject',
	// Bank
	payToBank: 'bank.fee.pay',
	// Bus
	chooseBusStop: 'bus.move',
	// Contract
	contract: 'contract.send',
	contract_accept: 'contract.accept',
	contract_decline: 'contract.reject',
	contractProtestRefuse: 'contract.review.approve',
	contractProtestCommit: 'contract.review.object',
	// Jackpot
	jackpotDecline: 'jackpot.reject',
	jackpotPlay: 'jackpot.play',
	// jackpotPay: 'jackpot.pay',
	// Jail
	payForUnjail: 'jail.release.pay',
	// Levels
	levelUp: 'level.build',
	levelDown: 'level.sell',
	// Loan
	credit_take: 'loan.take',
	credit_pay: 'loan.repay',
	// Mortgage
	mortgage: 'mortgage.put',
	unmortgage: 'mortgage.buyback',
	// 'mortgage.transfer',
	auctionMortgaged: 'mortgage.auction',
	// 'waive',
	// Pause ???
	// 'pause.set',
	// 'pause.end',
	// Purchase
	buy: 'purchase',
	noBuy: 'purchase.reject',
	// Rent
	payRent: 'rent.pay',
	// Rolling dices
	rollDices: 'roll-dices',
	// Russian roulette
	russianRoulettePlay: 'russian-roulette.play',
	russianRouletteDecline: 'russian-roulette.reject',
	// Start
	startBypassFee: 'start.tax.pay',
	// Taxi
	// 'taxi.move',
	// Triple
	chooseFieldToMove: 'triple.move',
	// Wormhole
	wormholeUse: 'wormhole.use',
	wormholeOpen: 'wormhole.open',
	wormholeJump: 'wormhole.jump',
	wormholeDecline: 'wormhole.reject',
	// Other
	restart: 'restart',
} as const;

const extra_actions_mapping = [
	['leave', 'leave'],
	['message', 'message'],
	['pause.set', 'pause'],
	['pause.end', 'pauseRemove'],
	['contract.fallback', 'contractFallback'],
] as const;

export const packetv1_action_mapping = Object.fromEntries([
	...Object.entries(action_list_mapping).map(([key, value]) => [value, key]),
	...extra_actions_mapping,
]) as Record<
	| M1DemoPacketStatusTurnActionListElement
	| (typeof extra_actions_mapping)[number][0],
	keyof typeof action_list_mapping | (typeof extra_actions_mapping)[number][1]
>;

const valiM1DemoPacketV1StatusActiontypeSchema = v.array(
	v.picklist(
		Object.keys(action_list_mapping) as (keyof typeof action_list_mapping)[],
	),
);
type M1DemoPacketV1StatusActiontype = v.InferOutput<
	typeof valiM1DemoPacketV1StatusActiontypeSchema
>;

export const valiM1DemoPacketV1ContractSchema = v.pipe(
	v.object({
		from: v.number(),
		to: v.number(),
		out_fields: v.array(v.number()),
		out_money: v.number(),
		in_fields: v.array(v.number()),
		in_money: v.number(),
	}),
	v.transform((value) => {
		const r_ = {
			initiator: {
				user_id: value.from,
				field_ids: new Set(value.out_fields),
				cash: value.out_money,
			},
			responder: {
				user_id: value.to,
				field_ids: new Set(value.in_fields),
				cash: value.in_money,
			},
		} satisfies M1DemoContract;

		return r_;
	}),
);

export const valiM1DemoPacketV1StatusSchema = v.pipe(
	v.object({
		/** Round number. */
		round: v.number(),
		players: valiM1DemoPacketV1StatusPlayersSchema,
		fields: valiM1DemoPacketV1StatusFieldsSchema,
		// turn
		player_ownerOfMove: v.nullable(v.number()),
		action_player: v.nullable(v.number()),
		action_type: valiM1DemoPacketV1StatusActiontypeSchema,
		current_move: v.optional(
			v.object({
				dices: v.optional(
					v.tuple([v.number(), v.optional(v.number()), v.optional(v.number())]),
				),
				move_reverse: v.optional(v.boolean(), false),
				pay: v.optional(v.number()),
				moneyToPay: v.optional(v.number()),
				payTo: v.optional(v.number()),
				// auction
				players_auctionStatus: v.optional(
					v.pipe(
						v.record(v.string(), v.number()),
						v.transform(
							(value) =>
								new Set(
									Object.entries(value)
										.filter(([_, status]) => status === 0)
										.map(([user_id_string]) =>
											Number.parseInt(user_id_string, 10),
										),
								),
						),
					),
				),
				field: v.optional(v.number()),
				bet: v.optional(v.number()),
				// contract
				contract: v.optional(valiM1DemoPacketV1ContractSchema),
				contracts: v.optional(v.number()),
				// jackpot
				jackpot_superprize_money: v.optional(v.number()),
				// wormhole
				wormhole_destinations: v.optional(v.array(v.number())),
				// other
				levelUpped: v.optional(v.array(v.number())),
				mortgaged: v.optional(v.array(v.number())),
			}),
		),
		// timeout
		timeout_ts: v.number(),
		timeout_is_additional: v.boolean(),
		// viewers
		viewers: v.optional(v.number(), 0),
	}),
	v.transform((value) => {
		for (const [index, player] of value.players.entries()) {
			if (player._setup) {
				player._setup.index = index;
			}
		}

		return value;
	}),
	// eslint-disable-next-line complexity, max-lines-per-function
	v.transform((value) => {
		const {
			// turn
			player_ownerOfMove,
			action_player,
			action_type,
			current_move,
			// timeout
			timeout_ts,
			timeout_is_additional,
			// viewers
			viewers,
			...value_rest
		} = value;

		const action_list = transformActionsList(action_type);

		const payment_amount = current_move?.moneyToPay ?? current_move?.pay;

		let auction: M1DemoPacketStatusTurn['auction'];
		let field_ids_move: M1DemoPacketStatusTurn['field_ids_move'];
		if (current_move) {
			const action_player_data = value_rest.players.find(
				(player) => player.user_id === action_player,
			);
			if (!action_player_data) {
				throw new Error(`Player with user_id ${action_player_data} not found.`);
			}

			if (action_list.has('bus.move')) {
				if (!current_move.dices) {
					throw new Error('Missing field "status.current_move.dices".');
				}

				const direction = current_move.move_reverse ? -1 : 1;

				field_ids_move = new Map(
					(
						[
							[current_move.dices[0], { stop: 0 }],
							[current_move.dices[1]!, { stop: 1 }],
							[current_move.dices[0] + current_move.dices[1]!, { stop: -1 }],
						] as const
					).map(([stop, action_data]) => [
						action_player_data._status.position + direction * stop,
						action_data,
					]),
				);
			}

			if (action_list.has('auction.bid')) {
				if (!current_move.players_auctionStatus) {
					throw new TypeError(
						'Missing field "status.current_move.players_auctionStatus".',
					);
				}

				if (typeof current_move.bet !== 'number') {
					throw new TypeError('Missing field "status.current_move.bet".');
				}

				if (typeof current_move.field !== 'number') {
					throw new TypeError('Missing field "status.current_move.field".');
				}

				auction = {
					field_id: current_move.field,
					bid: current_move.bet,
					user_ids_rejected: current_move.players_auctionStatus,
				};
			}

			if (action_list.has('wormhole.jump')) {
				if (!current_move.wormhole_destinations) {
					throw new TypeError(
						'Missing field "status.current_move.wormhole_destinations".',
					);
				}

				field_ids_move = new Map(
					current_move.wormhole_destinations.map((field_id) => [
						field_id,
						{ field_id },
					]),
				);
			}
		}

		return {
			...value_rest,
			turn: {
				user_id: player_ownerOfMove,
				action: {
					user_id: action_player,
					list: action_list,
				},
				move_reversed: current_move?.move_reverse ?? false,
				auction,
				contract: current_move?.contract,
				contracts_sent: current_move?.contracts,
				jackpot:
					typeof current_move?.jackpot_superprize_money === 'number'
						? {
								superprize: current_move.jackpot_superprize_money,
							}
						: undefined,
				payment:
					typeof payment_amount === 'number'
						? {
								amount: payment_amount,
								to_user_id: current_move?.payTo,
							}
						: undefined,
				field_ids_move,
				field_ids_level_built: current_move?.levelUpped
					? new Set(current_move.levelUpped)
					: undefined,
				field_ids_mortgaged: current_move?.mortgaged
					? new Set(current_move.mortgaged)
					: undefined,
			} satisfies M1DemoPacketStatusTurn,
			timer: (timeout_ts < -1e6
				? {
						expires_in: -(timeout_ts % 1e6) * 1000,
						is_extra: timeout_is_additional,
					}
				: {
						ts_expires: timeout_ts * 1000,
						is_extra: timeout_is_additional,
					}) satisfies M1DemoPacketStatusTimer,
			viewers_count: viewers,
		} satisfies Omit<M1DemoPacketStatus, 'players'>;
		// omitting the `players` field, because it will be transformed later, extracting constant fields to the `setup`
	}),
);

// eslint-disable-next-line jsdoc/require-jsdoc
function transformActionsList(list: M1DemoPacketV1StatusActiontype) {
	const list_new = new Set<M1DemoPacketStatusTurnActionListElement>();

	for (const action of list) {
		list_new.add(action_list_mapping[action]);
	}

	return list_new;
}
