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

export const valiM1DemoPacketSetupConfigRestartVariantSchema = v.object({
	round_from: v.number(),
	round_to: v.number(),
	count: v.number(),
	price: v.number(),
});

const valiM1DemoPacketSetupConfigMechanicsRuleBaseSchema = v.union([
	v.object({
		/** Match time in **milliseconds**. */
		time: v.number(),
	}),
	v.object({
		/** Round number when rule applies, inclusive. */
		round: v.number(),
	}),
]);

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
		buyout: v.optional(
			v.object({
				/** Premium for total cost to buy out given field, given to owner. */
				owner_premium: v.number(),
				/** Premium for total cost to buy out given field, given to bank. */
				bank_premium: v.optional(v.number()),
			}),
		),
		chance: v.optional(valiM1DemoPacketSetupConfigMechanicsChanceSchema),
		field_level: v.optional(
			v.object({
				build: v.optional(
					v.object({
						/** When true, player can build uneven levels on the field. */
						uneven: bit(false),
						/** When true, player can build levels on the field without owning the whole monopoly. */
						without_monopoly: v.optional(
							v.object({
								rent_multiplier: v.optional(v.number(), 1),
							}),
						),
						/** When true, player can build level on the field only when they arrive in that field. */
						only_on_arrival: bit(false),
					}),
					() => {
						return {};
					},
				),
				sell: v.object({
					/** Price multiplier when selling a level (house) on the field, applies to the level buy price. */
					multiplier: v.optional(v.number(), 1),
				}),
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
			fine: v.optional(v.number()),
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
			v.union([
				v.object({
					/** Limits mortgage duration in rounds. After this rounds, player will lose the field. If undefined, mortgage duration is unlimited. */
					duration: v.optional(v.number()),
					/** Price multiplier when mortgaging the field, applies to the company buying price. */
					multiplier: v.number(),
					/** Price multiplier when buying back the field, applies to the mortgage price. */
					buyback_multiplier: v.number(),
					/** Price multiplier when auctioning the mortgaged field, applies to the company buying price minus mortgage price. */
					auction_multiplier: v.optional(v.number()),
				}),
				v.object({
					/** Price multiplier when waiving the ownership of the field, applies to the company buying price. */
					waive_multiplier: v.number(),
				}),
			]),
		),
		restart: v.optional(
			v.object({
				variants: v.array(valiM1DemoPacketSetupConfigRestartVariantSchema),
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
		rules: v.array(
			v.intersect([
				valiM1DemoPacketSetupConfigMechanicsRuleBaseSchema,
				v.variant('type', [
					v.object({
						type: v.literal('start.income.off'),
					}),
					v.object({
						type: v.literal('start.tax'),
						/** Sum player should pay when passing "Start". */
						sum: v.number(),
					}),
					v.object({
						type: v.literal('rent.tax'),
						/** Income tax rate. */
						rate: v.number(),
					}),
				]),
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
export type M1DemoPacketSetupConfigMechanics =
	M1DemoPacketSetupConfig['mechanics'];
export type M1DemoPacketSetupConfigMechanicsRules =
	M1DemoPacketSetupConfigMechanics['rules'];

// -------------------------------------------------
// --------------- TRANSFORM FROM V1 ---------------
// -------------------------------------------------

const valiM1DemoPacketV1ConfigTaxBaseSchema = v.union([
	v.object({
		game_time: v.number(),
	}),
	v.object({
		round: v.number(),
	}),
]);

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
		// mechanics: buyout
		buyout_premium: v.optional(v.number()),
		buyout_premium_bank: v.optional(v.number()),
		// mechanics: chance
		chance_cards: v.optional(valiM1DemoPacketV1ConfigChanceCardsSchema),
		// mechanics: field_level
		coeff_level_down: v.optional(v.number(), 1),
		UNEVEN_LEVEL_CHANGE: bit(false),
		LEVEL_CHANGE_NO_MNPL: bit(false),
		coeff_level_no_mnpl: v.optional(v.number(), 1),
		level_build_only_on_arrival: bit(false),
		// mechanics: jackpot
		JACKPOT_BET: v.optional(v.number()),
		JACKPOT_COEFFS: v.optional(v.array(v.number())),
		// JACKPOT_SUPERPRIZE_START: v.optional(v.number()),
		JACKPOT_SUPERPRIZE_CHANCE: v.optional(v.number()),
		// JACKPOT_SUPERPRIZE_SHARE: v.optional(v.number()),
		// mechanics: jail
		jailFee: v.number(),
		UNJAIL_TRIES_LIMIT: v.optional(v.number(), 3),
		goToJailFine: v.optional(v.number()),
		// mechanics: loan
		CREDIT_SUM: v.optional(v.number()),
		CREDIT_INTEREST: v.optional(v.number()),
		CREDIT_PERCENT: v.optional(v.number()),
		CREDIT_ROUNDS: v.optional(v.number()),
		CREDIT_COOLDOWN_ROUNDS: v.optional(v.number()),
		START_CREDIT_COOLDOWN_ROUNDS: v.optional(v.number()),
		// mechanics: mortgage
		MORTGAGE_ROUND_LIMIT: v.optional(v.number()),
		coeff_mortgage: v.optional(v.number()),
		coeff_unmortgage: v.optional(v.number()),
		auction_mortgaged: v.optional(v.number()),
		coeff_field_drop: v.optional(v.number()),
		// mechanics: restart
		restart_variants: v.optional(
			v.array(valiM1DemoPacketSetupConfigRestartVariantSchema),
		),
		// mechanics: russian_roulette
		russian_roulette_rewards: v.optional(v.array(v.number())),
		// mechanics: start_bonus
		roundCash: v.number(),
		START_BONUS_SUM: v.optional(v.number(), 0),
		// mechanics: rules
		roundTaxes: v.optional(
			v.array(
				v.intersect([
					valiM1DemoPacketV1ConfigTaxBaseSchema,
					v.object({
						tax: v.number(),
					}),
				]),
			),
			() => [],
		),
		incomeTaxes: v.optional(
			v.array(
				v.intersect([
					valiM1DemoPacketV1ConfigTaxBaseSchema,
					v.object({
						tax_rate: v.number(),
					}),
				]),
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
				buyout:
					typeof value.buyout_premium === 'number'
						? {
								owner_premium: value.buyout_premium,
								bank_premium: value.buyout_premium_bank,
							}
						: undefined,
				chance: value.chance_cards
					? {
							cards: value.chance_cards,
						}
					: undefined,
				field_level: {
					build: {
						uneven: value.UNEVEN_LEVEL_CHANGE,
						without_monopoly: value.LEVEL_CHANGE_NO_MNPL
							? {
									rent_multiplier: value.coeff_level_no_mnpl,
								}
							: undefined,
						only_on_arrival: value.level_build_only_on_arrival,
					},
					sell: {
						multiplier: value.coeff_level_down,
					},
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
					fine: value.goToJailFine,
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
				mortgage: (() => {
					if (value.coeff_mortgage !== undefined) {
						return {
							duration: value.MORTGAGE_ROUND_LIMIT,
							multiplier: value.coeff_mortgage,
							buyback_multiplier: value.coeff_unmortgage ?? 1,
							auction_multiplier: value.auction_mortgaged,
						};
					}

					if (value.coeff_field_drop !== undefined) {
						return {
							waive_multiplier: value.coeff_field_drop,
						};
					}
				})(),
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
				rules: (() => {
					const rules: M1DemoPacketSetupConfigMechanicsRules = [];

					for (const rule of value.roundTaxes) {
						if (rule.tax === 0) {
							if ('game_time' in rule) {
								rules.push({
									type: 'start.income.off',
									time: rule.game_time * 1000,
								});
							} else {
								rules.push({
									type: 'start.income.off',
									round: rule.round,
								});
							}
						} else if ('game_time' in rule) {
							rules.push({
								type: 'start.tax',
								time: rule.game_time * 1000,
								sum: rule.tax,
							});
						} else {
							rules.push({
								type: 'start.tax',
								round: rule.round,
								sum: rule.tax,
							});
						}
					}

					for (const rule of value.incomeTaxes) {
						if ('game_time' in rule) {
							rules.push({
								type: 'rent.tax',
								time: rule.game_time * 1000,
								rate: rule.tax_rate,
							});
						} else {
							rules.push({
								type: 'rent.tax',
								round: rule.round,
								rate: rule.tax_rate,
							});
						}
					}

					return rules;
				})(),
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
