import {
	array,
	type InferOutput,
	literal,
	number,
	object,
	optional,
	pipe,
	record,
	string,
	transform,
	union,
} from 'valibot';
import type { MapElement } from '../../../utils/types.js';

export const valiM1DemoPacketSetupConfigMonopoliesSchema = pipe(
	record(
		string(),
		union([
			// general monopolies — buy them, build houses
			object({
				buy_price: number(),
				rent_by_level: array(number()),
				level_cost: number(),
				last_field: optional(
					object({
						buy_price: number(),
						rent_by_level: array(number()),
					}),
				),
			}),
			// "railroads" — buy them and rent will increase for each field owned
			object({
				buy_price: number(),
				rent_by_count: array(number()),
			}),
			// "utilities" — buy them and increase multiplier for each field owned (multiplier is applied to dice roll)
			object({
				buy_price: number(),
				dice_multipliers: array(number()),
			}),
		]),
	),
	transform(
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
	InferOutput<typeof valiM1DemoPacketSetupConfigMonopoliesSchema>
>;

// -------------------------------------------------
// --------------- TRANSFORM FROM V1 ---------------
// -------------------------------------------------

export const valiM1DemoPacketV1ConfigGroupsSchema = pipe(
	record(
		string(),
		union([
			// general monopolies — buy them, build houses
			object({
				buy: number(),
				levels: array(number()),
				buy_last: optional(number()),
				levels_last: optional(array(number())),
				levelUpCost: number(),
			}),
			// "railroads" — buy them and rent will increase for each field owned
			object({
				buy: number(),
				levels: array(number()),
				levelUpCost: literal(false),
			}),
			// "utilities" — buy them and increase multiplier for each field owned (multiplier is applied to dice roll)
			object({
				buy: number(),
				levels: literal(false),
				coeffs: array(number()),
				levelUpCost: literal(false),
			}),
		]),
	),
	transform(
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

					return [Number.parseInt(monopoly_id_string), monopoly];
				}),
			),
	),
);
