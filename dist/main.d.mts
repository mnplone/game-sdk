import { n as M1DemoRichPacket, y as packet_v1_action_mapping } from "./types-DXU6LMo-.mjs";
//#region src/packet/status/turn/movement.d.ts
type M1DemoMovementOptions = {
  field_id: number;
  stop_id?: number;
}[];
//#endregion
//#region src/main.d.ts
declare class M1LiveDemo {
  #private;
  process(value: unknown): M1DemoRichPacket;
  get movement_options(): M1DemoMovementOptions | undefined;
  normalizeFieldId(field_id: number): number;
}
//#endregion
export { M1LiveDemo, packet_v1_action_mapping };