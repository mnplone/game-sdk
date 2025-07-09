import * as v from 'valibot';

export const valiM1DemoPacketTimeSchema = v.pipe(
	v.object({
		/** Unix timestamp of the start of the game in **milliseconds**. */
		ts_start: v.number(),
		/** Unix timestamp of the packet in **milliseconds**. */
		ts_now: v.number(),
		/** Total length of all pauses in the game excluding one that is currently active in **milliseconds**. */
		inactive: v.number(),
		/** Unix timestamp of the start of the current pause in **milliseconds**. */
		ts_inactive: v.optional(v.number()),
	}),
	v.transform((value) => {
		return {
			...value,
			/** Difference between server's and browser's time in **milliseconds**. */
			delta: Date.now() - value.ts_now,
		};
	}),
);

export type M1DemoPacketTime = v.InferOutput<typeof valiM1DemoPacketTimeSchema>;

// -------------------------------------------------
// --------------- TRANSFORM FROM V1 ---------------
// -------------------------------------------------

export const valiM1DemoPacketV1TimeSchema = v.union([
	// new format
	v.object({
		time: valiM1DemoPacketTimeSchema,
	}),
	// new format with stupid mistake — status can be omitted sometimes so packet has no time at all.
	v.pipe(
		v.object({
			status: v.optional(
				v.object({
					time: valiM1DemoPacketTimeSchema,
				}),
			),
		}),
		v.transform((value) => {
			if (!value.status) {
				// oxlint-disable-next-line no-console
				console.error('There is no time in the packet.', value);
				throw new Error('There is no time in the packet.');
			}

			return {
				time: value.status.time,
			};
		}),
	),
	// old format — what a mess!
	v.pipe(
		v.object({
			current_time: v.number(),
			game_started: v.optional(v.number()),
			ts_start: v.optional(v.number()),
			status: v.optional(
				v.object({
					pause_data: v.optional(
						v.object({
							total_time: v.number(),
							is_active: v.boolean(),
							pause_started_at: v.optional(v.number()),
						}),
					),
				}),
			),
		}),
		v.transform((value) => {
			const ts_now = value.current_time * 1e3;

			const ts_start = value.ts_start ?? value.game_started;
			if (!ts_start) {
				throw new Error(
					'No timestamp of the start of the game found in packet.',
				);
			}

			const packet_time: M1DemoPacketTime = {
				ts_start: ts_start * 1e3,
				ts_now,
				inactive: 0,
				delta: Date.now() - ts_now,
			};

			if (value.status) {
				const { pause_data } = value.status;
				if (pause_data) {
					packet_time.inactive = pause_data.total_time * 1e3;

					if (
						pause_data.is_active &&
						typeof pause_data.pause_started_at === 'number'
					) {
						packet_time.ts_inactive = pause_data.pause_started_at * 1e3;
					}
				}
			}

			return {
				time: packet_time,
			};
		}),
	),
]);
