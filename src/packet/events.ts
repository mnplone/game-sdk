import {
	array,
	type InferOutput,
	object,
	optional,
	pipe,
	record,
	string,
	transform,
	union,
} from 'valibot';
import { isRecord } from '../utils/guards.js';
import { valiSchemas, valiV1Schemas } from './events.all.js';

export const valiM1DemoRawPacketEventsSchema = array(
	union([
		...valiSchemas,
		pipe(
			object({
				id: string(),
				type: string(),
			}),
			transform(({ type, ...value_rest }) => {
				return {
					type: '_unknown' as const,
					type_received: type,
					...value_rest,
				};
			}),
		),
	]),
);

export type M1DemoRawPacketEvents = InferOutput<
	typeof valiM1DemoRawPacketEventsSchema
>;
export type M1DemoRawPacketEvent = M1DemoRawPacketEvents[number];
export type M1DemoPacketEventType = M1DemoRawPacketEvent['type'];

// -------------------------------------------------
// --------------- TRANSFORM FROM V1 ---------------
// -------------------------------------------------

const valiM1DemoRawPacketV1EventElementSchema = union([
	...valiV1Schemas,
	pipe(
		object({
			_id: optional(string()),
			type: string(),
		}),
		transform(({ _id, type, ...value_rest }) => {
			return {
				id: _id,
				type: '_unknown' as const,
				type_received: type,
				...value_rest,
			};
		}),
	),
]);

export const valiM1DemoRawPacketV1EventsSchema = pipe(
	union([
		array(valiM1DemoRawPacketV1EventElementSchema),
		record(string(), valiM1DemoRawPacketV1EventElementSchema),
	]),
	transform((value) => {
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
	transform((value) => {
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
