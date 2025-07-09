import {
	array,
	boolean,
	type InferOutput,
	literal,
	nullable,
	number,
	object,
	optional,
	pipe,
	record,
	strictObject,
	string,
	transform,
	union,
} from 'valibot';
import type { MapElement } from '../../utils/types.js';
import { valiM1DemoPacketSetipConfigRestartVariantSchema } from '../setup/config.js';

export const valiM1DemoPacketStatusPlayersSchema = pipe(
	array(
		pipe(
			object({
				/** User ID of the player. */
				user_id: number(),
				/**
				 * Player status:
				 * - `0`: players is active;
				 * - `-1`: player is eliminated.
				 */
				status: number(),
				/** Player's position on the board. */
				position: number(),
				/** Player's cash. */
				cash: number(),
				/** Player's score: how much rent they have collected. */
				score: number(),
				/** Player's jail status */
				jail: optional(
					object({
						roll_double_attempts: number(),
					}),
				),
				loan: union([
					strictObject({
						taken: pipe(
							literal(0),
							transform(() => false as const),
						),
						unlock_round: number(),
					}),
					strictObject({
						taken: pipe(
							literal(1),
							transform(() => true as const),
						),
						debt: number(),
						return_round: number(),
					}),
				]),
				restart: optional(
					object({
						variant: nullable(valiM1DemoPacketSetipConfigRestartVariantSchema),
					}),
				),
			}),
			transform((value) => value),
		),
	),
	transform(
		(value) => new Map(value.map((player) => [player.user_id, player])),
	),
);

export type M1DemoPacketStatusPlayer = MapElement<
	InferOutput<typeof valiM1DemoPacketStatusPlayersSchema>
>;

// -------------------------------------------------
// --------------- TRANSFORM FROM V1 ---------------
// -------------------------------------------------

export const valiM1DemoPacketV1StatusPlayersSchema = array(
	pipe(
		object({
			user_id: number(),
			// setup
			vip: optional(boolean(), false),
			cards_equipped: optional(
				record(
					string(),
					object({
						thing_id: number(),
						coeff_rent: number(),
					}),
				),
			),
			can_use_credit: optional(boolean(), false),
			// status
			status: number(),
			position: number(),
			money: number(),
			score: number(),
			// jail
			jailed: boolean(),
			unjailAttempts: number(),
			// loan
			credit_nextTakeRound: number(),
			credit_payRound: union([literal(false), number()]),
			credit_toPay: number(),
			// restart
			restart: optional(
				union([
					pipe(
						literal(0),
						transform(() => null),
					),
					valiM1DemoPacketSetipConfigRestartVariantSchema,
				]),
			),
		}),
		transform((value) => {
			return {
				user_id: value.user_id,
				_setup: value.cards_equipped
					? {
							index: -1,
							is_vip: value.vip,
							is_loan_available: value.can_use_credit,
							equipment: {
								cards: new Map(
									Object.entries(value.cards_equipped).map(
										([field_id_string, card_equipped]) => {
											const field_id = Number.parseInt(field_id_string);

											return [
												field_id,
												{
													field_id,
													item_proto_id: 0,
													item_id: card_equipped.thing_id,
													rent_multiplier: card_equipped.coeff_rent,
												},
											];
										},
									),
								),
							},
						}
					: undefined,
				_status: {
					status: value.status,
					position: value.position,
					cash: value.money,
					score: value.score,
					jail: value.jailed
						? {
								roll_double_attempts: value.unjailAttempts,
							}
						: undefined,
					loan:
						value.credit_payRound === false
							? {
									taken: false as const,
									unlock_round: value.credit_nextTakeRound,
								}
							: {
									taken: true as const,
									debt: value.credit_toPay,
									return_round: value.credit_payRound,
								},
					restart:
						value.restart === undefined
							? undefined
							: {
									variant: value.restart,
								},
				},
			};
		}),
	),
);

type _M1DemoPacketV1StatusPlayer = InferOutput<
	typeof valiM1DemoPacketV1StatusPlayersSchema
>[number];
