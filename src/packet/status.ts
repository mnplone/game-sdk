import {
	array,
	boolean,
	type InferOutput,
	nullable,
	number,
	object,
	optional,
	picklist,
	pipe,
	record,
	string,
	transform,
	tuple,
	union,
} from 'valibot';
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

export const valiM1DemoPacketStatusSchema = object({
	/** Round number. */
	round: number(),
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
	timer: optional(
		union([
			object({
				/** Unix timestamp when timer for an action expires, in **milliseconds**. */
				ts_expires: number(),
				/** If timer is extra timer. */
				is_extra: boolean(),
			}),
			object({
				/** When match paused, time left in **milliseconds**. */
				expires_in: number(),
				/** If timer is extra timer. */
				is_extra: boolean(),
			}),
		]),
	),
});

export type M1DemoPacketStatus = InferOutput<
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
	// 'contract.review.approve',
	// 'contract.review.object',
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
	// 'russian-roulette.play',
	// 'russian-roulette.reject',
	// Start
	// 'start.tax.pay',
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
] as const;

export const packetv1_action_mapping = Object.fromEntries([
	...Object.entries(action_list_mapping).map(([key, value]) => [value, key]),
	...extra_actions_mapping,
]) as Record<
	| M1DemoPacketStatusTurnActionListElement
	| (typeof extra_actions_mapping)[number][0],
	keyof typeof action_list_mapping | (typeof extra_actions_mapping)[number][1]
>;

const valiM1DemoPacketV1StatusActiontypeSchema = array(
	picklist(
		Object.keys(action_list_mapping) as (keyof typeof action_list_mapping)[],
	),
);
type M1DemoPacketV1StatusActiontype = InferOutput<
	typeof valiM1DemoPacketV1StatusActiontypeSchema
>;

export const valiM1DemoPacketV1ContractSchema = pipe(
	object({
		from: number(),
		to: number(),
		out_fields: array(number()),
		out_money: number(),
		in_fields: array(number()),
		in_money: number(),
	}),
	transform(
		(value) =>
			({
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
			}) satisfies M1DemoContract,
	),
);

export const valiM1DemoPacketV1StatusSchema = pipe(
	object({
		/** Round number. */
		round: number(),
		players: valiM1DemoPacketV1StatusPlayersSchema,
		fields: valiM1DemoPacketV1StatusFieldsSchema,
		// turn
		player_ownerOfMove: nullable(number()),
		action_player: nullable(number()),
		action_type: valiM1DemoPacketV1StatusActiontypeSchema,
		current_move: optional(
			object({
				dices: optional(
					tuple([number(), optional(number()), optional(number())]),
				),
				move_reverse: optional(boolean(), false),
				pay: optional(number()),
				moneyToPay: optional(number()),
				payTo: optional(number()),
				// auction
				players_auctionStatus: optional(
					pipe(
						record(string(), number()),
						transform(
							(value) =>
								new Set(
									Object.entries(value)
										.filter(([_, status]) => status === 0)
										.map(([user_id_string]) => Number.parseInt(user_id_string)),
								),
						),
					),
				),
				field: optional(number()),
				bet: optional(number()),
				// contract
				contract: optional(valiM1DemoPacketV1ContractSchema),
				contracts: optional(number()),
				// jackpot
				jackpot_superprize_money: optional(number()),
				// wormhole
				wormhole_destinations: optional(array(number())),
				// other
				levelUpped: optional(array(number())),
				mortgaged: optional(array(number())),
			}),
		),
		// timeout
		timeout_ts: number(),
		timeout_is_additional: boolean(),
	}),
	transform((value) => {
		for (const [index, player] of value.players.entries()) {
			if (player._setup) {
				player._setup.index = index;
			}
		}

		return value;
	}),
	// eslint-disable-next-line complexity, max-lines-per-function
	transform((value) => {
		const {
			// turn
			player_ownerOfMove,
			action_player,
			action_type,
			current_move,
			// timeout
			timeout_ts,
			timeout_is_additional,
			...value_rest
		} = value;

		const action_list = transformActionsList(action_type);

		const payment_amount = current_move?.pay ?? current_move?.moneyToPay;

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
