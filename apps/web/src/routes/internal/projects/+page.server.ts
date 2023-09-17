import type { Project } from '../../../app';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { client } }) => {
	const { ok, data }: { ok: boolean; data: Project[] } = await client.GET('/project');

	if (!ok) return { projects: [] };

	let projectCount = {
		Active: data.filter((project) => project.status === 'Activo' || project.status === 'Active')
			.length,
		Inactive: data.filter((project) => project.status === 'Inactive').length,
		Abandoned: data.filter((project) => project.status === 'Abandoned').length,
        Finished: data.filter((project) => project.status === 'Finished').length,
        Pending: data.filter((project) => project.status === 'Pending').length,
    };

	return { projects: data, projectCount};
}) satisfies PageServerLoad;
