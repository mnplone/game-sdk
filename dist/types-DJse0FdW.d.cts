import * as v from "valibot";

//#region src/packet/setup.d.ts
declare const valiM1DemoPacketSetupSchema: v.ObjectSchema<{
  /** Constants that define basic rules of the match. */readonly config: v.ObjectSchema<{
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
      type: "jail" | "start";
    } | {
      is_corner: boolean;
      type: "jackpot" | "wormhole" | "cash.pay" | "cash.receive" | "chance" | "jail.goto" | "park" | "russian-roulette" | "tax.income" | "tax.luxury";
    } | {
      is_corner: false;
      type: "company";
      monopoly_id: number;
      is_last: boolean;
    })[], ({
      is_corner: true;
      type: "jail" | "start";
    } | {
      is_corner: boolean;
      type: "jackpot" | "wormhole" | "cash.pay" | "cash.receive" | "chance" | "jail.goto" | "park" | "russian-roulette" | "tax.income" | "tax.luxury";
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
      readonly rent_grow: v.ObjectSchema<{
        readonly by_round: v.NumberSchema<undefined>;
        readonly max: v.NumberSchema<undefined>;
      }, undefined>;
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
        rent_grow: {
          by_round: number;
          max: number;
        };
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
      rent_grow: {
        by_round: number;
        max: number;
      };
    }>>]>;
    readonly mechanics: v.ObjectSchema<{
      readonly auction: v.OptionalSchema<v.ObjectSchema<{
        readonly bid_increment: v.NumberSchema<undefined>;
      }, undefined>, undefined>;
      readonly buyout: v.OptionalSchema<v.ObjectSchema<{
        readonly owner_premium: v.NumberSchema<undefined>;
        readonly bank_premium: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
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
          readonly type: v.LiteralSchema<"goto.jail", undefined>;
          readonly text_id: v.NumberSchema<undefined>;
        }, undefined>, v.StrictObjectSchema<{
          readonly type: v.LiteralSchema<"goto.start", undefined>;
          readonly text_id: v.NumberSchema<undefined>;
        }, undefined>, v.StrictObjectSchema<{
          readonly type: v.LiteralSchema<"teleport", undefined>;
          readonly text_id: v.NumberSchema<undefined>;
        }, undefined>, v.StrictObjectSchema<{
          readonly type: v.LiteralSchema<"move.one", undefined>;
          readonly text_id: v.NumberSchema<undefined>;
        }, undefined>, v.StrictObjectSchema<{
          readonly type: v.LiteralSchema<"move.skip", undefined>;
          readonly text_id: v.NumberSchema<undefined>;
        }, undefined>, v.StrictObjectSchema<{
          readonly type: v.LiteralSchema<"move.undo", undefined>;
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
      readonly charges: v.OptionalSchema<v.ObjectSchema<{
        readonly default: v.NumberSchema<undefined>;
        readonly limit: v.NumberSchema<undefined>;
        readonly features: v.RecordSchema<v.StringSchema<undefined>, v.ObjectSchema<{
          readonly charges: v.NumberSchema<undefined>;
          readonly no_cap: v.OptionalSchema<v.BooleanSchema<undefined>, false>;
        }, undefined>, undefined>;
      }, undefined>, undefined>;
      readonly field_level: v.OptionalSchema<v.ObjectSchema<{
        readonly build: v.OptionalSchema<v.ObjectSchema<{
          readonly uneven: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
          readonly without_monopoly: v.OptionalSchema<v.ObjectSchema<{
            readonly rent_multiplier: v.OptionalSchema<v.NumberSchema<undefined>, 1>;
          }, undefined>, undefined>;
        }, undefined>, () => {}>;
        readonly sell: v.ObjectSchema<{
          readonly multiplier: v.OptionalSchema<v.NumberSchema<undefined>, 1>;
        }, undefined>;
      }, undefined>, undefined>;
      readonly income_tax: v.OptionalSchema<v.ObjectSchema<{
        readonly v: v.OptionalSchema<v.PicklistSchema<[1, 2], undefined>, 1>;
        readonly rate: v.NumberSchema<undefined>;
        readonly jail: v.OptionalSchema<v.ObjectSchema<{
          readonly base_reduction: v.NumberSchema<undefined>;
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
        readonly fine: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly rent_multiplier: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
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
      readonly mortgage: v.OptionalSchema<v.UnionSchema<[v.IntersectSchema<[v.ObjectSchema<{
        readonly multiplier: v.NumberSchema<undefined>;
        readonly duration: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly buyback_multiplier: v.NumberSchema<undefined>;
      }, undefined>, v.UnionSchema<[v.ObjectSchema<{}, undefined>, v.ObjectSchema<{
        readonly auction_multiplier: v.NumberSchema<undefined>;
      }, undefined>, v.ObjectSchema<{
        readonly waive_multiplier: v.NumberSchema<undefined>;
      }, undefined>], undefined>], undefined>, v.ObjectSchema<{
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
      readonly rules: v.ArraySchema<v.IntersectSchema<[v.UnionSchema<[v.ObjectSchema<{
        readonly time: v.NumberSchema<undefined>;
      }, undefined>, v.ObjectSchema<{
        readonly round: v.NumberSchema<undefined>;
      }, undefined>], undefined>, v.VariantSchema<"type", [v.ObjectSchema<{
        readonly type: v.LiteralSchema<"start.income.off", undefined>;
      }, undefined>, v.ObjectSchema<{
        readonly type: v.LiteralSchema<"start.tax", undefined>;
        readonly sum: v.NumberSchema<undefined>;
      }, undefined>, v.ObjectSchema<{
        readonly type: v.LiteralSchema<"cashflow.tax", undefined>;
        readonly rate: v.NumberSchema<undefined>;
      }, undefined>], undefined>], undefined>, undefined>;
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
declare const valiM1DemoPacketStatusTurnSchema: v.SchemaWithPipe<readonly [v.ObjectSchema<{
  /** User ID of the player whose turn it is. */readonly user_id: v.NullableSchema<v.NumberSchema<undefined>, undefined>;
  readonly action: v.ObjectSchema<{
    /** User ID of the player from which action is expected. */readonly user_id: v.NullableSchema<v.NumberSchema<undefined>, undefined>;
    readonly list: v.SchemaWithPipe<readonly [v.ArraySchema<v.PicklistSchema<["auction.put", "auction.bid", "auction.reject", "bank.fee.pay", "bus.move", "contract.send", "contract.accept", "contract.reject", "contract.review.approve", "contract.review.object", "contract.fallback", "jackpot.reject", "jackpot.play", "jail.put", "jail.release.pay", "jail.stay", "level.build", "level.sell", "loan.take", "loan.repay", "mortgage.put", "mortgage.buyback", "mortgage.waive", "mortgage.auction", "waive", "movement.go", "purchase", "purchase.reject", "purchase.buyout", "purchase.buyout.reject", "purchase.buyout.protect", "rent.pay", "roll-dices", "roll-dices.reroll.reject", "russian-roulette.play", "russian-roulette.reject", "start.tax.pay", "taxi.move", "wormhole.use", "wormhole.open", "wormhole.jump", "wormhole.reject", "restart", "skip"], undefined>, undefined>, v.TransformAction<("restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.waive" | "mortgage.auction" | "waive" | "movement.go" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip")[], Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.waive" | "mortgage.auction" | "waive" | "movement.go" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">>]>;
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
  readonly dices: v.OptionalSchema<v.UnionSchema<[v.StrictTupleSchema<[v.NumberSchema<undefined>], undefined>, v.StrictTupleSchema<[v.NumberSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.StrictTupleSchema<[v.NumberSchema<undefined>, v.NumberSchema<undefined>, v.NumberSchema<undefined>], undefined>], undefined>, undefined>;
  readonly jackpot: v.OptionalSchema<v.ObjectSchema<{
    readonly superprize: v.NumberSchema<undefined>;
  }, undefined>, undefined>;
  readonly payment: v.OptionalSchema<v.ObjectSchema<{
    readonly to_user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly amount: v.NumberSchema<undefined>;
  }, undefined>, undefined>; /** Fields on which player can move in this action. */
  readonly movement: v.OptionalSchema<v.VariantSchema<"source", [v.ObjectSchema<{
    readonly source: v.PicklistSchema<["bus", "triple"], undefined>;
  }, undefined>, v.ObjectSchema<{
    readonly source: v.PicklistSchema<["taxi", "wormhole"], undefined>;
    readonly field_ids: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
  }, undefined>], undefined>, undefined>; /** Fields on which player already built a level this turn. */
  readonly field_ids_level_built: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number[], Set<number>>]>, undefined>; /** Fields which player already mortgaged this turn. */
  readonly field_ids_mortgaged: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number[], Set<number>>]>, undefined>;
}, undefined>]>;
type M1DemoPacketStatusTurn = v.InferOutput<typeof valiM1DemoPacketStatusTurnSchema>;
type M1DemoPacketStatusTurnActionType = SetElement<M1DemoPacketStatusTurn['action']['list']>;
//#endregion
//#region src/packet/status.d.ts
declare const valiM1DemoPacketStatusSchema: v.ObjectSchema<{
  /** Round number. */readonly round: v.NumberSchema<undefined>; /** Players. */
  readonly players: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly user_id: v.NumberSchema<undefined>;
    readonly status: v.NumberSchema<undefined>;
    readonly position: v.NumberSchema<undefined>;
    readonly cash: v.NumberSchema<undefined>;
    readonly charges: v.OptionalSchema<v.NumberSchema<undefined>, 0>;
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
      readonly rent_history: v.OptionalSchema<v.NumberSchema<undefined>, 0>;
      readonly income_tax_base: v.OptionalSchema<v.NumberSchema<undefined>, 0>;
    }, undefined>;
  }, undefined>, v.TransformAction<{
    user_id: number;
    status: number;
    position: number;
    cash: number;
    charges: number;
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
      rent_history: number;
      income_tax_base: number;
    };
  }, {
    user_id: number;
    status: number;
    position: number;
    cash: number;
    charges: number;
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
      rent_history: number;
      income_tax_base: number;
    };
  }>]>, undefined>, v.TransformAction<{
    user_id: number;
    status: number;
    position: number;
    cash: number;
    charges: number;
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
      rent_history: number;
      income_tax_base: number;
    };
  }[], Map<number, {
    user_id: number;
    status: number;
    position: number;
    cash: number;
    charges: number;
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
      rent_history: number;
      income_tax_base: number;
    };
  }>>]>; /** Current information about fields. */
  readonly fields: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly field_id: v.NumberSchema<undefined>;
    readonly owner_user_id: v.NumberSchema<undefined>;
    readonly level: v.NumberSchema<undefined>;
    readonly mortgage: v.OptionalSchema<v.ObjectSchema<{
      readonly round_until: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly last_rent_round: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly protection: v.OptionalSchema<v.NumberSchema<undefined>, 0>;
  }, undefined>, v.TransformAction<{
    field_id: number;
    owner_user_id: number;
    level: number;
    mortgage?: {
      round_until?: number | undefined;
    } | undefined;
    last_rent_round?: number | undefined;
    protection: number;
  }, {
    field_id: number;
    owner_user_id: number;
    level: number;
    mortgage?: {
      round_until?: number | undefined;
    } | undefined;
    last_rent_round?: number | undefined;
    protection: number;
  }>]>, undefined>, v.TransformAction<{
    field_id: number;
    owner_user_id: number;
    level: number;
    mortgage?: {
      round_until?: number | undefined;
    } | undefined;
    last_rent_round?: number | undefined;
    protection: number;
  }[], Map<number, {
    field_id: number;
    owner_user_id: number;
    level: number;
    mortgage?: {
      round_until?: number | undefined;
    } | undefined;
    last_rent_round?: number | undefined;
    protection: number;
  }>>]>; /** Information about current turn. */
  readonly turn: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly user_id: v.NullableSchema<v.NumberSchema<undefined>, undefined>;
    readonly action: v.ObjectSchema<{
      readonly user_id: v.NullableSchema<v.NumberSchema<undefined>, undefined>;
      readonly list: v.SchemaWithPipe<readonly [v.ArraySchema<v.PicklistSchema<["auction.put", "auction.bid", "auction.reject", "bank.fee.pay", "bus.move", "contract.send", "contract.accept", "contract.reject", "contract.review.approve", "contract.review.object", "contract.fallback", "jackpot.reject", "jackpot.play", "jail.put", "jail.release.pay", "jail.stay", "level.build", "level.sell", "loan.take", "loan.repay", "mortgage.put", "mortgage.buyback", "mortgage.waive", "mortgage.auction", "waive", "movement.go", "purchase", "purchase.reject", "purchase.buyout", "purchase.buyout.reject", "purchase.buyout.protect", "rent.pay", "roll-dices", "roll-dices.reroll.reject", "russian-roulette.play", "russian-roulette.reject", "start.tax.pay", "taxi.move", "wormhole.use", "wormhole.open", "wormhole.jump", "wormhole.reject", "restart", "skip"], undefined>, undefined>, v.TransformAction<("restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.waive" | "mortgage.auction" | "waive" | "movement.go" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip")[], Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.waive" | "mortgage.auction" | "waive" | "movement.go" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">>]>;
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
    readonly dices: v.OptionalSchema<v.UnionSchema<[v.StrictTupleSchema<[v.NumberSchema<undefined>], undefined>, v.StrictTupleSchema<[v.NumberSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.StrictTupleSchema<[v.NumberSchema<undefined>, v.NumberSchema<undefined>, v.NumberSchema<undefined>], undefined>], undefined>, undefined>;
    readonly jackpot: v.OptionalSchema<v.ObjectSchema<{
      readonly superprize: v.NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly payment: v.OptionalSchema<v.ObjectSchema<{
      readonly to_user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
      readonly amount: v.NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly movement: v.OptionalSchema<v.VariantSchema<"source", [v.ObjectSchema<{
      readonly source: v.PicklistSchema<["bus", "triple"], undefined>;
    }, undefined>, v.ObjectSchema<{
      readonly source: v.PicklistSchema<["taxi", "wormhole"], undefined>;
      readonly field_ids: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>], undefined>, undefined>;
    readonly field_ids_level_built: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number[], Set<number>>]>, undefined>;
    readonly field_ids_mortgaged: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number[], Set<number>>]>, undefined>;
  }, undefined>]>;
  /**
   * Info about timer.
   *
   * If match set up with no timers, this object is not defined.
   */
  readonly timer: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
    readonly ts_expires: v.NumberSchema<undefined>;
    readonly is_extra: v.BooleanSchema<undefined>;
  }, undefined>, v.ObjectSchema<{
    readonly expires_in: v.NumberSchema<undefined>;
    readonly is_extra: v.BooleanSchema<undefined>;
  }, undefined>], undefined>, undefined>; /** Number of viewers. */
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
  readonly goToJail: "jail.put";
  readonly payForUnjail: "jail.release.pay";
  readonly stayInJail: "jail.stay";
  readonly levelUp: "level.build";
  readonly levelDown: "level.sell";
  readonly credit_take: "loan.take";
  readonly credit_pay: "loan.repay";
  readonly mortgage: "mortgage.put";
  readonly unmortgage: "mortgage.buyback";
  readonly rejectMortgaged: "mortgage.waive";
  readonly auctionMortgaged: "mortgage.auction";
  readonly fieldDrop: "waive";
  readonly chooseFieldToMove: "movement.go";
  readonly buy: "purchase";
  readonly noBuy: "purchase.reject";
  readonly buyOut: "purchase.buyout";
  readonly noBuyOut: "purchase.buyout.reject";
  readonly buyoutProtect: "purchase.buyout.protect";
  readonly payRent: "rent.pay";
  readonly rollDices: "roll-dices";
  readonly rollDicesRerollCancel: "roll-dices.reroll.reject";
  readonly russianRoulettePlay: "russian-roulette.play";
  readonly russianRouletteDecline: "russian-roulette.reject";
  readonly startBypassFee: "start.tax.pay";
  readonly chooseTaxiStop: "taxi.move";
  readonly wormholeUse: "wormhole.use";
  readonly wormholeOpen: "wormhole.open";
  readonly wormholeJump: "wormhole.jump";
  readonly wormholeDecline: "wormhole.reject";
  readonly restart: "restart";
  readonly skip: "skip";
};
declare const extra_actions_mapping: readonly [readonly ["leave", "leave"], readonly ["message", "message"], readonly ["pause.set", "pause"], readonly ["pause.end", "pauseRemove"], readonly ["contract.fallback", "contractFallback"]];
declare const packet_v1_action_mapping: Record<M1DemoPacketStatusTurnActionType | (typeof extra_actions_mapping)[number][0], keyof typeof action_list_mapping | (typeof extra_actions_mapping)[number][1]>;
//#endregion
//#region src/packet.d.ts
declare const valiM1DemoPacketSchema: v.ObjectSchema<{
  /** Various information about the match which is never changes. */readonly setup: v.OptionalSchema<v.ObjectSchema<{
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
        type: "jail" | "start";
      } | {
        is_corner: boolean;
        type: "jackpot" | "wormhole" | "cash.pay" | "cash.receive" | "chance" | "jail.goto" | "park" | "russian-roulette" | "tax.income" | "tax.luxury";
      } | {
        is_corner: false;
        type: "company";
        monopoly_id: number;
        is_last: boolean;
      })[], ({
        is_corner: true;
        type: "jail" | "start";
      } | {
        is_corner: boolean;
        type: "jackpot" | "wormhole" | "cash.pay" | "cash.receive" | "chance" | "jail.goto" | "park" | "russian-roulette" | "tax.income" | "tax.luxury";
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
        readonly rent_grow: v.ObjectSchema<{
          readonly by_round: v.NumberSchema<undefined>;
          readonly max: v.NumberSchema<undefined>;
        }, undefined>;
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
          rent_grow: {
            by_round: number;
            max: number;
          };
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
        rent_grow: {
          by_round: number;
          max: number;
        };
      }>>]>;
      readonly mechanics: v.ObjectSchema<{
        readonly auction: v.OptionalSchema<v.ObjectSchema<{
          readonly bid_increment: v.NumberSchema<undefined>;
        }, undefined>, undefined>;
        readonly buyout: v.OptionalSchema<v.ObjectSchema<{
          readonly owner_premium: v.NumberSchema<undefined>;
          readonly bank_premium: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
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
            readonly type: v.LiteralSchema<"goto.jail", undefined>;
            readonly text_id: v.NumberSchema<undefined>;
          }, undefined>, v.StrictObjectSchema<{
            readonly type: v.LiteralSchema<"goto.start", undefined>;
            readonly text_id: v.NumberSchema<undefined>;
          }, undefined>, v.StrictObjectSchema<{
            readonly type: v.LiteralSchema<"teleport", undefined>;
            readonly text_id: v.NumberSchema<undefined>;
          }, undefined>, v.StrictObjectSchema<{
            readonly type: v.LiteralSchema<"move.one", undefined>;
            readonly text_id: v.NumberSchema<undefined>;
          }, undefined>, v.StrictObjectSchema<{
            readonly type: v.LiteralSchema<"move.skip", undefined>;
            readonly text_id: v.NumberSchema<undefined>;
          }, undefined>, v.StrictObjectSchema<{
            readonly type: v.LiteralSchema<"move.undo", undefined>;
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
        readonly charges: v.OptionalSchema<v.ObjectSchema<{
          readonly default: v.NumberSchema<undefined>;
          readonly limit: v.NumberSchema<undefined>;
          readonly features: v.RecordSchema<v.StringSchema<undefined>, v.ObjectSchema<{
            readonly charges: v.NumberSchema<undefined>;
            readonly no_cap: v.OptionalSchema<v.BooleanSchema<undefined>, false>;
          }, undefined>, undefined>;
        }, undefined>, undefined>;
        readonly field_level: v.OptionalSchema<v.ObjectSchema<{
          readonly build: v.OptionalSchema<v.ObjectSchema<{
            readonly uneven: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
            readonly without_monopoly: v.OptionalSchema<v.ObjectSchema<{
              readonly rent_multiplier: v.OptionalSchema<v.NumberSchema<undefined>, 1>;
            }, undefined>, undefined>;
          }, undefined>, () => {}>;
          readonly sell: v.ObjectSchema<{
            readonly multiplier: v.OptionalSchema<v.NumberSchema<undefined>, 1>;
          }, undefined>;
        }, undefined>, undefined>;
        readonly income_tax: v.OptionalSchema<v.ObjectSchema<{
          readonly v: v.OptionalSchema<v.PicklistSchema<[1, 2], undefined>, 1>;
          readonly rate: v.NumberSchema<undefined>;
          readonly jail: v.OptionalSchema<v.ObjectSchema<{
            readonly base_reduction: v.NumberSchema<undefined>;
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
          readonly fine: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
          readonly rent_multiplier: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
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
        readonly mortgage: v.OptionalSchema<v.UnionSchema<[v.IntersectSchema<[v.ObjectSchema<{
          readonly multiplier: v.NumberSchema<undefined>;
          readonly duration: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
          readonly buyback_multiplier: v.NumberSchema<undefined>;
        }, undefined>, v.UnionSchema<[v.ObjectSchema<{}, undefined>, v.ObjectSchema<{
          readonly auction_multiplier: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
          readonly waive_multiplier: v.NumberSchema<undefined>;
        }, undefined>], undefined>], undefined>, v.ObjectSchema<{
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
        readonly rules: v.ArraySchema<v.IntersectSchema<[v.UnionSchema<[v.ObjectSchema<{
          readonly time: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
          readonly round: v.NumberSchema<undefined>;
        }, undefined>], undefined>, v.VariantSchema<"type", [v.ObjectSchema<{
          readonly type: v.LiteralSchema<"start.income.off", undefined>;
        }, undefined>, v.ObjectSchema<{
          readonly type: v.LiteralSchema<"start.tax", undefined>;
          readonly sum: v.NumberSchema<undefined>;
        }, undefined>, v.ObjectSchema<{
          readonly type: v.LiteralSchema<"cashflow.tax", undefined>;
          readonly rate: v.NumberSchema<undefined>;
        }, undefined>], undefined>], undefined>, undefined>;
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
  }, undefined>, undefined>; /** Events happened before game went to the "status". */
  readonly events: v.ArraySchema<v.UnionSchema<[...(v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"bankrupt", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly user_id_bankrupt: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"chance", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly chance_index: v.NumberSchema<undefined>;
    readonly shield: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly data: v.UnionSchema<[v.StrictObjectSchema<{
      readonly amount: v.NumberSchema<undefined>;
    }, undefined>, v.StrictObjectSchema<{
      readonly field_id: v.NumberSchema<undefined>;
      readonly move_reversed: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, v.UndefinedSchema<undefined>], undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"game-over", undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"leave", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly kicked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"message", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly private: v.OptionalSchema<v.ObjectSchema<{
      readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly is_forced: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly text: v.StringSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"park", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"restart", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly restart_price: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"skip", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"auction.put", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
    readonly bid: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"auction.bid", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly bid: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"auction.reject", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"auction.win", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
    readonly user_id_seller: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly price: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"auction.cancel", undefined>;
    readonly field_id: v.NumberSchema<undefined>;
    readonly user_id_seller: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly price: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"bank.income", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly amount: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"bank.fee", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly amount: v.NumberSchema<undefined>;
    readonly shield: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"bank.fee.pay", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly amount: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"bank.return", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly amount: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"contract.send", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly user_id_to: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"contract.accept", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly contract: v.SchemaWithPipe<readonly [v.TupleSchema<[v.ObjectSchema<{
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
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"contract.reject", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly timeout: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"contract.review.init", undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"contract.review.approve", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"contract.review.object", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"contract.review.pass", undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"contract.revert", undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"jackpot", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"jackpot.pay", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly amount: v.NumberSchema<undefined>;
    readonly jackpot_size: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"jackpot.play", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly dice_bet: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    readonly dice_rolled: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"jackpot.win", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly amount: v.NumberSchema<undefined>;
    readonly dice_rolled: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"jackpot.lose", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly amount: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly dice_rolled: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"jackpot.superprize.win", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly amount: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"jackpot.superprize.increase", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly superprize: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"jackpot.reject", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"jail.put", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly income_tax: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"jail.put.double", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"jail.fine", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"jail.visit", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"jail.stay", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"jail.release", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly position_after: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"jail.release.pay", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"jail.release.income-tax-write-off", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"level.build", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"level.sell", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"loan.take", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"loan.deadline", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly amount: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"loan.repay", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly amount: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"m1.move", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly rule: v.SchemaWithPipe<readonly [v.PicklistSchema<[0, 1], undefined>, v.TransformAction<0 | 1, "free" | "enemy_owned">]>;
    readonly field_id: v.NumberSchema<undefined>;
    readonly move_reversed: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"m1.fail", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"mortgage.put", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"mortgage.buyback", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"mortgage.waive", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"mortgage.expire", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"waive", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"movement.picker", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly movement: v.VariantSchema<"source", [v.ObjectSchema<{
      readonly source: v.LiteralSchema<"bus", undefined>;
      readonly distances: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, v.ObjectSchema<{
      readonly source: v.LiteralSchema<"wormhole", undefined>;
      readonly exit_count: v.NumberSchema<undefined>;
    }, undefined>, v.ObjectSchema<{
      readonly source: v.PicklistSchema<["taxi", "triple"], undefined>;
    }, undefined>], undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"movement.go", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
    readonly move_reversed: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly auto_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly movement: v.VariantSchema<"source", [v.ObjectSchema<{
      readonly source: v.LiteralSchema<"bus", undefined>;
      readonly stop_id: v.PicklistSchema<[-1, 0, 1], undefined>;
    }, undefined>, v.ObjectSchema<{
      readonly source: v.PicklistSchema<["taxi", "triple", "wormhole"], undefined>;
    }, undefined>], undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"pause.set", undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"pause.end", undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"purchase.offer", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"purchase", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
    readonly price: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"purchase.reject", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"purchase.buyout", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly user_id_receiver: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
    readonly price: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"purchase.buyout.reject", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"purchase.buyout.protect", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"rent.pay", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
    readonly amount: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"rent.pay.complete", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly user_id_receiver: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
    readonly amount: v.NumberSchema<undefined>;
    readonly amount_received: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"rent.pay.cancel", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly user_id_receiver: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"rent.zero", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
    readonly shield: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"rent.zero.self", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"rent.zero.teammate", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"rent.zero.mortgaged", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"russian-roulette", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"russian-roulette.play", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly bullets_count: v.NumberSchema<undefined>;
    readonly reward_amount: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"russian-roulette.survive", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly reward_amount: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"russian-roulette.die", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"russian-roulette.reject", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"start.income", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"start.bonus", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"start.tax", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly amount: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"start.tax.pay", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"taxi.select", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly limit: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"taxi.move", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly selection: v.ObjectSchema<{
      readonly stop_id: v.NumberSchema<undefined>;
      readonly field_id: v.NumberSchema<undefined>;
      readonly auto: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>;
    readonly move_reversed: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"taxi.fail", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly move_reversed: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"tournament.drop", undefined>;
    readonly user_ids: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"wormhole", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"wormhole.reject", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"roll-dices", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly reroll: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly dices: v.UnionSchema<[v.StrictTupleSchema<[v.NumberSchema<undefined>], undefined>, v.StrictTupleSchema<[v.NumberSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.StrictTupleSchema<[v.NumberSchema<undefined>, v.NumberSchema<undefined>, v.NumberSchema<undefined>], undefined>], undefined>;
    readonly move_reversed: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly double_spent: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"roll-dices.doubling", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"roll-dices.jail.success", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"roll-dices.jail.fail", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"roll-dices.reroll", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
  }, undefined> | v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.LiteralSchema<"roll-dices.reroll.reject", undefined>;
    readonly user_id: v.NumberSchema<undefined>;
    readonly move_reversed: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    readonly position: v.NumberSchema<undefined>;
  }, undefined>)[], v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly id: v.StringSchema<undefined>;
    readonly type: v.StringSchema<undefined>;
  }, undefined>, v.TransformAction<{
    id: string;
    type: string;
  }, {
    id: string;
    type: "_unknown";
    type_received: string;
  }>]>], undefined>, undefined>; /** Current status of the match. */
  readonly status: v.OptionalSchema<v.ObjectSchema<{
    readonly round: v.NumberSchema<undefined>;
    readonly players: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
      readonly user_id: v.NumberSchema<undefined>;
      readonly status: v.NumberSchema<undefined>;
      readonly position: v.NumberSchema<undefined>;
      readonly cash: v.NumberSchema<undefined>;
      readonly charges: v.OptionalSchema<v.NumberSchema<undefined>, 0>;
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
        readonly rent_history: v.OptionalSchema<v.NumberSchema<undefined>, 0>;
        readonly income_tax_base: v.OptionalSchema<v.NumberSchema<undefined>, 0>;
      }, undefined>;
    }, undefined>, v.TransformAction<{
      user_id: number;
      status: number;
      position: number;
      cash: number;
      charges: number;
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
        rent_history: number;
        income_tax_base: number;
      };
    }, {
      user_id: number;
      status: number;
      position: number;
      cash: number;
      charges: number;
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
        rent_history: number;
        income_tax_base: number;
      };
    }>]>, undefined>, v.TransformAction<{
      user_id: number;
      status: number;
      position: number;
      cash: number;
      charges: number;
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
        rent_history: number;
        income_tax_base: number;
      };
    }[], Map<number, {
      user_id: number;
      status: number;
      position: number;
      cash: number;
      charges: number;
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
        rent_history: number;
        income_tax_base: number;
      };
    }>>]>;
    readonly fields: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
      readonly field_id: v.NumberSchema<undefined>;
      readonly owner_user_id: v.NumberSchema<undefined>;
      readonly level: v.NumberSchema<undefined>;
      readonly mortgage: v.OptionalSchema<v.ObjectSchema<{
        readonly round_until: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
      }, undefined>, undefined>;
      readonly last_rent_round: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
      readonly protection: v.OptionalSchema<v.NumberSchema<undefined>, 0>;
    }, undefined>, v.TransformAction<{
      field_id: number;
      owner_user_id: number;
      level: number;
      mortgage?: {
        round_until?: number | undefined;
      } | undefined;
      last_rent_round?: number | undefined;
      protection: number;
    }, {
      field_id: number;
      owner_user_id: number;
      level: number;
      mortgage?: {
        round_until?: number | undefined;
      } | undefined;
      last_rent_round?: number | undefined;
      protection: number;
    }>]>, undefined>, v.TransformAction<{
      field_id: number;
      owner_user_id: number;
      level: number;
      mortgage?: {
        round_until?: number | undefined;
      } | undefined;
      last_rent_round?: number | undefined;
      protection: number;
    }[], Map<number, {
      field_id: number;
      owner_user_id: number;
      level: number;
      mortgage?: {
        round_until?: number | undefined;
      } | undefined;
      last_rent_round?: number | undefined;
      protection: number;
    }>>]>;
    readonly turn: v.SchemaWithPipe<readonly [v.ObjectSchema<{
      readonly user_id: v.NullableSchema<v.NumberSchema<undefined>, undefined>;
      readonly action: v.ObjectSchema<{
        readonly user_id: v.NullableSchema<v.NumberSchema<undefined>, undefined>;
        readonly list: v.SchemaWithPipe<readonly [v.ArraySchema<v.PicklistSchema<["auction.put", "auction.bid", "auction.reject", "bank.fee.pay", "bus.move", "contract.send", "contract.accept", "contract.reject", "contract.review.approve", "contract.review.object", "contract.fallback", "jackpot.reject", "jackpot.play", "jail.put", "jail.release.pay", "jail.stay", "level.build", "level.sell", "loan.take", "loan.repay", "mortgage.put", "mortgage.buyback", "mortgage.waive", "mortgage.auction", "waive", "movement.go", "purchase", "purchase.reject", "purchase.buyout", "purchase.buyout.reject", "purchase.buyout.protect", "rent.pay", "roll-dices", "roll-dices.reroll.reject", "russian-roulette.play", "russian-roulette.reject", "start.tax.pay", "taxi.move", "wormhole.use", "wormhole.open", "wormhole.jump", "wormhole.reject", "restart", "skip"], undefined>, undefined>, v.TransformAction<("restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.waive" | "mortgage.auction" | "waive" | "movement.go" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip")[], Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.waive" | "mortgage.auction" | "waive" | "movement.go" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">>]>;
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
      readonly dices: v.OptionalSchema<v.UnionSchema<[v.StrictTupleSchema<[v.NumberSchema<undefined>], undefined>, v.StrictTupleSchema<[v.NumberSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.StrictTupleSchema<[v.NumberSchema<undefined>, v.NumberSchema<undefined>, v.NumberSchema<undefined>], undefined>], undefined>, undefined>;
      readonly jackpot: v.OptionalSchema<v.ObjectSchema<{
        readonly superprize: v.NumberSchema<undefined>;
      }, undefined>, undefined>;
      readonly payment: v.OptionalSchema<v.ObjectSchema<{
        readonly to_user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
        readonly amount: v.NumberSchema<undefined>;
      }, undefined>, undefined>;
      readonly movement: v.OptionalSchema<v.VariantSchema<"source", [v.ObjectSchema<{
        readonly source: v.PicklistSchema<["bus", "triple"], undefined>;
      }, undefined>, v.ObjectSchema<{
        readonly source: v.PicklistSchema<["taxi", "wormhole"], undefined>;
        readonly field_ids: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
      }, undefined>], undefined>, undefined>;
      readonly field_ids_level_built: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number[], Set<number>>]>, undefined>;
      readonly field_ids_mortgaged: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number[], Set<number>>]>, undefined>;
    }, undefined>]>;
    readonly timer: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
      readonly ts_expires: v.NumberSchema<undefined>;
      readonly is_extra: v.BooleanSchema<undefined>;
    }, undefined>, v.ObjectSchema<{
      readonly expires_in: v.NumberSchema<undefined>;
      readonly is_extra: v.BooleanSchema<undefined>;
    }, undefined>], undefined>, undefined>;
    readonly viewers_count: v.OptionalSchema<v.NumberSchema<undefined>, 0>;
  }, undefined>, undefined>; /** Information about match time. */
  readonly time: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly ts_start: v.NumberSchema<undefined>;
    readonly ts_now: v.NumberSchema<undefined>;
    readonly inactive: v.NumberSchema<undefined>;
    readonly ts_inactive: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  }, undefined>, v.TransformAction<{
    ts_start: number;
    ts_now: number;
    inactive: number;
    ts_inactive?: number | undefined;
  }, {
    delta: number;
    ts_start: number;
    ts_now: number;
    inactive: number;
    ts_inactive?: number | undefined;
  }>]>;
}, undefined>;
type M1DemoTransportPacket = v.InferInput<typeof valiM1DemoPacketSchema>;
type M1DemoPacket = v.InferOutput<typeof valiM1DemoPacketSchema>;
//#endregion
//#region src/packet/events.d.ts
declare const valiM1DemoPacketEventsSchema: v.ArraySchema<v.UnionSchema<[...(v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"bankrupt", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly user_id_bankrupt: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"chance", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly chance_index: v.NumberSchema<undefined>;
  readonly shield: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  readonly data: v.UnionSchema<[v.StrictObjectSchema<{
    readonly amount: v.NumberSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly field_id: v.NumberSchema<undefined>;
    readonly move_reversed: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  }, undefined>, v.UndefinedSchema<undefined>], undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"game-over", undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"leave", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly kicked: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"message", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly private: v.OptionalSchema<v.ObjectSchema<{
    readonly user_id: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  }, undefined>, undefined>;
  readonly is_forced: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  readonly text: v.StringSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"park", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"restart", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly restart_price: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"skip", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"auction.put", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
  readonly bid: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"auction.bid", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly bid: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"auction.reject", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"auction.win", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
  readonly user_id_seller: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly price: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"auction.cancel", undefined>;
  readonly field_id: v.NumberSchema<undefined>;
  readonly user_id_seller: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly price: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"bank.income", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly amount: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"bank.fee", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly amount: v.NumberSchema<undefined>;
  readonly shield: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"bank.fee.pay", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly amount: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"bank.return", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly amount: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"contract.send", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly user_id_to: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"contract.accept", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly contract: v.SchemaWithPipe<readonly [v.TupleSchema<[v.ObjectSchema<{
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
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"contract.reject", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly timeout: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"contract.review.init", undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"contract.review.approve", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"contract.review.object", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"contract.review.pass", undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"contract.revert", undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"jackpot", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"jackpot.pay", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly amount: v.NumberSchema<undefined>;
  readonly jackpot_size: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"jackpot.play", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly dice_bet: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
  readonly dice_rolled: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"jackpot.win", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly amount: v.NumberSchema<undefined>;
  readonly dice_rolled: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"jackpot.lose", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly amount: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly dice_rolled: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"jackpot.superprize.win", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly amount: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"jackpot.superprize.increase", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly superprize: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"jackpot.reject", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"jail.put", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly income_tax: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"jail.put.double", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"jail.fine", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"jail.visit", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"jail.stay", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"jail.release", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly position_after: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"jail.release.pay", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"jail.release.income-tax-write-off", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"level.build", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"level.sell", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"loan.take", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"loan.deadline", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly amount: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"loan.repay", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly amount: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"m1.move", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly rule: v.SchemaWithPipe<readonly [v.PicklistSchema<[0, 1], undefined>, v.TransformAction<0 | 1, "free" | "enemy_owned">]>;
  readonly field_id: v.NumberSchema<undefined>;
  readonly move_reversed: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"m1.fail", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"mortgage.put", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"mortgage.buyback", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"mortgage.waive", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"mortgage.expire", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"waive", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"movement.picker", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly movement: v.VariantSchema<"source", [v.ObjectSchema<{
    readonly source: v.LiteralSchema<"bus", undefined>;
    readonly distances: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
  }, undefined>, v.ObjectSchema<{
    readonly source: v.LiteralSchema<"wormhole", undefined>;
    readonly exit_count: v.NumberSchema<undefined>;
  }, undefined>, v.ObjectSchema<{
    readonly source: v.PicklistSchema<["taxi", "triple"], undefined>;
  }, undefined>], undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"movement.go", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
  readonly move_reversed: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  readonly auto_selected: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  readonly movement: v.VariantSchema<"source", [v.ObjectSchema<{
    readonly source: v.LiteralSchema<"bus", undefined>;
    readonly stop_id: v.PicklistSchema<[-1, 0, 1], undefined>;
  }, undefined>, v.ObjectSchema<{
    readonly source: v.PicklistSchema<["taxi", "triple", "wormhole"], undefined>;
  }, undefined>], undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"pause.set", undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"pause.end", undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"purchase.offer", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"purchase", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
  readonly price: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"purchase.reject", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"purchase.buyout", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly user_id_receiver: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
  readonly price: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"purchase.buyout.reject", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"purchase.buyout.protect", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"rent.pay", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
  readonly amount: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"rent.pay.complete", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly user_id_receiver: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
  readonly amount: v.NumberSchema<undefined>;
  readonly amount_received: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"rent.pay.cancel", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly user_id_receiver: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"rent.zero", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
  readonly shield: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"rent.zero.self", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"rent.zero.teammate", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"rent.zero.mortgaged", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"russian-roulette", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"russian-roulette.play", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly bullets_count: v.NumberSchema<undefined>;
  readonly reward_amount: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"russian-roulette.survive", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly reward_amount: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"russian-roulette.die", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"russian-roulette.reject", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"start.income", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"start.bonus", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"start.tax", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly amount: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"start.tax.pay", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"taxi.select", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly limit: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"taxi.move", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly selection: v.ObjectSchema<{
    readonly stop_id: v.NumberSchema<undefined>;
    readonly field_id: v.NumberSchema<undefined>;
    readonly auto: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  }, undefined>;
  readonly move_reversed: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"taxi.fail", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly move_reversed: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"tournament.drop", undefined>;
  readonly user_ids: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"wormhole", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"wormhole.reject", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"roll-dices", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly reroll: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  readonly dices: v.UnionSchema<[v.StrictTupleSchema<[v.NumberSchema<undefined>], undefined>, v.StrictTupleSchema<[v.NumberSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.StrictTupleSchema<[v.NumberSchema<undefined>, v.NumberSchema<undefined>, v.NumberSchema<undefined>], undefined>], undefined>;
  readonly move_reversed: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  readonly double_spent: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"roll-dices.doubling", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"roll-dices.jail.success", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"roll-dices.jail.fail", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"roll-dices.reroll", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"roll-dices.reroll.reject", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly move_reversed: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  readonly position: v.NumberSchema<undefined>;
}, undefined>)[], v.SchemaWithPipe<readonly [v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.StringSchema<undefined>;
}, undefined>, v.TransformAction<{
  id: string;
  type: string;
}, {
  id: string;
  type: "_unknown";
  type_received: string;
}>]>], undefined>, undefined>;
type M1DemoPacketEvents = v.InferOutput<typeof valiM1DemoPacketEventsSchema>;
type M1DemoPacketEvent = M1DemoPacketEvents[number];
type M1DemoPacketEventType = M1DemoPacketEvent['type'];
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
    readonly type: v.LiteralSchema<"goto.jail", undefined>;
    readonly text_id: v.NumberSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"goto.start", undefined>;
    readonly text_id: v.NumberSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"teleport", undefined>;
    readonly text_id: v.NumberSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"move.one", undefined>;
    readonly text_id: v.NumberSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"move.skip", undefined>;
    readonly text_id: v.NumberSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"move.undo", undefined>;
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
  type: "jail" | "start";
} | {
  is_corner: boolean;
  type: "jackpot" | "wormhole" | "cash.pay" | "cash.receive" | "chance" | "jail.goto" | "park" | "russian-roulette" | "tax.income" | "tax.luxury";
} | {
  is_corner: false;
  type: "company";
  monopoly_id: number;
  is_last: boolean;
})[], ({
  is_corner: true;
  type: "jail" | "start";
} | {
  is_corner: boolean;
  type: "jackpot" | "wormhole" | "cash.pay" | "cash.receive" | "chance" | "jail.goto" | "park" | "russian-roulette" | "tax.income" | "tax.luxury";
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
  readonly rent_grow: v.ObjectSchema<{
    readonly by_round: v.NumberSchema<undefined>;
    readonly max: v.NumberSchema<undefined>;
  }, undefined>;
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
    rent_grow: {
      by_round: number;
      max: number;
    };
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
  rent_grow: {
    by_round: number;
    max: number;
  };
}>>]>;
type M1DemoPacketSetupConfigMonopoly = MapElement<v.InferOutput<typeof valiM1DemoPacketSetupConfigMonopoliesSchema>>;
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
//#region src/packet/status/fields.d.ts
declare const valiM1DemoPacketStatusFieldsSchema: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
  readonly field_id: v.NumberSchema<undefined>;
  readonly owner_user_id: v.NumberSchema<undefined>;
  readonly level: v.NumberSchema<undefined>;
  readonly mortgage: v.OptionalSchema<v.ObjectSchema<{
    readonly round_until: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  }, undefined>, undefined>;
  readonly last_rent_round: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly protection: v.OptionalSchema<v.NumberSchema<undefined>, 0>;
}, undefined>, v.TransformAction<{
  field_id: number;
  owner_user_id: number;
  level: number;
  mortgage?: {
    round_until?: number | undefined;
  } | undefined;
  last_rent_round?: number | undefined;
  protection: number;
}, {
  field_id: number;
  owner_user_id: number;
  level: number;
  mortgage?: {
    round_until?: number | undefined;
  } | undefined;
  last_rent_round?: number | undefined;
  protection: number;
}>]>, undefined>, v.TransformAction<{
  field_id: number;
  owner_user_id: number;
  level: number;
  mortgage?: {
    round_until?: number | undefined;
  } | undefined;
  last_rent_round?: number | undefined;
  protection: number;
}[], Map<number, {
  field_id: number;
  owner_user_id: number;
  level: number;
  mortgage?: {
    round_until?: number | undefined;
  } | undefined;
  last_rent_round?: number | undefined;
  protection: number;
}>>]>;
type M1DemoPacketStatusField = MapElement<v.InferOutput<typeof valiM1DemoPacketStatusFieldsSchema>>;
//#endregion
//#region src/packet/status/player.d.ts
declare const valiM1DemoPacketStatusPlayersSchema: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
  /** User ID of the player. */readonly user_id: v.NumberSchema<undefined>;
  /**
   * Player status:
   * - `0`: players is active;
   * - `-1`: player is eliminated.
   */
  readonly status: v.NumberSchema<undefined>; /** Player's position on the board. */
  readonly position: v.NumberSchema<undefined>; /** Player's cash. */
  readonly cash: v.NumberSchema<undefined>; /** Player's charges. */
  readonly charges: v.OptionalSchema<v.NumberSchema<undefined>, 0>; /** Player's score: how much rent they have collected. */
  readonly score: v.NumberSchema<undefined>; /** Player's jail status */
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
    readonly rent_history: v.OptionalSchema<v.NumberSchema<undefined>, 0>;
    readonly income_tax_base: v.OptionalSchema<v.NumberSchema<undefined>, 0>;
  }, undefined>;
}, undefined>, v.TransformAction<{
  user_id: number;
  status: number;
  position: number;
  cash: number;
  charges: number;
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
    rent_history: number;
    income_tax_base: number;
  };
}, {
  user_id: number;
  status: number;
  position: number;
  cash: number;
  charges: number;
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
    rent_history: number;
    income_tax_base: number;
  };
}>]>, undefined>, v.TransformAction<{
  user_id: number;
  status: number;
  position: number;
  cash: number;
  charges: number;
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
    rent_history: number;
    income_tax_base: number;
  };
}[], Map<number, {
  user_id: number;
  status: number;
  position: number;
  cash: number;
  charges: number;
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
    rent_history: number;
    income_tax_base: number;
  };
}>>]>;
type M1DemoPacketStatusPlayer = MapElement<v.InferOutput<typeof valiM1DemoPacketStatusPlayersSchema>>;
//#endregion
//#region src/packet/time.d.ts
declare const valiM1DemoPacketTimeSchema: v.SchemaWithPipe<readonly [v.ObjectSchema<{
  /** Unix timestamp of the start of the game in **milliseconds**. */readonly ts_start: v.NumberSchema<undefined>; /** Unix timestamp of the packet in **milliseconds**. */
  readonly ts_now: v.NumberSchema<undefined>; /** Total length of all pauses in the game excluding one that is currently active in **milliseconds**. */
  readonly inactive: v.NumberSchema<undefined>; /** Unix timestamp of the start of the current pause in **milliseconds**. */
  readonly ts_inactive: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
}, undefined>, v.TransformAction<{
  ts_start: number;
  ts_now: number;
  inactive: number;
  ts_inactive?: number | undefined;
}, {
  /** Difference between server's and browser's time in **milliseconds**. */delta: number;
  ts_start: number;
  ts_now: number;
  inactive: number;
  ts_inactive?: number | undefined;
}>]>;
type M1DemoPacketTime = v.InferOutput<typeof valiM1DemoPacketTimeSchema>;
//#endregion
//#region src/types.d.ts
type M1DemoRichPacket = M1DemoPacket & {
  events: (M1DemoPacket['events'][number] & {
    status: {
      before: M1DemoPacketStatus;
      after: M1DemoPacketStatus;
    };
  })[];
};
type M1DemoRichPacketEvent = M1DemoRichPacket['events'][number];
type ExtractM1DemoRichPacketEvent<T> = Extract<M1DemoRichPacketEvent, {
  type: T;
}>;
//#endregion
export { M1DemoPacketSetup as S, M1DemoTransportPacket as _, M1DemoPacketStatusPlayer as a, M1DemoContract as b, M1DemoPacketSetupPlayerEquippedCard as c, M1DemoPacketSetupConfigMonopoly as d, M1DemoPacketSetupConfigField as f, M1DemoPacket as g, M1DemoPacketEventType as h, M1DemoPacketTime as i, M1DemoPacketSetupPlayerEquippedGenerator as l, M1DemoPacketEvent as m, M1DemoRichPacket as n, M1DemoPacketStatusField as o, M1DemoPacketSetupConfigChanceCardType as p, M1DemoRichPacketEvent as r, M1DemoPacketSetupPlayer as s, ExtractM1DemoRichPacketEvent as t, M1DemoPacketSetupPlayerEquippedJoke as u, M1DemoPacketStatus as v, M1DemoPacketStatusTurn as x, packet_v1_action_mapping as y };