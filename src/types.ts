import type { M1DemoPacketStatus } from './packet/status.js';
import type { M1DemoPacket } from './packet.js';

export type M1DemoRichPacket = M1DemoPacket & {
	events: (M1DemoPacket['events'][number] & {
		status?: {
			before: M1DemoPacketStatus;
			after: M1DemoPacketStatus;
		};
	})[];
};
type M1DemoRichPacketEvent = M1DemoRichPacket['events'][number];
export type ExtractM1DemoRichPacketEvent<T> = Extract<
	M1DemoRichPacketEvent,
	{ type: T }
>;

export type {
	M1DemoPacketEvent,
	M1DemoPacketEventType,
} from './packet/events.js';
export type { M1DemoPacketSetupConfig } from './packet/setup/config.js';
export type { M1DemoPacketSetupPlayer } from './packet/setup/player.js';
export type { M1DemoPacketStatusField } from './packet/status/fields.js';
export type { M1DemoPacketStatusPlayer } from './packet/status/player.js';
export type { M1DemoPacketStatus } from './packet/status.js';
export type { M1DemoPacket, M1DemoTransportPacket } from './packet.js';
