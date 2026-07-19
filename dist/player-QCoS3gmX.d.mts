import * as v from "valibot";

//#region src/utils/types.d.ts
type SetElement<T> = T extends Set<infer V> ? V : never;
type MapElement<T> = T extends Map<infer _, infer V> ? V : never;
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
export { M1DemoPacketSetupPlayerEquippedGenerator as a, SetElement as c, M1DemoPacketSetupPlayerEquippedCard as i, M1DemoPacketStatusField as n, M1DemoPacketSetupPlayerEquippedJoke as o, M1DemoPacketSetupPlayer as r, MapElement as s, M1DemoPacketStatusPlayer as t };