import {
	array,
	type InferOutput,
	literal,
	number,
	object,
	optional,
	pipe,
	transform,
	tuple,
	union,
} from 'valibot';
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

export const valiM1DemoPacketSetipConfigRestartVariantSchema = object({
	round_from: number(),
	round_to: number(),
	count: number(),
	price: number(),
});

export const valiM1DemoPacketSetupConfigSchema = object({
	/** Version of the config. */
	version: number(),
	board_size: tuple([number(), number()]),
	timers: object({
		roll_dices: number(),
	}),
	fields: valiM1DemoPacketSetupConfigFieldsSchema,
	monopolies: valiM1DemoPacketSetupConfigMonopoliesSchema,
	mechanics: object({
		auction: optional(
			object({
				bid_increment: number(),
			}),
		),
		chance: optional(valiM1DemoPacketSetupConfigMechanicsChanceSchema),
		field_level: optional(
			object({
				/** Price multiplier when selling a level (house) on the field, applies to the level buy price. */
				sell_multiplier: optional(number(), 1),
				/** When true, player can build uneven levels on the field. */
				build_uneven: bit(false),
				/** When true, player can build levels on the field without owning the whole monopoly. */
				build_without_monopoly: bit(false),
			}),
		),
		jackpot: optional(
			object({
				// FIXME make it work with older jackpot
				bet: number(),
				multipliers: array(number()),
				superprize: object({
					// start_sum: number(),
					chance: number(),
					// bet_share: number(),
				}),
			}),
		),
		jail: object({
			release_fee: number(),
			double_roll_attempt_limit: optional(number(), 3),
		}),
		loan: optional(
			object({
				/** Loan amount. */
				amount: number(),
				/** Interest rate in total. */
				repay_multiplier: number(),
				/** Number of rounds to pay back the loan. */
				duration: number(),
				cooldown: object({
					/** On what round can player take a loan. */
					match_start: number(),
					/** How many rounds player should wait before taking another loan after repaying the previous one. */
					repay: number(),
				}),
			}),
		),
		mortgage: optional(
			object({
				/** Limits mortgage duration in rounds. After this rounds, player will lose the field. */
				duration: optional(number()),
				/** Price multiplier when mortgaging the field, applies to the field buy price. */
				multiplier: number(),
				/** Price multiplier when buying back the field, applies to the mortgage price. */
				buyback_multiplier: number(),
				/** Price multiplier when auctioning the mortgaged field, applies to company price minus mortgage price. */
				auction_multiplier: optional(number()),
			}),
		),
		restart: optional(
			object({
				variants: array(valiM1DemoPacketSetipConfigRestartVariantSchema),
			}),
		),
		start: object({
			income_amount: number(),
			bonus_amount: optional(number(), 0),
		}),
		/** Rules of the match that are based on the match time. */
		time_rules: array(
			union([
				object({
					type: literal('start.none'),
					/** Match time in **milliseconds**. */
					time: number(),
				}),
				object({
					type: literal('start.tax'),
					/** Match time in **milliseconds**. */
					time: number(),
					/** Sum player should pay when passing "Start". If `0`, player just will not receive money for passing "Start". */
					sum: number(),
				}),
				object({
					type: literal('rent.tax'),
					/** Match time in **milliseconds**. */
					time: number(),
					/** Income tax rate. */
					rate: number(),
				}),
			]),
		),
		wormhole: optional(
			object({
				// FIXME make it work with older wormhole
				exits_free_count: optional(number(), 3),
				exits_extra_price: number(),
				move_direct: bit(false),
			}),
		),
	}),
});

export type M1DemoPacketSetupConfig = InferOutput<
	typeof valiM1DemoPacketSetupConfigSchema
>;

// -------------------------------------------------
// --------------- TRANSFORM FROM V1 ---------------
// -------------------------------------------------

export const valiM1DemoPacketV1ConfigSchema = pipe(
	object({
		version: number(),
		size: tuple([number(), number()]),
		fields: valiM1DemoPacketV1ConfigFieldsSchema,
		groups: valiM1DemoPacketV1ConfigGroupsSchema,
		// timers
		TIME_FOR_ROLL_DICES: number(),
		// mechanics: auction
		AUCTION_BET_STEP: optional(number()),
		// mechanics: chance
		chance_cards: optional(valiM1DemoPacketV1ConfigChanceCardsSchema),
		// mechanics: field_level
		coeff_level_down: optional(number(), 1),
		UNEVEN_LEVEL_CHANGE: bit(false),
		LEVEL_CHANGE_NO_MNPL: bit(false),
		// mechanics: jackpot
		JACKPOT_BET: optional(number()),
		JACKPOT_COEFFS: optional(array(number())),
		// JACKPOT_SUPERPRIZE_START: optional(number()),
		JACKPOT_SUPERPRIZE_CHANCE: optional(number()),
		// JACKPOT_SUPERPRIZE_SHARE: optional(number()),
		// mechanics: jail
		jailFee: number(),
		UNJAIL_TRIES_LIMIT: optional(number(), 3),
		// mechanics: loan
		CREDIT_SUM: optional(number()),
		CREDIT_INTEREST: optional(number()),
		CREDIT_PERCENT: optional(number()),
		CREDIT_ROUNDS: optional(number()),
		CREDIT_COOLDOWN_ROUNDS: optional(number()),
		START_CREDIT_COOLDOWN_ROUNDS: optional(number()),
		// mechanics: mortgage
		MORTGAGE_ROUND_LIMIT: optional(number()),
		coeff_mortgage: number(),
		coeff_unmortgage: number(),
		auction_mortgaged: optional(number()),
		// mechanics: restart
		restart_variants: optional(
			array(valiM1DemoPacketSetipConfigRestartVariantSchema),
		),
		// mechanics: start_bonus
		roundCash: number(),
		START_BONUS_SUM: optional(number(), 0),
		// mechanics: timer_rules
		roundTaxes: array(
			object({
				game_time: number(),
				tax: number(),
			}),
		),
		incomeTaxes: array(
			object({
				game_time: number(),
				tax_rate: number(),
			}),
		),
		// mechanics: wormhole
		WORMHOLE_DIRECTLY: optional(bit(false)),
		WORMHOLE_EXTRA_DESTINATION_COST: optional(number()),
	}),
	// transforming config in-place because it is a whole product
	transform((value) => {
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
				].sort((a, b) => a.time - b.time),
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
