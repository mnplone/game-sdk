import {
	literal,
	number,
	object,
	optional,
	pipe,
	string,
	transform,
} from 'valibot';
import { bit } from '../../utils/valibot.js';
// import { type EventEnrichOptions } from '../events.all.js';
import { valiM1DemoContractSchema } from '../status/turn.js';
import { valiM1DemoPacketV1ContractSchema } from '../status.js';

export const valiSchemas = [
	object({
		id: string(),
		type: literal('contract.send'),
		user_id: number(),
		user_id_to: number(),
	}),
	object({
		id: string(),
		type: literal('contract.accept'),
		user_id: number(),
		contract: valiM1DemoContractSchema,
	}),
	object({
		id: string(),
		type: literal('contract.reject'),
		user_id: number(),
		timeout: bit(false),
	}),
];

export const enrichments = {
	// TODO add contract.accept enrichment
	// 'contract.accept'(options: EventEnrichOptions<'contract.accept'>) {
	// 	const player = options.status.players.get(options.event.user_id)!;
	// },
};

export const valiV1Schemas = [
	pipe(
		object({
			_id: optional(string()),
			type: literal('contract'),
			user_id: number(),
			to: number(),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'contract.send' as const,
				user_id: value.user_id,
				user_id_to: value.to,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('contract_details'),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: value.type,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('contract_accepted'),
			user_id: number(),
			contract: valiM1DemoPacketV1ContractSchema,
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'contract.accept' as const,
				user_id: value.user_id,
				contract: value.contract,
			};
		}),
	),
	pipe(
		object({
			_id: optional(string()),
			type: literal('contract_declined'),
			user_id: number(),
			by_timeout: bit(false),
		}),
		transform((value) => {
			return {
				id: value._id,
				type: 'contract.reject' as const,
				user_id: value.user_id,
				timeout: value.by_timeout,
			};
		}),
	),
];
