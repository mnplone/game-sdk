import * as v from 'valibot';
import { bit } from '@/utils/valibot.js';
import type { EventEnrichOptions } from '../events.all.js';

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('jail.put'),
		user_id: v.number(),
		income_tax: bit(false),
	}),
	v.object({
		id: v.string(),
		type: v.literal('jail.put.double'),
		user_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('jail.fine'),
		user_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('jail.visit'),
		user_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('jail.stay'),
		user_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('jail.release'),
		user_id: v.number(),
		position_after: v.optional(v.number()),
	}),
	v.object({
		id: v.string(),
		type: v.literal('jail.release.pay'),
		user_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('jail.release.income-tax-write-off'),
		user_id: v.number(),
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
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('goToJail'),
			user_id: v.number(),
			income_tax: bit(false),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'jail.put' as const,
				user_id: value.user_id,
				income_tax: value.income_tax,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('goToJailByCombo'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'jail.put.double' as const,
				user_id: value.user_id,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('goToJailFine'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'jail.fine' as const,
				user_id: value.user_id,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('goToJailVisiting'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'jail.visit' as const,
				user_id: value.user_id,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('stayInJail'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'jail.stay' as const,
				user_id: value.user_id,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('unjailedByFee'),
			user_id: v.number(),
			mean_position: v.optional(v.number()),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'jail.release' as const,
				user_id: value.user_id,
				position_after: value.mean_position,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('payForUnjail'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'jail.release.pay' as const,
				user_id: value.user_id,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('unjailedByIncomeTaxWriteOff'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'jail.release.income-tax-write-off' as const,
				user_id: value.user_id,
			};
		}),
	),
];
