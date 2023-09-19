import { writable, type Writable } from "svelte/store";

export interface QueryParams {
  [k: string]: string | number | null | undefined
}

export const queryStore: Writable<QueryParams> = writable({})

export function createQuery(query: QueryParams) {
  return new URLSearchParams(query as Record<string, string>).toString()
}

export function filterFalsyValues(obj: Record<string, any>): Record<string, any> {
	return Object.entries(obj).reduce(
		(acc, [key, value]) => {
			if (value) {
				// Esto excluirá cualquier valor que sea falsy
				acc[key] = value;
			}
			return acc;
		},
		{} as Record<string, any>
	);
}