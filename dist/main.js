import { array, boolean, exactOptional, getDotPath, intersect, isValiError, literal, never, nullable, number, object, optional, parser, picklist, pipe, record, safeParser, strictObject, string, transform, tuple, undefined_, union, unknown, variant } from "valibot";

//#region rolldown:runtime
var __defProp = Object.defineProperty;
var __export = (target, all) => {
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
};

//#endregion
//#region src/packet/events/auction.ts
var auction_exports = {};
__export(auction_exports, {
	enrichments: () => enrichments$18,
	valiSchemas: () => valiSchemas$19,
	valiV1Schemas: () => valiV1Schemas$19
});
const valiSchemas$19 = [
	object({
		id: string(),
		type: literal("auction.put"),
		user_id: number(),
		field_id: number(),
		bid: number()
	}),
	object({
		id: string(),
		type: literal("auction.bid"),
		user_id: number(),
		bid: number()
	}),
	object({
		id: string(),
		type: literal("auction.reject"),
		user_id: number()
	}),
	object({
		id: string(),
		type: literal("auction.win"),
		user_id: number(),
		field_id: number(),
		user_id_seller: optional(number()),
		price: number()
	}),
	object({
		id: string(),
		type: literal("auction.cancel"),
		field_id: number(),
		user_id_seller: optional(number()),
		price: optional(number())
	})
];
const enrichments$18 = {
	"auction.win"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.cash -= options.event.price;
		options.status.fields.set(options.event.field_id, {
			field_id: options.event.field_id,
			owner_user_id: options.event.user_id,
			level: 0
		});
		const { user_id_seller } = options.event;
		if (typeof user_id_seller === "number") {
			const player_seller = options.status.players.get(user_id_seller);
			player_seller.cash += options.event.price;
		}
	},
	"auction.cancel"(options) {
		const { user_id_seller } = options.event;
		if (typeof user_id_seller === "number") {
			const player_seller = options.status.players.get(user_id_seller);
			player_seller.cash += options.event.price;
			options.status.fields.delete(options.event.field_id);
		}
	}
};
const valiV1Schemas$19 = [
	pipe(object({
		_id: optional(string()),
		type: literal("toAuction"),
		user_id: number(),
		field: number(),
		bet: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "auction.put",
			user_id: value.user_id,
			field_id: value.field,
			bid: value.bet
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("auctionAccept"),
		user_id: number(),
		bet: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "auction.bid",
			user_id: value.user_id,
			bid: value.bet
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("auctionDecline"),
		user_id: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "auction.reject",
			user_id: value.user_id
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("auctionWinner"),
		user_id: number(),
		user_id_seller: optional(number()),
		field: number(),
		money: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "auction.win",
			user_id: value.user_id,
			field_id: value.field,
			user_id_seller: value.user_id_seller,
			price: value.money
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("auctionFail"),
		field: number(),
		user_id_seller: optional(number()),
		money: optional(number())
	}), transform((value) => {
		return {
			id: value._id,
			type: "auction.cancel",
			field_id: value.field,
			user_id_seller: value.user_id_seller,
			price: value.money
		};
	}))
];

//#endregion
//#region src/packet/events/bank.ts
var bank_exports = {};
__export(bank_exports, {
	enrichments: () => enrichments$17,
	valiSchemas: () => valiSchemas$18,
	valiV1Schemas: () => valiV1Schemas$18
});
const valiSchemas$18 = [
	object({
		id: string(),
		type: literal("bank.income"),
		user_id: number(),
		amount: number()
	}),
	object({
		id: string(),
		type: literal("bank.fee"),
		user_id: number(),
		amount: number()
	}),
	object({
		id: string(),
		type: literal("bank.fee.pay"),
		user_id: number(),
		amount: number()
	}),
	object({
		id: string(),
		type: literal("bank.return"),
		user_id: number(),
		amount: number()
	})
];
const enrichments$17 = {
	"bank.income"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.cash += options.event.amount;
	},
	"bank.fee.pay"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.cash -= options.event.amount;
	},
	"bank.return"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.cash += options.event.amount;
	}
};
const valiV1Schemas$18 = [
	pipe(object({
		_id: optional(string()),
		type: literal("cash_plus"),
		user_id: number(),
		money: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "bank.income",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: picklist([
			"cash_minus",
			"tax_income",
			"tax_luxury"
		]),
		user_id: number(),
		money: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "bank.fee",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("feePaid"),
		user_id: number(),
		money: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "bank.fee.pay",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("insuranceReturn"),
		user_id: number(),
		money: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "bank.return",
			user_id: value.user_id,
			amount: value.money
		};
	}))
];

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
//#region src/utils/valibot.ts
/**
* Creates bit schema.
* @param default_value Default value for a bit.
* @returns -
*/
function bit(default_value) {
	return pipe(optional(picklist([0, 1]), default_value ? 1 : 0), transform((value) => value === 1));
}
function parse(schema, value) {
	return parser$1(schema)(value);
}
function parser$1(schema) {
	const fn = parser(schema);
	return (value) => {
		try {
			return fn(value);
		} catch (error) {
			if (isValiError(error)) for (const issue of error.issues) console.error(`Valibot found an issue at ${getDotPath(issue)}. Received ${issue.received}, which does not match expected type ${issue.expected}`, issue);
			throw error;
		}
	};
}

//#endregion
//#region src/packet/events/bus.ts
var bus_exports = {};
__export(bus_exports, {
	enrichments: () => enrichments$16,
	valiSchemas: () => valiSchemas$17,
	valiV1Schemas: () => valiV1Schemas$17
});
const valiSchemas$17 = [object({
	id: string(),
	type: literal("bus.select"),
	user_id: number(),
	field_ids_move: pipe(array(number()), transform((value) => new Set(value)))
}), object({
	id: string(),
	type: literal("bus.move"),
	user_id: number(),
	selection: object({
		stop_id: picklist([
			0,
			1,
			-1
		]),
		field_id: number(),
		auto: bit(false)
	}),
	move_reversed: bit(false)
})];
const enrichments$16 = {
	"bus.select"(options) {
		if (options.event.field_ids_move.size === 0) {
			const player = options.status.players.get(options.event.user_id);
			const event_roll_dices = options.events_before.find((event) => event.type === "roll-dices");
			if (!event_roll_dices) throw new Error("No \"roll-dices\" event found before \"bus.select\".");
			const direction = options.status.turn.move_reversed ? -1 : 1;
			options.event.field_ids_move = new Set([
				event_roll_dices.dices[0],
				event_roll_dices.dices[1],
				event_roll_dices.dices[0] + event_roll_dices.dices[1]
			].map((value) => normalizeFieldId(options.setup, player.position + direction * value)));
		}
	},
	"bus.move"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.position = options.event.selection.field_id;
	}
};
const valiV1Schemas$17 = [pipe(object({
	_id: optional(string()),
	type: literal("chooseBusStop"),
	user_id: number()
}), transform((value) => {
	return {
		id: value._id,
		type: "bus.select",
		user_id: value.user_id,
		field_ids_move: new Set()
	};
})), pipe(object({
	_id: optional(string()),
	type: literal("busStopChoosed"),
	user_id: number(),
	stop: picklist([
		0,
		1,
		-1
	]),
	mean_position: number(),
	move_reverse: bit(false),
	auto_selected: bit(false)
}), transform((value) => {
	return {
		id: value._id,
		type: "bus.move",
		user_id: value.user_id,
		selection: {
			stop_id: value.stop,
			field_id: value.mean_position,
			auto: value.auto_selected
		},
		move_reversed: value.move_reverse
	};
}))];

//#endregion
//#region src/packet/status/turn.ts
const valiM1DemoContractSchema = pipe(tuple([object({
	user_id: number(),
	field_ids: array(number()),
	cash: number()
}), object({
	user_id: number(),
	field_ids: array(number()),
	cash: number()
})]), transform(([initiator, responder]) => {
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
}));
const valiM1DemoPacketStatusTurnSchema = object({
	user_id: nullable(number()),
	action: object({
		user_id: nullable(number()),
		list: pipe(array(picklist([
			"auction.put",
			"auction.bid",
			"auction.reject",
			"bank.fee.pay",
			"bus.move",
			"contract.send",
			"contract.accept",
			"contract.reject",
			"jackpot.reject",
			"jackpot.play",
			"jail.release.pay",
			"level.build",
			"level.sell",
			"loan.take",
			"loan.repay",
			"mortgage.put",
			"mortgage.buyback",
			"mortgage.auction",
			"purchase",
			"purchase.reject",
			"rent.pay",
			"roll-dices",
			"triple.move",
			"wormhole.use",
			"wormhole.open",
			"wormhole.jump",
			"wormhole.reject",
			"restart"
		])), transform((value) => new Set(value)))
	}),
	move_reversed: bit(false),
	auction: optional(object({
		field_id: number(),
		bid: number(),
		user_ids_rejected: pipe(array(number()), transform((value) => new Set(value)))
	})),
	contract: optional(valiM1DemoContractSchema),
	contracts_sent: optional(number()),
	jackpot: optional(object({ superprize: number() })),
	payment: optional(object({
		to_user_id: optional(number()),
		amount: number()
	})),
	field_ids_move: optional(pipe(array(object({
		field_id: number(),
		data: union([object({ stop: number() }), object({ field_id: number() })])
	})), transform((value) => new Map(value.map((item) => [item.field_id, item.data]))))),
	field_ids_level_built: optional(pipe(array(number()), transform((value) => new Set(value)))),
	field_ids_mortgaged: optional(pipe(array(number()), transform((value) => new Set(value))))
});

//#endregion
//#region src/packet/status/fields.ts
const valiM1DemoPacketStatusFieldsSchema = pipe(array(pipe(object({
	field_id: number(),
	owner_user_id: number(),
	level: number(),
	mortgage: optional(object({ round_until: optional(number()) }))
}), transform((value) => value))), transform((value) => new Map(value.map((field) => [field.field_id, field]))));
const valiM1DemoPacketV1StatusFieldsSchema = pipe(record(string(), object({
	owner: number(),
	level: number(),
	mortgaged: boolean(),
	mortgage_lose_round: optional(number())
})), transform((value) => new Map(Object.entries(value).map(([field_id_string, field]) => {
	const field_id = Number.parseInt(field_id_string);
	return [field_id, {
		field_id,
		owner_user_id: field.owner,
		level: field.level,
		mortgage: field.mortgaged ? { round_until: field.mortgage_lose_round } : void 0
	}];
}))));

//#endregion
//#region src/utils/crc.ts
const table = new Uint32Array(256);
for (let index = 256; index--;) {
	let tmp = index;
	for (let _k = 8; _k--;) tmp = tmp & 1 ? 3988292384 ^ tmp >>> 1 : tmp >>> 1;
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
		const tableIndex = (crc ^ byte) & 255;
		const tableVal = table[tableIndex];
		crc = crc >>> 8 ^ tableVal;
	}
	return crc ^ 4294967295;
}

//#endregion
//#region src/packet/setup/config/chance.ts
const valiM1DemoPacketSetupConfigMechanicsChanceSchema = strictObject({ cards: array(union([
	strictObject({
		type: literal("income"),
		text_id: number(),
		range: strictObject({
			min: number(),
			max: number(),
			step: number()
		})
	}),
	strictObject({
		type: literal("expense"),
		text_id: number(),
		range: strictObject({
			min: number(),
			max: number(),
			step: number()
		})
	}),
	strictObject({
		type: literal("repair"),
		text_id: number(),
		cost: strictObject({
			small: number(),
			big: number()
		})
	}),
	strictObject({
		type: literal("go-to-jail"),
		text_id: number()
	}),
	strictObject({
		type: literal("teleport"),
		text_id: number()
	}),
	strictObject({
		type: literal("skip-move"),
		text_id: number()
	}),
	strictObject({
		type: literal("insurance"),
		text_id: number(),
		price: number()
	}),
	strictObject({
		type: literal("birthday"),
		text_id: number(),
		amount: number()
	}),
	strictObject({
		type: literal("reverse"),
		text_id: number()
	}),
	strictObject({
		type: literal("disaster"),
		text_id: number()
	})
])) });
const valiM1DemoPacketV1ConfigChanceCardsSchema = pipe(array(union([
	strictObject({
		type: literal("cash_in"),
		text: string(),
		range: tuple([number(), number()]),
		rangeStep: number()
	}),
	strictObject({
		type: literal("cash_out"),
		text: string(),
		range: tuple([number(), number()]),
		rangeStep: number()
	}),
	strictObject({
		type: literal("repair"),
		text: string(),
		costs: tuple([number(), number()])
	}),
	strictObject({
		type: literal("jail"),
		text: string()
	}),
	strictObject({
		type: literal("teleport"),
		text: string()
	}),
	strictObject({
		type: literal("move_skip"),
		text: string()
	}),
	strictObject({
		type: literal("insurance"),
		text: string(),
		sum: number()
	}),
	strictObject({
		type: literal("birthday"),
		text: string(),
		sum: number()
	}),
	strictObject({
		type: literal("reverse"),
		text: string()
	}),
	strictObject({
		type: literal("fields_disaster"),
		text: string()
	})
])), transform((value) => {
	const chance_cards_new = [];
	for (const element$1 of value) switch (element$1.type) {
		case "cash_in":
			chance_cards_new.push({
				type: "income",
				text_id: crc32(element$1.text),
				range: {
					min: element$1.range[0],
					max: element$1.range[1],
					step: element$1.rangeStep
				}
			});
			break;
		case "cash_out":
			chance_cards_new.push({
				type: "expense",
				text_id: crc32(element$1.text),
				range: {
					min: element$1.range[0],
					max: element$1.range[1],
					step: element$1.rangeStep
				}
			});
			break;
		case "repair":
			chance_cards_new.push({
				type: "repair",
				text_id: crc32(element$1.text),
				cost: {
					small: element$1.costs[0],
					big: element$1.costs[1]
				}
			});
			break;
		case "jail":
			chance_cards_new.push({
				type: "go-to-jail",
				text_id: crc32(element$1.text)
			});
			break;
		case "teleport":
		case "reverse":
			chance_cards_new.push({
				type: element$1.type,
				text_id: crc32(element$1.text)
			});
			break;
		case "move_skip":
			chance_cards_new.push({
				type: "skip-move",
				text_id: crc32(element$1.text)
			});
			break;
		case "insurance":
			chance_cards_new.push({
				type: "insurance",
				text_id: crc32(element$1.text),
				price: element$1.sum
			});
			break;
		case "birthday":
			chance_cards_new.push({
				type: "birthday",
				text_id: crc32(element$1.text),
				amount: element$1.sum
			});
			break;
		case "fields_disaster":
			chance_cards_new.push({
				type: "disaster",
				text_id: crc32(element$1.text)
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
const valiM1DemoPacketSetupConfigFieldsSchema = pipe(array(union([
	object({
		is_corner: pipe(literal(1), transform(() => true)),
		type: picklist(["start", "jail"])
	}),
	object({
		is_corner: bit(false),
		type: picklist([
			"chance",
			"jackpot",
			"jail.goto",
			"tax.income",
			"tax.luxury",
			"wormhole"
		])
	}),
	object({
		is_corner: pipe(undefined_(), transform(() => false)),
		type: literal("company"),
		monopoly_id: number(),
		is_last: bit(false)
	})
])), transform((value) => {
	const indexes_by_group = new Map();
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
const valiM1DemoPacketV1ConfigFieldsSchema = pipe(array(
	variant("type", [
		object({
			design: literal("corner"),
			type: literal("start")
		}),
		object({
			design: literal("corner"),
			type: literal("jail")
		}),
		object({
			design: optional(literal("corner")),
			type: literal("special"),
			action: picklist([
				"chance",
				"goToJail",
				"jackpot",
				"tax_income",
				"tax_luxury",
				"wormhole"
			])
		}),
		object({
			design: exactOptional(never()),
			type: literal("field"),
			group: number(),
			is_last: bit(false)
		})
	])
	// union([
	// 	// ALWAYS corners
	// 	// separate types into object because typescript cannot extract types from union using if
	// 	object({
	// 		design: literal('corner'),
	// 		type: literal('start'),
	// 	}),
	// 	object({
	// 		design: literal('corner'),
	// 		type: literal('jail'),
	// 	}),
	// 	// MAYBE corners
	// 	object({
	// 		design: optional(literal('corner')),
	// 		type: literal('special'),
	// 		action: picklist([
	// 			'chance',
	// 			'goToJail',
	// 			'jackpot',
	// 			'tax_income',
	// 			'tax_luxury',
	// 			'wormhole',
	// 		]),
	// 	}),
	// 	// NEVER corners
	// 	object({
	// 		design: undefined_(),
	// 		type: literal('field'),
	// 		group: number(),
	// 		is_last: bit(false),
	// 	}),
	// ]),
), transform((value) => {
	const indexes_by_group = new Map();
	return value.map((field) => {
		if (field.type === "start" || field.type === "jail") {
			const { type, design: _1,...field_rest } = field;
			return {
				is_corner: true,
				type,
				...field_rest
			};
		}
		if (field.type === "field") {
			const { type: _type, design: _design, group: monopoly_id,...field_rest } = field;
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
			const { type: _1, action, design,...field_rest } = field;
			let type_new;
			switch (action) {
				case "goToJail":
					type_new = "jail.goto";
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
const valiM1DemoPacketSetupConfigMonopoliesSchema = pipe(record(string(), union([
	object({
		buy_price: number(),
		rent_by_level: array(number()),
		level_cost: number(),
		last_field: optional(object({
			buy_price: number(),
			rent_by_level: array(number())
		}))
	}),
	object({
		buy_price: number(),
		rent_by_count: array(number())
	}),
	object({
		buy_price: number(),
		dice_multipliers: array(number())
	})
])), transform((value) => new Map(Object.entries(value).map(([monopoly_id, monopoly]) => [Number(monopoly_id), monopoly]))));
const valiM1DemoPacketV1ConfigGroupsSchema = pipe(record(string(), union([
	object({
		buy: number(),
		levels: array(number()),
		buy_last: optional(number()),
		levels_last: optional(array(number())),
		levelUpCost: number()
	}),
	object({
		buy: number(),
		levels: array(number()),
		levelUpCost: literal(false)
	}),
	object({
		buy: number(),
		levels: literal(false),
		coeffs: array(number()),
		levelUpCost: literal(false)
	})
])), transform((value) => new Map(Object.entries(value).map(([monopoly_id_string, group]) => {
	let monopoly;
	if ("coeffs" in group) monopoly = {
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
	return [Number.parseInt(monopoly_id_string), monopoly];
}))));

//#endregion
//#region src/packet/setup/config.ts
const valiM1DemoPacketSetipConfigRestartVariantSchema = object({
	round_from: number(),
	round_to: number(),
	count: number(),
	price: number()
});
const valiM1DemoPacketSetupConfigSchema = object({
	version: number(),
	board_size: tuple([number(), number()]),
	timers: object({ roll_dices: number() }),
	fields: valiM1DemoPacketSetupConfigFieldsSchema,
	monopolies: valiM1DemoPacketSetupConfigMonopoliesSchema,
	mechanics: object({
		auction: optional(object({ bid_increment: number() })),
		chance: optional(valiM1DemoPacketSetupConfigMechanicsChanceSchema),
		field_level: optional(object({
			sell_multiplier: optional(number(), 1),
			build_uneven: bit(false),
			build_without_monopoly: bit(false)
		})),
		jackpot: optional(object({
			bet: number(),
			multipliers: array(number()),
			superprize: object({ chance: number() })
		})),
		jail: object({
			release_fee: number(),
			double_roll_attempt_limit: optional(number(), 3)
		}),
		loan: optional(object({
			amount: number(),
			repay_multiplier: number(),
			duration: number(),
			cooldown: object({
				match_start: number(),
				repay: number()
			})
		})),
		mortgage: optional(object({
			duration: optional(number()),
			multiplier: number(),
			buyback_multiplier: number(),
			auction_multiplier: optional(number())
		})),
		restart: optional(object({ variants: array(valiM1DemoPacketSetipConfigRestartVariantSchema) })),
		start: object({
			income_amount: number(),
			bonus_amount: optional(number(), 0)
		}),
		time_rules: array(union([
			object({
				type: literal("start.none"),
				time: number()
			}),
			object({
				type: literal("start.tax"),
				time: number(),
				sum: number()
			}),
			object({
				type: literal("rent.tax"),
				time: number(),
				rate: number()
			})
		])),
		wormhole: optional(object({
			exits_free_count: optional(number(), 3),
			exits_extra_price: number(),
			move_direct: bit(false)
		}))
	})
});
const valiM1DemoPacketV1ConfigSchema = pipe(
	object({
		version: number(),
		size: tuple([number(), number()]),
		fields: valiM1DemoPacketV1ConfigFieldsSchema,
		groups: valiM1DemoPacketV1ConfigGroupsSchema,
		TIME_FOR_ROLL_DICES: number(),
		AUCTION_BET_STEP: optional(number()),
		chance_cards: optional(valiM1DemoPacketV1ConfigChanceCardsSchema),
		coeff_level_down: optional(number(), 1),
		UNEVEN_LEVEL_CHANGE: bit(false),
		LEVEL_CHANGE_NO_MNPL: bit(false),
		JACKPOT_BET: optional(number()),
		JACKPOT_COEFFS: optional(array(number())),
		JACKPOT_SUPERPRIZE_CHANCE: optional(number()),
		jailFee: number(),
		UNJAIL_TRIES_LIMIT: optional(number(), 3),
		CREDIT_SUM: optional(number()),
		CREDIT_INTEREST: optional(number()),
		CREDIT_PERCENT: optional(number()),
		CREDIT_ROUNDS: optional(number()),
		CREDIT_COOLDOWN_ROUNDS: optional(number()),
		START_CREDIT_COOLDOWN_ROUNDS: optional(number()),
		MORTGAGE_ROUND_LIMIT: optional(number()),
		coeff_mortgage: number(),
		coeff_unmortgage: number(),
		auction_mortgaged: optional(number()),
		restart_variants: optional(array(valiM1DemoPacketSetipConfigRestartVariantSchema)),
		roundCash: number(),
		START_BONUS_SUM: optional(number(), 0),
		roundTaxes: array(object({
			game_time: number(),
			tax: number()
		})),
		incomeTaxes: array(object({
			game_time: number(),
			tax_rate: number()
		})),
		WORMHOLE_DIRECTLY: optional(bit(false)),
		WORMHOLE_EXTRA_DESTINATION_COST: optional(number())
	}),
	// transforming config in-place because it is a whole product
	transform((value) => {
		return {
			version: value.version,
			board_size: value.size,
			timers: { roll_dices: value.TIME_FOR_ROLL_DICES },
			fields: value.fields,
			monopolies: value.groups,
			mechanics: {
				auction: typeof value.AUCTION_BET_STEP === "number" ? { bid_increment: value.AUCTION_BET_STEP } : void 0,
				chance: value.chance_cards ? { cards: value.chance_cards } : void 0,
				field_level: {
					sell_multiplier: value.coeff_level_down,
					build_uneven: value.UNEVEN_LEVEL_CHANGE,
					build_without_monopoly: value.LEVEL_CHANGE_NO_MNPL
				},
				jackpot: typeof value.JACKPOT_BET === "number" ? {
					bet: value.JACKPOT_BET,
					multipliers: value.JACKPOT_COEFFS,
					superprize: { chance: value.JACKPOT_SUPERPRIZE_CHANCE }
				} : void 0,
				jail: {
					release_fee: value.jailFee,
					double_roll_attempt_limit: value.UNJAIL_TRIES_LIMIT
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
				mortgage: {
					duration: value.MORTGAGE_ROUND_LIMIT,
					multiplier: value.coeff_mortgage,
					buyback_multiplier: value.coeff_unmortgage,
					auction_multiplier: value.auction_mortgaged
				},
				restart: value.restart_variants ? { variants: value.restart_variants } : void 0,
				start: {
					income_amount: value.roundCash,
					bonus_amount: value.START_BONUS_SUM
				},
				time_rules: [...value.roundTaxes.map((rule) => {
					if (rule.tax === 0) return {
						type: "start.none",
						time: rule.game_time * 1e3
					};
					return {
						type: "start.tax",
						time: rule.game_time * 1e3,
						sum: rule.tax
					};
				}), ...value.incomeTaxes.map((rule) => {
					return {
						type: "rent.tax",
						time: rule.game_time * 1e3,
						rate: rule.tax_rate
					};
				})].sort((a, b) => a.time - b.time),
				wormhole: typeof value.WORMHOLE_DIRECTLY === "boolean" ? {
					exits_free_count: 3,
					exits_extra_price: value.WORMHOLE_EXTRA_DESTINATION_COST,
					move_direct: value.WORMHOLE_DIRECTLY
				} : void 0
			}
		};
	})
);

//#endregion
//#region src/packet/status/player.ts
const valiM1DemoPacketStatusPlayersSchema = pipe(array(pipe(object({
	user_id: number(),
	status: number(),
	position: number(),
	cash: number(),
	score: number(),
	jail: optional(object({ roll_double_attempts: number() })),
	loan: union([strictObject({
		taken: pipe(literal(0), transform(() => false)),
		unlock_round: number()
	}), strictObject({
		taken: pipe(literal(1), transform(() => true)),
		debt: number(),
		return_round: number()
	})]),
	restart: optional(object({ variant: nullable(valiM1DemoPacketSetipConfigRestartVariantSchema) }))
}), transform((value) => value))), transform((value) => new Map(value.map((player) => [player.user_id, player]))));
const valiM1DemoPacketV1StatusPlayersSchema = array(pipe(object({
	user_id: number(),
	vip: optional(boolean(), false),
	cards_equipped: optional(record(string(), object({
		thing_id: number(),
		coeff_rent: number()
	}))),
	can_use_credit: optional(boolean(), false),
	status: number(),
	position: number(),
	money: number(),
	score: number(),
	jailed: boolean(),
	unjailAttempts: number(),
	credit_nextTakeRound: number(),
	credit_payRound: union([literal(false), number()]),
	credit_toPay: number(),
	restart: optional(union([pipe(literal(0), transform(() => null)), valiM1DemoPacketSetipConfigRestartVariantSchema]))
}), transform((value) => {
	return {
		user_id: value.user_id,
		_setup: value.cards_equipped ? {
			index: -1,
			is_vip: value.vip,
			is_loan_available: value.can_use_credit,
			equipment: { cards: new Map(Object.entries(value.cards_equipped).map(([field_id_string, card_equipped]) => {
				const field_id = Number.parseInt(field_id_string);
				return [field_id, {
					field_id,
					item_proto_id: 0,
					item_id: card_equipped.thing_id,
					rent_multiplier: card_equipped.coeff_rent
				}];
			})) }
		} : void 0,
		_status: {
			status: value.status,
			position: value.position,
			cash: value.money,
			score: value.score,
			jail: value.jailed ? { roll_double_attempts: value.unjailAttempts } : void 0,
			loan: value.credit_payRound === false ? {
				taken: false,
				unlock_round: value.credit_nextTakeRound
			} : {
				taken: true,
				debt: value.credit_toPay,
				return_round: value.credit_payRound
			},
			restart: value.restart === void 0 ? void 0 : { variant: value.restart }
		}
	};
})));

//#endregion
//#region src/packet/status.ts
const valiM1DemoPacketStatusSchema = object({
	round: number(),
	players: valiM1DemoPacketStatusPlayersSchema,
	fields: valiM1DemoPacketStatusFieldsSchema,
	turn: valiM1DemoPacketStatusTurnSchema,
	timer: optional(union([object({
		ts_expires: number(),
		is_extra: boolean()
	}), object({
		expires_in: number(),
		is_extra: boolean()
	})]))
});
const action_list_mapping = {
	toAuction: "auction.put",
	auctionAccept: "auction.bid",
	auctionDecline: "auction.reject",
	payToBank: "bank.fee.pay",
	chooseBusStop: "bus.move",
	contract: "contract.send",
	contract_accept: "contract.accept",
	contract_decline: "contract.reject",
	jackpotDecline: "jackpot.reject",
	jackpotPlay: "jackpot.play",
	payForUnjail: "jail.release.pay",
	levelUp: "level.build",
	levelDown: "level.sell",
	credit_take: "loan.take",
	credit_pay: "loan.repay",
	mortgage: "mortgage.put",
	unmortgage: "mortgage.buyback",
	auctionMortgaged: "mortgage.auction",
	buy: "purchase",
	noBuy: "purchase.reject",
	payRent: "rent.pay",
	rollDices: "roll-dices",
	chooseFieldToMove: "triple.move",
	wormholeUse: "wormhole.use",
	wormholeOpen: "wormhole.open",
	wormholeJump: "wormhole.jump",
	wormholeDecline: "wormhole.reject",
	restart: "restart"
};
const extra_actions_mapping = [
	["leave", "leave"],
	["message", "message"],
	["pause.set", "pause"],
	["pause.end", "pauseRemove"]
];
const packetv1_action_mapping = Object.fromEntries([...Object.entries(action_list_mapping).map(([key, value]) => [value, key]), ...extra_actions_mapping]);
const valiM1DemoPacketV1StatusActiontypeSchema = array(picklist(Object.keys(action_list_mapping)));
const valiM1DemoPacketV1ContractSchema = pipe(object({
	from: number(),
	to: number(),
	out_fields: array(number()),
	out_money: number(),
	in_fields: array(number()),
	in_money: number()
}), transform((value) => ({
	initiator: {
		user_id: value.from,
		field_ids: new Set(value.out_fields),
		cash: value.out_money
	},
	responder: {
		user_id: value.to,
		field_ids: new Set(value.in_fields),
		cash: value.in_money
	}
})));
const valiM1DemoPacketV1StatusSchema = pipe(
	object({
		round: number(),
		players: valiM1DemoPacketV1StatusPlayersSchema,
		fields: valiM1DemoPacketV1StatusFieldsSchema,
		player_ownerOfMove: nullable(number()),
		action_player: nullable(number()),
		action_type: valiM1DemoPacketV1StatusActiontypeSchema,
		current_move: optional(object({
			dices: optional(tuple([
				number(),
				optional(number()),
				optional(number())
			])),
			move_reverse: optional(boolean(), false),
			pay: optional(number()),
			moneyToPay: optional(number()),
			payTo: optional(number()),
			players_auctionStatus: optional(pipe(record(string(), number()), transform((value) => new Set(Object.entries(value).filter(([_, status]) => status === 0).map(([user_id_string]) => Number.parseInt(user_id_string)))))),
			field: optional(number()),
			bet: optional(number()),
			contract: optional(valiM1DemoPacketV1ContractSchema),
			contracts: optional(number()),
			jackpot_superprize_money: optional(number()),
			wormhole_destinations: optional(array(number())),
			levelUpped: optional(array(number())),
			mortgaged: optional(array(number()))
		})),
		timeout_ts: number(),
		timeout_is_additional: boolean()
	}),
	transform((value) => {
		for (const [index, player] of value.players.entries()) if (player._setup) player._setup.index = index;
		return value;
	}),
	// eslint-disable-next-line complexity, max-lines-per-function
	transform((value) => {
		const { player_ownerOfMove, action_player, action_type, current_move, timeout_ts, timeout_is_additional,...value_rest } = value;
		const action_list = transformActionsList(action_type);
		const payment_amount = current_move?.pay ?? current_move?.moneyToPay;
		let auction;
		let field_ids_move;
		if (current_move) {
			const action_player_data = value_rest.players.find((player) => player.user_id === action_player);
			if (!action_player_data) throw new Error(`Player with user_id ${action_player_data} not found.`);
			if (action_list.has("bus.move")) {
				if (!current_move.dices) throw new Error("Missing field \"status.current_move.dices\".");
				const direction = current_move.move_reverse ? -1 : 1;
				field_ids_move = new Map([
					[current_move.dices[0], { stop: 0 }],
					[current_move.dices[1], { stop: 1 }],
					[current_move.dices[0] + current_move.dices[1], { stop: -1 }]
				].map(([stop, action_data]) => [action_player_data._status.position + direction * stop, action_data]));
			}
			if (action_list.has("auction.bid")) {
				if (!current_move.players_auctionStatus) throw new TypeError("Missing field \"status.current_move.players_auctionStatus\".");
				if (typeof current_move.bet !== "number") throw new TypeError("Missing field \"status.current_move.bet\".");
				if (typeof current_move.field !== "number") throw new TypeError("Missing field \"status.current_move.field\".");
				auction = {
					field_id: current_move.field,
					bid: current_move.bet,
					user_ids_rejected: current_move.players_auctionStatus
				};
			}
			if (action_list.has("wormhole.jump")) {
				if (!current_move.wormhole_destinations) throw new TypeError("Missing field \"status.current_move.wormhole_destinations\".");
				field_ids_move = new Map(current_move.wormhole_destinations.map((field_id) => [field_id, { field_id }]));
			}
		}
		return {
			...value_rest,
			turn: {
				user_id: player_ownerOfMove,
				action: {
					user_id: action_player,
					list: action_list
				},
				move_reversed: current_move?.move_reverse ?? false,
				auction,
				contract: current_move?.contract,
				contracts_sent: current_move?.contracts,
				jackpot: typeof current_move?.jackpot_superprize_money === "number" ? { superprize: current_move.jackpot_superprize_money } : void 0,
				payment: typeof payment_amount === "number" ? {
					amount: payment_amount,
					to_user_id: current_move?.payTo
				} : void 0,
				field_ids_move,
				field_ids_level_built: current_move?.levelUpped ? new Set(current_move.levelUpped) : void 0,
				field_ids_mortgaged: current_move?.mortgaged ? new Set(current_move.mortgaged) : void 0
			},
			timer: timeout_ts < -1e6 ? {
				expires_in: -(timeout_ts % 1e6) * 1e3,
				is_extra: timeout_is_additional
			} : {
				ts_expires: timeout_ts * 1e3,
				is_extra: timeout_is_additional
			}
		};
	})
);
function transformActionsList(list) {
	const list_new = new Set();
	for (const action of list) list_new.add(action_list_mapping[action]);
	return list_new;
}

//#endregion
//#region src/packet/events/contract.ts
var contract_exports = {};
__export(contract_exports, {
	enrichments: () => enrichments$15,
	valiSchemas: () => valiSchemas$16,
	valiV1Schemas: () => valiV1Schemas$16
});
const valiSchemas$16 = [
	object({
		id: string(),
		type: literal("contract.send"),
		user_id: number(),
		user_id_to: number()
	}),
	object({
		id: string(),
		type: literal("contract.accept"),
		user_id: number(),
		contract: valiM1DemoContractSchema
	}),
	object({
		id: string(),
		type: literal("contract.reject"),
		user_id: number(),
		timeout: bit(false)
	})
];
const enrichments$15 = {};
const valiV1Schemas$16 = [
	pipe(object({
		_id: optional(string()),
		type: literal("contract"),
		user_id: number(),
		to: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "contract.send",
			user_id: value.user_id,
			user_id_to: value.to
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("contract_details")
	}), transform((value) => {
		return {
			id: value._id,
			type: value.type
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("contract_accepted"),
		user_id: number(),
		contract: valiM1DemoPacketV1ContractSchema
	}), transform((value) => {
		return {
			id: value._id,
			type: "contract.accept",
			user_id: value.user_id,
			contract: value.contract
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("contract_declined"),
		user_id: number(),
		by_timeout: bit(false)
	}), transform((value) => {
		return {
			id: value._id,
			type: "contract.reject",
			user_id: value.user_id,
			timeout: value.by_timeout
		};
	}))
];

//#endregion
//#region src/packet/events/jackpot.ts
var jackpot_exports = {};
__export(jackpot_exports, {
	enrichments: () => enrichments$14,
	valiSchemas: () => valiSchemas$15,
	valiV1Schemas: () => valiV1Schemas$15
});
const valiSchemas$15 = [
	object({
		id: string(),
		type: literal("jackpot"),
		user_id: number()
	}),
	object({
		id: string(),
		type: literal("jackpot.pay"),
		user_id: number(),
		amount: number(),
		jackpot_size: number()
	}),
	object({
		id: string(),
		type: literal("jackpot.play"),
		user_id: number(),
		dice_bet: array(number()),
		dice_rolled: number()
	}),
	object({
		id: string(),
		type: literal("jackpot.win"),
		user_id: number(),
		amount: number(),
		dice_rolled: optional(number())
	}),
	object({
		id: string(),
		type: literal("jackpot.lose"),
		user_id: number(),
		amount: optional(number()),
		dice_rolled: optional(number())
	}),
	object({
		id: string(),
		type: literal("jackpot.superprize.win"),
		user_id: number(),
		amount: number()
	}),
	object({
		id: string(),
		type: literal("jackpot.superprize.increase"),
		user_id: number(),
		superprize: number()
	}),
	object({
		id: string(),
		type: literal("jackpot.reject"),
		user_id: number()
	})
];
const enrichments$14 = {
	"jackpot.pay"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.cash -= options.event.amount;
	},
	"jackpot.play"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.cash -= options.setup.config.mechanics.jackpot.bet;
	},
	"jackpot.win"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.cash += options.event.amount;
	},
	"jackpot.superprize.win"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.cash += options.event.amount;
	}
};
const valiV1Schemas$15 = [
	pipe(object({
		_id: optional(string()),
		type: literal("jackpot"),
		user_id: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "jackpot",
			user_id: value.user_id
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("jackpot_paid"),
		user_id: number(),
		money: number(),
		jackpot_money: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "jackpot.pay",
			user_id: value.user_id,
			amount: value.money,
			jackpot_size: value.jackpot_money
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("jackpot_play"),
		user_id: number(),
		dices_betted: array(number()),
		dice_rolled: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "jackpot.play",
			user_id: value.user_id,
			dice_bet: value.dices_betted,
			dice_rolled: value.dice_rolled
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("jackpot_win"),
		user_id: number(),
		money: number(),
		dice_rolled: optional(number())
	}), transform((value) => {
		return {
			id: value._id,
			type: "jackpot.win",
			user_id: value.user_id,
			amount: value.money,
			dice_rolled: value.dice_rolled
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("jackpot_lose"),
		user_id: number(),
		money: optional(number()),
		dice_rolled: optional(number())
	}), transform((value) => {
		return {
			id: value._id,
			type: "jackpot.lose",
			user_id: value.user_id,
			amount: value.money,
			dice_rolled: value.dice_rolled
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("jackpot_superprize_win"),
		user_id: number(),
		money: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "jackpot.superprize.win",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("jackpot_superprize_funded"),
		user_id: number(),
		jackpot_superprize_money: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "jackpot.superprize.increase",
			user_id: value.user_id,
			superprize: value.jackpot_superprize_money
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("jackpot_declined"),
		user_id: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "jackpot.reject",
			user_id: value.user_id
		};
	}))
];

//#endregion
//#region src/packet/events/jail.ts
var jail_exports = {};
__export(jail_exports, {
	enrichments: () => enrichments$13,
	valiSchemas: () => valiSchemas$14,
	valiV1Schemas: () => valiV1Schemas$14
});
const valiSchemas$14 = [
	object({
		id: string(),
		type: literal("jail.put"),
		user_id: number()
	}),
	object({
		id: string(),
		type: literal("jail.put.double"),
		user_id: number()
	}),
	object({
		id: string(),
		type: literal("jail.visit"),
		user_id: number()
	}),
	object({
		id: string(),
		type: literal("jail.release.pay"),
		user_id: number()
	}),
	object({
		id: string(),
		type: literal("jail.release"),
		user_id: number(),
		position_after: optional(number())
	})
];
const enrichments$13 = {
	"jail.put"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.position = options.field_id_jail;
		player.jail = { roll_double_attempts: 0 };
	},
	"jail.put.double"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.position = options.field_id_jail;
		player.jail = { roll_double_attempts: 0 };
	},
	"jail.release"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.jail = void 0;
		if (options.event.position_after) player.position = options.event.position_after;
	}
};
const valiV1Schemas$14 = [
	pipe(object({
		_id: optional(string()),
		type: literal("goToJail"),
		user_id: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "jail.put",
			user_id: value.user_id
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("goToJailByCombo"),
		user_id: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "jail.put.double",
			user_id: value.user_id
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("goToJailVisiting"),
		user_id: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "jail.visit",
			user_id: value.user_id
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("payForUnjail"),
		user_id: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "jail.release.pay",
			user_id: value.user_id
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("unjailedByFee"),
		user_id: number(),
		mean_position: optional(number())
	}), transform((value) => {
		return {
			id: value._id,
			type: "jail.release",
			user_id: value.user_id,
			position_after: value.mean_position
		};
	}))
];

//#endregion
//#region src/packet/events/level.ts
var level_exports = {};
__export(level_exports, {
	enrichments: () => enrichments$12,
	valiSchemas: () => valiSchemas$13,
	valiV1Schemas: () => valiV1Schemas$13
});
const valiSchemas$13 = [object({
	id: string(),
	type: literal("level.build"),
	user_id: number(),
	field_id: number()
}), object({
	id: string(),
	type: literal("level.sell"),
	user_id: number(),
	field_id: number()
})];
const enrichments$12 = {
	"level.build"(options) {
		const field = options.status.fields.get(options.event.field_id);
		field.level++;
		const field_setup = options.setup.config.fields[options.event.field_id];
		if (!field_setup) throw new Error(`Field ${options.event.field_id} is not defined in match config.`);
		if (field_setup.type !== "company") throw new Error(`Field ${field} is not a company`);
		const { monopoly_id } = field_setup;
		const monopoly = options.setup.config.monopolies.get(monopoly_id);
		if ("rent_by_level" in monopoly === false) throw new Error(`Levels cannot be built for monopoly ${monopoly_id}`);
		const player = options.status.players.get(field.owner_user_id);
		player.cash -= monopoly.level_cost;
	},
	"level.sell"(options) {
		const field = options.status.fields.get(options.event.field_id);
		field.level--;
		const field_setup = options.setup.config.fields[options.event.field_id];
		if (!field_setup) throw new Error(`Field ${options.event.field_id} is not defined in match config.`);
		if (field_setup.type !== "company") throw new Error(`Field ${field} is not a company`);
		const { monopoly_id } = field_setup;
		const monopoly = options.setup.config.monopolies.get(monopoly_id);
		if ("rent_by_level" in monopoly === false) throw new Error(`Levels cannot be built for monopoly ${monopoly_id}`);
		const player = options.status.players.get(field.owner_user_id);
		player.cash += monopoly.level_cost;
	}
};
const valiV1Schemas$13 = [pipe(object({
	_id: optional(string()),
	type: literal("levelUp"),
	user_id: number(),
	field: number()
}), transform((value) => {
	return {
		id: value._id,
		type: "level.build",
		user_id: value.user_id,
		field_id: value.field
	};
})), pipe(object({
	_id: optional(string()),
	type: literal("levelDown"),
	user_id: number(),
	field: number()
}), transform((value) => {
	return {
		id: value._id,
		type: "level.sell",
		user_id: value.user_id,
		field_id: value.field
	};
}))];

//#endregion
//#region src/packet/events/loan.ts
var loan_exports = {};
__export(loan_exports, {
	enrichments: () => enrichments$11,
	valiSchemas: () => valiSchemas$12,
	valiV1Schemas: () => valiV1Schemas$12
});
const valiSchemas$12 = [
	object({
		id: string(),
		type: literal("loan.take"),
		user_id: number()
	}),
	object({
		id: string(),
		type: literal("loan.deadline"),
		user_id: number(),
		amount: number()
	}),
	object({
		id: string(),
		type: literal("loan.repay"),
		user_id: number(),
		amount: number()
	})
];
const enrichments$11 = {
	"loan.take"(options) {
		const mechanics_loan = options.setup.config.mechanics.loan;
		const player = options.status.players.get(options.event.user_id);
		player.cash += mechanics_loan.amount;
		player.loan = {
			taken: true,
			debt: mechanics_loan.amount * mechanics_loan.repay_multiplier,
			return_round: options.status.round + mechanics_loan.duration
		};
	},
	"loan.repay"(options) {
		const mechanics_loan = options.setup.config.mechanics.loan;
		const player = options.status.players.get(options.event.user_id);
		player.cash -= options.event.amount;
		player.loan = {
			taken: false,
			unlock_round: options.status.round + mechanics_loan.cooldown.repay
		};
	}
};
const valiV1Schemas$12 = [
	pipe(object({
		_id: optional(string()),
		type: literal("credit_taken"),
		user_id: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "loan.take",
			user_id: value.user_id
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("credit_timeToPay"),
		user_id: number(),
		sum: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "loan.deadline",
			user_id: value.user_id,
			amount: value.sum
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: picklist(["credit_paid", "credit_payed"]),
		user_id: number(),
		sum: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "loan.repay",
			user_id: value.user_id,
			amount: value.sum
		};
	}))
];

//#endregion
//#region src/packet/events/m1.ts
var m1_exports = {};
__export(m1_exports, {
	enrichments: () => enrichments$10,
	valiSchemas: () => valiSchemas$11,
	valiV1Schemas: () => valiV1Schemas$11
});
const valiSchemas$11 = [object({
	id: string(),
	type: literal("m1.move"),
	user_id: number(),
	rule: pipe(picklist([0, 1]), transform((value) => value === 0 ? "free" : "enemy_owned")),
	field_id: number(),
	move_reversed: bit(false)
}), object({
	id: string(),
	type: literal("m1.fail"),
	user_id: number()
})];
const enrichments$10 = { "m1.move"(options) {
	const player = options.status.players.get(options.event.user_id);
	player.position = options.event.field_id;
} };
const valiV1Schemas$11 = [pipe(object({
	_id: optional(string()),
	type: literal("mrMonopoly"),
	user_id: number(),
	field_type: pipe(picklist([0, 1]), transform((value) => value === 0 ? "free" : "enemy_owned")),
	field_id: number(),
	move_reverse: bit(false)
}), transform((value) => {
	return {
		id: value._id,
		type: "m1.move",
		user_id: value.user_id,
		rule: value.field_type,
		field_id: value.field_id,
		move_reversed: value.move_reverse
	};
})), pipe(object({
	_id: optional(string()),
	type: literal("mrMonopolyFailed"),
	user_id: number()
}), transform((value) => {
	return {
		id: value._id,
		type: "m1.fail",
		user_id: value.user_id
	};
}))];

//#endregion
//#region src/packet/events/mortgage.ts
var mortgage_exports = {};
__export(mortgage_exports, {
	enrichments: () => enrichments$9,
	valiSchemas: () => valiSchemas$10,
	valiV1Schemas: () => valiV1Schemas$10
});
const valiSchemas$10 = [
	object({
		id: string(),
		type: literal("mortgage.put"),
		user_id: number(),
		field_id: number()
	}),
	object({
		id: string(),
		type: literal("mortgage.buyback"),
		user_id: number(),
		field_id: number()
	}),
	object({
		id: string(),
		type: literal("mortgage.expire"),
		user_id: number(),
		field_id: number()
	})
];
const enrichments$9 = {
	"mortgage.put"(options) {
		const mechanics_mortgage = options.setup.config.mechanics.mortgage;
		if (!mechanics_mortgage) throw new Error("There is no \"mortgage\" mechanics defined in match config.");
		const field = options.status.fields.get(options.event.field_id);
		field.mortgage = { round_until: typeof mechanics_mortgage.duration === "number" ? options.status.round + mechanics_mortgage.duration : void 0 };
		const field_setup = options.setup.config.fields[options.event.field_id];
		if (!field_setup) throw new Error(`Field ${options.event.field_id} does not exist`);
		if (field_setup?.type !== "company") throw new Error(`Field ${field} is not a company`);
		const { monopoly_id } = field_setup;
		const monopoly = options.setup.config.monopolies.get(monopoly_id);
		const mortgage_price = monopoly.buy_price * mechanics_mortgage.multiplier;
		const player = options.status.players.get(field.owner_user_id);
		player.cash += mortgage_price;
	},
	"mortgage.buyback"(options) {
		const mechanics_mortgage = options.setup.config.mechanics.mortgage;
		if (!mechanics_mortgage) throw new Error("There is no \"mortgage\" mechanics defined in match config.");
		const field = options.status.fields.get(options.event.field_id);
		field.mortgage = void 0;
		const field_setup = options.setup.config.fields[options.event.field_id];
		if (!field_setup) throw new Error(`Field ${options.event.field_id} is not defined in match config.`);
		if (field_setup.type !== "company") throw new Error(`Field ${field} is not a company`);
		const { monopoly_id } = field_setup;
		const monopoly = options.setup.config.monopolies.get(monopoly_id);
		const mortgage_price = monopoly.buy_price * mechanics_mortgage.multiplier * mechanics_mortgage.buyback_multiplier;
		const player = options.status.players.get(field.owner_user_id);
		player.cash -= mortgage_price;
	},
	"mortgage.expire"(options) {
		if (options.event.user_id === -1) options.event.user_id = options.status.fields.get(options.event.field_id).owner_user_id;
		options.status.fields.delete(options.event.field_id);
	}
};
const valiV1Schemas$10 = [
	pipe(object({
		_id: optional(string()),
		type: literal("mortgage"),
		user_id: number(),
		field: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "mortgage.put",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("unmortgage"),
		user_id: number(),
		field: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "mortgage.buyback",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("mortgage_limit"),
		field: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "mortgage.expire",
			user_id: -1,
			field_id: value.field
		};
	}))
];

//#endregion
//#region src/packet/events/other.ts
var other_exports = {};
__export(other_exports, {
	enrichments: () => enrichments$8,
	valiSchemas: () => valiSchemas$9,
	valiV1Schemas: () => valiV1Schemas$9
});
const valiChanceDataSchema = union([
	strictObject({ amount: number() }),
	strictObject({
		field_id: number(),
		move_reversed: bit(false)
	}),
	undefined_()
]);
const valiSchemas$9 = [
	object({
		id: string(),
		type: literal("bankrupt"),
		user_id: number(),
		user_id_bankrupt: number()
	}),
	object({
		id: string(),
		type: literal("chance"),
		user_id: number(),
		chance_index: number(),
		data: valiChanceDataSchema
	}),
	object({
		id: string(),
		type: literal("game-over")
	}),
	object({
		id: string(),
		type: literal("leave"),
		user_id: number(),
		kicked: bit(false)
	}),
	object({
		id: string(),
		type: literal("message"),
		user_id: number(),
		private: optional(object({ user_id: optional(number()) })),
		is_forced: bit(false),
		text: string()
	}),
	object({
		id: string(),
		type: literal("restart"),
		user_id: number(),
		restart_price: number()
	})
];
const enrichments$8 = { chance(options) {
	const chance_card_index = options.event.chance_index;
	const chance_card = options.setup.config.mechanics.chance.cards[chance_card_index];
	const player = options.status.players.get(options.event.user_id);
	switch (chance_card?.type) {
		case "income":
		case "birthday":
			if (!options.event.data || "amount" in options.event.data !== true) throw new TypeError(`Invalid chance event data: missing "amount" field for "${chance_card.type}" chance card.`);
			player.cash += options.event.data.amount;
			break;
		case "go-to-jail":
			player.position = options.field_id_jail;
			player.jail = { roll_double_attempts: 0 };
			break;
		case "teleport":
			if (options.event.data && "field_id" in options.event.data) player.position = options.event.data.field_id;
			break;
	}
} };
const element = document.createElement("p");
/**
* Replaces HTML entities with their respective characters.
* @param text - Text to unescape.
* @returns Unescaped text.
*/
function unescapeHtml(text) {
	element.innerHTML = text;
	return element.textContent;
}
const valiV1Schemas$9 = [
	pipe(object({
		_id: optional(string()),
		type: literal("bankrupted"),
		user_id: number(),
		to: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "bankrupt",
			user_id: value.user_id,
			user_id_bankrupt: value.to
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("chance"),
		user_id: number(),
		chance_id: number(),
		money: optional(number()),
		move_reverse: optional(bit(false)),
		mean_position: optional(number())
	}), transform((value) => {
		let data;
		if (typeof value.mean_position === "number") data = {
			move_reversed: value.move_reverse ?? false,
			field_id: value.mean_position
		};
		else if (typeof value.money === "number") data = { amount: value.money };
		return {
			id: value._id,
			type: "chance",
			user_id: value.user_id,
			chance_index: value.chance_id,
			data
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("gameOver")
	}), transform((value) => {
		return {
			id: value._id,
			type: "game-over"
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("leave"),
		user_id: number(),
		is_kicked: bit(false)
	}), transform((value) => {
		return {
			id: value._id,
			type: "leave",
			user_id: value.user_id,
			kicked: value.is_kicked
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("message"),
		user_id: number(),
		private: optional(object({
			user: optional(number()),
			team: optional(unknown())
		})),
		forced: bit(false),
		text: string(),
		is_unsafe: bit(false)
	}), transform((value) => {
		return {
			id: value._id,
			type: "message",
			user_id: value.user_id,
			private: value.private ? { user_id: value.private.user } : void 0,
			is_forced: value.forced,
			text: value.is_unsafe ? value.text : unescapeHtml(value.text)
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("restart"),
		user_id: number(),
		money: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "restart",
			user_id: value.user_id,
			restart_price: value.money
		};
	}))
];

//#endregion
//#region src/packet/events/pause.ts
var pause_exports = {};
__export(pause_exports, {
	valiSchemas: () => valiSchemas$8,
	valiV1Schemas: () => valiV1Schemas$8
});
const valiSchemas$8 = [object({
	id: string(),
	type: literal("pause.set")
}), object({
	id: string(),
	type: literal("pause.end")
})];
const valiV1Schemas$8 = [pipe(object({
	_id: optional(string()),
	type: literal("pauseActive")
}), transform((value) => {
	return {
		id: value._id,
		type: "pause.set"
	};
})), pipe(object({
	_id: optional(string()),
	type: literal("pauseRemoved")
}), transform((value) => {
	return {
		id: value._id,
		type: "pause.end"
	};
}))];

//#endregion
//#region src/packet/events/purchase.ts
var purchase_exports = {};
__export(purchase_exports, {
	enrichments: () => enrichments$7,
	valiSchemas: () => valiSchemas$7,
	valiV1Schemas: () => valiV1Schemas$7
});
const valiSchemas$7 = [
	object({
		id: string(),
		type: literal("purchase.offer"),
		user_id: number(),
		field_id: number()
	}),
	object({
		id: string(),
		type: literal("purchase"),
		user_id: number(),
		field_id: number(),
		price: number()
	}),
	object({
		id: string(),
		type: literal("purchase.reject"),
		user_id: number(),
		field_id: number()
	})
];
const enrichments$7 = { purchase(options) {
	const player = options.status.players.get(options.event.user_id);
	player.cash -= options.event.price;
	options.status.fields.set(options.event.field_id, {
		field_id: options.event.field_id,
		owner_user_id: options.event.user_id,
		level: 0
	});
} };
const valiV1Schemas$7 = [
	pipe(object({
		_id: optional(string()),
		type: literal("canBuy"),
		user_id: number(),
		field: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "purchase.offer",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("buy"),
		user_id: number(),
		field: number(),
		money: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "purchase",
			user_id: value.user_id,
			field_id: value.field,
			price: value.money
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("noBuy"),
		user_id: number(),
		field: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "purchase.reject",
			user_id: value.user_id,
			field_id: value.field
		};
	}))
];

//#endregion
//#region src/packet/events/rent.ts
var rent_exports = {};
__export(rent_exports, {
	enrichments: () => enrichments$6,
	valiSchemas: () => valiSchemas$6,
	valiV1Schemas: () => valiV1Schemas$6
});
const valiSchemas$6 = [
	object({
		id: string(),
		type: literal("rent.pay"),
		user_id: number(),
		field_id: number(),
		amount: number()
	}),
	object({
		id: string(),
		type: literal("rent.pay.complete"),
		user_id: number(),
		field_id: number(),
		amount: number()
	}),
	object({
		id: string(),
		type: literal("rent.pay.cancel"),
		user_id: number(),
		user_id_receiver: number()
	}),
	object({
		id: string(),
		type: literal("rent.zero"),
		user_id: number(),
		field_id: number()
	}),
	object({
		id: string(),
		type: literal("rent.zero.self"),
		user_id: number(),
		field_id: number()
	}),
	object({
		id: string(),
		type: literal("rent.zero.teammate"),
		user_id: number(),
		field_id: number()
	}),
	object({
		id: string(),
		type: literal("rent.zero.mortgaged"),
		user_id: number(),
		field_id: number()
	})
];
const enrichments$6 = { "rent.pay.complete"(options) {
	const { amount } = options.event;
	const player_payer = options.status.players.get(options.event.user_id);
	player_payer.cash -= amount;
	const user_id_receiver = options.status.fields.get(options.event.field_id).owner_user_id;
	const player_receiver = options.status.players.get(user_id_receiver);
	player_receiver.cash += amount;
} };
const valiV1Schemas$6 = [
	pipe(object({
		_id: optional(string()),
		type: literal("payRent"),
		user_id: number(),
		field: number(),
		money: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "rent.pay",
			user_id: value.user_id,
			field_id: value.field,
			amount: value.money
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("payRentSuccess"),
		user_id: number(),
		field: number(),
		money: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "rent.pay.complete",
			user_id: value.user_id,
			field_id: value.field,
			amount: value.money
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("payRentFail"),
		user_id: number(),
		to: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "rent.pay.cancel",
			user_id: value.user_id,
			user_id_receiver: value.to
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("payRentZero"),
		user_id: number(),
		field: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "rent.zero",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("payRentToSelf"),
		user_id: number(),
		field: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "rent.zero.self",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("payRentToTeammate"),
		user_id: number(),
		field: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "rent.zero.teammate",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("payRentCancelledMortgaged"),
		user_id: number(),
		field: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "rent.zero.mortgaged",
			user_id: value.user_id,
			field_id: value.field
		};
	}))
];

//#endregion
//#region src/packet/events/roll-dices.ts
var roll_dices_exports = {};
__export(roll_dices_exports, {
	enrichments: () => enrichments$5,
	valiSchemas: () => valiSchemas$5,
	valiV1Schemas: () => valiV1Schemas$5
});
const valiSchemas$5 = [
	object({
		id: string(),
		type: literal("roll-dices"),
		user_id: number(),
		dices: tuple([
			number(),
			optional(number()),
			optional(number())
		]),
		move_reversed: bit(false),
		double_spent: bit(false)
	}),
	object({
		id: string(),
		type: literal("roll-dices.jail.success"),
		user_id: number()
	}),
	object({
		id: string(),
		type: literal("roll-dices.jail.fail"),
		user_id: number()
	})
];
const enrichments$5 = {
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
	}
};
const valiV1Schemas$5 = [
	pipe(object({
		_id: optional(string()),
		type: literal("rollDices"),
		user_id: number(),
		dices: tuple([
			number(),
			optional(number()),
			optional(number())
		]),
		move_reverse: bit(false)
	}), transform((value) => {
		return {
			id: value._id,
			type: "roll-dices",
			user_id: value.user_id,
			dices: value.dices,
			move_reversed: value.move_reverse,
			double_spent: false
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("double_spended")
	}), transform((value) => {
		return {
			id: value._id,
			type: value.type
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("rollDicesForUnjailSuccess"),
		user_id: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "roll-dices.jail.success",
			user_id: value.user_id
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("rollDicesForUnjailFail"),
		user_id: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "roll-dices.jail.fail",
			user_id: value.user_id
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
		if (typeof dices[1] === "number") {
			if (dices[1] <= 4) distance += dices[1];
			else if (dices[1] === 6) return 0;
		}
	} else distance += dices[1];
	return distance;
}

//#endregion
//#region src/packet/events/start.ts
var start_exports = {};
__export(start_exports, {
	enrichments: () => enrichments$4,
	valiSchemas: () => valiSchemas$4,
	valiV1Schemas: () => valiV1Schemas$4
});
const valiSchemas$4 = [object({
	id: string(),
	type: literal("start.income"),
	user_id: number()
}), object({
	id: string(),
	type: literal("start.bonus"),
	user_id: number()
})];
const enrichments$4 = {
	"start.income"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.cash += options.setup.config.mechanics.start.income_amount;
	},
	"start.bonus"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.cash += options.setup.config.mechanics.start.bonus_amount;
	}
};
const valiV1Schemas$4 = [pipe(object({
	_id: optional(string()),
	type: literal("startBypass"),
	user_id: number()
}), transform((value) => {
	return {
		id: value._id,
		type: "start.income",
		user_id: value.user_id
	};
})), pipe(object({
	_id: optional(string()),
	type: literal("start_bonus"),
	user_id: number()
}), transform((value) => {
	return {
		id: value._id,
		type: "start.bonus",
		user_id: value.user_id
	};
}))];

//#endregion
//#region src/packet/events/tournament.ts
var tournament_exports = {};
__export(tournament_exports, {
	enrichments: () => enrichments$3,
	valiSchemas: () => valiSchemas$3,
	valiV1Schemas: () => valiV1Schemas$3
});
const valiSchemas$3 = [object({
	id: string(),
	type: literal("tournament.drop"),
	user_ids: array(number())
})];
const enrichments$3 = {};
const valiV1Schemas$3 = [pipe(object({
	_id: optional(string()),
	type: literal("tournament_drop"),
	user_id: number()
}), transform((value) => {
	return {
		id: value._id,
		type: "tournament.drop",
		user_ids: [value.user_id]
	};
})), pipe(object({
	_id: optional(string()),
	type: literal("tournament_drop_multi"),
	user_ids: array(number())
}), transform((value) => {
	return {
		id: value._id,
		type: "tournament.drop",
		user_ids: value.user_ids
	};
}))];

//#endregion
//#region src/packet/events/triple.ts
var triple_exports = {};
__export(triple_exports, {
	enrichments: () => enrichments$2,
	valiSchemas: () => valiSchemas$2,
	valiV1Schemas: () => valiV1Schemas$2
});
const valiSchemas$2 = [object({
	id: string(),
	type: literal("triple"),
	user_id: number()
}), object({
	id: string(),
	type: literal("triple.move"),
	user_id: number(),
	field_id: number(),
	move_reversed: bit(false)
})];
const enrichments$2 = { "triple.move"(options) {
	const player = options.status.players.get(options.event.user_id);
	player.position = options.event.field_id;
} };
const valiV1Schemas$2 = [pipe(object({
	_id: optional(string()),
	type: literal("chooseFieldToMove"),
	user_id: number()
}), transform((value) => {
	return {
		id: value._id,
		type: "triple",
		user_id: value.user_id
	};
})), pipe(object({
	_id: optional(string()),
	type: literal("fieldToMoveChoosed"),
	user_id: number(),
	field_id: number(),
	move_reverse: bit(false)
}), transform((value) => {
	return {
		id: value._id,
		type: "triple.move",
		user_id: value.user_id,
		field_id: value.field_id,
		move_reversed: value.move_reverse
	};
}))];

//#endregion
//#region src/packet/events/wormhole.ts
var wormhole_exports = {};
__export(wormhole_exports, {
	enrichments: () => enrichments$1,
	valiSchemas: () => valiSchemas$1,
	valiV1Schemas: () => valiV1Schemas$1
});
const valiSchemas$1 = [
	object({
		id: string(),
		type: literal("wormhole"),
		user_id: number()
	}),
	object({
		id: string(),
		type: literal("wormhole.open"),
		user_id: number(),
		exits_count: number()
	}),
	object({
		id: string(),
		type: literal("wormhole.reject"),
		user_id: number()
	}),
	object({
		id: string(),
		type: literal("wormhole.move"),
		user_id: number(),
		field_id: number(),
		move_reversed: bit(false)
	})
];
const enrichments$1 = {
	"wormhole.open"(options) {
		const mechanics_wormhole = options.setup.config.mechanics.wormhole;
		const player = options.status.players.get(options.event.user_id);
		player.cash -= Math.max(0, options.event.exits_count - mechanics_wormhole.exits_free_count) * mechanics_wormhole.exits_extra_price;
	},
	"wormhole.move"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.position = options.event.field_id;
	}
};
const valiV1Schemas$1 = [
	pipe(object({
		_id: optional(string()),
		type: literal("wormhole"),
		user_id: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "wormhole",
			user_id: value.user_id
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("wormhole_opened"),
		user_id: number(),
		destinations_count: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "wormhole.open",
			user_id: value.user_id,
			exits_count: value.destinations_count
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("wormhole_declined"),
		user_id: number()
	}), transform((value) => {
		return {
			id: value._id,
			type: "wormhole.reject",
			user_id: value.user_id
		};
	})),
	pipe(object({
		_id: optional(string()),
		type: literal("wormhole_used"),
		user_id: number(),
		field_id: number(),
		move_reverse: bit(false)
	}), transform((value) => {
		return {
			id: value._id,
			type: "wormhole.move",
			user_id: value.user_id,
			field_id: value.field_id,
			move_reversed: value.move_reverse
		};
	}))
];

//#endregion
//#region src/packet/events.all.ts
const event_libs = [
	auction_exports,
	bank_exports,
	bus_exports,
	contract_exports,
	jackpot_exports,
	jail_exports,
	level_exports,
	loan_exports,
	m1_exports,
	mortgage_exports,
	pause_exports,
	purchase_exports,
	rent_exports,
	roll_dices_exports,
	start_exports,
	tournament_exports,
	triple_exports,
	wormhole_exports,
	other_exports
];
const valiSchemas = (() => {
	const result = [];
	for (const event_lib of event_libs) result.push(...event_lib.valiSchemas);
	return result;
})();
const valiV1Schemas = (() => {
	const result = [];
	for (const event_lib of event_libs) result.push(...event_lib.valiV1Schemas);
	return result;
})();
const enrichments = (() => {
	let result = {};
	for (const event_lib of event_libs) if ("enrichments" in event_lib) result = {
		...result,
		...event_lib.enrichments
	};
	return result;
})();
/**
* Type guard for events that have enrichments.
* @param event -
* @returns -
*/
function hasEnrichment(event) {
	return event.type in enrichments;
}
/**
* Returns event enrichment.
* @param event Event to get enrichment for.
* @returns -
*/
function getEntrichment(event) {
	return enrichments[event.type];
}

//#endregion
//#region src/utils/guards.ts
const valiRecordParser = safeParser(record(string(), unknown()));
/**
* Checks if value is an object.
* @param value -
* @returns -
*/
function isRecord(value) {
	return Array.isArray(value) === false && valiRecordParser(value).success;
}

//#endregion
//#region src/packet/events.ts
const valiM1DemoRawPacketEventsSchema = array(union([...valiSchemas, pipe(object({
	id: string(),
	type: string()
}), transform(({ type,...value_rest }) => {
	return {
		type: "_unknown",
		type_received: type,
		...value_rest
	};
}))]));
const valiM1DemoRawPacketV1EventElementSchema = union([...valiV1Schemas, pipe(object({
	_id: optional(string()),
	type: string()
}), transform(({ _id, type,...value_rest }) => {
	return {
		id: _id,
		type: "_unknown",
		type_received: type,
		...value_rest
	};
}))]);
const valiM1DemoRawPacketV1EventsSchema = pipe(union([array(valiM1DemoRawPacketV1EventElementSchema), record(string(), valiM1DemoRawPacketV1EventElementSchema)]), transform((value) => {
	if (isRecord(value)) return Object.entries(value).map(([_id, event]) => {
		return {
			_id,
			...event
		};
	});
	return value;
}), transform((value) => {
	const events_new = [];
	for (const { id,...event_rest } of value) {
		if (typeof id !== "string") throw new TypeError("Validation error: field \"id\" is required");
		if (event_rest.type === "double_spended") {
			const event_new_last = [...events_new].at(-1);
			if (event_new_last && event_new_last.type === "roll-dices") event_new_last.double_spent = true;
			continue;
		}
		if (event_rest.type === "contract_details") continue;
		events_new.push({
			id,
			...event_rest
		});
	}
	return events_new;
}));

//#endregion
//#region src/packet/setup/player.ts
const valiM1DemoPacketSetupPlayerSchema = pipe(object({
	user_id: number(),
	is_vip: bit(false),
	is_loan_available: bit(false),
	equipment: object({ cards: pipe(array(object({
		field_id: number(),
		item_proto_id: number(),
		item_id: optional(number()),
		rent_multiplier: number()
	})), transform((value) => new Map(value.map((card) => [card.field_id, card])))) })
}), transform((value) => {
	return {
		...value,
		index: -1
	};
}));

//#endregion
//#region src/packet/setup.ts
const valiM1DemoPacketSetupSchema = object({
	config: valiM1DemoPacketSetupConfigSchema,
	flags: object({
		game_mode: number(),
		game_submode: number(),
		game_2x2: bit(false)
	}),
	players: pipe(array(valiM1DemoPacketSetupPlayerSchema), transform((value) => {
		const value_map = new Map();
		for (const [index, player] of value.entries()) {
			player.index = index;
			value_map.set(player.user_id, player);
		}
		return value_map;
	}))
});

//#endregion
//#region src/packet/time.ts
const valiM1DemoPacketTimeSchema = pipe(object({
	ts_start: number(),
	ts_now: number(),
	inactive: number(),
	ts_inactive: optional(number())
}), transform((value) => {
	return {
		...value,
		delta: Date.now() - value.ts_now
	};
}));
const valiM1DemoPacketV1TimeSchema = union([
	object({ time: valiM1DemoPacketTimeSchema }),
	pipe(object({ status: optional(object({ time: valiM1DemoPacketTimeSchema })) }), transform((value) => {
		if (!value.status) {
			console.error("There is no time in the packet.", value);
			throw new Error("There is no time in the packet.");
		}
		return { time: value.status.time };
	})),
	pipe(object({
		current_time: number(),
		game_started: optional(number()),
		ts_start: optional(number()),
		status: optional(object({ pause_data: optional(object({
			total_time: number(),
			is_active: boolean(),
			pause_started_at: optional(number())
		})) }))
	}), transform((value) => {
		const ts_now = value.current_time * 1e3;
		const ts_start = value.ts_start ?? value.game_started;
		if (!ts_start) throw new Error("No timestamp of the start of the game found in packet.");
		const packet_time = {
			ts_start: ts_start * 1e3,
			ts_now,
			inactive: 0,
			delta: Date.now() - ts_now
		};
		if (value.status) {
			const { pause_data } = value.status;
			if (pause_data) {
				packet_time.inactive = pause_data.total_time * 1e3;
				if (pause_data.is_active && typeof pause_data.pause_started_at === "number") packet_time.ts_inactive = pause_data.pause_started_at * 1e3;
			}
		}
		return { time: packet_time };
	}))
]);

//#endregion
//#region src/packet.ts
const valiM1DemoRawPacketSchema = object({
	setup: optional(valiM1DemoPacketSetupSchema),
	events: valiM1DemoRawPacketEventsSchema,
	status: optional(valiM1DemoPacketStatusSchema),
	time: valiM1DemoPacketTimeSchema
});
const valiM1DemoRawPacketV1Schema = intersect([valiM1DemoPacketV1TimeSchema, pipe(object({
	config: optional(valiM1DemoPacketV1ConfigSchema),
	flags: optional(object({
		game_mode: number(),
		game_submode: number(),
		game_2x2: bit(false)
	})),
	events: valiM1DemoRawPacketV1EventsSchema,
	status: optional(valiM1DemoPacketV1StatusSchema)
}), transform((value) => {
	const { config, flags, status,...value_rest } = value;
	let status_new;
	if (status) {
		const { players,...status_rest } = status;
		status_new = {
			players: new Map(players.map((player) => [player.user_id, {
				user_id: player.user_id,
				...player._status
			}])),
			...status_rest
		};
	}
	let setup;
	if (config) {
		if (!status) throw new Error("Validation error: field \"status\" is required if \"config\" is present");
		if (!flags) throw new Error("Validation error: field \"flags\" is required if \"config\" is present");
		setup = {
			config,
			flags,
			players: new Map(status.players.map((player) => [player.user_id, {
				user_id: player.user_id,
				...player._setup
			}]))
		};
	}
	return {
		setup,
		status: status_new,
		...value_rest
	};
}))]);

//#endregion
//#region src/main.ts
var M1LiveDemo = class {
	/** Packet versions in this game. Value `null` is a placeholder until first packet arrives. */
	packet_version = null;
	setup = null;
	field_id_jail = null;
	status_before = null;
	process(value) {
		if (isRecord(value) !== true) throw new TypeError("Packet is not an object.");
		this.packet_version ??= typeof value.v === "number" ? value.v : 1;
		let packet_raw;
		switch (this.packet_version) {
			case 2:
				packet_raw = parse(valiM1DemoRawPacketSchema, value);
				break;
			case 1:
				packet_raw = parse(valiM1DemoRawPacketV1Schema, value);
				break;
			default: throw new Error(`Unsupported packet version ${this.packet_version}.`);
		}
		if (packet_raw.setup) {
			this.setup = packet_raw.setup;
			this.field_id_jail = this.setup.config.fields.findIndex((field) => field.type === "jail");
		}
		if (packet_raw.status) {
			if (packet_raw.status.turn.field_ids_move) {
				const pairs = [...packet_raw.status.turn.field_ids_move];
				packet_raw.status.turn.field_ids_move = new Map(pairs.map(([field_id, move_value]) => [normalizeFieldId(this.setup, field_id), move_value]));
			}
			if (packet_raw.status.turn.action.list.has("triple.move")) {
				packet_raw.status.turn.field_ids_move = new Map(Array.from({ length: this.setup.config.fields.length }, (_, index) => [index, { field_id: index }]));
				const position = packet_raw.status.players.get(packet_raw.status.turn.action.user_id ?? 0)?.position;
				if (typeof position === "number") packet_raw.status.turn.field_ids_move.delete(position);
			}
		}
		const { events,...rest_packet_raw } = packet_raw;
		const events_new = [];
		if (events.length > 0) {
			if (this.setup === null) throw new Error("Invalid state: received events before setup.");
			if (this.status_before === null) throw new Error("Invalid state: received events before status.");
			for (const [index, event] of packet_raw.events.entries()) {
				if (event.type === "message") {
					events_new.push(event);
					continue;
				}
				const status_after = structuredClone(this.status_before);
				if (hasEnrichment(event)) getEntrichment(event)({
					event,
					events_before: packet_raw.events.slice(0, index).reverse(),
					events_after: packet_raw.events.slice(index),
					setup: this.setup,
					field_id_jail: this.field_id_jail,
					status: status_after
				});
				events_new.push({
					status: {
						before: structuredClone(this.status_before),
						after: structuredClone(status_after)
					},
					...event
				});
				this.status_before = status_after;
			}
		}
		if (rest_packet_raw.status) this.status_before = rest_packet_raw.status;
		return {
			events: events_new,
			...rest_packet_raw
		};
	}
};

//#endregion
export { M1LiveDemo, packetv1_action_mapping };