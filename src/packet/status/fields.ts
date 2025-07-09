import * as v from 'valibot';
import type { MapElement } from '../../utils/types.js';

export const valiM1DemoPacketStatusFieldsSchema = v.pipe(
	v.array(
		v.pipe(
			v.object({
				field_id: v.number(),
				owner_user_id: v.number(),
				level: v.number(),
				mortgage: v.optional(
					v.object({
						round_until: v.optional(v.number()),
					}),
				),
			}),
			v.transform((value) => value),
		),
	),
	v.transform(
		(value) => new Map(value.map((field) => [field.field_id, field])),
	),
);

export type M1DemoPacketStatusField = MapElement<
	v.InferOutput<typeof valiM1DemoPacketStatusFieldsSchema>
>;

// -------------------------------------------------
// --------------- TRANSFORM FROM V1 ---------------
// -------------------------------------------------

export const valiM1DemoPacketV1StatusFieldsSchema = v.pipe(
	v.record(
		v.string(),
		v.object({
			owner: v.number(),
			level: v.number(),
			mortgaged: v.boolean(),
			mortgage_lose_round: v.optional(v.number()),
		}),
	),
	v.transform(
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
	v.InferOutput<typeof valiM1DemoPacketV1StatusFieldsSchema>
>;
