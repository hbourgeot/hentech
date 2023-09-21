import { queryStore, type QueryParams, createQuery, filterFalsyValues } from '$lib/stores/params';
import { get } from 'svelte/store';
import type { Project } from '../../../../app';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals: { client } }) => {
	const value = get(queryStore);
	const { ok, data }: { ok: boolean; data: Project[] } = await client.GET(
		`/projects/search?${createQuery(value)}`
	);

	console.log(ok, data);

	if (!ok) return { projects: [] };

	const projects = data.map((project) => ({
		id: project.id,
		status: project.status,
		name: project.name,
		comercialDesignation: project.comercialDesignation,
		leader: `${project.leader.name} ${project.leader.lastName}`,
		type: project.type
    }));
    queryStore.set({})
	return { projects };
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request }) => {
		let obj: QueryParams = Object.fromEntries(await request.formData()) as QueryParams;

		queryStore.set(filterFalsyValues(obj));
	}
};
