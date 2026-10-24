Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_config = require("./config-DcREmBiw.cjs");
let valibot = require("valibot");
valibot = require_config.__toESM(valibot, 1);
//#region src/packet/events/auction.ts
var auction_exports = /* @__PURE__ */ require_config.__exportAll({
	enrichments: () => enrichments$16,
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
const enrichments$16 = {
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
var bank_exports = /* @__PURE__ */ require_config.__exportAll({
	enrichments: () => enrichments$15,
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
		amount: valibot.number(),
		shield: require_config.bit(false)
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
const enrichments$15 = {
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
		money: valibot.number(),
		shield: require_config.bit(false)
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "bank.fee",
			user_id: value.user_id,
			amount: value.money,
			shield: value.shield
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
//#region src/packet/events/bus.ts
var bus_exports = /* @__PURE__ */ require_config.__exportAll({
	valiSchemas: () => valiSchemas$17,
	valiV1Schemas: () => valiV1Schemas$17
});
const valiSchemas$17 = [];
const valiV1Schemas$17 = [valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.literal("chooseBusStop"),
	user_id: valibot.number(),
	stops: valibot.array(valibot.number())
}), valibot.transform((value) => {
	return {
		id: value._id,
		type: "movement.picker",
		user_id: value.user_id,
		movement: {
			source: "bus",
			distances: value.stops.toSorted((a, b) => a - b)
		}
	};
})), valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.literal("busStopChoosed"),
	user_id: valibot.number(),
	stop: valibot.picklist([
		-1,
		0,
		1
	]),
	mean_position: valibot.number(),
	move_reverse: require_config.bit(false),
	auto_selected: require_config.bit(false)
}), valibot.transform((value) => {
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
//#region src/packet/status/fields.ts
const m1DemoPacketStatusFieldsSchema = valibot.pipe(valibot.array(valibot.pipe(valibot.object({
	field_id: valibot.number(),
	owner_user_id: valibot.number(),
	level: valibot.number(),
	mortgage: valibot.optional(valibot.object({ round_until: valibot.optional(valibot.number()) })),
	last_rent_round: valibot.optional(valibot.number()),
	protection: valibot.optional(valibot.number(), 0)
}), valibot.transform((value) => value))), valibot.transform((value) => new Map(value.map((field) => [field.field_id, field]))));
const m1DemoPacketV1StatusFieldsSchema = valibot.pipe(valibot.record(valibot.string(), valibot.object({
	owner: valibot.number(),
	level: valibot.number(),
	mortgaged: valibot.boolean(),
	mortgage_lose_round: valibot.optional(valibot.number()),
	last_rent_round: valibot.optional(valibot.number()),
	protection: valibot.optional(valibot.number(), 0)
})), valibot.transform((value) => new Map(Object.entries(value).map(([field_id_string, field]) => {
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
const m1DemoPacketStatusPlayersSchema = valibot.pipe(valibot.array(valibot.pipe(valibot.object({
	/** User ID of the player. */
	user_id: valibot.number(),
	/**
	* Player status:
	* - `0`: players is active;
	* - `-1`: player is eliminated.
	*/
	status: valibot.number(),
	/** Player's position on the board. */
	position: valibot.number(),
	/** Player's cash. */
	cash: valibot.number(),
	/** Player's charges. */
	charges: valibot.optional(valibot.number(), 0),
	/** Player's score: how much rent they have collected. */
	score: valibot.number(),
	/** Player's jail status */
	jail: valibot.optional(valibot.object({ roll_double_attempts: valibot.number() })),
	loan: valibot.union([valibot.object({
		taken: valibot.pipe(valibot.literal(0), valibot.transform(() => false)),
		unlock_round: valibot.number()
	}), valibot.object({
		taken: valibot.pipe(valibot.literal(1), valibot.transform(() => true)),
		debt: valibot.number(),
		return_round: valibot.number()
	})]),
	restart: valibot.optional(valibot.object({ variant: valibot.nullable(require_config.m1DemoPacketSetupConfigRestartVariantSchema) })),
	stat: valibot.object({
		rent_history: valibot.optional(valibot.number(), 0),
		income_tax_base: valibot.optional(valibot.number(), 0)
	})
}), valibot.transform((value) => value))), valibot.transform((value) => new Map(value.map((player) => [player.user_id, player]))));
const m1DemoPacketV1StatusPlayersSchema = valibot.array(valibot.pipe(valibot.object({
	user_id: valibot.number(),
	team: valibot.optional(valibot.picklist([0, 1])),
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
		if (value.generator_id === -100) return;
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
		if (value === false) return;
		if (typeof value === "number") return { item_proto_id: value };
		return { item_proto_id: value.proto_id };
	}))),
	can_use_credit: valibot.optional(valibot.boolean(), false),
	status: valibot.number(),
	position: valibot.number(),
	money: valibot.number(),
	charges: valibot.optional(valibot.number(), 0),
	score: valibot.number(),
	jailed: valibot.boolean(),
	unjailAttempts: valibot.number(),
	credit_nextTakeRound: valibot.number(),
	credit_payRound: valibot.union([valibot.literal(false), valibot.number()]),
	credit_toPay: valibot.number(),
	restart: valibot.optional(valibot.union([valibot.pipe(valibot.literal(0), valibot.transform(() => null)), require_config.m1DemoPacketSetupConfigRestartVariantSchema])),
	rent_last: valibot.optional(valibot.number(), 0),
	income_tax_base: valibot.optional(valibot.number(), 0)
}), valibot.transform((value) => {
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
const m1DemoPacketStatusTimerSchema = valibot.union([valibot.object({
	/** Unix timestamp when timer for an action expires, in **milliseconds**. */
	ts_expires: valibot.number(),
	/** If timer is extra timer. */
	is_extra: valibot.boolean()
}), valibot.object({
	/** When match paused, time left in **milliseconds**. */
	expires_in: valibot.number(),
	/** If timer is extra timer. */
	is_extra: valibot.boolean()
})]);
//#endregion
//#region src/packet/status.ts
const m1DemoPacketStatusSchema = valibot.object({
	/** Round number. */
	round: valibot.number(),
	/** Players. */
	players: m1DemoPacketStatusPlayersSchema,
	/** Current information about fields. */
	fields: m1DemoPacketStatusFieldsSchema,
	/** Information about current turn. */
	turn: require_config.m1DemoPacketStatusTurnSchema,
	/**
	* Info about timer.
	*
	* If match set up with no timers, this object is not defined.
	*/
	timer: valibot.optional(m1DemoPacketStatusTimerSchema),
	/** Number of viewers. */
	viewers_count: valibot.optional(valibot.number(), 0)
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
const m1DemoPacketV1StatusActiontypeSchema = valibot.array(valibot.picklist(Object.keys(action_list_mapping)));
const m1DemoPacketV1ContractSchema = valibot.pipe(valibot.object({
	from: valibot.number(),
	to: valibot.number(),
	out_fields: valibot.array(valibot.number()),
	out_money: valibot.number(),
	in_fields: valibot.array(valibot.number()),
	in_money: valibot.number()
}), valibot.transform((value) => {
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
const m1DemoPacketV1StatusSchema = valibot.pipe(valibot.object({
	/** Round number. */
	round: valibot.number(),
	players: m1DemoPacketV1StatusPlayersSchema,
	fields: m1DemoPacketV1StatusFieldsSchema,
	player_ownerOfMove: valibot.nullable(valibot.number()),
	action_player: valibot.nullable(valibot.number()),
	action_type: m1DemoPacketV1StatusActiontypeSchema,
	current_move: valibot.optional(valibot.object({
		dices: valibot.optional(require_config.m1DemoDicesSchema),
		move_reverse: valibot.optional(valibot.boolean(), false),
		pay: valibot.optional(valibot.number()),
		moneyToPay: valibot.optional(valibot.number()),
		payTo: valibot.optional(valibot.number()),
		players_auctionStatus: valibot.optional(valibot.pipe(valibot.record(valibot.string(), valibot.number()), valibot.transform((value) => new Set(Object.entries(value).filter(([_, status]) => status === 0).map(([user_id_string]) => Math.trunc(Number(user_id_string))))))),
		field: valibot.optional(valibot.number()),
		bet: valibot.optional(valibot.number()),
		contract: valibot.optional(m1DemoPacketV1ContractSchema),
		contracts: valibot.optional(valibot.number()),
		jackpot_superprize_money: valibot.optional(valibot.number()),
		movement: valibot.optional(require_config.m1DemoPacketStatusTurnMovementSchema),
		wormhole_destinations: valibot.optional(valibot.array(valibot.number())),
		levelUpped: valibot.optional(valibot.array(valibot.number())),
		mortgaged: valibot.optional(valibot.array(valibot.number()))
	})),
	timeout_ts: valibot.number(),
	timeout_is_additional: valibot.boolean(),
	viewers: valibot.optional(valibot.number(), 0)
}), valibot.transform((value) => {
	for (const [index, player] of value.players.entries()) if (player._setup) player._setup.index = index;
	return value;
}), valibot.transform((value) => {
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
var contract_exports = /* @__PURE__ */ require_config.__exportAll({
	enrichments: () => enrichments$14,
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
		contract: require_config.m1DemoContractSchema
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("contract.reject"),
		user_id: valibot.number(),
		timeout: require_config.bit(false)
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("contract.review.init")
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("contract.review.approve"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("contract.review.object"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("contract.review.pass")
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("contract.revert")
	})
];
const enrichments$14 = {};
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
		contract: m1DemoPacketV1ContractSchema
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
		by_timeout: require_config.bit(false)
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "contract.reject",
			user_id: value.user_id,
			timeout: value.by_timeout
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("contract_protest_start")
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "contract.review.init"
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("contract_protest_refused"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "contract.review.approve",
			user_id: value.user_id
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("contract_protest_commited"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "contract.review.object",
			user_id: value.user_id
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("contract_protest_refused_all")
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "contract.review.pass"
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("contract_fallback")
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "contract.revert"
		};
	}))
];
//#endregion
//#region src/packet/events/jackpot.ts
var jackpot_exports = /* @__PURE__ */ require_config.__exportAll({
	enrichments: () => enrichments$13,
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
		/** Amount of money that player won. */
		amount: valibot.number(),
		/** Dice value rolled. Exists only on Jackpot V2. */
		dice_rolled: valibot.optional(valibot.number())
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jackpot.lose"),
		user_id: valibot.number(),
		/** Amount of money that player lost. Exists only on Jackpot V1. */
		amount: valibot.optional(valibot.number()),
		/** Dice value rolled. Exists only on Jackpot V2. */
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
const enrichments$13 = {
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
var jail_exports = /* @__PURE__ */ require_config.__exportAll({
	enrichments: () => enrichments$12,
	valiSchemas: () => valiSchemas$14,
	valiV1Schemas: () => valiV1Schemas$14
});
const valiSchemas$14 = [
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jail.put"),
		user_id: valibot.number(),
		income_tax: require_config.bit(false)
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jail.put.double"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jail.fine"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jail.visit"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jail.stay"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jail.release"),
		user_id: valibot.number(),
		position_after: valibot.optional(valibot.number())
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jail.release.pay"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("jail.release.income-tax-write-off"),
		user_id: valibot.number()
	})
];
const enrichments$12 = {
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
		user_id: valibot.number(),
		income_tax: require_config.bit(false)
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "jail.put",
			user_id: value.user_id,
			income_tax: value.income_tax
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
		type: valibot.literal("goToJailFine"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "jail.fine",
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
		type: valibot.literal("stayInJail"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "jail.stay",
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
		type: valibot.literal("unjailedByIncomeTaxWriteOff"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "jail.release.income-tax-write-off",
			user_id: value.user_id
		};
	}))
];
//#endregion
//#region src/packet/events/level.ts
var level_exports = /* @__PURE__ */ require_config.__exportAll({
	enrichments: () => enrichments$11,
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
const enrichments$11 = {
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
var loan_exports = /* @__PURE__ */ require_config.__exportAll({
	enrichments: () => enrichments$10,
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
const enrichments$10 = {
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
var m1_exports = /* @__PURE__ */ require_config.__exportAll({
	enrichments: () => enrichments$9,
	valiSchemas: () => valiSchemas$11,
	valiV1Schemas: () => valiV1Schemas$11
});
const valiSchemas$11 = [valibot.object({
	id: valibot.string(),
	type: valibot.literal("m1.move"),
	user_id: valibot.number(),
	rule: valibot.pipe(valibot.picklist([0, 1]), valibot.transform((value) => value === 0 ? "free" : "enemy_owned")),
	field_id: valibot.number(),
	move_reversed: require_config.bit(false)
}), valibot.object({
	id: valibot.string(),
	type: valibot.literal("m1.fail"),
	user_id: valibot.number()
})];
const enrichments$9 = { "m1.move"(options) {
	const player = options.status.players.get(options.event.user_id);
	player.position = options.event.field_id;
} };
const valiV1Schemas$11 = [valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.literal("mrMonopoly"),
	user_id: valibot.number(),
	field_type: valibot.pipe(valibot.picklist([0, 1]), valibot.transform((value) => value === 0 ? "free" : "enemy_owned")),
	field_id: valibot.number(),
	move_reverse: require_config.bit(false)
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
var mortgage_exports = /* @__PURE__ */ require_config.__exportAll({
	enrichments: () => enrichments$8,
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
		type: valibot.literal("mortgage.waive"),
		user_id: valibot.number(),
		field_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("mortgage.expire"),
		user_id: valibot.number(),
		field_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("waive"),
		user_id: valibot.number(),
		field_id: valibot.number()
	})
];
const enrichments$8 = {
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
		type: valibot.literal("rejectMortgaged"),
		user_id: valibot.number(),
		field: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "mortgage.waive",
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
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("fieldDropped"),
		user_id: valibot.number(),
		field: valibot.number()
	}), valibot.transform((value) => {
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
var movement_exports = /* @__PURE__ */ require_config.__exportAll({
	enrichments: () => enrichments$7,
	valiSchemas: () => valiSchemas$9,
	valiV1Schemas: () => valiV1Schemas$9
});
const movementPickerMovementSchema = valibot.variant("source", [
	valibot.object({
		source: valibot.literal("bus"),
		distances: valibot.array(valibot.number())
	}),
	valibot.object({
		source: valibot.literal("wormhole"),
		exit_count: valibot.number()
	}),
	valibot.object({ source: valibot.picklist([
		"mini_die",
		"taxi",
		"triple"
	]) })
]);
const movementGoMovementSchema = valibot.variant("source", [
	valibot.object({
		source: valibot.literal("bus"),
		stop_id: valibot.picklist([
			-1,
			0,
			1
		])
	}),
	valibot.object({
		source: valibot.literal("mini_die"),
		stop_id: valibot.picklist([0, 1])
	}),
	valibot.object({ source: valibot.picklist([
		"taxi",
		"triple",
		"wormhole"
	]) })
]);
const valiSchemas$9 = [valibot.object({
	id: valibot.string(),
	type: valibot.literal("movement.picker"),
	user_id: valibot.number(),
	movement: movementPickerMovementSchema
}), valibot.object({
	id: valibot.string(),
	type: valibot.literal("movement.go"),
	user_id: valibot.number(),
	field_id: valibot.number(),
	move_reversed: require_config.bit(false),
	auto_selected: require_config.bit(false),
	movement: movementGoMovementSchema
})];
const enrichments$7 = { "movement.go"(options) {
	const player = options.status.players.get(options.event.user_id);
	player.position = options.event.field_id;
} };
const valiV1Schemas$9 = [valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.literal("chooseFieldToMove"),
	user_id: valibot.number(),
	movement: valibot.optional(movementPickerMovementSchema)
}), valibot.transform((value) => {
	return {
		id: value._id,
		type: "movement.picker",
		user_id: value.user_id,
		movement: value.movement ?? { source: "triple" }
	};
})), valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.literal("fieldToMoveChoosed"),
	user_id: valibot.number(),
	field_id: valibot.number(),
	move_reverse: require_config.bit(false),
	movement: valibot.optional(movementGoMovementSchema)
}), valibot.transform((value) => {
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
var other_exports = /* @__PURE__ */ require_config.__exportAll({
	enrichments: () => enrichments$6,
	valiSchemas: () => valiSchemas$8,
	valiV1Schemas: () => valiV1Schemas$8
});
const chanceDataSchema = valibot.union([
	valibot.strictObject({ amount: valibot.number() }),
	valibot.strictObject({
		field_id: valibot.number(),
		move_reversed: require_config.bit(false)
	}),
	valibot.undefined_()
]);
const valiSchemas$8 = [
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
		shield: require_config.bit(false),
		data: valibot.optional(chanceDataSchema)
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("game-over")
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("leave"),
		user_id: valibot.number(),
		kicked: require_config.bit(false)
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("message"),
		user_id: valibot.number(),
		private: valibot.optional(valibot.object({ user_id: valibot.optional(valibot.number()) })),
		is_forced: require_config.bit(false),
		text: valibot.string()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("park"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("restart"),
		user_id: valibot.number(),
		restart_price: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("skip"),
		user_id: valibot.number()
	})
];
const enrichments$6 = { chance(options) {
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
const valiV1Schemas$8 = [
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
		shield: require_config.bit(false),
		money: valibot.optional(valibot.number()),
		move_reverse: valibot.optional(require_config.bit(false)),
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
			shield: value.shield,
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
		is_kicked: require_config.bit(false)
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
		forced: require_config.bit(false),
		text: valibot.string(),
		is_unsafe: require_config.bit(false)
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
		type: valibot.literal("relax"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "park",
			user_id: value.user_id
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
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("skip"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "skip",
			user_id: value.user_id
		};
	}))
];
//#endregion
//#region src/packet/events/pause.ts
var pause_exports = /* @__PURE__ */ require_config.__exportAll({
	valiSchemas: () => valiSchemas$7,
	valiV1Schemas: () => valiV1Schemas$7
});
const valiSchemas$7 = [valibot.object({
	id: valibot.string(),
	type: valibot.literal("pause.set")
}), valibot.object({
	id: valibot.string(),
	type: valibot.literal("pause.end")
})];
const valiV1Schemas$7 = [valibot.pipe(valibot.object({
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
var purchase_exports = /* @__PURE__ */ require_config.__exportAll({
	enrichments: () => enrichments$5,
	valiSchemas: () => valiSchemas$6,
	valiV1Schemas: () => valiV1Schemas$6
});
const valiSchemas$6 = [
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
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("purchase.buyout"),
		user_id: valibot.number(),
		user_id_receiver: valibot.number(),
		field_id: valibot.number(),
		price: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("purchase.buyout.reject"),
		user_id: valibot.number(),
		field_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("purchase.buyout.protect"),
		user_id: valibot.number(),
		field_id: valibot.number()
	})
];
const enrichments$5 = {
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
const valiV1Schemas$6 = [
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
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("buyOut"),
		field: valibot.number(),
		user_id: valibot.number(),
		to: valibot.number(),
		money: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "purchase.buyout",
			user_id: value.user_id,
			user_id_receiver: value.to,
			field_id: value.field,
			price: value.money
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("noBuyOut"),
		user_id: valibot.number(),
		field: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "purchase.buyout.reject",
			user_id: value.user_id,
			field_id: value.field
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("buyoutProtected"),
		user_id: valibot.number(),
		field: valibot.number()
	}), valibot.transform((value) => {
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
var rent_exports = /* @__PURE__ */ require_config.__exportAll({
	enrichments: () => enrichments$4,
	valiSchemas: () => valiSchemas$5,
	valiV1Schemas: () => valiV1Schemas$5
});
const valiSchemas$5 = [
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
		user_id_receiver: valibot.number(),
		field_id: valibot.number(),
		amount: valibot.number(),
		amount_received: valibot.optional(valibot.number())
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
		field_id: valibot.number(),
		shield: require_config.bit(false)
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
const enrichments$4 = { "rent.pay.complete"(options) {
	const { amount } = options.event;
	const player_payer = options.status.players.get(options.event.user_id);
	player_payer.cash -= amount;
	const user_id_receiver = options.status.fields.get(options.event.field_id).owner_user_id;
	const player_receiver = options.status.players.get(user_id_receiver);
	player_receiver.cash += amount;
} };
const valiV1Schemas$5 = [
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
		to: valibot.number(),
		field: valibot.number(),
		money: valibot.number(),
		money_received: valibot.optional(valibot.number())
	}), valibot.transform((value) => {
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
		field: valibot.number(),
		shield: require_config.bit(false)
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "rent.zero",
			user_id: value.user_id,
			field_id: value.field,
			shield: value.shield
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
//#region src/packet/events/russian-roulette.ts
var russian_roulette_exports = /* @__PURE__ */ require_config.__exportAll({
	enrichments: () => enrichments$3,
	valiSchemas: () => valiSchemas$4,
	valiV1Schemas: () => valiV1Schemas$4
});
const valiSchemas$4 = [
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("russian-roulette"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("russian-roulette.play"),
		user_id: valibot.number(),
		bullets_count: valibot.number(),
		reward_amount: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("russian-roulette.survive"),
		user_id: valibot.number(),
		reward_amount: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("russian-roulette.die"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("russian-roulette.reject"),
		user_id: valibot.number()
	})
];
const enrichments$3 = { "russian-roulette.survive"(options) {
	const player = options.status.players.get(options.event.user_id);
	player.cash += options.event.reward_amount;
} };
const valiV1Schemas$4 = [
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("russianRoulette"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "russian-roulette",
			user_id: value.user_id
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("russianRoulette_process"),
		user_id: valibot.number(),
		bullets: valibot.number(),
		reward: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "russian-roulette.play",
			user_id: value.user_id,
			bullets_count: value.bullets,
			reward_amount: value.reward
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("russianRoulette_alive"),
		user_id: valibot.number(),
		sum: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "russian-roulette.survive",
			user_id: value.user_id,
			reward_amount: value.sum
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("russianRoulette_died"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "russian-roulette.die",
			user_id: value.user_id
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("russianRoulette_declined"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "russian-roulette.reject",
			user_id: value.user_id
		};
	}))
];
//#endregion
//#region src/packet/events/start.ts
var start_exports = /* @__PURE__ */ require_config.__exportAll({
	enrichments: () => enrichments$2,
	valiSchemas: () => valiSchemas$3,
	valiV1Schemas: () => valiV1Schemas$3
});
const valiSchemas$3 = [
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("start.income"),
		user_id: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("start.bonus"),
		user_id: valibot.number(),
		amount: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("start.tax"),
		user_id: valibot.number(),
		amount: valibot.number()
	}),
	valibot.object({
		id: valibot.string(),
		type: valibot.literal("start.tax.pay"),
		user_id: valibot.number()
	})
];
const enrichments$2 = {
	"start.income"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.cash += options.setup.config.mechanics.start.income_amount;
	},
	"start.bonus"(options) {
		const player = options.status.players.get(options.event.user_id);
		player.cash += options.event.amount;
	}
};
const valiV1Schemas$3 = [
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("startBypass"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "start.income",
			user_id: value.user_id
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("start_bonus"),
		user_id: valibot.number(),
		money: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "start.bonus",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("startBypassFee"),
		user_id: valibot.number(),
		money: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "start.tax",
			user_id: value.user_id,
			amount: value.money
		};
	})),
	valibot.pipe(valibot.object({
		_id: valibot.optional(valibot.string()),
		type: valibot.literal("startBypassFeePaid"),
		user_id: valibot.number()
	}), valibot.transform((value) => {
		return {
			id: value._id,
			type: "start.tax.pay",
			user_id: value.user_id
		};
	}))
];
//#endregion
//#region src/packet/events/tournament.ts
var tournament_exports = /* @__PURE__ */ require_config.__exportAll({
	enrichments: () => enrichments$1,
	valiSchemas: () => valiSchemas$2,
	valiV1Schemas: () => valiV1Schemas$2
});
const valiSchemas$2 = [valibot.object({
	id: valibot.string(),
	type: valibot.literal("tournament.drop"),
	user_ids: valibot.array(valibot.number())
})];
const enrichments$1 = {};
const valiV1Schemas$2 = [valibot.pipe(valibot.object({
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
//#region src/packet/events/wormhole.ts
var wormhole_exports = /* @__PURE__ */ require_config.__exportAll({
	valiSchemas: () => valiSchemas$1,
	valiV1Schemas: () => valiV1Schemas$1
});
const valiSchemas$1 = [valibot.object({
	id: valibot.string(),
	type: valibot.literal("wormhole"),
	user_id: valibot.number()
}), valibot.object({
	id: valibot.string(),
	type: valibot.literal("wormhole.reject"),
	user_id: valibot.number()
})];
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
			type: "movement.picker",
			user_id: value.user_id,
			movement: {
				source: "wormhole",
				exit_count: value.destinations_count
			}
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
		move_reverse: require_config.bit(false)
	}), valibot.transform((value) => {
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
	require_config.roll_dices_exports,
	russian_roulette_exports,
	start_exports,
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
const valiRecordParser = valibot.safeParser(valibot.record(valibot.string(), valibot.unknown()));
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
const m1DemoPacketEventsSchema = valibot.array(valibot.union([...valiSchemas, valibot.pipe(valibot.object({
	id: valibot.string(),
	type: valibot.string()
}), valibot.transform(({ type, ...value_rest }) => {
	return {
		type: "_unknown",
		type_received: type,
		...value_rest
	};
}))]));
const m1DemoPacketV1EventElementSchema = valibot.union([...valiV1Schemas, valibot.pipe(valibot.object({
	_id: valibot.optional(valibot.string()),
	type: valibot.string()
}), valibot.transform(({ _id, type, ...value_rest }) => {
	return {
		id: _id,
		type: "_unknown",
		type_received: type,
		...value_rest
	};
}))]);
const m1DemoPacketV1EventsSchema = valibot.pipe(valibot.union([valibot.array(m1DemoPacketV1EventElementSchema), valibot.record(valibot.string(), m1DemoPacketV1EventElementSchema)]), valibot.transform((value) => {
	if (isRecord(value)) return Object.entries(value).map(([_id, event]) => {
		return {
			_id,
			...event
		};
	});
	return value;
}), valibot.transform((value) => {
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
const m1DemoPacketSetupPlayerSchema = valibot.pipe(valibot.object({
	user_id: valibot.number(),
	team: valibot.optional(valibot.picklist([0, 1])),
	is_vip: require_config.bit(false),
	is_loan_available: require_config.bit(false),
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
const m1DemoPacketSetupSchema = valibot.object({
	/** Constants that define basic rules of the match. */
	config: require_config.m1DemoPacketSetupConfigSchema,
	flags: valibot.object({
		game_mode: valibot.number(),
		game_submode: valibot.number(),
		game_2x2: require_config.bit(false),
		title: valibot.optional(valibot.string())
	}),
	players: valibot.pipe(valibot.array(m1DemoPacketSetupPlayerSchema), valibot.transform((value) => {
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
const m1DemoPacketTimeSchema = valibot.pipe(valibot.object({
	/** Unix timestamp of the start of the game in **milliseconds**. */
	ts_start: valibot.number(),
	/** Unix timestamp of the packet in **milliseconds**. */
	ts_now: valibot.number(),
	/** Total length of all pauses in the game excluding one that is currently active in **milliseconds**. */
	inactive: valibot.number(),
	/** Unix timestamp of the start of the current pause in **milliseconds**. */
	ts_inactive: valibot.optional(valibot.number())
}), valibot.transform((value) => {
	return {
		...value,
		/** Difference between server's and browser's time in **milliseconds**. */
		delta: Date.now() - value.ts_now
	};
}));
const m1DemoPacketV1TimeSchema = valibot.union([
	valibot.object({ time: m1DemoPacketTimeSchema }),
	valibot.pipe(valibot.object({ status: valibot.optional(valibot.object({ time: m1DemoPacketTimeSchema })) }), valibot.transform((value) => {
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
const m1DemoPacketSchema = valibot.object({
	v: valibot.optional(valibot.literal(2)),
	/** Various information about the match which is never changes. */
	setup: valibot.optional(m1DemoPacketSetupSchema),
	/** Events happened before game went to the "status". */
	events: m1DemoPacketEventsSchema,
	/** Current status of the match. */
	status: valibot.optional(m1DemoPacketStatusSchema),
	/** Information about match time. */
	time: m1DemoPacketTimeSchema
});
const m1DemoPacketV1Schema = valibot.intersect([m1DemoPacketV1TimeSchema, valibot.pipe(valibot.object({
	config: valibot.optional(require_config.m1DemoPacketV1ConfigSchema),
	flags: valibot.optional(valibot.object({
		game_mode: valibot.number(),
		game_submode: valibot.number(),
		game_2x2: require_config.bit(false),
		match_title: valibot.optional(valibot.string())
	})),
	events: m1DemoPacketV1EventsSchema,
	status: valibot.optional(m1DemoPacketV1StatusSchema)
}), valibot.transform((value) => {
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
	packet_version = null;
	#setup = null;
	#field_id_jail = null;
	#status_before = null;
	process(value) {
		if (isRecord(value) !== true) throw new TypeError("Packet is not an object.");
		this.packet_version ??= typeof value.v === "number" ? value.v : 1;
		let packet;
		switch (this.packet_version) {
			case 2:
				packet = require_config.parse(m1DemoPacketSchema, value);
				break;
			case 1:
				packet = require_config.parse(m1DemoPacketV1Schema, value);
				break;
			default: throw new Error(`Unsupported packet version ${this.packet_version}.`);
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
		if (this.#movement_options === null) this.#movement_options = require_config.getMovementOptions(this.#setup, this.#status_before);
		return this.#movement_options;
	}
	normalizeFieldId(field_id) {
		return require_config.normalizeFieldId(this.#setup, field_id);
	}
};
//#endregion
exports.M1LiveDemo = M1LiveDemo;
exports.packet_v1_action_mapping = packet_v1_action_mapping;
