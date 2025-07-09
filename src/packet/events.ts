import * as v from 'valibot';
import { isRecord } from '../utils/guards.js';
import { valiSchemas, valiV1Schemas } from './events.all.js';

export const valiM1DemoRawPacketEventsSchema = v.array(
	v.union([
		...valiSchemas,
		v.pipe(
			v.object({
				id: v.string(),
				type: v.string(),
			}),
			v.transform(({ type, ...value_rest }) => {
				return {
					type: '_unknown' as const,
					type_received: type,
					...value_rest,
				};
			}),
		),
	]),
);

export type M1DemoRawPacketEvents = v.InferOutput<
	typeof valiM1DemoRawPacketEventsSchema
>;
export type M1DemoRawPacketEvent = M1DemoRawPacketEvents[number];
export type M1DemoPacketEventType = M1DemoRawPacketEvent['type'];

// -------------------------------------------------
// --------------- TRANSFORM FROM V1 ---------------
// -------------------------------------------------

const valiM1DemoRawPacketV1EventElementSchema = v.union([
	...valiV1Schemas,
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.string(),
		}),
		v.transform(({ _id, type, ...value_rest }) => {
			return {
				id: _id,
				type: '_unknown' as const,
				type_received: type,
				...value_rest,
			};
		}),
	),
]);

export const valiM1DemoRawPacketV1EventsSchema = v.pipe(
	v.union([
		v.array(valiM1DemoRawPacketV1EventElementSchema),
		v.record(v.string(), valiM1DemoRawPacketV1EventElementSchema),
	]),
	v.transform((value) => {
		if (isRecord(value)) {
			return Object.entries(value).map(([_id, event]) => {
				return {
					_id,
					...event,
				};
			});
		}

		return value;
	}),
	v.transform((value) => {
		const events_new /* : Exclude<(typeof value)[number], { type: 'double_spended' }>[] */ =
			[];

		for (const { id, ...event_rest } of value) {
			if (typeof id !== 'string') {
				throw new TypeError('Validation error: field "id" is required');
			}

			if (event_rest.type === 'double_spended') {
				const event_new_last = [...events_new].at(-1); // create a copy to calm down TS
				if (event_new_last && event_new_last.type === 'roll-dices') {
					event_new_last.double_spent = true;
				}

				continue;
			}

			if (event_rest.type === 'contract_details') {
				continue;
			}

			events_new.push({
				id,
				...event_rest,
			});
		}

		return events_new;
	}),
);
