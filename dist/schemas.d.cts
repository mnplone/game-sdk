import { a as m1DemoPacketV1ConfigSchema, i as m1DemoPacketSetupConfigSchema, l as m1DemoContractSchema } from "./config-DB2PvEnb.cjs";
import * as v from "valibot";

//#region src/utils/valibot.d.ts
/**
 * Creates bit schema.
 * @param default_value Default value for a bit.
 */
declare function bit(default_value: boolean): v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
//#endregion
export { bit, m1DemoContractSchema, m1DemoPacketSetupConfigSchema, m1DemoPacketV1ConfigSchema };