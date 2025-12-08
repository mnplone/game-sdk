import * as v from "valibot";

//#region src/utils/types.d.ts
type SetElement<T> = T extends Set<infer V> ? V : never;
type MapElement<T> = T extends Map<infer _, infer V> ? V : never;
//#endregion
//#region src/packet/status/turn.d.ts
declare const valiM1DemoContractSchema: v.SchemaWithPipe<readonly [v.TupleSchema<[v.ObjectSchema<{
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_ids: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
  readonly cash: v.NumberSchema<undefined>;
}, undefined>, v.ObjectSchema<{
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_ids: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
  readonly cash: v.NumberSchema<undefined>;
}, undefined>], undefined>, v.TransformAction<[{
  user_id: number;
  field_ids: number[];
  cash: number;
}, {
  user_id: number;
  field_ids: number[];
  cash: number;
}], {
  initiator: {
    user_id: number;
    field_ids: Set<number>;
    cash: number;
  };
  responder: {
    user_id: number;
    field_ids: Set<number>;
    cash: number;
  };
}>]>;
type M1DemoContract = v.InferOutput<typeof valiM1DemoContractSchema>;
declare const valiM1DemoPacketStatusTurnSchema: v.ObjectSchema<{
  /** User ID of the player whose turn it is. */
  readonly user_id: v.NullableSchema<v.NumberSchema<undefined>, undefined>;
  readonly action: v.ObjectSchema<{
    /** User ID of the player from which action is expected. */
    readonly user_id: v.NullableSchema<v.NumberSchema<undefined>, undefined>;
    readonly list: v.SchemaWithPipe<readonly [v.ArraySchema<v.PicklistSchema<["auction.put", "auction.bid", "auction.reject", "bank.fee.pay", "bus.move", "contract.send", "contract.accept", "contract.reject", "contract.review.approve", "contract.review.object", "contract.fallback", "jackpot.reject", "jackpot.play", "jail.release.pay", "level.build", "level.sell", "loan.take", "loan.repay", "mortgage.put", "mortgage.buyback", "mortgage.auction", "waive", "purchase", "purchase.reject", "rent.pay", "roll-dices", "russian-roulette.play", "russian-roulette.reject", "start.tax.pay", "taxi.move", "triple.move", "wormhole.use", "wormhole.open", "wormhole.jump", "wormhole.reject", "restart"], undefined>, undefined>, v.TransformAction<("restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump")[], Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">>]>;
  }, undefined>;
  readonly move_reversed: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  readonly auction: v.OptionalSchema<v.ObjectSchema<{
    readonly field_id: v.NumberSchema<undefined>;
    readonly bid: v.NumberSchema<undefined>;
    readonly user_ids_rejected: v.SchemaWithPipe<readonly [v.ArraySchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number[], Set<number>>]>;
  }, undefined>, undefined>;
  readonly contract: v.OptionalSchema<v.SchemaWithPipe<readonly [v.TupleSchema<[v.ObjectSchema<{
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_ids: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    readonly cash: v.NumberSchema<undefined>;
  }, undefined>, v.ObjectSchema<{
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_ids: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    readonly cash: v.NumberSchema<undefined>;
  }, undefined>], undefined>, v.TransformAction<[{
    user_id: number;
    field_ids: number[];
    cash: number;
  }, {
    user_id: number;
    field_ids: number[];
    cash: number;
  }], {
    initiator: {
      user_id: number;
      field_ids: Set<number>;
      cash: number;
    };
    responder: {
      user_id: number;
      field_ids: Set<number>;
      cash: number;
    };
  }>]>, undefined>;
  readonly contracts_sent: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly jackpot: v.OptionalSchema<v.ObjectSchema<{
    readonly superprize: v.NumberSchema<undefined>;
  }, undefined>, undefined>;
  readonly payment: v.OptionalSchema<v.ObjectSchema<{
    readonly to_user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly amount: v.NumberSchema<undefined>;
  }, undefined>, undefined>;
  /** Fields on which player can move in this action. */
  readonly field_ids_move: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
    readonly field_id: v.NumberSchema<undefined>;
    readonly data: v.UnionSchema<[v.ObjectSchema<{
      readonly stop: v.NumberSchema<undefined>;
    }, undefined>, v.ObjectSchema<{
      readonly field_id: v.NumberSchema<undefined>;
    }, undefined>], undefined>;
  }, undefined>, undefined>, v.TransformAction<{
    field_id: number;
    data: {
      stop: number;
    } | {
      field_id: number;
    };
  }[], Map<number, {
    stop: number;
  } | {
    field_id: number;
  }>>]>, undefined>;
  /** Fields on which player already built a level this turn. */
  readonly field_ids_level_built: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number[], Set<number>>]>, undefined>;
  /** Fields which player already mortgaged this turn. */
  readonly field_ids_mortgaged: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number[], Set<number>>]>, undefined>;
}, undefined>;
type M1DemoPacketStatusTurn = v.InferOutput<typeof valiM1DemoPacketStatusTurnSchema>;
type M1DemoPacketStatusTurnActionListElement = SetElement<M1DemoPacketStatusTurn['action']['list']>;
//#endregion
//#region src/packet/status.d.ts
declare const valiM1DemoPacketStatusSchema: v.ObjectSchema<{
  /** Round number. */
  readonly round: v.NumberSchema<undefined>;
  /** Players. */
  readonly players: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly user_id: v.NumberSchema<undefined>;
    readonly status: v.NumberSchema<undefined>;
    readonly position: v.NumberSchema<undefined>;
    readonly cash: v.NumberSchema<undefined>;
    readonly score: v.NumberSchema<undefined>;
    readonly jail: v.OptionalSchema<v.ObjectSchema<{
      readonly roll_double_attempts: v.NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly loan: v.UnionSchema<[v.ObjectSchema<{
      readonly taken: v.SchemaWithPipe<readonly [v.LiteralSchema<0, undefined>, v.TransformAction<0, false>]>;
      readonly unlock_round: v.NumberSchema<undefined>;
    }, undefined>, v.ObjectSchema<{
      readonly taken: v.SchemaWithPipe<readonly [v.LiteralSchema<1, undefined>, v.TransformAction<1, true>]>;
      readonly debt: v.NumberSchema<undefined>;
      readonly return_round: v.NumberSchema<undefined>;
    }, undefined>], undefined>;
    readonly restart: v.OptionalSchema<v.ObjectSchema<{
      readonly variant: v.NullableSchema<v.ObjectSchema<{
        readonly round_from: v.NumberSchema<undefined>;
        readonly round_to: v.NumberSchema<undefined>;
        readonly count: v.NumberSchema<undefined>;
        readonly price: v.NumberSchema<undefined>;
      }, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly stat: v.ObjectSchema<{
      readonly mini_die_cooldown: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
      readonly rent_history: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>;
  }, undefined>, v.TransformAction<{
    user_id: number;
    status: number;
    position: number;
    cash: number;
    score: number;
    jail?: {
      roll_double_attempts: number;
    } | undefined;
    loan: {
      taken: false;
      unlock_round: number;
    } | {
      taken: true;
      debt: number;
      return_round: number;
    };
    restart?: {
      variant: {
        round_from: number;
        round_to: number;
        count: number;
        price: number;
      } | null;
    } | undefined;
    stat: {
      mini_die_cooldown?: number | undefined;
      rent_history?: number | undefined;
    };
  }, {
    user_id: number;
    status: number;
    position: number;
    cash: number;
    score: number;
    jail?: {
      roll_double_attempts: number;
    } | undefined;
    loan: {
      taken: false;
      unlock_round: number;
    } | {
      taken: true;
      debt: number;
      return_round: number;
    };
    restart?: {
      variant: {
        round_from: number;
        round_to: number;
        count: number;
        price: number;
      } | null;
    } | undefined;
    stat: {
      mini_die_cooldown?: number | undefined;
      rent_history?: number | undefined;
    };
  }>]>, undefined>, v.TransformAction<{
    user_id: number;
    status: number;
    position: number;
    cash: number;
    score: number;
    jail?: {
      roll_double_attempts: number;
    } | undefined;
    loan: {
      taken: false;
      unlock_round: number;
    } | {
      taken: true;
      debt: number;
      return_round: number;
    };
    restart?: {
      variant: {
        round_from: number;
        round_to: number;
        count: number;
        price: number;
      } | null;
    } | undefined;
    stat: {
      mini_die_cooldown?: number | undefined;
      rent_history?: number | undefined;
    };
  }[], Map<number, {
    user_id: number;
    status: number;
    position: number;
    cash: number;
    score: number;
    jail?: {
      roll_double_attempts: number;
    } | undefined;
    loan: {
      taken: false;
      unlock_round: number;
    } | {
      taken: true;
      debt: number;
      return_round: number;
    };
    restart?: {
      variant: {
        round_from: number;
        round_to: number;
        count: number;
        price: number;
      } | null;
    } | undefined;
    stat: {
      mini_die_cooldown?: number | undefined;
      rent_history?: number | undefined;
    };
  }>>]>;
  /** Current information about fields. */
  readonly fields: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly field_id: v.NumberSchema<undefined>;
    readonly owner_user_id: v.NumberSchema<undefined>;
    readonly level: v.NumberSchema<undefined>;
    readonly mortgage: v.OptionalSchema<v.ObjectSchema<{
      readonly round_until: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
  }, undefined>, v.TransformAction<{
    field_id: number;
    owner_user_id: number;
    level: number;
    mortgage?: {
      round_until?: number | undefined;
    } | undefined;
  }, {
    field_id: number;
    owner_user_id: number;
    level: number;
    mortgage?: {
      round_until?: number | undefined;
    } | undefined;
  }>]>, undefined>, v.TransformAction<{
    field_id: number;
    owner_user_id: number;
    level: number;
    mortgage?: {
      round_until?: number | undefined;
    } | undefined;
  }[], Map<number, {
    field_id: number;
    owner_user_id: number;
    level: number;
    mortgage?: {
      round_until?: number | undefined;
    } | undefined;
  }>>]>;
  /** Information about current turn. */
  readonly turn: v.ObjectSchema<{
    readonly user_id: v.NullableSchema<v.NumberSchema<undefined>, undefined>;
    readonly action: v.ObjectSchema<{
      readonly user_id: v.NullableSchema<v.NumberSchema<undefined>, undefined>;
      readonly list: v.SchemaWithPipe<readonly [v.ArraySchema<v.PicklistSchema<["auction.put", "auction.bid", "auction.reject", "bank.fee.pay", "bus.move", "contract.send", "contract.accept", "contract.reject", "contract.review.approve", "contract.review.object", "contract.fallback", "jackpot.reject", "jackpot.play", "jail.release.pay", "level.build", "level.sell", "loan.take", "loan.repay", "mortgage.put", "mortgage.buyback", "mortgage.auction", "waive", "purchase", "purchase.reject", "rent.pay", "roll-dices", "russian-roulette.play", "russian-roulette.reject", "start.tax.pay", "taxi.move", "triple.move", "wormhole.use", "wormhole.open", "wormhole.jump", "wormhole.reject", "restart"], undefined>, undefined>, v.TransformAction<("restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump")[], Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">>]>;
    }, undefined>;
    readonly move_reversed: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly auction: v.OptionalSchema<v.ObjectSchema<{
      readonly field_id: v.NumberSchema<undefined>;
      readonly bid: v.NumberSchema<undefined>;
      readonly user_ids_rejected: v.SchemaWithPipe<readonly [v.ArraySchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number[], Set<number>>]>;
    }, undefined>, undefined>;
    readonly contract: v.OptionalSchema<v.SchemaWithPipe<readonly [v.TupleSchema<[v.ObjectSchema<{
      readonly user_id: v.NumberSchema<undefined>;
      readonly field_ids: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
      readonly cash: v.NumberSchema<undefined>;
    }, undefined>, v.ObjectSchema<{
      readonly user_id: v.NumberSchema<undefined>;
      readonly field_ids: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
      readonly cash: v.NumberSchema<undefined>;
    }, undefined>], undefined>, v.TransformAction<[{
      user_id: number;
      field_ids: number[];
      cash: number;
    }, {
      user_id: number;
      field_ids: number[];
      cash: number;
    }], {
      initiator: {
        user_id: number;
        field_ids: Set<number>;
        cash: number;
      };
      responder: {
        user_id: number;
        field_ids: Set<number>;
        cash: number;
      };
    }>]>, undefined>;
    readonly contracts_sent: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly jackpot: v.OptionalSchema<v.ObjectSchema<{
      readonly superprize: v.NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly payment: v.OptionalSchema<v.ObjectSchema<{
      readonly to_user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
      readonly amount: v.NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly field_ids_move: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
      readonly field_id: v.NumberSchema<undefined>;
      readonly data: v.UnionSchema<[v.ObjectSchema<{
        readonly stop: v.NumberSchema<undefined>;
      }, undefined>, v.ObjectSchema<{
        readonly field_id: v.NumberSchema<undefined>;
      }, undefined>], undefined>;
    }, undefined>, undefined>, v.TransformAction<{
      field_id: number;
      data: {
        stop: number;
      } | {
        field_id: number;
      };
    }[], Map<number, {
      stop: number;
    } | {
      field_id: number;
    }>>]>, undefined>;
    readonly field_ids_level_built: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number[], Set<number>>]>, undefined>;
    readonly field_ids_mortgaged: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number[], Set<number>>]>, undefined>;
  }, undefined>;
  /**
   * Info about timer.
   *
   * If match set up with no timers, this object is not defined.
   */
  readonly timer: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
    /** Unix timestamp when timer for an action expires, in **milliseconds**. */
    readonly ts_expires: v.NumberSchema<undefined>;
    /** If timer is extra timer. */
    readonly is_extra: v.BooleanSchema<undefined>;
  }, undefined>, v.ObjectSchema<{
    /** When match paused, time left in **milliseconds**. */
    readonly expires_in: v.NumberSchema<undefined>;
    /** If timer is extra timer. */
    readonly is_extra: v.BooleanSchema<undefined>;
  }, undefined>], undefined>, undefined>;
  /** Number of viewers. */
  readonly viewers_count: v.OptionalSchema<v.NumberSchema<undefined>, 0>;
}, undefined>;
type M1DemoPacketStatus = v.InferOutput<typeof valiM1DemoPacketStatusSchema>;
declare const action_list_mapping: {
  readonly toAuction: "auction.put";
  readonly auctionAccept: "auction.bid";
  readonly auctionDecline: "auction.reject";
  readonly payToBank: "bank.fee.pay";
  readonly chooseBusStop: "bus.move";
  readonly contract: "contract.send";
  readonly contract_accept: "contract.accept";
  readonly contract_decline: "contract.reject";
  readonly contractProtestRefuse: "contract.review.approve";
  readonly contractProtestCommit: "contract.review.object";
  readonly jackpotDecline: "jackpot.reject";
  readonly jackpotPlay: "jackpot.play";
  readonly payForUnjail: "jail.release.pay";
  readonly levelUp: "level.build";
  readonly levelDown: "level.sell";
  readonly credit_take: "loan.take";
  readonly credit_pay: "loan.repay";
  readonly mortgage: "mortgage.put";
  readonly unmortgage: "mortgage.buyback";
  readonly auctionMortgaged: "mortgage.auction";
  readonly fieldDrop: "waive";
  readonly buy: "purchase";
  readonly noBuy: "purchase.reject";
  readonly payRent: "rent.pay";
  readonly rollDices: "roll-dices";
  readonly russianRoulettePlay: "russian-roulette.play";
  readonly russianRouletteDecline: "russian-roulette.reject";
  readonly startBypassFee: "start.tax.pay";
  readonly chooseTaxiStop: "taxi.move";
  readonly chooseFieldToMove: "triple.move";
  readonly wormholeUse: "wormhole.use";
  readonly wormholeOpen: "wormhole.open";
  readonly wormholeJump: "wormhole.jump";
  readonly wormholeDecline: "wormhole.reject";
  readonly restart: "restart";
};
declare const extra_actions_mapping: readonly [readonly ["leave", "leave"], readonly ["message", "message"], readonly ["pause.set", "pause"], readonly ["pause.end", "pauseRemove"], readonly ["contract.fallback", "contractFallback"]];
declare const packetv1_action_mapping: Record<M1DemoPacketStatusTurnActionListElement | (typeof extra_actions_mapping)[number][0], keyof typeof action_list_mapping | (typeof extra_actions_mapping)[number][1]>;
//#endregion
//#region src/packet/setup/config/chance.d.ts
declare const valiM1DemoPacketSetupConfigMechanicsChanceSchema: v.StrictObjectSchema<{
  readonly cards: v.ArraySchema<v.UnionSchema<[v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"income", undefined>;
    readonly text_id: v.NumberSchema<undefined>;
    readonly range: v.StrictObjectSchema<{
      readonly min: v.NumberSchema<undefined>;
      readonly max: v.NumberSchema<undefined>;
      readonly step: v.NumberSchema<undefined>;
    }, undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"expense", undefined>;
    readonly text_id: v.NumberSchema<undefined>;
    readonly range: v.StrictObjectSchema<{
      readonly min: v.NumberSchema<undefined>;
      readonly max: v.NumberSchema<undefined>;
      readonly step: v.NumberSchema<undefined>;
    }, undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"repair", undefined>;
    readonly text_id: v.NumberSchema<undefined>;
    readonly cost: v.StrictObjectSchema<{
      readonly small: v.NumberSchema<undefined>;
      readonly big: v.NumberSchema<undefined>;
    }, undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"go-to-jail", undefined>;
    readonly text_id: v.NumberSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"teleport", undefined>;
    readonly text_id: v.NumberSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"skip-move", undefined>;
    readonly text_id: v.NumberSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"insurance", undefined>;
    readonly text_id: v.NumberSchema<undefined>;
    readonly price: v.NumberSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"birthday", undefined>;
    readonly text_id: v.NumberSchema<undefined>;
    readonly amount: v.NumberSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"reverse", undefined>;
    readonly text_id: v.NumberSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"disaster", undefined>;
    readonly text_id: v.NumberSchema<undefined>;
  }, undefined>], undefined>, undefined>;
}, undefined>;
type M1DemoPacketSetupConfigChanceCard = v.InferOutput<typeof valiM1DemoPacketSetupConfigMechanicsChanceSchema>['cards'][0];
type M1DemoPacketSetupConfigChanceCardType = M1DemoPacketSetupConfigChanceCard['type'];
//#endregion
//#region src/packet/setup/config/fields.d.ts
declare const valiM1DemoPacketSetupConfigFieldsSchema: v.SchemaWithPipe<readonly [v.ArraySchema<v.UnionSchema<[v.ObjectSchema<{
  readonly is_corner: v.SchemaWithPipe<readonly [v.LiteralSchema<1, undefined>, v.TransformAction<1, true>]>;
  readonly type: v.PicklistSchema<["start", "jail"], undefined>;
}, undefined>, v.ObjectSchema<{
  readonly is_corner: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  readonly type: v.PicklistSchema<["cash.pay", "cash.receive", "chance", "jackpot", "jail.goto", "park", "russian-roulette", "tax.income", "tax.luxury", "wormhole"], undefined>;
}, undefined>, v.ObjectSchema<{
  readonly is_corner: v.SchemaWithPipe<readonly [v.UndefinedSchema<undefined>, v.TransformAction<undefined, false>]>;
  readonly type: v.LiteralSchema<"company", undefined>;
  readonly monopoly_id: v.NumberSchema<undefined>;
  readonly is_last: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined>], undefined>, undefined>, v.TransformAction<({
  is_corner: true;
  type: "start" | "jail";
} | {
  is_corner: boolean;
  type: "cash.pay" | "cash.receive" | "chance" | "jackpot" | "jail.goto" | "park" | "russian-roulette" | "tax.income" | "tax.luxury" | "wormhole";
} | {
  is_corner: false;
  type: "company";
  monopoly_id: number;
  is_last: boolean;
})[], ({
  is_corner: true;
  type: "start" | "jail";
} | {
  is_corner: boolean;
  type: "cash.pay" | "cash.receive" | "chance" | "jackpot" | "jail.goto" | "park" | "russian-roulette" | "tax.income" | "tax.luxury" | "wormhole";
} | {
  item_proto_id: number;
  is_corner: false;
  type: "company";
  monopoly_id: number;
  is_last: boolean;
})[]>]>;
type M1DemoPacketSetupConfigField = v.InferOutput<typeof valiM1DemoPacketSetupConfigFieldsSchema>[0];
//#endregion
//#region src/packet/setup/config/monopolies.d.ts
declare const valiM1DemoPacketSetupConfigMonopoliesSchema: v.SchemaWithPipe<readonly [v.RecordSchema<v.StringSchema<undefined>, v.UnionSchema<[v.ObjectSchema<{
  readonly buy_price: v.NumberSchema<undefined>;
  readonly rent_by_level: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
  readonly level_cost: v.NumberSchema<undefined>;
  readonly last_field: v.OptionalSchema<v.ObjectSchema<{
    readonly buy_price: v.NumberSchema<undefined>;
    readonly rent_by_level: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
  }, undefined>, undefined>;
}, undefined>, v.ObjectSchema<{
  readonly buy_price: v.NumberSchema<undefined>;
  readonly rent_by_count: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
}, undefined>, v.ObjectSchema<{
  readonly buy_price: v.NumberSchema<undefined>;
  readonly dice_multipliers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
}, undefined>, v.ObjectSchema<{
  readonly buy_price: v.NumberSchema<undefined>;
  readonly return_multipliers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
}, undefined>], undefined>, undefined>, v.TransformAction<{
  [x: string]: {
    buy_price: number;
    rent_by_level: number[];
    level_cost: number;
    last_field?: {
      buy_price: number;
      rent_by_level: number[];
    } | undefined;
  } | {
    buy_price: number;
    rent_by_count: number[];
  } | {
    buy_price: number;
    dice_multipliers: number[];
  } | {
    buy_price: number;
    return_multipliers: number[];
  };
}, Map<number, {
  buy_price: number;
  rent_by_level: number[];
  level_cost: number;
  last_field?: {
    buy_price: number;
    rent_by_level: number[];
  } | undefined;
} | {
  buy_price: number;
  rent_by_count: number[];
} | {
  buy_price: number;
  dice_multipliers: number[];
} | {
  buy_price: number;
  return_multipliers: number[];
}>>]>;
type M1DemoPacketSetupConfigMonopoly = MapElement<v.InferOutput<typeof valiM1DemoPacketSetupConfigMonopoliesSchema>>;
//#endregion
//#region src/packet/setup/config.d.ts
declare const valiM1DemoPacketSetupConfigSchema: v.ObjectSchema<{
  /** Version of the config. */
  readonly version: v.NumberSchema<undefined>;
  readonly board_size: v.TupleSchema<[v.NumberSchema<undefined>, v.NumberSchema<undefined>], undefined>;
  readonly timers: v.ObjectSchema<{
    readonly roll_dices: v.NumberSchema<undefined>;
  }, undefined>;
  readonly fields: v.SchemaWithPipe<readonly [v.ArraySchema<v.UnionSchema<[v.ObjectSchema<{
    readonly is_corner: v.SchemaWithPipe<readonly [v.LiteralSchema<1, undefined>, v.TransformAction<1, true>]>;
    readonly type: v.PicklistSchema<["start", "jail"], undefined>;
  }, undefined>, v.ObjectSchema<{
    readonly is_corner: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly type: v.PicklistSchema<["cash.pay", "cash.receive", "chance", "jackpot", "jail.goto", "park", "russian-roulette", "tax.income", "tax.luxury", "wormhole"], undefined>;
  }, undefined>, v.ObjectSchema<{
    readonly is_corner: v.SchemaWithPipe<readonly [v.UndefinedSchema<undefined>, v.TransformAction<undefined, false>]>;
    readonly type: v.LiteralSchema<"company", undefined>;
    readonly monopoly_id: v.NumberSchema<undefined>;
    readonly is_last: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  }, undefined>], undefined>, undefined>, v.TransformAction<({
    is_corner: true;
    type: "start" | "jail";
  } | {
    is_corner: boolean;
    type: "cash.pay" | "cash.receive" | "chance" | "jackpot" | "jail.goto" | "park" | "russian-roulette" | "tax.income" | "tax.luxury" | "wormhole";
  } | {
    is_corner: false;
    type: "company";
    monopoly_id: number;
    is_last: boolean;
  })[], ({
    is_corner: true;
    type: "start" | "jail";
  } | {
    is_corner: boolean;
    type: "cash.pay" | "cash.receive" | "chance" | "jackpot" | "jail.goto" | "park" | "russian-roulette" | "tax.income" | "tax.luxury" | "wormhole";
  } | {
    item_proto_id: number;
    is_corner: false;
    type: "company";
    monopoly_id: number;
    is_last: boolean;
  })[]>]>;
  readonly monopolies: v.SchemaWithPipe<readonly [v.RecordSchema<v.StringSchema<undefined>, v.UnionSchema<[v.ObjectSchema<{
    readonly buy_price: v.NumberSchema<undefined>;
    readonly rent_by_level: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    readonly level_cost: v.NumberSchema<undefined>;
    readonly last_field: v.OptionalSchema<v.ObjectSchema<{
      readonly buy_price: v.NumberSchema<undefined>;
      readonly rent_by_level: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
  }, undefined>, v.ObjectSchema<{
    readonly buy_price: v.NumberSchema<undefined>;
    readonly rent_by_count: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
  }, undefined>, v.ObjectSchema<{
    readonly buy_price: v.NumberSchema<undefined>;
    readonly dice_multipliers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
  }, undefined>, v.ObjectSchema<{
    readonly buy_price: v.NumberSchema<undefined>;
    readonly return_multipliers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
  }, undefined>], undefined>, undefined>, v.TransformAction<{
    [x: string]: {
      buy_price: number;
      rent_by_level: number[];
      level_cost: number;
      last_field?: {
        buy_price: number;
        rent_by_level: number[];
      } | undefined;
    } | {
      buy_price: number;
      rent_by_count: number[];
    } | {
      buy_price: number;
      dice_multipliers: number[];
    } | {
      buy_price: number;
      return_multipliers: number[];
    };
  }, Map<number, {
    buy_price: number;
    rent_by_level: number[];
    level_cost: number;
    last_field?: {
      buy_price: number;
      rent_by_level: number[];
    } | undefined;
  } | {
    buy_price: number;
    rent_by_count: number[];
  } | {
    buy_price: number;
    dice_multipliers: number[];
  } | {
    buy_price: number;
    return_multipliers: number[];
  }>>]>;
  readonly mechanics: v.ObjectSchema<{
    readonly auction: v.OptionalSchema<v.ObjectSchema<{
      readonly bid_increment: v.NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly chance: v.OptionalSchema<v.StrictObjectSchema<{
      readonly cards: v.ArraySchema<v.UnionSchema<[v.StrictObjectSchema<{
        readonly type: v.LiteralSchema<"income", undefined>;
        readonly text_id: v.NumberSchema<undefined>;
        readonly range: v.StrictObjectSchema<{
          readonly min: v.NumberSchema<undefined>;
          readonly max: v.NumberSchema<undefined>;
          readonly step: v.NumberSchema<undefined>;
        }, undefined>;
      }, undefined>, v.StrictObjectSchema<{
        readonly type: v.LiteralSchema<"expense", undefined>;
        readonly text_id: v.NumberSchema<undefined>;
        readonly range: v.StrictObjectSchema<{
          readonly min: v.NumberSchema<undefined>;
          readonly max: v.NumberSchema<undefined>;
          readonly step: v.NumberSchema<undefined>;
        }, undefined>;
      }, undefined>, v.StrictObjectSchema<{
        readonly type: v.LiteralSchema<"repair", undefined>;
        readonly text_id: v.NumberSchema<undefined>;
        readonly cost: v.StrictObjectSchema<{
          readonly small: v.NumberSchema<undefined>;
          readonly big: v.NumberSchema<undefined>;
        }, undefined>;
      }, undefined>, v.StrictObjectSchema<{
        readonly type: v.LiteralSchema<"go-to-jail", undefined>;
        readonly text_id: v.NumberSchema<undefined>;
      }, undefined>, v.StrictObjectSchema<{
        readonly type: v.LiteralSchema<"teleport", undefined>;
        readonly text_id: v.NumberSchema<undefined>;
      }, undefined>, v.StrictObjectSchema<{
        readonly type: v.LiteralSchema<"skip-move", undefined>;
        readonly text_id: v.NumberSchema<undefined>;
      }, undefined>, v.StrictObjectSchema<{
        readonly type: v.LiteralSchema<"insurance", undefined>;
        readonly text_id: v.NumberSchema<undefined>;
        readonly price: v.NumberSchema<undefined>;
      }, undefined>, v.StrictObjectSchema<{
        readonly type: v.LiteralSchema<"birthday", undefined>;
        readonly text_id: v.NumberSchema<undefined>;
        readonly amount: v.NumberSchema<undefined>;
      }, undefined>, v.StrictObjectSchema<{
        readonly type: v.LiteralSchema<"reverse", undefined>;
        readonly text_id: v.NumberSchema<undefined>;
      }, undefined>, v.StrictObjectSchema<{
        readonly type: v.LiteralSchema<"disaster", undefined>;
        readonly text_id: v.NumberSchema<undefined>;
      }, undefined>], undefined>, undefined>;
    }, undefined>, undefined>;
    readonly field_level: v.OptionalSchema<v.ObjectSchema<{
      /** Price multiplier when selling a level (house) on the field, applies to the level buy price. */
      readonly sell_multiplier: v.OptionalSchema<v.NumberSchema<undefined>, 1>;
      /** When true, player can build uneven levels on the field. */
      readonly build_uneven: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
      /** When true, player can build levels on the field without owning the whole monopoly. */
      readonly build_without_monopoly: v.OptionalSchema<v.ObjectSchema<{
        readonly rent_multiplier: v.OptionalSchema<v.NumberSchema<undefined>, 1>;
      }, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly jackpot: v.OptionalSchema<v.ObjectSchema<{
      readonly bet: v.NumberSchema<undefined>;
      readonly multipliers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
      readonly superprize: v.ObjectSchema<{
        readonly chance: v.NumberSchema<undefined>;
      }, undefined>;
    }, undefined>, undefined>;
    readonly jail: v.ObjectSchema<{
      readonly release_fee: v.NumberSchema<undefined>;
      readonly double_roll_attempt_limit: v.OptionalSchema<v.NumberSchema<undefined>, 3>;
    }, undefined>;
    readonly loan: v.OptionalSchema<v.ObjectSchema<{
      /** Loan amount. */
      readonly amount: v.NumberSchema<undefined>;
      /** Interest rate in total. */
      readonly repay_multiplier: v.NumberSchema<undefined>;
      /** Number of rounds to pay back the loan. */
      readonly duration: v.NumberSchema<undefined>;
      readonly cooldown: v.ObjectSchema<{
        /** On what round can player take a loan. */
        readonly match_start: v.NumberSchema<undefined>;
        /** How many rounds player should wait before taking another loan after repaying the previous one. */
        readonly repay: v.NumberSchema<undefined>;
      }, undefined>;
    }, undefined>, undefined>;
    readonly mortgage: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
      /** Limits mortgage duration in rounds. After this rounds, player will lose the field. If undefined, mortgage duration is unlimited. */
      readonly duration: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
      /** Price multiplier when mortgaging the field, applies to the company buying price. */
      readonly multiplier: v.NumberSchema<undefined>;
      /** Price multiplier when buying back the field, applies to the mortgage price. */
      readonly buyback_multiplier: v.NumberSchema<undefined>;
      /** Price multiplier when auctioning the mortgaged field, applies to the company buying price minus mortgage price. */
      readonly auction_multiplier: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, v.ObjectSchema<{
      /** Price multiplier when waiving the ownership of the field, applies to the company buying price. */
      readonly waive_multiplier: v.NumberSchema<undefined>;
    }, undefined>], undefined>, undefined>;
    readonly restart: v.OptionalSchema<v.ObjectSchema<{
      readonly variants: v.ArraySchema<v.ObjectSchema<{
        readonly round_from: v.NumberSchema<undefined>;
        readonly round_to: v.NumberSchema<undefined>;
        readonly count: v.NumberSchema<undefined>;
        readonly price: v.NumberSchema<undefined>;
      }, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly russian_roulette: v.OptionalSchema<v.ObjectSchema<{
      readonly rewards: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly start: v.ObjectSchema<{
      readonly income_amount: v.NumberSchema<undefined>;
      readonly bonus_amount: v.OptionalSchema<v.NumberSchema<undefined>, 0>;
    }, undefined>;
    /** Rules of the match that are based on the match time. */
    readonly time_rules: v.ArraySchema<v.UnionSchema<[v.ObjectSchema<{
      readonly type: v.LiteralSchema<"start.none", undefined>;
      /** Match time in **milliseconds**. */
      readonly time: v.NumberSchema<undefined>;
    }, undefined>, v.ObjectSchema<{
      readonly type: v.LiteralSchema<"start.tax", undefined>;
      /** Match time in **milliseconds**. */
      readonly time: v.NumberSchema<undefined>;
      /** Sum player should pay when passing "Start". If `0`, player just will not receive money for passing "Start". */
      readonly sum: v.NumberSchema<undefined>;
    }, undefined>, v.ObjectSchema<{
      readonly type: v.LiteralSchema<"rent.tax", undefined>;
      /** Match time in **milliseconds**. */
      readonly time: v.NumberSchema<undefined>;
      /** Income tax rate. */
      readonly rate: v.NumberSchema<undefined>;
    }, undefined>], undefined>, undefined>;
    readonly wormhole: v.OptionalSchema<v.ObjectSchema<{
      readonly exits_free_count: v.OptionalSchema<v.NumberSchema<undefined>, 3>;
      readonly exits_extra_price: v.NumberSchema<undefined>;
      readonly move_direct: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, undefined>;
  }, undefined>;
}, undefined>;
type M1DemoPacketSetupConfig = v.InferOutput<typeof valiM1DemoPacketSetupConfigSchema>;
//#endregion
//#region src/packet/setup/player.d.ts
declare const valiM1DemoPacketSetupPlayerSchema: v.SchemaWithPipe<readonly [v.ObjectSchema<{
  readonly user_id: v.NumberSchema<undefined>;
  readonly team: v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, undefined>;
  readonly is_vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  readonly is_loan_available: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  readonly equipment: v.ObjectSchema<{
    readonly cards: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
      readonly field_id: v.NumberSchema<undefined>;
      readonly item_proto_id: v.NumberSchema<undefined>;
      readonly item_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
      readonly rent_multiplier: v.NumberSchema<undefined>;
    }, undefined>, undefined>, v.TransformAction<{
      field_id: number;
      item_proto_id: number;
      item_id?: number | undefined;
      rent_multiplier: number;
    }[], Map<number, {
      field_id: number;
      item_proto_id: number;
      item_id?: number | undefined;
      rent_multiplier: number;
    }>>]>;
    readonly generator: v.OptionalSchema<v.ObjectSchema<{
      readonly item_proto_id: v.NumberSchema<undefined>;
      readonly variant_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
      readonly seed: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly joke: v.OptionalSchema<v.ObjectSchema<{
      readonly item_proto_id: v.NumberSchema<undefined>;
    }, undefined>, undefined>;
  }, undefined>;
}, undefined>, v.TransformAction<{
  user_id: number;
  team?: 0 | 1 | undefined;
  is_vip: boolean;
  is_loan_available: boolean;
  equipment: {
    cards: Map<number, {
      field_id: number;
      item_proto_id: number;
      item_id?: number | undefined;
      rent_multiplier: number;
    }>;
    generator?: {
      item_proto_id: number;
      variant_id?: number | undefined;
      seed?: string | undefined;
    } | undefined;
    joke?: {
      item_proto_id: number;
    } | undefined;
  };
}, {
  index: number;
  user_id: number;
  team?: 0 | 1 | undefined;
  is_vip: boolean;
  is_loan_available: boolean;
  equipment: {
    cards: Map<number, {
      field_id: number;
      item_proto_id: number;
      item_id?: number | undefined;
      rent_multiplier: number;
    }>;
    generator?: {
      item_proto_id: number;
      variant_id?: number | undefined;
      seed?: string | undefined;
    } | undefined;
    joke?: {
      item_proto_id: number;
    } | undefined;
  };
}>]>;
type M1DemoPacketSetupPlayer = v.InferOutput<typeof valiM1DemoPacketSetupPlayerSchema>;
type M1DemoPacketSetupPlayerEquippedCard = MapElement<M1DemoPacketSetupPlayer['equipment']['cards']>;
type M1DemoPacketSetupPlayerEquippedGenerator = Exclude<M1DemoPacketSetupPlayer['equipment']['generator'], undefined>;
type M1DemoPacketSetupPlayerEquippedJoke = Exclude<M1DemoPacketSetupPlayer['equipment']['joke'], undefined>;
//#endregion
//#region src/packet/setup.d.ts
declare const valiM1DemoPacketSetupSchema: v.ObjectSchema<{
  /** Constants that define basic rules of the match. */
  readonly config: v.ObjectSchema<{
    readonly version: v.NumberSchema<undefined>;
    readonly board_size: v.TupleSchema<[v.NumberSchema<undefined>, v.NumberSchema<undefined>], undefined>;
    readonly timers: v.ObjectSchema<{
      readonly roll_dices: v.NumberSchema<undefined>;
    }, undefined>;
    readonly fields: v.SchemaWithPipe<readonly [v.ArraySchema<v.UnionSchema<[v.ObjectSchema<{
      readonly is_corner: v.SchemaWithPipe<readonly [v.LiteralSchema<1, undefined>, v.TransformAction<1, true>]>;
      readonly type: v.PicklistSchema<["start", "jail"], undefined>;
    }, undefined>, v.ObjectSchema<{
      readonly is_corner: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
      readonly type: v.PicklistSchema<["cash.pay", "cash.receive", "chance", "jackpot", "jail.goto", "park", "russian-roulette", "tax.income", "tax.luxury", "wormhole"], undefined>;
    }, undefined>, v.ObjectSchema<{
      readonly is_corner: v.SchemaWithPipe<readonly [v.UndefinedSchema<undefined>, v.TransformAction<undefined, false>]>;
      readonly type: v.LiteralSchema<"company", undefined>;
      readonly monopoly_id: v.NumberSchema<undefined>;
      readonly is_last: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>], undefined>, undefined>, v.TransformAction<({
      is_corner: true;
      type: "start" | "jail";
    } | {
      is_corner: boolean;
      type: "cash.pay" | "cash.receive" | "chance" | "jackpot" | "jail.goto" | "park" | "russian-roulette" | "tax.income" | "tax.luxury" | "wormhole";
    } | {
      is_corner: false;
      type: "company";
      monopoly_id: number;
      is_last: boolean;
    })[], ({
      is_corner: true;
      type: "start" | "jail";
    } | {
      is_corner: boolean;
      type: "cash.pay" | "cash.receive" | "chance" | "jackpot" | "jail.goto" | "park" | "russian-roulette" | "tax.income" | "tax.luxury" | "wormhole";
    } | {
      item_proto_id: number;
      is_corner: false;
      type: "company";
      monopoly_id: number;
      is_last: boolean;
    })[]>]>;
    readonly monopolies: v.SchemaWithPipe<readonly [v.RecordSchema<v.StringSchema<undefined>, v.UnionSchema<[v.ObjectSchema<{
      readonly buy_price: v.NumberSchema<undefined>;
      readonly rent_by_level: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
      readonly level_cost: v.NumberSchema<undefined>;
      readonly last_field: v.OptionalSchema<v.ObjectSchema<{
        readonly buy_price: v.NumberSchema<undefined>;
        readonly rent_by_level: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
      }, undefined>, undefined>;
    }, undefined>, v.ObjectSchema<{
      readonly buy_price: v.NumberSchema<undefined>;
      readonly rent_by_count: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, v.ObjectSchema<{
      readonly buy_price: v.NumberSchema<undefined>;
      readonly dice_multipliers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, v.ObjectSchema<{
      readonly buy_price: v.NumberSchema<undefined>;
      readonly return_multipliers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>], undefined>, undefined>, v.TransformAction<{
      [x: string]: {
        buy_price: number;
        rent_by_level: number[];
        level_cost: number;
        last_field?: {
          buy_price: number;
          rent_by_level: number[];
        } | undefined;
      } | {
        buy_price: number;
        rent_by_count: number[];
      } | {
        buy_price: number;
        dice_multipliers: number[];
      } | {
        buy_price: number;
        return_multipliers: number[];
      };
    }, Map<number, {
      buy_price: number;
      rent_by_level: number[];
      level_cost: number;
      last_field?: {
        buy_price: number;
        rent_by_level: number[];
      } | undefined;
    } | {
      buy_price: number;
      rent_by_count: number[];
    } | {
      buy_price: number;
      dice_multipliers: number[];
    } | {
      buy_price: number;
      return_multipliers: number[];
    }>>]>;
    readonly mechanics: v.ObjectSchema<{
      readonly auction: v.OptionalSchema<v.ObjectSchema<{
        readonly bid_increment: v.NumberSchema<undefined>;
      }, undefined>, undefined>;
      readonly chance: v.OptionalSchema<v.StrictObjectSchema<{
        readonly cards: v.ArraySchema<v.UnionSchema<[v.StrictObjectSchema<{
          readonly type: v.LiteralSchema<"income", undefined>;
          readonly text_id: v.NumberSchema<undefined>;
          readonly range: v.StrictObjectSchema<{
            readonly min: v.NumberSchema<undefined>;
            readonly max: v.NumberSchema<undefined>;
            readonly step: v.NumberSchema<undefined>;
          }, undefined>;
        }, undefined>, v.StrictObjectSchema<{
          readonly type: v.LiteralSchema<"expense", undefined>;
          readonly text_id: v.NumberSchema<undefined>;
          readonly range: v.StrictObjectSchema<{
            readonly min: v.NumberSchema<undefined>;
            readonly max: v.NumberSchema<undefined>;
            readonly step: v.NumberSchema<undefined>;
          }, undefined>;
        }, undefined>, v.StrictObjectSchema<{
          readonly type: v.LiteralSchema<"repair", undefined>;
          readonly text_id: v.NumberSchema<undefined>;
          readonly cost: v.StrictObjectSchema<{
            readonly small: v.NumberSchema<undefined>;
            readonly big: v.NumberSchema<undefined>;
          }, undefined>;
        }, undefined>, v.StrictObjectSchema<{
          readonly type: v.LiteralSchema<"go-to-jail", undefined>;
          readonly text_id: v.NumberSchema<undefined>;
        }, undefined>, v.StrictObjectSchema<{
          readonly type: v.LiteralSchema<"teleport", undefined>;
          readonly text_id: v.NumberSchema<undefined>;
        }, undefined>, v.StrictObjectSchema<{
          readonly type: v.LiteralSchema<"skip-move", undefined>;
          readonly text_id: v.NumberSchema<undefined>;
        }, undefined>, v.StrictObjectSchema<{
          readonly type: v.LiteralSchema<"insurance", undefined>;
          readonly text_id: v.NumberSchema<undefined>;
          readonly price: v.NumberSchema<undefined>;
        }, undefined>, v.StrictObjectSchema<{
          readonly type: v.LiteralSchema<"birthday", undefined>;
          readonly text_id: v.NumberSchema<undefined>;
          readonly amount: v.NumberSchema<undefined>;
        }, undefined>, v.StrictObjectSchema<{
          readonly type: v.LiteralSchema<"reverse", undefined>;
          readonly text_id: v.NumberSchema<undefined>;
        }, undefined>, v.StrictObjectSchema<{
          readonly type: v.LiteralSchema<"disaster", undefined>;
          readonly text_id: v.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
      }, undefined>, undefined>;
      readonly field_level: v.OptionalSchema<v.ObjectSchema<{
        readonly sell_multiplier: v.OptionalSchema<v.NumberSchema<undefined>, 1>;
        readonly build_uneven: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
        readonly build_without_monopoly: v.OptionalSchema<v.ObjectSchema<{
          readonly rent_multiplier: v.OptionalSchema<v.NumberSchema<undefined>, 1>;
        }, undefined>, undefined>;
      }, undefined>, undefined>;
      readonly jackpot: v.OptionalSchema<v.ObjectSchema<{
        readonly bet: v.NumberSchema<undefined>;
        readonly multipliers: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
        readonly superprize: v.ObjectSchema<{
          readonly chance: v.NumberSchema<undefined>;
        }, undefined>;
      }, undefined>, undefined>;
      readonly jail: v.ObjectSchema<{
        readonly release_fee: v.NumberSchema<undefined>;
        readonly double_roll_attempt_limit: v.OptionalSchema<v.NumberSchema<undefined>, 3>;
      }, undefined>;
      readonly loan: v.OptionalSchema<v.ObjectSchema<{
        readonly amount: v.NumberSchema<undefined>;
        readonly repay_multiplier: v.NumberSchema<undefined>;
        readonly duration: v.NumberSchema<undefined>;
        readonly cooldown: v.ObjectSchema<{
          readonly match_start: v.NumberSchema<undefined>;
          readonly repay: v.NumberSchema<undefined>;
        }, undefined>;
      }, undefined>, undefined>;
      readonly mortgage: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
        readonly duration: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly multiplier: v.NumberSchema<undefined>;
        readonly buyback_multiplier: v.NumberSchema<undefined>;
        readonly auction_multiplier: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
      }, undefined>, v.ObjectSchema<{
        readonly waive_multiplier: v.NumberSchema<undefined>;
      }, undefined>], undefined>, undefined>;
      readonly restart: v.OptionalSchema<v.ObjectSchema<{
        readonly variants: v.ArraySchema<v.ObjectSchema<{
          readonly round_from: v.NumberSchema<undefined>;
          readonly round_to: v.NumberSchema<undefined>;
          readonly count: v.NumberSchema<undefined>;
          readonly price: v.NumberSchema<undefined>;
        }, undefined>, undefined>;
      }, undefined>, undefined>;
      readonly russian_roulette: v.OptionalSchema<v.ObjectSchema<{
        readonly rewards: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
      }, undefined>, undefined>;
      readonly start: v.ObjectSchema<{
        readonly income_amount: v.NumberSchema<undefined>;
        readonly bonus_amount: v.OptionalSchema<v.NumberSchema<undefined>, 0>;
      }, undefined>;
      readonly time_rules: v.ArraySchema<v.UnionSchema<[v.ObjectSchema<{
        readonly type: v.LiteralSchema<"start.none", undefined>;
        readonly time: v.NumberSchema<undefined>;
      }, undefined>, v.ObjectSchema<{
        readonly type: v.LiteralSchema<"start.tax", undefined>;
        readonly time: v.NumberSchema<undefined>;
        readonly sum: v.NumberSchema<undefined>;
      }, undefined>, v.ObjectSchema<{
        readonly type: v.LiteralSchema<"rent.tax", undefined>;
        readonly time: v.NumberSchema<undefined>;
        readonly rate: v.NumberSchema<undefined>;
      }, undefined>], undefined>, undefined>;
      readonly wormhole: v.OptionalSchema<v.ObjectSchema<{
        readonly exits_free_count: v.OptionalSchema<v.NumberSchema<undefined>, 3>;
        readonly exits_extra_price: v.NumberSchema<undefined>;
        readonly move_direct: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
      }, undefined>, undefined>;
    }, undefined>;
  }, undefined>;
  readonly flags: v.ObjectSchema<{
    readonly game_mode: v.NumberSchema<undefined>;
    readonly game_submode: v.NumberSchema<undefined>;
    readonly game_2x2: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly title: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
  }, undefined>;
  readonly players: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly user_id: v.NumberSchema<undefined>;
    readonly team: v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, undefined>;
    readonly is_vip: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly is_loan_available: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly equipment: v.ObjectSchema<{
      readonly cards: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
        readonly field_id: v.NumberSchema<undefined>;
        readonly item_proto_id: v.NumberSchema<undefined>;
        readonly item_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly rent_multiplier: v.NumberSchema<undefined>;
      }, undefined>, undefined>, v.TransformAction<{
        field_id: number;
        item_proto_id: number;
        item_id?: number | undefined;
        rent_multiplier: number;
      }[], Map<number, {
        field_id: number;
        item_proto_id: number;
        item_id?: number | undefined;
        rent_multiplier: number;
      }>>]>;
      readonly generator: v.OptionalSchema<v.ObjectSchema<{
        readonly item_proto_id: v.NumberSchema<undefined>;
        readonly variant_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly seed: v.OptionalSchema<v.StringSchema<undefined>, undefined>;
      }, undefined>, undefined>;
      readonly joke: v.OptionalSchema<v.ObjectSchema<{
        readonly item_proto_id: v.NumberSchema<undefined>;
      }, undefined>, undefined>;
    }, undefined>;
  }, undefined>, v.TransformAction<{
    user_id: number;
    team?: 0 | 1 | undefined;
    is_vip: boolean;
    is_loan_available: boolean;
    equipment: {
      cards: Map<number, {
        field_id: number;
        item_proto_id: number;
        item_id?: number | undefined;
        rent_multiplier: number;
      }>;
      generator?: {
        item_proto_id: number;
        variant_id?: number | undefined;
        seed?: string | undefined;
      } | undefined;
      joke?: {
        item_proto_id: number;
      } | undefined;
    };
  }, {
    index: number;
    user_id: number;
    team?: 0 | 1 | undefined;
    is_vip: boolean;
    is_loan_available: boolean;
    equipment: {
      cards: Map<number, {
        field_id: number;
        item_proto_id: number;
        item_id?: number | undefined;
        rent_multiplier: number;
      }>;
      generator?: {
        item_proto_id: number;
        variant_id?: number | undefined;
        seed?: string | undefined;
      } | undefined;
      joke?: {
        item_proto_id: number;
      } | undefined;
    };
  }>]>, undefined>, v.TransformAction<{
    index: number;
    user_id: number;
    team?: 0 | 1 | undefined;
    is_vip: boolean;
    is_loan_available: boolean;
    equipment: {
      cards: Map<number, {
        field_id: number;
        item_proto_id: number;
        item_id?: number | undefined;
        rent_multiplier: number;
      }>;
      generator?: {
        item_proto_id: number;
        variant_id?: number | undefined;
        seed?: string | undefined;
      } | undefined;
      joke?: {
        item_proto_id: number;
      } | undefined;
    };
  }[], Map<number, {
    index: number;
    user_id: number;
    team?: 0 | 1 | undefined;
    is_vip: boolean;
    is_loan_available: boolean;
    equipment: {
      cards: Map<number, {
        field_id: number;
        item_proto_id: number;
        item_id?: number | undefined;
        rent_multiplier: number;
      }>;
      generator?: {
        item_proto_id: number;
        variant_id?: number | undefined;
        seed?: string | undefined;
      } | undefined;
      joke?: {
        item_proto_id: number;
      } | undefined;
    };
  }>>]>;
}, undefined>;
type M1DemoPacketSetup = v.InferOutput<typeof valiM1DemoPacketSetupSchema>;
//#endregion
//#region src/packet/status/fields.d.ts
declare const valiM1DemoPacketStatusFieldsSchema: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
  readonly field_id: v.NumberSchema<undefined>;
  readonly owner_user_id: v.NumberSchema<undefined>;
  readonly level: v.NumberSchema<undefined>;
  readonly mortgage: v.OptionalSchema<v.ObjectSchema<{
    readonly round_until: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  }, undefined>, undefined>;
}, undefined>, v.TransformAction<{
  field_id: number;
  owner_user_id: number;
  level: number;
  mortgage?: {
    round_until?: number | undefined;
  } | undefined;
}, {
  field_id: number;
  owner_user_id: number;
  level: number;
  mortgage?: {
    round_until?: number | undefined;
  } | undefined;
}>]>, undefined>, v.TransformAction<{
  field_id: number;
  owner_user_id: number;
  level: number;
  mortgage?: {
    round_until?: number | undefined;
  } | undefined;
}[], Map<number, {
  field_id: number;
  owner_user_id: number;
  level: number;
  mortgage?: {
    round_until?: number | undefined;
  } | undefined;
}>>]>;
type M1DemoPacketStatusField = MapElement<v.InferOutput<typeof valiM1DemoPacketStatusFieldsSchema>>;
//#endregion
//#region src/packet/status/player.d.ts
declare const valiM1DemoPacketStatusPlayersSchema: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
  /** User ID of the player. */
  readonly user_id: v.NumberSchema<undefined>;
  /**
   * Player status:
   * - `0`: players is active;
   * - `-1`: player is eliminated.
   */
  readonly status: v.NumberSchema<undefined>;
  /** Player's position on the board. */
  readonly position: v.NumberSchema<undefined>;
  /** Player's cash. */
  readonly cash: v.NumberSchema<undefined>;
  /** Player's score: how much rent they have collected. */
  readonly score: v.NumberSchema<undefined>;
  /** Player's jail status */
  readonly jail: v.OptionalSchema<v.ObjectSchema<{
    readonly roll_double_attempts: v.NumberSchema<undefined>;
  }, undefined>, undefined>;
  readonly loan: v.UnionSchema<[v.ObjectSchema<{
    readonly taken: v.SchemaWithPipe<readonly [v.LiteralSchema<0, undefined>, v.TransformAction<0, false>]>;
    readonly unlock_round: v.NumberSchema<undefined>;
  }, undefined>, v.ObjectSchema<{
    readonly taken: v.SchemaWithPipe<readonly [v.LiteralSchema<1, undefined>, v.TransformAction<1, true>]>;
    readonly debt: v.NumberSchema<undefined>;
    readonly return_round: v.NumberSchema<undefined>;
  }, undefined>], undefined>;
  readonly restart: v.OptionalSchema<v.ObjectSchema<{
    readonly variant: v.NullableSchema<v.ObjectSchema<{
      readonly round_from: v.NumberSchema<undefined>;
      readonly round_to: v.NumberSchema<undefined>;
      readonly count: v.NumberSchema<undefined>;
      readonly price: v.NumberSchema<undefined>;
    }, undefined>, undefined>;
  }, undefined>, undefined>;
  readonly stat: v.ObjectSchema<{
    readonly mini_die_cooldown: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly rent_history: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  }, undefined>;
}, undefined>, v.TransformAction<{
  user_id: number;
  status: number;
  position: number;
  cash: number;
  score: number;
  jail?: {
    roll_double_attempts: number;
  } | undefined;
  loan: {
    taken: false;
    unlock_round: number;
  } | {
    taken: true;
    debt: number;
    return_round: number;
  };
  restart?: {
    variant: {
      round_from: number;
      round_to: number;
      count: number;
      price: number;
    } | null;
  } | undefined;
  stat: {
    mini_die_cooldown?: number | undefined;
    rent_history?: number | undefined;
  };
}, {
  user_id: number;
  status: number;
  position: number;
  cash: number;
  score: number;
  jail?: {
    roll_double_attempts: number;
  } | undefined;
  loan: {
    taken: false;
    unlock_round: number;
  } | {
    taken: true;
    debt: number;
    return_round: number;
  };
  restart?: {
    variant: {
      round_from: number;
      round_to: number;
      count: number;
      price: number;
    } | null;
  } | undefined;
  stat: {
    mini_die_cooldown?: number | undefined;
    rent_history?: number | undefined;
  };
}>]>, undefined>, v.TransformAction<{
  user_id: number;
  status: number;
  position: number;
  cash: number;
  score: number;
  jail?: {
    roll_double_attempts: number;
  } | undefined;
  loan: {
    taken: false;
    unlock_round: number;
  } | {
    taken: true;
    debt: number;
    return_round: number;
  };
  restart?: {
    variant: {
      round_from: number;
      round_to: number;
      count: number;
      price: number;
    } | null;
  } | undefined;
  stat: {
    mini_die_cooldown?: number | undefined;
    rent_history?: number | undefined;
  };
}[], Map<number, {
  user_id: number;
  status: number;
  position: number;
  cash: number;
  score: number;
  jail?: {
    roll_double_attempts: number;
  } | undefined;
  loan: {
    taken: false;
    unlock_round: number;
  } | {
    taken: true;
    debt: number;
    return_round: number;
  };
  restart?: {
    variant: {
      round_from: number;
      round_to: number;
      count: number;
      price: number;
    } | null;
  } | undefined;
  stat: {
    mini_die_cooldown?: number | undefined;
    rent_history?: number | undefined;
  };
}>>]>;
type M1DemoPacketStatusPlayer = MapElement<v.InferOutput<typeof valiM1DemoPacketStatusPlayersSchema>>;
//#endregion
//#region src/packet/time.d.ts
declare const valiM1DemoPacketTimeSchema: v.SchemaWithPipe<readonly [v.ObjectSchema<{
  /** Unix timestamp of the start of the game in **milliseconds**. */
  readonly ts_start: v.NumberSchema<undefined>;
  /** Unix timestamp of the packet in **milliseconds**. */
  readonly ts_now: v.NumberSchema<undefined>;
  /** Total length of all pauses in the game excluding one that is currently active in **milliseconds**. */
  readonly inactive: v.NumberSchema<undefined>;
  /** Unix timestamp of the start of the current pause in **milliseconds**. */
  readonly ts_inactive: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
}, undefined>, v.TransformAction<{
  ts_start: number;
  ts_now: number;
  inactive: number;
  ts_inactive?: number | undefined;
}, {
  /** Difference between server's and browser's time in **milliseconds**. */
  delta: number;
  ts_start: number;
  ts_now: number;
  inactive: number;
  ts_inactive?: number | undefined;
}>]>;
type M1DemoPacketTime = v.InferOutput<typeof valiM1DemoPacketTimeSchema>;
//#endregion
//#region src/main.d.ts
declare class M1LiveDemo {
  /** Packet versions in this game. Value `null` is a placeholder until first packet arrives. */
  private packet_version;
  private setup;
  private field_id_jail;
  private status_before;
  process(value: unknown): {
    setup?: {
      config: {
        version: number;
        board_size: [number, number];
        timers: {
          roll_dices: number;
        };
        fields: ({
          is_corner: true;
          type: "start" | "jail";
        } | {
          is_corner: boolean;
          type: "cash.pay" | "cash.receive" | "chance" | "jackpot" | "jail.goto" | "park" | "russian-roulette" | "tax.income" | "tax.luxury" | "wormhole";
        } | {
          item_proto_id: number;
          is_corner: false;
          type: "company";
          monopoly_id: number;
          is_last: boolean;
        })[];
        monopolies: Map<number, {
          buy_price: number;
          rent_by_level: number[];
          level_cost: number;
          last_field?: {
            buy_price: number;
            rent_by_level: number[];
          } | undefined;
        } | {
          buy_price: number;
          rent_by_count: number[];
        } | {
          buy_price: number;
          dice_multipliers: number[];
        } | {
          buy_price: number;
          return_multipliers: number[];
        }>;
        mechanics: {
          auction?: {
            bid_increment: number;
          } | undefined;
          chance?: {
            cards: ({
              type: "income";
              text_id: number;
              range: {
                min: number;
                max: number;
                step: number;
              };
            } | {
              type: "expense";
              text_id: number;
              range: {
                min: number;
                max: number;
                step: number;
              };
            } | {
              type: "repair";
              text_id: number;
              cost: {
                small: number;
                big: number;
              };
            } | {
              type: "go-to-jail";
              text_id: number;
            } | {
              type: "teleport";
              text_id: number;
            } | {
              type: "skip-move";
              text_id: number;
            } | {
              type: "insurance";
              text_id: number;
              price: number;
            } | {
              type: "birthday";
              text_id: number;
              amount: number;
            } | {
              type: "reverse";
              text_id: number;
            } | {
              type: "disaster";
              text_id: number;
            })[];
          } | undefined;
          field_level?: {
            sell_multiplier: number;
            build_uneven: boolean;
            build_without_monopoly?: {
              rent_multiplier: number;
            } | undefined;
          } | undefined;
          jackpot?: {
            bet: number;
            multipliers: number[];
            superprize: {
              chance: number;
            };
          } | undefined;
          jail: {
            release_fee: number;
            double_roll_attempt_limit: number;
          };
          loan?: {
            amount: number;
            repay_multiplier: number;
            duration: number;
            cooldown: {
              match_start: number;
              repay: number;
            };
          } | undefined;
          mortgage?: {
            duration?: number | undefined;
            multiplier: number;
            buyback_multiplier: number;
            auction_multiplier?: number | undefined;
          } | {
            waive_multiplier: number;
          } | undefined;
          restart?: {
            variants: {
              round_from: number;
              round_to: number;
              count: number;
              price: number;
            }[];
          } | undefined;
          russian_roulette?: {
            rewards: number[];
          } | undefined;
          start: {
            income_amount: number;
            bonus_amount: number;
          };
          time_rules: ({
            type: "start.none";
            time: number;
          } | {
            type: "start.tax";
            time: number;
            sum: number;
          } | {
            type: "rent.tax";
            time: number;
            rate: number;
          })[];
          wormhole?: {
            exits_free_count: number;
            exits_extra_price: number;
            move_direct: boolean;
          } | undefined;
        };
      };
      flags: {
        game_mode: number;
        game_submode: number;
        game_2x2: boolean;
        title?: string | undefined;
      };
      players: Map<number, {
        index: number;
        user_id: number;
        team?: 0 | 1 | undefined;
        is_vip: boolean;
        is_loan_available: boolean;
        equipment: {
          cards: Map<number, {
            field_id: number;
            item_proto_id: number;
            item_id?: number | undefined;
            rent_multiplier: number;
          }>;
          generator?: {
            item_proto_id: number;
            variant_id?: number | undefined;
            seed?: string | undefined;
          } | undefined;
          joke?: {
            item_proto_id: number;
          } | undefined;
        };
      }>;
    } | undefined;
    status?: {
      round: number;
      players: Map<number, {
        user_id: number;
        status: number;
        position: number;
        cash: number;
        score: number;
        jail?: {
          roll_double_attempts: number;
        } | undefined;
        loan: {
          taken: false;
          unlock_round: number;
        } | {
          taken: true;
          debt: number;
          return_round: number;
        };
        restart?: {
          variant: {
            round_from: number;
            round_to: number;
            count: number;
            price: number;
          } | null;
        } | undefined;
        stat: {
          mini_die_cooldown?: number | undefined;
          rent_history?: number | undefined;
        };
      }>;
      fields: Map<number, {
        field_id: number;
        owner_user_id: number;
        level: number;
        mortgage?: {
          round_until?: number | undefined;
        } | undefined;
      }>;
      turn: {
        user_id: number | null;
        action: {
          user_id: number | null;
          list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
        };
        move_reversed: boolean;
        auction?: {
          field_id: number;
          bid: number;
          user_ids_rejected: Set<number>;
        } | undefined;
        contract?: {
          initiator: {
            user_id: number;
            field_ids: Set<number>;
            cash: number;
          };
          responder: {
            user_id: number;
            field_ids: Set<number>;
            cash: number;
          };
        } | undefined;
        contracts_sent?: number | undefined;
        jackpot?: {
          superprize: number;
        } | undefined;
        payment?: {
          to_user_id?: number | undefined;
          amount: number;
        } | undefined;
        field_ids_move?: Map<number, {
          stop: number;
        } | {
          field_id: number;
        }> | undefined;
        field_ids_level_built?: Set<number> | undefined;
        field_ids_mortgaged?: Set<number> | undefined;
      };
      timer?: {
        ts_expires: number;
        is_extra: boolean;
      } | {
        expires_in: number;
        is_extra: boolean;
      } | undefined;
      viewers_count: number;
    } | undefined;
    time: {
      delta: number;
      ts_start: number;
      ts_now: number;
      inactive: number;
      ts_inactive?: number | undefined;
    };
    events: ({
      id: string;
      type: "bankrupt";
      user_id: number;
      user_id_bankrupt: number;
    } | {
      id: string;
      type: "chance";
      user_id: number;
      chance_index: number;
      data: {
        amount: number;
      } | {
        field_id: number;
        move_reversed: boolean;
      } | undefined;
    } | {
      id: string;
      type: "game-over";
    } | {
      id: string;
      type: "leave";
      user_id: number;
      kicked: boolean;
    } | {
      id: string;
      type: "message";
      user_id: number;
      private?: {
        user_id?: number | undefined;
      } | undefined;
      is_forced: boolean;
      text: string;
    } | {
      id: string;
      type: "park";
      user_id: number;
    } | {
      id: string;
      type: "restart";
      user_id: number;
      restart_price: number;
    } | {
      id: string;
      type: "auction.put";
      user_id: number;
      field_id: number;
      bid: number;
    } | {
      id: string;
      type: "auction.bid";
      user_id: number;
      bid: number;
    } | {
      id: string;
      type: "auction.reject";
      user_id: number;
    } | {
      id: string;
      type: "auction.win";
      user_id: number;
      field_id: number;
      user_id_seller?: number | undefined;
      price: number;
    } | {
      id: string;
      type: "auction.cancel";
      field_id: number;
      user_id_seller?: number | undefined;
      price?: number | undefined;
    } | {
      id: string;
      type: "bank.income";
      user_id: number;
      amount: number;
    } | {
      id: string;
      type: "bank.fee";
      user_id: number;
      amount: number;
    } | {
      id: string;
      type: "bank.fee.pay";
      user_id: number;
      amount: number;
    } | {
      id: string;
      type: "bank.return";
      user_id: number;
      amount: number;
    } | {
      id: string;
      type: "bus.select";
      user_id: number;
      move_distances: Set<number>;
      field_ids_move: Set<number>;
    } | {
      id: string;
      type: "bus.move";
      user_id: number;
      selection: {
        stop_id: 0 | 1 | -1;
        field_id: number;
        auto: boolean;
      };
      move_reversed: boolean;
    } | {
      id: string;
      type: "contract.send";
      user_id: number;
      user_id_to: number;
    } | {
      id: string;
      type: "contract.accept";
      user_id: number;
      contract: {
        initiator: {
          user_id: number;
          field_ids: Set<number>;
          cash: number;
        };
        responder: {
          user_id: number;
          field_ids: Set<number>;
          cash: number;
        };
      };
    } | {
      id: string;
      type: "contract.reject";
      user_id: number;
      timeout: boolean;
    } | {
      id: string;
      type: "contract.review.init";
    } | {
      id: string;
      type: "contract.review.approve";
      user_id: number;
    } | {
      id: string;
      type: "contract.review.object";
      user_id: number;
    } | {
      id: string;
      type: "contract.review.pass";
    } | {
      id: string;
      type: "contract.revert";
    } | {
      id: string;
      type: "jackpot";
      user_id: number;
    } | {
      id: string;
      type: "jackpot.pay";
      user_id: number;
      amount: number;
      jackpot_size: number;
    } | {
      id: string;
      type: "jackpot.play";
      user_id: number;
      dice_bet: number[];
      dice_rolled: number;
    } | {
      id: string;
      type: "jackpot.win";
      user_id: number;
      amount: number;
      dice_rolled?: number | undefined;
    } | {
      id: string;
      type: "jackpot.lose";
      user_id: number;
      amount?: number | undefined;
      dice_rolled?: number | undefined;
    } | {
      id: string;
      type: "jackpot.superprize.win";
      user_id: number;
      amount: number;
    } | {
      id: string;
      type: "jackpot.superprize.increase";
      user_id: number;
      superprize: number;
    } | {
      id: string;
      type: "jackpot.reject";
      user_id: number;
    } | {
      id: string;
      type: "jail.put";
      user_id: number;
    } | {
      id: string;
      type: "jail.put.double";
      user_id: number;
    } | {
      id: string;
      type: "jail.visit";
      user_id: number;
    } | {
      id: string;
      type: "jail.release.pay";
      user_id: number;
    } | {
      id: string;
      type: "jail.release";
      user_id: number;
      position_after?: number | undefined;
    } | {
      id: string;
      type: "level.build";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "level.sell";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "loan.take";
      user_id: number;
    } | {
      id: string;
      type: "loan.deadline";
      user_id: number;
      amount: number;
    } | {
      id: string;
      type: "loan.repay";
      user_id: number;
      amount: number;
    } | {
      id: string;
      type: "m1.move";
      user_id: number;
      rule: "free" | "enemy_owned";
      field_id: number;
      move_reversed: boolean;
    } | {
      id: string;
      type: "m1.fail";
      user_id: number;
    } | {
      id: string;
      type: "mortgage.put";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "mortgage.buyback";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "mortgage.expire";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "waive";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "pause.set";
    } | {
      id: string;
      type: "pause.end";
    } | {
      id: string;
      type: "purchase.offer";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "purchase";
      user_id: number;
      field_id: number;
      price: number;
    } | {
      id: string;
      type: "purchase.reject";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "rent.pay";
      user_id: number;
      field_id: number;
      amount: number;
    } | {
      id: string;
      type: "rent.pay.complete";
      user_id: number;
      user_id_receiver: number;
      field_id: number;
      amount: number;
      amount_received?: number | undefined;
    } | {
      id: string;
      type: "rent.pay.cancel";
      user_id: number;
      user_id_receiver: number;
    } | {
      id: string;
      type: "rent.zero";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "rent.zero.self";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "rent.zero.teammate";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "rent.zero.mortgaged";
      user_id: number;
      field_id: number;
    } | {
      id: string;
      type: "roll-dices";
      user_id: number;
      dices: [number, number] | [number] | [number, number, number];
      move_reversed: boolean;
      double_spent: boolean;
    } | {
      id: string;
      type: "roll-dices.doubling";
      user_id: number;
    } | {
      id: string;
      type: "roll-dices.jail.success";
      user_id: number;
    } | {
      id: string;
      type: "roll-dices.jail.fail";
      user_id: number;
    } | {
      id: string;
      type: "russian-roulette";
      user_id: number;
    } | {
      id: string;
      type: "russian-roulette.play";
      user_id: number;
      bullets_count: number;
      reward_amount: number;
    } | {
      id: string;
      type: "russian-roulette.survive";
      user_id: number;
      reward_amount: number;
    } | {
      id: string;
      type: "russian-roulette.die";
      user_id: number;
    } | {
      id: string;
      type: "russian-roulette.reject";
      user_id: number;
    } | {
      id: string;
      type: "start.income";
      user_id: number;
    } | {
      id: string;
      type: "start.bonus";
      user_id: number;
    } | {
      id: string;
      type: "start.tax";
      user_id: number;
      amount: number;
    } | {
      id: string;
      type: "start.tax.pay";
      user_id: number;
    } | {
      id: string;
      type: "taxi.select";
      user_id: number;
      limit: number;
      field_ids_move: Set<number>;
    } | {
      id: string;
      type: "taxi.move";
      user_id: number;
      selection: {
        stop_id: number;
        field_id: number;
        auto: boolean;
      };
      move_reversed: boolean;
    } | {
      id: string;
      type: "taxi.fail";
      user_id: number;
      move_reversed: boolean;
    } | {
      id: string;
      type: "tournament.drop";
      user_ids: number[];
    } | {
      id: string;
      type: "triple";
      user_id: number;
    } | {
      id: string;
      type: "triple.move";
      user_id: number;
      field_id: number;
      move_reversed: boolean;
    } | {
      id: string;
      type: "wormhole";
      user_id: number;
    } | {
      id: string;
      type: "wormhole.open";
      user_id: number;
      exits_count: number;
    } | {
      id: string;
      type: "wormhole.reject";
      user_id: number;
    } | {
      id: string;
      type: "wormhole.move";
      user_id: number;
      field_id: number;
      move_reversed: boolean;
    } | {
      id: string;
      type: "_unknown";
      type_received: string;
    } | {
      id: string;
      type: "bankrupt";
      user_id: number;
      user_id_bankrupt: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "chance";
      user_id: number;
      chance_index: number;
      data: {
        amount: number;
      } | {
        field_id: number;
        move_reversed: boolean;
      } | undefined;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "game-over";
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "leave";
      user_id: number;
      kicked: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "message";
      user_id: number;
      private?: {
        user_id?: number | undefined;
      } | undefined;
      is_forced: boolean;
      text: string;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "park";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "restart";
      user_id: number;
      restart_price: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "auction.put";
      user_id: number;
      field_id: number;
      bid: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "auction.bid";
      user_id: number;
      bid: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "auction.reject";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "auction.win";
      user_id: number;
      field_id: number;
      user_id_seller?: number | undefined;
      price: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "auction.cancel";
      field_id: number;
      user_id_seller?: number | undefined;
      price?: number | undefined;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "bank.income";
      user_id: number;
      amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "bank.fee";
      user_id: number;
      amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "bank.fee.pay";
      user_id: number;
      amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "bank.return";
      user_id: number;
      amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "bus.select";
      user_id: number;
      move_distances: Set<number>;
      field_ids_move: Set<number>;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "bus.move";
      user_id: number;
      selection: {
        stop_id: 0 | 1 | -1;
        field_id: number;
        auto: boolean;
      };
      move_reversed: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "contract.send";
      user_id: number;
      user_id_to: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "contract.accept";
      user_id: number;
      contract: {
        initiator: {
          user_id: number;
          field_ids: Set<number>;
          cash: number;
        };
        responder: {
          user_id: number;
          field_ids: Set<number>;
          cash: number;
        };
      };
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "contract.reject";
      user_id: number;
      timeout: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "contract.review.init";
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "contract.review.approve";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "contract.review.object";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "contract.review.pass";
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "contract.revert";
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jackpot";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jackpot.pay";
      user_id: number;
      amount: number;
      jackpot_size: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jackpot.play";
      user_id: number;
      dice_bet: number[];
      dice_rolled: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jackpot.win";
      user_id: number;
      amount: number;
      dice_rolled?: number | undefined;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jackpot.lose";
      user_id: number;
      amount?: number | undefined;
      dice_rolled?: number | undefined;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jackpot.superprize.win";
      user_id: number;
      amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jackpot.superprize.increase";
      user_id: number;
      superprize: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jackpot.reject";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jail.put";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jail.put.double";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jail.visit";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jail.release.pay";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "jail.release";
      user_id: number;
      position_after?: number | undefined;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "level.build";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "level.sell";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "loan.take";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "loan.deadline";
      user_id: number;
      amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "loan.repay";
      user_id: number;
      amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "m1.move";
      user_id: number;
      rule: "free" | "enemy_owned";
      field_id: number;
      move_reversed: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "m1.fail";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "mortgage.put";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "mortgage.buyback";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "mortgage.expire";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "waive";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "pause.set";
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "pause.end";
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "purchase.offer";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "purchase";
      user_id: number;
      field_id: number;
      price: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "purchase.reject";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "rent.pay";
      user_id: number;
      field_id: number;
      amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "rent.pay.complete";
      user_id: number;
      user_id_receiver: number;
      field_id: number;
      amount: number;
      amount_received?: number | undefined;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "rent.pay.cancel";
      user_id: number;
      user_id_receiver: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "rent.zero";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "rent.zero.self";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "rent.zero.teammate";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "rent.zero.mortgaged";
      user_id: number;
      field_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "roll-dices";
      user_id: number;
      dices: [number, number] | [number] | [number, number, number];
      move_reversed: boolean;
      double_spent: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "roll-dices.doubling";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "roll-dices.jail.success";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "roll-dices.jail.fail";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "russian-roulette";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "russian-roulette.play";
      user_id: number;
      bullets_count: number;
      reward_amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "russian-roulette.survive";
      user_id: number;
      reward_amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "russian-roulette.die";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "russian-roulette.reject";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "start.income";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "start.bonus";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "start.tax";
      user_id: number;
      amount: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "start.tax.pay";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "taxi.select";
      user_id: number;
      limit: number;
      field_ids_move: Set<number>;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "taxi.move";
      user_id: number;
      selection: {
        stop_id: number;
        field_id: number;
        auto: boolean;
      };
      move_reversed: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "taxi.fail";
      user_id: number;
      move_reversed: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "tournament.drop";
      user_ids: number[];
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "triple";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "triple.move";
      user_id: number;
      field_id: number;
      move_reversed: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "wormhole";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "wormhole.open";
      user_id: number;
      exits_count: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "wormhole.reject";
      user_id: number;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "wormhole.move";
      user_id: number;
      field_id: number;
      move_reversed: boolean;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    } | {
      id: string;
      type: "_unknown";
      type_received: string;
      status: {
        before: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
        after: {
          round: number;
          players: Map<number, {
            user_id: number;
            status: number;
            position: number;
            cash: number;
            score: number;
            jail?: {
              roll_double_attempts: number;
            } | undefined;
            loan: {
              taken: false;
              unlock_round: number;
            } | {
              taken: true;
              debt: number;
              return_round: number;
            };
            restart?: {
              variant: {
                round_from: number;
                round_to: number;
                count: number;
                price: number;
              } | null;
            } | undefined;
            stat: {
              mini_die_cooldown?: number | undefined;
              rent_history?: number | undefined;
            };
          }>;
          fields: Map<number, {
            field_id: number;
            owner_user_id: number;
            level: number;
            mortgage?: {
              round_until?: number | undefined;
            } | undefined;
          }>;
          turn: {
            user_id: number | null;
            action: {
              user_id: number | null;
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "waive" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "triple.move" | "wormhole.open" | "wormhole.reject" | "contract.fallback" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
            };
            move_reversed: boolean;
            auction?: {
              field_id: number;
              bid: number;
              user_ids_rejected: Set<number>;
            } | undefined;
            contract?: {
              initiator: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
              responder: {
                user_id: number;
                field_ids: Set<number>;
                cash: number;
              };
            } | undefined;
            contracts_sent?: number | undefined;
            jackpot?: {
              superprize: number;
            } | undefined;
            payment?: {
              to_user_id?: number | undefined;
              amount: number;
            } | undefined;
            field_ids_move?: Map<number, {
              stop: number;
            } | {
              field_id: number;
            }> | undefined;
            field_ids_level_built?: Set<number> | undefined;
            field_ids_mortgaged?: Set<number> | undefined;
          };
          timer?: {
            ts_expires: number;
            is_extra: boolean;
          } | {
            expires_in: number;
            is_extra: boolean;
          } | undefined;
          viewers_count: number;
        };
      };
    })[];
  };
}
type M1DemoPacket = ReturnType<M1LiveDemo['process']>;
type M1DemoPacketEvent = M1DemoPacket['events'][number] & {
  status?: {
    before: M1DemoPacketStatus;
    after: M1DemoPacketStatus;
  };
};
type ExtractM1DemoPacketEvent<T> = Extract<M1DemoPacketEvent, {
  type: T;
}>;
//#endregion
export { ExtractM1DemoPacketEvent, type M1DemoContract, M1DemoPacket, M1DemoPacketEvent, type M1DemoPacketSetup, type M1DemoPacketSetupConfig, type M1DemoPacketSetupConfigChanceCardType, type M1DemoPacketSetupConfigField, type M1DemoPacketSetupConfigMonopoly, type M1DemoPacketSetupPlayer, type M1DemoPacketSetupPlayerEquippedCard, type M1DemoPacketSetupPlayerEquippedGenerator, type M1DemoPacketSetupPlayerEquippedJoke, type M1DemoPacketStatus, type M1DemoPacketStatusField, type M1DemoPacketStatusPlayer, type M1DemoPacketStatusTurn, type M1DemoPacketTime, M1LiveDemo, packetv1_action_mapping };