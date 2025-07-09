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
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("auction.put"),
		user_id: (0, valibot.number)(),
		field_id: (0, valibot.number)(),
		bid: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("auction.bid"),
		user_id: (0, valibot.number)(),
		bid: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("auction.reject"),
		user_id: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("auction.win"),
		user_id: (0, valibot.number)(),
		field_id: (0, valibot.number)(),
		user_id_seller: (0, valibot.optional)((0, valibot.number)()),
		price: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("auction.cancel"),
		field_id: (0, valibot.number)(),
		user_id_seller: (0, valibot.optional)((0, valibot.number)()),
		price: (0, valibot.optional)((0, valibot.number)())
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
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("toAuction"),
		user_id: (0, valibot.number)(),
		field: (0, valibot.number)(),
		bet: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "auction.put",
			user_id: value.user_id,
			field_id: value.field,
			bid: value.bet
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("auctionAccept"),
		user_id: (0, valibot.number)(),
		bet: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "auction.bid",
			user_id: value.user_id,
			bid: value.bet
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("auctionDecline"),
		user_id: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "auction.reject",
			user_id: value.user_id
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("auctionWinner"),
		user_id: (0, valibot.number)(),
		user_id_seller: (0, valibot.optional)((0, valibot.number)()),
		field: (0, valibot.number)(),
		money: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "auction.win",
			user_id: value.user_id,
			field_id: value.field,
			user_id_seller: value.user_id_seller,
			price: value.money
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("auctionFail"),
		field: (0, valibot.number)(),
		user_id_seller: (0, valibot.optional)((0, valibot.number)()),
		money: (0, valibot.optional)((0, valibot.number)())
	}), (0, valibot.transform)((value) => {
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
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("bank.income"),
		user_id: (0, valibot.number)(),
		amount: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("bank.fee"),
		user_id: (0, valibot.number)(),
		amount: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("bank.fee.pay"),
		user_id: (0, valibot.number)(),
		amount: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("bank.return"),
		user_id: (0, valibot.number)(),
		amount: (0, valibot.number)()
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
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("cash_plus"),
		user_id: (0, valibot.number)(),
		money: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "bank.income",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.picklist)([
			"cash_minus",
			"tax_income",
			"tax_luxury"
		]),
		user_id: (0, valibot.number)(),
		money: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "bank.fee",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("feePaid"),
		user_id: (0, valibot.number)(),
		money: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "bank.fee.pay",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("insuranceReturn"),
		user_id: (0, valibot.number)(),
		money: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
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
const valiSchemas$17 = [(0, valibot.object)({
	id: (0, valibot.string)(),
	type: (0, valibot.literal)("bus.select"),
	user_id: (0, valibot.number)(),
	field_ids_move: (0, valibot.pipe)((0, valibot.array)((0, valibot.number)()), (0, valibot.transform)((value) => new Set(value)))
}), (0, valibot.object)({
	id: (0, valibot.string)(),
	type: (0, valibot.literal)("bus.move"),
	user_id: (0, valibot.number)(),
	selection: (0, valibot.object)({
		stop_id: (0, valibot.picklist)([
			0,
			1,
			-1
		]),
		field_id: (0, valibot.number)(),
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
const valiV1Schemas$17 = [(0, valibot.pipe)((0, valibot.object)({
	_id: (0, valibot.optional)((0, valibot.string)()),
	type: (0, valibot.literal)("chooseBusStop"),
	user_id: (0, valibot.number)()
}), (0, valibot.transform)((value) => {
	return {
		id: value._id,
		type: "bus.select",
		user_id: value.user_id,
		field_ids_move: new Set()
	};
})), (0, valibot.pipe)((0, valibot.object)({
	_id: (0, valibot.optional)((0, valibot.string)()),
	type: (0, valibot.literal)("busStopChoosed"),
	user_id: (0, valibot.number)(),
	stop: (0, valibot.picklist)([
		0,
		1,
		-1
	]),
	mean_position: (0, valibot.number)(),
	move_reverse: bit(false),
	auto_selected: bit(false)
}), (0, valibot.transform)((value) => {
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
const valiM1DemoContractSchema = (0, valibot.pipe)((0, valibot.tuple)([(0, valibot.object)({
	user_id: (0, valibot.number)(),
	field_ids: (0, valibot.array)((0, valibot.number)()),
	cash: (0, valibot.number)()
}), (0, valibot.object)({
	user_id: (0, valibot.number)(),
	field_ids: (0, valibot.array)((0, valibot.number)()),
	cash: (0, valibot.number)()
})]), (0, valibot.transform)(([initiator, responder]) => {
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
const valiM1DemoPacketStatusTurnSchema = (0, valibot.object)({
	user_id: (0, valibot.nullable)((0, valibot.number)()),
	action: (0, valibot.object)({
		user_id: (0, valibot.nullable)((0, valibot.number)()),
		list: (0, valibot.pipe)((0, valibot.array)((0, valibot.picklist)([
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
		])), (0, valibot.transform)((value) => new Set(value)))
	}),
	move_reversed: bit(false),
	auction: (0, valibot.optional)((0, valibot.object)({
		field_id: (0, valibot.number)(),
		bid: (0, valibot.number)(),
		user_ids_rejected: (0, valibot.pipe)((0, valibot.array)((0, valibot.number)()), (0, valibot.transform)((value) => new Set(value)))
	})),
	contract: (0, valibot.optional)(valiM1DemoContractSchema),
	contracts_sent: (0, valibot.optional)((0, valibot.number)()),
	jackpot: (0, valibot.optional)((0, valibot.object)({ superprize: (0, valibot.number)() })),
	payment: (0, valibot.optional)((0, valibot.object)({
		to_user_id: (0, valibot.optional)((0, valibot.number)()),
		amount: (0, valibot.number)()
	})),
	field_ids_move: (0, valibot.optional)((0, valibot.pipe)((0, valibot.array)((0, valibot.object)({
		field_id: (0, valibot.number)(),
		data: (0, valibot.union)([(0, valibot.object)({ stop: (0, valibot.number)() }), (0, valibot.object)({ field_id: (0, valibot.number)() })])
	})), (0, valibot.transform)((value) => new Map(value.map((item) => [item.field_id, item.data]))))),
	field_ids_level_built: (0, valibot.optional)((0, valibot.pipe)((0, valibot.array)((0, valibot.number)()), (0, valibot.transform)((value) => new Set(value)))),
	field_ids_mortgaged: (0, valibot.optional)((0, valibot.pipe)((0, valibot.array)((0, valibot.number)()), (0, valibot.transform)((value) => new Set(value))))
});

//#endregion
//#region src/packet/status/fields.ts
const valiM1DemoPacketStatusFieldsSchema = (0, valibot.pipe)((0, valibot.array)((0, valibot.pipe)((0, valibot.object)({
	field_id: (0, valibot.number)(),
	owner_user_id: (0, valibot.number)(),
	level: (0, valibot.number)(),
	mortgage: (0, valibot.optional)((0, valibot.object)({ round_until: (0, valibot.optional)((0, valibot.number)()) }))
}), (0, valibot.transform)((value) => value))), (0, valibot.transform)((value) => new Map(value.map((field) => [field.field_id, field]))));
const valiM1DemoPacketV1StatusFieldsSchema = (0, valibot.pipe)((0, valibot.record)((0, valibot.string)(), (0, valibot.object)({
	owner: (0, valibot.number)(),
	level: (0, valibot.number)(),
	mortgaged: (0, valibot.boolean)(),
	mortgage_lose_round: (0, valibot.optional)((0, valibot.number)())
})), (0, valibot.transform)((value) => new Map(Object.entries(value).map(([field_id_string, field]) => {
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
const valiM1DemoPacketSetupConfigMechanicsChanceSchema = (0, valibot.strictObject)({ cards: (0, valibot.array)((0, valibot.union)([
	(0, valibot.strictObject)({
		type: (0, valibot.literal)("income"),
		text_id: (0, valibot.number)(),
		range: (0, valibot.strictObject)({
			min: (0, valibot.number)(),
			max: (0, valibot.number)(),
			step: (0, valibot.number)()
		})
	}),
	(0, valibot.strictObject)({
		type: (0, valibot.literal)("expense"),
		text_id: (0, valibot.number)(),
		range: (0, valibot.strictObject)({
			min: (0, valibot.number)(),
			max: (0, valibot.number)(),
			step: (0, valibot.number)()
		})
	}),
	(0, valibot.strictObject)({
		type: (0, valibot.literal)("repair"),
		text_id: (0, valibot.number)(),
		cost: (0, valibot.strictObject)({
			small: (0, valibot.number)(),
			big: (0, valibot.number)()
		})
	}),
	(0, valibot.strictObject)({
		type: (0, valibot.literal)("go-to-jail"),
		text_id: (0, valibot.number)()
	}),
	(0, valibot.strictObject)({
		type: (0, valibot.literal)("teleport"),
		text_id: (0, valibot.number)()
	}),
	(0, valibot.strictObject)({
		type: (0, valibot.literal)("skip-move"),
		text_id: (0, valibot.number)()
	}),
	(0, valibot.strictObject)({
		type: (0, valibot.literal)("insurance"),
		text_id: (0, valibot.number)(),
		price: (0, valibot.number)()
	}),
	(0, valibot.strictObject)({
		type: (0, valibot.literal)("birthday"),
		text_id: (0, valibot.number)(),
		amount: (0, valibot.number)()
	}),
	(0, valibot.strictObject)({
		type: (0, valibot.literal)("reverse"),
		text_id: (0, valibot.number)()
	}),
	(0, valibot.strictObject)({
		type: (0, valibot.literal)("disaster"),
		text_id: (0, valibot.number)()
	})
])) });
const valiM1DemoPacketV1ConfigChanceCardsSchema = (0, valibot.pipe)((0, valibot.array)((0, valibot.union)([
	(0, valibot.strictObject)({
		type: (0, valibot.literal)("cash_in"),
		text: (0, valibot.string)(),
		range: (0, valibot.tuple)([(0, valibot.number)(), (0, valibot.number)()]),
		rangeStep: (0, valibot.number)()
	}),
	(0, valibot.strictObject)({
		type: (0, valibot.literal)("cash_out"),
		text: (0, valibot.string)(),
		range: (0, valibot.tuple)([(0, valibot.number)(), (0, valibot.number)()]),
		rangeStep: (0, valibot.number)()
	}),
	(0, valibot.strictObject)({
		type: (0, valibot.literal)("repair"),
		text: (0, valibot.string)(),
		costs: (0, valibot.tuple)([(0, valibot.number)(), (0, valibot.number)()])
	}),
	(0, valibot.strictObject)({
		type: (0, valibot.literal)("jail"),
		text: (0, valibot.string)()
	}),
	(0, valibot.strictObject)({
		type: (0, valibot.literal)("teleport"),
		text: (0, valibot.string)()
	}),
	(0, valibot.strictObject)({
		type: (0, valibot.literal)("move_skip"),
		text: (0, valibot.string)()
	}),
	(0, valibot.strictObject)({
		type: (0, valibot.literal)("insurance"),
		text: (0, valibot.string)(),
		sum: (0, valibot.number)()
	}),
	(0, valibot.strictObject)({
		type: (0, valibot.literal)("birthday"),
		text: (0, valibot.string)(),
		sum: (0, valibot.number)()
	}),
	(0, valibot.strictObject)({
		type: (0, valibot.literal)("reverse"),
		text: (0, valibot.string)()
	}),
	(0, valibot.strictObject)({
		type: (0, valibot.literal)("fields_disaster"),
		text: (0, valibot.string)()
	})
])), (0, valibot.transform)((value) => {
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
const valiM1DemoPacketSetupConfigFieldsSchema = (0, valibot.pipe)((0, valibot.array)((0, valibot.union)([
	(0, valibot.object)({
		is_corner: (0, valibot.pipe)((0, valibot.literal)(1), (0, valibot.transform)(() => true)),
		type: (0, valibot.picklist)(["start", "jail"])
	}),
	(0, valibot.object)({
		is_corner: bit(false),
		type: (0, valibot.picklist)([
			"chance",
			"jackpot",
			"jail.goto",
			"tax.income",
			"tax.luxury",
			"wormhole"
		])
	}),
	(0, valibot.object)({
		is_corner: (0, valibot.pipe)((0, valibot.undefined_)(), (0, valibot.transform)(() => false)),
		type: (0, valibot.literal)("company"),
		monopoly_id: (0, valibot.number)(),
		is_last: bit(false)
	})
])), (0, valibot.transform)((value) => {
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
const valiM1DemoPacketV1ConfigFieldsSchema = (0, valibot.pipe)((0, valibot.array)(
	(0, valibot.variant)("type", [
		(0, valibot.object)({
			design: (0, valibot.literal)("corner"),
			type: (0, valibot.literal)("start")
		}),
		(0, valibot.object)({
			design: (0, valibot.literal)("corner"),
			type: (0, valibot.literal)("jail")
		}),
		(0, valibot.object)({
			design: (0, valibot.optional)((0, valibot.literal)("corner")),
			type: (0, valibot.literal)("special"),
			action: (0, valibot.picklist)([
				"chance",
				"goToJail",
				"jackpot",
				"tax_income",
				"tax_luxury",
				"wormhole"
			])
		}),
		(0, valibot.object)({
			design: (0, valibot.exactOptional)((0, valibot.never)()),
			type: (0, valibot.literal)("field"),
			group: (0, valibot.number)(),
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
), (0, valibot.transform)((value) => {
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
const valiM1DemoPacketSetupConfigMonopoliesSchema = (0, valibot.pipe)((0, valibot.record)((0, valibot.string)(), (0, valibot.union)([
	(0, valibot.object)({
		buy_price: (0, valibot.number)(),
		rent_by_level: (0, valibot.array)((0, valibot.number)()),
		level_cost: (0, valibot.number)(),
		last_field: (0, valibot.optional)((0, valibot.object)({
			buy_price: (0, valibot.number)(),
			rent_by_level: (0, valibot.array)((0, valibot.number)())
		}))
	}),
	(0, valibot.object)({
		buy_price: (0, valibot.number)(),
		rent_by_count: (0, valibot.array)((0, valibot.number)())
	}),
	(0, valibot.object)({
		buy_price: (0, valibot.number)(),
		dice_multipliers: (0, valibot.array)((0, valibot.number)())
	})
])), (0, valibot.transform)((value) => new Map(Object.entries(value).map(([monopoly_id, monopoly]) => [Number(monopoly_id), monopoly]))));
const valiM1DemoPacketV1ConfigGroupsSchema = (0, valibot.pipe)((0, valibot.record)((0, valibot.string)(), (0, valibot.union)([
	(0, valibot.object)({
		buy: (0, valibot.number)(),
		levels: (0, valibot.array)((0, valibot.number)()),
		buy_last: (0, valibot.optional)((0, valibot.number)()),
		levels_last: (0, valibot.optional)((0, valibot.array)((0, valibot.number)())),
		levelUpCost: (0, valibot.number)()
	}),
	(0, valibot.object)({
		buy: (0, valibot.number)(),
		levels: (0, valibot.array)((0, valibot.number)()),
		levelUpCost: (0, valibot.literal)(false)
	}),
	(0, valibot.object)({
		buy: (0, valibot.number)(),
		levels: (0, valibot.literal)(false),
		coeffs: (0, valibot.array)((0, valibot.number)()),
		levelUpCost: (0, valibot.literal)(false)
	})
])), (0, valibot.transform)((value) => new Map(Object.entries(value).map(([monopoly_id_string, group]) => {
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
const valiM1DemoPacketSetipConfigRestartVariantSchema = (0, valibot.object)({
	round_from: (0, valibot.number)(),
	round_to: (0, valibot.number)(),
	count: (0, valibot.number)(),
	price: (0, valibot.number)()
});
const valiM1DemoPacketSetupConfigSchema = (0, valibot.object)({
	version: (0, valibot.number)(),
	board_size: (0, valibot.tuple)([(0, valibot.number)(), (0, valibot.number)()]),
	timers: (0, valibot.object)({ roll_dices: (0, valibot.number)() }),
	fields: valiM1DemoPacketSetupConfigFieldsSchema,
	monopolies: valiM1DemoPacketSetupConfigMonopoliesSchema,
	mechanics: (0, valibot.object)({
		auction: (0, valibot.optional)((0, valibot.object)({ bid_increment: (0, valibot.number)() })),
		chance: (0, valibot.optional)(valiM1DemoPacketSetupConfigMechanicsChanceSchema),
		field_level: (0, valibot.optional)((0, valibot.object)({
			sell_multiplier: (0, valibot.optional)((0, valibot.number)(), 1),
			build_uneven: bit(false),
			build_without_monopoly: bit(false)
		})),
		jackpot: (0, valibot.optional)((0, valibot.object)({
			bet: (0, valibot.number)(),
			multipliers: (0, valibot.array)((0, valibot.number)()),
			superprize: (0, valibot.object)({ chance: (0, valibot.number)() })
		})),
		jail: (0, valibot.object)({
			release_fee: (0, valibot.number)(),
			double_roll_attempt_limit: (0, valibot.optional)((0, valibot.number)(), 3)
		}),
		loan: (0, valibot.optional)((0, valibot.object)({
			amount: (0, valibot.number)(),
			repay_multiplier: (0, valibot.number)(),
			duration: (0, valibot.number)(),
			cooldown: (0, valibot.object)({
				match_start: (0, valibot.number)(),
				repay: (0, valibot.number)()
			})
		})),
		mortgage: (0, valibot.optional)((0, valibot.object)({
			duration: (0, valibot.optional)((0, valibot.number)()),
			multiplier: (0, valibot.number)(),
			buyback_multiplier: (0, valibot.number)(),
			auction_multiplier: (0, valibot.optional)((0, valibot.number)())
		})),
		restart: (0, valibot.optional)((0, valibot.object)({ variants: (0, valibot.array)(valiM1DemoPacketSetipConfigRestartVariantSchema) })),
		start: (0, valibot.object)({
			income_amount: (0, valibot.number)(),
			bonus_amount: (0, valibot.optional)((0, valibot.number)(), 0)
		}),
		time_rules: (0, valibot.array)((0, valibot.union)([
			(0, valibot.object)({
				type: (0, valibot.literal)("start.none"),
				time: (0, valibot.number)()
			}),
			(0, valibot.object)({
				type: (0, valibot.literal)("start.tax"),
				time: (0, valibot.number)(),
				sum: (0, valibot.number)()
			}),
			(0, valibot.object)({
				type: (0, valibot.literal)("rent.tax"),
				time: (0, valibot.number)(),
				rate: (0, valibot.number)()
			})
		])),
		wormhole: (0, valibot.optional)((0, valibot.object)({
			exits_free_count: (0, valibot.optional)((0, valibot.number)(), 3),
			exits_extra_price: (0, valibot.number)(),
			move_direct: bit(false)
		}))
	})
});
const valiM1DemoPacketV1ConfigSchema = (0, valibot.pipe)(
	(0, valibot.object)({
		version: (0, valibot.number)(),
		size: (0, valibot.tuple)([(0, valibot.number)(), (0, valibot.number)()]),
		fields: valiM1DemoPacketV1ConfigFieldsSchema,
		groups: valiM1DemoPacketV1ConfigGroupsSchema,
		TIME_FOR_ROLL_DICES: (0, valibot.number)(),
		AUCTION_BET_STEP: (0, valibot.optional)((0, valibot.number)()),
		chance_cards: (0, valibot.optional)(valiM1DemoPacketV1ConfigChanceCardsSchema),
		coeff_level_down: (0, valibot.optional)((0, valibot.number)(), 1),
		UNEVEN_LEVEL_CHANGE: bit(false),
		LEVEL_CHANGE_NO_MNPL: bit(false),
		JACKPOT_BET: (0, valibot.optional)((0, valibot.number)()),
		JACKPOT_COEFFS: (0, valibot.optional)((0, valibot.array)((0, valibot.number)())),
		JACKPOT_SUPERPRIZE_CHANCE: (0, valibot.optional)((0, valibot.number)()),
		jailFee: (0, valibot.number)(),
		UNJAIL_TRIES_LIMIT: (0, valibot.optional)((0, valibot.number)(), 3),
		CREDIT_SUM: (0, valibot.optional)((0, valibot.number)()),
		CREDIT_INTEREST: (0, valibot.optional)((0, valibot.number)()),
		CREDIT_PERCENT: (0, valibot.optional)((0, valibot.number)()),
		CREDIT_ROUNDS: (0, valibot.optional)((0, valibot.number)()),
		CREDIT_COOLDOWN_ROUNDS: (0, valibot.optional)((0, valibot.number)()),
		START_CREDIT_COOLDOWN_ROUNDS: (0, valibot.optional)((0, valibot.number)()),
		MORTGAGE_ROUND_LIMIT: (0, valibot.optional)((0, valibot.number)()),
		coeff_mortgage: (0, valibot.number)(),
		coeff_unmortgage: (0, valibot.number)(),
		auction_mortgaged: (0, valibot.optional)((0, valibot.number)()),
		restart_variants: (0, valibot.optional)((0, valibot.array)(valiM1DemoPacketSetipConfigRestartVariantSchema)),
		roundCash: (0, valibot.number)(),
		START_BONUS_SUM: (0, valibot.optional)((0, valibot.number)(), 0),
		roundTaxes: (0, valibot.array)((0, valibot.object)({
			game_time: (0, valibot.number)(),
			tax: (0, valibot.number)()
		})),
		incomeTaxes: (0, valibot.array)((0, valibot.object)({
			game_time: (0, valibot.number)(),
			tax_rate: (0, valibot.number)()
		})),
		WORMHOLE_DIRECTLY: (0, valibot.optional)(bit(false)),
		WORMHOLE_EXTRA_DESTINATION_COST: (0, valibot.optional)((0, valibot.number)())
	}),
	// transforming config in-place because it is a whole product
	(0, valibot.transform)((value) => {
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
const valiM1DemoPacketStatusPlayersSchema = (0, valibot.pipe)((0, valibot.array)((0, valibot.pipe)((0, valibot.object)({
	user_id: (0, valibot.number)(),
	status: (0, valibot.number)(),
	position: (0, valibot.number)(),
	cash: (0, valibot.number)(),
	score: (0, valibot.number)(),
	jail: (0, valibot.optional)((0, valibot.object)({ roll_double_attempts: (0, valibot.number)() })),
	loan: (0, valibot.union)([(0, valibot.strictObject)({
		taken: (0, valibot.pipe)((0, valibot.literal)(0), (0, valibot.transform)(() => false)),
		unlock_round: (0, valibot.number)()
	}), (0, valibot.strictObject)({
		taken: (0, valibot.pipe)((0, valibot.literal)(1), (0, valibot.transform)(() => true)),
		debt: (0, valibot.number)(),
		return_round: (0, valibot.number)()
	})]),
	restart: (0, valibot.optional)((0, valibot.object)({ variant: (0, valibot.nullable)(valiM1DemoPacketSetipConfigRestartVariantSchema) }))
}), (0, valibot.transform)((value) => value))), (0, valibot.transform)((value) => new Map(value.map((player) => [player.user_id, player]))));
const valiM1DemoPacketV1StatusPlayersSchema = (0, valibot.array)((0, valibot.pipe)((0, valibot.object)({
	user_id: (0, valibot.number)(),
	vip: (0, valibot.optional)((0, valibot.boolean)(), false),
	cards_equipped: (0, valibot.optional)((0, valibot.record)((0, valibot.string)(), (0, valibot.object)({
		thing_id: (0, valibot.number)(),
		coeff_rent: (0, valibot.number)()
	}))),
	can_use_credit: (0, valibot.optional)((0, valibot.boolean)(), false),
	status: (0, valibot.number)(),
	position: (0, valibot.number)(),
	money: (0, valibot.number)(),
	score: (0, valibot.number)(),
	jailed: (0, valibot.boolean)(),
	unjailAttempts: (0, valibot.number)(),
	credit_nextTakeRound: (0, valibot.number)(),
	credit_payRound: (0, valibot.union)([(0, valibot.literal)(false), (0, valibot.number)()]),
	credit_toPay: (0, valibot.number)(),
	restart: (0, valibot.optional)((0, valibot.union)([(0, valibot.pipe)((0, valibot.literal)(0), (0, valibot.transform)(() => null)), valiM1DemoPacketSetipConfigRestartVariantSchema]))
}), (0, valibot.transform)((value) => {
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
const valiM1DemoPacketStatusSchema = (0, valibot.object)({
	round: (0, valibot.number)(),
	players: valiM1DemoPacketStatusPlayersSchema,
	fields: valiM1DemoPacketStatusFieldsSchema,
	turn: valiM1DemoPacketStatusTurnSchema,
	timer: (0, valibot.optional)((0, valibot.union)([(0, valibot.object)({
		ts_expires: (0, valibot.number)(),
		is_extra: (0, valibot.boolean)()
	}), (0, valibot.object)({
		expires_in: (0, valibot.number)(),
		is_extra: (0, valibot.boolean)()
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
const valiM1DemoPacketV1StatusActiontypeSchema = (0, valibot.array)((0, valibot.picklist)(Object.keys(action_list_mapping)));
const valiM1DemoPacketV1ContractSchema = (0, valibot.pipe)((0, valibot.object)({
	from: (0, valibot.number)(),
	to: (0, valibot.number)(),
	out_fields: (0, valibot.array)((0, valibot.number)()),
	out_money: (0, valibot.number)(),
	in_fields: (0, valibot.array)((0, valibot.number)()),
	in_money: (0, valibot.number)()
}), (0, valibot.transform)((value) => ({
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
const valiM1DemoPacketV1StatusSchema = (0, valibot.pipe)(
	(0, valibot.object)({
		round: (0, valibot.number)(),
		players: valiM1DemoPacketV1StatusPlayersSchema,
		fields: valiM1DemoPacketV1StatusFieldsSchema,
		player_ownerOfMove: (0, valibot.nullable)((0, valibot.number)()),
		action_player: (0, valibot.nullable)((0, valibot.number)()),
		action_type: valiM1DemoPacketV1StatusActiontypeSchema,
		current_move: (0, valibot.optional)((0, valibot.object)({
			dices: (0, valibot.optional)((0, valibot.tuple)([
				(0, valibot.number)(),
				(0, valibot.optional)((0, valibot.number)()),
				(0, valibot.optional)((0, valibot.number)())
			])),
			move_reverse: (0, valibot.optional)((0, valibot.boolean)(), false),
			pay: (0, valibot.optional)((0, valibot.number)()),
			moneyToPay: (0, valibot.optional)((0, valibot.number)()),
			payTo: (0, valibot.optional)((0, valibot.number)()),
			players_auctionStatus: (0, valibot.optional)((0, valibot.pipe)((0, valibot.record)((0, valibot.string)(), (0, valibot.number)()), (0, valibot.transform)((value) => new Set(Object.entries(value).filter(([_, status]) => status === 0).map(([user_id_string]) => Number.parseInt(user_id_string)))))),
			field: (0, valibot.optional)((0, valibot.number)()),
			bet: (0, valibot.optional)((0, valibot.number)()),
			contract: (0, valibot.optional)(valiM1DemoPacketV1ContractSchema),
			contracts: (0, valibot.optional)((0, valibot.number)()),
			jackpot_superprize_money: (0, valibot.optional)((0, valibot.number)()),
			wormhole_destinations: (0, valibot.optional)((0, valibot.array)((0, valibot.number)())),
			levelUpped: (0, valibot.optional)((0, valibot.array)((0, valibot.number)())),
			mortgaged: (0, valibot.optional)((0, valibot.array)((0, valibot.number)()))
		})),
		timeout_ts: (0, valibot.number)(),
		timeout_is_additional: (0, valibot.boolean)()
	}),
	(0, valibot.transform)((value) => {
		for (const [index, player] of value.players.entries()) if (player._setup) player._setup.index = index;
		return value;
	}),
	// eslint-disable-next-line complexity, max-lines-per-function
	(0, valibot.transform)((value) => {
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
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("contract.send"),
		user_id: (0, valibot.number)(),
		user_id_to: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("contract.accept"),
		user_id: (0, valibot.number)(),
		contract: valiM1DemoContractSchema
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("contract.reject"),
		user_id: (0, valibot.number)(),
		timeout: bit(false)
	})
];
const enrichments$15 = {};
const valiV1Schemas$16 = [
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("contract"),
		user_id: (0, valibot.number)(),
		to: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "contract.send",
			user_id: value.user_id,
			user_id_to: value.to
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("contract_details")
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: value.type
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("contract_accepted"),
		user_id: (0, valibot.number)(),
		contract: valiM1DemoPacketV1ContractSchema
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "contract.accept",
			user_id: value.user_id,
			contract: value.contract
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("contract_declined"),
		user_id: (0, valibot.number)(),
		by_timeout: bit(false)
	}), (0, valibot.transform)((value) => {
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
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("jackpot"),
		user_id: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("jackpot.pay"),
		user_id: (0, valibot.number)(),
		amount: (0, valibot.number)(),
		jackpot_size: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("jackpot.play"),
		user_id: (0, valibot.number)(),
		dice_bet: (0, valibot.array)((0, valibot.number)()),
		dice_rolled: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("jackpot.win"),
		user_id: (0, valibot.number)(),
		amount: (0, valibot.number)(),
		dice_rolled: (0, valibot.optional)((0, valibot.number)())
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("jackpot.lose"),
		user_id: (0, valibot.number)(),
		amount: (0, valibot.optional)((0, valibot.number)()),
		dice_rolled: (0, valibot.optional)((0, valibot.number)())
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("jackpot.superprize.win"),
		user_id: (0, valibot.number)(),
		amount: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("jackpot.superprize.increase"),
		user_id: (0, valibot.number)(),
		superprize: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("jackpot.reject"),
		user_id: (0, valibot.number)()
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
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("jackpot"),
		user_id: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "jackpot",
			user_id: value.user_id
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("jackpot_paid"),
		user_id: (0, valibot.number)(),
		money: (0, valibot.number)(),
		jackpot_money: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "jackpot.pay",
			user_id: value.user_id,
			amount: value.money,
			jackpot_size: value.jackpot_money
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("jackpot_play"),
		user_id: (0, valibot.number)(),
		dices_betted: (0, valibot.array)((0, valibot.number)()),
		dice_rolled: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "jackpot.play",
			user_id: value.user_id,
			dice_bet: value.dices_betted,
			dice_rolled: value.dice_rolled
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("jackpot_win"),
		user_id: (0, valibot.number)(),
		money: (0, valibot.number)(),
		dice_rolled: (0, valibot.optional)((0, valibot.number)())
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "jackpot.win",
			user_id: value.user_id,
			amount: value.money,
			dice_rolled: value.dice_rolled
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("jackpot_lose"),
		user_id: (0, valibot.number)(),
		money: (0, valibot.optional)((0, valibot.number)()),
		dice_rolled: (0, valibot.optional)((0, valibot.number)())
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "jackpot.lose",
			user_id: value.user_id,
			amount: value.money,
			dice_rolled: value.dice_rolled
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("jackpot_superprize_win"),
		user_id: (0, valibot.number)(),
		money: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "jackpot.superprize.win",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("jackpot_superprize_funded"),
		user_id: (0, valibot.number)(),
		jackpot_superprize_money: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "jackpot.superprize.increase",
			user_id: value.user_id,
			superprize: value.jackpot_superprize_money
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("jackpot_declined"),
		user_id: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
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
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("jail.put"),
		user_id: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("jail.put.double"),
		user_id: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("jail.visit"),
		user_id: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("jail.release.pay"),
		user_id: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("jail.release"),
		user_id: (0, valibot.number)(),
		position_after: (0, valibot.optional)((0, valibot.number)())
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
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("goToJail"),
		user_id: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "jail.put",
			user_id: value.user_id
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("goToJailByCombo"),
		user_id: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "jail.put.double",
			user_id: value.user_id
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("goToJailVisiting"),
		user_id: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "jail.visit",
			user_id: value.user_id
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("payForUnjail"),
		user_id: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "jail.release.pay",
			user_id: value.user_id
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("unjailedByFee"),
		user_id: (0, valibot.number)(),
		mean_position: (0, valibot.optional)((0, valibot.number)())
	}), (0, valibot.transform)((value) => {
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
const valiSchemas$13 = [(0, valibot.object)({
	id: (0, valibot.string)(),
	type: (0, valibot.literal)("level.build"),
	user_id: (0, valibot.number)(),
	field_id: (0, valibot.number)()
}), (0, valibot.object)({
	id: (0, valibot.string)(),
	type: (0, valibot.literal)("level.sell"),
	user_id: (0, valibot.number)(),
	field_id: (0, valibot.number)()
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
const valiV1Schemas$13 = [(0, valibot.pipe)((0, valibot.object)({
	_id: (0, valibot.optional)((0, valibot.string)()),
	type: (0, valibot.literal)("levelUp"),
	user_id: (0, valibot.number)(),
	field: (0, valibot.number)()
}), (0, valibot.transform)((value) => {
	return {
		id: value._id,
		type: "level.build",
		user_id: value.user_id,
		field_id: value.field
	};
})), (0, valibot.pipe)((0, valibot.object)({
	_id: (0, valibot.optional)((0, valibot.string)()),
	type: (0, valibot.literal)("levelDown"),
	user_id: (0, valibot.number)(),
	field: (0, valibot.number)()
}), (0, valibot.transform)((value) => {
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
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("loan.take"),
		user_id: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("loan.deadline"),
		user_id: (0, valibot.number)(),
		amount: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("loan.repay"),
		user_id: (0, valibot.number)(),
		amount: (0, valibot.number)()
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
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("credit_taken"),
		user_id: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "loan.take",
			user_id: value.user_id
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("credit_timeToPay"),
		user_id: (0, valibot.number)(),
		sum: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "loan.deadline",
			user_id: value.user_id,
			amount: value.sum
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.picklist)(["credit_paid", "credit_payed"]),
		user_id: (0, valibot.number)(),
		sum: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
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
const valiSchemas$11 = [(0, valibot.object)({
	id: (0, valibot.string)(),
	type: (0, valibot.literal)("m1.move"),
	user_id: (0, valibot.number)(),
	rule: (0, valibot.pipe)((0, valibot.picklist)([0, 1]), (0, valibot.transform)((value) => value === 0 ? "free" : "enemy_owned")),
	field_id: (0, valibot.number)(),
	move_reversed: bit(false)
}), (0, valibot.object)({
	id: (0, valibot.string)(),
	type: (0, valibot.literal)("m1.fail"),
	user_id: (0, valibot.number)()
})];
const enrichments$10 = { "m1.move"(options) {
	const player = options.status.players.get(options.event.user_id);
	player.position = options.event.field_id;
} };
const valiV1Schemas$11 = [(0, valibot.pipe)((0, valibot.object)({
	_id: (0, valibot.optional)((0, valibot.string)()),
	type: (0, valibot.literal)("mrMonopoly"),
	user_id: (0, valibot.number)(),
	field_type: (0, valibot.pipe)((0, valibot.picklist)([0, 1]), (0, valibot.transform)((value) => value === 0 ? "free" : "enemy_owned")),
	field_id: (0, valibot.number)(),
	move_reverse: bit(false)
}), (0, valibot.transform)((value) => {
	return {
		id: value._id,
		type: "m1.move",
		user_id: value.user_id,
		rule: value.field_type,
		field_id: value.field_id,
		move_reversed: value.move_reverse
	};
})), (0, valibot.pipe)((0, valibot.object)({
	_id: (0, valibot.optional)((0, valibot.string)()),
	type: (0, valibot.literal)("mrMonopolyFailed"),
	user_id: (0, valibot.number)()
}), (0, valibot.transform)((value) => {
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
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("mortgage.put"),
		user_id: (0, valibot.number)(),
		field_id: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("mortgage.buyback"),
		user_id: (0, valibot.number)(),
		field_id: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("mortgage.expire"),
		user_id: (0, valibot.number)(),
		field_id: (0, valibot.number)()
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
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("mortgage"),
		user_id: (0, valibot.number)(),
		field: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "mortgage.put",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("unmortgage"),
		user_id: (0, valibot.number)(),
		field: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "mortgage.buyback",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("mortgage_limit"),
		field: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
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
const valiChanceDataSchema = (0, valibot.union)([
	(0, valibot.strictObject)({ amount: (0, valibot.number)() }),
	(0, valibot.strictObject)({
		field_id: (0, valibot.number)(),
		move_reversed: bit(false)
	}),
	(0, valibot.undefined_)()
]);
const valiSchemas$9 = [
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("bankrupt"),
		user_id: (0, valibot.number)(),
		user_id_bankrupt: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("chance"),
		user_id: (0, valibot.number)(),
		chance_index: (0, valibot.number)(),
		data: valiChanceDataSchema
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("game-over")
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("leave"),
		user_id: (0, valibot.number)(),
		kicked: bit(false)
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("message"),
		user_id: (0, valibot.number)(),
		private: (0, valibot.optional)((0, valibot.object)({ user_id: (0, valibot.optional)((0, valibot.number)()) })),
		is_forced: bit(false),
		text: (0, valibot.string)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("restart"),
		user_id: (0, valibot.number)(),
		restart_price: (0, valibot.number)()
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
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("bankrupted"),
		user_id: (0, valibot.number)(),
		to: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "bankrupt",
			user_id: value.user_id,
			user_id_bankrupt: value.to
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("chance"),
		user_id: (0, valibot.number)(),
		chance_id: (0, valibot.number)(),
		money: (0, valibot.optional)((0, valibot.number)()),
		move_reverse: (0, valibot.optional)(bit(false)),
		mean_position: (0, valibot.optional)((0, valibot.number)())
	}), (0, valibot.transform)((value) => {
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
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("gameOver")
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "game-over"
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("leave"),
		user_id: (0, valibot.number)(),
		is_kicked: bit(false)
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "leave",
			user_id: value.user_id,
			kicked: value.is_kicked
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("message"),
		user_id: (0, valibot.number)(),
		private: (0, valibot.optional)((0, valibot.object)({
			user: (0, valibot.optional)((0, valibot.number)()),
			team: (0, valibot.optional)((0, valibot.unknown)())
		})),
		forced: bit(false),
		text: (0, valibot.string)(),
		is_unsafe: bit(false)
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "message",
			user_id: value.user_id,
			private: value.private ? { user_id: value.private.user } : void 0,
			is_forced: value.forced,
			text: value.is_unsafe ? value.text : unescapeHtml(value.text)
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("restart"),
		user_id: (0, valibot.number)(),
		money: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
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
const valiSchemas$8 = [(0, valibot.object)({
	id: (0, valibot.string)(),
	type: (0, valibot.literal)("pause.set")
}), (0, valibot.object)({
	id: (0, valibot.string)(),
	type: (0, valibot.literal)("pause.end")
})];
const valiV1Schemas$8 = [(0, valibot.pipe)((0, valibot.object)({
	_id: (0, valibot.optional)((0, valibot.string)()),
	type: (0, valibot.literal)("pauseActive")
}), (0, valibot.transform)((value) => {
	return {
		id: value._id,
		type: "pause.set"
	};
})), (0, valibot.pipe)((0, valibot.object)({
	_id: (0, valibot.optional)((0, valibot.string)()),
	type: (0, valibot.literal)("pauseRemoved")
}), (0, valibot.transform)((value) => {
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
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("purchase.offer"),
		user_id: (0, valibot.number)(),
		field_id: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("purchase"),
		user_id: (0, valibot.number)(),
		field_id: (0, valibot.number)(),
		price: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("purchase.reject"),
		user_id: (0, valibot.number)(),
		field_id: (0, valibot.number)()
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
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("canBuy"),
		user_id: (0, valibot.number)(),
		field: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "purchase.offer",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("buy"),
		user_id: (0, valibot.number)(),
		field: (0, valibot.number)(),
		money: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "purchase",
			user_id: value.user_id,
			field_id: value.field,
			price: value.money
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("noBuy"),
		user_id: (0, valibot.number)(),
		field: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
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
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("rent.pay"),
		user_id: (0, valibot.number)(),
		field_id: (0, valibot.number)(),
		amount: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("rent.pay.complete"),
		user_id: (0, valibot.number)(),
		field_id: (0, valibot.number)(),
		amount: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("rent.pay.cancel"),
		user_id: (0, valibot.number)(),
		user_id_receiver: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("rent.zero"),
		user_id: (0, valibot.number)(),
		field_id: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("rent.zero.self"),
		user_id: (0, valibot.number)(),
		field_id: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("rent.zero.teammate"),
		user_id: (0, valibot.number)(),
		field_id: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("rent.zero.mortgaged"),
		user_id: (0, valibot.number)(),
		field_id: (0, valibot.number)()
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
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("payRent"),
		user_id: (0, valibot.number)(),
		field: (0, valibot.number)(),
		money: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "rent.pay",
			user_id: value.user_id,
			field_id: value.field,
			amount: value.money
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("payRentSuccess"),
		user_id: (0, valibot.number)(),
		field: (0, valibot.number)(),
		money: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "rent.pay.complete",
			user_id: value.user_id,
			field_id: value.field,
			amount: value.money
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("payRentFail"),
		user_id: (0, valibot.number)(),
		to: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "rent.pay.cancel",
			user_id: value.user_id,
			user_id_receiver: value.to
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("payRentZero"),
		user_id: (0, valibot.number)(),
		field: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "rent.zero",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("payRentToSelf"),
		user_id: (0, valibot.number)(),
		field: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "rent.zero.self",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("payRentToTeammate"),
		user_id: (0, valibot.number)(),
		field: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "rent.zero.teammate",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("payRentCancelledMortgaged"),
		user_id: (0, valibot.number)(),
		field: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
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
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("roll-dices"),
		user_id: (0, valibot.number)(),
		dices: (0, valibot.tuple)([
			(0, valibot.number)(),
			(0, valibot.optional)((0, valibot.number)()),
			(0, valibot.optional)((0, valibot.number)())
		]),
		move_reversed: bit(false),
		double_spent: bit(false)
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("roll-dices.jail.success"),
		user_id: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("roll-dices.jail.fail"),
		user_id: (0, valibot.number)()
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
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("rollDices"),
		user_id: (0, valibot.number)(),
		dices: (0, valibot.tuple)([
			(0, valibot.number)(),
			(0, valibot.optional)((0, valibot.number)()),
			(0, valibot.optional)((0, valibot.number)())
		]),
		move_reverse: bit(false)
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "roll-dices",
			user_id: value.user_id,
			dices: value.dices,
			move_reversed: value.move_reverse,
			double_spent: false
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("double_spended")
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: value.type
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("rollDicesForUnjailSuccess"),
		user_id: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "roll-dices.jail.success",
			user_id: value.user_id
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("rollDicesForUnjailFail"),
		user_id: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
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
const valiSchemas$4 = [(0, valibot.object)({
	id: (0, valibot.string)(),
	type: (0, valibot.literal)("start.income"),
	user_id: (0, valibot.number)()
}), (0, valibot.object)({
	id: (0, valibot.string)(),
	type: (0, valibot.literal)("start.bonus"),
	user_id: (0, valibot.number)()
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
const valiV1Schemas$4 = [(0, valibot.pipe)((0, valibot.object)({
	_id: (0, valibot.optional)((0, valibot.string)()),
	type: (0, valibot.literal)("startBypass"),
	user_id: (0, valibot.number)()
}), (0, valibot.transform)((value) => {
	return {
		id: value._id,
		type: "start.income",
		user_id: value.user_id
	};
})), (0, valibot.pipe)((0, valibot.object)({
	_id: (0, valibot.optional)((0, valibot.string)()),
	type: (0, valibot.literal)("start_bonus"),
	user_id: (0, valibot.number)()
}), (0, valibot.transform)((value) => {
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
const valiSchemas$3 = [(0, valibot.object)({
	id: (0, valibot.string)(),
	type: (0, valibot.literal)("tournament.drop"),
	user_ids: (0, valibot.array)((0, valibot.number)())
})];
const enrichments$3 = {};
const valiV1Schemas$3 = [(0, valibot.pipe)((0, valibot.object)({
	_id: (0, valibot.optional)((0, valibot.string)()),
	type: (0, valibot.literal)("tournament_drop"),
	user_id: (0, valibot.number)()
}), (0, valibot.transform)((value) => {
	return {
		id: value._id,
		type: "tournament.drop",
		user_ids: [value.user_id]
	};
})), (0, valibot.pipe)((0, valibot.object)({
	_id: (0, valibot.optional)((0, valibot.string)()),
	type: (0, valibot.literal)("tournament_drop_multi"),
	user_ids: (0, valibot.array)((0, valibot.number)())
}), (0, valibot.transform)((value) => {
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
const valiSchemas$2 = [(0, valibot.object)({
	id: (0, valibot.string)(),
	type: (0, valibot.literal)("triple"),
	user_id: (0, valibot.number)()
}), (0, valibot.object)({
	id: (0, valibot.string)(),
	type: (0, valibot.literal)("triple.move"),
	user_id: (0, valibot.number)(),
	field_id: (0, valibot.number)(),
	move_reversed: bit(false)
})];
const enrichments$2 = { "triple.move"(options) {
	const player = options.status.players.get(options.event.user_id);
	player.position = options.event.field_id;
} };
const valiV1Schemas$2 = [(0, valibot.pipe)((0, valibot.object)({
	_id: (0, valibot.optional)((0, valibot.string)()),
	type: (0, valibot.literal)("chooseFieldToMove"),
	user_id: (0, valibot.number)()
}), (0, valibot.transform)((value) => {
	return {
		id: value._id,
		type: "triple",
		user_id: value.user_id
	};
})), (0, valibot.pipe)((0, valibot.object)({
	_id: (0, valibot.optional)((0, valibot.string)()),
	type: (0, valibot.literal)("fieldToMoveChoosed"),
	user_id: (0, valibot.number)(),
	field_id: (0, valibot.number)(),
	move_reverse: bit(false)
}), (0, valibot.transform)((value) => {
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
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("wormhole"),
		user_id: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("wormhole.open"),
		user_id: (0, valibot.number)(),
		exits_count: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("wormhole.reject"),
		user_id: (0, valibot.number)()
	}),
	(0, valibot.object)({
		id: (0, valibot.string)(),
		type: (0, valibot.literal)("wormhole.move"),
		user_id: (0, valibot.number)(),
		field_id: (0, valibot.number)(),
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
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("wormhole"),
		user_id: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "wormhole",
			user_id: value.user_id
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("wormhole_opened"),
		user_id: (0, valibot.number)(),
		destinations_count: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "wormhole.open",
			user_id: value.user_id,
			exits_count: value.destinations_count
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("wormhole_declined"),
		user_id: (0, valibot.number)()
	}), (0, valibot.transform)((value) => {
		return {
			id: value._id,
			type: "wormhole.reject",
			user_id: value.user_id
		};
	})),
	(0, valibot.pipe)((0, valibot.object)({
		_id: (0, valibot.optional)((0, valibot.string)()),
		type: (0, valibot.literal)("wormhole_used"),
		user_id: (0, valibot.number)(),
		field_id: (0, valibot.number)(),
		move_reverse: bit(false)
	}), (0, valibot.transform)((value) => {
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
const valiRecordParser = (0, valibot.safeParser)((0, valibot.record)((0, valibot.string)(), (0, valibot.unknown)()));
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
const valiM1DemoRawPacketEventsSchema = (0, valibot.array)((0, valibot.union)([...valiSchemas, (0, valibot.pipe)((0, valibot.object)({
	id: (0, valibot.string)(),
	type: (0, valibot.string)()
}), (0, valibot.transform)(({ type,...value_rest }) => {
	return {
		type: "_unknown",
		type_received: type,
		...value_rest
	};
}))]));
const valiM1DemoRawPacketV1EventElementSchema = (0, valibot.union)([...valiV1Schemas, (0, valibot.pipe)((0, valibot.object)({
	_id: (0, valibot.optional)((0, valibot.string)()),
	type: (0, valibot.string)()
}), (0, valibot.transform)(({ _id, type,...value_rest }) => {
	return {
		id: _id,
		type: "_unknown",
		type_received: type,
		...value_rest
	};
}))]);
const valiM1DemoRawPacketV1EventsSchema = (0, valibot.pipe)((0, valibot.union)([(0, valibot.array)(valiM1DemoRawPacketV1EventElementSchema), (0, valibot.record)((0, valibot.string)(), valiM1DemoRawPacketV1EventElementSchema)]), (0, valibot.transform)((value) => {
	if (isRecord(value)) return Object.entries(value).map(([_id, event]) => {
		return {
			_id,
			...event
		};
	});
	return value;
}), (0, valibot.transform)((value) => {
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
const valiM1DemoPacketSetupPlayerSchema = (0, valibot.pipe)((0, valibot.object)({
	user_id: (0, valibot.number)(),
	is_vip: bit(false),
	is_loan_available: bit(false),
	equipment: (0, valibot.object)({ cards: (0, valibot.pipe)((0, valibot.array)((0, valibot.object)({
		field_id: (0, valibot.number)(),
		item_proto_id: (0, valibot.number)(),
		item_id: (0, valibot.optional)((0, valibot.number)()),
		rent_multiplier: (0, valibot.number)()
	})), (0, valibot.transform)((value) => new Map(value.map((card) => [card.field_id, card])))) })
}), (0, valibot.transform)((value) => {
	return {
		...value,
		index: -1
	};
}));

//#endregion
//#region src/packet/setup.ts
const valiM1DemoPacketSetupSchema = (0, valibot.object)({
	config: valiM1DemoPacketSetupConfigSchema,
	flags: (0, valibot.object)({
		game_mode: (0, valibot.number)(),
		game_submode: (0, valibot.number)(),
		game_2x2: bit(false)
	}),
	players: (0, valibot.pipe)((0, valibot.array)(valiM1DemoPacketSetupPlayerSchema), (0, valibot.transform)((value) => {
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
const valiM1DemoPacketTimeSchema = (0, valibot.pipe)((0, valibot.object)({
	ts_start: (0, valibot.number)(),
	ts_now: (0, valibot.number)(),
	inactive: (0, valibot.number)(),
	ts_inactive: (0, valibot.optional)((0, valibot.number)())
}), (0, valibot.transform)((value) => {
	return {
		...value,
		delta: Date.now() - value.ts_now
	};
}));
const valiM1DemoPacketV1TimeSchema = (0, valibot.union)([
	(0, valibot.object)({ time: valiM1DemoPacketTimeSchema }),
	(0, valibot.pipe)((0, valibot.object)({ status: (0, valibot.optional)((0, valibot.object)({ time: valiM1DemoPacketTimeSchema })) }), (0, valibot.transform)((value) => {
		if (!value.status) {
			console.error("There is no time in the packet.", value);
			throw new Error("There is no time in the packet.");
		}
		return { time: value.status.time };
	})),
	(0, valibot.pipe)((0, valibot.object)({
		current_time: (0, valibot.number)(),
		game_started: (0, valibot.optional)((0, valibot.number)()),
		ts_start: (0, valibot.optional)((0, valibot.number)()),
		status: (0, valibot.optional)((0, valibot.object)({ pause_data: (0, valibot.optional)((0, valibot.object)({
			total_time: (0, valibot.number)(),
			is_active: (0, valibot.boolean)(),
			pause_started_at: (0, valibot.optional)((0, valibot.number)())
		})) }))
	}), (0, valibot.transform)((value) => {
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
const valiM1DemoRawPacketSchema = (0, valibot.object)({
	setup: (0, valibot.optional)(valiM1DemoPacketSetupSchema),
	events: valiM1DemoRawPacketEventsSchema,
	status: (0, valibot.optional)(valiM1DemoPacketStatusSchema),
	time: valiM1DemoPacketTimeSchema
});
const valiM1DemoRawPacketV1Schema = (0, valibot.intersect)([valiM1DemoPacketV1TimeSchema, (0, valibot.pipe)((0, valibot.object)({
	config: (0, valibot.optional)(valiM1DemoPacketV1ConfigSchema),
	flags: (0, valibot.optional)((0, valibot.object)({
		game_mode: (0, valibot.number)(),
		game_submode: (0, valibot.number)(),
		game_2x2: bit(false)
	})),
	events: valiM1DemoRawPacketV1EventsSchema,
	status: (0, valibot.optional)(valiM1DemoPacketV1StatusSchema)
}), (0, valibot.transform)((value) => {
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