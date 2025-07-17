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

//#region src/utils/types.d.ts
type SetElement<T> = T extends Set<infer V> ? V : never;
type MapElement<T> = T extends Map<infer _, infer V> ? V : never;

//#endregion
//#region src/packet/status/turn.d.ts
declare const valiM1DemoContractSchema: v$10.SchemaWithPipe<readonly [v$10.TupleSchema<[v$10.ObjectSchema<{
  readonly user_id: v$10.NumberSchema<undefined>;
  readonly field_ids: v$10.ArraySchema<v$10.NumberSchema<undefined>, undefined>;
  readonly cash: v$10.NumberSchema<undefined>;
}, undefined>, v$10.ObjectSchema<{
  readonly user_id: v$10.NumberSchema<undefined>;
  readonly field_ids: v$10.ArraySchema<v$10.NumberSchema<undefined>, undefined>;
  readonly cash: v$10.NumberSchema<undefined>;
}, undefined>], undefined>, v$10.TransformAction<[{
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
type M1DemoContract = v$10.InferOutput<typeof valiM1DemoContractSchema>;
declare const valiM1DemoPacketStatusTurnSchema: v$10.ObjectSchema<{
  /** User ID of the player whose turn it is. */
  readonly user_id: v$10.NullableSchema<v$10.NumberSchema<undefined>, undefined>;
  readonly action: v$10.ObjectSchema<{
    /** User ID of the player from which action is expected. */
    readonly user_id: v$10.NullableSchema<v$10.NumberSchema<undefined>, undefined>;
    readonly list: v$10.SchemaWithPipe<readonly [v$10.ArraySchema<v$10.PicklistSchema<["auction.put", "auction.bid", "auction.reject", "bank.fee.pay", "bus.move", "contract.send", "contract.accept", "contract.reject", "jackpot.reject", "jackpot.play", "jail.release.pay", "level.build", "level.sell", "loan.take", "loan.repay", "mortgage.put", "mortgage.buyback", "mortgage.auction", "purchase", "purchase.reject", "rent.pay", "roll-dices", "triple.move", "wormhole.use", "wormhole.open", "wormhole.jump", "wormhole.reject", "restart"], undefined>, undefined>, v$10.TransformAction<("restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump")[], Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">>]>;
  }, undefined>;
  readonly move_reversed: v$10.SchemaWithPipe<readonly [v$10.OptionalSchema<v$10.PicklistSchema<[0, 1], undefined>, 0 | 1>, v$10.TransformAction<0 | 1, boolean>]>;
  readonly auction: v$10.OptionalSchema<v$10.ObjectSchema<{
    readonly field_id: v$10.NumberSchema<undefined>;
    readonly bid: v$10.NumberSchema<undefined>;
    readonly user_ids_rejected: v$10.SchemaWithPipe<readonly [v$10.ArraySchema<v$10.NumberSchema<undefined>, undefined>, v$10.TransformAction<number[], Set<number>>]>;
  }, undefined>, undefined>;
  readonly contract: v$10.OptionalSchema<v$10.SchemaWithPipe<readonly [v$10.TupleSchema<[v$10.ObjectSchema<{
    readonly user_id: v$10.NumberSchema<undefined>;
    readonly field_ids: v$10.ArraySchema<v$10.NumberSchema<undefined>, undefined>;
    readonly cash: v$10.NumberSchema<undefined>;
  }, undefined>, v$10.ObjectSchema<{
    readonly user_id: v$10.NumberSchema<undefined>;
    readonly field_ids: v$10.ArraySchema<v$10.NumberSchema<undefined>, undefined>;
    readonly cash: v$10.NumberSchema<undefined>;
  }, undefined>], undefined>, v$10.TransformAction<[{
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
  readonly contracts_sent: v$10.OptionalSchema<v$10.NumberSchema<undefined>, undefined>;
  readonly jackpot: v$10.OptionalSchema<v$10.ObjectSchema<{
    readonly superprize: v$10.NumberSchema<undefined>;
  }, undefined>, undefined>;
  readonly payment: v$10.OptionalSchema<v$10.ObjectSchema<{
    readonly to_user_id: v$10.OptionalSchema<v$10.NumberSchema<undefined>, undefined>;
    readonly amount: v$10.NumberSchema<undefined>;
  }, undefined>, undefined>;
  /** Fields on which player can move in this action. */
  readonly field_ids_move: v$10.OptionalSchema<v$10.SchemaWithPipe<readonly [v$10.ArraySchema<v$10.ObjectSchema<{
    readonly field_id: v$10.NumberSchema<undefined>;
    readonly data: v$10.UnionSchema<[v$10.ObjectSchema<{
      readonly stop: v$10.NumberSchema<undefined>;
    }, undefined>, v$10.ObjectSchema<{
      readonly field_id: v$10.NumberSchema<undefined>;
    }, undefined>], undefined>;
  }, undefined>, undefined>, v$10.TransformAction<{
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
  readonly field_ids_level_built: v$10.OptionalSchema<v$10.SchemaWithPipe<readonly [v$10.ArraySchema<v$10.NumberSchema<undefined>, undefined>, v$10.TransformAction<number[], Set<number>>]>, undefined>;
  /** Fields which player already mortgaged this turn. */
  readonly field_ids_mortgaged: v$10.OptionalSchema<v$10.SchemaWithPipe<readonly [v$10.ArraySchema<v$10.NumberSchema<undefined>, undefined>, v$10.TransformAction<number[], Set<number>>]>, undefined>;
}, undefined>;
type M1DemoPacketStatusTurn = v$10.InferOutput<typeof valiM1DemoPacketStatusTurnSchema>;
type M1DemoPacketStatusTurnActionListElement = SetElement<M1DemoPacketStatusTurn['action']['list']>;

//#endregion
//#region src/packet/status.d.ts
declare const valiM1DemoPacketStatusSchema: v$9.ObjectSchema<{
  /** Round number. */
  readonly round: v$9.NumberSchema<undefined>;
  /** Players. */
  readonly players: v$9.SchemaWithPipe<readonly [v$9.ArraySchema<v$9.SchemaWithPipe<readonly [v$9.ObjectSchema<{
    readonly user_id: v$9.NumberSchema<undefined>;
    readonly status: v$9.NumberSchema<undefined>;
    readonly position: v$9.NumberSchema<undefined>;
    readonly cash: v$9.NumberSchema<undefined>;
    readonly score: v$9.NumberSchema<undefined>;
    readonly jail: v$9.OptionalSchema<v$9.ObjectSchema<{
      readonly roll_double_attempts: v$9.NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly loan: v$9.UnionSchema<[v$9.StrictObjectSchema<{
      readonly taken: v$9.SchemaWithPipe<readonly [v$9.LiteralSchema<0, undefined>, v$9.TransformAction<0, false>]>;
      readonly unlock_round: v$9.NumberSchema<undefined>;
    }, undefined>, v$9.StrictObjectSchema<{
      readonly taken: v$9.SchemaWithPipe<readonly [v$9.LiteralSchema<1, undefined>, v$9.TransformAction<1, true>]>;
      readonly debt: v$9.NumberSchema<undefined>;
      readonly return_round: v$9.NumberSchema<undefined>;
    }, undefined>], undefined>;
    readonly restart: v$9.OptionalSchema<v$9.ObjectSchema<{
      readonly variant: v$9.NullableSchema<v$9.ObjectSchema<{
        readonly round_from: v$9.NumberSchema<undefined>;
        readonly round_to: v$9.NumberSchema<undefined>;
        readonly count: v$9.NumberSchema<undefined>;
        readonly price: v$9.NumberSchema<undefined>;
      }, undefined>, undefined>;
    }, undefined>, undefined>;
  }, undefined>, v$9.TransformAction<{
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
  }>]>, undefined>, v$9.TransformAction<{
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
  }>>]>;
  /** Current information about fields. */
  readonly fields: v$9.SchemaWithPipe<readonly [v$9.ArraySchema<v$9.SchemaWithPipe<readonly [v$9.ObjectSchema<{
    readonly field_id: v$9.NumberSchema<undefined>;
    readonly owner_user_id: v$9.NumberSchema<undefined>;
    readonly level: v$9.NumberSchema<undefined>;
    readonly mortgage: v$9.OptionalSchema<v$9.ObjectSchema<{
      readonly round_until: v$9.OptionalSchema<v$9.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
  }, undefined>, v$9.TransformAction<{
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
  }>]>, undefined>, v$9.TransformAction<{
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
  readonly turn: v$9.ObjectSchema<{
    readonly user_id: v$9.NullableSchema<v$9.NumberSchema<undefined>, undefined>;
    readonly action: v$9.ObjectSchema<{
      readonly user_id: v$9.NullableSchema<v$9.NumberSchema<undefined>, undefined>;
      readonly list: v$9.SchemaWithPipe<readonly [v$9.ArraySchema<v$9.PicklistSchema<["auction.put", "auction.bid", "auction.reject", "bank.fee.pay", "bus.move", "contract.send", "contract.accept", "contract.reject", "jackpot.reject", "jackpot.play", "jail.release.pay", "level.build", "level.sell", "loan.take", "loan.repay", "mortgage.put", "mortgage.buyback", "mortgage.auction", "purchase", "purchase.reject", "rent.pay", "roll-dices", "triple.move", "wormhole.use", "wormhole.open", "wormhole.jump", "wormhole.reject", "restart"], undefined>, undefined>, v$9.TransformAction<("restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump")[], Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">>]>;
    }, undefined>;
    readonly move_reversed: v$9.SchemaWithPipe<readonly [v$9.OptionalSchema<v$9.PicklistSchema<[0, 1], undefined>, 0 | 1>, v$9.TransformAction<0 | 1, boolean>]>;
    readonly auction: v$9.OptionalSchema<v$9.ObjectSchema<{
      readonly field_id: v$9.NumberSchema<undefined>;
      readonly bid: v$9.NumberSchema<undefined>;
      readonly user_ids_rejected: v$9.SchemaWithPipe<readonly [v$9.ArraySchema<v$9.NumberSchema<undefined>, undefined>, v$9.TransformAction<number[], Set<number>>]>;
    }, undefined>, undefined>;
    readonly contract: v$9.OptionalSchema<v$9.SchemaWithPipe<readonly [v$9.TupleSchema<[v$9.ObjectSchema<{
      readonly user_id: v$9.NumberSchema<undefined>;
      readonly field_ids: v$9.ArraySchema<v$9.NumberSchema<undefined>, undefined>;
      readonly cash: v$9.NumberSchema<undefined>;
    }, undefined>, v$9.ObjectSchema<{
      readonly user_id: v$9.NumberSchema<undefined>;
      readonly field_ids: v$9.ArraySchema<v$9.NumberSchema<undefined>, undefined>;
      readonly cash: v$9.NumberSchema<undefined>;
    }, undefined>], undefined>, v$9.TransformAction<[{
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
    readonly contracts_sent: v$9.OptionalSchema<v$9.NumberSchema<undefined>, undefined>;
    readonly jackpot: v$9.OptionalSchema<v$9.ObjectSchema<{
      readonly superprize: v$9.NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly payment: v$9.OptionalSchema<v$9.ObjectSchema<{
      readonly to_user_id: v$9.OptionalSchema<v$9.NumberSchema<undefined>, undefined>;
      readonly amount: v$9.NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly field_ids_move: v$9.OptionalSchema<v$9.SchemaWithPipe<readonly [v$9.ArraySchema<v$9.ObjectSchema<{
      readonly field_id: v$9.NumberSchema<undefined>;
      readonly data: v$9.UnionSchema<[v$9.ObjectSchema<{
        readonly stop: v$9.NumberSchema<undefined>;
      }, undefined>, v$9.ObjectSchema<{
        readonly field_id: v$9.NumberSchema<undefined>;
      }, undefined>], undefined>;
    }, undefined>, undefined>, v$9.TransformAction<{
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
    readonly field_ids_level_built: v$9.OptionalSchema<v$9.SchemaWithPipe<readonly [v$9.ArraySchema<v$9.NumberSchema<undefined>, undefined>, v$9.TransformAction<number[], Set<number>>]>, undefined>;
    readonly field_ids_mortgaged: v$9.OptionalSchema<v$9.SchemaWithPipe<readonly [v$9.ArraySchema<v$9.NumberSchema<undefined>, undefined>, v$9.TransformAction<number[], Set<number>>]>, undefined>;
  }, undefined>;
  /**
   * Info about timer.
   *
   * If match set up with no timers, this object is not defined.
   */
  readonly timer: v$9.OptionalSchema<v$9.UnionSchema<[v$9.ObjectSchema<{
    /** Unix timestamp when timer for an action expires, in **milliseconds**. */
    readonly ts_expires: v$9.NumberSchema<undefined>;
    /** If timer is extra timer. */
    readonly is_extra: v$9.BooleanSchema<undefined>;
  }, undefined>, v$9.ObjectSchema<{
    /** When match paused, time left in **milliseconds**. */
    readonly expires_in: v$9.NumberSchema<undefined>;
    /** If timer is extra timer. */
    readonly is_extra: v$9.BooleanSchema<undefined>;
  }, undefined>], undefined>, undefined>;
}, undefined>;
type M1DemoPacketStatus = v$9.InferOutput<typeof valiM1DemoPacketStatusSchema>;
declare const action_list_mapping: {
  readonly toAuction: "auction.put";
  readonly auctionAccept: "auction.bid";
  readonly auctionDecline: "auction.reject";
  readonly payToBank: "bank.fee.pay";
  readonly chooseBusStop: "bus.move";
  readonly contract: "contract.send";
  readonly contract_accept: "contract.accept";
  readonly contract_decline: "contract.reject";
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
  readonly buy: "purchase";
  readonly noBuy: "purchase.reject";
  readonly payRent: "rent.pay";
  readonly rollDices: "roll-dices";
  readonly chooseFieldToMove: "triple.move";
  readonly wormholeUse: "wormhole.use";
  readonly wormholeOpen: "wormhole.open";
  readonly wormholeJump: "wormhole.jump";
  readonly wormholeDecline: "wormhole.reject";
  readonly restart: "restart";
};
declare const extra_actions_mapping: readonly [readonly ["leave", "leave"], readonly ["message", "message"], readonly ["pause.set", "pause"], readonly ["pause.end", "pauseRemove"]];
declare const packetv1_action_mapping: Record<M1DemoPacketStatusTurnActionListElement | (typeof extra_actions_mapping)[number][0], keyof typeof action_list_mapping | (typeof extra_actions_mapping)[number][1]>;

//#endregion
//#region src/packet/setup/config/chance.d.ts
declare const valiM1DemoPacketSetupConfigMechanicsChanceSchema: v$8.StrictObjectSchema<{
  readonly cards: v$8.ArraySchema<v$8.UnionSchema<[v$8.StrictObjectSchema<{
    readonly type: v$8.LiteralSchema<"income", undefined>;
    readonly text_id: v$8.NumberSchema<undefined>;
    readonly range: v$8.StrictObjectSchema<{
      readonly min: v$8.NumberSchema<undefined>;
      readonly max: v$8.NumberSchema<undefined>;
      readonly step: v$8.NumberSchema<undefined>;
    }, undefined>;
  }, undefined>, v$8.StrictObjectSchema<{
    readonly type: v$8.LiteralSchema<"expense", undefined>;
    readonly text_id: v$8.NumberSchema<undefined>;
    readonly range: v$8.StrictObjectSchema<{
      readonly min: v$8.NumberSchema<undefined>;
      readonly max: v$8.NumberSchema<undefined>;
      readonly step: v$8.NumberSchema<undefined>;
    }, undefined>;
  }, undefined>, v$8.StrictObjectSchema<{
    readonly type: v$8.LiteralSchema<"repair", undefined>;
    readonly text_id: v$8.NumberSchema<undefined>;
    readonly cost: v$8.StrictObjectSchema<{
      readonly small: v$8.NumberSchema<undefined>;
      readonly big: v$8.NumberSchema<undefined>;
    }, undefined>;
  }, undefined>, v$8.StrictObjectSchema<{
    readonly type: v$8.LiteralSchema<"go-to-jail", undefined>;
    readonly text_id: v$8.NumberSchema<undefined>;
  }, undefined>, v$8.StrictObjectSchema<{
    readonly type: v$8.LiteralSchema<"teleport", undefined>;
    readonly text_id: v$8.NumberSchema<undefined>;
  }, undefined>, v$8.StrictObjectSchema<{
    readonly type: v$8.LiteralSchema<"skip-move", undefined>;
    readonly text_id: v$8.NumberSchema<undefined>;
  }, undefined>, v$8.StrictObjectSchema<{
    readonly type: v$8.LiteralSchema<"insurance", undefined>;
    readonly text_id: v$8.NumberSchema<undefined>;
    readonly price: v$8.NumberSchema<undefined>;
  }, undefined>, v$8.StrictObjectSchema<{
    readonly type: v$8.LiteralSchema<"birthday", undefined>;
    readonly text_id: v$8.NumberSchema<undefined>;
    readonly amount: v$8.NumberSchema<undefined>;
  }, undefined>, v$8.StrictObjectSchema<{
    readonly type: v$8.LiteralSchema<"reverse", undefined>;
    readonly text_id: v$8.NumberSchema<undefined>;
  }, undefined>, v$8.StrictObjectSchema<{
    readonly type: v$8.LiteralSchema<"disaster", undefined>;
    readonly text_id: v$8.NumberSchema<undefined>;
  }, undefined>], undefined>, undefined>;
}, undefined>;
type M1DemoPacketSetupConfigChanceCard = v$8.InferOutput<typeof valiM1DemoPacketSetupConfigMechanicsChanceSchema>['cards'][0];
type M1DemoPacketSetupConfigChanceCardType = M1DemoPacketSetupConfigChanceCard['type'];

//#endregion
//#region src/packet/setup/config/fields.d.ts
declare const valiM1DemoPacketSetupConfigFieldsSchema: v$7.SchemaWithPipe<readonly [v$7.ArraySchema<v$7.UnionSchema<[v$7.ObjectSchema<{
  readonly is_corner: v$7.SchemaWithPipe<readonly [v$7.LiteralSchema<1, undefined>, v$7.TransformAction<1, true>]>;
  readonly type: v$7.PicklistSchema<["start", "jail"], undefined>;
}, undefined>, v$7.ObjectSchema<{
  readonly is_corner: v$7.SchemaWithPipe<readonly [v$7.OptionalSchema<v$7.PicklistSchema<[0, 1], undefined>, 0 | 1>, v$7.TransformAction<0 | 1, boolean>]>;
  readonly type: v$7.PicklistSchema<["chance", "jackpot", "jail.goto", "tax.income", "tax.luxury", "wormhole"], undefined>;
}, undefined>, v$7.ObjectSchema<{
  readonly is_corner: v$7.SchemaWithPipe<readonly [v$7.UndefinedSchema<undefined>, v$7.TransformAction<undefined, false>]>;
  readonly type: v$7.LiteralSchema<"company", undefined>;
  readonly monopoly_id: v$7.NumberSchema<undefined>;
  readonly is_last: v$7.SchemaWithPipe<readonly [v$7.OptionalSchema<v$7.PicklistSchema<[0, 1], undefined>, 0 | 1>, v$7.TransformAction<0 | 1, boolean>]>;
}, undefined>], undefined>, undefined>, v$7.TransformAction<({
  is_corner: true;
  type: "start" | "jail";
} | {
  is_corner: boolean;
  type: "chance" | "jackpot" | "jail.goto" | "tax.income" | "tax.luxury" | "wormhole";
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
  type: "chance" | "jackpot" | "jail.goto" | "tax.income" | "tax.luxury" | "wormhole";
} | {
  item_proto_id: number;
  is_corner: false;
  type: "company";
  monopoly_id: number;
  is_last: boolean;
})[]>]>;
type M1DemoPacketSetupConfigField = v$7.InferOutput<typeof valiM1DemoPacketSetupConfigFieldsSchema>[0];

//#endregion
//#region src/packet/setup/config/monopolies.d.ts
declare const valiM1DemoPacketSetupConfigMonopoliesSchema: v$6.SchemaWithPipe<readonly [v$6.RecordSchema<v$6.StringSchema<undefined>, v$6.UnionSchema<[v$6.ObjectSchema<{
  readonly buy_price: v$6.NumberSchema<undefined>;
  readonly rent_by_level: v$6.ArraySchema<v$6.NumberSchema<undefined>, undefined>;
  readonly level_cost: v$6.NumberSchema<undefined>;
  readonly last_field: v$6.OptionalSchema<v$6.ObjectSchema<{
    readonly buy_price: v$6.NumberSchema<undefined>;
    readonly rent_by_level: v$6.ArraySchema<v$6.NumberSchema<undefined>, undefined>;
  }, undefined>, undefined>;
}, undefined>, v$6.ObjectSchema<{
  readonly buy_price: v$6.NumberSchema<undefined>;
  readonly rent_by_count: v$6.ArraySchema<v$6.NumberSchema<undefined>, undefined>;
}, undefined>, v$6.ObjectSchema<{
  readonly buy_price: v$6.NumberSchema<undefined>;
  readonly dice_multipliers: v$6.ArraySchema<v$6.NumberSchema<undefined>, undefined>;
}, undefined>], undefined>, undefined>, v$6.TransformAction<{
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
}>>]>;
type M1DemoPacketSetupConfigMonopoly = MapElement<v$6.InferOutput<typeof valiM1DemoPacketSetupConfigMonopoliesSchema>>;

//#endregion
//#region src/packet/setup/config.d.ts
declare const valiM1DemoPacketSetupConfigSchema: v$5.ObjectSchema<{
  /** Version of the config. */
  readonly version: v$5.NumberSchema<undefined>;
  readonly board_size: v$5.TupleSchema<[v$5.NumberSchema<undefined>, v$5.NumberSchema<undefined>], undefined>;
  readonly timers: v$5.ObjectSchema<{
    readonly roll_dices: v$5.NumberSchema<undefined>;
  }, undefined>;
  readonly fields: v$5.SchemaWithPipe<readonly [v$5.ArraySchema<v$5.UnionSchema<[v$5.ObjectSchema<{
    readonly is_corner: v$5.SchemaWithPipe<readonly [v$5.LiteralSchema<1, undefined>, v$5.TransformAction<1, true>]>;
    readonly type: v$5.PicklistSchema<["start", "jail"], undefined>;
  }, undefined>, v$5.ObjectSchema<{
    readonly is_corner: v$5.SchemaWithPipe<readonly [v$5.OptionalSchema<v$5.PicklistSchema<[0, 1], undefined>, 0 | 1>, v$5.TransformAction<0 | 1, boolean>]>;
    readonly type: v$5.PicklistSchema<["chance", "jackpot", "jail.goto", "tax.income", "tax.luxury", "wormhole"], undefined>;
  }, undefined>, v$5.ObjectSchema<{
    readonly is_corner: v$5.SchemaWithPipe<readonly [v$5.UndefinedSchema<undefined>, v$5.TransformAction<undefined, false>]>;
    readonly type: v$5.LiteralSchema<"company", undefined>;
    readonly monopoly_id: v$5.NumberSchema<undefined>;
    readonly is_last: v$5.SchemaWithPipe<readonly [v$5.OptionalSchema<v$5.PicklistSchema<[0, 1], undefined>, 0 | 1>, v$5.TransformAction<0 | 1, boolean>]>;
  }, undefined>], undefined>, undefined>, v$5.TransformAction<({
    is_corner: true;
    type: "start" | "jail";
  } | {
    is_corner: boolean;
    type: "chance" | "jackpot" | "jail.goto" | "tax.income" | "tax.luxury" | "wormhole";
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
    type: "chance" | "jackpot" | "jail.goto" | "tax.income" | "tax.luxury" | "wormhole";
  } | {
    item_proto_id: number;
    is_corner: false;
    type: "company";
    monopoly_id: number;
    is_last: boolean;
  })[]>]>;
  readonly monopolies: v$5.SchemaWithPipe<readonly [v$5.RecordSchema<v$5.StringSchema<undefined>, v$5.UnionSchema<[v$5.ObjectSchema<{
    readonly buy_price: v$5.NumberSchema<undefined>;
    readonly rent_by_level: v$5.ArraySchema<v$5.NumberSchema<undefined>, undefined>;
    readonly level_cost: v$5.NumberSchema<undefined>;
    readonly last_field: v$5.OptionalSchema<v$5.ObjectSchema<{
      readonly buy_price: v$5.NumberSchema<undefined>;
      readonly rent_by_level: v$5.ArraySchema<v$5.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
  }, undefined>, v$5.ObjectSchema<{
    readonly buy_price: v$5.NumberSchema<undefined>;
    readonly rent_by_count: v$5.ArraySchema<v$5.NumberSchema<undefined>, undefined>;
  }, undefined>, v$5.ObjectSchema<{
    readonly buy_price: v$5.NumberSchema<undefined>;
    readonly dice_multipliers: v$5.ArraySchema<v$5.NumberSchema<undefined>, undefined>;
  }, undefined>], undefined>, undefined>, v$5.TransformAction<{
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
  }>>]>;
  readonly mechanics: v$5.ObjectSchema<{
    readonly auction: v$5.OptionalSchema<v$5.ObjectSchema<{
      readonly bid_increment: v$5.NumberSchema<undefined>;
    }, undefined>, undefined>;
    readonly chance: v$5.OptionalSchema<v$5.StrictObjectSchema<{
      readonly cards: v$5.ArraySchema<v$5.UnionSchema<[v$5.StrictObjectSchema<{
        readonly type: v$5.LiteralSchema<"income", undefined>;
        readonly text_id: v$5.NumberSchema<undefined>;
        readonly range: v$5.StrictObjectSchema<{
          readonly min: v$5.NumberSchema<undefined>;
          readonly max: v$5.NumberSchema<undefined>;
          readonly step: v$5.NumberSchema<undefined>;
        }, undefined>;
      }, undefined>, v$5.StrictObjectSchema<{
        readonly type: v$5.LiteralSchema<"expense", undefined>;
        readonly text_id: v$5.NumberSchema<undefined>;
        readonly range: v$5.StrictObjectSchema<{
          readonly min: v$5.NumberSchema<undefined>;
          readonly max: v$5.NumberSchema<undefined>;
          readonly step: v$5.NumberSchema<undefined>;
        }, undefined>;
      }, undefined>, v$5.StrictObjectSchema<{
        readonly type: v$5.LiteralSchema<"repair", undefined>;
        readonly text_id: v$5.NumberSchema<undefined>;
        readonly cost: v$5.StrictObjectSchema<{
          readonly small: v$5.NumberSchema<undefined>;
          readonly big: v$5.NumberSchema<undefined>;
        }, undefined>;
      }, undefined>, v$5.StrictObjectSchema<{
        readonly type: v$5.LiteralSchema<"go-to-jail", undefined>;
        readonly text_id: v$5.NumberSchema<undefined>;
      }, undefined>, v$5.StrictObjectSchema<{
        readonly type: v$5.LiteralSchema<"teleport", undefined>;
        readonly text_id: v$5.NumberSchema<undefined>;
      }, undefined>, v$5.StrictObjectSchema<{
        readonly type: v$5.LiteralSchema<"skip-move", undefined>;
        readonly text_id: v$5.NumberSchema<undefined>;
      }, undefined>, v$5.StrictObjectSchema<{
        readonly type: v$5.LiteralSchema<"insurance", undefined>;
        readonly text_id: v$5.NumberSchema<undefined>;
        readonly price: v$5.NumberSchema<undefined>;
      }, undefined>, v$5.StrictObjectSchema<{
        readonly type: v$5.LiteralSchema<"birthday", undefined>;
        readonly text_id: v$5.NumberSchema<undefined>;
        readonly amount: v$5.NumberSchema<undefined>;
      }, undefined>, v$5.StrictObjectSchema<{
        readonly type: v$5.LiteralSchema<"reverse", undefined>;
        readonly text_id: v$5.NumberSchema<undefined>;
      }, undefined>, v$5.StrictObjectSchema<{
        readonly type: v$5.LiteralSchema<"disaster", undefined>;
        readonly text_id: v$5.NumberSchema<undefined>;
      }, undefined>], undefined>, undefined>;
    }, undefined>, undefined>;
    readonly field_level: v$5.OptionalSchema<v$5.ObjectSchema<{
      /** Price multiplier when selling a level (house) on the field, applies to the level buy price. */
      readonly sell_multiplier: v$5.OptionalSchema<v$5.NumberSchema<undefined>, 1>;
      /** When true, player can build uneven levels on the field. */
      readonly build_uneven: v$5.SchemaWithPipe<readonly [v$5.OptionalSchema<v$5.PicklistSchema<[0, 1], undefined>, 0 | 1>, v$5.TransformAction<0 | 1, boolean>]>;
      /** When true, player can build levels on the field without owning the whole monopoly. */
      readonly build_without_monopoly: v$5.SchemaWithPipe<readonly [v$5.OptionalSchema<v$5.PicklistSchema<[0, 1], undefined>, 0 | 1>, v$5.TransformAction<0 | 1, boolean>]>;
    }, undefined>, undefined>;
    readonly jackpot: v$5.OptionalSchema<v$5.ObjectSchema<{
      readonly bet: v$5.NumberSchema<undefined>;
      readonly multipliers: v$5.ArraySchema<v$5.NumberSchema<undefined>, undefined>;
      readonly superprize: v$5.ObjectSchema<{
        readonly chance: v$5.NumberSchema<undefined>;
      }, undefined>;
    }, undefined>, undefined>;
    readonly jail: v$5.ObjectSchema<{
      readonly release_fee: v$5.NumberSchema<undefined>;
      readonly double_roll_attempt_limit: v$5.OptionalSchema<v$5.NumberSchema<undefined>, 3>;
    }, undefined>;
    readonly loan: v$5.OptionalSchema<v$5.ObjectSchema<{
      /** Loan amount. */
      readonly amount: v$5.NumberSchema<undefined>;
      /** Interest rate in total. */
      readonly repay_multiplier: v$5.NumberSchema<undefined>;
      /** Number of rounds to pay back the loan. */
      readonly duration: v$5.NumberSchema<undefined>;
      readonly cooldown: v$5.ObjectSchema<{
        /** On what round can player take a loan. */
        readonly match_start: v$5.NumberSchema<undefined>;
        /** How many rounds player should wait before taking another loan after repaying the previous one. */
        readonly repay: v$5.NumberSchema<undefined>;
      }, undefined>;
    }, undefined>, undefined>;
    readonly mortgage: v$5.OptionalSchema<v$5.ObjectSchema<{
      /** Limits mortgage duration in rounds. After this rounds, player will lose the field. */
      readonly duration: v$5.OptionalSchema<v$5.NumberSchema<undefined>, undefined>;
      /** Price multiplier when mortgaging the field, applies to the field buy price. */
      readonly multiplier: v$5.NumberSchema<undefined>;
      /** Price multiplier when buying back the field, applies to the mortgage price. */
      readonly buyback_multiplier: v$5.NumberSchema<undefined>;
      /** Price multiplier when auctioning the mortgaged field, applies to company price minus mortgage price. */
      readonly auction_multiplier: v$5.OptionalSchema<v$5.NumberSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly restart: v$5.OptionalSchema<v$5.ObjectSchema<{
      readonly variants: v$5.ArraySchema<v$5.ObjectSchema<{
        readonly round_from: v$5.NumberSchema<undefined>;
        readonly round_to: v$5.NumberSchema<undefined>;
        readonly count: v$5.NumberSchema<undefined>;
        readonly price: v$5.NumberSchema<undefined>;
      }, undefined>, undefined>;
    }, undefined>, undefined>;
    readonly start: v$5.ObjectSchema<{
      readonly income_amount: v$5.NumberSchema<undefined>;
      readonly bonus_amount: v$5.OptionalSchema<v$5.NumberSchema<undefined>, 0>;
    }, undefined>;
    /** Rules of the match that are based on the match time. */
    readonly time_rules: v$5.ArraySchema<v$5.UnionSchema<[v$5.ObjectSchema<{
      readonly type: v$5.LiteralSchema<"start.none", undefined>;
      /** Match time in **milliseconds**. */
      readonly time: v$5.NumberSchema<undefined>;
    }, undefined>, v$5.ObjectSchema<{
      readonly type: v$5.LiteralSchema<"start.tax", undefined>;
      /** Match time in **milliseconds**. */
      readonly time: v$5.NumberSchema<undefined>;
      /** Sum player should pay when passing "Start". If `0`, player just will not receive money for passing "Start". */
      readonly sum: v$5.NumberSchema<undefined>;
    }, undefined>, v$5.ObjectSchema<{
      readonly type: v$5.LiteralSchema<"rent.tax", undefined>;
      /** Match time in **milliseconds**. */
      readonly time: v$5.NumberSchema<undefined>;
      /** Income tax rate. */
      readonly rate: v$5.NumberSchema<undefined>;
    }, undefined>], undefined>, undefined>;
    readonly wormhole: v$5.OptionalSchema<v$5.ObjectSchema<{
      readonly exits_free_count: v$5.OptionalSchema<v$5.NumberSchema<undefined>, 3>;
      readonly exits_extra_price: v$5.NumberSchema<undefined>;
      readonly move_direct: v$5.SchemaWithPipe<readonly [v$5.OptionalSchema<v$5.PicklistSchema<[0, 1], undefined>, 0 | 1>, v$5.TransformAction<0 | 1, boolean>]>;
    }, undefined>, undefined>;
  }, undefined>;
}, undefined>;
type M1DemoPacketSetupConfig = v$5.InferOutput<typeof valiM1DemoPacketSetupConfigSchema>;

//#endregion
//#region src/packet/setup/player.d.ts
declare const valiM1DemoPacketSetupPlayerSchema: v$4.SchemaWithPipe<readonly [v$4.ObjectSchema<{
  readonly user_id: v$4.NumberSchema<undefined>;
  readonly is_vip: v$4.SchemaWithPipe<readonly [v$4.OptionalSchema<v$4.PicklistSchema<[0, 1], undefined>, 0 | 1>, v$4.TransformAction<0 | 1, boolean>]>;
  readonly is_loan_available: v$4.SchemaWithPipe<readonly [v$4.OptionalSchema<v$4.PicklistSchema<[0, 1], undefined>, 0 | 1>, v$4.TransformAction<0 | 1, boolean>]>;
  readonly equipment: v$4.ObjectSchema<{
    readonly cards: v$4.SchemaWithPipe<readonly [v$4.ArraySchema<v$4.ObjectSchema<{
      readonly field_id: v$4.NumberSchema<undefined>;
      readonly item_proto_id: v$4.NumberSchema<undefined>;
      readonly item_id: v$4.OptionalSchema<v$4.NumberSchema<undefined>, undefined>;
      readonly rent_multiplier: v$4.NumberSchema<undefined>;
    }, undefined>, undefined>, v$4.TransformAction<{
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
    readonly generator: v$4.OptionalSchema<v$4.ObjectSchema<{
      readonly item_proto_id: v$4.NumberSchema<undefined>;
      readonly variant_id: v$4.OptionalSchema<v$4.NumberSchema<undefined>, undefined>;
      readonly seed: v$4.OptionalSchema<v$4.StringSchema<undefined>, undefined>;
    }, undefined>, undefined>;
    readonly joke: v$4.OptionalSchema<v$4.ObjectSchema<{
      readonly item_proto_id: v$4.NumberSchema<undefined>;
    }, undefined>, undefined>;
  }, undefined>;
}, undefined>, v$4.TransformAction<{
  user_id: number;
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
type M1DemoPacketSetupPlayer = v$4.InferOutput<typeof valiM1DemoPacketSetupPlayerSchema>;
type M1DemoPacketSetupPlayerEquippedCard = MapElement<M1DemoPacketSetupPlayer['equipment']['cards']>;
type M1DemoPacketSetupPlayerEquippedGenerator = Exclude<M1DemoPacketSetupPlayer['equipment']['generator'], undefined>;
type M1DemoPacketSetupPlayerEquippedJoke = Exclude<M1DemoPacketSetupPlayer['equipment']['joke'], undefined>;

//#endregion
//#region src/packet/setup.d.ts
declare const valiM1DemoPacketSetupSchema: v$3.ObjectSchema<{
  /** Constants that define basic rules of the match. */
  readonly config: v$3.ObjectSchema<{
    readonly version: v$3.NumberSchema<undefined>;
    readonly board_size: v$3.TupleSchema<[v$3.NumberSchema<undefined>, v$3.NumberSchema<undefined>], undefined>;
    readonly timers: v$3.ObjectSchema<{
      readonly roll_dices: v$3.NumberSchema<undefined>;
    }, undefined>;
    readonly fields: v$3.SchemaWithPipe<readonly [v$3.ArraySchema<v$3.UnionSchema<[v$3.ObjectSchema<{
      readonly is_corner: v$3.SchemaWithPipe<readonly [v$3.LiteralSchema<1, undefined>, v$3.TransformAction<1, true>]>;
      readonly type: v$3.PicklistSchema<["start", "jail"], undefined>;
    }, undefined>, v$3.ObjectSchema<{
      readonly is_corner: v$3.SchemaWithPipe<readonly [v$3.OptionalSchema<v$3.PicklistSchema<[0, 1], undefined>, 0 | 1>, v$3.TransformAction<0 | 1, boolean>]>;
      readonly type: v$3.PicklistSchema<["chance", "jackpot", "jail.goto", "tax.income", "tax.luxury", "wormhole"], undefined>;
    }, undefined>, v$3.ObjectSchema<{
      readonly is_corner: v$3.SchemaWithPipe<readonly [v$3.UndefinedSchema<undefined>, v$3.TransformAction<undefined, false>]>;
      readonly type: v$3.LiteralSchema<"company", undefined>;
      readonly monopoly_id: v$3.NumberSchema<undefined>;
      readonly is_last: v$3.SchemaWithPipe<readonly [v$3.OptionalSchema<v$3.PicklistSchema<[0, 1], undefined>, 0 | 1>, v$3.TransformAction<0 | 1, boolean>]>;
    }, undefined>], undefined>, undefined>, v$3.TransformAction<({
      is_corner: true;
      type: "start" | "jail";
    } | {
      is_corner: boolean;
      type: "chance" | "jackpot" | "jail.goto" | "tax.income" | "tax.luxury" | "wormhole";
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
      type: "chance" | "jackpot" | "jail.goto" | "tax.income" | "tax.luxury" | "wormhole";
    } | {
      item_proto_id: number;
      is_corner: false;
      type: "company";
      monopoly_id: number;
      is_last: boolean;
    })[]>]>;
    readonly monopolies: v$3.SchemaWithPipe<readonly [v$3.RecordSchema<v$3.StringSchema<undefined>, v$3.UnionSchema<[v$3.ObjectSchema<{
      readonly buy_price: v$3.NumberSchema<undefined>;
      readonly rent_by_level: v$3.ArraySchema<v$3.NumberSchema<undefined>, undefined>;
      readonly level_cost: v$3.NumberSchema<undefined>;
      readonly last_field: v$3.OptionalSchema<v$3.ObjectSchema<{
        readonly buy_price: v$3.NumberSchema<undefined>;
        readonly rent_by_level: v$3.ArraySchema<v$3.NumberSchema<undefined>, undefined>;
      }, undefined>, undefined>;
    }, undefined>, v$3.ObjectSchema<{
      readonly buy_price: v$3.NumberSchema<undefined>;
      readonly rent_by_count: v$3.ArraySchema<v$3.NumberSchema<undefined>, undefined>;
    }, undefined>, v$3.ObjectSchema<{
      readonly buy_price: v$3.NumberSchema<undefined>;
      readonly dice_multipliers: v$3.ArraySchema<v$3.NumberSchema<undefined>, undefined>;
    }, undefined>], undefined>, undefined>, v$3.TransformAction<{
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
    }>>]>;
    readonly mechanics: v$3.ObjectSchema<{
      readonly auction: v$3.OptionalSchema<v$3.ObjectSchema<{
        readonly bid_increment: v$3.NumberSchema<undefined>;
      }, undefined>, undefined>;
      readonly chance: v$3.OptionalSchema<v$3.StrictObjectSchema<{
        readonly cards: v$3.ArraySchema<v$3.UnionSchema<[v$3.StrictObjectSchema<{
          readonly type: v$3.LiteralSchema<"income", undefined>;
          readonly text_id: v$3.NumberSchema<undefined>;
          readonly range: v$3.StrictObjectSchema<{
            readonly min: v$3.NumberSchema<undefined>;
            readonly max: v$3.NumberSchema<undefined>;
            readonly step: v$3.NumberSchema<undefined>;
          }, undefined>;
        }, undefined>, v$3.StrictObjectSchema<{
          readonly type: v$3.LiteralSchema<"expense", undefined>;
          readonly text_id: v$3.NumberSchema<undefined>;
          readonly range: v$3.StrictObjectSchema<{
            readonly min: v$3.NumberSchema<undefined>;
            readonly max: v$3.NumberSchema<undefined>;
            readonly step: v$3.NumberSchema<undefined>;
          }, undefined>;
        }, undefined>, v$3.StrictObjectSchema<{
          readonly type: v$3.LiteralSchema<"repair", undefined>;
          readonly text_id: v$3.NumberSchema<undefined>;
          readonly cost: v$3.StrictObjectSchema<{
            readonly small: v$3.NumberSchema<undefined>;
            readonly big: v$3.NumberSchema<undefined>;
          }, undefined>;
        }, undefined>, v$3.StrictObjectSchema<{
          readonly type: v$3.LiteralSchema<"go-to-jail", undefined>;
          readonly text_id: v$3.NumberSchema<undefined>;
        }, undefined>, v$3.StrictObjectSchema<{
          readonly type: v$3.LiteralSchema<"teleport", undefined>;
          readonly text_id: v$3.NumberSchema<undefined>;
        }, undefined>, v$3.StrictObjectSchema<{
          readonly type: v$3.LiteralSchema<"skip-move", undefined>;
          readonly text_id: v$3.NumberSchema<undefined>;
        }, undefined>, v$3.StrictObjectSchema<{
          readonly type: v$3.LiteralSchema<"insurance", undefined>;
          readonly text_id: v$3.NumberSchema<undefined>;
          readonly price: v$3.NumberSchema<undefined>;
        }, undefined>, v$3.StrictObjectSchema<{
          readonly type: v$3.LiteralSchema<"birthday", undefined>;
          readonly text_id: v$3.NumberSchema<undefined>;
          readonly amount: v$3.NumberSchema<undefined>;
        }, undefined>, v$3.StrictObjectSchema<{
          readonly type: v$3.LiteralSchema<"reverse", undefined>;
          readonly text_id: v$3.NumberSchema<undefined>;
        }, undefined>, v$3.StrictObjectSchema<{
          readonly type: v$3.LiteralSchema<"disaster", undefined>;
          readonly text_id: v$3.NumberSchema<undefined>;
        }, undefined>], undefined>, undefined>;
      }, undefined>, undefined>;
      readonly field_level: v$3.OptionalSchema<v$3.ObjectSchema<{
        readonly sell_multiplier: v$3.OptionalSchema<v$3.NumberSchema<undefined>, 1>;
        readonly build_uneven: v$3.SchemaWithPipe<readonly [v$3.OptionalSchema<v$3.PicklistSchema<[0, 1], undefined>, 0 | 1>, v$3.TransformAction<0 | 1, boolean>]>;
        readonly build_without_monopoly: v$3.SchemaWithPipe<readonly [v$3.OptionalSchema<v$3.PicklistSchema<[0, 1], undefined>, 0 | 1>, v$3.TransformAction<0 | 1, boolean>]>;
      }, undefined>, undefined>;
      readonly jackpot: v$3.OptionalSchema<v$3.ObjectSchema<{
        readonly bet: v$3.NumberSchema<undefined>;
        readonly multipliers: v$3.ArraySchema<v$3.NumberSchema<undefined>, undefined>;
        readonly superprize: v$3.ObjectSchema<{
          readonly chance: v$3.NumberSchema<undefined>;
        }, undefined>;
      }, undefined>, undefined>;
      readonly jail: v$3.ObjectSchema<{
        readonly release_fee: v$3.NumberSchema<undefined>;
        readonly double_roll_attempt_limit: v$3.OptionalSchema<v$3.NumberSchema<undefined>, 3>;
      }, undefined>;
      readonly loan: v$3.OptionalSchema<v$3.ObjectSchema<{
        readonly amount: v$3.NumberSchema<undefined>;
        readonly repay_multiplier: v$3.NumberSchema<undefined>;
        readonly duration: v$3.NumberSchema<undefined>;
        readonly cooldown: v$3.ObjectSchema<{
          readonly match_start: v$3.NumberSchema<undefined>;
          readonly repay: v$3.NumberSchema<undefined>;
        }, undefined>;
      }, undefined>, undefined>;
      readonly mortgage: v$3.OptionalSchema<v$3.ObjectSchema<{
        readonly duration: v$3.OptionalSchema<v$3.NumberSchema<undefined>, undefined>;
        readonly multiplier: v$3.NumberSchema<undefined>;
        readonly buyback_multiplier: v$3.NumberSchema<undefined>;
        readonly auction_multiplier: v$3.OptionalSchema<v$3.NumberSchema<undefined>, undefined>;
      }, undefined>, undefined>;
      readonly restart: v$3.OptionalSchema<v$3.ObjectSchema<{
        readonly variants: v$3.ArraySchema<v$3.ObjectSchema<{
          readonly round_from: v$3.NumberSchema<undefined>;
          readonly round_to: v$3.NumberSchema<undefined>;
          readonly count: v$3.NumberSchema<undefined>;
          readonly price: v$3.NumberSchema<undefined>;
        }, undefined>, undefined>;
      }, undefined>, undefined>;
      readonly start: v$3.ObjectSchema<{
        readonly income_amount: v$3.NumberSchema<undefined>;
        readonly bonus_amount: v$3.OptionalSchema<v$3.NumberSchema<undefined>, 0>;
      }, undefined>;
      readonly time_rules: v$3.ArraySchema<v$3.UnionSchema<[v$3.ObjectSchema<{
        readonly type: v$3.LiteralSchema<"start.none", undefined>;
        readonly time: v$3.NumberSchema<undefined>;
      }, undefined>, v$3.ObjectSchema<{
        readonly type: v$3.LiteralSchema<"start.tax", undefined>;
        readonly time: v$3.NumberSchema<undefined>;
        readonly sum: v$3.NumberSchema<undefined>;
      }, undefined>, v$3.ObjectSchema<{
        readonly type: v$3.LiteralSchema<"rent.tax", undefined>;
        readonly time: v$3.NumberSchema<undefined>;
        readonly rate: v$3.NumberSchema<undefined>;
      }, undefined>], undefined>, undefined>;
      readonly wormhole: v$3.OptionalSchema<v$3.ObjectSchema<{
        readonly exits_free_count: v$3.OptionalSchema<v$3.NumberSchema<undefined>, 3>;
        readonly exits_extra_price: v$3.NumberSchema<undefined>;
        readonly move_direct: v$3.SchemaWithPipe<readonly [v$3.OptionalSchema<v$3.PicklistSchema<[0, 1], undefined>, 0 | 1>, v$3.TransformAction<0 | 1, boolean>]>;
      }, undefined>, undefined>;
    }, undefined>;
  }, undefined>;
  readonly flags: v$3.ObjectSchema<{
    readonly game_mode: v$3.NumberSchema<undefined>;
    readonly game_submode: v$3.NumberSchema<undefined>;
    readonly game_2x2: v$3.SchemaWithPipe<readonly [v$3.OptionalSchema<v$3.PicklistSchema<[0, 1], undefined>, 0 | 1>, v$3.TransformAction<0 | 1, boolean>]>;
  }, undefined>;
  readonly players: v$3.SchemaWithPipe<readonly [v$3.ArraySchema<v$3.SchemaWithPipe<readonly [v$3.ObjectSchema<{
    readonly user_id: v$3.NumberSchema<undefined>;
    readonly is_vip: v$3.SchemaWithPipe<readonly [v$3.OptionalSchema<v$3.PicklistSchema<[0, 1], undefined>, 0 | 1>, v$3.TransformAction<0 | 1, boolean>]>;
    readonly is_loan_available: v$3.SchemaWithPipe<readonly [v$3.OptionalSchema<v$3.PicklistSchema<[0, 1], undefined>, 0 | 1>, v$3.TransformAction<0 | 1, boolean>]>;
    readonly equipment: v$3.ObjectSchema<{
      readonly cards: v$3.SchemaWithPipe<readonly [v$3.ArraySchema<v$3.ObjectSchema<{
        readonly field_id: v$3.NumberSchema<undefined>;
        readonly item_proto_id: v$3.NumberSchema<undefined>;
        readonly item_id: v$3.OptionalSchema<v$3.NumberSchema<undefined>, undefined>;
        readonly rent_multiplier: v$3.NumberSchema<undefined>;
      }, undefined>, undefined>, v$3.TransformAction<{
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
      readonly generator: v$3.OptionalSchema<v$3.ObjectSchema<{
        readonly item_proto_id: v$3.NumberSchema<undefined>;
        readonly variant_id: v$3.OptionalSchema<v$3.NumberSchema<undefined>, undefined>;
        readonly seed: v$3.OptionalSchema<v$3.StringSchema<undefined>, undefined>;
      }, undefined>, undefined>;
      readonly joke: v$3.OptionalSchema<v$3.ObjectSchema<{
        readonly item_proto_id: v$3.NumberSchema<undefined>;
      }, undefined>, undefined>;
    }, undefined>;
  }, undefined>, v$3.TransformAction<{
    user_id: number;
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
  }>]>, undefined>, v$3.TransformAction<{
    index: number;
    user_id: number;
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
type M1DemoPacketSetup = v$3.InferOutput<typeof valiM1DemoPacketSetupSchema>;

//#endregion
//#region src/packet/status/fields.d.ts
declare const valiM1DemoPacketStatusFieldsSchema: v$2.SchemaWithPipe<readonly [v$2.ArraySchema<v$2.SchemaWithPipe<readonly [v$2.ObjectSchema<{
  readonly field_id: v$2.NumberSchema<undefined>;
  readonly owner_user_id: v$2.NumberSchema<undefined>;
  readonly level: v$2.NumberSchema<undefined>;
  readonly mortgage: v$2.OptionalSchema<v$2.ObjectSchema<{
    readonly round_until: v$2.OptionalSchema<v$2.NumberSchema<undefined>, undefined>;
  }, undefined>, undefined>;
}, undefined>, v$2.TransformAction<{
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
}>]>, undefined>, v$2.TransformAction<{
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
type M1DemoPacketStatusField = MapElement<v$2.InferOutput<typeof valiM1DemoPacketStatusFieldsSchema>>;

//#endregion
//#region src/packet/status/player.d.ts
declare const valiM1DemoPacketStatusPlayersSchema: v$1.SchemaWithPipe<readonly [v$1.ArraySchema<v$1.SchemaWithPipe<readonly [v$1.ObjectSchema<{
  /** User ID of the player. */
  readonly user_id: v$1.NumberSchema<undefined>;
  /**
   * Player status:
   * - `0`: players is active;
   * - `-1`: player is eliminated.
   */
  readonly status: v$1.NumberSchema<undefined>;
  /** Player's position on the board. */
  readonly position: v$1.NumberSchema<undefined>;
  /** Player's cash. */
  readonly cash: v$1.NumberSchema<undefined>;
  /** Player's score: how much rent they have collected. */
  readonly score: v$1.NumberSchema<undefined>;
  /** Player's jail status */
  readonly jail: v$1.OptionalSchema<v$1.ObjectSchema<{
    readonly roll_double_attempts: v$1.NumberSchema<undefined>;
  }, undefined>, undefined>;
  readonly loan: v$1.UnionSchema<[v$1.StrictObjectSchema<{
    readonly taken: v$1.SchemaWithPipe<readonly [v$1.LiteralSchema<0, undefined>, v$1.TransformAction<0, false>]>;
    readonly unlock_round: v$1.NumberSchema<undefined>;
  }, undefined>, v$1.StrictObjectSchema<{
    readonly taken: v$1.SchemaWithPipe<readonly [v$1.LiteralSchema<1, undefined>, v$1.TransformAction<1, true>]>;
    readonly debt: v$1.NumberSchema<undefined>;
    readonly return_round: v$1.NumberSchema<undefined>;
  }, undefined>], undefined>;
  readonly restart: v$1.OptionalSchema<v$1.ObjectSchema<{
    readonly variant: v$1.NullableSchema<v$1.ObjectSchema<{
      readonly round_from: v$1.NumberSchema<undefined>;
      readonly round_to: v$1.NumberSchema<undefined>;
      readonly count: v$1.NumberSchema<undefined>;
      readonly price: v$1.NumberSchema<undefined>;
    }, undefined>, undefined>;
  }, undefined>, undefined>;
}, undefined>, v$1.TransformAction<{
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
}>]>, undefined>, v$1.TransformAction<{
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
}>>]>;
type M1DemoPacketStatusPlayer = MapElement<v$1.InferOutput<typeof valiM1DemoPacketStatusPlayersSchema>>;

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
          type: "chance" | "jackpot" | "jail.goto" | "tax.income" | "tax.luxury" | "wormhole";
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
            build_without_monopoly: boolean;
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
          } | undefined;
          restart?: {
            variants: {
              round_from: number;
              round_to: number;
              count: number;
              price: number;
            }[];
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
      };
      players: Map<number, {
        index: number;
        user_id: number;
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
          list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
      field_id: number;
      amount: number;
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
      type: "roll-dices.jail.success";
      user_id: number;
    } | {
      id: string;
      type: "roll-dices.jail.fail";
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
        };
      };
    } | {
      id: string;
      type: "rent.pay.complete";
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
              list: Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "jackpot.play" | "jackpot.reject" | "jail.release.pay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "purchase" | "purchase.reject" | "rent.pay" | "roll-dices" | "triple.move" | "wormhole.open" | "wormhole.reject" | "mortgage.auction" | "wormhole.use" | "wormhole.jump">;
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
}>; //#endregion
export { ExtractM1DemoPacketEvent, M1DemoContract, M1DemoPacket, M1DemoPacketEvent, M1DemoPacketSetup, M1DemoPacketSetupConfig, M1DemoPacketSetupConfigChanceCardType, M1DemoPacketSetupConfigField, M1DemoPacketSetupConfigMonopoly, M1DemoPacketSetupPlayerEquippedCard, M1DemoPacketSetupPlayerEquippedGenerator, M1DemoPacketSetupPlayerEquippedJoke, M1DemoPacketStatus, M1DemoPacketStatusField, M1DemoPacketStatusPlayer, M1DemoPacketStatusTurn, M1DemoPacketTime, M1LiveDemo, packetv1_action_mapping };