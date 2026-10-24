import * as v from 'valibot';
import { bit } from '../utils/valibot.js';
import { m1DemoPacketSetupConfigSchema } from './setup/config.js';
import { m1DemoPacketSetupPlayerSchema } from './setup/player.js';

export const m1DemoPacketSetupSchema = v.object({
	/** Constants that define basic rules of the match. */
	config: m1DemoPacketSetupConfigSchema,
	flags: v.object({
		game_mode: v.number(),
		game_submode: v.number(),
		game_2x2: bit(false),
		title: v.optional(v.string()),
	}),
	players: v.pipe(
		v.array(m1DemoPacketSetupPlayerSchema),
		v.transform((value) => {
			const value_map = new Map<number, (typeof value)[number]>();

			for (const [index, player] of value.entries()) {
				player.index = index;

				value_map.set(player.user_id, player);
			}

			return value_map;
		}),
	),
});

export type M1DemoPacketSetup = v.InferOutput<typeof m1DemoPacketSetupSchema>;
