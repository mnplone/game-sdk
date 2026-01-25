import * as v from 'valibot';
import { crc32 } from '@/utils/crc.js';

export const valiM1DemoPacketSetupConfigMechanicsChanceSchema = v.strictObject({
	cards: v.array(
		v.union([
			v.strictObject({
				type: v.literal('income'),
				text_id: v.number(),
				range: v.strictObject({
					min: v.number(),
					max: v.number(),
					step: v.number(),
				}),
			}),
			v.strictObject({
				type: v.literal('expense'),
				text_id: v.number(),
				range: v.strictObject({
					min: v.number(),
					max: v.number(),
					step: v.number(),
				}),
			}),
			v.strictObject({
				type: v.literal('repair'),
				text_id: v.number(),
				cost: v.strictObject({
					small: v.number(),
					big: v.number(),
				}),
			}),
			v.strictObject({
				type: v.literal('go-to-jail'),
				text_id: v.number(),
			}),
			v.strictObject({
				type: v.literal('go-to-start'),
				text_id: v.number(),
			}),
			v.strictObject({
				type: v.literal('teleport'),
				text_id: v.number(),
			}),
			v.strictObject({
				type: v.literal('skip-move'),
				text_id: v.number(),
			}),
			v.strictObject({
				type: v.literal('insurance'),
				text_id: v.number(),
				price: v.number(),
			}),
			v.strictObject({
				type: v.literal('birthday'),
				text_id: v.number(),
				amount: v.number(),
			}),
			v.strictObject({
				type: v.literal('reverse'),
				text_id: v.number(),
			}),
			v.strictObject({
				type: v.literal('disaster'),
				text_id: v.number(),
			}),
		]),
	),
});

export type M1DemoPacketSetupConfigChanceCard = v.InferOutput<
	typeof valiM1DemoPacketSetupConfigMechanicsChanceSchema
>['cards'][0];
export type M1DemoPacketSetupConfigChanceCardType =
	M1DemoPacketSetupConfigChanceCard['type'];

// -------------------------------------------------
// --------------- TRANSFORM FROM V1 ---------------
// -------------------------------------------------

export const valiM1DemoPacketV1ConfigChanceCardsSchema = v.pipe(
	v.array(
		v.union([
			v.strictObject({
				type: v.literal('cash_in'),
				text: v.string(),
				range: v.tuple([v.number(), v.number()]),
				rangeStep: v.number(),
			}),
			v.strictObject({
				type: v.literal('cash_out'),
				text: v.string(),
				range: v.tuple([v.number(), v.number()]),
				rangeStep: v.number(),
			}),
			v.strictObject({
				type: v.literal('repair'),
				text: v.string(),
				costs: v.tuple([v.number(), v.number()]),
			}),
			v.strictObject({
				type: v.literal('jail'),
				text: v.string(),
			}),
			v.strictObject({
				type: v.literal('go_to_start'),
				text: v.string(),
			}),
			v.strictObject({
				type: v.literal('teleport'),
				text: v.string(),
			}),
			v.strictObject({
				type: v.literal('move_skip'),
				text: v.string(),
			}),
			v.strictObject({
				type: v.literal('insurance'),
				text: v.string(),
				sum: v.number(),
			}),
			v.strictObject({
				type: v.literal('birthday'),
				text: v.string(),
				sum: v.number(),
			}),
			v.strictObject({
				type: v.literal('reverse'),
				text: v.string(),
			}),
			v.strictObject({
				type: v.literal('fields_disaster'),
				text: v.string(),
			}),
		]),
	),
	v.transform((value) => {
		const chance_cards_new: v.InferOutput<
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

				case 'go_to_start':
					chance_cards_new.push({
						type: 'go-to-start',
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
