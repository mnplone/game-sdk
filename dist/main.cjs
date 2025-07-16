"use strict";
//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
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
const valibot = __toESM(require("valibot"));

//#region src/packet/events/auction.ts
var auction_exports = {};
__export(auction_exports, {
	enrichments: () => enrichments$18,
	valiSchemas: () => valiSchemas$19,
	valiV1Schemas: () => valiV1Schemas$19
});
const valiSchemas$19 = [
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("auction.put"),
		user_id: valibot.number(),
		field_id: valibot.number(),
		bid: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("auction.bid"),
		user_id: valibot.number(),
		bid: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("auction.reject"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("auction.win"),
		user_id: valibot.number(),
		field_id: valibot.number(),
		user_id_seller: valibot.optional(valibot.number()),
		price: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("auction.cancel"),
		field_id: valibot.number(),
		user_id_seller: valibot.optional(valibot.number()),
		price: valibot.optional(valibot.number())
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
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("toAuction"),
		user_id: valibot.number(),
		field: valibot.number(),
		bet: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "auction.put",
			user_id: value.user_id,
			field_id: value.field,
			bid: value.bet
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("auctionAccept"),
		user_id: valibot.number(),
		bet: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "auction.bid",
			user_id: value.user_id,
			bid: value.bet
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("auctionDecline"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "auction.reject",
			user_id: value.user_id
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("auctionWinner"),
		user_id: valibot.number(),
		user_id_seller: valibot.optional(valibot.number()),
		field: valibot.number(),
		money: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "auction.win",
			user_id: value.user_id,
			field_id: value.field,
			user_id_seller: value.user_id_seller,
			price: value.money
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("auctionFail"),
		field: valibot.number(),
		user_id_seller: valibot.optional(valibot.number()),
		money: valibot.optional(valibot.number())
	}), valibot.transform((value) => {
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
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("bank.income"),
		user_id: valibot.number(),
		amount: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("bank.fee"),
		user_id: valibot.number(),
		amount: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("bank.fee.pay"),
		user_id: valibot.number(),
		amount: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("bank.return"),
		user_id: valibot.number(),
		amount: valibot.number()
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
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("cash_plus"),
		user_id: valibot.number(),
		money: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "bank.income",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.picklist([
			"cash_minus",
			"tax_income",
			"tax_luxury"
		]),
		user_id: valibot.number(),
		money: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "bank.fee",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("feePaid"),
		user_id: valibot.number(),
		money: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "bank.fee.pay",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("insuranceReturn"),
		user_id: valibot.number(),
		money: valibot.number()
	}), valibot.transform((value) => {
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
//#region src/packet/events/bus.ts
var bus_exports = {};
__export(bus_exports, {
	enrichments: () => enrichments$16,
	valiSchemas: () => valiSchemas$17,
	valiV1Schemas: () => valiV1Schemas$17
});
const valiSchemas$17 = [valibot.object({
	id: valibot.string(),
	type: valibot.literal("bus.select"),
	user_id: valibot.number(),
	move_distances: valibot.pipe(valibot.array(valibot.number()), valibot.transform((value) => new Set(value))),
	field_ids_move: valibot.pipe(valibot.undefined(), valibot.transform(() => new Set()))
}), valibot.object({
	id: valibot.string(),
	type: valibot.literal("bus.move"),
	user_id: valibot.number(),
	selection: valibot.object({
		stop_id: valibot.picklist([
			0,
			1,
			-1
		]),
		field_id: valibot.number(),
		auto: bit(false)
	}),
	move_reversed: bit(false)
})];
const enrichments$16 = {
	"bus.select"(options) {
		if (options.event.move_distances.size === 0) {
			const event_roll_dices = options.events_before.find((event) => event.type === "roll-dices");
			if (!event_roll_dices) throw new Error("No \"roll-dices\" event found before \"bus.select\".");
			options.event.move_distances = new Set([
				event_roll_dices.dices[0],
				event_roll_dices.dices[1],
				event_roll_dices.dices[0] + event_roll_dices.dices[1]
			]);
		}
		const player = options.status.players.get(options.event.user_id);
		const direction = options.status.turn.move_reversed ? -1 : 1;
		options.event.field_ids_move = new Set([...options.event.move_distances].map((value) => normalizeFieldId(options.setup, player.position + direction * value)));
	},
	"bus.move"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.position = options.event.selection.field_id;
	}
};
const valiV1Schemas$17 = [valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.literal("chooseBusStop"),
	user_id: valibot.number()
}), valibot.transform((value) => {
	return {
		id: value._id,
		type: "bus.select",
		user_id: value.user_id,
		move_distances: new Set(),
		field_ids_move: new Set()
	};
})), valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.literal("busStopChoosed"),
	user_id: valibot.number(),
	stop: valibot.picklist([
		0,
		1,
		-1
	]),
	mean_position: valibot.number(),
	move_reverse: bit(false),
	auto_selected: bit(false)
}), valibot.transform((value) => {
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
const valiM1DemoContractSchema = valibot.pipe(valibot.tuple([valibot.object({
	user_id: valibot.number(),
	field_ids: valibot.array(valibot.number()),
	cash: valibot.number()
}), valibot.object({
	user_id: valibot.number(),
	field_ids: valibot.array(valibot.number()),
	cash: valibot.number()
})]), valibot.transform(([initiator, responder]) => {
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
const valiM1DemoPacketStatusTurnSchema = valibot.object({
	user_id: valibot.nullable(valibot.number()),
	action: valibot.object({
		user_id: valibot.nullable(valibot.number()),
		list: valibot.pipe(valibot.array(valibot.picklist([
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
		])), valibot.transform((value) => new Set(value)))
	}),
	move_reversed: bit(false),
	auction: valibot.optional(valibot.object({
		field_id: valibot.number(),
		bid: valibot.number(),
		user_ids_rejected: valibot.pipe(valibot.array(valibot.number()), valibot.transform((value) => new Set(value)))
	})),
	contract: valibot.optional(valiM1DemoContractSchema),
	contracts_sent: valibot.optional(valibot.number()),
	jackpot: valibot.optional(valibot.object({ superprize: valibot.number() })),
	payment: valibot.optional(valibot.object({
		to_user_id: valibot.optional(valibot.number()),
		amount: valibot.number()
	})),
	field_ids_move: valibot.optional(valibot.pipe(valibot.array(valibot.object({
		field_id: valibot.number(),
		data: valibot.union([valibot.object({ stop: valibot.number() }), valibot.object({ field_id: valibot.number() })])
	})), valibot.transform((value) => new Map(value.map((item) => [item.field_id, item.data]))))),
	field_ids_level_built: valibot.optional(valibot.pipe(valibot.array(valibot.number()), valibot.transform((value) => new Set(value)))),
	field_ids_mortgaged: valibot.optional(valibot.pipe(valibot.array(valibot.number()), valibot.transform((value) => new Set(value))))
});

//#endregion
//#region src/packet/status/fields.ts
const valiM1DemoPacketStatusFieldsSchema = valibot.pipe(valibot.array(valibot.pipe(valibot.object({
	field_id: valibot.number(),
	owner_user_id: valibot.number(),
	level: valibot.number(),
	mortgage: valibot.optional(valibot.object({ round_until: valibot.optional(valibot.number()) }))
}), valibot.transform((value) => value))), valibot.transform((value) => new Map(value.map((field) => [field.field_id, field]))));
const valiM1DemoPacketV1StatusFieldsSchema = valibot.pipe(valibot.record(valibot.string(), valibot.object({
	owner: valibot.number(),
	level: valibot.number(),
	mortgaged: valibot.boolean(),
	mortgage_lose_round: valibot.optional(valibot.number())
})), valibot.transform((value) => new Map(Object.entries(value).map(([field_id_string, field]) => {
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
		type: valibot.literal("go-to-jail"),
		text_id: valibot.number()
	}),
	valibot.strictObject({
		type: valibot.literal("teleport"),
		text_id: valibot.number()
	}),
	valibot.strictObject({
		type: valibot.literal("skip-move"),
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
		type: valibot.literal("teleport"),
		text: valibot.string()
	}),
	valibot.strictObject({
		type: valibot.literal("move_skip"),
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
const valiM1DemoPacketSetupConfigFieldsSchema = valibot.pipe(valibot.array(valibot.union([
	valibot.object({
		is_corner: valibot.pipe(valibot.literal(1), valibot.transform(() => true)),
		type: valibot.picklist(["start", "jail"])
	}),
	valibot.object({
		is_corner: bit(false),
		type: valibot.picklist([
			"chance",
			"jackpot",
			"jail.goto",
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
const valiM1DemoPacketV1ConfigFieldsSchema = valibot.pipe(valibot.array(
	valibot.variant("type", [
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
				"chance",
				"goToJail",
				"jackpot",
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
), valibot.transform((value) => {
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
	})
])), valibot.transform((value) => new Map(Object.entries(value).map(([monopoly_id_string, group]) => {
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
const valiM1DemoPacketSetipConfigRestartVariantSchema = valibot.object({
	round_from: valibot.number(),
	round_to: valibot.number(),
	count: valibot.number(),
	price: valibot.number()
});
const valiM1DemoPacketSetupConfigSchema = valibot.object({
	version: valibot.number(),
	board_size: valibot.tuple([valibot.number(), valibot.number()]),
	timers: valibot.object({ roll_dices: valibot.number() }),
	fields: valiM1DemoPacketSetupConfigFieldsSchema,
	monopolies: valiM1DemoPacketSetupConfigMonopoliesSchema,
	mechanics: valibot.object({
		auction: valibot.optional(valibot.object({ bid_increment: valibot.number() })),
		chance: valibot.optional(valiM1DemoPacketSetupConfigMechanicsChanceSchema),
		field_level: valibot.optional(valibot.object({
			sell_multiplier: valibot.optional(valibot.number(), 1),
			build_uneven: bit(false),
			build_without_monopoly: bit(false)
		})),
		jackpot: valibot.optional(valibot.object({
			bet: valibot.number(),
			multipliers: valibot.array(valibot.number()),
			superprize: valibot.object({ chance: valibot.number() })
		})),
		jail: valibot.object({
			release_fee: valibot.number(),
			double_roll_attempt_limit: valibot.optional(valibot.number(), 3)
		}),
		loan: valibot.optional(valibot.object({
			amount: valibot.number(),
			repay_multiplier: valibot.number(),
			duration: valibot.number(),
			cooldown: valibot.object({
				match_start: valibot.number(),
				repay: valibot.number()
			})
		})),
		mortgage: valibot.optional(valibot.object({
			duration: valibot.optional(valibot.number()),
			multiplier: valibot.number(),
			buyback_multiplier: valibot.number(),
			auction_multiplier: valibot.optional(valibot.number())
		})),
		restart: valibot.optional(valibot.object({ variants: valibot.array(valiM1DemoPacketSetipConfigRestartVariantSchema) })),
		start: valibot.object({
			income_amount: valibot.number(),
			bonus_amount: valibot.optional(valibot.number(), 0)
		}),
		time_rules: valibot.array(valibot.union([
			valibot.object({
				type: valibot.literal("start.none"),
				time: valibot.number()
			}),
			valibot.object({
				type: valibot.literal("start.tax"),
				time: valibot.number(),
				sum: valibot.number()
			}),
			valibot.object({
				type: valibot.literal("rent.tax"),
				time: valibot.number(),
				rate: valibot.number()
			})
		])),
		wormhole: valibot.optional(valibot.object({
			exits_free_count: valibot.optional(valibot.number(), 3),
			exits_extra_price: valibot.number(),
			move_direct: bit(false)
		}))
	})
});
const valiM1DemoPacketV1ConfigSchema = valibot.pipe(
	valibot.object({
		version: valibot.number(),
		size: valibot.tuple([valibot.number(), valibot.number()]),
		fields: valiM1DemoPacketV1ConfigFieldsSchema,
		groups: valiM1DemoPacketV1ConfigGroupsSchema,
		TIME_FOR_ROLL_DICES: valibot.number(),
		AUCTION_BET_STEP: valibot.optional(valibot.number()),
		chance_cards: valibot.optional(valiM1DemoPacketV1ConfigChanceCardsSchema),
		coeff_level_down: valibot.optional(valibot.number(), 1),
		UNEVEN_LEVEL_CHANGE: bit(false),
		LEVEL_CHANGE_NO_MNPL: bit(false),
		JACKPOT_BET: valibot.optional(valibot.number()),
		JACKPOT_COEFFS: valibot.optional(valibot.array(valibot.number())),
		JACKPOT_SUPERPRIZE_CHANCE: valibot.optional(valibot.number()),
		jailFee: valibot.number(),
		UNJAIL_TRIES_LIMIT: valibot.optional(valibot.number(), 3),
		CREDIT_SUM: valibot.optional(valibot.number()),
		CREDIT_INTEREST: valibot.optional(valibot.number()),
		CREDIT_PERCENT: valibot.optional(valibot.number()),
		CREDIT_ROUNDS: valibot.optional(valibot.number()),
		CREDIT_COOLDOWN_ROUNDS: valibot.optional(valibot.number()),
		START_CREDIT_COOLDOWN_ROUNDS: valibot.optional(valibot.number()),
		MORTGAGE_ROUND_LIMIT: valibot.optional(valibot.number()),
		coeff_mortgage: valibot.number(),
		coeff_unmortgage: valibot.number(),
		auction_mortgaged: valibot.optional(valibot.number()),
		restart_variants: valibot.optional(valibot.array(valiM1DemoPacketSetipConfigRestartVariantSchema)),
		roundCash: valibot.number(),
		START_BONUS_SUM: valibot.optional(valibot.number(), 0),
		roundTaxes: valibot.array(valibot.object({
			game_time: valibot.number(),
			tax: valibot.number()
		})),
		incomeTaxes: valibot.array(valibot.object({
			game_time: valibot.number(),
			tax_rate: valibot.number()
		})),
		WORMHOLE_DIRECTLY: valibot.optional(bit(false)),
		WORMHOLE_EXTRA_DESTINATION_COST: valibot.optional(valibot.number())
	}),
	// transforming config in-place because it is a whole product
	// eslint-disable-next-line max-lines-per-function
	valibot.transform((value) => {
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
const valiM1DemoPacketStatusPlayersSchema = valibot.pipe(valibot.array(valibot.pipe(valibot.object({
	user_id: valibot.number(),
	status: valibot.number(),
	position: valibot.number(),
	cash: valibot.number(),
	score: valibot.number(),
	jail: valibot.optional(valibot.object({ roll_double_attempts: valibot.number() })),
	loan: valibot.union([valibot.strictObject({
		taken: valibot.pipe(valibot.literal(0), valibot.transform(() => false)),
		unlock_round: valibot.number()
	}), valibot.strictObject({
		taken: valibot.pipe(valibot.literal(1), valibot.transform(() => true)),
		debt: valibot.number(),
		return_round: valibot.number()
	})]),
	restart: valibot.optional(valibot.object({ variant: valibot.nullable(valiM1DemoPacketSetipConfigRestartVariantSchema) }))
}), valibot.transform((value) => value))), valibot.transform((value) => new Map(value.map((player) => [player.user_id, player]))));
const valiM1DemoPacketV1StatusPlayersSchema = valibot.array(valibot.pipe(valibot.object({
	user_id: valibot.number(),
	vip: valibot.optional(valibot.boolean(), false),
	cards_equipped: valibot.optional(valibot.record(valibot.string(), valibot.object({
		thing_id: valibot.number(),
		coeff_rent: valibot.number()
	}))),
	generator: valibot.optional(valibot.pipe(valibot.object({
		generator_id: valibot.number(),
		variant_id: valibot.optional(valibot.number()),
		seed: valibot.optional(valibot.string())
	}), valibot.transform((value) => {
		if (value.generator_id === -100) return void 0;
		return {
			item_proto_id: value.generator_id,
			variant_id: value.variant_id,
			seed: value.seed
		};
	}))),
	joke: valibot.optional(valibot.pipe(valibot.union([
		valibot.literal(false),
		valibot.number(),
		valibot.object({ proto_id: valibot.number() })
	]), valibot.transform((value) => {
		if (value === false) return void 0;
		if (typeof value === "number") return { item_proto_id: value };
		return { item_proto_id: value.proto_id };
	}))),
	can_use_credit: valibot.optional(valibot.boolean(), false),
	status: valibot.number(),
	position: valibot.number(),
	money: valibot.number(),
	score: valibot.number(),
	jailed: valibot.boolean(),
	unjailAttempts: valibot.number(),
	credit_nextTakeRound: valibot.number(),
	credit_payRound: valibot.union([valibot.literal(false), valibot.number()]),
	credit_toPay: valibot.number(),
	restart: valibot.optional(valibot.union([valibot.pipe(valibot.literal(0), valibot.transform(() => null)), valiM1DemoPacketSetipConfigRestartVariantSchema]))
}), valibot.transform((value) => {
	return {
		user_id: value.user_id,
		_setup: value.cards_equipped ? {
			index: -1,
			is_vip: value.vip,
			is_loan_available: value.can_use_credit,
			equipment: {
				cards: new Map(Object.entries(value.cards_equipped).map(([field_id_string, card_equipped]) => {
					const field_id = Number.parseInt(field_id_string);
					return [field_id, {
						field_id,
						item_proto_id: 0,
						item_id: card_equipped.thing_id,
						rent_multiplier: card_equipped.coeff_rent
					}];
				})),
				generator: value.generator,
				joke: value.joke
			}
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
const valiM1DemoPacketStatusSchema = valibot.object({
	round: valibot.number(),
	players: valiM1DemoPacketStatusPlayersSchema,
	fields: valiM1DemoPacketStatusFieldsSchema,
	turn: valiM1DemoPacketStatusTurnSchema,
	timer: valibot.optional(valibot.union([valibot.object({
		ts_expires: valibot.number(),
		is_extra: valibot.boolean()
	}), valibot.object({
		expires_in: valibot.number(),
		is_extra: valibot.boolean()
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
const valiM1DemoPacketV1StatusActiontypeSchema = valibot.array(valibot.picklist(Object.keys(action_list_mapping)));
const valiM1DemoPacketV1ContractSchema = valibot.pipe(valibot.object({
	from: valibot.number(),
	to: valibot.number(),
	out_fields: valibot.array(valibot.number()),
	out_money: valibot.number(),
	in_fields: valibot.array(valibot.number()),
	in_money: valibot.number()
}), valibot.transform((value) => ({
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
const valiM1DemoPacketV1StatusSchema = valibot.pipe(
	valibot.object({
		round: valibot.number(),
		players: valiM1DemoPacketV1StatusPlayersSchema,
		fields: valiM1DemoPacketV1StatusFieldsSchema,
		player_ownerOfMove: valibot.nullable(valibot.number()),
		action_player: valibot.nullable(valibot.number()),
		action_type: valiM1DemoPacketV1StatusActiontypeSchema,
		current_move: valibot.optional(valibot.object({
			dices: valibot.optional(valibot.tuple([
				valibot.number(),
				valibot.optional(valibot.number()),
				valibot.optional(valibot.number())
			])),
			move_reverse: valibot.optional(valibot.boolean(), false),
			pay: valibot.optional(valibot.number()),
			moneyToPay: valibot.optional(valibot.number()),
			payTo: valibot.optional(valibot.number()),
			players_auctionStatus: valibot.optional(valibot.pipe(valibot.record(valibot.string(), valibot.number()), valibot.transform((value) => new Set(Object.entries(value).filter(([_, status]) => status === 0).map(([user_id_string]) => Number.parseInt(user_id_string)))))),
			field: valibot.optional(valibot.number()),
			bet: valibot.optional(valibot.number()),
			contract: valibot.optional(valiM1DemoPacketV1ContractSchema),
			contracts: valibot.optional(valibot.number()),
			jackpot_superprize_money: valibot.optional(valibot.number()),
			wormhole_destinations: valibot.optional(valibot.array(valibot.number())),
			levelUpped: valibot.optional(valibot.array(valibot.number())),
			mortgaged: valibot.optional(valibot.array(valibot.number()))
		})),
		timeout_ts: valibot.number(),
		timeout_is_additional: valibot.boolean()
	}),
	valibot.transform((value) => {
		for (const [index, player] of value.players.entries()) if (player._setup) player._setup.index = index;
		return value;
	}),
	// eslint-disable-next-line complexity, max-lines-per-function
	valibot.transform((value) => {
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
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("contract.send"),
		user_id: valibot.number(),
		user_id_to: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("contract.accept"),
		user_id: valibot.number(),
		contract: valiM1DemoContractSchema
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("contract.reject"),
		user_id: valibot.number(),
		timeout: bit(false)
	})
];
const enrichments$15 = {};
const valiV1Schemas$16 = [
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("contract"),
		user_id: valibot.number(),
		to: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "contract.send",
			user_id: value.user_id,
			user_id_to: value.to
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("contract_details")
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: value.type
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("contract_accepted"),
		user_id: valibot.number(),
		contract: valiM1DemoPacketV1ContractSchema
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "contract.accept",
			user_id: value.user_id,
			contract: value.contract
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("contract_declined"),
		user_id: valibot.number(),
		by_timeout: bit(false)
	}), valibot.transform((value) => {
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
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jackpot"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jackpot.pay"),
		user_id: valibot.number(),
		amount: valibot.number(),
		jackpot_size: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jackpot.play"),
		user_id: valibot.number(),
		dice_bet: valibot.array(valibot.number()),
		dice_rolled: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jackpot.win"),
		user_id: valibot.number(),
		amount: valibot.number(),
		dice_rolled: valibot.optional(valibot.number())
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jackpot.lose"),
		user_id: valibot.number(),
		amount: valibot.optional(valibot.number()),
		dice_rolled: valibot.optional(valibot.number())
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jackpot.superprize.win"),
		user_id: valibot.number(),
		amount: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jackpot.superprize.increase"),
		user_id: valibot.number(),
		superprize: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jackpot.reject"),
		user_id: valibot.number()
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
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("jackpot"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "jackpot",
			user_id: value.user_id
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("jackpot_paid"),
		user_id: valibot.number(),
		money: valibot.number(),
		jackpot_money: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "jackpot.pay",
			user_id: value.user_id,
			amount: value.money,
			jackpot_size: value.jackpot_money
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("jackpot_play"),
		user_id: valibot.number(),
		dices_betted: valibot.array(valibot.number()),
		dice_rolled: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "jackpot.play",
			user_id: value.user_id,
			dice_bet: value.dices_betted,
			dice_rolled: value.dice_rolled
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("jackpot_win"),
		user_id: valibot.number(),
		money: valibot.number(),
		dice_rolled: valibot.optional(valibot.number())
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "jackpot.win",
			user_id: value.user_id,
			amount: value.money,
			dice_rolled: value.dice_rolled
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("jackpot_lose"),
		user_id: valibot.number(),
		money: valibot.optional(valibot.number()),
		dice_rolled: valibot.optional(valibot.number())
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "jackpot.lose",
			user_id: value.user_id,
			amount: value.money,
			dice_rolled: value.dice_rolled
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("jackpot_superprize_win"),
		user_id: valibot.number(),
		money: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "jackpot.superprize.win",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("jackpot_superprize_funded"),
		user_id: valibot.number(),
		jackpot_superprize_money: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "jackpot.superprize.increase",
			user_id: value.user_id,
			superprize: value.jackpot_superprize_money
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("jackpot_declined"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
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
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jail.put"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jail.put.double"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jail.visit"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jail.release.pay"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jail.release"),
		user_id: valibot.number(),
		position_after: valibot.optional(valibot.number())
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
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("goToJail"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "jail.put",
			user_id: value.user_id
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("goToJailByCombo"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "jail.put.double",
			user_id: value.user_id
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("goToJailVisiting"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "jail.visit",
			user_id: value.user_id
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("payForUnjail"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "jail.release.pay",
			user_id: value.user_id
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("unjailedByFee"),
		user_id: valibot.number(),
		mean_position: valibot.optional(valibot.number())
	}), valibot.transform((value) => {
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
const valiSchemas$13 = [valibot.object({
	id: valibot.string(),
	type: valibot.literal("level.build"),
	user_id: valibot.number(),
	field_id: valibot.number()
}), valibot.object({
	id: valibot.string(),
	type: valibot.literal("level.sell"),
	user_id: valibot.number(),
	field_id: valibot.number()
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
const valiV1Schemas$13 = [valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.literal("levelUp"),
	user_id: valibot.number(),
	field: valibot.number()
}), valibot.transform((value) => {
	return {
		id: value._id,
		type: "level.build",
		user_id: value.user_id,
		field_id: value.field
	};
})), valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.literal("levelDown"),
	user_id: valibot.number(),
	field: valibot.number()
}), valibot.transform((value) => {
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
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("loan.take"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("loan.deadline"),
		user_id: valibot.number(),
		amount: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("loan.repay"),
		user_id: valibot.number(),
		amount: valibot.number()
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
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("credit_taken"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "loan.take",
			user_id: value.user_id
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("credit_timeToPay"),
		user_id: valibot.number(),
		sum: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "loan.deadline",
			user_id: value.user_id,
			amount: value.sum
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.picklist(["credit_paid", "credit_payed"]),
		user_id: valibot.number(),
		sum: valibot.number()
	}), valibot.transform((value) => {
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
const valiSchemas$11 = [valibot.object({
	id: valibot.string(),
	type: valibot.literal("m1.move"),
	user_id: valibot.number(),
	rule: valibot.pipe(valibot.picklist([0, 1]), valibot.transform((value) => value === 0 ? "free" : "enemy_owned")),
	field_id: valibot.number(),
	move_reversed: bit(false)
}), valibot.object({
	id: valibot.string(),
	type: valibot.literal("m1.fail"),
	user_id: valibot.number()
})];
const enrichments$10 = { "m1.move"(options) {
	const player = options.status.players.get(options.event.user_id);
	player.position = options.event.field_id;
} };
const valiV1Schemas$11 = [valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.literal("mrMonopoly"),
	user_id: valibot.number(),
	field_type: valibot.pipe(valibot.picklist([0, 1]), valibot.transform((value) => value === 0 ? "free" : "enemy_owned")),
	field_id: valibot.number(),
	move_reverse: bit(false)
}), valibot.transform((value) => {
	return {
		id: value._id,
		type: "m1.move",
		user_id: value.user_id,
		rule: value.field_type,
		field_id: value.field_id,
		move_reversed: value.move_reverse
	};
})), valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.literal("mrMonopolyFailed"),
	user_id: valibot.number()
}), valibot.transform((value) => {
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
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("mortgage.put"),
		user_id: valibot.number(),
		field_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("mortgage.buyback"),
		user_id: valibot.number(),
		field_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("mortgage.expire"),
		user_id: valibot.number(),
		field_id: valibot.number()
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
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("mortgage"),
		user_id: valibot.number(),
		field: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "mortgage.put",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("unmortgage"),
		user_id: valibot.number(),
		field: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "mortgage.buyback",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("mortgage_limit"),
		field: valibot.number()
	}), valibot.transform((value) => {
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
const valiChanceDataSchema = valibot.union([
	valibot.strictObject({ amount: valibot.number() }),
	valibot.strictObject({
		field_id: valibot.number(),
		move_reversed: bit(false)
	}),
	valibot.undefined_()
]);
const valiSchemas$9 = [
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("bankrupt"),
		user_id: valibot.number(),
		user_id_bankrupt: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("chance"),
		user_id: valibot.number(),
		chance_index: valibot.number(),
		data: valiChanceDataSchema
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("game-over")
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("leave"),
		user_id: valibot.number(),
		kicked: bit(false)
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("message"),
		user_id: valibot.number(),
		private: valibot.optional(valibot.object({ user_id: valibot.optional(valibot.number()) })),
		is_forced: bit(false),
		text: valibot.string()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("restart"),
		user_id: valibot.number(),
		restart_price: valibot.number()
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
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("bankrupted"),
		user_id: valibot.number(),
		to: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "bankrupt",
			user_id: value.user_id,
			user_id_bankrupt: value.to
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("chance"),
		user_id: valibot.number(),
		chance_id: valibot.number(),
		money: valibot.optional(valibot.number()),
		move_reverse: valibot.optional(bit(false)),
		mean_position: valibot.optional(valibot.number())
	}), valibot.transform((value) => {
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
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("gameOver")
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "game-over"
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("leave"),
		user_id: valibot.number(),
		is_kicked: bit(false)
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "leave",
			user_id: value.user_id,
			kicked: value.is_kicked
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("message"),
		user_id: valibot.number(),
		private: valibot.optional(valibot.object({
			user: valibot.optional(valibot.number()),
			team: valibot.optional(valibot.unknown())
		})),
		forced: bit(false),
		text: valibot.string(),
		is_unsafe: bit(false)
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "message",
			user_id: value.user_id,
			private: value.private ? { user_id: value.private.user } : void 0,
			is_forced: value.forced,
			text: value.is_unsafe ? value.text : unescapeHtml(value.text)
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("restart"),
		user_id: valibot.number(),
		money: valibot.number()
	}), valibot.transform((value) => {
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
const valiSchemas$8 = [valibot.object({
	id: valibot.string(),
	type: valibot.literal("pause.set")
}), valibot.object({
	id: valibot.string(),
	type: valibot.literal("pause.end")
})];
const valiV1Schemas$8 = [valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.literal("pauseActive")
}), valibot.transform((value) => {
	return {
		id: value._id,
		type: "pause.set"
	};
})), valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.literal("pauseRemoved")
}), valibot.transform((value) => {
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
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("purchase.offer"),
		user_id: valibot.number(),
		field_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("purchase"),
		user_id: valibot.number(),
		field_id: valibot.number(),
		price: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("purchase.reject"),
		user_id: valibot.number(),
		field_id: valibot.number()
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
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("canBuy"),
		user_id: valibot.number(),
		field: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "purchase.offer",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("buy"),
		user_id: valibot.number(),
		field: valibot.number(),
		money: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "purchase",
			user_id: value.user_id,
			field_id: value.field,
			price: value.money
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("noBuy"),
		user_id: valibot.number(),
		field: valibot.number()
	}), valibot.transform((value) => {
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
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("rent.pay"),
		user_id: valibot.number(),
		field_id: valibot.number(),
		amount: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("rent.pay.complete"),
		user_id: valibot.number(),
		field_id: valibot.number(),
		amount: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("rent.pay.cancel"),
		user_id: valibot.number(),
		user_id_receiver: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("rent.zero"),
		user_id: valibot.number(),
		field_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("rent.zero.self"),
		user_id: valibot.number(),
		field_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("rent.zero.teammate"),
		user_id: valibot.number(),
		field_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("rent.zero.mortgaged"),
		user_id: valibot.number(),
		field_id: valibot.number()
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
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("payRent"),
		user_id: valibot.number(),
		field: valibot.number(),
		money: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "rent.pay",
			user_id: value.user_id,
			field_id: value.field,
			amount: value.money
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("payRentSuccess"),
		user_id: valibot.number(),
		field: valibot.number(),
		money: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "rent.pay.complete",
			user_id: value.user_id,
			field_id: value.field,
			amount: value.money
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("payRentFail"),
		user_id: valibot.number(),
		to: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "rent.pay.cancel",
			user_id: value.user_id,
			user_id_receiver: value.to
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("payRentZero"),
		user_id: valibot.number(),
		field: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "rent.zero",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("payRentToSelf"),
		user_id: valibot.number(),
		field: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "rent.zero.self",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("payRentToTeammate"),
		user_id: valibot.number(),
		field: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "rent.zero.teammate",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("payRentCancelledMortgaged"),
		user_id: valibot.number(),
		field: valibot.number()
	}), valibot.transform((value) => {
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
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("roll-dices"),
		user_id: valibot.number(),
		dices: valibot.tuple([
			valibot.number(),
			valibot.optional(valibot.number()),
			valibot.optional(valibot.number())
		]),
		move_reversed: bit(false),
		double_spent: bit(false)
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("roll-dices.jail.success"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("roll-dices.jail.fail"),
		user_id: valibot.number()
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
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("rollDices"),
		user_id: valibot.number(),
		dices: valibot.tuple([
			valibot.number(),
			valibot.optional(valibot.number()),
			valibot.optional(valibot.number())
		]),
		move_reverse: bit(false)
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "roll-dices",
			user_id: value.user_id,
			dices: value.dices,
			move_reversed: value.move_reverse,
			double_spent: false
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("double_spended")
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: value.type
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("rollDicesForUnjailSuccess"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "roll-dices.jail.success",
			user_id: value.user_id
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("rollDicesForUnjailFail"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
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
const valiSchemas$4 = [valibot.object({
	id: valibot.string(),
	type: valibot.literal("start.income"),
	user_id: valibot.number()
}), valibot.object({
	id: valibot.string(),
	type: valibot.literal("start.bonus"),
	user_id: valibot.number()
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
const valiV1Schemas$4 = [valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.literal("startBypass"),
	user_id: valibot.number()
}), valibot.transform((value) => {
	return {
		id: value._id,
		type: "start.income",
		user_id: value.user_id
	};
})), valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.literal("start_bonus"),
	user_id: valibot.number()
}), valibot.transform((value) => {
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
const valiSchemas$3 = [valibot.object({
	id: valibot.string(),
	type: valibot.literal("tournament.drop"),
	user_ids: valibot.array(valibot.number())
})];
const enrichments$3 = {};
const valiV1Schemas$3 = [valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.literal("tournament_drop"),
	user_id: valibot.number()
}), valibot.transform((value) => {
	return {
		id: value._id,
		type: "tournament.drop",
		user_ids: [value.user_id]
	};
})), valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.literal("tournament_drop_multi"),
	user_ids: valibot.array(valibot.number())
}), valibot.transform((value) => {
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
const valiSchemas$2 = [valibot.object({
	id: valibot.string(),
	type: valibot.literal("triple"),
	user_id: valibot.number()
}), valibot.object({
	id: valibot.string(),
	type: valibot.literal("triple.move"),
	user_id: valibot.number(),
	field_id: valibot.number(),
	move_reversed: bit(false)
})];
const enrichments$2 = { "triple.move"(options) {
	const player = options.status.players.get(options.event.user_id);
	player.position = options.event.field_id;
} };
const valiV1Schemas$2 = [valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.literal("chooseFieldToMove"),
	user_id: valibot.number()
}), valibot.transform((value) => {
	return {
		id: value._id,
		type: "triple",
		user_id: value.user_id
	};
})), valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.literal("fieldToMoveChoosed"),
	user_id: valibot.number(),
	field_id: valibot.number(),
	move_reverse: bit(false)
}), valibot.transform((value) => {
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
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("wormhole"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("wormhole.open"),
		user_id: valibot.number(),
		exits_count: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("wormhole.reject"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("wormhole.move"),
		user_id: valibot.number(),
		field_id: valibot.number(),
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
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("wormhole"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "wormhole",
			user_id: value.user_id
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("wormhole_opened"),
		user_id: valibot.number(),
		destinations_count: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "wormhole.open",
			user_id: value.user_id,
			exits_count: value.destinations_count
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("wormhole_declined"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "wormhole.reject",
			user_id: value.user_id
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("wormhole_used"),
		user_id: valibot.number(),
		field_id: valibot.number(),
		move_reverse: bit(false)
	}), valibot.transform((value) => {
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
const valiRecordParser = valibot.safeParser(valibot.record(valibot.string(), valibot.unknown()));
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
const valiM1DemoRawPacketEventsSchema = valibot.array(valibot.union([...valiSchemas, valibot.pipe(valibot.object({
	id: valibot.string(),
	type: valibot.string()
}), valibot.transform(({ type,...value_rest }) => {
	return {
		type: "_unknown",
		type_received: type,
		...value_rest
	};
}))]));
const valiM1DemoRawPacketV1EventElementSchema = valibot.union([...valiV1Schemas, valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.string()
}), valibot.transform(({ _id, type,...value_rest }) => {
	return {
		id: _id,
		type: "_unknown",
		type_received: type,
		...value_rest
	};
}))]);
const valiM1DemoRawPacketV1EventsSchema = valibot.pipe(valibot.union([valibot.array(valiM1DemoRawPacketV1EventElementSchema), valibot.record(valibot.string(), valiM1DemoRawPacketV1EventElementSchema)]), valibot.transform((value) => {
	if (isRecord(value)) return Object.entries(value).map(([_id, event]) => {
		return {
			_id,
			...event
		};
	});
	return value;
}), valibot.transform((value) => {
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
const valiM1DemoPacketSetupPlayerSchema = valibot.pipe(valibot.object({
	user_id: valibot.number(),
	is_vip: bit(false),
	is_loan_available: bit(false),
	equipment: valibot.object({
		cards: valibot.pipe(valibot.array(valibot.object({
			field_id: valibot.number(),
			item_proto_id: valibot.number(),
			item_id: valibot.optional(valibot.number()),
			rent_multiplier: valibot.number()
		})), valibot.transform((value) => new Map(value.map((card) => [card.field_id, card])))),
		generator: valibot.optional(valibot.object({
			item_proto_id: valibot.number(),
			variant_id: valibot.optional(valibot.number()),
			seed: valibot.optional(valibot.string())
		})),
		joke: valibot.optional(valibot.object({ item_proto_id: valibot.number() }))
	})
}), valibot.transform((value) => {
	return {
		...value,
		index: -1
	};
}));

//#endregion
//#region src/packet/setup.ts
const valiM1DemoPacketSetupSchema = valibot.object({
	config: valiM1DemoPacketSetupConfigSchema,
	flags: valibot.object({
		game_mode: valibot.number(),
		game_submode: valibot.number(),
		game_2x2: bit(false)
	}),
	players: valibot.pipe(valibot.array(valiM1DemoPacketSetupPlayerSchema), valibot.transform((value) => {
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
const valiM1DemoPacketTimeSchema = valibot.pipe(valibot.object({
	ts_start: valibot.number(),
	ts_now: valibot.number(),
	inactive: valibot.number(),
	ts_inactive: valibot.optional(valibot.number())
}), valibot.transform((value) => {
	return {
		...value,
		delta: Date.now() - value.ts_now
	};
}));
const valiM1DemoPacketV1TimeSchema = valibot.union([
	valibot.object({ time: valiM1DemoPacketTimeSchema }),
	valibot.pipe(valibot.object({ status: valibot.optional(valibot.object({ time: valiM1DemoPacketTimeSchema })) }), valibot.transform((value) => {
		if (!value.status) {
			console.error("There is no time in the packet.", value);
			throw new Error("There is no time in the packet.");
		}
		return { time: value.status.time };
	})),
	valibot.pipe(valibot.object({
		current_time: valibot.number(),
		game_started: valibot.optional(valibot.number()),
		ts_start: valibot.optional(valibot.number()),
		status: valibot.optional(valibot.object({ pause_data: valibot.optional(valibot.object({
			total_time: valibot.number(),
			is_active: valibot.boolean(),
			pause_started_at: valibot.optional(valibot.number())
		})) }))
	}), valibot.transform((value) => {
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
const valiM1DemoRawPacketSchema = valibot.object({
	setup: valibot.optional(valiM1DemoPacketSetupSchema),
	events: valiM1DemoRawPacketEventsSchema,
	status: valibot.optional(valiM1DemoPacketStatusSchema),
	time: valiM1DemoPacketTimeSchema
});
const valiM1DemoRawPacketV1Schema = valibot.intersect([valiM1DemoPacketV1TimeSchema, valibot.pipe(valibot.object({
	config: valibot.optional(valiM1DemoPacketV1ConfigSchema),
	flags: valibot.optional(valibot.object({
		game_mode: valibot.number(),
		game_submode: valibot.number(),
		game_2x2: bit(false)
	})),
	events: valiM1DemoRawPacketV1EventsSchema,
	status: valibot.optional(valiM1DemoPacketV1StatusSchema)
}), valibot.transform((value) => {
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
exports.M1LiveDemo = M1LiveDemo
exports.packetv1_action_mapping = packetv1_action_mapping