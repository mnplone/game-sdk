import * as v from 'valibot';

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export type ValiBaseSchema = BaseSchema<any, any, any>;
export type ValiBaseSchema = Parameters<typeof v.parser>[0];

/**
 * Creates bit schema.
 * @param default_value Default value for a bit.
 * @returns -
 */
export function bit(default_value: boolean) {
	return v.pipe(
		v.optional(v.picklist([0, 1]), default_value ? 1 : 0),
		v.transform((value) => value === 1),
	);
}

// /**
//  * Creates bit schema that is represented as a string.
//  * @param default_value Default value for a bit.
//  * @returns -
//  */
// export function bitString(default_value: boolean) {
// 	return Object.assign(
// 		pipe(
// 			optional(picklist(['0', '1']), default_value ? '1' : '0'),
// 			transform((value) => value === '1'),
// 		),
// 		{
// 			_custom_name: 'bitString',
// 		},
// 	);
// }

// eslint-disable-next-line jsdoc/require-jsdoc
export function parse<S extends ValiBaseSchema>(
	schema: S,
	value: unknown,
): v.InferOutput<S> {
	return parser(schema)(value);
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function parser<S extends ValiBaseSchema>(
	schema: S,
): (value: unknown) => v.InferOutput<S> {
	const fn = v.parser(schema);

	return (value: unknown) => {
		try {
			return fn(value);
		} catch (error) {
			if (v.isValiError(error)) {
				for (const issue of error.issues) {
					// oxlint-disable-next-line no-console
					console.error(
						`Valibot found an issue at ${v.getDotPath(issue)}. Received ${issue.received}, which does not match expected type ${issue.expected}`,
						issue,
					);
				}
			}

			throw error;
		}
	};
}
