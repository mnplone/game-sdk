import * as v from 'valibot';
import type { MapElement } from '../../../utils/types.js';

export const valiM1DemoPacketSetupConfigMonopoliesSchema = v.pipe(
	v.record(
		v.string(),
		v.union([
			// general monopolies — buy them, build houses
			v.object({
				buy_price: v.number(),
				rent_by_level: v.array(v.number()),
				level_cost: v.number(),
				last_field: v.optional(
					v.object({
						buy_price: v.number(),
						rent_by_level: v.array(v.number()),
					}),
				),
			}),
			// "railroads" — buy them and rent will increase for each field owned
			v.object({
				buy_price: v.number(),
				rent_by_count: v.array(v.number()),
			}),
			// "utilities" — buy them and increase multiplier for each field owned (multiplier is applied to dice roll)
			v.object({
				buy_price: v.number(),
				dice_multipliers: v.array(v.number()),
			}),
		]),
	),
	v.transform(
		(value) =>
			new Map(
				Object.entries(value).map(([monopoly_id, monopoly]) => [
					Number(monopoly_id),
					monopoly,
				]),
			),
	),
);

export type M1DemoPacketSetupConfigMonopoly = MapElement<
	v.InferOutput<typeof valiM1DemoPacketSetupConfigMonopoliesSchema>
>;

// -------------------------------------------------
// --------------- TRANSFORM FROM V1 ---------------
// -------------------------------------------------

export const valiM1DemoPacketV1ConfigGroupsSchema = v.pipe(
	v.record(
		v.string(),
		v.union([
			// general monopolies — buy them, build houses
			v.object({
				buy: v.number(),
				levels: v.array(v.number()),
				buy_last: v.optional(v.number()),
				levels_last: v.optional(v.array(v.number())),
				levelUpCost: v.number(),
			}),
			// "railroads" — buy them and rent will increase for each field owned
			v.object({
				buy: v.number(),
				levels: v.array(v.number()),
				levelUpCost: v.literal(false),
			}),
			// "utilities" — buy them and increase multiplier for each field owned (multiplier is applied to dice roll)
			v.object({
				buy: v.number(),
				levels: v.literal(false),
				coeffs: v.array(v.number()),
				levelUpCost: v.literal(false),
			}),
		]),
	),
	v.transform(
		(value) =>
			new Map(
				Object.entries(value).map(([monopoly_id_string, group]) => {
					let monopoly;

					// utilities
					if ('coeffs' in group) {
						monopoly = {
							buy_price: group.buy,
							dice_multipliers: [0, ...group.coeffs],
						};
					}
					// railroads
					else if (group.levelUpCost === false) {
						monopoly = {
							buy_price: group.buy,
							rent_by_count: [0, ...group.levels],
						};
					} else {
						monopoly = {
							buy_price: group.buy,
							rent_by_level: group.levels,
							level_cost: group.levelUpCost,
							last_field: group.buy_last
								? {
										buy_price: group.buy_last!,
										rent_by_level: group.levels_last!,
									}
								: undefined,
						};
					}

					return [Number.parseInt(monopoly_id_string, 10), monopoly];
				}),
			),
	),
);
