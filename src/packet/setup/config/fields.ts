import * as v from 'valibot';
import { bit } from '../../../utils/valibot.js';

/**
 * Creates a virtual item prototype ID for stock field.
 * @param monopoly_id - Group ID of the field.
 * @param index_in_group - Index of the field in the group.
 * @returns Virtual item prototype ID.
 */
function createStockItemProtoId(monopoly_id: number, index_in_group: number) {
	// oxlint-disable-next-line no-bitwise
	return -(0b1_0000_0000 | (monopoly_id << 3) | index_in_group);
}

export const m1DemoPacketSetupConfigFieldsSchema = v.pipe(
	v.array(
		v.union([
			// ALWAYS corners
			v.object({
				is_corner: v.pipe(
					v.literal(1),
					v.transform(() => true as const),
				),
				type: v.picklist(['start', 'jail']),
			}),
			// MAYBE corners
			v.object({
				is_corner: bit(false),
				type: v.picklist(['cash.pay', 'cash.receive']),
				range: v.tuple([v.number(), v.number()]),
				step: v.number(),
			}),
			v.object({
				is_corner: bit(false),
				type: v.picklist([
					'chance',
					'jackpot',
					'jail.goto',
					'park',
					'russian-roulette',
					'tax.income',
					'tax.luxury',
					'wormhole',
				]),
			}),
			// NEVER corners
			v.object({
				is_corner: v.pipe(
					v.optional(v.never()),
					v.transform(() => false as const),
				),
				type: v.literal('company'),
				monopoly_id: v.number(),
				is_last: bit(false),
			}),
		]),
	),
	v.transform((value) => {
		const indexes_by_group = new Map<number, number>();

		return value.map((field) => {
			if (field.type === 'company') {
				const { monopoly_id } = field;
				const index_in_group = indexes_by_group.get(monopoly_id) ?? 0;

				indexes_by_group.set(monopoly_id, index_in_group + 1);

				return {
					...field,
					item_proto_id: createStockItemProtoId(monopoly_id, index_in_group),
				};
			}

			return field;
		});
	}),
);

export type M1DemoPacketSetupConfigField = v.InferOutput<
	typeof m1DemoPacketSetupConfigFieldsSchema
>[0];

// -------------------------------------------------
// --------------- TRANSFORM FROM V1 ---------------
// -------------------------------------------------

export const m1DemoPacketV1ConfigFieldsSchema = v.pipe(
	v.array(
		v.variant('type', [
			// ALWAYS corners
			// separate types into object because typescript cannot extract types from union using if
			v.object({
				design: v.literal('corner'),
				type: v.literal('start'),
			}),
			v.object({
				design: v.literal('corner'),
				type: v.literal('jail'),
			}),
			// MAYBE corners
			v.object({
				design: v.optional(v.literal('corner')),
				type: v.literal('special'),
				action: v.picklist(['cash_minus', 'cash_plus']),
				range: v.tuple([v.number(), v.number()]),
				rangeStep: v.number(),
			}),
			v.object({
				design: v.optional(v.literal('corner')),
				type: v.literal('special'),
				action: v.picklist([
					'chance',
					'goToJail',
					'jackpot',
					'relax',
					'russianRoulette',
					'tax_income',
					'tax_luxury',
					'wormhole',
				]),
			}),
			// NEVER corners
			v.object({
				design: v.exactOptional(v.never()),
				type: v.literal('field'),
				group: v.number(),
				is_last: bit(false),
			}),
		]),
	),
	v.transform((value) => {
		const indexes_by_group = new Map<number, number>();

		return value.map((field) => {
			// ALWAYS corners
			if (field.type === 'start' || field.type === 'jail') {
				const { type } = field;

				return {
					is_corner: true,
					type,
				} as const;
			}

			// NEVER corners
			if (field.type === 'field') {
				const {
					type: _1, // extract and throw away
					design: _2, // extract and throw away
					group: monopoly_id,
					...field_rest
				} = field;

				const index_in_group = indexes_by_group.get(monopoly_id) ?? 0;

				indexes_by_group.set(monopoly_id, index_in_group + 1);

				return {
					is_corner: false,
					type: 'company',
					...field_rest,
					monopoly_id,
					item_proto_id: createStockItemProtoId(monopoly_id, index_in_group),
				} as const;
			}

			// MAYBE corners
			if (field.type === 'special') {
				const { action, design } = field;

				const is_corner = design === 'corner';
				let type_new;
				switch (action) {
					case 'cash_minus':
						return {
							is_corner,
							type: 'cash.pay' as const,
							range: field.range,
							step: field.rangeStep,
						};

					case 'cash_plus':
						return {
							is_corner,
							type: 'cash.receive' as const,
							range: field.range,
							step: field.rangeStep,
						};

					case 'goToJail':
						type_new = 'jail.goto' as const;
						break;

					case 'relax':
						type_new = 'park' as const;
						break;

					case 'russianRoulette':
						type_new = 'russian-roulette' as const;
						break;

					case 'tax_income':
						type_new = 'tax.income' as const;
						break;

					case 'tax_luxury':
						type_new = 'tax.luxury' as const;
						break;

					case 'wormhole':
						type_new = 'wormhole' as const;
						break;

					default:
						type_new = action;
				}

				return {
					is_corner,
					type: type_new,
				};
			}

			throw new Error('Should be unreachable.');
		});
	}),
);
