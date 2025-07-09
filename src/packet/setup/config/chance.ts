import {
	array,
	type InferOutput,
	literal,
	number,
	pipe,
	strictObject,
	string,
	transform,
	tuple,
	union,
} from 'valibot';
import { crc32 } from '@/utils/crc.js';

export const valiM1DemoPacketSetupConfigMechanicsChanceSchema = strictObject({
	cards: array(
		union([
			strictObject({
				type: literal('income'),
				text_id: number(),
				range: strictObject({
					min: number(),
					max: number(),
					step: number(),
				}),
			}),
			strictObject({
				type: literal('expense'),
				text_id: number(),
				range: strictObject({
					min: number(),
					max: number(),
					step: number(),
				}),
			}),
			strictObject({
				type: literal('repair'),
				text_id: number(),
				cost: strictObject({
					small: number(),
					big: number(),
				}),
			}),
			strictObject({
				type: literal('go-to-jail'),
				text_id: number(),
			}),
			strictObject({
				type: literal('teleport'),
				text_id: number(),
			}),
			strictObject({
				type: literal('skip-move'),
				text_id: number(),
			}),
			strictObject({
				type: literal('insurance'),
				text_id: number(),
				price: number(),
			}),
			strictObject({
				type: literal('birthday'),
				text_id: number(),
				amount: number(),
			}),
			strictObject({
				type: literal('reverse'),
				text_id: number(),
			}),
			strictObject({
				type: literal('disaster'),
				text_id: number(),
			}),
		]),
	),
});

export type M1DemoPacketSetupConfigChanceCard = InferOutput<
	typeof valiM1DemoPacketSetupConfigMechanicsChanceSchema
>['cards'][0];
export type M1DemoPacketSetupConfigChanceCardType =
	M1DemoPacketSetupConfigChanceCard['type'];

// -------------------------------------------------
// --------------- TRANSFORM FROM V1 ---------------
// -------------------------------------------------

export const valiM1DemoPacketV1ConfigChanceCardsSchema = pipe(
	array(
		union([
			strictObject({
				type: literal('cash_in'),
				text: string(),
				range: tuple([number(), number()]),
				rangeStep: number(),
			}),
			strictObject({
				type: literal('cash_out'),
				text: string(),
				range: tuple([number(), number()]),
				rangeStep: number(),
			}),
			strictObject({
				type: literal('repair'),
				text: string(),
				costs: tuple([number(), number()]),
			}),
			strictObject({
				type: literal('jail'),
				text: string(),
			}),
			strictObject({
				type: literal('teleport'),
				text: string(),
			}),
			strictObject({
				type: literal('move_skip'),
				text: string(),
			}),
			strictObject({
				type: literal('insurance'),
				text: string(),
				sum: number(),
			}),
			strictObject({
				type: literal('birthday'),
				text: string(),
				sum: number(),
			}),
			strictObject({
				type: literal('reverse'),
				text: string(),
			}),
			strictObject({
				type: literal('fields_disaster'),
				text: string(),
			}),
		]),
	),
	transform((value) => {
		const chance_cards_new: InferOutput<
			typeof valiM1DemoPacketSetupConfigMechanicsChanceSchema
		>['cards'] = [];

		for (const element of value) {
			switch (element.type) {
				case 'cash_in':
					chance_cards_new.push({
						type: 'income',
						text_id: crc32(element.text),
						range: {
							min: element.range[0],
							max: element.range[1],
							step: element.rangeStep,
						},
					});
					break;

				case 'cash_out':
					chance_cards_new.push({
						type: 'expense',
						text_id: crc32(element.text),
						range: {
							min: element.range[0],
							max: element.range[1],
							step: element.rangeStep,
						},
					});
					break;

				case 'repair':
					chance_cards_new.push({
						type: 'repair',
						text_id: crc32(element.text),
						cost: {
							small: element.costs[0],
							big: element.costs[1],
						},
					});
					break;

				case 'jail':
					chance_cards_new.push({
						type: 'go-to-jail',
						text_id: crc32(element.text),
					});
					break;

				case 'teleport':
				case 'reverse':
					chance_cards_new.push({
						type: element.type,
						text_id: crc32(element.text),
					});
					break;

				case 'move_skip':
					chance_cards_new.push({
						type: 'skip-move',
						text_id: crc32(element.text),
					});
					break;

				case 'insurance':
					chance_cards_new.push({
						type: 'insurance',
						text_id: crc32(element.text),
						price: element.sum,
					});
					break;

				case 'birthday':
					chance_cards_new.push({
						type: 'birthday',
						text_id: crc32(element.text),
						amount: element.sum,
					});
					break;

				case 'fields_disaster':
					chance_cards_new.push({
						type: 'disaster',
						text_id: crc32(element.text),
					});
					break;

				// no default
			}
		}

		return chance_cards_new;
	}),
);
