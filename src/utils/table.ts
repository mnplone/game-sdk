import type { M1DemoPacketSetup } from '@/packet/setup.js';

/**
 * Returns the field ID normalized to the range of the fields count.
 * @param setup -
 * @param field_id -
 * @returns -
 */
export function normalizeFieldId(setup: M1DemoPacketSetup, field_id: number) {
	const fields_count = setup.config.fields.length;

	return (field_id + 10 * fields_count) % fields_count;
}
