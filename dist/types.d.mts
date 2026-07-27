import { t as MapElement } from "./types-CaHf4wuy.mjs";
import { t as M1DemoPacketSetupConfig } from "./config-Cd-lGJBt.mjs";
import * as v from "valibot";

//#region src/packet/events.d.ts
declare const valiM1DemoRawPacketEventsSchema: v.ArraySchema<v.UnionSchema<[...(v.ObjectSchema<{
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
  readonly type: v.LiteralSchema<"bus.select", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly move_distances: v.SchemaWithPipe<readonly [v.ArraySchema<v.NumberSchema<undefined>, undefined>, v.TransformAction<number[], Set<number>>]>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"bus.move", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly selection: v.ObjectSchema<{
    readonly stop_id: v.PicklistSchema<[0, 1, -1], undefined>;
    readonly field_id: v.NumberSchema<undefined>;
    readonly auto: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  }, undefined>;
  readonly move_reversed: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
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
  readonly type: v.LiteralSchema<"wormhole.open", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly exits_count: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"wormhole.reject", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"wormhole.move", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
  readonly move_reversed: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"movement.picker", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly movement: v.ObjectSchema<{
    readonly source: v.PicklistSchema<["bus", "reverse", "taxi", "triple", "wormhole"], undefined>;
    readonly field_ids: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
  }, undefined>;
}, undefined> | v.ObjectSchema<{
  readonly id: v.StringSchema<undefined>;
  readonly type: v.LiteralSchema<"movement.go", undefined>;
  readonly user_id: v.NumberSchema<undefined>;
  readonly field_id: v.NumberSchema<undefined>;
  readonly move_reversed: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
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
type M1DemoRawPacketEvents = v.InferOutput<typeof valiM1DemoRawPacketEventsSchema>;
type M1DemoRawPacketEvent = M1DemoRawPacketEvents[number];
type M1DemoPacketEventType = M1DemoRawPacketEvent['type'];
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
export type { M1DemoPacketEventType, M1DemoPacketSetupConfig, M1DemoPacketSetupPlayer, M1DemoPacketStatusField, M1DemoPacketStatusPlayer, M1DemoRawPacketEvent };