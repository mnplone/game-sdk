import {
	array,
	boolean,
	type InferOutput,
	number,
	object,
	optional,
	pipe,
	record,
	string,
	transform,
} from 'valibot';
import type { MapElement } from '../../utils/types.js';

export const valiM1DemoPacketStatusFieldsSchema = pipe(
	array(
		pipe(
			object({
				field_id: number(),
				owner_user_id: number(),
				level: number(),
				mortgage: optional(
					object({
						round_until: optional(number()),
					}),
				),
			}),
			transform((value) => value),
		),
	),
	transform((value) => new Map(value.map((field) => [field.field_id, field]))),
);

export type M1DemoPacketStatusField = MapElement<
	InferOutput<typeof valiM1DemoPacketStatusFieldsSchema>
>;

// -------------------------------------------------
// --------------- TRANSFORM FROM V1 ---------------
// -------------------------------------------------

export const valiM1DemoPacketV1StatusFieldsSchema = pipe(
	record(
		string(),
		object({
			owner: number(),
			level: number(),
			mortgaged: boolean(),
			mortgage_lose_round: optional(number()),
		}),
	),
	transform(
		(value) =>
			new Map(
				Object.entries(value).map(([field_id_string, field]) => {
					const field_id = Number.parseInt(field_id_string);

					return [
						field_id,
						{
							field_id,
							owner_user_id: field.owner,
							level: field.level,
							mortgage: field.mortgaged
								? {
										round_until: field.mortgage_lose_round,
									}
								: undefined,
						},
					];
				}),
			),
	),
);

type _M1DemoPacketV1StatusField = MapElement<
	InferOutput<typeof valiM1DemoPacketV1StatusFieldsSchema>
>;
