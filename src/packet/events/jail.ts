import {
	literal,
	number,
	object,
	optional,
	pipe,
	string,
	transform,
} from 'valibot';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	object({
		id: string(),
		type: literal('jail.put'),
		user_id: number(),
	}),
	object({
		id: string(),
		type: literal('jail.put.double'),
		user_id: number(),
	}),
	object({
		id: string(),
		type: literal('jail.visit'),
		user_id: number(),
	}),
	object({
		id: string(),
		type: literal('jail.release.pay'),
		user_id: number(),
	}),
	object({
		id: string(),
		type: literal('jail.release'),
		user_id: number(),
		position_after: optional(number()),
	}),
];

export const enrichments = {
	'jail.put'(options: EventEnrichOptions<'jail.put'>) {
		const player = options.status.players.get(options.event.user_id)!;
		player.position = options.field_id_jail;
		player.jail = {
			roll_double_attempts: 0,
		};
	},
	'jail.put.double'(options: EventEnrichOptions<'jail.put.double'>) {
		const player = options.status.players.get(options.event.user_id)!;
		player.position = options.field_id_jail;
		player.jail = {
			roll_double_attempts: 0,
		};
	},
	'jail.release'(options: EventEnrichOptions<'jail.release'>) {
		const player = options.status.players.get(options.event.user_id)!;
		player.jail = undefined;

		// In configs version <7 player who ran out of tries to roll double inside a jail
		// never moved forward after they paid a fee.
		//
		// Moreover, in configs >=7 there was a bug:
		// - player hasn't rolled double for the last time;
		// - player paid the fee and moved forward;
		// - they went to chance and got a teleport.
		// In this case, we does not know on which field player arrived after release from jail.
		//
		// So, "position_after" can be undefined.
		if (options.event.position_after) {
			player.position = options.event.position_after;
		}
	},
};

export const valiV1Schemas = [
	pipe(
		object({
			_id: optional(string()),
			type: literal('goToJail'),
			user_id: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'jail.put' as const,
				user_id: value.user_id,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('goToJailByCombo'),
			user_id: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'jail.put.double' as const,
				user_id: value.user_id,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('goToJailVisiting'),
			user_id: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'jail.visit' as const,
				user_id: value.user_id,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('payForUnjail'),
			user_id: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'jail.release.pay' as const,
				user_id: value.user_id,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('unjailedByFee'),
			user_id: number(),
			mean_position: optional(number()),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'jail.release' as const,
				user_id: value.user_id,
				position_after: value.mean_position,
			};
		}),
	),
];
