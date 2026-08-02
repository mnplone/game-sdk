import { a as parse, i as bit, n as valiM1DemoPacketSetupConfigSchema, r as valiM1DemoPacketV1ConfigSchema, t as valiM1DemoPacketSetupConfigRestartVariantSchema } from "./config-ozZk_iFi.mjs";
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
//#region src/packet/events/auction.ts
var auction_exports = /* @__PURE__ */ __exportAll({
	enrichments: () => enrichments$18,
	valiSchemas: () => valiSchemas$21,
	valiV1Schemas: () => valiV1Schemas$21
});
const valiSchemas$21 = [
	v.object({
		id: v.string(),
		type: v.literal("auction.put"),
		user_id: v.number(),
		field_id: v.number(),
		bid: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("auction.bid"),
		user_id: v.number(),
		bid: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("auction.reject"),
		user_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("auction.win"),
		user_id: v.number(),
		field_id: v.number(),
		user_id_seller: v.optional(v.number()),
		price: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("auction.cancel"),
		field_id: v.number(),
		user_id_seller: v.optional(v.number()),
		price: v.optional(v.number())
	})
];
const enrichments$18 = {
	"auction.win"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.cash -= options.event.price;
		options.status.fields.set(options.event.field_id, {
			field_id: options.event.field_id,
			owner_user_id: options.event.user_id,
			level: 0,
			protection: options.setup.config.mechanics.charges?.features.buyoutProtection ? 1 : 0
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
const valiV1Schemas$21 = [
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("toAuction"),
		user_id: v.number(),
		field: v.number(),
		bet: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "auction.put",
			user_id: value.user_id,
			field_id: value.field,
			bid: value.bet
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("auctionAccept"),
		user_id: v.number(),
		bet: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "auction.bid",
			user_id: value.user_id,
			bid: value.bet
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("auctionDecline"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "auction.reject",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("auctionWinner"),
		user_id: v.number(),
		user_id_seller: v.optional(v.number()),
		field: v.number(),
		money: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "auction.win",
			user_id: value.user_id,
			field_id: value.field,
			user_id_seller: value.user_id_seller,
			price: value.money
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("auctionFail"),
		field: v.number(),
		user_id_seller: v.optional(v.number()),
		money: v.optional(v.number())
	}), v.transform((value) => {
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
var bank_exports = /* @__PURE__ */ __exportAll({
	enrichments: () => enrichments$17,
	valiSchemas: () => valiSchemas$20,
	valiV1Schemas: () => valiV1Schemas$20
});
const valiSchemas$20 = [
	v.object({
		id: v.string(),
		type: v.literal("bank.income"),
		user_id: v.number(),
		amount: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("bank.fee"),
		user_id: v.number(),
		amount: v.number(),
		shield: bit(false)
	}),
	v.object({
		id: v.string(),
		type: v.literal("bank.fee.pay"),
		user_id: v.number(),
		amount: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("bank.return"),
		user_id: v.number(),
		amount: v.number()
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
const valiV1Schemas$20 = [
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("cash_plus"),
		user_id: v.number(),
		money: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "bank.income",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.picklist([
			"cash_minus",
			"tax_income",
			"tax_luxury"
		]),
		user_id: v.number(),
		money: v.number(),
		shield: bit(false)
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "bank.fee",
			user_id: value.user_id,
			amount: value.money,
			shield: value.shield
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("feePaid"),
		user_id: v.number(),
		money: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "bank.fee.pay",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("insuranceReturn"),
		user_id: v.number(),
		money: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "bank.return",
			user_id: value.user_id,
			amount: value.money
		};
	}))
];
//#endregion
//#region src/packet/events/bus.ts
var bus_exports = /* @__PURE__ */ __exportAll({
	valiSchemas: () => valiSchemas$19,
	valiV1Schemas: () => valiV1Schemas$19
});
const valiSchemas$19 = [];
const valiV1Schemas$19 = [v.pipe(v.object({
	_id: v.optional(v.string()),
	type: v.literal("chooseBusStop"),
	user_id: v.number(),
	stops: v.array(v.number())
}), v.transform((value) => {
	return {
		id: value._id,
		type: "movement.picker",
		user_id: value.user_id,
		movement: {
			source: "bus",
			distances: value.stops.toSorted((a, b) => a - b)
		}
	};
})), v.pipe(v.object({
	_id: v.optional(v.string()),
	type: v.literal("busStopChoosed"),
	user_id: v.number(),
	stop: v.picklist([
		-1,
		0,
		1
	]),
	mean_position: v.number(),
	move_reverse: bit(false),
	auto_selected: bit(false)
}), v.transform((value) => {
	return {
		id: value._id,
		type: "movement.go",
		user_id: value.user_id,
		field_id: value.mean_position,
		move_reversed: value.move_reverse,
		auto_selected: value.auto_selected,
		movement: {
			source: "bus",
			stop_id: value.stop
		}
	};
}))];
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
	enrichments: () => enrichments$16,
	m1DemoDicesSchema: () => m1DemoDicesSchema,
	valiSchemas: () => valiSchemas$18,
	valiV1Schemas: () => valiV1Schemas$18
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
const valiSchemas$18 = [
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
const enrichments$16 = {
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
const valiV1Schemas$18 = [
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
			case 3: break;
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
const m1DemoPacketStatusTurnMovementSchema = v.variant("source", [v.object({ source: v.picklist(["bus", "triple"]) }), v.object({
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
const valiM1DemoContractSchema = v.pipe(v.tuple([v.object({
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
}));
const valiM1DemoPacketStatusTurnSchema = v.pipe(v.object({
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
			"taxi.move",
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
	contract: v.optional(valiM1DemoContractSchema),
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
//#region src/packet/status/fields.ts
const valiM1DemoPacketStatusFieldsSchema = v.pipe(v.array(v.pipe(v.object({
	field_id: v.number(),
	owner_user_id: v.number(),
	level: v.number(),
	mortgage: v.optional(v.object({ round_until: v.optional(v.number()) })),
	last_rent_round: v.optional(v.number()),
	protection: v.optional(v.number(), 0)
}), v.transform((value) => value))), v.transform((value) => new Map(value.map((field) => [field.field_id, field]))));
const valiM1DemoPacketV1StatusFieldsSchema = v.pipe(v.record(v.string(), v.object({
	owner: v.number(),
	level: v.number(),
	mortgaged: v.boolean(),
	mortgage_lose_round: v.optional(v.number()),
	last_rent_round: v.optional(v.number()),
	protection: v.optional(v.number(), 0)
})), v.transform((value) => new Map(Object.entries(value).map(([field_id_string, field]) => {
	const field_id = Math.trunc(Number(field_id_string));
	return [field_id, {
		field_id,
		owner_user_id: field.owner,
		level: field.level,
		mortgage: field.mortgaged ? { round_until: field.mortgage_lose_round } : void 0,
		last_rent_round: field.last_rent_round,
		protection: field.protection
	}];
}))));
//#endregion
//#region src/packet/status/player.ts
const valiM1DemoPacketStatusPlayersSchema = v.pipe(v.array(v.pipe(v.object({
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
	/** Player's charges. */
	charges: v.optional(v.number(), 0),
	/** Player's score: how much rent they have collected. */
	score: v.number(),
	/** Player's jail status */
	jail: v.optional(v.object({ roll_double_attempts: v.number() })),
	loan: v.union([v.object({
		taken: v.pipe(v.literal(0), v.transform(() => false)),
		unlock_round: v.number()
	}), v.object({
		taken: v.pipe(v.literal(1), v.transform(() => true)),
		debt: v.number(),
		return_round: v.number()
	})]),
	restart: v.optional(v.object({ variant: v.nullable(valiM1DemoPacketSetupConfigRestartVariantSchema) })),
	stat: v.object({
		rent_history: v.optional(v.number(), 0),
		income_tax_base: v.optional(v.number(), 0)
	})
}), v.transform((value) => value))), v.transform((value) => new Map(value.map((player) => [player.user_id, player]))));
const valiM1DemoPacketV1StatusPlayersSchema = v.array(v.pipe(v.object({
	user_id: v.number(),
	team: v.optional(v.picklist([0, 1])),
	vip: v.optional(v.boolean(), false),
	cards_equipped: v.optional(v.record(v.string(), v.object({
		thing_id: v.number(),
		coeff_rent: v.number()
	}))),
	generator: v.optional(v.pipe(v.object({
		generator_id: v.number(),
		variant_id: v.optional(v.number()),
		seed: v.optional(v.string())
	}), v.transform((value) => {
		if (value.generator_id === -100) return;
		return {
			item_proto_id: value.generator_id,
			variant_id: value.variant_id,
			seed: value.seed
		};
	}))),
	joke: v.optional(v.pipe(v.union([
		v.literal(false),
		v.number(),
		v.object({ proto_id: v.number() })
	]), v.transform((value) => {
		if (value === false) return;
		if (typeof value === "number") return { item_proto_id: value };
		return { item_proto_id: value.proto_id };
	}))),
	can_use_credit: v.optional(v.boolean(), false),
	status: v.number(),
	position: v.number(),
	money: v.number(),
	charges: v.optional(v.number(), 0),
	score: v.number(),
	jailed: v.boolean(),
	unjailAttempts: v.number(),
	credit_nextTakeRound: v.number(),
	credit_payRound: v.union([v.literal(false), v.number()]),
	credit_toPay: v.number(),
	restart: v.optional(v.union([v.pipe(v.literal(0), v.transform(() => null)), valiM1DemoPacketSetupConfigRestartVariantSchema])),
	rent_last: v.optional(v.number(), 0),
	income_tax_base: v.optional(v.number(), 0)
}), v.transform((value) => {
	return {
		user_id: value.user_id,
		_setup: value.cards_equipped ? {
			index: -1,
			team: value.team,
			is_vip: value.vip,
			is_loan_available: value.can_use_credit,
			equipment: {
				cards: new Map(Object.entries(value.cards_equipped).map(([field_id_string, card_equipped]) => {
					const field_id = Math.trunc(Number(field_id_string));
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
			charges: value.charges,
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
			restart: value.restart === void 0 ? void 0 : { variant: value.restart },
			stat: {
				rent_history: value.rent_last,
				income_tax_base: value.income_tax_base
			}
		}
	};
})));
//#endregion
//#region src/packet/status/timer.ts
const m1DemoPacketStatusTimerSchema = v.union([v.object({
	/** Unix timestamp when timer for an action expires, in **milliseconds**. */
	ts_expires: v.number(),
	/** If timer is extra timer. */
	is_extra: v.boolean()
}), v.object({
	/** When match paused, time left in **milliseconds**. */
	expires_in: v.number(),
	/** If timer is extra timer. */
	is_extra: v.boolean()
})]);
//#endregion
//#region src/packet/status.ts
const valiM1DemoPacketStatusSchema = v.object({
	/** Round number. */
	round: v.number(),
	/** Players. */
	players: valiM1DemoPacketStatusPlayersSchema,
	/** Current information about fields. */
	fields: valiM1DemoPacketStatusFieldsSchema,
	/** Information about current turn. */
	turn: valiM1DemoPacketStatusTurnSchema,
	/**
	* Info about timer.
	*
	* If match set up with no timers, this object is not defined.
	*/
	timer: v.optional(m1DemoPacketStatusTimerSchema),
	/** Number of viewers. */
	viewers_count: v.optional(v.number(), 0)
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
	contractProtestRefuse: "contract.review.approve",
	contractProtestCommit: "contract.review.object",
	jackpotDecline: "jackpot.reject",
	jackpotPlay: "jackpot.play",
	goToJail: "jail.put",
	payForUnjail: "jail.release.pay",
	stayInJail: "jail.stay",
	levelUp: "level.build",
	levelDown: "level.sell",
	credit_take: "loan.take",
	credit_pay: "loan.repay",
	mortgage: "mortgage.put",
	unmortgage: "mortgage.buyback",
	rejectMortgaged: "mortgage.waive",
	auctionMortgaged: "mortgage.auction",
	fieldDrop: "waive",
	chooseFieldToMove: "movement.go",
	buy: "purchase",
	noBuy: "purchase.reject",
	buyOut: "purchase.buyout",
	noBuyOut: "purchase.buyout.reject",
	buyoutProtect: "purchase.buyout.protect",
	payRent: "rent.pay",
	rollDices: "roll-dices",
	rollDicesRerollCancel: "roll-dices.reroll.reject",
	russianRoulettePlay: "russian-roulette.play",
	russianRouletteDecline: "russian-roulette.reject",
	startBypassFee: "start.tax.pay",
	chooseTaxiStop: "taxi.move",
	wormholeUse: "wormhole.use",
	wormholeOpen: "wormhole.open",
	wormholeJump: "wormhole.jump",
	wormholeDecline: "wormhole.reject",
	restart: "restart",
	skip: "skip"
};
const extra_actions_mapping = [
	["leave", "leave"],
	["message", "message"],
	["pause.set", "pause"],
	["pause.end", "pauseRemove"],
	["contract.fallback", "contractFallback"]
];
const packet_v1_action_mapping = Object.fromEntries([...Object.entries(action_list_mapping).map(([key, value]) => [value, key]), ...extra_actions_mapping]);
const valiM1DemoPacketV1StatusActiontypeSchema = v.array(v.picklist(Object.keys(action_list_mapping)));
const valiM1DemoPacketV1ContractSchema = v.pipe(v.object({
	from: v.number(),
	to: v.number(),
	out_fields: v.array(v.number()),
	out_money: v.number(),
	in_fields: v.array(v.number()),
	in_money: v.number()
}), v.transform((value) => {
	return {
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
	};
}));
const valiM1DemoPacketV1StatusSchema = v.pipe(v.object({
	/** Round number. */
	round: v.number(),
	players: valiM1DemoPacketV1StatusPlayersSchema,
	fields: valiM1DemoPacketV1StatusFieldsSchema,
	player_ownerOfMove: v.nullable(v.number()),
	action_player: v.nullable(v.number()),
	action_type: valiM1DemoPacketV1StatusActiontypeSchema,
	current_move: v.optional(v.object({
		dices: v.optional(m1DemoDicesSchema),
		move_reverse: v.optional(v.boolean(), false),
		pay: v.optional(v.number()),
		moneyToPay: v.optional(v.number()),
		payTo: v.optional(v.number()),
		players_auctionStatus: v.optional(v.pipe(v.record(v.string(), v.number()), v.transform((value) => new Set(Object.entries(value).filter(([_, status]) => status === 0).map(([user_id_string]) => Math.trunc(Number(user_id_string))))))),
		field: v.optional(v.number()),
		bet: v.optional(v.number()),
		contract: v.optional(valiM1DemoPacketV1ContractSchema),
		contracts: v.optional(v.number()),
		jackpot_superprize_money: v.optional(v.number()),
		movement: v.optional(m1DemoPacketStatusTurnMovementSchema),
		wormhole_destinations: v.optional(v.array(v.number())),
		levelUpped: v.optional(v.array(v.number())),
		mortgaged: v.optional(v.array(v.number()))
	})),
	timeout_ts: v.number(),
	timeout_is_additional: v.boolean(),
	viewers: v.optional(v.number(), 0)
}), v.transform((value) => {
	for (const [index, player] of value.players.entries()) if (player._setup) player._setup.index = index;
	return value;
}), v.transform((value) => {
	const { player_ownerOfMove, action_player, action_type, current_move, timeout_ts, timeout_is_additional, viewers, ...value_rest } = value;
	const action_list = transformActionsList(action_type);
	const payment_amount = current_move?.moneyToPay ?? current_move?.pay;
	let auction;
	let movement;
	if (current_move) {
		const action_player_data = value_rest.players.find((player) => player.user_id === action_player);
		if (!action_player_data) throw new Error(`Player with user_id ${action_player_data} not found.`);
		if (current_move.movement) movement = current_move.movement;
		else if (action_type.includes("chooseBusStop")) movement = { source: "bus" };
		else if (action_type.includes("chooseFieldToMove")) movement = { source: "triple" };
		else if (action_type.includes("wormholeJump")) {
			if (!current_move.wormhole_destinations) throw new TypeError("Missing field \"status.current_move.wormhole_destinations\".");
			movement = {
				source: "wormhole",
				field_ids: current_move.wormhole_destinations
			};
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
			dices: current_move?.dices ?? void 0,
			jackpot: typeof current_move?.jackpot_superprize_money === "number" ? { superprize: current_move.jackpot_superprize_money } : void 0,
			payment: typeof payment_amount === "number" ? {
				amount: payment_amount,
				to_user_id: current_move?.payTo
			} : void 0,
			movement,
			field_ids_level_built: current_move?.levelUpped ? new Set(current_move.levelUpped) : void 0,
			field_ids_mortgaged: current_move?.mortgaged ? new Set(current_move.mortgaged) : void 0
		},
		timer: timeout_ts < -1e6 ? {
			expires_in: -(timeout_ts % 1e6) * 1e3,
			is_extra: timeout_is_additional
		} : {
			ts_expires: timeout_ts * 1e3,
			is_extra: timeout_is_additional
		},
		viewers_count: viewers
	};
}));
function transformActionsList(list) {
	const list_new = /* @__PURE__ */ new Set();
	for (const action of list) list_new.add(action_list_mapping[action]);
	return list_new;
}
//#endregion
//#region src/packet/events/contract.ts
var contract_exports = /* @__PURE__ */ __exportAll({
	enrichments: () => enrichments$15,
	valiSchemas: () => valiSchemas$17,
	valiV1Schemas: () => valiV1Schemas$17
});
const valiSchemas$17 = [
	v.object({
		id: v.string(),
		type: v.literal("contract.send"),
		user_id: v.number(),
		user_id_to: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("contract.accept"),
		user_id: v.number(),
		contract: valiM1DemoContractSchema
	}),
	v.object({
		id: v.string(),
		type: v.literal("contract.reject"),
		user_id: v.number(),
		timeout: bit(false)
	}),
	v.object({
		id: v.string(),
		type: v.literal("contract.review.init")
	}),
	v.object({
		id: v.string(),
		type: v.literal("contract.review.approve"),
		user_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("contract.review.object"),
		user_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("contract.review.pass")
	}),
	v.object({
		id: v.string(),
		type: v.literal("contract.revert")
	})
];
const enrichments$15 = {};
const valiV1Schemas$17 = [
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("contract"),
		user_id: v.number(),
		to: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "contract.send",
			user_id: value.user_id,
			user_id_to: value.to
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("contract_details")
	}), v.transform((value) => {
		return {
			id: value._id,
			type: value.type
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("contract_accepted"),
		user_id: v.number(),
		contract: valiM1DemoPacketV1ContractSchema
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "contract.accept",
			user_id: value.user_id,
			contract: value.contract
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("contract_declined"),
		user_id: v.number(),
		by_timeout: bit(false)
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "contract.reject",
			user_id: value.user_id,
			timeout: value.by_timeout
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("contract_protest_start")
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "contract.review.init"
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("contract_protest_refused"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "contract.review.approve",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("contract_protest_commited"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "contract.review.object",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("contract_protest_refused_all")
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "contract.review.pass"
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("contract_fallback")
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "contract.revert"
		};
	}))
];
//#endregion
//#region src/packet/events/jackpot.ts
var jackpot_exports = /* @__PURE__ */ __exportAll({
	enrichments: () => enrichments$14,
	valiSchemas: () => valiSchemas$16,
	valiV1Schemas: () => valiV1Schemas$16
});
const valiSchemas$16 = [
	v.object({
		id: v.string(),
		type: v.literal("jackpot"),
		user_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("jackpot.pay"),
		user_id: v.number(),
		amount: v.number(),
		jackpot_size: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("jackpot.play"),
		user_id: v.number(),
		dice_bet: v.array(v.number()),
		dice_rolled: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("jackpot.win"),
		user_id: v.number(),
		/** Amount of money that player won. */
		amount: v.number(),
		/** Dice value rolled. Exists only on Jackpot V2. */
		dice_rolled: v.optional(v.number())
	}),
	v.object({
		id: v.string(),
		type: v.literal("jackpot.lose"),
		user_id: v.number(),
		/** Amount of money that player lost. Exists only on Jackpot V1. */
		amount: v.optional(v.number()),
		/** Dice value rolled. Exists only on Jackpot V2. */
		dice_rolled: v.optional(v.number())
	}),
	v.object({
		id: v.string(),
		type: v.literal("jackpot.superprize.win"),
		user_id: v.number(),
		amount: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("jackpot.superprize.increase"),
		user_id: v.number(),
		superprize: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("jackpot.reject"),
		user_id: v.number()
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
const valiV1Schemas$16 = [
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("jackpot"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "jackpot",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("jackpot_paid"),
		user_id: v.number(),
		money: v.number(),
		jackpot_money: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "jackpot.pay",
			user_id: value.user_id,
			amount: value.money,
			jackpot_size: value.jackpot_money
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("jackpot_play"),
		user_id: v.number(),
		dices_betted: v.array(v.number()),
		dice_rolled: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "jackpot.play",
			user_id: value.user_id,
			dice_bet: value.dices_betted,
			dice_rolled: value.dice_rolled
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("jackpot_win"),
		user_id: v.number(),
		money: v.number(),
		dice_rolled: v.optional(v.number())
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "jackpot.win",
			user_id: value.user_id,
			amount: value.money,
			dice_rolled: value.dice_rolled
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("jackpot_lose"),
		user_id: v.number(),
		money: v.optional(v.number()),
		dice_rolled: v.optional(v.number())
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "jackpot.lose",
			user_id: value.user_id,
			amount: value.money,
			dice_rolled: value.dice_rolled
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("jackpot_superprize_win"),
		user_id: v.number(),
		money: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "jackpot.superprize.win",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("jackpot_superprize_funded"),
		user_id: v.number(),
		jackpot_superprize_money: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "jackpot.superprize.increase",
			user_id: value.user_id,
			superprize: value.jackpot_superprize_money
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("jackpot_declined"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "jackpot.reject",
			user_id: value.user_id
		};
	}))
];
//#endregion
//#region src/packet/events/jail.ts
var jail_exports = /* @__PURE__ */ __exportAll({
	enrichments: () => enrichments$13,
	valiSchemas: () => valiSchemas$15,
	valiV1Schemas: () => valiV1Schemas$15
});
const valiSchemas$15 = [
	v.object({
		id: v.string(),
		type: v.literal("jail.put"),
		user_id: v.number(),
		income_tax: bit(false)
	}),
	v.object({
		id: v.string(),
		type: v.literal("jail.put.double"),
		user_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("jail.fine"),
		user_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("jail.visit"),
		user_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("jail.stay"),
		user_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("jail.release"),
		user_id: v.number(),
		position_after: v.optional(v.number())
	}),
	v.object({
		id: v.string(),
		type: v.literal("jail.release.pay"),
		user_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("jail.release.income-tax-write-off"),
		user_id: v.number()
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
const valiV1Schemas$15 = [
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("goToJail"),
		user_id: v.number(),
		income_tax: bit(false)
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "jail.put",
			user_id: value.user_id,
			income_tax: value.income_tax
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("goToJailByCombo"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "jail.put.double",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("goToJailFine"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "jail.fine",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("goToJailVisiting"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "jail.visit",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("stayInJail"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "jail.stay",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("unjailedByFee"),
		user_id: v.number(),
		mean_position: v.optional(v.number())
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "jail.release",
			user_id: value.user_id,
			position_after: value.mean_position
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("payForUnjail"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "jail.release.pay",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("unjailedByIncomeTaxWriteOff"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "jail.release.income-tax-write-off",
			user_id: value.user_id
		};
	}))
];
//#endregion
//#region src/packet/events/level.ts
var level_exports = /* @__PURE__ */ __exportAll({
	enrichments: () => enrichments$12,
	valiSchemas: () => valiSchemas$14,
	valiV1Schemas: () => valiV1Schemas$14
});
const valiSchemas$14 = [v.object({
	id: v.string(),
	type: v.literal("level.build"),
	user_id: v.number(),
	field_id: v.number()
}), v.object({
	id: v.string(),
	type: v.literal("level.sell"),
	user_id: v.number(),
	field_id: v.number()
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
		if (!("rent_by_level" in monopoly)) throw new Error(`Levels cannot be built for monopoly ${monopoly_id}`);
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
		if (!("rent_by_level" in monopoly)) throw new Error(`Levels cannot be built for monopoly ${monopoly_id}`);
		const player = options.status.players.get(field.owner_user_id);
		player.cash += monopoly.level_cost;
	}
};
const valiV1Schemas$14 = [v.pipe(v.object({
	_id: v.optional(v.string()),
	type: v.literal("levelUp"),
	user_id: v.number(),
	field: v.number()
}), v.transform((value) => {
	return {
		id: value._id,
		type: "level.build",
		user_id: value.user_id,
		field_id: value.field
	};
})), v.pipe(v.object({
	_id: v.optional(v.string()),
	type: v.literal("levelDown"),
	user_id: v.number(),
	field: v.number()
}), v.transform((value) => {
	return {
		id: value._id,
		type: "level.sell",
		user_id: value.user_id,
		field_id: value.field
	};
}))];
//#endregion
//#region src/packet/events/loan.ts
var loan_exports = /* @__PURE__ */ __exportAll({
	enrichments: () => enrichments$11,
	valiSchemas: () => valiSchemas$13,
	valiV1Schemas: () => valiV1Schemas$13
});
const valiSchemas$13 = [
	v.object({
		id: v.string(),
		type: v.literal("loan.take"),
		user_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("loan.deadline"),
		user_id: v.number(),
		amount: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("loan.repay"),
		user_id: v.number(),
		amount: v.number()
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
const valiV1Schemas$13 = [
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("credit_taken"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "loan.take",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("credit_timeToPay"),
		user_id: v.number(),
		sum: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "loan.deadline",
			user_id: value.user_id,
			amount: value.sum
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.picklist(["credit_paid", "credit_payed"]),
		user_id: v.number(),
		sum: v.number()
	}), v.transform((value) => {
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
var m1_exports = /* @__PURE__ */ __exportAll({
	enrichments: () => enrichments$10,
	valiSchemas: () => valiSchemas$12,
	valiV1Schemas: () => valiV1Schemas$12
});
const valiSchemas$12 = [v.object({
	id: v.string(),
	type: v.literal("m1.move"),
	user_id: v.number(),
	rule: v.pipe(v.picklist([0, 1]), v.transform((value) => value === 0 ? "free" : "enemy_owned")),
	field_id: v.number(),
	move_reversed: bit(false)
}), v.object({
	id: v.string(),
	type: v.literal("m1.fail"),
	user_id: v.number()
})];
const enrichments$10 = { "m1.move"(options) {
	const player = options.status.players.get(options.event.user_id);
	player.position = options.event.field_id;
} };
const valiV1Schemas$12 = [v.pipe(v.object({
	_id: v.optional(v.string()),
	type: v.literal("mrMonopoly"),
	user_id: v.number(),
	field_type: v.pipe(v.picklist([0, 1]), v.transform((value) => value === 0 ? "free" : "enemy_owned")),
	field_id: v.number(),
	move_reverse: bit(false)
}), v.transform((value) => {
	return {
		id: value._id,
		type: "m1.move",
		user_id: value.user_id,
		rule: value.field_type,
		field_id: value.field_id,
		move_reversed: value.move_reverse
	};
})), v.pipe(v.object({
	_id: v.optional(v.string()),
	type: v.literal("mrMonopolyFailed"),
	user_id: v.number()
}), v.transform((value) => {
	return {
		id: value._id,
		type: "m1.fail",
		user_id: value.user_id
	};
}))];
//#endregion
//#region src/packet/events/mortgage.ts
var mortgage_exports = /* @__PURE__ */ __exportAll({
	enrichments: () => enrichments$9,
	valiSchemas: () => valiSchemas$11,
	valiV1Schemas: () => valiV1Schemas$11
});
const valiSchemas$11 = [
	v.object({
		id: v.string(),
		type: v.literal("mortgage.put"),
		user_id: v.number(),
		field_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("mortgage.buyback"),
		user_id: v.number(),
		field_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("mortgage.waive"),
		user_id: v.number(),
		field_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("mortgage.expire"),
		user_id: v.number(),
		field_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("waive"),
		user_id: v.number(),
		field_id: v.number()
	})
];
const enrichments$9 = {
	"mortgage.put"(options) {
		const mechanics_mortgage = options.setup.config.mechanics.mortgage;
		if (!mechanics_mortgage) throw new Error("There is no \"mortgage\" mechanics defined in match config.");
		if (!("multiplier" in mechanics_mortgage)) throw new Error("Mechanics \"mortgage\" does not allow mortgaging in match config.");
		const field = options.status.fields.get(options.event.field_id);
		field.mortgage = { round_until: typeof mechanics_mortgage.duration === "number" ? options.status.round + mechanics_mortgage.duration : void 0 };
		const field_setup = options.setup.config.fields[options.event.field_id];
		if (!field_setup) throw new Error(`Field ${options.event.field_id} does not exist`);
		if (field_setup?.type !== "company") throw new Error(`Field ${field} is not a company`);
		const { monopoly_id } = field_setup;
		const mortgage_price = options.setup.config.monopolies.get(monopoly_id).buy_price * mechanics_mortgage.multiplier;
		const player = options.status.players.get(field.owner_user_id);
		player.cash += mortgage_price;
	},
	"mortgage.buyback"(options) {
		const mechanics_mortgage = options.setup.config.mechanics.mortgage;
		if (!mechanics_mortgage) throw new Error("There is no \"mortgage\" mechanics defined in match config.");
		if (!("multiplier" in mechanics_mortgage)) throw new Error("Mechanics \"mortgage\" does not allow mortgaging in match config.");
		const field = options.status.fields.get(options.event.field_id);
		field.mortgage = void 0;
		const field_setup = options.setup.config.fields[options.event.field_id];
		if (!field_setup) throw new Error(`Field ${options.event.field_id} is not defined in match config.`);
		if (field_setup.type !== "company") throw new Error(`Field ${field} is not a company`);
		const { monopoly_id } = field_setup;
		const mortgage_price = options.setup.config.monopolies.get(monopoly_id).buy_price * mechanics_mortgage.multiplier * mechanics_mortgage.buyback_multiplier;
		const player = options.status.players.get(field.owner_user_id);
		player.cash -= mortgage_price;
	},
	"mortgage.expire"(options) {
		if (options.event.user_id === -1) options.event.user_id = options.status.fields.get(options.event.field_id).owner_user_id;
		options.status.fields.delete(options.event.field_id);
	},
	"mortgage.waive"(options) {
		const mechanics_mortgage = options.setup.config.mechanics.mortgage;
		if (!mechanics_mortgage) throw new Error("There is no \"mortgage\" mechanics defined in match config.");
		if (!("multiplier" in mechanics_mortgage)) throw new Error("Mechanics \"mortgage\" does not allow mortgaging in match config.");
		if (!("waive_multiplier" in mechanics_mortgage)) throw new Error("Mechanics \"mortgage\" does not allow waiving the property ownership in match config.");
		const field = options.status.fields.get(options.event.field_id);
		options.status.fields.delete(options.event.field_id);
		const field_setup = options.setup.config.fields[options.event.field_id];
		if (!field_setup) throw new Error(`Field ${options.event.field_id} is not defined in match config.`);
		if (field_setup.type !== "company") throw new Error(`Field ${field} is not a company`);
		const { monopoly_id } = field_setup;
		const cash_to_receive = options.setup.config.monopolies.get(monopoly_id).buy_price * (1 - mechanics_mortgage.multiplier) * mechanics_mortgage.waive_multiplier;
		const player = options.status.players.get(field.owner_user_id);
		player.cash += cash_to_receive;
	},
	waive(options) {
		const mechanics_mortgage = options.setup.config.mechanics.mortgage;
		if (!mechanics_mortgage) throw new Error("There is no \"mortgage\" mechanics defined in match config.");
		if ("multiplier" in mechanics_mortgage) throw new Error("Mechanics \"mortgage\" requires that company be mortgaged before waiving ownership.");
		const field = options.status.fields.get(options.event.field_id);
		options.status.fields.delete(options.event.field_id);
		const field_setup = options.setup.config.fields[options.event.field_id];
		if (!field_setup) throw new Error(`Field ${options.event.field_id} is not defined in match config.`);
		if (field_setup.type !== "company") throw new Error(`Field ${field} is not a company`);
		const { monopoly_id } = field_setup;
		const cash_to_receive = options.setup.config.monopolies.get(monopoly_id).buy_price * mechanics_mortgage.waive_multiplier;
		const player = options.status.players.get(field.owner_user_id);
		player.cash += cash_to_receive;
	}
};
const valiV1Schemas$11 = [
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("mortgage"),
		user_id: v.number(),
		field: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "mortgage.put",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("unmortgage"),
		user_id: v.number(),
		field: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "mortgage.buyback",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("rejectMortgaged"),
		user_id: v.number(),
		field: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "mortgage.waive",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("mortgage_limit"),
		field: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "mortgage.expire",
			user_id: -1,
			field_id: value.field
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("fieldDropped"),
		user_id: v.number(),
		field: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "waive",
			user_id: value.user_id,
			field_id: value.field
		};
	}))
];
//#endregion
//#region src/packet/events/movement.ts
var movement_exports = /* @__PURE__ */ __exportAll({
	enrichments: () => enrichments$8,
	valiSchemas: () => valiSchemas$10,
	valiV1Schemas: () => valiV1Schemas$10
});
const movementPickerMovementSchema = v.variant("source", [
	v.object({
		source: v.literal("bus"),
		distances: v.array(v.number())
	}),
	v.object({
		source: v.literal("wormhole"),
		exit_count: v.number()
	}),
	v.object({ source: v.picklist(["taxi", "triple"]) })
]);
const movementGoMovementSchema = v.variant("source", [v.object({
	source: v.literal("bus"),
	stop_id: v.picklist([
		-1,
		0,
		1
	])
}), v.object({ source: v.picklist([
	"taxi",
	"triple",
	"wormhole"
]) })]);
const valiSchemas$10 = [v.object({
	id: v.string(),
	type: v.literal("movement.picker"),
	user_id: v.number(),
	movement: movementPickerMovementSchema
}), v.object({
	id: v.string(),
	type: v.literal("movement.go"),
	user_id: v.number(),
	field_id: v.number(),
	move_reversed: bit(false),
	auto_selected: bit(false),
	movement: movementGoMovementSchema
})];
const enrichments$8 = { "movement.go"(options) {
	const player = options.status.players.get(options.event.user_id);
	player.position = options.event.field_id;
} };
const valiV1Schemas$10 = [v.pipe(v.object({
	_id: v.optional(v.string()),
	type: v.literal("chooseFieldToMove"),
	user_id: v.number(),
	movement: v.optional(movementPickerMovementSchema)
}), v.transform((value) => {
	return {
		id: value._id,
		type: "movement.picker",
		user_id: value.user_id,
		movement: value.movement ?? { source: "triple" }
	};
})), v.pipe(v.object({
	_id: v.optional(v.string()),
	type: v.literal("fieldToMoveChoosed"),
	user_id: v.number(),
	field_id: v.number(),
	move_reverse: bit(false),
	movement: v.optional(movementGoMovementSchema)
}), v.transform((value) => {
	return {
		id: value._id,
		type: "movement.go",
		user_id: value.user_id,
		field_id: value.field_id,
		move_reversed: value.move_reverse,
		auto_selected: false,
		movement: value.movement ?? { source: "triple" }
	};
}))];
//#endregion
//#region src/packet/events/other.ts
var other_exports = /* @__PURE__ */ __exportAll({
	enrichments: () => enrichments$7,
	valiSchemas: () => valiSchemas$9,
	valiV1Schemas: () => valiV1Schemas$9
});
const valiChanceDataSchema = v.union([
	v.strictObject({ amount: v.number() }),
	v.strictObject({
		field_id: v.number(),
		move_reversed: bit(false)
	}),
	v.undefined_()
]);
const valiSchemas$9 = [
	v.object({
		id: v.string(),
		type: v.literal("bankrupt"),
		user_id: v.number(),
		user_id_bankrupt: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("chance"),
		user_id: v.number(),
		chance_index: v.number(),
		shield: bit(false),
		data: valiChanceDataSchema
	}),
	v.object({
		id: v.string(),
		type: v.literal("game-over")
	}),
	v.object({
		id: v.string(),
		type: v.literal("leave"),
		user_id: v.number(),
		kicked: bit(false)
	}),
	v.object({
		id: v.string(),
		type: v.literal("message"),
		user_id: v.number(),
		private: v.optional(v.object({ user_id: v.optional(v.number()) })),
		is_forced: bit(false),
		text: v.string()
	}),
	v.object({
		id: v.string(),
		type: v.literal("park"),
		user_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("restart"),
		user_id: v.number(),
		restart_price: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("skip"),
		user_id: v.number()
	})
];
const enrichments$7 = { chance(options) {
	const chance_card_index = options.event.chance_index;
	const chance_card = options.setup.config.mechanics.chance.cards[chance_card_index];
	const player = options.status.players.get(options.event.user_id);
	switch (chance_card?.type) {
		case "income":
		case "birthday":
			if (!options.event.data || !("amount" in options.event.data)) throw new TypeError(`Invalid chance event data: missing "amount" field for "${chance_card.type}" chance card.`);
			player.cash += options.event.data.amount;
			break;
		case "goto.jail":
			player.position = options.field_id_jail;
			player.jail = { roll_double_attempts: 0 };
			break;
		case "goto.start":
			player.position = 0;
			break;
		case "teleport":
		case "move.undo":
			if (options.event.data && "field_id" in options.event.data) player.position = options.event.data.field_id;
			break;
	}
} };
/**
* Replaces HTML entities with their respective characters.
*
* This method replaces only entities that were escaped in old server versions.
* @param text - Text to unescape.
* @returns Unescaped text.
*/
function unescapeHtml(text) {
	return text.replaceAll("&#39;", "'").replaceAll("&#34;", "\"").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&amp;", "&");
}
const valiV1Schemas$9 = [
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("bankrupted"),
		user_id: v.number(),
		to: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "bankrupt",
			user_id: value.user_id,
			user_id_bankrupt: value.to
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("chance"),
		user_id: v.number(),
		chance_id: v.number(),
		shield: bit(false),
		money: v.optional(v.number()),
		move_reverse: v.optional(bit(false)),
		mean_position: v.optional(v.number())
	}), v.transform((value) => {
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
			shield: value.shield,
			data
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("gameOver")
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "game-over"
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("leave"),
		user_id: v.number(),
		is_kicked: bit(false)
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "leave",
			user_id: value.user_id,
			kicked: value.is_kicked
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("message"),
		user_id: v.number(),
		private: v.optional(v.object({
			user: v.optional(v.number()),
			team: v.optional(v.unknown())
		})),
		forced: bit(false),
		text: v.string(),
		is_unsafe: bit(false)
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "message",
			user_id: value.user_id,
			private: value.private ? { user_id: value.private.user } : void 0,
			is_forced: value.forced,
			text: value.is_unsafe ? value.text : unescapeHtml(value.text)
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("relax"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "park",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("restart"),
		user_id: v.number(),
		money: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "restart",
			user_id: value.user_id,
			restart_price: value.money
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("skip"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "skip",
			user_id: value.user_id
		};
	}))
];
//#endregion
//#region src/packet/events/pause.ts
var pause_exports = /* @__PURE__ */ __exportAll({
	valiSchemas: () => valiSchemas$8,
	valiV1Schemas: () => valiV1Schemas$8
});
const valiSchemas$8 = [v.object({
	id: v.string(),
	type: v.literal("pause.set")
}), v.object({
	id: v.string(),
	type: v.literal("pause.end")
})];
const valiV1Schemas$8 = [v.pipe(v.object({
	_id: v.optional(v.string()),
	type: v.literal("pauseActive")
}), v.transform((value) => {
	return {
		id: value._id,
		type: "pause.set"
	};
})), v.pipe(v.object({
	_id: v.optional(v.string()),
	type: v.literal("pauseRemoved")
}), v.transform((value) => {
	return {
		id: value._id,
		type: "pause.end"
	};
}))];
//#endregion
//#region src/packet/events/purchase.ts
var purchase_exports = /* @__PURE__ */ __exportAll({
	enrichments: () => enrichments$6,
	valiSchemas: () => valiSchemas$7,
	valiV1Schemas: () => valiV1Schemas$7
});
const valiSchemas$7 = [
	v.object({
		id: v.string(),
		type: v.literal("purchase.offer"),
		user_id: v.number(),
		field_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("purchase"),
		user_id: v.number(),
		field_id: v.number(),
		price: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("purchase.reject"),
		user_id: v.number(),
		field_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("purchase.buyout"),
		user_id: v.number(),
		user_id_receiver: v.number(),
		field_id: v.number(),
		price: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("purchase.buyout.reject"),
		user_id: v.number(),
		field_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("purchase.buyout.protect"),
		user_id: v.number(),
		field_id: v.number()
	})
];
const enrichments$6 = {
	purchase(options) {
		const player = options.status.players.get(options.event.user_id);
		player.cash -= options.event.price;
		options.status.fields.set(options.event.field_id, {
			field_id: options.event.field_id,
			owner_user_id: options.event.user_id,
			level: 0,
			protection: options.setup.config.mechanics.charges?.features.buyoutProtection ? 1 : 0
		});
	},
	"purchase.buyout"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.cash -= options.event.price;
		const player_receiver = options.status.players.get(options.event.user_id_receiver);
		player_receiver.cash += options.event.price;
		options.status.fields.get(options.event.field_id).owner_user_id = options.event.user_id;
	}
};
const valiV1Schemas$7 = [
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("canBuy"),
		user_id: v.number(),
		field: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "purchase.offer",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("buy"),
		user_id: v.number(),
		field: v.number(),
		money: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "purchase",
			user_id: value.user_id,
			field_id: value.field,
			price: value.money
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("noBuy"),
		user_id: v.number(),
		field: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "purchase.reject",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("buyOut"),
		field: v.number(),
		user_id: v.number(),
		to: v.number(),
		money: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "purchase.buyout",
			user_id: value.user_id,
			user_id_receiver: value.to,
			field_id: value.field,
			price: value.money
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("noBuyOut"),
		user_id: v.number(),
		field: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "purchase.buyout.reject",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("buyoutProtected"),
		user_id: v.number(),
		field: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "purchase.buyout.protect",
			user_id: value.user_id,
			field_id: value.field
		};
	}))
];
//#endregion
//#region src/packet/events/rent.ts
var rent_exports = /* @__PURE__ */ __exportAll({
	enrichments: () => enrichments$5,
	valiSchemas: () => valiSchemas$6,
	valiV1Schemas: () => valiV1Schemas$6
});
const valiSchemas$6 = [
	v.object({
		id: v.string(),
		type: v.literal("rent.pay"),
		user_id: v.number(),
		field_id: v.number(),
		amount: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("rent.pay.complete"),
		user_id: v.number(),
		user_id_receiver: v.number(),
		field_id: v.number(),
		amount: v.number(),
		amount_received: v.optional(v.number())
	}),
	v.object({
		id: v.string(),
		type: v.literal("rent.pay.cancel"),
		user_id: v.number(),
		user_id_receiver: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("rent.zero"),
		user_id: v.number(),
		field_id: v.number(),
		shield: bit(false)
	}),
	v.object({
		id: v.string(),
		type: v.literal("rent.zero.self"),
		user_id: v.number(),
		field_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("rent.zero.teammate"),
		user_id: v.number(),
		field_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("rent.zero.mortgaged"),
		user_id: v.number(),
		field_id: v.number()
	})
];
const enrichments$5 = { "rent.pay.complete"(options) {
	const { amount } = options.event;
	const player_payer = options.status.players.get(options.event.user_id);
	player_payer.cash -= amount;
	const user_id_receiver = options.status.fields.get(options.event.field_id).owner_user_id;
	const player_receiver = options.status.players.get(user_id_receiver);
	player_receiver.cash += amount;
} };
const valiV1Schemas$6 = [
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("payRent"),
		user_id: v.number(),
		field: v.number(),
		money: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "rent.pay",
			user_id: value.user_id,
			field_id: value.field,
			amount: value.money
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("payRentSuccess"),
		user_id: v.number(),
		to: v.number(),
		field: v.number(),
		money: v.number(),
		money_received: v.optional(v.number())
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "rent.pay.complete",
			user_id: value.user_id,
			user_id_receiver: value.to,
			field_id: value.field,
			amount: value.money,
			amount_received: value.money_received
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("payRentFail"),
		user_id: v.number(),
		to: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "rent.pay.cancel",
			user_id: value.user_id,
			user_id_receiver: value.to
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("payRentZero"),
		user_id: v.number(),
		field: v.number(),
		shield: bit(false)
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "rent.zero",
			user_id: value.user_id,
			field_id: value.field,
			shield: value.shield
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("payRentToSelf"),
		user_id: v.number(),
		field: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "rent.zero.self",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("payRentToTeammate"),
		user_id: v.number(),
		field: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "rent.zero.teammate",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("payRentCancelledMortgaged"),
		user_id: v.number(),
		field: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "rent.zero.mortgaged",
			user_id: value.user_id,
			field_id: value.field
		};
	}))
];
//#endregion
//#region src/packet/events/russian-roulette.ts
var russian_roulette_exports = /* @__PURE__ */ __exportAll({
	enrichments: () => enrichments$4,
	valiSchemas: () => valiSchemas$5,
	valiV1Schemas: () => valiV1Schemas$5
});
const valiSchemas$5 = [
	v.object({
		id: v.string(),
		type: v.literal("russian-roulette"),
		user_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("russian-roulette.play"),
		user_id: v.number(),
		bullets_count: v.number(),
		reward_amount: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("russian-roulette.survive"),
		user_id: v.number(),
		reward_amount: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("russian-roulette.die"),
		user_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("russian-roulette.reject"),
		user_id: v.number()
	})
];
const enrichments$4 = { "russian-roulette.survive"(options) {
	const player = options.status.players.get(options.event.user_id);
	player.cash += options.event.reward_amount;
} };
const valiV1Schemas$5 = [
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("russianRoulette"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "russian-roulette",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("russianRoulette_process"),
		user_id: v.number(),
		bullets: v.number(),
		reward: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "russian-roulette.play",
			user_id: value.user_id,
			bullets_count: value.bullets,
			reward_amount: value.reward
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("russianRoulette_alive"),
		user_id: v.number(),
		sum: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "russian-roulette.survive",
			user_id: value.user_id,
			reward_amount: value.sum
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("russianRoulette_died"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "russian-roulette.die",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("russianRoulette_declined"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "russian-roulette.reject",
			user_id: value.user_id
		};
	}))
];
//#endregion
//#region src/packet/events/start.ts
var start_exports = /* @__PURE__ */ __exportAll({
	enrichments: () => enrichments$3,
	valiSchemas: () => valiSchemas$4,
	valiV1Schemas: () => valiV1Schemas$4
});
const valiSchemas$4 = [
	v.object({
		id: v.string(),
		type: v.literal("start.income"),
		user_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("start.bonus"),
		user_id: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("start.tax"),
		user_id: v.number(),
		amount: v.number()
	}),
	v.object({
		id: v.string(),
		type: v.literal("start.tax.pay"),
		user_id: v.number()
	})
];
const enrichments$3 = {
	"start.income"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.cash += options.setup.config.mechanics.start.income_amount;
	},
	"start.bonus"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.cash += options.setup.config.mechanics.start.bonus_amount;
	}
};
const valiV1Schemas$4 = [
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("startBypass"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "start.income",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("start_bonus"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "start.bonus",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("startBypassFee"),
		user_id: v.number(),
		money: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "start.tax",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("startBypassFeePaid"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "start.tax.pay",
			user_id: value.user_id
		};
	}))
];
//#endregion
//#region src/packet/events/taxi.ts
var taxi_exports = /* @__PURE__ */ __exportAll({
	enrichments: () => enrichments$2,
	valiSchemas: () => valiSchemas$3,
	valiV1Schemas: () => valiV1Schemas$3
});
const valiSchemas$3 = [
	v.object({
		id: v.string(),
		type: v.literal("taxi.select"),
		user_id: v.number(),
		limit: v.optional(v.number())
	}),
	v.object({
		id: v.string(),
		type: v.literal("taxi.move"),
		user_id: v.number(),
		selection: v.object({
			stop_id: v.number(),
			field_id: v.number(),
			auto: bit(false)
		}),
		move_reversed: bit(false)
	}),
	v.object({
		id: v.string(),
		type: v.literal("taxi.fail"),
		user_id: v.number(),
		move_reversed: bit(false)
	})
];
const enrichments$2 = {
	"taxi.move"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.position = options.event.selection.field_id;
	},
	"taxi.fail"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.position += options.event.move_reversed ? -1 : 1;
	}
};
const valiV1Schemas$3 = [
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("chooseTaxiStop"),
		user_id: v.number(),
		limit: v.optional(v.number())
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "taxi.select",
			user_id: value.user_id,
			limit: value.limit
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("taxiStopChoosed"),
		user_id: v.number(),
		stop: v.number(),
		mean_position: v.number(),
		move_reverse: bit(false),
		auto_selected: bit(false)
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "taxi.move",
			user_id: value.user_id,
			selection: {
				stop_id: value.stop,
				field_id: value.mean_position,
				auto: value.auto_selected
			},
			move_reversed: value.move_reverse
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("chooseTaxiStopFail"),
		user_id: v.number(),
		move_reverse: bit(false)
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "taxi.fail",
			user_id: value.user_id,
			move_reversed: value.move_reverse
		};
	}))
];
//#endregion
//#region src/packet/events/tournament.ts
var tournament_exports = /* @__PURE__ */ __exportAll({
	enrichments: () => enrichments$1,
	valiSchemas: () => valiSchemas$2,
	valiV1Schemas: () => valiV1Schemas$2
});
const valiSchemas$2 = [v.object({
	id: v.string(),
	type: v.literal("tournament.drop"),
	user_ids: v.array(v.number())
})];
const enrichments$1 = {};
const valiV1Schemas$2 = [v.pipe(v.object({
	_id: v.optional(v.string()),
	type: v.literal("tournament_drop"),
	user_id: v.number()
}), v.transform((value) => {
	return {
		id: value._id,
		type: "tournament.drop",
		user_ids: [value.user_id]
	};
})), v.pipe(v.object({
	_id: v.optional(v.string()),
	type: v.literal("tournament_drop_multi"),
	user_ids: v.array(v.number())
}), v.transform((value) => {
	return {
		id: value._id,
		type: "tournament.drop",
		user_ids: value.user_ids
	};
}))];
//#endregion
//#region src/packet/events/wormhole.ts
var wormhole_exports = /* @__PURE__ */ __exportAll({
	valiSchemas: () => valiSchemas$1,
	valiV1Schemas: () => valiV1Schemas$1
});
const valiSchemas$1 = [v.object({
	id: v.string(),
	type: v.literal("wormhole"),
	user_id: v.number()
}), v.object({
	id: v.string(),
	type: v.literal("wormhole.reject"),
	user_id: v.number()
})];
const valiV1Schemas$1 = [
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("wormhole"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "wormhole",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("wormhole_opened"),
		user_id: v.number(),
		destinations_count: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "movement.picker",
			user_id: value.user_id,
			movement: {
				source: "wormhole",
				exit_count: value.destinations_count
			}
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("wormhole_declined"),
		user_id: v.number()
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "wormhole.reject",
			user_id: value.user_id
		};
	})),
	v.pipe(v.object({
		_id: v.optional(v.string()),
		type: v.literal("wormhole_used"),
		user_id: v.number(),
		field_id: v.number(),
		move_reverse: bit(false)
	}), v.transform((value) => {
		return {
			id: value._id,
			type: "movement.go",
			user_id: value.user_id,
			field_id: value.field_id,
			move_reversed: value.move_reverse,
			auto_selected: false,
			movement: { source: "wormhole" }
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
	movement_exports,
	pause_exports,
	purchase_exports,
	rent_exports,
	roll_dices_exports,
	russian_roulette_exports,
	start_exports,
	taxi_exports,
	tournament_exports,
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
	const result = {};
	for (const event_lib of event_libs) if ("enrichments" in event_lib) Object.assign(result, event_lib.enrichments);
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
const valiRecordParser = v.safeParser(v.record(v.string(), v.unknown()));
/**
* Checks if value is an object.
* @param value -
* @returns -
*/
function isRecord(value) {
	return !Array.isArray(value) && valiRecordParser(value).success;
}
//#endregion
//#region src/packet/events.ts
const valiM1DemoPacketEventsSchema = v.array(v.union([...valiSchemas, v.pipe(v.object({
	id: v.string(),
	type: v.string()
}), v.transform(({ type, ...value_rest }) => {
	return {
		type: "_unknown",
		type_received: type,
		...value_rest
	};
}))]));
const valiM1DemoPacketV1EventElementSchema = v.union([...valiV1Schemas, v.pipe(v.object({
	_id: v.optional(v.string()),
	type: v.string()
}), v.transform(({ _id, type, ...value_rest }) => {
	return {
		id: _id,
		type: "_unknown",
		type_received: type,
		...value_rest
	};
}))]);
const valiM1DemoPacketV1EventsSchema = v.pipe(v.union([v.array(valiM1DemoPacketV1EventElementSchema), v.record(v.string(), valiM1DemoPacketV1EventElementSchema)]), v.transform((value) => {
	if (isRecord(value)) return Object.entries(value).map(([_id, event]) => {
		return {
			_id,
			...event
		};
	});
	return value;
}), v.transform((value) => {
	const events_new = [];
	for (const { id, ...event_rest } of value) {
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
const valiM1DemoPacketSetupPlayerSchema = v.pipe(v.object({
	user_id: v.number(),
	team: v.optional(v.picklist([0, 1])),
	is_vip: bit(false),
	is_loan_available: bit(false),
	equipment: v.object({
		cards: v.pipe(v.array(v.object({
			field_id: v.number(),
			item_proto_id: v.number(),
			item_id: v.optional(v.number()),
			rent_multiplier: v.number()
		})), v.transform((value) => new Map(value.map((card) => [card.field_id, card])))),
		generator: v.optional(v.object({
			item_proto_id: v.number(),
			variant_id: v.optional(v.number()),
			seed: v.optional(v.string())
		})),
		joke: v.optional(v.object({ item_proto_id: v.number() }))
	})
}), v.transform((value) => {
	return {
		...value,
		index: -1
	};
}));
//#endregion
//#region src/packet/setup.ts
const valiM1DemoPacketSetupSchema = v.object({
	/** Constants that define basic rules of the match. */
	config: valiM1DemoPacketSetupConfigSchema,
	flags: v.object({
		game_mode: v.number(),
		game_submode: v.number(),
		game_2x2: bit(false),
		title: v.optional(v.string())
	}),
	players: v.pipe(v.array(valiM1DemoPacketSetupPlayerSchema), v.transform((value) => {
		const value_map = /* @__PURE__ */ new Map();
		for (const [index, player] of value.entries()) {
			player.index = index;
			value_map.set(player.user_id, player);
		}
		return value_map;
	}))
});
//#endregion
//#region src/packet/time.ts
const valiM1DemoPacketTimeSchema = v.pipe(v.object({
	/** Unix timestamp of the start of the game in **milliseconds**. */
	ts_start: v.number(),
	/** Unix timestamp of the packet in **milliseconds**. */
	ts_now: v.number(),
	/** Total length of all pauses in the game excluding one that is currently active in **milliseconds**. */
	inactive: v.number(),
	/** Unix timestamp of the start of the current pause in **milliseconds**. */
	ts_inactive: v.optional(v.number())
}), v.transform((value) => {
	return {
		...value,
		/** Difference between server's and browser's time in **milliseconds**. */
		delta: Date.now() - value.ts_now
	};
}));
const valiM1DemoPacketV1TimeSchema = v.union([
	v.object({ time: valiM1DemoPacketTimeSchema }),
	v.pipe(v.object({ status: v.optional(v.object({ time: valiM1DemoPacketTimeSchema })) }), v.transform((value) => {
		if (!value.status) {
			console.error("There is no time in the packet.", value);
			throw new Error("There is no time in the packet.");
		}
		return { time: value.status.time };
	})),
	v.pipe(v.object({
		current_time: v.number(),
		game_started: v.optional(v.number()),
		ts_start: v.optional(v.number()),
		status: v.optional(v.object({ pause_data: v.optional(v.object({
			total_time: v.number(),
			is_active: v.boolean(),
			pause_started_at: v.optional(v.number())
		})) }))
	}), v.transform((value) => {
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
const valiM1DemoPacketSchema = v.object({
	/** Various information about the match which is never changes. */
	setup: v.optional(valiM1DemoPacketSetupSchema),
	/** Events happened before game went to the "status". */
	events: valiM1DemoPacketEventsSchema,
	/** Current status of the match. */
	status: v.optional(valiM1DemoPacketStatusSchema),
	/** Information about match time. */
	time: valiM1DemoPacketTimeSchema
});
const valiM1DemoPacketV1Schema = v.intersect([valiM1DemoPacketV1TimeSchema, v.pipe(v.object({
	config: v.optional(valiM1DemoPacketV1ConfigSchema),
	flags: v.optional(v.object({
		game_mode: v.number(),
		game_submode: v.number(),
		game_2x2: bit(false),
		match_title: v.optional(v.string())
	})),
	events: valiM1DemoPacketV1EventsSchema,
	status: v.optional(valiM1DemoPacketV1StatusSchema)
}), v.transform((value) => {
	const { config, flags, status, ...value_rest } = value;
	let status_new;
	if (status) {
		const { players, ...status_rest } = status;
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
			flags: {
				game_mode: flags.game_mode,
				game_submode: flags.game_submode,
				game_2x2: flags.game_2x2,
				title: flags.match_title
			},
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
	#packet_version = null;
	#setup = null;
	#field_id_jail = null;
	#status_before = null;
	process(value) {
		if (isRecord(value) !== true) throw new TypeError("Packet is not an object.");
		this.#packet_version ??= typeof value.v === "number" ? value.v : 1;
		let packet;
		switch (this.#packet_version) {
			case 2:
				packet = parse(valiM1DemoPacketSchema, value);
				break;
			case 1:
				packet = parse(valiM1DemoPacketV1Schema, value);
				break;
			default: throw new Error(`Unsupported packet version ${this.#packet_version}.`);
		}
		if (packet.setup) {
			this.#setup = packet.setup;
			this.#field_id_jail = this.#setup.config.fields.findIndex((field) => field.type === "jail");
		}
		if (this.#setup === null) throw new Error("Invalid state: received events before setup.");
		const { events, ...rest_packet } = packet;
		const events_rich = [];
		if (events.length > 0) {
			if (this.#status_before === null) throw new Error("Invalid state: received events before status.");
			if (packet.status) for (const [index, event] of packet.events.entries()) {
				const status_after = structuredClone(this.#status_before);
				if (hasEnrichment(event)) getEntrichment(event)({
					event,
					events_before: packet.events.slice(0, index).toReversed(),
					events_after: packet.events.slice(index),
					setup: this.#setup,
					field_id_jail: this.#field_id_jail,
					status: status_after
				});
				events_rich.push({
					status: {
						before: structuredClone(this.#status_before),
						after: structuredClone(status_after)
					},
					...event
				});
				this.#status_before = status_after;
			}
			else {
				const status = structuredClone(this.#status_before);
				events_rich.push(...packet.events.map((event) => {
					return {
						status: {
							before: status,
							after: status
						},
						...event
					};
				}));
			}
		}
		if (rest_packet.status) this.#status_before = rest_packet.status;
		this.#movement_options = null;
		return {
			events: events_rich,
			...rest_packet
		};
	}
	#movement_options = null;
	get movement_options() {
		if (this.#movement_options === null) this.#movement_options = getMovementOptions(this.#setup, this.#status_before);
		return this.#movement_options;
	}
	normalizeFieldId(field_id) {
		return normalizeFieldId(this.#setup, field_id);
	}
};
//#endregion
export { M1LiveDemo, packet_v1_action_mapping };
