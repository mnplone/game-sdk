import * as v from 'valibot';
import type { M1DemoPacketSetup } from '@/packet/setup.js';
import type { M1DemoPacketStatus } from '@/packet/status.js';
import { normalizeFieldId } from '@/utils/table.js';

export const m1DemoPacketStatusTurnMovementSchema = v.variant('source', [
	v.object({
		source: v.picklist(['bus', 'triple']),
	}),
	v.object({
		// FIXME: right now, 'taxi' has field_ids, but we should move calculation from server to SDK
		source: v.picklist(['taxi', 'wormhole']),
		field_ids: v.array(v.number()),
	}),
]);
export type M1DemoPacketStatusTurnMovement = v.InferOutput<
	typeof m1DemoPacketStatusTurnMovementSchema
>;

export type M1DemoMovementOptions = {
	field_id: number;
	stop_id?: number;
}[];

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
		return movement.field_ids.map((field_id) => {
			return { field_id };
		});
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
		case 'bus': {
			const movement_options: M1DemoMovementOptions = [];

			const dice_0 = dices[0];
			movement_options.push({
				field_id: normalizeFieldId(setup, position + direction * dice_0),
				stop_id: 0,
			});

			const dice_1 = dices[1]!;
			if (dice_0 !== dice_1) {
				movement_options.push({
					field_id: normalizeFieldId(setup, position + direction * dice_1),
					stop_id: 1,
				});
			}

			const dices_sum = dice_0 + dice_1;
			movement_options.push({
				field_id: normalizeFieldId(setup, position + direction * dices_sum),
				stop_id: -1,
			});

			return movement_options;
		}

		// FIXME: right now, 'taxi' has field_ids, but we should move calculation from server to SDK
		// case 'taxi':

		case 'triple': {
			const movement_options: M1DemoMovementOptions = [];
			for (let field_id = 0; field_id < config.fields.length; field_id++) {
				if (field_id !== position) {
					movement_options.push({ field_id });
				}
			}

			return movement_options;
		}

		// 'wormhole' always has field_ids, no need to compute movement options

		default:
			throw new Error(
				// @ts-expect-error "movement" should have type "never"
				`Unknown source for movement.picker event: ${movement.source}`,
			);
	}
}
