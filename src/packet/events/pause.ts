import * as v from 'valibot';

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('pause.set'),
	}),
	v.object({
		id: v.string(),
		type: v.literal('pause.end'),
	}),
];

export const valiV1Schemas = [
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('pauseActive'),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'pause.set' as const,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('pauseRemoved'),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'pause.end' as const,
			};
		}),
	),
];
