import * as v from 'valibot';
import {
	valiM1DemoRawPacketEventsSchema,
	valiM1DemoRawPacketV1EventsSchema,
} from './packet/events.js';
import { valiM1DemoPacketV1ConfigSchema } from './packet/setup/config.js';
import { valiM1DemoPacketSetupSchema } from './packet/setup.js';
import {
	valiM1DemoPacketStatusSchema,
	valiM1DemoPacketV1StatusSchema,
} from './packet/status.js';
import {
	valiM1DemoPacketTimeSchema,
	valiM1DemoPacketV1TimeSchema,
} from './packet/time.js';
import { bit } from './utils/valibot.js';

export const valiM1DemoRawPacketSchema = v.object({
	/** Various information about the match which is never changes. */
	setup: v.optional(valiM1DemoPacketSetupSchema),
	/** Events happened before game went to the "status". */
	events: valiM1DemoRawPacketEventsSchema,
	/** Current status of the match. */
	status: v.optional(valiM1DemoPacketStatusSchema),
	/** Information about match time. */
	time: valiM1DemoPacketTimeSchema,
});

export type M1DemoRawPacket = v.InferOutput<typeof valiM1DemoRawPacketSchema>;

// -------------------------------------------------
// --------------- TRANSFORM FROM V1 ---------------
// -------------------------------------------------

export const valiM1DemoRawPacketV1Schema = v.intersect([
	valiM1DemoPacketV1TimeSchema,
	v.pipe(
		v.object({
			config: v.optional(valiM1DemoPacketV1ConfigSchema),
			flags: v.optional(
				v.object({
					game_mode: v.number(),
					game_submode: v.number(),
					game_2x2: bit(false),
					match_title: v.optional(v.string()),
				}),
			),
			events: valiM1DemoRawPacketV1EventsSchema,
			status: v.optional(valiM1DemoPacketV1StatusSchema),
		}),
		v.transform((value) => {
			const { config, flags, status, ...value_rest } = value;

			let status_new;
			if (status) {
				const { players, ...status_rest } = status;

				status_new = {
					players: new Map(
						players.map((player) => [
							player.user_id,
							{
								user_id: player.user_id,
								...player._status,
							},
						]),
					),
					...status_rest,
				};
			}

			let setup;
			if (config) {
				if (!status) {
					throw new Error(
						'Validation error: field "status" is required if "config" is present',
					);
				}

				if (!flags) {
					throw new Error(
						'Validation error: field "flags" is required if "config" is present',
					);
				}

				setup = {
					config,
					flags: {
						game_mode: flags.game_mode,
						game_submode: flags.game_submode,
						game_2x2: flags.game_2x2,
						title: flags.match_title,
					},
					players: new Map(
						status.players.map((player) => [
							player.user_id,
							{
								user_id: player.user_id,
								...player._setup!,
							},
						]),
					),
				};
			}

			return {
				setup,
				status: status_new,
				...value_rest,
			};
		}),
	),
]);

// [ hand type checking zone ]
type _M1DemoRawPacketV1 = v.InferOutput<typeof valiM1DemoRawPacketV1Schema>;
type _M1DemoRawPacketV1Setup = _M1DemoRawPacketV1['setup'];
type _M1DemoRawPacketV1Event = _M1DemoRawPacketV1['events'][number];
type _M1DemoRawPacketV1Status = _M1DemoRawPacketV1['status'];
type _M1DemoRawPacketV1Time = _M1DemoRawPacketV1['time'];
