import * as v from 'valibot';
import type { MapElement } from '../../utils/types.js';
import { valiM1DemoPacketSetipConfigRestartVariantSchema } from '../setup/config.js';

export const valiM1DemoPacketStatusPlayersSchema = v.pipe(
	v.array(
		v.pipe(
			v.object({
				/** User ID of the player. */
				user_id: v.number(),
				/**
				 * Player status:
				 * - `0`: players is active;
				 * - `-1`: player is eliminated.
				 */
				status: v.number(),
				/** Player's position on the board. */
				position: v.number(),
				/** Player's cash. */
				cash: v.number(),
				/** Player's score: how much rent they have collected. */
				score: v.number(),
				/** Player's jail status */
				jail: v.optional(
					v.object({
						roll_double_attempts: v.number(),
					}),
				),
				loan: v.union([
					v.strictObject({
						taken: v.pipe(
							v.literal(0),
							v.transform(() => false as const),
						),
						unlock_round: v.number(),
					}),
					v.strictObject({
						taken: v.pipe(
							v.literal(1),
							v.transform(() => true as const),
						),
						debt: v.number(),
						return_round: v.number(),
					}),
				]),
				restart: v.optional(
					v.object({
						variant: v.nullable(
							valiM1DemoPacketSetipConfigRestartVariantSchema,
						),
					}),
				),
			}),
			v.transform((value) => value),
		),
	),
	v.transform(
		(value) => new Map(value.map((player) => [player.user_id, player])),
	),
);

export type M1DemoPacketStatusPlayer = MapElement<
	v.InferOutput<typeof valiM1DemoPacketStatusPlayersSchema>
>;

// -------------------------------------------------
// --------------- TRANSFORM FROM V1 ---------------
// -------------------------------------------------

export const valiM1DemoPacketV1StatusPlayersSchema = v.array(
	v.pipe(
		v.object({
			user_id: v.number(),
			// setup
			vip: v.optional(v.boolean(), false),
			cards_equipped: v.optional(
				v.record(
					v.string(),
					v.object({
						thing_id: v.number(),
						coeff_rent: v.number(),
					}),
				),
			),
			generator: v.optional(
				v.pipe(
					v.object({
						generator_id: v.number(),
						variant_id: v.optional(v.number()),
						seed: v.optional(v.string()),
					}),
					v.transform((value) => {
						if (value.generator_id === -100) {
							return undefined;
						}

						return {
							item_proto_id: value.generator_id,
							variant_id: value.variant_id,
							seed: value.seed,
						};
					}),
				),
			),
			joke: v.optional(
				v.pipe(
					v.union([
						v.literal(false),
						v.number(),
						v.object({
							proto_id: v.number(),
						}),
					]),
					v.transform((value) => {
						if (value === false) {
							return undefined;
						}

						if (typeof value === 'number') {
							return { item_proto_id: value };
						}

						return {
							item_proto_id: value.proto_id,
						};
					}),
				),
			),
			can_use_credit: v.optional(v.boolean(), false),
			// status
			status: v.number(),
			position: v.number(),
			money: v.number(),
			score: v.number(),
			// jail
			jailed: v.boolean(),
			unjailAttempts: v.number(),
			// loan
			credit_nextTakeRound: v.number(),
			credit_payRound: v.union([v.literal(false), v.number()]),
			credit_toPay: v.number(),
			// restart
			restart: v.optional(
				v.union([
					v.pipe(
						v.literal(0),
						v.transform(() => null),
					),
					valiM1DemoPacketSetipConfigRestartVariantSchema,
				]),
			),
		}),
		v.transform((value) => {
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
								generator: value.generator,
								joke: value.joke,
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

type _M1DemoPacketV1StatusPlayer = v.InferOutput<
	typeof valiM1DemoPacketV1StatusPlayersSchema
>[number];
