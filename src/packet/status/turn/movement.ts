import * as v from 'valibot';
import type { M1DemoPacketSetup } from '@/packet/setup.js';
import type { M1DemoPacketStatus } from '@/packet/status.js';
import { normalizeFieldId } from '@/utils/table';

export const m1DemoPacketStatusTurnMovementSchema = v.variant('source', [
	v.object({
		source: v.picklist(['bus', 'taxi', 'triple']),
	}),
	v.object({
		source: v.picklist(['wormhole']),
		field_ids: v.array(v.number()),
	}),
]);
export type M1DemoPacketStatusTurnMovement = v.InferOutput<
	typeof m1DemoPacketStatusTurnMovementSchema
>;

export type M1DemoMovementOptions = Map<
	number,
	{ field_id: number } | { stop_id: number }
>;

/** Returns movement options, building them from the game context. */
export function getMovementOptions(
	setup: M1DemoPacketSetup,
	status: M1DemoPacketStatus,
): M1DemoMovementOptions | undefined {
	if (status.turn.movement === undefined) {
		return;
	}

	const { movement } = status.turn;

	if ('field_ids' in movement) {
		return new Map(
			movement.field_ids.map((field_id) => [field_id, { field_id }]),
		) as M1DemoMovementOptions;
	}

	const { config } = setup;

	const action_user_id = status.turn.action.user_id;
	if (action_user_id === null) {
		throw new Error('Invalid demo state: no action player available.');
	}

	const { position } = status.players.get(action_user_id)!;
	const { dices } = status.turn;
	if (dices === undefined) {
		return;
	}

	const direction = status.turn.move_reversed ? -1 : 1;

	switch (movement.source) {
		case 'bus':
			return new Map(
				(
					[
						[dices[0], { stop_id: 0 }],
						[dices[1]!, { stop_id: 1 }],
						[dices[0] + dices[1]!, { stop_id: -1 }],
					] as const
				).map(([stop_id, action_data]) => [
					normalizeFieldId(setup, position + direction * stop_id),
					action_data,
				]),
			);

		// FIXME: right now, 'taxi' has field_ids, but we should move calculation from server to SDK
		// case 'taxi': {
		// 	const offset = dices[0];

		// 	return new Map(
		// 		Array.from({ length: 6 }, (_, index) => {
		// 			const stop_id = index + 1;
		// 			const stop_offset = offset + stop_id;

		// 			return [
		// 				normalizeFieldId(setup, position + direction * stop_offset),
		// 				{ stop_id },
		// 			];
		// 		}),
		// 	);
		// }

		case 'triple': {
			const movement_options = new Map(
				Array.from({ length: config.fields.length }, (_, index) => [
					index,
					{ field_id: index },
				]),
			) as M1DemoMovementOptions;

			movement_options.delete(position);

			return movement_options;
		}

		// 'wormhole' always has field_ids, no need to compute movement options

		default:
			throw new Error(
				`Unknown source for movement.picker event: ${movement.source}`,
			);
	}
}
