import {
	array,
	type InferOutput,
	number,
	object,
	optional,
	pipe,
	transform,
} from 'valibot';
import type { MapElement } from '../../utils/types.js';
import { bit } from '../../utils/valibot.js';

export const valiM1DemoPacketSetupPlayerSchema = pipe(
	object({
		user_id: number(),
		is_vip: bit(false),
		is_loan_available: bit(false),
		equipment: object({
			cards: pipe(
				array(
					object({
						field_id: number(),
						item_proto_id: number(),
						// DO NOT send item_id from the server in Packet V2.
						// it is for Packet V1 only, which does not have item_proto_id
						item_id: optional(number()),
						rent_multiplier: number(),
					}),
				),
				transform(
					(value) => new Map(value.map((card) => [card.field_id, card])),
				),
			),
		}),
	}),
	transform((value) => {
		return {
			...value,
			index: -1,
		};
	}),
);

export type M1DemoPacketSetupPlayer = InferOutput<
	typeof valiM1DemoPacketSetupPlayerSchema
>;
export type M1DemoPacketSetupPlayerEquippedCard = MapElement<
	M1DemoPacketSetupPlayer['equipment']['cards']
>;
