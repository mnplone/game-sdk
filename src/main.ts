import { getEntrichment, hasEnrichment } from './packet/events.all.js';
import type { M1DemoPacketSetup } from './packet/setup.js';
import type { M1DemoMovementOptions } from './packet/status/turn/movement.js';
import { getMovementOptions } from './packet/status/turn/movement.js';
import type { M1DemoPacketStatus } from './packet/status.js';
import {
	type M1DemoPacket,
	valiM1DemoPacketSchema,
	valiM1DemoPacketV1Schema,
} from './packet.js';
import type { M1DemoRichPacket } from './types.js';
import { isRecord } from './utils/guards.js';
import { normalizeFieldId } from './utils/table.js';
import { parse } from './utils/valibot.js';

export class M1LiveDemo {
	/** Packet versions in this game. Value `null` is a placeholder until first packet arrives. */
	#packet_version: number | null = null;
	#setup: M1DemoPacketSetup | null = null;
	#field_id_jail: number | null = null;
	#status_before: M1DemoPacketStatus | null = null;

	// oxlint-disable-next-line max-statements, complexity, max-lines-per-function
	process(value: unknown): M1DemoRichPacket {
		if (isRecord(value) !== true) {
			throw new TypeError('Packet is not an object.');
		}

		this.#packet_version ??= typeof value.v === 'number' ? value.v : 1;

		let packet: M1DemoPacket;
		switch (this.#packet_version) {
			case 2:
				packet = parse(valiM1DemoPacketSchema, value);
				break;

			case 1:
				packet = parse(valiM1DemoPacketV1Schema, value);
				break;

			default:
				throw new Error(`Unsupported packet version ${this.#packet_version}.`);
		}

		if (packet.setup) {
			this.#setup = packet.setup;
			this.#field_id_jail = this.#setup.config.fields.findIndex(
				(field) => field.type === 'jail',
			);
		}

		if (this.#setup === null) {
			throw new Error('Invalid state: received events before setup.');
		}

		const { events, ...rest_packet } = packet;

		const events_rich = [];
		if (events.length > 0) {
			if (this.#status_before === null) {
				throw new Error('Invalid state: received events before status.');
			}

			if (packet.status) {
				for (const [index, event] of packet.events.entries()) {
					const status_after: M1DemoPacketStatus = structuredClone(
						this.#status_before,
					);
					// const updates:

					if (hasEnrichment(event)) {
						getEntrichment(event)({
							event,
							events_before: packet.events.slice(0, index).toReversed(),
							events_after: packet.events.slice(index),
							setup: this.#setup,
							field_id_jail: this.#field_id_jail!,
							status: status_after,
						});
					}

					events_rich.push({
						status: {
							before: structuredClone(this.#status_before),
							after: structuredClone(status_after),
						},
						...event,
					});

					this.#status_before = status_after;
				}
			} else {
				events_rich.push(...packet.events);
			}
		}

		if (rest_packet.status) {
			this.#status_before = rest_packet.status;
		}

		this.#movement_options = null;

		return {
			events: events_rich,
			...rest_packet,
		};
	}

	#movement_options: M1DemoMovementOptions | undefined | null = null;

	get movement_options(): M1DemoMovementOptions | undefined {
		if (this.#movement_options === null) {
			this.#movement_options = getMovementOptions(
				this.#setup!,
				this.#status_before!,
			);
		}

		return this.#movement_options;
	}

	normalizeFieldId(field_id: number): number {
		return normalizeFieldId(this.#setup!, field_id);
	}
}

export { packet_v1_action_mapping } from './packet/status.js';
