import type { Project } from '../../../../app';
import type { PageServerLoad } from './$types';

export const load = (async ({locals:{client}}) => {
    const { ok, data }: { ok: boolean, data: Project[] } = await client.GET('/project')
    
    const projects = data.map((project) => ({
			id: project.id,
			status: project.status,
			name: project.name,
        comercialDesignation: project.comercialDesignation,
            leader: `${project.leader.name} ${project.leader.lastName}`
		}));
    return {projects};
}) satisfies PageServerLoad;