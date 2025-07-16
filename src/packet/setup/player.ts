import * as v from 'valibot';
import type { MapElement } from '../../utils/types.js';
import { bit } from '../../utils/valibot.js';

export const valiM1DemoPacketSetupPlayerSchema = v.pipe(
	v.object({
		user_id: v.number(),
		is_vip: bit(false),
		is_loan_available: bit(false),
		equipment: v.object({
			cards: v.pipe(
				v.array(
					v.object({
						field_id: v.number(),
						item_proto_id: v.number(),
						// DO NOT send item_id from the server in Packet V2.
						// it is for Packet V1 only, which does not have item_proto_id
						item_id: v.optional(v.number()),
						rent_multiplier: v.number(),
					}),
				),
				v.transform(
					(value) => new Map(value.map((card) => [card.field_id, card])),
				),
			),
			generator: v.optional(
				v.object({
					item_proto_id: v.number(),
					variant_id: v.optional(v.number()),
					seed: v.optional(v.string()),
				}),
			),
			joke: v.optional(
				v.object({
					item_proto_id: v.number(),
				}),
			),
		}),
	}),
	v.transform((value) => {
		return {
			...value,
			index: -1,
		};
	}),
);

export type M1DemoPacketSetupPlayer = v.InferOutput<
	typeof valiM1DemoPacketSetupPlayerSchema
>;
export type M1DemoPacketSetupPlayerEquippedCard = MapElement<
	M1DemoPacketSetupPlayer['equipment']['cards']
>;
