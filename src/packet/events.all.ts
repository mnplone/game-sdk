import type { InferOutput } from 'valibot';
import * as events_auction from './events/auction.js';
import * as events_bank from './events/bank.js';
import * as events_bus from './events/bus.js';
import * as events_contract from './events/contract.js';
import * as events_jackpot from './events/jackpot.js';
import * as events_jail from './events/jail.js';
import * as events_level from './events/level.js';
import * as events_loan from './events/loan.js';
import * as events_m1 from './events/m1.js';
import * as events_mortgage from './events/mortgage.js';
import * as events_movement from './events/movement.js';
import * as events_other from './events/other.js';
import * as events_pause from './events/pause.js';
import * as events_purchase from './events/purchase.js';
import * as events_rent from './events/rent.js';
import * as events_roll_dices from './events/roll-dices.js';
import * as events_russian_roulette from './events/russian-roulette.js';
import * as events_start from './events/start.js';
import * as events_taxi from './events/taxi.js';
import * as events_tournament from './events/tournament.js';
import * as events_wormhole from './events/wormhole.js';
import type { M1DemoRawPacketEvent } from './events.js';
import type { M1DemoPacketSetup } from './setup.js';
import type { M1DemoPacketStatus } from './status.js';

export const event_libs = [
	events_auction,
	events_bank,
	events_bus,
	events_contract,
	events_jackpot,
	events_jail,
	events_level,
	events_loan,
	events_m1,
	events_mortgage,
	events_movement,
	events_pause,
	events_purchase,
	events_rent,
	events_roll_dices,
	events_russian_roulette,
	events_start,
	events_taxi,
	events_tournament,
	events_wormhole,
	events_other,
];

type EventLib = (typeof event_libs)[number];

// export const valiSchemas = [
// 	...events_message.valiSchemas,
// 	...events_pause.valiSchemas,
// 	...events_roll_dices.valiSchemas,
// ] as const;
export const valiSchemas = (() => {
	const result = [];

	for (const event_lib of event_libs) {
		result.push(...event_lib.valiSchemas);
	}

	return result;
})();
// export const valiV1Schemas = event_libs.map((event_lib) => event_lib.valiV1Schemas).flat(Number.POSITIVE_INFINITY) as EventLib['valiV1Schemas'];
export const valiV1Schemas = (() => {
	const result = [];

	for (const event_lib of event_libs) {
		result.push(...event_lib.valiV1Schemas);
	}

	return result;
})();

// type EventType = InferOutput<typeof valiSchemas[number]>['type'] | '_unknown';
export type ExtractEvent<T> = Extract<
	InferOutput<(typeof valiSchemas)[number]>,
	{ type: T }
>;

// ---------------------------------
// ---------- enrichments ----------
// ---------------------------------

// oxlint-disable-next-line typescript/no-explicit-any
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
	k: infer I,
) => void
	? I
	: never;
type EnrichableEventType = keyof UnionToIntersection<EventLib>['enrichments'];
export type EventEnrichOptions<T> = {
	event: ExtractEvent<T>;
	events_before: M1DemoRawPacketEvent[];
	events_after: M1DemoRawPacketEvent[];
	setup: M1DemoPacketSetup;
	field_id_jail: number;
	status: M1DemoPacketStatus;
};

// type for all defined enrichments, maybe invalid ones!
type EnrichmentsDefined = UnionToIntersection<
	Extract<EventLib, { enrichments: object }>['enrichments']
>;
type Enrichment<T extends EnrichableEventType> = (
	options: EventEnrichOptions<T>,
) => void;
const enrichments: { [T in EnrichableEventType]: Enrichment<T> } = (() => {
	const result = {};

	for (const event_lib of event_libs) {
		if ('enrichments' in event_lib) {
			Object.assign(result, event_lib.enrichments);
		}
	}

	// add all other event types with undefined values
	return result as EnrichmentsDefined;
})();

/**
 * Type guard for events that have enrichments.
 * @param event -
 * @returns -
 */
export function hasEnrichment(
	event: M1DemoRawPacketEvent,
): event is Extract<typeof event, { type: EnrichableEventType }> {
	return event.type in enrichments;
}

/**
 * Returns event enrichment.
 * @param event Event to get enrichment for.
 * @returns -
 */
export function getEntrichment<const E extends M1DemoRawPacketEvent>(
	event: E,
): E['type'] extends EnrichableEventType ? Enrichment<E['type']> : undefined {
	// oxlint-disable-next-line typescript/no-explicit-any
	return enrichments[event.type as EnrichableEventType] as any;
}
