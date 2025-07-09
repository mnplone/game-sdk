import {
	array,
	exactOptional,
	type InferOutput,
	literal,
	never,
	number,
	object,
	optional,
	picklist,
	pipe,
	transform,
	undefined_,
	union,
	variant,
} from 'valibot';
import { bit } from '../../../utils/valibot.js';

/**
 * Creates a virtual item prototype ID for stock field.
 * @param monopoly_id - Group ID of the field.
 * @param index_in_group - Index of the field in the group.
 * @returns Virtual item prototype ID.
 */
function createStockItemProtoId(monopoly_id: number, index_in_group: number) {
	// eslint-disable-next-line no-bitwise
	return -(0b1_0000_0000 | (monopoly_id << 3) | index_in_group);
}

export const valiM1DemoPacketSetupConfigFieldsSchema = pipe(
	array(
		union([
			// ALWAYS corners
			object({
				is_corner: pipe(
					literal(1),
					transform(() => true as const),
				),
				type: picklist(['start', 'jail']),
			}),
			// MAYBE corners
			object({
				is_corner: bit(false),
				type: picklist([
					'chance',
					'jackpot',
					'jail.goto',
					'tax.income',
					'tax.luxury',
					'wormhole',
				]),
			}),
			// NEVER corners
			object({
				is_corner: pipe(
					undefined_(),
					transform(() => false as const),
				),
				type: literal('company'),
				monopoly_id: number(),
				is_last: bit(false),
			}),
		]),
	),
	transform((value) => {
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

export type M1DemoPacketSetupConfigField = InferOutput<
	typeof valiM1DemoPacketSetupConfigFieldsSchema
>[0];

// -------------------------------------------------
// --------------- TRANSFORM FROM V1 ---------------
// -------------------------------------------------

export const valiM1DemoPacketV1ConfigFieldsSchema = pipe(
	array(
		variant('type', [
			// ALWAYS corners
			// separate types into object because typescript cannot extract types from union using if
			object({
				design: literal('corner'),
				type: literal('start'),
			}),
			object({
				design: literal('corner'),
				type: literal('jail'),
			}),
			// MAYBE corners
			object({
				design: optional(literal('corner')),
				type: literal('special'),
				action: picklist([
					'chance',
					'goToJail',
					'jackpot',
					'tax_income',
					'tax_luxury',
					'wormhole',
				]),
			}),
			// NEVER corners
			object({
				design: exactOptional(never()),
				type: literal('field'),
				group: number(),
				is_last: bit(false),
			}),
		]),
		// union([
		// 	// ALWAYS corners
		// 	// separate types into object because typescript cannot extract types from union using if
		// 	object({
		// 		design: literal('corner'),
		// 		type: literal('start'),
		// 	}),
		// 	object({
		// 		design: literal('corner'),
		// 		type: literal('jail'),
		// 	}),
		// 	// MAYBE corners
		// 	object({
		// 		design: optional(literal('corner')),
		// 		type: literal('special'),
		// 		action: picklist([
		// 			'chance',
		// 			'goToJail',
		// 			'jackpot',
		// 			'tax_income',
		// 			'tax_luxury',
		// 			'wormhole',
		// 		]),
		// 	}),
		// 	// NEVER corners
		// 	object({
		// 		design: undefined_(),
		// 		type: literal('field'),
		// 		group: number(),
		// 		is_last: bit(false),
		// 	}),
		// ]),
	),
	transform((value) => {
		const indexes_by_group = new Map<number, number>();

		return value.map((field) => {
			// ALWAYS corners
			if (field.type === 'start' || field.type === 'jail') {
				const {
					type, // extract and throw away
					design: _1, // extract and throw away
					...field_rest
				} = field;

				return {
					is_corner: true,
					type,
					...field_rest,
				} as const;
			}

			// NEVER corners
			if (field.type === 'field') {
				const {
					type: _type, // extract and throw away
					design: _design, // extract and throw away
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
				const {
					type: _1, // extract and throw away
					action,
					design,
					...field_rest
				} = field;

				let type_new;
				switch (action) {
					case 'goToJail':
						type_new = 'jail.goto' as const;
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
					is_corner: design === 'corner',
					type: type_new,
					...field_rest,
				} as const;
			}

			throw new Error('Should be unreachable.');
		});
	}),
);
