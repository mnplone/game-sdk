import * as v from 'valibot';
import { bit } from '../../utils/valibot.js';
// import { type EventEnrichOptions } from '../events.all.js';
import { valiM1DemoContractSchema } from '../status/turn.js';
import { valiM1DemoPacketV1ContractSchema } from '../status.js';

export const valiSchemas = [
	v.object({
		id: v.string(),
		type: v.literal('contract.send'),
		user_id: v.number(),
		user_id_to: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('contract.accept'),
		user_id: v.number(),
		contract: valiM1DemoContractSchema,
	}),
	v.object({
		id: v.string(),
		type: v.literal('contract.reject'),
		user_id: v.number(),
		timeout: bit(false),
	}),
	v.object({
		id: v.string(),
		type: v.literal('contract.review.init'),
	}),
	v.object({
		id: v.string(),
		type: v.literal('contract.review.approve'),
		user_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('contract.review.object'),
		user_id: v.number(),
	}),
	v.object({
		id: v.string(),
		type: v.literal('contract.review.pass'),
	}),
];

export const enrichments = {
	// TODO add contract.accept enrichment
	// 'contract.accept'(options: EventEnrichOptions<'contract.accept'>) {
	// 	const player = options.status.players.get(options.event.user_id)!;
	// },
};

export const valiV1Schemas = [
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('contract'),
			user_id: v.number(),
			to: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'contract.send' as const,
				user_id: value.user_id,
				user_id_to: value.to,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('contract_details'),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: value.type,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('contract_accepted'),
			user_id: v.number(),
			contract: valiM1DemoPacketV1ContractSchema,
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'contract.accept' as const,
				user_id: value.user_id,
				contract: value.contract,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('contract_declined'),
			user_id: v.number(),
			by_timeout: bit(false),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'contract.reject' as const,
				user_id: value.user_id,
				timeout: value.by_timeout,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('contract_protest_start'),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'contract.review.init' as const,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('contract_protest_refused'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'contract.review.approve' as const,
				user_id: value.user_id,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('contract_protest_commited'),
			user_id: v.number(),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'contract.review.object' as const,
				user_id: value.user_id,
			};
		}),
	),
	v.pipe(
		v.object({
			_id: v.optional(v.string()),
			type: v.literal('contract_protest_refused_all'),
		}),
		v.transform((value) => {
			return {
				id: value._id,
				type: 'contract.review.pass' as const,
			};
		}),
	),
];
