/* eslint-disable no-bitwise */

const table = new Uint32Array(256);

// Pre-generate crc32 polynomial lookup table
// http://wiki.osdev.org/CRC32#Building_the_Lookup_Table
for (let index = 256; index--; ) {
	let tmp = index;

	for (let _k = 8; _k--; ) {
		tmp = tmp & 1 ? 3988292384 ^ (tmp >>> 1) : tmp >>> 1;
	}

	table[index] = tmp;
}

const textEncoder = new TextEncoder();

/**
 * Calculate CRC32 checksum for a given string.
 * @param data - The string to calculate the CRC32 checksum for.
 * @returns -
 */
export function crc32(data: string) {
	const data_buffer = textEncoder.encode(data);

	let crc = 0xffffffff;
	for (const byte of data_buffer) {
		const tableIndex = (crc ^ byte) & 0xff;
		const tableVal = table[tableIndex]!; // 0-255 because of "& 0xFF"
		crc = (crc >>> 8) ^ tableVal;
	}

	return crc ^ 0xffffffff;
}

/**
 * Calculate CRC32 checksum for a given string and return it as a hexadecimal string.
 * @param data - The string to calculate the CRC32 checksum for.
 * @returns -
 */
export function crc32Hex(data: string) {
	let result = crc32(data);
	if (result < 0) {
		result = 0xffffffff - result * -1 + 1;
	}

	return result.toString(16).padStart(8, '0');
}
