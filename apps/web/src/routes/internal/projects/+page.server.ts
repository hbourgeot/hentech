import type { Project } from '../../../app';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { client } }) => {
	const { ok, data }: { ok: boolean; data: Project[] } = await client.GET('/projects');

	if (!ok) return { projects: [], count: {} };

	let projectCount = {
		Active: data.filter((project) => project.status === 'Activo' || project.status === 'Active')
			?.length ?? 0,
		Inactive: data.filter((project) => project.status === 'Inactive')?.length ?? 0,
		Abandoned: data.filter((project) => project.status === 'Abandoned')?.length ?? 0,
        Finished: data.filter((project) => project.status === 'Finished')?.length ?? 0,
        Pending: data.filter((project) => project.status === 'Pending')?.length ?? 0,
	};

	return { projects: data, count: projectCount};
}) satisfies PageServerLoad;
