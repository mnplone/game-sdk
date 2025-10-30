import * as v from 'valibot';
import { bit } from '../../utils/valibot.js';
import {
	valiM1DemoPacketSetupConfigMechanicsChanceSchema,
	valiM1DemoPacketV1ConfigChanceCardsSchema,
} from './config/chance.js';
import {
	valiM1DemoPacketSetupConfigFieldsSchema,
	valiM1DemoPacketV1ConfigFieldsSchema,
} from './config/fields.js';
import {
	valiM1DemoPacketSetupConfigMonopoliesSchema,
	valiM1DemoPacketV1ConfigGroupsSchema,
} from './config/monopolies.js';

export const valiM1DemoPacketSetipConfigRestartVariantSchema = v.object({
	round_from: v.number(),
	round_to: v.number(),
	count: v.number(),
	price: v.number(),
});

export const valiM1DemoPacketSetupConfigSchema = v.object({
	/** Version of the config. */
	version: v.number(),
	board_size: v.tuple([v.number(), v.number()]),
	timers: v.object({
		roll_dices: v.number(),
	}),
	fields: valiM1DemoPacketSetupConfigFieldsSchema,
	monopolies: valiM1DemoPacketSetupConfigMonopoliesSchema,
	mechanics: v.object({
		auction: v.optional(
			v.object({
				bid_increment: v.number(),
			}),
		),
		chance: v.optional(valiM1DemoPacketSetupConfigMechanicsChanceSchema),
		field_level: v.optional(
			v.object({
				/** Price multiplier when selling a level (house) on the field, applies to the level buy price. */
				sell_multiplier: v.optional(v.number(), 1),
				/** When true, player can build uneven levels on the field. */
				build_uneven: bit(false),
				/** When true, player can build levels on the field without owning the whole monopoly. */
				build_without_monopoly: bit(false),
			}),
		),
		jackpot: v.optional(
			v.object({
				// FIXME make it work with older jackpot
				bet: v.number(),
				multipliers: v.array(v.number()),
				superprize: v.object({
					// start_sum: v.number(),
					chance: v.number(),
					// bet_share: v.number(),
				}),
			}),
		),
		jail: v.object({
			release_fee: v.number(),
			double_roll_attempt_limit: v.optional(v.number(), 3),
		}),
		loan: v.optional(
			v.object({
				/** Loan amount. */
				amount: v.number(),
				/** Interest rate in total. */
				repay_multiplier: v.number(),
				/** Number of rounds to pay back the loan. */
				duration: v.number(),
				cooldown: v.object({
					/** On what round can player take a loan. */
					match_start: v.number(),
					/** How many rounds player should wait before taking another loan after repaying the previous one. */
					repay: v.number(),
				}),
			}),
		),
		mortgage: v.optional(
			v.object({
				/** Limits mortgage duration in rounds. After this rounds, player will lose the field. */
				duration: v.optional(v.number()),
				/** Price multiplier when mortgaging the field, applies to the field buy price. */
				multiplier: v.number(),
				/** Price multiplier when buying back the field, applies to the mortgage price. */
				buyback_multiplier: v.number(),
				/** Price multiplier when auctioning the mortgaged field, applies to company price minus mortgage price. */
				auction_multiplier: v.optional(v.number()),
			}),
		),
		restart: v.optional(
			v.object({
				variants: v.array(valiM1DemoPacketSetipConfigRestartVariantSchema),
			}),
		),
		russian_roulette: v.optional(
			v.object({
				rewards: v.array(v.number()),
			}),
		),
		start: v.object({
			income_amount: v.number(),
			bonus_amount: v.optional(v.number(), 0),
		}),
		/** Rules of the match that are based on the match time. */
		time_rules: v.array(
			v.union([
				v.object({
					type: v.literal('start.none'),
					/** Match time in **milliseconds**. */
					time: v.number(),
				}),
				v.object({
					type: v.literal('start.tax'),
					/** Match time in **milliseconds**. */
					time: v.number(),
					/** Sum player should pay when passing "Start". If `0`, player just will not receive money for passing "Start". */
					sum: v.number(),
				}),
				v.object({
					type: v.literal('rent.tax'),
					/** Match time in **milliseconds**. */
					time: v.number(),
					/** Income tax rate. */
					rate: v.number(),
				}),
			]),
		),
		wormhole: v.optional(
			v.object({
				// FIXME make it work with older wormhole
				exits_free_count: v.optional(v.number(), 3),
				exits_extra_price: v.number(),
				move_direct: bit(false),
			}),
		),
	}),
});

export type M1DemoPacketSetupConfig = v.InferOutput<
	typeof valiM1DemoPacketSetupConfigSchema
>;

// -------------------------------------------------
// --------------- TRANSFORM FROM V1 ---------------
// -------------------------------------------------

export const valiM1DemoPacketV1ConfigSchema = v.pipe(
	v.object({
		version: v.number(),
		size: v.tuple([v.number(), v.number()]),
		fields: valiM1DemoPacketV1ConfigFieldsSchema,
		groups: valiM1DemoPacketV1ConfigGroupsSchema,
		// timers
		TIME_FOR_ROLL_DICES: v.number(),
		// mechanics: auction
		AUCTION_BET_STEP: v.optional(v.number()),
		// mechanics: chance
		chance_cards: v.optional(valiM1DemoPacketV1ConfigChanceCardsSchema),
		// mechanics: field_level
		coeff_level_down: v.optional(v.number(), 1),
		UNEVEN_LEVEL_CHANGE: bit(false),
		LEVEL_CHANGE_NO_MNPL: bit(false),
		// mechanics: jackpot
		JACKPOT_BET: v.optional(v.number()),
		JACKPOT_COEFFS: v.optional(v.array(v.number())),
		// JACKPOT_SUPERPRIZE_START: v.optional(v.number()),
		JACKPOT_SUPERPRIZE_CHANCE: v.optional(v.number()),
		// JACKPOT_SUPERPRIZE_SHARE: v.optional(v.number()),
		// mechanics: jail
		jailFee: v.number(),
		UNJAIL_TRIES_LIMIT: v.optional(v.number(), 3),
		// mechanics: loan
		CREDIT_SUM: v.optional(v.number()),
		CREDIT_INTEREST: v.optional(v.number()),
		CREDIT_PERCENT: v.optional(v.number()),
		CREDIT_ROUNDS: v.optional(v.number()),
		CREDIT_COOLDOWN_ROUNDS: v.optional(v.number()),
		START_CREDIT_COOLDOWN_ROUNDS: v.optional(v.number()),
		// mechanics: mortgage
		MORTGAGE_ROUND_LIMIT: v.optional(v.number()),
		coeff_mortgage: v.number(),
		coeff_unmortgage: v.number(),
		auction_mortgaged: v.optional(v.number()),
		// mechanics: restart
		restart_variants: v.optional(
			v.array(valiM1DemoPacketSetipConfigRestartVariantSchema),
		),
		// mechanics: russian_roulette
		russian_roulette_rewards: v.optional(v.array(v.number())),
		// mechanics: start_bonus
		roundCash: v.number(),
		START_BONUS_SUM: v.optional(v.number(), 0),
		// mechanics: timer_rules
		roundTaxes: v.optional(
			v.array(
				v.object({
					game_time: v.number(),
					tax: v.number(),
				}),
			),
			() => [],
		),
		incomeTaxes: v.optional(
			v.array(
				v.object({
					game_time: v.number(),
					tax_rate: v.number(),
				}),
			),
			() => [],
		),
		// mechanics: wormhole
		WORMHOLE_DIRECTLY: v.optional(bit(false)),
		WORMHOLE_EXTRA_DESTINATION_COST: v.optional(v.number()),
	}),
	// transforming config in-place because it is a whole product
	// oxlint-disable-next-line max-lines-per-function
	v.transform((value) => {
		return {
			version: value.version,
			board_size: value.size,
			timers: {
				roll_dices: value.TIME_FOR_ROLL_DICES,
			},
			fields: value.fields,
			monopolies: value.groups,
			mechanics: {
				auction:
					typeof value.AUCTION_BET_STEP === 'number'
						? {
								bid_increment: value.AUCTION_BET_STEP,
							}
						: undefined,
				chance: value.chance_cards
					? {
							cards: value.chance_cards,
						}
					: undefined,
				field_level: {
					sell_multiplier: value.coeff_level_down,
					build_uneven: value.UNEVEN_LEVEL_CHANGE,
					build_without_monopoly: value.LEVEL_CHANGE_NO_MNPL,
				},
				jackpot:
					typeof value.JACKPOT_BET === 'number'
						? {
								bet: value.JACKPOT_BET,
								multipliers: value.JACKPOT_COEFFS!,
								superprize: {
									// start_sum: value.JACKPOT_SUPERPRIZE_START,
									chance: value.JACKPOT_SUPERPRIZE_CHANCE!,
									// bet_share: value.JACKPOT_SUPERPRIZE_SHARE,
								},
							}
						: undefined,
				jail: {
					release_fee: value.jailFee,
					double_roll_attempt_limit: value.UNJAIL_TRIES_LIMIT,
				},
				loan:
					typeof value.CREDIT_SUM === 'number'
						? {
								amount: value.CREDIT_SUM!,
								repay_multiplier:
									typeof value.CREDIT_INTEREST === 'number'
										? value.CREDIT_INTEREST
										: 1 + value.CREDIT_PERCENT! / 100,
								duration: value.CREDIT_ROUNDS!,
								cooldown: {
									match_start: value.START_CREDIT_COOLDOWN_ROUNDS!,
									repay: value.CREDIT_COOLDOWN_ROUNDS!,
								},
							}
						: undefined,
				mortgage: {
					duration: value.MORTGAGE_ROUND_LIMIT,
					multiplier: value.coeff_mortgage,
					buyback_multiplier: value.coeff_unmortgage,
					auction_multiplier: value.auction_mortgaged,
				},
				restart: value.restart_variants
					? {
							variants: value.restart_variants,
						}
					: undefined,
				russian_roulette: value.russian_roulette_rewards
					? {
							rewards: [0, ...value.russian_roulette_rewards],
						}
					: undefined,
				start: {
					income_amount: value.roundCash,
					bonus_amount: value.START_BONUS_SUM,
				},
				time_rules: [
					...value.roundTaxes.map((rule) => {
						if (rule.tax === 0) {
							return {
								type: 'start.none' as const,
								time: rule.game_time * 1000,
							};
						}

						return {
							type: 'start.tax' as const,
							time: rule.game_time * 1000,
							sum: rule.tax,
						};
					}),
					...value.incomeTaxes.map((rule) => {
						return {
							type: 'rent.tax' as const,
							time: rule.game_time * 1000,
							rate: rule.tax_rate,
						};
					}),
				].toSorted((a, b) => a.time - b.time),
				wormhole:
					typeof value.WORMHOLE_DIRECTLY === 'boolean'
						? {
								exits_free_count: 3,
								exits_extra_price: value.WORMHOLE_EXTRA_DESTINATION_COST!,
								move_direct: value.WORMHOLE_DIRECTLY,
							}
						: undefined,
			},
		};
	}),
);
