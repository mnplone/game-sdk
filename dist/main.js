import * as v$33 from "valibot";
import * as v$32 from "valibot";
import * as v$31 from "valibot";
import * as v$30 from "valibot";
import * as v$29 from "valibot";
import * as v$28 from "valibot";
import * as v$27 from "valibot";
import * as v$26 from "valibot";
import * as v$25 from "valibot";
import * as v$24 from "valibot";
import * as v$23 from "valibot";
import * as v$22 from "valibot";
import * as v$21 from "valibot";
import * as v$20 from "valibot";
import * as v$19 from "valibot";
import * as v$18 from "valibot";
import * as v$17 from "valibot";
import * as v$16 from "valibot";
import * as v$15 from "valibot";
import * as v$14 from "valibot";
import * as v$13 from "valibot";
import * as v$12 from "valibot";
import * as v$11 from "valibot";
import * as v$10 from "valibot";
import * as v$9 from "valibot";
import * as v$8 from "valibot";
import * as v$7 from "valibot";
import * as v$6 from "valibot";
import * as v$5 from "valibot";
import * as v$4 from "valibot";
import * as v$3 from "valibot";
import * as v$2 from "valibot";
import * as v$1 from "valibot";
import * as v from "valibot";

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
	v$33.object({
		id: v$33.string(),
		type: v$33.literal("auction.put"),
		user_id: v$33.number(),
		field_id: v$33.number(),
		bid: v$33.number()
	}),
	v$33.object({
		id: v$33.string(),
		type: v$33.literal("auction.bid"),
		user_id: v$33.number(),
		bid: v$33.number()
	}),
	v$33.object({
		id: v$33.string(),
		type: v$33.literal("auction.reject"),
		user_id: v$33.number()
	}),
	v$33.object({
		id: v$33.string(),
		type: v$33.literal("auction.win"),
		user_id: v$33.number(),
		field_id: v$33.number(),
		user_id_seller: v$33.optional(v$33.number()),
		price: v$33.number()
	}),
	v$33.object({
		id: v$33.string(),
		type: v$33.literal("auction.cancel"),
		field_id: v$33.number(),
		user_id_seller: v$33.optional(v$33.number()),
		price: v$33.optional(v$33.number())
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
	v$33.pipe(v$33.object({
		_id: v$33.optional(v$33.string()),
		type: v$33.literal("toAuction"),
		user_id: v$33.number(),
		field: v$33.number(),
		bet: v$33.number()
	}), v$33.transform((value) => {
		return {
			id: value._id,
			type: "auction.put",
			user_id: value.user_id,
			field_id: value.field,
			bid: value.bet
		};
	})),
	v$33.pipe(v$33.object({
		_id: v$33.optional(v$33.string()),
		type: v$33.literal("auctionAccept"),
		user_id: v$33.number(),
		bet: v$33.number()
	}), v$33.transform((value) => {
		return {
			id: value._id,
			type: "auction.bid",
			user_id: value.user_id,
			bid: value.bet
		};
	})),
	v$33.pipe(v$33.object({
		_id: v$33.optional(v$33.string()),
		type: v$33.literal("auctionDecline"),
		user_id: v$33.number()
	}), v$33.transform((value) => {
		return {
			id: value._id,
			type: "auction.reject",
			user_id: value.user_id
		};
	})),
	v$33.pipe(v$33.object({
		_id: v$33.optional(v$33.string()),
		type: v$33.literal("auctionWinner"),
		user_id: v$33.number(),
		user_id_seller: v$33.optional(v$33.number()),
		field: v$33.number(),
		money: v$33.number()
	}), v$33.transform((value) => {
		return {
			id: value._id,
			type: "auction.win",
			user_id: value.user_id,
			field_id: value.field,
			user_id_seller: value.user_id_seller,
			price: value.money
		};
	})),
	v$33.pipe(v$33.object({
		_id: v$33.optional(v$33.string()),
		type: v$33.literal("auctionFail"),
		field: v$33.number(),
		user_id_seller: v$33.optional(v$33.number()),
		money: v$33.optional(v$33.number())
	}), v$33.transform((value) => {
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
	v$32.object({
		id: v$32.string(),
		type: v$32.literal("bank.income"),
		user_id: v$32.number(),
		amount: v$32.number()
	}),
	v$32.object({
		id: v$32.string(),
		type: v$32.literal("bank.fee"),
		user_id: v$32.number(),
		amount: v$32.number()
	}),
	v$32.object({
		id: v$32.string(),
		type: v$32.literal("bank.fee.pay"),
		user_id: v$32.number(),
		amount: v$32.number()
	}),
	v$32.object({
		id: v$32.string(),
		type: v$32.literal("bank.return"),
		user_id: v$32.number(),
		amount: v$32.number()
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
	v$32.pipe(v$32.object({
		_id: v$32.optional(v$32.string()),
		type: v$32.literal("cash_plus"),
		user_id: v$32.number(),
		money: v$32.number()
	}), v$32.transform((value) => {
		return {
			id: value._id,
			type: "bank.income",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	v$32.pipe(v$32.object({
		_id: v$32.optional(v$32.string()),
		type: v$32.picklist([
			"cash_minus",
			"tax_income",
			"tax_luxury"
		]),
		user_id: v$32.number(),
		money: v$32.number()
	}), v$32.transform((value) => {
		return {
			id: value._id,
			type: "bank.fee",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	v$32.pipe(v$32.object({
		_id: v$32.optional(v$32.string()),
		type: v$32.literal("feePaid"),
		user_id: v$32.number(),
		money: v$32.number()
	}), v$32.transform((value) => {
		return {
			id: value._id,
			type: "bank.fee.pay",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	v$32.pipe(v$32.object({
		_id: v$32.optional(v$32.string()),
		type: v$32.literal("insuranceReturn"),
		user_id: v$32.number(),
		money: v$32.number()
	}), v$32.transform((value) => {
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
	return v$31.pipe(v$31.optional(v$31.picklist([0, 1]), default_value ? 1 : 0), v$31.transform((value) => value === 1));
}
function parse(schema, value) {
	return parser(schema)(value);
}
function parser(schema) {
	const fn = v$31.parser(schema);
	return (value) => {
		try {
			return fn(value);
		} catch (error) {
			if (v$31.isValiError(error)) for (const issue of error.issues) console.error(`Valibot found an issue at ${v$31.getDotPath(issue)}. Received ${issue.received}, which does not match expected type ${issue.expected}`, issue);
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
const valiSchemas$17 = [v$30.object({
	id: v$30.string(),
	type: v$30.literal("bus.select"),
	user_id: v$30.number(),
	field_ids_move: v$30.pipe(v$30.array(v$30.number()), v$30.transform((value) => new Set(value)))
}), v$30.object({
	id: v$30.string(),
	type: v$30.literal("bus.move"),
	user_id: v$30.number(),
	selection: v$30.object({
		stop_id: v$30.picklist([
			0,
			1,
			-1
		]),
		field_id: v$30.number(),
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
const valiV1Schemas$17 = [v$30.pipe(v$30.object({
	_id: v$30.optional(v$30.string()),
	type: v$30.literal("chooseBusStop"),
	user_id: v$30.number()
}), v$30.transform((value) => {
	return {
		id: value._id,
		type: "bus.select",
		user_id: value.user_id,
		field_ids_move: new Set()
	};
})), v$30.pipe(v$30.object({
	_id: v$30.optional(v$30.string()),
	type: v$30.literal("busStopChoosed"),
	user_id: v$30.number(),
	stop: v$30.picklist([
		0,
		1,
		-1
	]),
	mean_position: v$30.number(),
	move_reverse: bit(false),
	auto_selected: bit(false)
}), v$30.transform((value) => {
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
const valiM1DemoContractSchema = v$29.pipe(v$29.tuple([v$29.object({
	user_id: v$29.number(),
	field_ids: v$29.array(v$29.number()),
	cash: v$29.number()
}), v$29.object({
	user_id: v$29.number(),
	field_ids: v$29.array(v$29.number()),
	cash: v$29.number()
})]), v$29.transform(([initiator, responder]) => {
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
const valiM1DemoPacketStatusTurnSchema = v$29.object({
	user_id: v$29.nullable(v$29.number()),
	action: v$29.object({
		user_id: v$29.nullable(v$29.number()),
		list: v$29.pipe(v$29.array(v$29.picklist([
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
		])), v$29.transform((value) => new Set(value)))
	}),
	move_reversed: bit(false),
	auction: v$29.optional(v$29.object({
		field_id: v$29.number(),
		bid: v$29.number(),
		user_ids_rejected: v$29.pipe(v$29.array(v$29.number()), v$29.transform((value) => new Set(value)))
	})),
	contract: v$29.optional(valiM1DemoContractSchema),
	contracts_sent: v$29.optional(v$29.number()),
	jackpot: v$29.optional(v$29.object({ superprize: v$29.number() })),
	payment: v$29.optional(v$29.object({
		to_user_id: v$29.optional(v$29.number()),
		amount: v$29.number()
	})),
	field_ids_move: v$29.optional(v$29.pipe(v$29.array(v$29.object({
		field_id: v$29.number(),
		data: v$29.union([v$29.object({ stop: v$29.number() }), v$29.object({ field_id: v$29.number() })])
	})), v$29.transform((value) => new Map(value.map((item) => [item.field_id, item.data]))))),
	field_ids_level_built: v$29.optional(v$29.pipe(v$29.array(v$29.number()), v$29.transform((value) => new Set(value)))),
	field_ids_mortgaged: v$29.optional(v$29.pipe(v$29.array(v$29.number()), v$29.transform((value) => new Set(value))))
});

//#endregion
//#region src/packet/status/fields.ts
const valiM1DemoPacketStatusFieldsSchema = v$28.pipe(v$28.array(v$28.pipe(v$28.object({
	field_id: v$28.number(),
	owner_user_id: v$28.number(),
	level: v$28.number(),
	mortgage: v$28.optional(v$28.object({ round_until: v$28.optional(v$28.number()) }))
}), v$28.transform((value) => value))), v$28.transform((value) => new Map(value.map((field) => [field.field_id, field]))));
const valiM1DemoPacketV1StatusFieldsSchema = v$28.pipe(v$28.record(v$28.string(), v$28.object({
	owner: v$28.number(),
	level: v$28.number(),
	mortgaged: v$28.boolean(),
	mortgage_lose_round: v$28.optional(v$28.number())
})), v$28.transform((value) => new Map(Object.entries(value).map(([field_id_string, field]) => {
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
const valiM1DemoPacketSetupConfigMechanicsChanceSchema = v$27.strictObject({ cards: v$27.array(v$27.union([
	v$27.strictObject({
		type: v$27.literal("income"),
		text_id: v$27.number(),
		range: v$27.strictObject({
			min: v$27.number(),
			max: v$27.number(),
			step: v$27.number()
		})
	}),
	v$27.strictObject({
		type: v$27.literal("expense"),
		text_id: v$27.number(),
		range: v$27.strictObject({
			min: v$27.number(),
			max: v$27.number(),
			step: v$27.number()
		})
	}),
	v$27.strictObject({
		type: v$27.literal("repair"),
		text_id: v$27.number(),
		cost: v$27.strictObject({
			small: v$27.number(),
			big: v$27.number()
		})
	}),
	v$27.strictObject({
		type: v$27.literal("go-to-jail"),
		text_id: v$27.number()
	}),
	v$27.strictObject({
		type: v$27.literal("teleport"),
		text_id: v$27.number()
	}),
	v$27.strictObject({
		type: v$27.literal("skip-move"),
		text_id: v$27.number()
	}),
	v$27.strictObject({
		type: v$27.literal("insurance"),
		text_id: v$27.number(),
		price: v$27.number()
	}),
	v$27.strictObject({
		type: v$27.literal("birthday"),
		text_id: v$27.number(),
		amount: v$27.number()
	}),
	v$27.strictObject({
		type: v$27.literal("reverse"),
		text_id: v$27.number()
	}),
	v$27.strictObject({
		type: v$27.literal("disaster"),
		text_id: v$27.number()
	})
])) });
const valiM1DemoPacketV1ConfigChanceCardsSchema = v$27.pipe(v$27.array(v$27.union([
	v$27.strictObject({
		type: v$27.literal("cash_in"),
		text: v$27.string(),
		range: v$27.tuple([v$27.number(), v$27.number()]),
		rangeStep: v$27.number()
	}),
	v$27.strictObject({
		type: v$27.literal("cash_out"),
		text: v$27.string(),
		range: v$27.tuple([v$27.number(), v$27.number()]),
		rangeStep: v$27.number()
	}),
	v$27.strictObject({
		type: v$27.literal("repair"),
		text: v$27.string(),
		costs: v$27.tuple([v$27.number(), v$27.number()])
	}),
	v$27.strictObject({
		type: v$27.literal("jail"),
		text: v$27.string()
	}),
	v$27.strictObject({
		type: v$27.literal("teleport"),
		text: v$27.string()
	}),
	v$27.strictObject({
		type: v$27.literal("move_skip"),
		text: v$27.string()
	}),
	v$27.strictObject({
		type: v$27.literal("insurance"),
		text: v$27.string(),
		sum: v$27.number()
	}),
	v$27.strictObject({
		type: v$27.literal("birthday"),
		text: v$27.string(),
		sum: v$27.number()
	}),
	v$27.strictObject({
		type: v$27.literal("reverse"),
		text: v$27.string()
	}),
	v$27.strictObject({
		type: v$27.literal("fields_disaster"),
		text: v$27.string()
	})
])), v$27.transform((value) => {
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
const valiM1DemoPacketSetupConfigFieldsSchema = v$26.pipe(v$26.array(v$26.union([
	v$26.object({
		is_corner: v$26.pipe(v$26.literal(1), v$26.transform(() => true)),
		type: v$26.picklist(["start", "jail"])
	}),
	v$26.object({
		is_corner: bit(false),
		type: v$26.picklist([
			"chance",
			"jackpot",
			"jail.goto",
			"tax.income",
			"tax.luxury",
			"wormhole"
		])
	}),
	v$26.object({
		is_corner: v$26.pipe(v$26.undefined_(), v$26.transform(() => false)),
		type: v$26.literal("company"),
		monopoly_id: v$26.number(),
		is_last: bit(false)
	})
])), v$26.transform((value) => {
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
const valiM1DemoPacketV1ConfigFieldsSchema = v$26.pipe(v$26.array(
	v$26.variant("type", [
		v$26.object({
			design: v$26.literal("corner"),
			type: v$26.literal("start")
		}),
		v$26.object({
			design: v$26.literal("corner"),
			type: v$26.literal("jail")
		}),
		v$26.object({
			design: v$26.optional(v$26.literal("corner")),
			type: v$26.literal("special"),
			action: v$26.picklist([
				"chance",
				"goToJail",
				"jackpot",
				"tax_income",
				"tax_luxury",
				"wormhole"
			])
		}),
		v$26.object({
			design: v$26.exactOptional(v$26.never()),
			type: v$26.literal("field"),
			group: v$26.number(),
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
), v$26.transform((value) => {
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
const valiM1DemoPacketSetupConfigMonopoliesSchema = v$25.pipe(v$25.record(v$25.string(), v$25.union([
	v$25.object({
		buy_price: v$25.number(),
		rent_by_level: v$25.array(v$25.number()),
		level_cost: v$25.number(),
		last_field: v$25.optional(v$25.object({
			buy_price: v$25.number(),
			rent_by_level: v$25.array(v$25.number())
		}))
	}),
	v$25.object({
		buy_price: v$25.number(),
		rent_by_count: v$25.array(v$25.number())
	}),
	v$25.object({
		buy_price: v$25.number(),
		dice_multipliers: v$25.array(v$25.number())
	})
])), v$25.transform((value) => new Map(Object.entries(value).map(([monopoly_id, monopoly]) => [Number(monopoly_id), monopoly]))));
const valiM1DemoPacketV1ConfigGroupsSchema = v$25.pipe(v$25.record(v$25.string(), v$25.union([
	v$25.object({
		buy: v$25.number(),
		levels: v$25.array(v$25.number()),
		buy_last: v$25.optional(v$25.number()),
		levels_last: v$25.optional(v$25.array(v$25.number())),
		levelUpCost: v$25.number()
	}),
	v$25.object({
		buy: v$25.number(),
		levels: v$25.array(v$25.number()),
		levelUpCost: v$25.literal(false)
	}),
	v$25.object({
		buy: v$25.number(),
		levels: v$25.literal(false),
		coeffs: v$25.array(v$25.number()),
		levelUpCost: v$25.literal(false)
	})
])), v$25.transform((value) => new Map(Object.entries(value).map(([monopoly_id_string, group]) => {
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
const valiM1DemoPacketSetipConfigRestartVariantSchema = v$24.object({
	round_from: v$24.number(),
	round_to: v$24.number(),
	count: v$24.number(),
	price: v$24.number()
});
const valiM1DemoPacketSetupConfigSchema = v$24.object({
	version: v$24.number(),
	board_size: v$24.tuple([v$24.number(), v$24.number()]),
	timers: v$24.object({ roll_dices: v$24.number() }),
	fields: valiM1DemoPacketSetupConfigFieldsSchema,
	monopolies: valiM1DemoPacketSetupConfigMonopoliesSchema,
	mechanics: v$24.object({
		auction: v$24.optional(v$24.object({ bid_increment: v$24.number() })),
		chance: v$24.optional(valiM1DemoPacketSetupConfigMechanicsChanceSchema),
		field_level: v$24.optional(v$24.object({
			sell_multiplier: v$24.optional(v$24.number(), 1),
			build_uneven: bit(false),
			build_without_monopoly: bit(false)
		})),
		jackpot: v$24.optional(v$24.object({
			bet: v$24.number(),
			multipliers: v$24.array(v$24.number()),
			superprize: v$24.object({ chance: v$24.number() })
		})),
		jail: v$24.object({
			release_fee: v$24.number(),
			double_roll_attempt_limit: v$24.optional(v$24.number(), 3)
		}),
		loan: v$24.optional(v$24.object({
			amount: v$24.number(),
			repay_multiplier: v$24.number(),
			duration: v$24.number(),
			cooldown: v$24.object({
				match_start: v$24.number(),
				repay: v$24.number()
			})
		})),
		mortgage: v$24.optional(v$24.object({
			duration: v$24.optional(v$24.number()),
			multiplier: v$24.number(),
			buyback_multiplier: v$24.number(),
			auction_multiplier: v$24.optional(v$24.number())
		})),
		restart: v$24.optional(v$24.object({ variants: v$24.array(valiM1DemoPacketSetipConfigRestartVariantSchema) })),
		start: v$24.object({
			income_amount: v$24.number(),
			bonus_amount: v$24.optional(v$24.number(), 0)
		}),
		time_rules: v$24.array(v$24.union([
			v$24.object({
				type: v$24.literal("start.none"),
				time: v$24.number()
			}),
			v$24.object({
				type: v$24.literal("start.tax"),
				time: v$24.number(),
				sum: v$24.number()
			}),
			v$24.object({
				type: v$24.literal("rent.tax"),
				time: v$24.number(),
				rate: v$24.number()
			})
		])),
		wormhole: v$24.optional(v$24.object({
			exits_free_count: v$24.optional(v$24.number(), 3),
			exits_extra_price: v$24.number(),
			move_direct: bit(false)
		}))
	})
});
const valiM1DemoPacketV1ConfigSchema = v$24.pipe(
	v$24.object({
		version: v$24.number(),
		size: v$24.tuple([v$24.number(), v$24.number()]),
		fields: valiM1DemoPacketV1ConfigFieldsSchema,
		groups: valiM1DemoPacketV1ConfigGroupsSchema,
		TIME_FOR_ROLL_DICES: v$24.number(),
		AUCTION_BET_STEP: v$24.optional(v$24.number()),
		chance_cards: v$24.optional(valiM1DemoPacketV1ConfigChanceCardsSchema),
		coeff_level_down: v$24.optional(v$24.number(), 1),
		UNEVEN_LEVEL_CHANGE: bit(false),
		LEVEL_CHANGE_NO_MNPL: bit(false),
		JACKPOT_BET: v$24.optional(v$24.number()),
		JACKPOT_COEFFS: v$24.optional(v$24.array(v$24.number())),
		JACKPOT_SUPERPRIZE_CHANCE: v$24.optional(v$24.number()),
		jailFee: v$24.number(),
		UNJAIL_TRIES_LIMIT: v$24.optional(v$24.number(), 3),
		CREDIT_SUM: v$24.optional(v$24.number()),
		CREDIT_INTEREST: v$24.optional(v$24.number()),
		CREDIT_PERCENT: v$24.optional(v$24.number()),
		CREDIT_ROUNDS: v$24.optional(v$24.number()),
		CREDIT_COOLDOWN_ROUNDS: v$24.optional(v$24.number()),
		START_CREDIT_COOLDOWN_ROUNDS: v$24.optional(v$24.number()),
		MORTGAGE_ROUND_LIMIT: v$24.optional(v$24.number()),
		coeff_mortgage: v$24.number(),
		coeff_unmortgage: v$24.number(),
		auction_mortgaged: v$24.optional(v$24.number()),
		restart_variants: v$24.optional(v$24.array(valiM1DemoPacketSetipConfigRestartVariantSchema)),
		roundCash: v$24.number(),
		START_BONUS_SUM: v$24.optional(v$24.number(), 0),
		roundTaxes: v$24.array(v$24.object({
			game_time: v$24.number(),
			tax: v$24.number()
		})),
		incomeTaxes: v$24.array(v$24.object({
			game_time: v$24.number(),
			tax_rate: v$24.number()
		})),
		WORMHOLE_DIRECTLY: v$24.optional(bit(false)),
		WORMHOLE_EXTRA_DESTINATION_COST: v$24.optional(v$24.number())
	}),
	// transforming config in-place because it is a whole product
	v$24.transform((value) => {
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
const valiM1DemoPacketStatusPlayersSchema = v$23.pipe(v$23.array(v$23.pipe(v$23.object({
	user_id: v$23.number(),
	status: v$23.number(),
	position: v$23.number(),
	cash: v$23.number(),
	score: v$23.number(),
	jail: v$23.optional(v$23.object({ roll_double_attempts: v$23.number() })),
	loan: v$23.union([v$23.strictObject({
		taken: v$23.pipe(v$23.literal(0), v$23.transform(() => false)),
		unlock_round: v$23.number()
	}), v$23.strictObject({
		taken: v$23.pipe(v$23.literal(1), v$23.transform(() => true)),
		debt: v$23.number(),
		return_round: v$23.number()
	})]),
	restart: v$23.optional(v$23.object({ variant: v$23.nullable(valiM1DemoPacketSetipConfigRestartVariantSchema) }))
}), v$23.transform((value) => value))), v$23.transform((value) => new Map(value.map((player) => [player.user_id, player]))));
const valiM1DemoPacketV1StatusPlayersSchema = v$23.array(v$23.pipe(v$23.object({
	user_id: v$23.number(),
	vip: v$23.optional(v$23.boolean(), false),
	cards_equipped: v$23.optional(v$23.record(v$23.string(), v$23.object({
		thing_id: v$23.number(),
		coeff_rent: v$23.number()
	}))),
	can_use_credit: v$23.optional(v$23.boolean(), false),
	status: v$23.number(),
	position: v$23.number(),
	money: v$23.number(),
	score: v$23.number(),
	jailed: v$23.boolean(),
	unjailAttempts: v$23.number(),
	credit_nextTakeRound: v$23.number(),
	credit_payRound: v$23.union([v$23.literal(false), v$23.number()]),
	credit_toPay: v$23.number(),
	restart: v$23.optional(v$23.union([v$23.pipe(v$23.literal(0), v$23.transform(() => null)), valiM1DemoPacketSetipConfigRestartVariantSchema]))
}), v$23.transform((value) => {
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
const valiM1DemoPacketStatusSchema = v$22.object({
	round: v$22.number(),
	players: valiM1DemoPacketStatusPlayersSchema,
	fields: valiM1DemoPacketStatusFieldsSchema,
	turn: valiM1DemoPacketStatusTurnSchema,
	timer: v$22.optional(v$22.union([v$22.object({
		ts_expires: v$22.number(),
		is_extra: v$22.boolean()
	}), v$22.object({
		expires_in: v$22.number(),
		is_extra: v$22.boolean()
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
const valiM1DemoPacketV1StatusActiontypeSchema = v$22.array(v$22.picklist(Object.keys(action_list_mapping)));
const valiM1DemoPacketV1ContractSchema = v$22.pipe(v$22.object({
	from: v$22.number(),
	to: v$22.number(),
	out_fields: v$22.array(v$22.number()),
	out_money: v$22.number(),
	in_fields: v$22.array(v$22.number()),
	in_money: v$22.number()
}), v$22.transform((value) => ({
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
const valiM1DemoPacketV1StatusSchema = v$22.pipe(
	v$22.object({
		round: v$22.number(),
		players: valiM1DemoPacketV1StatusPlayersSchema,
		fields: valiM1DemoPacketV1StatusFieldsSchema,
		player_ownerOfMove: v$22.nullable(v$22.number()),
		action_player: v$22.nullable(v$22.number()),
		action_type: valiM1DemoPacketV1StatusActiontypeSchema,
		current_move: v$22.optional(v$22.object({
			dices: v$22.optional(v$22.tuple([
				v$22.number(),
				v$22.optional(v$22.number()),
				v$22.optional(v$22.number())
			])),
			move_reverse: v$22.optional(v$22.boolean(), false),
			pay: v$22.optional(v$22.number()),
			moneyToPay: v$22.optional(v$22.number()),
			payTo: v$22.optional(v$22.number()),
			players_auctionStatus: v$22.optional(v$22.pipe(v$22.record(v$22.string(), v$22.number()), v$22.transform((value) => new Set(Object.entries(value).filter(([_, status]) => status === 0).map(([user_id_string]) => Number.parseInt(user_id_string)))))),
			field: v$22.optional(v$22.number()),
			bet: v$22.optional(v$22.number()),
			contract: v$22.optional(valiM1DemoPacketV1ContractSchema),
			contracts: v$22.optional(v$22.number()),
			jackpot_superprize_money: v$22.optional(v$22.number()),
			wormhole_destinations: v$22.optional(v$22.array(v$22.number())),
			levelUpped: v$22.optional(v$22.array(v$22.number())),
			mortgaged: v$22.optional(v$22.array(v$22.number()))
		})),
		timeout_ts: v$22.number(),
		timeout_is_additional: v$22.boolean()
	}),
	v$22.transform((value) => {
		for (const [index, player] of value.players.entries()) if (player._setup) player._setup.index = index;
		return value;
	}),
	// eslint-disable-next-line complexity, max-lines-per-function
	v$22.transform((value) => {
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
	v$21.object({
		id: v$21.string(),
		type: v$21.literal("contract.send"),
		user_id: v$21.number(),
		user_id_to: v$21.number()
	}),
	v$21.object({
		id: v$21.string(),
		type: v$21.literal("contract.accept"),
		user_id: v$21.number(),
		contract: valiM1DemoContractSchema
	}),
	v$21.object({
		id: v$21.string(),
		type: v$21.literal("contract.reject"),
		user_id: v$21.number(),
		timeout: bit(false)
	})
];
const enrichments$15 = {};
const valiV1Schemas$16 = [
	v$21.pipe(v$21.object({
		_id: v$21.optional(v$21.string()),
		type: v$21.literal("contract"),
		user_id: v$21.number(),
		to: v$21.number()
	}), v$21.transform((value) => {
		return {
			id: value._id,
			type: "contract.send",
			user_id: value.user_id,
			user_id_to: value.to
		};
	})),
	v$21.pipe(v$21.object({
		_id: v$21.optional(v$21.string()),
		type: v$21.literal("contract_details")
	}), v$21.transform((value) => {
		return {
			id: value._id,
			type: value.type
		};
	})),
	v$21.pipe(v$21.object({
		_id: v$21.optional(v$21.string()),
		type: v$21.literal("contract_accepted"),
		user_id: v$21.number(),
		contract: valiM1DemoPacketV1ContractSchema
	}), v$21.transform((value) => {
		return {
			id: value._id,
			type: "contract.accept",
			user_id: value.user_id,
			contract: value.contract
		};
	})),
	v$21.pipe(v$21.object({
		_id: v$21.optional(v$21.string()),
		type: v$21.literal("contract_declined"),
		user_id: v$21.number(),
		by_timeout: bit(false)
	}), v$21.transform((value) => {
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
	v$20.object({
		id: v$20.string(),
		type: v$20.literal("jackpot"),
		user_id: v$20.number()
	}),
	v$20.object({
		id: v$20.string(),
		type: v$20.literal("jackpot.pay"),
		user_id: v$20.number(),
		amount: v$20.number(),
		jackpot_size: v$20.number()
	}),
	v$20.object({
		id: v$20.string(),
		type: v$20.literal("jackpot.play"),
		user_id: v$20.number(),
		dice_bet: v$20.array(v$20.number()),
		dice_rolled: v$20.number()
	}),
	v$20.object({
		id: v$20.string(),
		type: v$20.literal("jackpot.win"),
		user_id: v$20.number(),
		amount: v$20.number(),
		dice_rolled: v$20.optional(v$20.number())
	}),
	v$20.object({
		id: v$20.string(),
		type: v$20.literal("jackpot.lose"),
		user_id: v$20.number(),
		amount: v$20.optional(v$20.number()),
		dice_rolled: v$20.optional(v$20.number())
	}),
	v$20.object({
		id: v$20.string(),
		type: v$20.literal("jackpot.superprize.win"),
		user_id: v$20.number(),
		amount: v$20.number()
	}),
	v$20.object({
		id: v$20.string(),
		type: v$20.literal("jackpot.superprize.increase"),
		user_id: v$20.number(),
		superprize: v$20.number()
	}),
	v$20.object({
		id: v$20.string(),
		type: v$20.literal("jackpot.reject"),
		user_id: v$20.number()
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
	v$20.pipe(v$20.object({
		_id: v$20.optional(v$20.string()),
		type: v$20.literal("jackpot"),
		user_id: v$20.number()
	}), v$20.transform((value) => {
		return {
			id: value._id,
			type: "jackpot",
			user_id: value.user_id
		};
	})),
	v$20.pipe(v$20.object({
		_id: v$20.optional(v$20.string()),
		type: v$20.literal("jackpot_paid"),
		user_id: v$20.number(),
		money: v$20.number(),
		jackpot_money: v$20.number()
	}), v$20.transform((value) => {
		return {
			id: value._id,
			type: "jackpot.pay",
			user_id: value.user_id,
			amount: value.money,
			jackpot_size: value.jackpot_money
		};
	})),
	v$20.pipe(v$20.object({
		_id: v$20.optional(v$20.string()),
		type: v$20.literal("jackpot_play"),
		user_id: v$20.number(),
		dices_betted: v$20.array(v$20.number()),
		dice_rolled: v$20.number()
	}), v$20.transform((value) => {
		return {
			id: value._id,
			type: "jackpot.play",
			user_id: value.user_id,
			dice_bet: value.dices_betted,
			dice_rolled: value.dice_rolled
		};
	})),
	v$20.pipe(v$20.object({
		_id: v$20.optional(v$20.string()),
		type: v$20.literal("jackpot_win"),
		user_id: v$20.number(),
		money: v$20.number(),
		dice_rolled: v$20.optional(v$20.number())
	}), v$20.transform((value) => {
		return {
			id: value._id,
			type: "jackpot.win",
			user_id: value.user_id,
			amount: value.money,
			dice_rolled: value.dice_rolled
		};
	})),
	v$20.pipe(v$20.object({
		_id: v$20.optional(v$20.string()),
		type: v$20.literal("jackpot_lose"),
		user_id: v$20.number(),
		money: v$20.optional(v$20.number()),
		dice_rolled: v$20.optional(v$20.number())
	}), v$20.transform((value) => {
		return {
			id: value._id,
			type: "jackpot.lose",
			user_id: value.user_id,
			amount: value.money,
			dice_rolled: value.dice_rolled
		};
	})),
	v$20.pipe(v$20.object({
		_id: v$20.optional(v$20.string()),
		type: v$20.literal("jackpot_superprize_win"),
		user_id: v$20.number(),
		money: v$20.number()
	}), v$20.transform((value) => {
		return {
			id: value._id,
			type: "jackpot.superprize.win",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	v$20.pipe(v$20.object({
		_id: v$20.optional(v$20.string()),
		type: v$20.literal("jackpot_superprize_funded"),
		user_id: v$20.number(),
		jackpot_superprize_money: v$20.number()
	}), v$20.transform((value) => {
		return {
			id: value._id,
			type: "jackpot.superprize.increase",
			user_id: value.user_id,
			superprize: value.jackpot_superprize_money
		};
	})),
	v$20.pipe(v$20.object({
		_id: v$20.optional(v$20.string()),
		type: v$20.literal("jackpot_declined"),
		user_id: v$20.number()
	}), v$20.transform((value) => {
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
	v$19.object({
		id: v$19.string(),
		type: v$19.literal("jail.put"),
		user_id: v$19.number()
	}),
	v$19.object({
		id: v$19.string(),
		type: v$19.literal("jail.put.double"),
		user_id: v$19.number()
	}),
	v$19.object({
		id: v$19.string(),
		type: v$19.literal("jail.visit"),
		user_id: v$19.number()
	}),
	v$19.object({
		id: v$19.string(),
		type: v$19.literal("jail.release.pay"),
		user_id: v$19.number()
	}),
	v$19.object({
		id: v$19.string(),
		type: v$19.literal("jail.release"),
		user_id: v$19.number(),
		position_after: v$19.optional(v$19.number())
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
	v$19.pipe(v$19.object({
		_id: v$19.optional(v$19.string()),
		type: v$19.literal("goToJail"),
		user_id: v$19.number()
	}), v$19.transform((value) => {
		return {
			id: value._id,
			type: "jail.put",
			user_id: value.user_id
		};
	})),
	v$19.pipe(v$19.object({
		_id: v$19.optional(v$19.string()),
		type: v$19.literal("goToJailByCombo"),
		user_id: v$19.number()
	}), v$19.transform((value) => {
		return {
			id: value._id,
			type: "jail.put.double",
			user_id: value.user_id
		};
	})),
	v$19.pipe(v$19.object({
		_id: v$19.optional(v$19.string()),
		type: v$19.literal("goToJailVisiting"),
		user_id: v$19.number()
	}), v$19.transform((value) => {
		return {
			id: value._id,
			type: "jail.visit",
			user_id: value.user_id
		};
	})),
	v$19.pipe(v$19.object({
		_id: v$19.optional(v$19.string()),
		type: v$19.literal("payForUnjail"),
		user_id: v$19.number()
	}), v$19.transform((value) => {
		return {
			id: value._id,
			type: "jail.release.pay",
			user_id: value.user_id
		};
	})),
	v$19.pipe(v$19.object({
		_id: v$19.optional(v$19.string()),
		type: v$19.literal("unjailedByFee"),
		user_id: v$19.number(),
		mean_position: v$19.optional(v$19.number())
	}), v$19.transform((value) => {
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
const valiSchemas$13 = [v$18.object({
	id: v$18.string(),
	type: v$18.literal("level.build"),
	user_id: v$18.number(),
	field_id: v$18.number()
}), v$18.object({
	id: v$18.string(),
	type: v$18.literal("level.sell"),
	user_id: v$18.number(),
	field_id: v$18.number()
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
const valiV1Schemas$13 = [v$18.pipe(v$18.object({
	_id: v$18.optional(v$18.string()),
	type: v$18.literal("levelUp"),
	user_id: v$18.number(),
	field: v$18.number()
}), v$18.transform((value) => {
	return {
		id: value._id,
		type: "level.build",
		user_id: value.user_id,
		field_id: value.field
	};
})), v$18.pipe(v$18.object({
	_id: v$18.optional(v$18.string()),
	type: v$18.literal("levelDown"),
	user_id: v$18.number(),
	field: v$18.number()
}), v$18.transform((value) => {
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
	v$17.object({
		id: v$17.string(),
		type: v$17.literal("loan.take"),
		user_id: v$17.number()
	}),
	v$17.object({
		id: v$17.string(),
		type: v$17.literal("loan.deadline"),
		user_id: v$17.number(),
		amount: v$17.number()
	}),
	v$17.object({
		id: v$17.string(),
		type: v$17.literal("loan.repay"),
		user_id: v$17.number(),
		amount: v$17.number()
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
	v$17.pipe(v$17.object({
		_id: v$17.optional(v$17.string()),
		type: v$17.literal("credit_taken"),
		user_id: v$17.number()
	}), v$17.transform((value) => {
		return {
			id: value._id,
			type: "loan.take",
			user_id: value.user_id
		};
	})),
	v$17.pipe(v$17.object({
		_id: v$17.optional(v$17.string()),
		type: v$17.literal("credit_timeToPay"),
		user_id: v$17.number(),
		sum: v$17.number()
	}), v$17.transform((value) => {
		return {
			id: value._id,
			type: "loan.deadline",
			user_id: value.user_id,
			amount: value.sum
		};
	})),
	v$17.pipe(v$17.object({
		_id: v$17.optional(v$17.string()),
		type: v$17.picklist(["credit_paid", "credit_payed"]),
		user_id: v$17.number(),
		sum: v$17.number()
	}), v$17.transform((value) => {
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
const valiSchemas$11 = [v$16.object({
	id: v$16.string(),
	type: v$16.literal("m1.move"),
	user_id: v$16.number(),
	rule: v$16.pipe(v$16.picklist([0, 1]), v$16.transform((value) => value === 0 ? "free" : "enemy_owned")),
	field_id: v$16.number(),
	move_reversed: bit(false)
}), v$16.object({
	id: v$16.string(),
	type: v$16.literal("m1.fail"),
	user_id: v$16.number()
})];
const enrichments$10 = { "m1.move"(options) {
	const player = options.status.players.get(options.event.user_id);
	player.position = options.event.field_id;
} };
const valiV1Schemas$11 = [v$16.pipe(v$16.object({
	_id: v$16.optional(v$16.string()),
	type: v$16.literal("mrMonopoly"),
	user_id: v$16.number(),
	field_type: v$16.pipe(v$16.picklist([0, 1]), v$16.transform((value) => value === 0 ? "free" : "enemy_owned")),
	field_id: v$16.number(),
	move_reverse: bit(false)
}), v$16.transform((value) => {
	return {
		id: value._id,
		type: "m1.move",
		user_id: value.user_id,
		rule: value.field_type,
		field_id: value.field_id,
		move_reversed: value.move_reverse
	};
})), v$16.pipe(v$16.object({
	_id: v$16.optional(v$16.string()),
	type: v$16.literal("mrMonopolyFailed"),
	user_id: v$16.number()
}), v$16.transform((value) => {
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
	v$15.object({
		id: v$15.string(),
		type: v$15.literal("mortgage.put"),
		user_id: v$15.number(),
		field_id: v$15.number()
	}),
	v$15.object({
		id: v$15.string(),
		type: v$15.literal("mortgage.buyback"),
		user_id: v$15.number(),
		field_id: v$15.number()
	}),
	v$15.object({
		id: v$15.string(),
		type: v$15.literal("mortgage.expire"),
		user_id: v$15.number(),
		field_id: v$15.number()
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
	v$15.pipe(v$15.object({
		_id: v$15.optional(v$15.string()),
		type: v$15.literal("mortgage"),
		user_id: v$15.number(),
		field: v$15.number()
	}), v$15.transform((value) => {
		return {
			id: value._id,
			type: "mortgage.put",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	v$15.pipe(v$15.object({
		_id: v$15.optional(v$15.string()),
		type: v$15.literal("unmortgage"),
		user_id: v$15.number(),
		field: v$15.number()
	}), v$15.transform((value) => {
		return {
			id: value._id,
			type: "mortgage.buyback",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	v$15.pipe(v$15.object({
		_id: v$15.optional(v$15.string()),
		type: v$15.literal("mortgage_limit"),
		field: v$15.number()
	}), v$15.transform((value) => {
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
const valiChanceDataSchema = v$14.union([
	v$14.strictObject({ amount: v$14.number() }),
	v$14.strictObject({
		field_id: v$14.number(),
		move_reversed: bit(false)
	}),
	v$14.undefined_()
]);
const valiSchemas$9 = [
	v$14.object({
		id: v$14.string(),
		type: v$14.literal("bankrupt"),
		user_id: v$14.number(),
		user_id_bankrupt: v$14.number()
	}),
	v$14.object({
		id: v$14.string(),
		type: v$14.literal("chance"),
		user_id: v$14.number(),
		chance_index: v$14.number(),
		data: valiChanceDataSchema
	}),
	v$14.object({
		id: v$14.string(),
		type: v$14.literal("game-over")
	}),
	v$14.object({
		id: v$14.string(),
		type: v$14.literal("leave"),
		user_id: v$14.number(),
		kicked: bit(false)
	}),
	v$14.object({
		id: v$14.string(),
		type: v$14.literal("message"),
		user_id: v$14.number(),
		private: v$14.optional(v$14.object({ user_id: v$14.optional(v$14.number()) })),
		is_forced: bit(false),
		text: v$14.string()
	}),
	v$14.object({
		id: v$14.string(),
		type: v$14.literal("restart"),
		user_id: v$14.number(),
		restart_price: v$14.number()
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
	v$14.pipe(v$14.object({
		_id: v$14.optional(v$14.string()),
		type: v$14.literal("bankrupted"),
		user_id: v$14.number(),
		to: v$14.number()
	}), v$14.transform((value) => {
		return {
			id: value._id,
			type: "bankrupt",
			user_id: value.user_id,
			user_id_bankrupt: value.to
		};
	})),
	v$14.pipe(v$14.object({
		_id: v$14.optional(v$14.string()),
		type: v$14.literal("chance"),
		user_id: v$14.number(),
		chance_id: v$14.number(),
		money: v$14.optional(v$14.number()),
		move_reverse: v$14.optional(bit(false)),
		mean_position: v$14.optional(v$14.number())
	}), v$14.transform((value) => {
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
	v$14.pipe(v$14.object({
		_id: v$14.optional(v$14.string()),
		type: v$14.literal("gameOver")
	}), v$14.transform((value) => {
		return {
			id: value._id,
			type: "game-over"
		};
	})),
	v$14.pipe(v$14.object({
		_id: v$14.optional(v$14.string()),
		type: v$14.literal("leave"),
		user_id: v$14.number(),
		is_kicked: bit(false)
	}), v$14.transform((value) => {
		return {
			id: value._id,
			type: "leave",
			user_id: value.user_id,
			kicked: value.is_kicked
		};
	})),
	v$14.pipe(v$14.object({
		_id: v$14.optional(v$14.string()),
		type: v$14.literal("message"),
		user_id: v$14.number(),
		private: v$14.optional(v$14.object({
			user: v$14.optional(v$14.number()),
			team: v$14.optional(v$14.unknown())
		})),
		forced: bit(false),
		text: v$14.string(),
		is_unsafe: bit(false)
	}), v$14.transform((value) => {
		return {
			id: value._id,
			type: "message",
			user_id: value.user_id,
			private: value.private ? { user_id: value.private.user } : void 0,
			is_forced: value.forced,
			text: value.is_unsafe ? value.text : unescapeHtml(value.text)
		};
	})),
	v$14.pipe(v$14.object({
		_id: v$14.optional(v$14.string()),
		type: v$14.literal("restart"),
		user_id: v$14.number(),
		money: v$14.number()
	}), v$14.transform((value) => {
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
const valiSchemas$8 = [v$13.object({
	id: v$13.string(),
	type: v$13.literal("pause.set")
}), v$13.object({
	id: v$13.string(),
	type: v$13.literal("pause.end")
})];
const valiV1Schemas$8 = [v$13.pipe(v$13.object({
	_id: v$13.optional(v$13.string()),
	type: v$13.literal("pauseActive")
}), v$13.transform((value) => {
	return {
		id: value._id,
		type: "pause.set"
	};
})), v$13.pipe(v$13.object({
	_id: v$13.optional(v$13.string()),
	type: v$13.literal("pauseRemoved")
}), v$13.transform((value) => {
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
	v$12.object({
		id: v$12.string(),
		type: v$12.literal("purchase.offer"),
		user_id: v$12.number(),
		field_id: v$12.number()
	}),
	v$12.object({
		id: v$12.string(),
		type: v$12.literal("purchase"),
		user_id: v$12.number(),
		field_id: v$12.number(),
		price: v$12.number()
	}),
	v$12.object({
		id: v$12.string(),
		type: v$12.literal("purchase.reject"),
		user_id: v$12.number(),
		field_id: v$12.number()
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
	v$12.pipe(v$12.object({
		_id: v$12.optional(v$12.string()),
		type: v$12.literal("canBuy"),
		user_id: v$12.number(),
		field: v$12.number()
	}), v$12.transform((value) => {
		return {
			id: value._id,
			type: "purchase.offer",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	v$12.pipe(v$12.object({
		_id: v$12.optional(v$12.string()),
		type: v$12.literal("buy"),
		user_id: v$12.number(),
		field: v$12.number(),
		money: v$12.number()
	}), v$12.transform((value) => {
		return {
			id: value._id,
			type: "purchase",
			user_id: value.user_id,
			field_id: value.field,
			price: value.money
		};
	})),
	v$12.pipe(v$12.object({
		_id: v$12.optional(v$12.string()),
		type: v$12.literal("noBuy"),
		user_id: v$12.number(),
		field: v$12.number()
	}), v$12.transform((value) => {
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
	v$11.object({
		id: v$11.string(),
		type: v$11.literal("rent.pay"),
		user_id: v$11.number(),
		field_id: v$11.number(),
		amount: v$11.number()
	}),
	v$11.object({
		id: v$11.string(),
		type: v$11.literal("rent.pay.complete"),
		user_id: v$11.number(),
		field_id: v$11.number(),
		amount: v$11.number()
	}),
	v$11.object({
		id: v$11.string(),
		type: v$11.literal("rent.pay.cancel"),
		user_id: v$11.number(),
		user_id_receiver: v$11.number()
	}),
	v$11.object({
		id: v$11.string(),
		type: v$11.literal("rent.zero"),
		user_id: v$11.number(),
		field_id: v$11.number()
	}),
	v$11.object({
		id: v$11.string(),
		type: v$11.literal("rent.zero.self"),
		user_id: v$11.number(),
		field_id: v$11.number()
	}),
	v$11.object({
		id: v$11.string(),
		type: v$11.literal("rent.zero.teammate"),
		user_id: v$11.number(),
		field_id: v$11.number()
	}),
	v$11.object({
		id: v$11.string(),
		type: v$11.literal("rent.zero.mortgaged"),
		user_id: v$11.number(),
		field_id: v$11.number()
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
	v$11.pipe(v$11.object({
		_id: v$11.optional(v$11.string()),
		type: v$11.literal("payRent"),
		user_id: v$11.number(),
		field: v$11.number(),
		money: v$11.number()
	}), v$11.transform((value) => {
		return {
			id: value._id,
			type: "rent.pay",
			user_id: value.user_id,
			field_id: value.field,
			amount: value.money
		};
	})),
	v$11.pipe(v$11.object({
		_id: v$11.optional(v$11.string()),
		type: v$11.literal("payRentSuccess"),
		user_id: v$11.number(),
		field: v$11.number(),
		money: v$11.number()
	}), v$11.transform((value) => {
		return {
			id: value._id,
			type: "rent.pay.complete",
			user_id: value.user_id,
			field_id: value.field,
			amount: value.money
		};
	})),
	v$11.pipe(v$11.object({
		_id: v$11.optional(v$11.string()),
		type: v$11.literal("payRentFail"),
		user_id: v$11.number(),
		to: v$11.number()
	}), v$11.transform((value) => {
		return {
			id: value._id,
			type: "rent.pay.cancel",
			user_id: value.user_id,
			user_id_receiver: value.to
		};
	})),
	v$11.pipe(v$11.object({
		_id: v$11.optional(v$11.string()),
		type: v$11.literal("payRentZero"),
		user_id: v$11.number(),
		field: v$11.number()
	}), v$11.transform((value) => {
		return {
			id: value._id,
			type: "rent.zero",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	v$11.pipe(v$11.object({
		_id: v$11.optional(v$11.string()),
		type: v$11.literal("payRentToSelf"),
		user_id: v$11.number(),
		field: v$11.number()
	}), v$11.transform((value) => {
		return {
			id: value._id,
			type: "rent.zero.self",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	v$11.pipe(v$11.object({
		_id: v$11.optional(v$11.string()),
		type: v$11.literal("payRentToTeammate"),
		user_id: v$11.number(),
		field: v$11.number()
	}), v$11.transform((value) => {
		return {
			id: value._id,
			type: "rent.zero.teammate",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	v$11.pipe(v$11.object({
		_id: v$11.optional(v$11.string()),
		type: v$11.literal("payRentCancelledMortgaged"),
		user_id: v$11.number(),
		field: v$11.number()
	}), v$11.transform((value) => {
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
	v$10.object({
		id: v$10.string(),
		type: v$10.literal("roll-dices"),
		user_id: v$10.number(),
		dices: v$10.tuple([
			v$10.number(),
			v$10.optional(v$10.number()),
			v$10.optional(v$10.number())
		]),
		move_reversed: bit(false),
		double_spent: bit(false)
	}),
	v$10.object({
		id: v$10.string(),
		type: v$10.literal("roll-dices.jail.success"),
		user_id: v$10.number()
	}),
	v$10.object({
		id: v$10.string(),
		type: v$10.literal("roll-dices.jail.fail"),
		user_id: v$10.number()
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
	v$10.pipe(v$10.object({
		_id: v$10.optional(v$10.string()),
		type: v$10.literal("rollDices"),
		user_id: v$10.number(),
		dices: v$10.tuple([
			v$10.number(),
			v$10.optional(v$10.number()),
			v$10.optional(v$10.number())
		]),
		move_reverse: bit(false)
	}), v$10.transform((value) => {
		return {
			id: value._id,
			type: "roll-dices",
			user_id: value.user_id,
			dices: value.dices,
			move_reversed: value.move_reverse,
			double_spent: false
		};
	})),
	v$10.pipe(v$10.object({
		_id: v$10.optional(v$10.string()),
		type: v$10.literal("double_spended")
	}), v$10.transform((value) => {
		return {
			id: value._id,
			type: value.type
		};
	})),
	v$10.pipe(v$10.object({
		_id: v$10.optional(v$10.string()),
		type: v$10.literal("rollDicesForUnjailSuccess"),
		user_id: v$10.number()
	}), v$10.transform((value) => {
		return {
			id: value._id,
			type: "roll-dices.jail.success",
			user_id: value.user_id
		};
	})),
	v$10.pipe(v$10.object({
		_id: v$10.optional(v$10.string()),
		type: v$10.literal("rollDicesForUnjailFail"),
		user_id: v$10.number()
	}), v$10.transform((value) => {
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
const valiSchemas$4 = [v$9.object({
	id: v$9.string(),
	type: v$9.literal("start.income"),
	user_id: v$9.number()
}), v$9.object({
	id: v$9.string(),
	type: v$9.literal("start.bonus"),
	user_id: v$9.number()
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
const valiV1Schemas$4 = [v$9.pipe(v$9.object({
	_id: v$9.optional(v$9.string()),
	type: v$9.literal("startBypass"),
	user_id: v$9.number()
}), v$9.transform((value) => {
	return {
		id: value._id,
		type: "start.income",
		user_id: value.user_id
	};
})), v$9.pipe(v$9.object({
	_id: v$9.optional(v$9.string()),
	type: v$9.literal("start_bonus"),
	user_id: v$9.number()
}), v$9.transform((value) => {
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
const valiSchemas$3 = [v$8.object({
	id: v$8.string(),
	type: v$8.literal("tournament.drop"),
	user_ids: v$8.array(v$8.number())
})];
const enrichments$3 = {};
const valiV1Schemas$3 = [v$8.pipe(v$8.object({
	_id: v$8.optional(v$8.string()),
	type: v$8.literal("tournament_drop"),
	user_id: v$8.number()
}), v$8.transform((value) => {
	return {
		id: value._id,
		type: "tournament.drop",
		user_ids: [value.user_id]
	};
})), v$8.pipe(v$8.object({
	_id: v$8.optional(v$8.string()),
	type: v$8.literal("tournament_drop_multi"),
	user_ids: v$8.array(v$8.number())
}), v$8.transform((value) => {
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
const valiSchemas$2 = [v$7.object({
	id: v$7.string(),
	type: v$7.literal("triple"),
	user_id: v$7.number()
}), v$7.object({
	id: v$7.string(),
	type: v$7.literal("triple.move"),
	user_id: v$7.number(),
	field_id: v$7.number(),
	move_reversed: bit(false)
})];
const enrichments$2 = { "triple.move"(options) {
	const player = options.status.players.get(options.event.user_id);
	player.position = options.event.field_id;
} };
const valiV1Schemas$2 = [v$7.pipe(v$7.object({
	_id: v$7.optional(v$7.string()),
	type: v$7.literal("chooseFieldToMove"),
	user_id: v$7.number()
}), v$7.transform((value) => {
	return {
		id: value._id,
		type: "triple",
		user_id: value.user_id
	};
})), v$7.pipe(v$7.object({
	_id: v$7.optional(v$7.string()),
	type: v$7.literal("fieldToMoveChoosed"),
	user_id: v$7.number(),
	field_id: v$7.number(),
	move_reverse: bit(false)
}), v$7.transform((value) => {
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
	v$6.object({
		id: v$6.string(),
		type: v$6.literal("wormhole"),
		user_id: v$6.number()
	}),
	v$6.object({
		id: v$6.string(),
		type: v$6.literal("wormhole.open"),
		user_id: v$6.number(),
		exits_count: v$6.number()
	}),
	v$6.object({
		id: v$6.string(),
		type: v$6.literal("wormhole.reject"),
		user_id: v$6.number()
	}),
	v$6.object({
		id: v$6.string(),
		type: v$6.literal("wormhole.move"),
		user_id: v$6.number(),
		field_id: v$6.number(),
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
	v$6.pipe(v$6.object({
		_id: v$6.optional(v$6.string()),
		type: v$6.literal("wormhole"),
		user_id: v$6.number()
	}), v$6.transform((value) => {
		return {
			id: value._id,
			type: "wormhole",
			user_id: value.user_id
		};
	})),
	v$6.pipe(v$6.object({
		_id: v$6.optional(v$6.string()),
		type: v$6.literal("wormhole_opened"),
		user_id: v$6.number(),
		destinations_count: v$6.number()
	}), v$6.transform((value) => {
		return {
			id: value._id,
			type: "wormhole.open",
			user_id: value.user_id,
			exits_count: value.destinations_count
		};
	})),
	v$6.pipe(v$6.object({
		_id: v$6.optional(v$6.string()),
		type: v$6.literal("wormhole_declined"),
		user_id: v$6.number()
	}), v$6.transform((value) => {
		return {
			id: value._id,
			type: "wormhole.reject",
			user_id: value.user_id
		};
	})),
	v$6.pipe(v$6.object({
		_id: v$6.optional(v$6.string()),
		type: v$6.literal("wormhole_used"),
		user_id: v$6.number(),
		field_id: v$6.number(),
		move_reverse: bit(false)
	}), v$6.transform((value) => {
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
const valiRecordParser = v$5.safeParser(v$5.record(v$5.string(), v$5.unknown()));
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
const valiM1DemoRawPacketEventsSchema = v$4.array(v$4.union([...valiSchemas, v$4.pipe(v$4.object({
	id: v$4.string(),
	type: v$4.string()
}), v$4.transform(({ type,...value_rest }) => {
	return {
		type: "_unknown",
		type_received: type,
		...value_rest
	};
}))]));
const valiM1DemoRawPacketV1EventElementSchema = v$4.union([...valiV1Schemas, v$4.pipe(v$4.object({
	_id: v$4.optional(v$4.string()),
	type: v$4.string()
}), v$4.transform(({ _id, type,...value_rest }) => {
	return {
		id: _id,
		type: "_unknown",
		type_received: type,
		...value_rest
	};
}))]);
const valiM1DemoRawPacketV1EventsSchema = v$4.pipe(v$4.union([v$4.array(valiM1DemoRawPacketV1EventElementSchema), v$4.record(v$4.string(), valiM1DemoRawPacketV1EventElementSchema)]), v$4.transform((value) => {
	if (isRecord(value)) return Object.entries(value).map(([_id, event]) => {
		return {
			_id,
			...event
		};
	});
	return value;
}), v$4.transform((value) => {
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
const valiM1DemoPacketSetupPlayerSchema = v$3.pipe(v$3.object({
	user_id: v$3.number(),
	is_vip: bit(false),
	is_loan_available: bit(false),
	equipment: v$3.object({ cards: v$3.pipe(v$3.array(v$3.object({
		field_id: v$3.number(),
		item_proto_id: v$3.number(),
		item_id: v$3.optional(v$3.number()),
		rent_multiplier: v$3.number()
	})), v$3.transform((value) => new Map(value.map((card) => [card.field_id, card])))) })
}), v$3.transform((value) => {
	return {
		...value,
		index: -1
	};
}));

//#endregion
//#region src/packet/setup.ts
const valiM1DemoPacketSetupSchema = v$2.object({
	config: valiM1DemoPacketSetupConfigSchema,
	flags: v$2.object({
		game_mode: v$2.number(),
		game_submode: v$2.number(),
		game_2x2: bit(false)
	}),
	players: v$2.pipe(v$2.array(valiM1DemoPacketSetupPlayerSchema), v$2.transform((value) => {
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
const valiM1DemoPacketTimeSchema = v$1.pipe(v$1.object({
	ts_start: v$1.number(),
	ts_now: v$1.number(),
	inactive: v$1.number(),
	ts_inactive: v$1.optional(v$1.number())
}), v$1.transform((value) => {
	return {
		...value,
		delta: Date.now() - value.ts_now
	};
}));
const valiM1DemoPacketV1TimeSchema = v$1.union([
	v$1.object({ time: valiM1DemoPacketTimeSchema }),
	v$1.pipe(v$1.object({ status: v$1.optional(v$1.object({ time: valiM1DemoPacketTimeSchema })) }), v$1.transform((value) => {
		if (!value.status) {
			console.error("There is no time in the packet.", value);
			throw new Error("There is no time in the packet.");
		}
		return { time: value.status.time };
	})),
	v$1.pipe(v$1.object({
		current_time: v$1.number(),
		game_started: v$1.optional(v$1.number()),
		ts_start: v$1.optional(v$1.number()),
		status: v$1.optional(v$1.object({ pause_data: v$1.optional(v$1.object({
			total_time: v$1.number(),
			is_active: v$1.boolean(),
			pause_started_at: v$1.optional(v$1.number())
		})) }))
	}), v$1.transform((value) => {
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
const valiM1DemoRawPacketSchema = v.object({
	setup: v.optional(valiM1DemoPacketSetupSchema),
	events: valiM1DemoRawPacketEventsSchema,
	status: v.optional(valiM1DemoPacketStatusSchema),
	time: valiM1DemoPacketTimeSchema
});
const valiM1DemoRawPacketV1Schema = v.intersect([valiM1DemoPacketV1TimeSchema, v.pipe(v.object({
	config: v.optional(valiM1DemoPacketV1ConfigSchema),
	flags: v.optional(v.object({
		game_mode: v.number(),
		game_submode: v.number(),
		game_2x2: bit(false)
	})),
	events: valiM1DemoRawPacketV1EventsSchema,
	status: v.optional(valiM1DemoPacketV1StatusSchema)
}), v.transform((value) => {
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