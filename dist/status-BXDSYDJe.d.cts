import * as v from "valibot";

//#region src/utils/types.d.ts
type MapElement<T> = T extends Map<infer _, infer V> ? V : never;
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
  readonly turn: v.ObjectSchema<{
    readonly user_id: v.NullableSchema<v.NumberSchema<undefined>, undefined>;
    readonly action: v.ObjectSchema<{
      readonly user_id: v.NullableSchema<v.NumberSchema<undefined>, undefined>;
      readonly list: v.SchemaWithPipe<readonly [v.ArraySchema<v.PicklistSchema<["auction.put", "auction.bid", "auction.reject", "bank.fee.pay", "bus.move", "contract.send", "contract.accept", "contract.reject", "contract.review.approve", "contract.review.object", "contract.fallback", "jackpot.reject", "jackpot.play", "jail.put", "jail.release.pay", "jail.stay", "level.build", "level.sell", "loan.take", "loan.repay", "mortgage.put", "mortgage.buyback", "mortgage.auction", "movement.go", "waive", "purchase", "purchase.reject", "purchase.buyout", "purchase.buyout.reject", "purchase.buyout.protect", "rent.pay", "roll-dices", "roll-dices.reroll.reject", "russian-roulette.play", "russian-roulette.reject", "start.tax.pay", "taxi.move", "wormhole.use", "wormhole.open", "wormhole.jump", "wormhole.reject", "restart", "skip"], undefined>, undefined>, v.TransformAction<("restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip")[], Set<"restart" | "auction.put" | "auction.bid" | "auction.reject" | "bank.fee.pay" | "bus.move" | "contract.send" | "contract.accept" | "contract.reject" | "contract.review.approve" | "contract.review.object" | "contract.fallback" | "jackpot.reject" | "jackpot.play" | "jail.put" | "jail.release.pay" | "jail.stay" | "level.build" | "level.sell" | "loan.take" | "loan.repay" | "mortgage.put" | "mortgage.buyback" | "mortgage.auction" | "movement.go" | "waive" | "purchase" | "purchase.reject" | "purchase.buyout" | "purchase.buyout.reject" | "purchase.buyout.protect" | "rent.pay" | "roll-dices" | "roll-dices.reroll.reject" | "russian-roulette.play" | "russian-roulette.reject" | "start.tax.pay" | "taxi.move" | "wormhole.use" | "wormhole.open" | "wormhole.jump" | "wormhole.reject" | "skip">>]>;
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
    readonly movement: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
      readonly source: v.PicklistSchema<["bus", "reverse", "taxi", "triple", "wormhole"], undefined>;
      readonly field_ids: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, v.TransformAction<{
      source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
      field_ids: number[];
    }, {
      options: Map<number, {
        field_id: number;
      } | {
        stop_id: number;
      }>;
      source: "bus" | "reverse" | "taxi" | "triple" | "wormhole";
    }>]>, undefined>;
    readonly field_ids_level_built: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number[], Set<number>>]>, undefined>;
    readonly field_ids_mortgaged: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number[], Set<number>>]>, undefined>;
  }, undefined>;
  /**
   * Info about timer.
   *
   * If match set up with no timers, this object is not defined.
   */
  readonly timer: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
    /** Unix timestamp when timer for an action expires, in **milliseconds**. */readonly ts_expires: v.NumberSchema<undefined>; /** If timer is extra timer. */
    readonly is_extra: v.BooleanSchema<undefined>;
  }, undefined>, v.ObjectSchema<{
    /** When match paused, time left in **milliseconds**. */readonly expires_in: v.NumberSchema<undefined>; /** If timer is extra timer. */
    readonly is_extra: v.BooleanSchema<undefined>;
  }, undefined>], undefined>, undefined>; /** Number of viewers. */
  readonly viewers_count: v.OptionalSchema<v.NumberSchema<undefined>, 0>;
}, undefined>;
type M1DemoPacketStatus = v.InferOutput<typeof valiM1DemoPacketStatusSchema>;
//#endregion
export { MapElement as n, M1DemoPacketStatus as t };