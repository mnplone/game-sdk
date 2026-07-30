import { n as valiM1DemoPacketSetupConfigSchema, r as valiM1DemoPacketV1ConfigSchema } from "./config-wc75rcDJ.mjs";
import * as v from "valibot";

//#region src/utils/valibot.d.ts
/**
 * Creates bit schema.
 * @param default_value Default value for a bit.
 */
declare function bit(default_value: boolean): v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<[0, 1], undefined>, 0 | 1>, v.TransformAction<0 | 1, boolean>]>;
//#endregion
export { bit, valiM1DemoPacketSetupConfigSchema, valiM1DemoPacketV1ConfigSchema };