import { literal, object, optional, pipe, string, transform } from 'valibot';

export const valiSchemas = [
	object({
		id: string(),
		type: literal('pause.set'),
	}),
	object({
		id: string(),
		type: literal('pause.end'),
	}),
];

export const valiV1Schemas = [
	pipe(
		object({
			_id: optional(string()),
			type: literal('pauseActive'),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'pause.set' as const,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('pauseRemoved'),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'pause.end' as const,
			};
		}),
	),
];
