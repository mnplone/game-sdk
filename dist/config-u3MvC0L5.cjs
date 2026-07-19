//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
let valibot = require("valibot");
valibot = __toESM(valibot, 1);
//#region src/utils/valibot.ts
/**
* Creates bit schema.
* @param default_value Default value for a bit.
* @returns -
*/
function bit(default_value) {
	return valibot.pipe(valibot.optional(valibot.picklist([0, 1]), default_value ? 1 : 0), valibot.transform((value) => value === 1));
}
function parse(schema, value) {
	return parser(schema)(value);
}
function parser(schema) {
	const fn = valibot.parser(schema);
	return (value) => {
		try {
			return fn(value);
		} catch (error) {
			if (valibot.isValiError(error)) for (const issue of error.issues) console.error(`Valibot found an issue at ${valibot.getDotPath(issue)}. Received ${issue.received}, which does not match expected type ${issue.expected}`, issue);
			throw error;
		}
	};
}
//#endregion
//#region src/utils/crc.ts
const table = new Uint32Array(256);
for (let index = 256; index--;) {
	let tmp = index;
	for (let k = 8; k--;) tmp = tmp & 1 ? 3988292384 ^ tmp >>> 1 : tmp >>> 1;
	table[index] = tmp;
}
const textEncoder = new TextEncoder();
/**
* Calculate CRC32 checksum for a given string.
* @param data - The string to calculate the CRC32 checksum for.
* @returns -
*/
function crc32(data) {
	const data_buffer = textEncoder.encode(data);
	let crc = 4294967295;
	for (const byte of data_buffer) {
		const tableVal = table[(crc ^ byte) & 255];
		crc = crc >>> 8 ^ tableVal;
	}
	return crc ^ 4294967295;
}
//#endregion
//#region src/packet/setup/config/chance.ts
const valiM1DemoPacketSetupConfigMechanicsChanceSchema = valibot.strictObject({ cards: valibot.array(valibot.union([
	valibot.strictObject({
		type: valibot.literal("income"),
		text_id: valibot.number(),
		range: valibot.strictObject({
			min: valibot.number(),
			max: valibot.number(),
			step: valibot.number()
		})
	}),
	valibot.strictObject({
		type: valibot.literal("expense"),
		text_id: valibot.number(),
		range: valibot.strictObject({
			min: valibot.number(),
			max: valibot.number(),
			step: valibot.number()
		})
	}),
	valibot.strictObject({
		type: valibot.literal("repair"),
		text_id: valibot.number(),
		cost: valibot.strictObject({
			small: valibot.number(),
			big: valibot.number()
		})
	}),
	valibot.strictObject({
		type: valibot.literal("goto.jail"),
		text_id: valibot.number()
	}),
	valibot.strictObject({
		type: valibot.literal("goto.start"),
		text_id: valibot.number()
	}),
	valibot.strictObject({
		type: valibot.literal("teleport"),
		text_id: valibot.number()
	}),
	valibot.strictObject({
		type: valibot.literal("move.one"),
		text_id: valibot.number()
	}),
	valibot.strictObject({
		type: valibot.literal("move.skip"),
		text_id: valibot.number()
	}),
	valibot.strictObject({
		type: valibot.literal("move.undo"),
		text_id: valibot.number()
	}),
	valibot.strictObject({
		type: valibot.literal("insurance"),
		text_id: valibot.number(),
		price: valibot.number()
	}),
	valibot.strictObject({
		type: valibot.literal("birthday"),
		text_id: valibot.number(),
		amount: valibot.number()
	}),
	valibot.strictObject({
		type: valibot.literal("reverse"),
		text_id: valibot.number()
	}),
	valibot.strictObject({
		type: valibot.literal("disaster"),
		text_id: valibot.number()
	})
])) });
const valiM1DemoPacketV1ConfigChanceCardsSchema = valibot.pipe(valibot.array(valibot.union([
	valibot.strictObject({
		type: valibot.literal("cash_in"),
		text: valibot.string(),
		range: valibot.tuple([valibot.number(), valibot.number()]),
		rangeStep: valibot.number()
	}),
	valibot.strictObject({
		type: valibot.literal("cash_out"),
		text: valibot.string(),
		range: valibot.tuple([valibot.number(), valibot.number()]),
		rangeStep: valibot.number()
	}),
	valibot.strictObject({
		type: valibot.literal("repair"),
		text: valibot.string(),
		costs: valibot.tuple([valibot.number(), valibot.number()])
	}),
	valibot.strictObject({
		type: valibot.literal("jail"),
		text: valibot.string()
	}),
	valibot.strictObject({
		type: valibot.literal("go_to_start"),
		text: valibot.string()
	}),
	valibot.strictObject({
		type: valibot.literal("teleport"),
		text: valibot.string()
	}),
	valibot.strictObject({
		type: valibot.literal("move_one"),
		text: valibot.string()
	}),
	valibot.strictObject({
		type: valibot.literal("move_skip"),
		text: valibot.string()
	}),
	valibot.strictObject({
		type: valibot.literal("move_undo"),
		text: valibot.string()
	}),
	valibot.strictObject({
		type: valibot.literal("insurance"),
		text: valibot.string(),
		sum: valibot.number()
	}),
	valibot.strictObject({
		type: valibot.literal("birthday"),
		text: valibot.string(),
		sum: valibot.number()
	}),
	valibot.strictObject({
		type: valibot.literal("reverse"),
		text: valibot.string()
	}),
	valibot.strictObject({
		type: valibot.literal("fields_disaster"),
		text: valibot.string()
	})
])), valibot.transform((value) => {
	const chance_cards_new = [];
	for (const element of value) switch (element.type) {
		case "cash_in":
			chance_cards_new.push({
				type: "income",
				text_id: crc32(element.text),
				range: {
					min: element.range[0],
					max: element.range[1],
					step: element.rangeStep
				}
			});
			break;
		case "cash_out":
			chance_cards_new.push({
				type: "expense",
				text_id: crc32(element.text),
				range: {
					min: element.range[0],
					max: element.range[1],
					step: element.rangeStep
				}
			});
			break;
		case "repair":
			chance_cards_new.push({
				type: "repair",
				text_id: crc32(element.text),
				cost: {
					small: element.costs[0],
					big: element.costs[1]
				}
			});
			break;
		case "jail":
			chance_cards_new.push({
				type: "goto.jail",
				text_id: crc32(element.text)
			});
			break;
		case "go_to_start":
			chance_cards_new.push({
				type: "goto.start",
				text_id: crc32(element.text)
			});
			break;
		case "teleport":
		case "reverse":
			chance_cards_new.push({
				type: element.type,
				text_id: crc32(element.text)
			});
			break;
		case "move_one":
			chance_cards_new.push({
				type: "move.one",
				text_id: crc32(element.text)
			});
			break;
		case "move_skip":
			chance_cards_new.push({
				type: "move.skip",
				text_id: crc32(element.text)
			});
			break;
		case "move_undo":
			chance_cards_new.push({
				type: "move.undo",
				text_id: crc32(element.text)
			});
			break;
		case "insurance":
			chance_cards_new.push({
				type: "insurance",
				text_id: crc32(element.text),
				price: element.sum
			});
			break;
		case "birthday":
			chance_cards_new.push({
				type: "birthday",
				text_id: crc32(element.text),
				amount: element.sum
			});
			break;
		case "fields_disaster":
			chance_cards_new.push({
				type: "disaster",
				text_id: crc32(element.text)
			});
			break;
	}
	return chance_cards_new;
}));
//#endregion
//#region src/packet/setup/config/fields.ts
/**
* Creates a virtual item prototype ID for stock field.
* @param monopoly_id - Group ID of the field.
* @param index_in_group - Index of the field in the group.
* @returns Virtual item prototype ID.
*/
function createStockItemProtoId(monopoly_id, index_in_group) {
	return -(256 | monopoly_id << 3 | index_in_group);
}
const valiM1DemoPacketSetupConfigFieldsSchema = valibot.pipe(valibot.array(valibot.union([
	valibot.object({
		is_corner: valibot.pipe(valibot.literal(1), valibot.transform(() => true)),
		type: valibot.picklist(["start", "jail"])
	}),
	valibot.object({
		is_corner: bit(false),
		type: valibot.picklist([
			"cash.pay",
			"cash.receive",
			"chance",
			"jackpot",
			"jail.goto",
			"park",
			"russian-roulette",
			"tax.income",
			"tax.luxury",
			"wormhole"
		])
	}),
	valibot.object({
		is_corner: valibot.pipe(valibot.undefined_(), valibot.transform(() => false)),
		type: valibot.literal("company"),
		monopoly_id: valibot.number(),
		is_last: bit(false)
	})
])), valibot.transform((value) => {
	const indexes_by_group = /* @__PURE__ */ new Map();
	return value.map((field) => {
		if (field.type === "company") {
			const { monopoly_id } = field;
			const index_in_group = indexes_by_group.get(monopoly_id) ?? 0;
			indexes_by_group.set(monopoly_id, index_in_group + 1);
			return {
				...field,
				item_proto_id: createStockItemProtoId(monopoly_id, index_in_group)
			};
		}
		return field;
	});
}));
const valiM1DemoPacketV1ConfigFieldsSchema = valibot.pipe(valibot.array(valibot.variant("type", [
	valibot.object({
		design: valibot.literal("corner"),
		type: valibot.literal("start")
	}),
	valibot.object({
		design: valibot.literal("corner"),
		type: valibot.literal("jail")
	}),
	valibot.object({
		design: valibot.optional(valibot.literal("corner")),
		type: valibot.literal("special"),
		action: valibot.picklist([
			"cash_minus",
			"cash_plus",
			"chance",
			"goToJail",
			"jackpot",
			"relax",
			"russianRoulette",
			"tax_income",
			"tax_luxury",
			"wormhole"
		])
	}),
	valibot.object({
		design: valibot.exactOptional(valibot.never()),
		type: valibot.literal("field"),
		group: valibot.number(),
		is_last: bit(false)
	})
])), valibot.transform((value) => {
	const indexes_by_group = /* @__PURE__ */ new Map();
	return value.map((field) => {
		if (field.type === "start" || field.type === "jail") {
			const { type, design: _1, ...field_rest } = field;
			return {
				is_corner: true,
				type,
				...field_rest
			};
		}
		if (field.type === "field") {
			const { type: _type, design: _design, group: monopoly_id, ...field_rest } = field;
			const index_in_group = indexes_by_group.get(monopoly_id) ?? 0;
			indexes_by_group.set(monopoly_id, index_in_group + 1);
			return {
				is_corner: false,
				type: "company",
				...field_rest,
				monopoly_id,
				item_proto_id: createStockItemProtoId(monopoly_id, index_in_group)
			};
		}
		if (field.type === "special") {
			const { type: _1, action, design, ...field_rest } = field;
			let type_new;
			switch (action) {
				case "cash_minus":
					type_new = "cash.pay";
					break;
				case "cash_plus":
					type_new = "cash.receive";
					break;
				case "goToJail":
					type_new = "jail.goto";
					break;
				case "relax":
					type_new = "park";
					break;
				case "russianRoulette":
					type_new = "russian-roulette";
					break;
				case "tax_income":
					type_new = "tax.income";
					break;
				case "tax_luxury":
					type_new = "tax.luxury";
					break;
				case "wormhole":
					type_new = "wormhole";
					break;
				default: type_new = action;
			}
			return {
				is_corner: design === "corner",
				type: type_new,
				...field_rest
			};
		}
		throw new Error("Should be unreachable.");
	});
}));
//#endregion
//#region src/packet/setup/config/monopolies.ts
const valiM1DemoPacketSetupConfigMonopoliesSchema = valibot.pipe(valibot.record(valibot.string(), valibot.union([
	valibot.object({
		buy_price: valibot.number(),
		rent_by_level: valibot.array(valibot.number()),
		level_cost: valibot.number(),
		last_field: valibot.optional(valibot.object({
			buy_price: valibot.number(),
			rent_by_level: valibot.array(valibot.number())
		}))
	}),
	valibot.object({
		buy_price: valibot.number(),
		rent_by_count: valibot.array(valibot.number())
	}),
	valibot.object({
		buy_price: valibot.number(),
		dice_multipliers: valibot.array(valibot.number())
	}),
	valibot.object({
		buy_price: valibot.number(),
		rent_grow: valibot.object({
			by_round: valibot.number(),
			max: valibot.number()
		})
	})
])), valibot.transform((value) => new Map(Object.entries(value).map(([monopoly_id, monopoly]) => [Number(monopoly_id), monopoly]))));
const valiM1DemoPacketV1ConfigGroupsSchema = valibot.pipe(valibot.record(valibot.string(), valibot.union([
	valibot.object({
		buy: valibot.number(),
		levels: valibot.array(valibot.number()),
		buy_last: valibot.optional(valibot.number()),
		levels_last: valibot.optional(valibot.array(valibot.number())),
		levelUpCost: valibot.number()
	}),
	valibot.object({
		buy: valibot.number(),
		levels: valibot.array(valibot.number()),
		levelUpCost: valibot.literal(false)
	}),
	valibot.object({
		buy: valibot.number(),
		levels: valibot.literal(false),
		coeffs: valibot.array(valibot.number()),
		levelUpCost: valibot.literal(false)
	}),
	valibot.object({
		buy: valibot.number(),
		levels: valibot.literal(false),
		rent_grow: valibot.object({
			by_round: valibot.number(),
			max: valibot.number()
		}),
		levelUpCost: valibot.literal(false)
	})
])), valibot.transform((value) => new Map(Object.entries(value).map(([monopoly_id_string, group]) => {
	let monopoly;
	if ("rent_grow" in group) monopoly = {
		buy_price: group.buy,
		rent_grow: group.rent_grow
	};
	else if ("coeffs" in group) monopoly = {
		buy_price: group.buy,
		dice_multipliers: [0, ...group.coeffs]
	};
	else if (group.levelUpCost === false) monopoly = {
		buy_price: group.buy,
		rent_by_count: [0, ...group.levels]
	};
	else monopoly = {
		buy_price: group.buy,
		rent_by_level: group.levels,
		level_cost: group.levelUpCost,
		last_field: group.buy_last ? {
			buy_price: group.buy_last,
			rent_by_level: group.levels_last
		} : void 0
	};
	return [Number.parseInt(monopoly_id_string, 10), monopoly];
}))));
//#endregion
//#region src/packet/setup/config.ts
const valiM1DemoPacketSetupConfigRestartVariantSchema = valibot.object({
	round_from: valibot.number(),
	round_to: valibot.number(),
	count: valibot.number(),
	price: valibot.number()
});
const valiM1DemoPacketSetupConfigMechanicsRuleBaseSchema = valibot.union([valibot.object({ 
/** Match time in **milliseconds**. */
time: valibot.number() }), valibot.object({ 
/** Round number when rule applies, inclusive. */
round: valibot.number() })]);
const valiM1DemoPacketSetupConfigSchema = valibot.object({
	/** Version of the config. */
	version: valibot.number(),
	board_size: valibot.tuple([valibot.number(), valibot.number()]),
	timers: valibot.object({ roll_dices: valibot.number() }),
	fields: valiM1DemoPacketSetupConfigFieldsSchema,
	monopolies: valiM1DemoPacketSetupConfigMonopoliesSchema,
	mechanics: valibot.object({
		auction: valibot.optional(valibot.object({ bid_increment: valibot.number() })),
		buyout: valibot.optional(valibot.object({
			/** Premium for total cost to buy out given field, given to owner. */
			owner_premium: valibot.number(),
			/** Premium for total cost to buy out given field, given to bank. */
			bank_premium: valibot.optional(valibot.number())
		})),
		chance: valibot.optional(valiM1DemoPacketSetupConfigMechanicsChanceSchema),
		charges: valibot.optional(valibot.object({
			default: valibot.number(),
			limit: valibot.number(),
			features: valibot.record(valibot.string(), valibot.object({
				charges: valibot.number(),
				no_cap: valibot.optional(valibot.boolean(), false)
			}))
		})),
		field_level: valibot.optional(valibot.object({
			build: valibot.optional(valibot.object({
				/** When true, player can build uneven levels on the field. */
				uneven: bit(false),
				/** When true, player can build levels on the field without owning the whole monopoly. */
				without_monopoly: valibot.optional(valibot.object({ rent_multiplier: valibot.optional(valibot.number(), 1) }))
			}), () => {
				return {};
			}),
			sell: valibot.object({ 
			/** Price multiplier when selling a level (house) on the field, applies to the level buy price. */
multiplier: valibot.optional(valibot.number(), 1) })
		})),
		income_tax: valibot.optional(valibot.object({
			v: valibot.optional(valibot.picklist([1, 2]), 1),
			rate: valibot.number(),
			jail: valibot.optional(valibot.object({ base_reduction: valibot.number() }))
		})),
		jackpot: valibot.optional(valibot.object({
			bet: valibot.number(),
			multipliers: valibot.array(valibot.number()),
			superprize: valibot.object({ chance: valibot.number() })
		})),
		jail: valibot.object({
			release_fee: valibot.number(),
			double_roll_attempt_limit: valibot.optional(valibot.number(), 3),
			fine: valibot.optional(valibot.number()),
			rent_multiplier: valibot.optional(valibot.number())
		}),
		loan: valibot.optional(valibot.object({
			/** Loan amount. */
			amount: valibot.number(),
			/** Interest rate in total. */
			repay_multiplier: valibot.number(),
			/** Number of rounds to pay back the loan. */
			duration: valibot.number(),
			cooldown: valibot.object({
				/** On what round can player take a loan. */
				match_start: valibot.number(),
				/** How many rounds player should wait before taking another loan after repaying the previous one. */
				repay: valibot.number()
			})
		})),
		mortgage: valibot.optional(valibot.union([valibot.object({
			/** Limits mortgage duration in rounds. After this rounds, player will lose the field. If undefined, mortgage duration is unlimited. */
			duration: valibot.optional(valibot.number()),
			/** Price multiplier when mortgaging the field, applies to the company buying price. */
			multiplier: valibot.number(),
			/** Price multiplier when buying back the field, applies to the mortgage price. */
			buyback_multiplier: valibot.number(),
			/** Price multiplier when auctioning the mortgaged field, applies to the company buying price minus mortgage price. */
			auction_multiplier: valibot.optional(valibot.number())
		}), valibot.object({ 
		/** Price multiplier when waiving the ownership of the field, applies to the company buying price. */
waive_multiplier: valibot.number() })])),
		restart: valibot.optional(valibot.object({ variants: valibot.array(valiM1DemoPacketSetupConfigRestartVariantSchema) })),
		russian_roulette: valibot.optional(valibot.object({ rewards: valibot.array(valibot.number()) })),
		start: valibot.object({
			income_amount: valibot.number(),
			bonus_amount: valibot.optional(valibot.number(), 0)
		}),
		/** Rules of the match that are based on the match time. */
		rules: valibot.array(valibot.intersect([valiM1DemoPacketSetupConfigMechanicsRuleBaseSchema, valibot.variant("type", [
			valibot.object({ type: valibot.literal("start.income.off") }),
			valibot.object({
				type: valibot.literal("start.tax"),
				/** Sum player should pay when passing "Start". */
				sum: valibot.number()
			}),
			valibot.object({
				type: valibot.literal("cashflow.tax"),
				/** Income tax rate. */
				rate: valibot.number()
			})
		])])),
		wormhole: valibot.optional(valibot.object({
			exits_free_count: valibot.optional(valibot.number(), 3),
			exits_extra_price: valibot.number(),
			move_direct: bit(false)
		}))
	})
});
const valiM1DemoPacketV1ConfigTaxBaseSchema = valibot.union([valibot.object({ game_time: valibot.number() }), valibot.object({ round: valibot.number() })]);
const valiM1DemoPacketV1ConfigSchema = valibot.pipe(valibot.object({
	version: valibot.number(),
	size: valibot.tuple([valibot.number(), valibot.number()]),
	fields: valiM1DemoPacketV1ConfigFieldsSchema,
	groups: valiM1DemoPacketV1ConfigGroupsSchema,
	TIME_FOR_ROLL_DICES: valibot.number(),
	AUCTION_BET_STEP: valibot.optional(valibot.number()),
	buyout_premium: valibot.optional(valibot.number()),
	buyout_premium_bank: valibot.optional(valibot.number()),
	chance_cards: valibot.optional(valiM1DemoPacketV1ConfigChanceCardsSchema),
	charges: valibot.optional(valibot.object({
		default: valibot.number(),
		limit: valibot.number(),
		features: valibot.record(valibot.string(), valibot.object({
			charges: valibot.number(),
			no_cap: valibot.optional(valibot.boolean(), false)
		}))
	})),
	coeff_level_down: valibot.optional(valibot.number(), 1),
	UNEVEN_LEVEL_CHANGE: bit(false),
	LEVEL_CHANGE_NO_MNPL: bit(false),
	coeff_level_no_mnpl: valibot.optional(valibot.number(), 1),
	JACKPOT_BET: valibot.optional(valibot.number()),
	JACKPOT_COEFFS: valibot.optional(valibot.array(valibot.number())),
	JACKPOT_SUPERPRIZE_CHANCE: valibot.optional(valibot.number()),
	income_tax_v: valibot.optional(valibot.picklist([1, 2]), 1),
	income_tax_rate: valibot.optional(valibot.number(), .1),
	income_tax_jail: bit(false),
	income_tax_jail_base_reduction: valibot.optional(valibot.number()),
	jailFee: valibot.number(),
	UNJAIL_TRIES_LIMIT: valibot.optional(valibot.number(), 3),
	goToJailFine: valibot.optional(valibot.number()),
	jailed_rent_multiplier: valibot.optional(valibot.number()),
	CREDIT_SUM: valibot.optional(valibot.number()),
	CREDIT_INTEREST: valibot.optional(valibot.number()),
	CREDIT_PERCENT: valibot.optional(valibot.number()),
	CREDIT_ROUNDS: valibot.optional(valibot.number()),
	CREDIT_COOLDOWN_ROUNDS: valibot.optional(valibot.number()),
	START_CREDIT_COOLDOWN_ROUNDS: valibot.optional(valibot.number()),
	MORTGAGE_ROUND_LIMIT: valibot.optional(valibot.number()),
	coeff_mortgage: valibot.optional(valibot.number()),
	coeff_unmortgage: valibot.optional(valibot.number()),
	auction_mortgaged: valibot.optional(valibot.number()),
	coeff_field_drop: valibot.optional(valibot.number()),
	restart_variants: valibot.optional(valibot.array(valiM1DemoPacketSetupConfigRestartVariantSchema)),
	russian_roulette_rewards: valibot.optional(valibot.array(valibot.number())),
	roundCash: valibot.number(),
	START_BONUS_SUM: valibot.optional(valibot.number(), 0),
	roundTaxes: valibot.optional(valibot.array(valibot.intersect([valiM1DemoPacketV1ConfigTaxBaseSchema, valibot.object({ tax: valibot.number() })])), () => []),
	incomeTaxes: valibot.optional(valibot.array(valibot.intersect([valiM1DemoPacketV1ConfigTaxBaseSchema, valibot.object({ tax_rate: valibot.number() })])), () => []),
	WORMHOLE_DIRECTLY: valibot.optional(bit(false)),
	WORMHOLE_EXTRA_DESTINATION_COST: valibot.optional(valibot.number())
}), valibot.transform((value) => {
	return {
		version: value.version,
		board_size: value.size,
		timers: { roll_dices: value.TIME_FOR_ROLL_DICES },
		fields: value.fields,
		monopolies: value.groups,
		mechanics: {
			auction: typeof value.AUCTION_BET_STEP === "number" ? { bid_increment: value.AUCTION_BET_STEP } : void 0,
			buyout: typeof value.buyout_premium === "number" ? {
				owner_premium: value.buyout_premium,
				bank_premium: value.buyout_premium_bank
			} : void 0,
			chance: value.chance_cards ? { cards: value.chance_cards } : void 0,
			charges: value.charges,
			field_level: {
				build: {
					uneven: value.UNEVEN_LEVEL_CHANGE,
					without_monopoly: value.LEVEL_CHANGE_NO_MNPL ? { rent_multiplier: value.coeff_level_no_mnpl } : void 0
				},
				sell: { multiplier: value.coeff_level_down }
			},
			income_tax: {
				v: value.income_tax_v,
				rate: value.income_tax_rate,
				jail: (() => {
					if (value.income_tax_jail) {
						if (typeof value.income_tax_jail_base_reduction !== "number") throw new TypeError("Config property income_tax_jail_base_reduction must be a number when income_tax_jail is true.");
						return { base_reduction: value.income_tax_jail_base_reduction };
					}
				})()
			},
			jackpot: typeof value.JACKPOT_BET === "number" ? {
				bet: value.JACKPOT_BET,
				multipliers: value.JACKPOT_COEFFS,
				superprize: { chance: value.JACKPOT_SUPERPRIZE_CHANCE }
			} : void 0,
			jail: {
				release_fee: value.jailFee,
				double_roll_attempt_limit: value.UNJAIL_TRIES_LIMIT,
				fine: value.goToJailFine,
				rent_multiplier: value.jailed_rent_multiplier
			},
			loan: typeof value.CREDIT_SUM === "number" ? {
				amount: value.CREDIT_SUM,
				repay_multiplier: typeof value.CREDIT_INTEREST === "number" ? value.CREDIT_INTEREST : 1 + value.CREDIT_PERCENT / 100,
				duration: value.CREDIT_ROUNDS,
				cooldown: {
					match_start: value.START_CREDIT_COOLDOWN_ROUNDS,
					repay: value.CREDIT_COOLDOWN_ROUNDS
				}
			} : void 0,
			mortgage: (() => {
				if (value.coeff_mortgage !== void 0) return {
					duration: value.MORTGAGE_ROUND_LIMIT,
					multiplier: value.coeff_mortgage,
					buyback_multiplier: value.coeff_unmortgage ?? 1,
					auction_multiplier: value.auction_mortgaged
				};
				if (value.coeff_field_drop !== void 0) return { waive_multiplier: value.coeff_field_drop };
			})(),
			restart: value.restart_variants ? { variants: value.restart_variants } : void 0,
			russian_roulette: value.russian_roulette_rewards ? { rewards: [0, ...value.russian_roulette_rewards] } : void 0,
			start: {
				income_amount: value.roundCash,
				bonus_amount: value.START_BONUS_SUM
			},
			rules: (() => {
				const rules = [];
				for (const rule of value.roundTaxes) if (rule.tax === 0) if ("game_time" in rule) rules.push({
					type: "start.income.off",
					time: rule.game_time * 1e3
				});
				else rules.push({
					type: "start.income.off",
					round: rule.round
				});
				else if ("game_time" in rule) rules.push({
					type: "start.tax",
					time: rule.game_time * 1e3,
					sum: rule.tax
				});
				else rules.push({
					type: "start.tax",
					round: rule.round,
					sum: rule.tax
				});
				for (const rule of value.incomeTaxes) if ("game_time" in rule) rules.push({
					type: "cashflow.tax",
					time: rule.game_time * 1e3,
					rate: rule.tax_rate
				});
				else rules.push({
					type: "cashflow.tax",
					round: rule.round,
					rate: rule.tax_rate
				});
				return rules;
			})(),
			wormhole: typeof value.WORMHOLE_DIRECTLY === "boolean" ? {
				exits_free_count: 3,
				exits_extra_price: value.WORMHOLE_EXTRA_DESTINATION_COST,
				move_direct: value.WORMHOLE_DIRECTLY
			} : void 0
		}
	};
}));
//#endregion
Object.defineProperty(exports, "__exportAll", {
	enumerable: true,
	get: function() {
		return __exportAll;
	}
});
Object.defineProperty(exports, "__toESM", {
	enumerable: true,
	get: function() {
		return __toESM;
	}
});
Object.defineProperty(exports, "bit", {
	enumerable: true,
	get: function() {
		return bit;
	}
});
Object.defineProperty(exports, "parse", {
	enumerable: true,
	get: function() {
		return parse;
	}
});
Object.defineProperty(exports, "valiM1DemoPacketSetupConfigRestartVariantSchema", {
	enumerable: true,
	get: function() {
		return valiM1DemoPacketSetupConfigRestartVariantSchema;
	}
});
Object.defineProperty(exports, "valiM1DemoPacketSetupConfigSchema", {
	enumerable: true,
	get: function() {
		return valiM1DemoPacketSetupConfigSchema;
	}
});
Object.defineProperty(exports, "valiM1DemoPacketV1ConfigSchema", {
	enumerable: true,
	get: function() {
		return valiM1DemoPacketV1ConfigSchema;
	}
});
