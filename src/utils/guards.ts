import * as v from 'valibot';

const valiRecordParser = v.safeParser(v.record(v.string(), v.unknown()));

/**
 * Checks if value is an object.
 * @param value -
 * @returns -
 */
export function isRecord(value: unknown): value is Record<string, unknown> {
	return Array.isArray(value) === false && valiRecordParser(value).success;
}

/**
 * Checks if object has key.
 * @param object -
 * @param key -
 * @returns -
 */
// oxlint-disable-next-line typescript/no-explicit-any
export function hasOwn<const O extends Record<string, any>>(
	object: O,
	key: string | number | symbol,
): key is keyof O {
	return Object.hasOwn(object, key);
}

/**
 * Checks if value is iterator.
 * @param value -
 * @returns -
 */
export function isIterableIterator(
	// oxlint-disable-next-line typescript/no-explicit-any
	value: any,
): value is IterableIterator<unknown> {
	return (
		value !== null
		&& typeof value === 'object'
		&& Symbol.iterator in value
		&& typeof value[Symbol.iterator] === 'function'
		&& typeof value.next === 'function'
	);
}
