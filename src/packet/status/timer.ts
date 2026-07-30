import * as v from 'valibot';

export const m1DemoPacketStatusTimerSchema = v.union([
	v.object({
		/** Unix timestamp when timer for an action expires, in **milliseconds**. */
		ts_expires: v.number(),
		/** If timer is extra timer. */
		is_extra: v.boolean(),
	}),
	v.object({
		/** When match paused, time left in **milliseconds**. */
		expires_in: v.number(),
		/** If timer is extra timer. */
		is_extra: v.boolean(),
	}),
]);
export type M1DemoPacketStatusTimer = v.InferOutput<
	typeof m1DemoPacketStatusTimerSchema
>;
