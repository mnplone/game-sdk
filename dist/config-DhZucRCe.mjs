import * as v from "valibot";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region src/utils/valibot.ts
/**
* Creates bit schema.
* @param default_value Default value for a bit.
*/
function bit(default_value) {
	return v.pipe(v.optional(v.picklist([0, 1]), default_value ? 1 : 0), v.transform((value) => value === 1));
}
function parse(schema, value) {
	return parser(schema)(value);
}
function parser(schema) {
	const fn = v.parser(schema);
	return (value) => {
		try {
			return fn(value);
		} catch (error) {
			if (v.isValiError(error)) for (const issue of error.issues) console.error(`Valibot found an issue at ${v.getDotPath(issue)}. Received ${issue.received}, which does not match expected type ${issue.expected}`, issue);
			throw error;
		}
	};
}
//#endregion
//#region src/utils/table.ts
/**
* Returns the field ID normalized to the range of the fields count.
* @param setup -
* @param field_id -
* @returns -
*/
function normalizeFieldId(setup, field_id) {
	const fields_count = setup.config.fields.length;
	return (field_id + 10 * fields_count) % fields_count;
}
//#endregion
//#region src/packet/events/roll-dices.ts
var roll_dices_exports = /* @__PURE__ */ __exportAll({
	enrichments: () => enrichments,
	m1DemoDicesSchema: () => m1DemoDicesSchema,
	valiSchemas: () => valiSchemas,
	valiV1Schemas: () => valiV1Schemas
});
const m1DemoDicesSchema = v.union([
	v.strictTuple([v.number()]),
	v.strictTuple([v.number(), v.number()]),
	v.strictTuple([
		v.number(),
		v.number(),
		v.number()
	])
]);
const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal("roll-dices"),
		user_id: v.number(),
		reroll: bit(false),
		dices: m1DemoDicesSchema,
		move_reversed: bit(false),
		double_spent: bit(false)
	}),
	v.object({
		id: v.string(),
		type: v.literal("roll-dices.doubling"),
		user_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("roll-dices.jail.success"),
		user_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("roll-dices.jail.fail"),
		user_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("roll-dices.reroll"),
		user_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("roll-dices.reroll.reject"),
		user_id: v.number(),
		move_reversed: bit(false),
		position: v.number()
	})
];
const enrichments = {
	"roll-dices"(options) {
		const player = options.status.players.get(options.event.user_id);
		const event_zero_distance = options.events_after.find((event) => event.type === "jail.put.double");
		const distance = player.jail || event_zero_distance ? 0 : getRolledDistance(options.event.dices, options.setup);
		player.position = normalizeFieldId(options.setup, player.position + (options.event.move_reversed ? -1 : 1) * distance);
	},
	"roll-dices.jail.success"(options) {
		options.status.players.get(options.event.user_id).jail = void 0;
		const event_roll_dices = options.events_before.find((event) => event.type === "roll-dices");
		if (!event_roll_dices) throw new Error("Invalid state: no \"roll-dices\" event found before \"roll-dices.jail.success\".");
		const player = options.status.players.get(options.event.user_id);
		const distance = getRolledDistance(event_roll_dices.dices, options.setup);
		player.position = normalizeFieldId(options.setup, player.position + distance);
	},
	"roll-dices.reroll.reject"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.position = options.event.position;
	}
};
const valiV1Schemas = [
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("rollDices"),
		user_id: v.number(),
		reroll: bit(false),
		dices: v.union([
			v.strictTuple([v.number()]),
			v.strictTuple([v.number(), v.number()]),
			v.strictTuple([
				v.number(),
				v.number(),
				v.number()
			])
		]),
		move_reverse: bit(false)
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "roll-dices",
			user_id: value.user_id,
			reroll: value.reroll,
			dices: value.dices,
			move_reversed: value.move_reverse,
			double_spent: false
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("doubleRolledOnDice"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "roll-dices.doubling",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("double_spended")
	}), v.transform((value) => {
		return {
			id: value._id,
			type: value.type
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("rollDicesForUnjailSuccess"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "roll-dices.jail.success",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("rollDicesForUnjailFail"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "roll-dices.jail.fail",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("rollDicesReroll"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "roll-dices.reroll",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("rollDicesRerollCancel"),
		user_id: v.number(),
		move_reverse: bit(false),
		mean_position: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "roll-dices.reroll.reject",
			user_id: value.user_id,
			move_reversed: value.move_reverse,
			position: value.mean_position
		};
	}))
];
/**
* Get distance by rolled dices.
* @param dices - Rolled dices.
* @param setup - Game setup.
* @returns -
*/
function getRolledDistance(dices, setup) {
	const { game_submode } = setup.flags;
	let distance = dices[0];
	if (game_submode === 2) {
		distance += dices[1];
		if (typeof dices[2] === "number") {
			if (dices[2] <= 3) {
				if (dices[0] === dices[1] && dices[1] === dices[2]) return 0;
				distance += dices[2];
			} else if (dices[2] === 4 || dices[2] === 6) return 0;
		}
	} else if (game_submode === 5) {
		if (typeof dices[1] === "number") switch (dices[1]) {
			case 1:
			case 2:
			case 3:
				if (dices[0] !== dices[1]) return 0;
				break;
			case 4:
			case 6: return 0;
			case 5:
				distance *= 2;
				break;
			default: throw new Error(`Invalid mini die value: ${dices[1]}`);
		}
	} else distance += dices[1];
	return distance;
}
//#endregion
//#region src/packet/status/turn/movement.ts
const m1DemoPacketStatusTurnMovementSchema = v.variant("source", [v.object({ source: v.picklist([
	"bus",
	"mini_die",
	"triple"
]) }), v.object({
	source: v.picklist(["taxi", "wormhole"]),
	field_ids: v.array(v.number())
})]);
/** Returns movement options, building them from the game context. */
function getMovementOptions(setup, status) {
	if (status.turn.movement === void 0) return;
	const { movement } = status.turn;
	if ("field_ids" in movement) return movement.field_ids.map((field_id) => {
		return { field_id };
	});
	const { config } = setup;
	const action_user_id = status.turn.action.user_id;
	if (action_user_id === null) throw new Error("Invalid demo state: no action player available.");
	const { position } = status.players.get(action_user_id);
	const { dices } = status.turn;
	if (dices === void 0) return;
	const direction = status.turn.move_reversed ? -1 : 1;
	switch (movement.source) {
		case "bus": {
			const movement_options = [];
			const dice_0 = dices[0];
			movement_options.push({
				field_id: normalizeFieldId(setup, position + direction * dice_0),
				stop_id: 0
			});
			const dice_1 = dices[1];
			if (dice_0 !== dice_1) movement_options.push({
				field_id: normalizeFieldId(setup, position + direction * dice_1),
				stop_id: 1
			});
			const dices_sum = dice_0 + dice_1;
			movement_options.push({
				field_id: normalizeFieldId(setup, position + direction * dices_sum),
				stop_id: -1
			});
			return movement_options;
		}
		case "mini_die": return dices.map((dice, index) => {
			return {
				field_id: normalizeFieldId(setup, position + direction * dice),
				stop_id: index
			};
		});
		case "triple": {
			const movement_options = [];
			for (let field_id = 0; field_id < config.fields.length; field_id++) if (field_id !== position) movement_options.push({ field_id });
			return movement_options;
		}
		default: throw new Error(`Unknown source for movement.picker event: ${movement.source}`);
	}
}
//#endregion
//#region src/packet/status/turn.ts
const m1DemoContractSchema = v.pipe(v.tuple([v.object({
	user_id: v.number(),
	field_ids: v.array(v.number()),
	cash: v.number()
}), v.object({
	user_id: v.number(),
	field_ids: v.array(v.number()),
	cash: v.number()
})]), v.transform(([initiator, responder]) => {
	return {
		initiator: {
			user_id: initiator.user_id,
			field_ids: new Set(initiator.field_ids),
			cash: initiator.cash
		},
		responder: {
			user_id: responder.user_id,
			field_ids: new Set(responder.field_ids),
			cash: responder.cash
		}
	};
}), v.check((value) => Number.isSafeInteger(value.initiator.cash) && value.initiator.cash >= 0 && Number.isSafeInteger(value.responder.cash) && value.responder.cash >= 0));
const m1DemoPacketStatusTurnSchema = v.pipe(v.object({
	/** User ID of the player whose turn it is. */
	user_id: v.nullable(v.number()),
	action: v.object({
		/** User ID of the player from which action is expected. */
		user_id: v.nullable(v.number()),
		list: v.pipe(v.array(v.picklist([
			"auction.put",
			"auction.bid",
			"auction.reject",
			"bank.fee.pay",
			"bus.move",
			"contract.send",
			"contract.accept",
			"contract.reject",
			"contract.review.approve",
			"contract.review.object",
			"contract.fallback",
			"jackpot.reject",
			"jackpot.play",
			"jail.put",
			"jail.release.pay",
			"jail.stay",
			"level.build",
			"level.sell",
			"loan.take",
			"loan.repay",
			"mortgage.put",
			"mortgage.buyback",
			"mortgage.waive",
			"mortgage.auction",
			"waive",
			"movement.go",
			"purchase",
			"purchase.reject",
			"purchase.buyout",
			"purchase.buyout.reject",
			"purchase.buyout.protect",
			"rent.pay",
			"roll-dices",
			"roll-dices.reroll.reject",
			"russian-roulette.play",
			"russian-roulette.reject",
			"start.tax.pay",
			"wormhole.use",
			"wormhole.open",
			"wormhole.jump",
			"wormhole.reject",
			"restart",
			"skip"
		])), v.transform((value) => new Set(value)))
	}),
	move_reversed: bit(false),
	auction: v.optional(v.object({
		field_id: v.number(),
		bid: v.number(),
		user_ids_rejected: v.pipe(v.array(v.number()), v.transform((value) => new Set(value)))
	})),
	contract: v.optional(m1DemoContractSchema),
	contracts_sent: v.optional(v.number()),
	dices: v.optional(m1DemoDicesSchema),
	jackpot: v.optional(v.object({ superprize: v.number() })),
	payment: v.optional(v.object({
		to_user_id: v.optional(v.number()),
		amount: v.number()
	})),
	/** Fields on which player can move in this action. */
	movement: v.optional(m1DemoPacketStatusTurnMovementSchema),
	/** Fields on which player already built a level this turn. */
	field_ids_level_built: v.optional(v.pipe(v.array(v.number()), v.transform((value) => new Set(value)))),
	/** Fields which player already mortgaged this turn. */
	field_ids_mortgaged: v.optional(v.pipe(v.array(v.number()), v.transform((value) => new Set(value))))
}));
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
const m1DemoPacketSetupConfigMechanicsChanceSchema = v.strictObject({ cards: v.array(v.union([
	v.strictObject({
		type: v.literal("income"),
		text_id: v.number(),
		range: v.strictObject({
			min: v.number(),
			max: v.number(),
			step: v.number()
		})
	}),
	v.strictObject({
		type: v.literal("expense"),
		text_id: v.number(),
		range: v.strictObject({
			min: v.number(),
			max: v.number(),
			step: v.number()
		})
	}),
	v.strictObject({
		type: v.literal("repair"),
		text_id: v.number(),
		cost: v.strictObject({
			small: v.number(),
			big: v.number()
		})
	}),
	v.strictObject({
		type: v.literal("goto.jail"),
		text_id: v.number()
	}),
	v.strictObject({
		type: v.literal("goto.start"),
		text_id: v.number()
	}),
	v.strictObject({
		type: v.literal("teleport"),
		text_id: v.number()
	}),
	v.strictObject({
		type: v.literal("move.one"),
		text_id: v.number()
	}),
	v.strictObject({
		type: v.literal("move.skip"),
		text_id: v.number()
	}),
	v.strictObject({
		type: v.literal("move.undo"),
		text_id: v.number()
	}),
	v.strictObject({
		type: v.literal("insurance"),
		text_id: v.number(),
		price: v.number()
	}),
	v.strictObject({
		type: v.literal("birthday"),
		text_id: v.number(),
		amount: v.number()
	}),
	v.strictObject({
		type: v.literal("reverse"),
		text_id: v.number()
	}),
	v.strictObject({
		type: v.literal("disaster"),
		text_id: v.number()
	})
])) });
const m1DemoPacketV1ConfigChanceCardsSchema = v.pipe(v.array(v.union([
	v.strictObject({
		type: v.literal("cash_in"),
		text: v.string(),
		range: v.tuple([v.number(), v.number()]),
		rangeStep: v.number()
	}),
	v.strictObject({
		type: v.literal("cash_out"),
		text: v.string(),
		range: v.tuple([v.number(), v.number()]),
		rangeStep: v.number()
	}),
	v.strictObject({
		type: v.literal("repair"),
		text: v.string(),
		costs: v.tuple([v.number(), v.number()])
	}),
	v.strictObject({
		type: v.literal("jail"),
		text: v.string()
	}),
	v.strictObject({
		type: v.literal("go_to_start"),
		text: v.string()
	}),
	v.strictObject({
		type: v.literal("teleport"),
		text: v.string()
	}),
	v.strictObject({
		type: v.literal("move_one"),
		text: v.string()
	}),
	v.strictObject({
		type: v.literal("move_skip"),
		text: v.string()
	}),
	v.strictObject({
		type: v.literal("move_undo"),
		text: v.string()
	}),
	v.strictObject({
		type: v.literal("insurance"),
		text: v.string(),
		sum: v.number()
	}),
	v.strictObject({
		type: v.literal("birthday"),
		text: v.string(),
		sum: v.number()
	}),
	v.strictObject({
		type: v.literal("reverse"),
		text: v.string()
	}),
	v.strictObject({
		type: v.literal("fields_disaster"),
		text: v.string()
	})
])), v.transform((value) => {
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
const m1DemoPacketSetupConfigFieldsSchema = v.pipe(v.array(v.union([
	v.object({
		is_corner: v.pipe(v.literal(1), v.transform(() => true)),
		type: v.picklist(["start", "jail"])
	}),
	v.object({
		is_corner: bit(false),
		type: v.picklist(["cash.pay", "cash.receive"]),
		range: v.tuple([v.number(), v.number()]),
		step: v.number()
	}),
	v.object({
		is_corner: bit(false),
		type: v.picklist([
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
	v.object({
		is_corner: v.pipe(v.optional(v.never()), v.transform(() => false)),
		type: v.literal("company"),
		monopoly_id: v.number(),
		is_last: bit(false)
	})
])), v.transform((value) => {
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
const m1DemoPacketV1ConfigFieldsSchema = v.pipe(v.array(v.variant("type", [
	v.object({
		design: v.literal("corner"),
		type: v.literal("start")
	}),
	v.object({
		design: v.literal("corner"),
		type: v.literal("jail")
	}),
	v.object({
		design: v.optional(v.literal("corner")),
		type: v.literal("special"),
		action: v.picklist(["cash_minus", "cash_plus"]),
		range: v.tuple([v.number(), v.number()]),
		rangeStep: v.number()
	}),
	v.object({
		design: v.optional(v.literal("corner")),
		type: v.literal("special"),
		action: v.picklist([
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
	v.object({
		design: v.exactOptional(v.never()),
		type: v.literal("field"),
		group: v.number(),
		is_last: bit(false)
	})
])), v.transform((value) => {
	const indexes_by_group = /* @__PURE__ */ new Map();
	return value.map((field) => {
		if (field.type === "start" || field.type === "jail") {
			const { type } = field;
			return {
				is_corner: true,
				type
			};
		}
		if (field.type === "field") {
			const { type: _1, design: _2, group: monopoly_id, ...field_rest } = field;
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
			const { action, design } = field;
			const is_corner = design === "corner";
			let type_new;
			switch (action) {
				case "cash_minus": return {
					is_corner,
					type: "cash.pay",
					range: field.range,
					step: field.rangeStep
				};
				case "cash_plus": return {
					is_corner,
					type: "cash.receive",
					range: field.range,
					step: field.rangeStep
				};
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
				is_corner,
				type: type_new
			};
		}
		throw new Error("Should be unreachable.");
	});
}));
//#endregion
//#region src/packet/setup/config/monopolies.ts
const m1DemoPacketSetupConfigMonopoliesSchema = v.pipe(v.record(v.string(), v.union([
	v.object({
		buy_price: v.number(),
		rent_by_level: v.array(v.number()),
		level_cost: v.number(),
		last_field: v.optional(v.object({
			buy_price: v.number(),
			rent_by_level: v.array(v.number())
		}))
	}),
	v.object({
		buy_price: v.number(),
		rent_by_count: v.array(v.number())
	}),
	v.object({
		buy_price: v.number(),
		dice_multipliers: v.array(v.number())
	}),
	v.object({
		buy_price: v.number(),
		rent_grow: v.object({
			by_round: v.number(),
			max: v.number()
		})
	})
])), v.transform((value) => new Map(Object.entries(value).map(([monopoly_id, monopoly]) => [Number(monopoly_id), monopoly]))));
const m1DemoPacketV1ConfigGroupsSchema = v.pipe(v.record(v.string(), v.union([
	v.object({
		buy: v.number(),
		levels: v.array(v.number()),
		buy_last: v.optional(v.number()),
		levels_last: v.optional(v.array(v.number())),
		levelUpCost: v.number()
	}),
	v.object({
		buy: v.number(),
		levels: v.array(v.number()),
		levelUpCost: v.literal(false)
	}),
	v.object({
		buy: v.number(),
		levels: v.literal(false),
		coeffs: v.array(v.number()),
		levelUpCost: v.literal(false)
	}),
	v.object({
		buy: v.number(),
		levels: v.literal(false),
		rent_grow: v.object({
			by_round: v.number(),
			max: v.number()
		}),
		levelUpCost: v.literal(false)
	})
])), v.transform((value) => new Map(Object.entries(value).map(([monopoly_id_string, group]) => {
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
	return [Math.trunc(Number(monopoly_id_string)), monopoly];
}))));
//#endregion
//#region src/packet/setup/config.ts
const m1DemoPacketSetupConfigRestartVariantSchema = v.object({
	round_from: v.number(),
	round_to: v.number(),
	count: v.number(),
	price: v.number()
});
const m1DemoPacketSetupConfigMechanicsRuleBaseSchema = v.union([v.object({ 
/** Match time in **milliseconds**. */
time: v.number() }), v.object({ 
/** Round number when rule applies, inclusive. */
round: v.number() })]);
const m1DemoPacketSetupConfigSchema = v.object({
	/** Version of the config. */
	version: v.number(),
	board_size: v.tuple([v.number(), v.number()]),
	start_cash: v.number(),
	timers: v.object({ roll_dices: v.number() }),
	fields: m1DemoPacketSetupConfigFieldsSchema,
	monopolies: m1DemoPacketSetupConfigMonopoliesSchema,
	mechanics: v.object({
		auction: v.optional(v.object({ bid_increment: v.number() })),
		buyout: v.optional(v.object({
			/** Premium for total cost to buy out given field, given to owner. */
			owner_premium: v.number(),
			/** Premium for total cost to buy out given field, given to bank. */
			bank_premium: v.optional(v.number())
		})),
		chance: v.optional(m1DemoPacketSetupConfigMechanicsChanceSchema),
		charges: v.optional(v.object({
			default: v.number(),
			limit: v.number(),
			features: v.record(v.string(), v.object({
				charges: v.number(),
				no_cap: bit(false)
			}))
		})),
		field_level: v.optional(v.object({
			build: v.optional(v.object({
				/** When true, player can build uneven levels on the field. */
				uneven: bit(false),
				/** When true, player can build levels on the field without owning the whole monopoly. */
				without_monopoly: v.optional(v.object({ rent_multiplier: v.optional(v.number(), 1) }))
			}), () => {
				return {};
			}),
			sell: v.object({ 
			/** Price multiplier when selling a level (house) on the field, applies to the level buy price. */
multiplier: v.optional(v.number(), 1) })
		})),
		income_tax: v.optional(v.object({
			v: v.optional(v.picklist([1, 2]), 1),
			rate: v.number(),
			jail: v.optional(v.object({ base_reduction: v.number() }))
		})),
		jackpot: v.optional(v.object({
			bet: v.number(),
			multipliers: v.array(v.number()),
			superprize: v.object({ chance: v.number() })
		})),
		jail: v.object({
			release_fee: v.number(),
			double_roll_attempt_limit: v.optional(v.number(), 3),
			fine: v.optional(v.number()),
			rent_multiplier: v.optional(v.number())
		}),
		loan: v.optional(v.object({
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
				repay: v.number()
			})
		})),
		mortgage: v.optional(v.union([v.intersect([v.object({
			/** What fraction of the company value owner receives when mortgaging the field, applies to the company buying price. */
			multiplier: v.number(),
			/**
			* Limits mortgage duration in rounds: after some rounds, player will lose the field.
			*
			* If `undefined`, mortgage duration is unlimited.
			*/
			duration: v.optional(v.number()),
			/** Price multiplier when buying back the field, applies to value that player received for mortgaging the field. */
			buyback_multiplier: v.number()
		}), v.union([
			v.object({}),
			v.object({ 
			/** Price multiplier when auctioning the mortgaged field, applies to the rest of the company value after mortgage. */
auction_multiplier: v.number() }),
			v.object({ 
			/** What fraction of company value owner receives when waiving the field, applies to the rest of the company value after mortgage. */
waive_multiplier: v.number() })
		])]), v.object({ 
		/** What fraction of company value owner receives when waiving the field, applies to company buying price. */
waive_multiplier: v.number() })])),
		restart: v.optional(v.object({ variants: v.array(m1DemoPacketSetupConfigRestartVariantSchema) })),
		russian_roulette: v.optional(v.object({ rewards: v.array(v.number()) })),
		start: v.object({
			income_amount: v.number(),
			bonus: v.optional(v.object({
				amount: v.number(),
				chance: v.number()
			}))
		}),
		/** Rules of the match that are based on the match time. */
		rules: v.array(v.intersect([m1DemoPacketSetupConfigMechanicsRuleBaseSchema, v.variant("type", [
			v.object({ type: v.literal("start.income.off") }),
			v.object({
				type: v.literal("start.tax"),
				/** Sum player should pay when passing "Start". */
				sum: v.number()
			}),
			v.object({
				type: v.literal("cashflow.tax"),
				/** Income tax rate. */
				rate: v.number()
			})
		])])),
		wormhole: v.optional(v.object({
			exits_free_count: v.optional(v.number(), 3),
			exits_extra_price: v.number(),
			move_direct: bit(false)
		}))
	})
});
const m1DemoPacketV1ConfigTaxBaseSchema = v.union([v.object({ game_time: v.number() }), v.object({ round: v.number() })]);
const m1DemoPacketV1ConfigSchema = v.pipe(v.object({
	version: v.number(),
	size: v.tuple([v.number(), v.number()]),
	startCash: v.number(),
	fields: m1DemoPacketV1ConfigFieldsSchema,
	groups: m1DemoPacketV1ConfigGroupsSchema,
	TIME_FOR_ROLL_DICES: v.number(),
	AUCTION_BET_STEP: v.optional(v.number()),
	buyout_premium: v.optional(v.number()),
	buyout_premium_bank: v.optional(v.number()),
	chance_cards: v.optional(m1DemoPacketV1ConfigChanceCardsSchema),
	charges: v.optional(v.object({
		default: v.number(),
		limit: v.number(),
		features: v.record(v.string(), v.object({
			charges: v.number(),
			no_cap: v.optional(v.boolean(), false)
		}))
	})),
	coeff_level_down: v.optional(v.number(), 1),
	UNEVEN_LEVEL_CHANGE: bit(false),
	LEVEL_CHANGE_NO_MNPL: bit(false),
	coeff_level_no_mnpl: v.optional(v.number(), 1),
	JACKPOT_BET: v.optional(v.number()),
	JACKPOT_COEFFS: v.optional(v.array(v.number())),
	JACKPOT_SUPERPRIZE_CHANCE: v.optional(v.number()),
	income_tax_v: v.optional(v.picklist([1, 2]), 1),
	income_tax_rate: v.optional(v.number(), .1),
	income_tax_jail: bit(false),
	income_tax_jail_base_reduction: v.optional(v.number()),
	jailFee: v.number(),
	UNJAIL_TRIES_LIMIT: v.optional(v.number(), 3),
	goToJailFine: v.optional(v.number()),
	jailed_rent_multiplier: v.optional(v.number()),
	CREDIT_SUM: v.optional(v.number()),
	CREDIT_INTEREST: v.optional(v.number()),
	CREDIT_PERCENT: v.optional(v.number()),
	CREDIT_ROUNDS: v.optional(v.number()),
	CREDIT_COOLDOWN_ROUNDS: v.optional(v.number()),
	START_CREDIT_COOLDOWN_ROUNDS: v.optional(v.number()),
	MORTGAGE_ROUND_LIMIT: v.optional(v.number()),
	coeff_mortgage: v.optional(v.number()),
	coeff_reject_mortgaged: v.optional(v.number()),
	coeff_unmortgage: v.optional(v.number()),
	auction_mortgaged: v.optional(v.number()),
	coeff_field_drop: v.optional(v.number()),
	restart_variants: v.optional(v.array(m1DemoPacketSetupConfigRestartVariantSchema)),
	russian_roulette_rewards: v.optional(v.array(v.number())),
	roundCash: v.number(),
	START_BONUS_SUM: v.optional(v.number()),
	START_BONUS_CHANCE: v.optional(v.number()),
	roundTaxes: v.optional(v.array(v.intersect([m1DemoPacketV1ConfigTaxBaseSchema, v.object({ tax: v.number() })])), () => []),
	incomeTaxes: v.optional(v.array(v.intersect([m1DemoPacketV1ConfigTaxBaseSchema, v.object({ tax_rate: v.number() })])), () => []),
	WORMHOLE_DIRECTLY: v.optional(bit(false)),
	WORMHOLE_EXTRA_DESTINATION_COST: v.optional(v.number())
}), v.transform((value) => {
	return {
		version: value.version,
		board_size: value.size,
		start_cash: value.startCash,
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
				if (value.coeff_mortgage !== void 0) {
					const base = {
						duration: value.MORTGAGE_ROUND_LIMIT,
						multiplier: value.coeff_mortgage,
						buyback_multiplier: value.coeff_unmortgage ?? 1
					};
					if (value.auction_mortgaged !== void 0) return {
						...base,
						auction_multiplier: value.auction_mortgaged
					};
					if (value.coeff_reject_mortgaged !== void 0) return {
						...base,
						waive_multiplier: value.coeff_reject_mortgaged
					};
					return base;
				}
				if (value.coeff_field_drop !== void 0) return { waive_multiplier: value.coeff_field_drop };
			})(),
			restart: value.restart_variants ? { variants: value.restart_variants } : void 0,
			russian_roulette: value.russian_roulette_rewards ? { rewards: [0, ...value.russian_roulette_rewards] } : void 0,
			start: {
				income_amount: value.roundCash,
				bonus: value.START_BONUS_SUM !== void 0 && value.START_BONUS_CHANCE !== void 0 ? {
					amount: value.START_BONUS_SUM,
					chance: value.START_BONUS_CHANCE
				} : void 0
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
export { m1DemoPacketStatusTurnSchema as a, m1DemoDicesSchema as c, bit as d, parse as f, m1DemoContractSchema as i, roll_dices_exports as l, m1DemoPacketSetupConfigSchema as n, getMovementOptions as o, __exportAll as p, m1DemoPacketV1ConfigSchema as r, m1DemoPacketStatusTurnMovementSchema as s, m1DemoPacketSetupConfigRestartVariantSchema as t, normalizeFieldId as u };
