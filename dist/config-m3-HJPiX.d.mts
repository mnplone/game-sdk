import * as v from "valibot";

//#region src/packet/setup/config.d.ts
declare const valiM1DemoPacketSetupConfigSchema: v.ObjectSchema<{
  /** Version of the config. */readonly version: v.NumberSchema<undefined>;
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
    type: "wormhole" | "jackpot" | "cash.pay" | "cash.receive" | "chance" | "jail.goto" | "park" | "russian-roulette" | "tax.income" | "tax.luxury";
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
    type: "wormhole" | "jackpot" | "cash.pay" | "cash.receive" | "chance" | "jail.goto" | "park" | "russian-roulette" | "tax.income" | "tax.luxury";
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
      /** Premium for total cost to buy out given field, given to owner. */readonly owner_premium: v.NumberSchema<undefined>; /** Premium for total cost to buy out given field, given to bank. */
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
        /** When true, player can build uneven levels on the field. */readonly uneven: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>; /** When true, player can build levels on the field without owning the whole monopoly. */
        readonly without_monopoly: v.OptionalSchema<v.ObjectSchema<{
          readonly rent_multiplier: v.OptionalSchema<v.NumberSchema<undefined>, 1>;
        }, undefined>, undefined>;
      }, undefined>, () => {}>;
      readonly sell: v.ObjectSchema<{
        /** Price multiplier when selling a level (house) on the field, applies to the level buy price. */readonly multiplier: v.OptionalSchema<v.NumberSchema<undefined>, 1>;
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
      /** Loan amount. */readonly amount: v.NumberSchema<undefined>; /** Interest rate in total. */
      readonly repay_multiplier: v.NumberSchema<undefined>; /** Number of rounds to pay back the loan. */
      readonly duration: v.NumberSchema<undefined>;
      readonly cooldown: v.ObjectSchema<{
        /** On what round can player take a loan. */readonly match_start: v.NumberSchema<undefined>; /** How many rounds player should wait before taking another loan after repaying the previous one. */
        readonly repay: v.NumberSchema<undefined>;
      }, undefined>;
    }, undefined>, undefined>;
    readonly mortgage: v.OptionalSchema<v.UnionSchema<[v.ObjectSchema<{
      /** Limits mortgage duration in rounds. After this rounds, player will lose the field. If undefined, mortgage duration is unlimited. */readonly duration: v.OptionalSchema<v.NumberSchema<undefined>, undefined>; /** Price multiplier when mortgaging the field, applies to the company buying price. */
      readonly multiplier: v.NumberSchema<undefined>; /** Price multiplier when buying back the field, applies to the mortgage price. */
      readonly buyback_multiplier: v.NumberSchema<undefined>; /** Price multiplier when auctioning the mortgaged field, applies to the company buying price minus mortgage price. */
      readonly auction_multiplier: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    }, undefined>, v.ObjectSchema<{
      /** Price multiplier when waiving the ownership of the field, applies to the company buying price. */readonly waive_multiplier: v.NumberSchema<undefined>;
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
    }, undefined>; /** Rules of the match that are based on the match time. */
    readonly rules: v.ArraySchema<v.IntersectSchema<[v.UnionSchema<[v.ObjectSchema<{
      /** Match time in **milliseconds**. */readonly time: v.NumberSchema<undefined>;
    }, undefined>, v.ObjectSchema<{
      /** Round number when rule applies, inclusive. */readonly round: v.NumberSchema<undefined>;
    }, undefined>], undefined>, v.VariantSchema<"type", [v.ObjectSchema<{
      readonly type: v.LiteralSchema<"start.income.off", undefined>;
    }, undefined>, v.ObjectSchema<{
      readonly type: v.LiteralSchema<"start.tax", undefined>; /** Sum player should pay when passing "Start". */
      readonly sum: v.NumberSchema<undefined>;
    }, undefined>, v.ObjectSchema<{
      readonly type: v.LiteralSchema<"cashflow.tax", undefined>; /** Income tax rate. */
      readonly rate: v.NumberSchema<undefined>;
    }, undefined>], undefined>], undefined>, undefined>;
    readonly wormhole: v.OptionalSchema<v.ObjectSchema<{
      readonly exits_free_count: v.OptionalSchema<v.NumberSchema<undefined>, 3>;
      readonly exits_extra_price: v.NumberSchema<undefined>;
      readonly move_direct: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
    }, undefined>, undefined>;
  }, undefined>;
}, undefined>;
type M1DemoPacketSetupConfig = v.InferOutput<typeof valiM1DemoPacketSetupConfigSchema>;
type M1DemoPacketSetupConfigMechanics = M1DemoPacketSetupConfig['mechanics'];
type M1DemoPacketSetupConfigMechanicsRules = M1DemoPacketSetupConfigMechanics['rules'];
declare const valiM1DemoPacketV1ConfigSchema: v.SchemaWithPipe<readonly [v.ObjectSchema<{
  readonly version: v.NumberSchema<undefined>;
  readonly size: v.TupleSchema<[v.NumberSchema<undefined>, v.NumberSchema<undefined>], undefined>;
  readonly fields: v.SchemaWithPipe<readonly [v.ArraySchema<v.VariantSchema<"type", [v.ObjectSchema<{
    readonly design: v.LiteralSchema<"corner", undefined>;
    readonly type: v.LiteralSchema<"start", undefined>;
  }, undefined>, v.ObjectSchema<{
    readonly design: v.LiteralSchema<"corner", undefined>;
    readonly type: v.LiteralSchema<"jail", undefined>;
  }, undefined>, v.ObjectSchema<{
    readonly design: v.OptionalSchema<v.LiteralSchema<"corner", undefined>, undefined>;
    readonly type: v.LiteralSchema<"special", undefined>;
    readonly action: v.PicklistSchema<["cash_minus", "cash_plus", "chance", "goToJail", "jackpot", "relax", "russianRoulette", "tax_income", "tax_luxury", "wormhole"], undefined>;
  }, undefined>, v.ObjectSchema<{
    readonly design: v.ExactOptionalSchema<v.NeverSchema<undefined>, undefined>;
    readonly type: v.LiteralSchema<"field", undefined>;
    readonly group: v.NumberSchema<undefined>;
    readonly is_last: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  }, undefined>], undefined>, undefined>, v.TransformAction<({
    design: "corner";
    type: "start";
  } | {
    design: "corner";
    type: "jail";
  } | {
    design?: "corner" | undefined;
    type: "special";
    action: "wormhole" | "jackpot" | "goToJail" | "chance" | "cash_minus" | "cash_plus" | "relax" | "russianRoulette" | "tax_income" | "tax_luxury";
  } | {
    design?: undefined;
    type: "field";
    group: number;
    is_last: boolean;
  })[], ({
    readonly is_corner: true;
    readonly type: "jail" | "start";
  } | {
    readonly monopoly_id: number;
    readonly item_proto_id: number;
    readonly is_last: boolean;
    readonly is_corner: false;
    readonly type: "company";
  } | {
    readonly is_corner: boolean;
    readonly type: "wormhole" | "jackpot" | "cash.pay" | "cash.receive" | "chance" | "jail.goto" | "park" | "russian-roulette" | "tax.income" | "tax.luxury";
  })[]>]>;
  readonly groups: v.SchemaWithPipe<readonly [v.RecordSchema<v.StringSchema<undefined>, v.UnionSchema<[v.ObjectSchema<{
    readonly buy: v.NumberSchema<undefined>;
    readonly levels: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    readonly buy_last: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
    readonly levels_last: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
    readonly levelUpCost: v.NumberSchema<undefined>;
  }, undefined>, v.ObjectSchema<{
    readonly buy: v.NumberSchema<undefined>;
    readonly levels: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    readonly levelUpCost: v.LiteralSchema<false, undefined>;
  }, undefined>, v.ObjectSchema<{
    readonly buy: v.NumberSchema<undefined>;
    readonly levels: v.LiteralSchema<false, undefined>;
    readonly coeffs: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    readonly levelUpCost: v.LiteralSchema<false, undefined>;
  }, undefined>, v.ObjectSchema<{
    readonly buy: v.NumberSchema<undefined>;
    readonly levels: v.LiteralSchema<false, undefined>;
    readonly rent_grow: v.ObjectSchema<{
      readonly by_round: v.NumberSchema<undefined>;
      readonly max: v.NumberSchema<undefined>;
    }, undefined>;
    readonly levelUpCost: v.LiteralSchema<false, undefined>;
  }, undefined>], undefined>, undefined>, v.TransformAction<{
    [x: string]: {
      buy: number;
      levels: number[];
      buy_last?: number | undefined;
      levels_last?: number[] | undefined;
      levelUpCost: number;
    } | {
      buy: number;
      levels: number[];
      levelUpCost: false;
    } | {
      buy: number;
      levels: false;
      coeffs: number[];
      levelUpCost: false;
    } | {
      buy: number;
      levels: false;
      rent_grow: {
        by_round: number;
        max: number;
      };
      levelUpCost: false;
    };
  }, Map<number, {
    buy_price: number;
    rent_grow: {
      by_round: number;
      max: number;
    };
    dice_multipliers?: undefined;
    rent_by_count?: undefined;
    rent_by_level?: undefined;
    level_cost?: undefined;
    last_field?: undefined;
  } | {
    buy_price: number;
    dice_multipliers: number[];
    rent_grow?: undefined;
    rent_by_count?: undefined;
    rent_by_level?: undefined;
    level_cost?: undefined;
    last_field?: undefined;
  } | {
    buy_price: number;
    rent_by_count: number[];
    rent_grow?: undefined;
    dice_multipliers?: undefined;
    rent_by_level?: undefined;
    level_cost?: undefined;
    last_field?: undefined;
  } | {
    buy_price: number;
    rent_by_level: number[];
    level_cost: number;
    last_field: {
      buy_price: number;
      rent_by_level: number[];
    } | undefined;
    rent_grow?: undefined;
    dice_multipliers?: undefined;
    rent_by_count?: undefined;
  }>>]>;
  readonly TIME_FOR_ROLL_DICES: v.NumberSchema<undefined>;
  readonly AUCTION_BET_STEP: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly buyout_premium: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly buyout_premium_bank: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly chance_cards: v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.UnionSchema<[v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"cash_in", undefined>;
    readonly text: v.StringSchema<undefined>;
    readonly range: v.TupleSchema<[v.NumberSchema<undefined>, v.NumberSchema<undefined>], undefined>;
    readonly rangeStep: v.NumberSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"cash_out", undefined>;
    readonly text: v.StringSchema<undefined>;
    readonly range: v.TupleSchema<[v.NumberSchema<undefined>, v.NumberSchema<undefined>], undefined>;
    readonly rangeStep: v.NumberSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"repair", undefined>;
    readonly text: v.StringSchema<undefined>;
    readonly costs: v.TupleSchema<[v.NumberSchema<undefined>, v.NumberSchema<undefined>], undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"jail", undefined>;
    readonly text: v.StringSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"go_to_start", undefined>;
    readonly text: v.StringSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"teleport", undefined>;
    readonly text: v.StringSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"move_one", undefined>;
    readonly text: v.StringSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"move_skip", undefined>;
    readonly text: v.StringSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"move_undo", undefined>;
    readonly text: v.StringSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"insurance", undefined>;
    readonly text: v.StringSchema<undefined>;
    readonly sum: v.NumberSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"birthday", undefined>;
    readonly text: v.StringSchema<undefined>;
    readonly sum: v.NumberSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"reverse", undefined>;
    readonly text: v.StringSchema<undefined>;
  }, undefined>, v.StrictObjectSchema<{
    readonly type: v.LiteralSchema<"fields_disaster", undefined>;
    readonly text: v.StringSchema<undefined>;
  }, undefined>], undefined>, undefined>, v.TransformAction<({
    type: "cash_in";
    text: string;
    range: [number, number];
    rangeStep: number;
  } | {
    type: "cash_out";
    text: string;
    range: [number, number];
    rangeStep: number;
  } | {
    type: "repair";
    text: string;
    costs: [number, number];
  } | {
    type: "jail";
    text: string;
  } | {
    type: "go_to_start";
    text: string;
  } | {
    type: "teleport";
    text: string;
  } | {
    type: "move_one";
    text: string;
  } | {
    type: "move_skip";
    text: string;
  } | {
    type: "move_undo";
    text: string;
  } | {
    type: "insurance";
    text: string;
    sum: number;
  } | {
    type: "birthday";
    text: string;
    sum: number;
  } | {
    type: "reverse";
    text: string;
  } | {
    type: "fields_disaster";
    text: string;
  })[], ({
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
    type: "goto.jail";
    text_id: number;
  } | {
    type: "goto.start";
    text_id: number;
  } | {
    type: "teleport";
    text_id: number;
  } | {
    type: "move.one";
    text_id: number;
  } | {
    type: "move.skip";
    text_id: number;
  } | {
    type: "move.undo";
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
  })[]>]>, undefined>;
  readonly charges: v.OptionalSchema<v.ObjectSchema<{
    readonly default: v.NumberSchema<undefined>;
    readonly limit: v.NumberSchema<undefined>;
    readonly features: v.RecordSchema<v.StringSchema<undefined>, v.ObjectSchema<{
      readonly charges: v.NumberSchema<undefined>;
      readonly no_cap: v.OptionalSchema<v.BooleanSchema<undefined>, false>;
    }, undefined>, undefined>;
  }, undefined>, undefined>;
  readonly coeff_level_down: v.OptionalSchema<v.NumberSchema<undefined>, 1>;
  readonly UNEVEN_LEVEL_CHANGE: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  readonly LEVEL_CHANGE_NO_MNPL: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  readonly coeff_level_no_mnpl: v.OptionalSchema<v.NumberSchema<undefined>, 1>;
  readonly JACKPOT_BET: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly JACKPOT_COEFFS: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
  readonly JACKPOT_SUPERPRIZE_CHANCE: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly income_tax_v: v.OptionalSchema<v.PicklistSchema<[1, 2], undefined>, 1>;
  readonly income_tax_rate: v.OptionalSchema<v.NumberSchema<undefined>, 0.1>;
  readonly income_tax_jail: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
  readonly income_tax_jail_base_reduction: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly jailFee: v.NumberSchema<undefined>;
  readonly UNJAIL_TRIES_LIMIT: v.OptionalSchema<v.NumberSchema<undefined>, 3>;
  readonly goToJailFine: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly jailed_rent_multiplier: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly CREDIT_SUM: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly CREDIT_INTEREST: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly CREDIT_PERCENT: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly CREDIT_ROUNDS: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly CREDIT_COOLDOWN_ROUNDS: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly START_CREDIT_COOLDOWN_ROUNDS: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly MORTGAGE_ROUND_LIMIT: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly coeff_mortgage: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly coeff_unmortgage: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly auction_mortgaged: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly coeff_field_drop: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
  readonly restart_variants: v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
    readonly round_from: v.NumberSchema<undefined>;
    readonly round_to: v.NumberSchema<undefined>;
    readonly count: v.NumberSchema<undefined>;
    readonly price: v.NumberSchema<undefined>;
  }, undefined>, undefined>, undefined>;
  readonly russian_roulette_rewards: v.OptionalSchema<v.ArraySchema<v.NumberSchema<undefined>, undefined>, undefined>;
  readonly roundCash: v.NumberSchema<undefined>;
  readonly START_BONUS_SUM: v.OptionalSchema<v.NumberSchema<undefined>, 0>;
  readonly roundTaxes: v.OptionalSchema<v.ArraySchema<v.IntersectSchema<[v.UnionSchema<[v.ObjectSchema<{
    readonly game_time: v.NumberSchema<undefined>;
  }, undefined>, v.ObjectSchema<{
    readonly round: v.NumberSchema<undefined>;
  }, undefined>], undefined>, v.ObjectSchema<{
    readonly tax: v.NumberSchema<undefined>;
  }, undefined>], undefined>, undefined>, () => never[]>;
  readonly incomeTaxes: v.OptionalSchema<v.ArraySchema<v.IntersectSchema<[v.UnionSchema<[v.ObjectSchema<{
    readonly game_time: v.NumberSchema<undefined>;
  }, undefined>, v.ObjectSchema<{
    readonly round: v.NumberSchema<undefined>;
  }, undefined>], undefined>, v.ObjectSchema<{
    readonly tax_rate: v.NumberSchema<undefined>;
  }, undefined>], undefined>, undefined>, () => never[]>;
  readonly WORMHOLE_DIRECTLY: v.OptionalSchema<v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>, undefined>;
  readonly WORMHOLE_EXTRA_DESTINATION_COST: v.OptionalSchema<v.NumberSchema<undefined>, undefined>;
}, undefined>, v.TransformAction<{
  version: number;
  size: [number, number];
  fields: ({
    readonly is_corner: true;
    readonly type: "jail" | "start";
  } | {
    readonly monopoly_id: number;
    readonly item_proto_id: number;
    readonly is_last: boolean;
    readonly is_corner: false;
    readonly type: "company";
  } | {
    readonly is_corner: boolean;
    readonly type: "wormhole" | "jackpot" | "cash.pay" | "cash.receive" | "chance" | "jail.goto" | "park" | "russian-roulette" | "tax.income" | "tax.luxury";
  })[];
  groups: Map<number, {
    buy_price: number;
    rent_grow: {
      by_round: number;
      max: number;
    };
    dice_multipliers?: undefined;
    rent_by_count?: undefined;
    rent_by_level?: undefined;
    level_cost?: undefined;
    last_field?: undefined;
  } | {
    buy_price: number;
    dice_multipliers: number[];
    rent_grow?: undefined;
    rent_by_count?: undefined;
    rent_by_level?: undefined;
    level_cost?: undefined;
    last_field?: undefined;
  } | {
    buy_price: number;
    rent_by_count: number[];
    rent_grow?: undefined;
    dice_multipliers?: undefined;
    rent_by_level?: undefined;
    level_cost?: undefined;
    last_field?: undefined;
  } | {
    buy_price: number;
    rent_by_level: number[];
    level_cost: number;
    last_field: {
      buy_price: number;
      rent_by_level: number[];
    } | undefined;
    rent_grow?: undefined;
    dice_multipliers?: undefined;
    rent_by_count?: undefined;
  }>;
  TIME_FOR_ROLL_DICES: number;
  AUCTION_BET_STEP?: number | undefined;
  buyout_premium?: number | undefined;
  buyout_premium_bank?: number | undefined;
  chance_cards?: ({
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
    type: "goto.jail";
    text_id: number;
  } | {
    type: "goto.start";
    text_id: number;
  } | {
    type: "teleport";
    text_id: number;
  } | {
    type: "move.one";
    text_id: number;
  } | {
    type: "move.skip";
    text_id: number;
  } | {
    type: "move.undo";
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
  })[] | undefined;
  charges?: {
    default: number;
    limit: number;
    features: {
      [x: string]: {
        charges: number;
        no_cap: boolean;
      };
    };
  } | undefined;
  coeff_level_down: number;
  UNEVEN_LEVEL_CHANGE: boolean;
  LEVEL_CHANGE_NO_MNPL: boolean;
  coeff_level_no_mnpl: number;
  JACKPOT_BET?: number | undefined;
  JACKPOT_COEFFS?: number[] | undefined;
  JACKPOT_SUPERPRIZE_CHANCE?: number | undefined;
  income_tax_v: 1 | 2;
  income_tax_rate: number;
  income_tax_jail: boolean;
  income_tax_jail_base_reduction?: number | undefined;
  jailFee: number;
  UNJAIL_TRIES_LIMIT: number;
  goToJailFine?: number | undefined;
  jailed_rent_multiplier?: number | undefined;
  CREDIT_SUM?: number | undefined;
  CREDIT_INTEREST?: number | undefined;
  CREDIT_PERCENT?: number | undefined;
  CREDIT_ROUNDS?: number | undefined;
  CREDIT_COOLDOWN_ROUNDS?: number | undefined;
  START_CREDIT_COOLDOWN_ROUNDS?: number | undefined;
  MORTGAGE_ROUND_LIMIT?: number | undefined;
  coeff_mortgage?: number | undefined;
  coeff_unmortgage?: number | undefined;
  auction_mortgaged?: number | undefined;
  coeff_field_drop?: number | undefined;
  restart_variants?: {
    round_from: number;
    round_to: number;
    count: number;
    price: number;
  }[] | undefined;
  russian_roulette_rewards?: number[] | undefined;
  roundCash: number;
  START_BONUS_SUM: number;
  roundTaxes: (({
    game_time: number;
  } | {
    round: number;
  }) & {
    tax: number;
  })[];
  incomeTaxes: (({
    game_time: number;
  } | {
    round: number;
  }) & {
    tax_rate: number;
  })[];
  WORMHOLE_DIRECTLY?: boolean | undefined;
  WORMHOLE_EXTRA_DESTINATION_COST?: number | undefined;
}, {
  version: number;
  board_size: [number, number];
  timers: {
    roll_dices: number;
  };
  fields: ({
    readonly is_corner: true;
    readonly type: "jail" | "start";
  } | {
    readonly monopoly_id: number;
    readonly item_proto_id: number;
    readonly is_last: boolean;
    readonly is_corner: false;
    readonly type: "company";
  } | {
    readonly is_corner: boolean;
    readonly type: "wormhole" | "jackpot" | "cash.pay" | "cash.receive" | "chance" | "jail.goto" | "park" | "russian-roulette" | "tax.income" | "tax.luxury";
  })[];
  monopolies: Map<number, {
    buy_price: number;
    rent_grow: {
      by_round: number;
      max: number;
    };
    dice_multipliers?: undefined;
    rent_by_count?: undefined;
    rent_by_level?: undefined;
    level_cost?: undefined;
    last_field?: undefined;
  } | {
    buy_price: number;
    dice_multipliers: number[];
    rent_grow?: undefined;
    rent_by_count?: undefined;
    rent_by_level?: undefined;
    level_cost?: undefined;
    last_field?: undefined;
  } | {
    buy_price: number;
    rent_by_count: number[];
    rent_grow?: undefined;
    dice_multipliers?: undefined;
    rent_by_level?: undefined;
    level_cost?: undefined;
    last_field?: undefined;
  } | {
    buy_price: number;
    rent_by_level: number[];
    level_cost: number;
    last_field: {
      buy_price: number;
      rent_by_level: number[];
    } | undefined;
    rent_grow?: undefined;
    dice_multipliers?: undefined;
    rent_by_count?: undefined;
  }>;
  mechanics: {
    auction: {
      bid_increment: number;
    } | undefined;
    buyout: {
      owner_premium: number;
      bank_premium: number | undefined;
    } | undefined;
    chance: {
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
        type: "goto.jail";
        text_id: number;
      } | {
        type: "goto.start";
        text_id: number;
      } | {
        type: "teleport";
        text_id: number;
      } | {
        type: "move.one";
        text_id: number;
      } | {
        type: "move.skip";
        text_id: number;
      } | {
        type: "move.undo";
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
    charges: {
      default: number;
      limit: number;
      features: {
        [x: string]: {
          charges: number;
          no_cap: boolean;
        };
      };
    } | undefined;
    field_level: {
      build: {
        uneven: boolean;
        without_monopoly: {
          rent_multiplier: number;
        } | undefined;
      };
      sell: {
        multiplier: number;
      };
    };
    income_tax: {
      v: 1 | 2;
      rate: number;
      jail: {
        base_reduction: number;
      } | undefined;
    };
    jackpot: {
      bet: number;
      multipliers: number[];
      superprize: {
        chance: number;
      };
    } | undefined;
    jail: {
      release_fee: number;
      double_roll_attempt_limit: number;
      fine: number | undefined;
      rent_multiplier: number | undefined;
    };
    loan: {
      amount: number;
      repay_multiplier: number;
      duration: number;
      cooldown: {
        match_start: number;
        repay: number;
      };
    } | undefined;
    mortgage: {
      duration: number | undefined;
      multiplier: number;
      buyback_multiplier: number;
      auction_multiplier: number | undefined;
      waive_multiplier?: undefined;
    } | {
      waive_multiplier: number;
      duration?: undefined;
      multiplier?: undefined;
      buyback_multiplier?: undefined;
      auction_multiplier?: undefined;
    } | undefined;
    restart: {
      variants: {
        round_from: number;
        round_to: number;
        count: number;
        price: number;
      }[];
    } | undefined;
    russian_roulette: {
      rewards: number[];
    } | undefined;
    start: {
      income_amount: number;
      bonus_amount: number;
    };
    rules: (({
      time: number;
    } | {
      round: number;
    }) & ({
      type: "start.income.off";
    } | {
      type: "start.tax";
      sum: number;
    } | {
      type: "cashflow.tax";
      rate: number;
    }))[];
    wormhole: {
      exits_free_count: number;
      exits_extra_price: number;
      move_direct: boolean;
    } | undefined;
  };
}>]>;
//#endregion
export { valiM1DemoPacketV1ConfigSchema as a, valiM1DemoPacketSetupConfigSchema as i, M1DemoPacketSetupConfigMechanics as n, M1DemoPacketSetupConfigMechanicsRules as r, M1DemoPacketSetupConfig as t };