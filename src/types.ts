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
export type M1DemoRichPacketEvent = M1DemoRichPacket['events'][number];
export type ExtractM1DemoRichPacketEvent<T> = Extract<
	M1DemoRichPacketEvent,
	{ type: T }
>;

export type {
	M1DemoPacketEvent,
	M1DemoPacketEventType,
} from './packet/events.js';
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
export type { M1DemoPacketStatus } from './packet/status.js';
export type { M1DemoPacketTime } from './packet/time.js';
export type { M1DemoPacket, M1DemoTransportPacket } from './packet.js';
