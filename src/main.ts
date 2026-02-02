import { getEntrichment, hasEnrichment } from './packet/events.all.js';
import type { M1DemoPacketSetup } from './packet/setup.js';
import type { M1DemoPacketStatus } from './packet/status.js';
import {
	type M1DemoRawPacket,
	valiM1DemoRawPacketSchema,
	valiM1DemoRawPacketV1Schema,
} from './packet.js';
import { isRecord } from './utils/guards.js';
import { normalizeFieldId } from './utils/table.js';
import { parse } from './utils/valibot.js';

export class M1LiveDemo {
	/** Packet versions in this game. Value `null` is a placeholder until first packet arrives. */
	private packet_version: number | null = null;
	private setup: M1DemoPacketSetup | null = null;
	private field_id_jail: number | null = null;
	private status_before: M1DemoPacketStatus | null = null;

	// eslint-disable-next-line max-statements, complexity, max-lines-per-function
	process(value: unknown) {
		if (isRecord(value) !== true) {
			throw new TypeError('Packet is not an object.');
		}

		this.packet_version ??= typeof value.v === 'number' ? value.v : 1;

		let packet_raw: M1DemoRawPacket;
		switch (this.packet_version) {
			case 2:
				packet_raw = parse(valiM1DemoRawPacketSchema, value);
				break;

			case 1:
				packet_raw = parse(valiM1DemoRawPacketV1Schema, value);
				break;

			default:
				throw new Error(`Unsupported packet version ${this.packet_version}.`);
		}

		if (packet_raw.setup) {
			this.setup = packet_raw.setup;
			this.field_id_jail = this.setup.config.fields.findIndex(
				(field) => field.type === 'jail',
			);
		}

		// TODO: remove this block, normalize field ids in place of their creation
		if (packet_raw.status && packet_raw.status.turn.movement) {
			const pairs = [...packet_raw.status.turn.movement.options];

			packet_raw.status.turn.movement.options = new Map(
				pairs.map(([field_id, move_value]) => [
					normalizeFieldId(this.setup!, field_id),
					move_value,
				]),
			);
		}

		const { events, ...rest_packet_raw } = packet_raw;

		const events_new = [];
		if (events.length > 0) {
			if (this.setup === null) {
				throw new Error('Invalid state: received events before setup.');
			}

			if (this.status_before === null) {
				throw new Error('Invalid state: received events before status.');
			}

			if (packet_raw.status) {
				for (const [index, event] of packet_raw.events.entries()) {
					const status_after: M1DemoPacketStatus = structuredClone(
						this.status_before,
					);
					// const updates:

					if (hasEnrichment(event)) {
						getEntrichment(event)({
							event,
							events_before: packet_raw.events.slice(0, index).toReversed(),
							events_after: packet_raw.events.slice(index),
							setup: this.setup,
							field_id_jail: this.field_id_jail!,
							status: status_after,
						});
					}

					events_new.push({
						status: {
							before: structuredClone(this.status_before),
							after: structuredClone(status_after),
						},
						...event,
					});

					this.status_before = status_after;
				}
			} else {
				events_new.push(...packet_raw.events);
			}
		}

		if (rest_packet_raw.status) {
			this.status_before = rest_packet_raw.status;
		}

		return {
			events: events_new,
			...rest_packet_raw,
		};
	}
}

export type M1DemoPacket = ReturnType<M1LiveDemo['process']>;
export type M1DemoPacketEvent = M1DemoPacket['events'][number] & {
	status?: {
		before: M1DemoPacketStatus;
		after: M1DemoPacketStatus;
	};
};
export type ExtractM1DemoPacketEvent<T> = Extract<
	M1DemoPacketEvent,
	{ type: T }
>;

export type { M1DemoPacketSetupConfigChanceCardType } from './packet/setup/config/chance.js';
export type { M1DemoPacketSetupConfigField } from './packet/setup/config/fields.js';
export type { M1DemoPacketSetupConfigMonopoly } from './packet/setup/config/monopolies.js';
export type {
	M1DemoPacketSetupConfig,
	M1DemoPacketSetupConfigMechanics,
	M1DemoPacketSetupConfigMechanicsRules,
} from './packet/setup/config.js';
export type {
	M1DemoPacketSetupPlayer,
	M1DemoPacketSetupPlayerEquippedCard,
	M1DemoPacketSetupPlayerEquippedGenerator,
	M1DemoPacketSetupPlayerEquippedJoke,
} from './packet/setup/player.js';
export type { M1DemoPacketSetup } from './packet/setup.js';
export type { M1DemoPacketStatusField } from './packet/status/fields.js';
export type { M1DemoPacketStatusPlayer } from './packet/status/player.js';
export type {
	M1DemoContract,
	M1DemoPacketStatusTurn,
} from './packet/status/turn.js';
export {
	type M1DemoPacketStatus,
	packetv1_action_mapping,
} from './packet/status.js';
export type { M1DemoPacketTime } from './packet/time.js';
