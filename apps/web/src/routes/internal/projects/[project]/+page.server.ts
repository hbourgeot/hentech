import { error } from '@sveltejs/kit';
import type { Employee, Project } from '../../../../app';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals: { client }, params }) => {
    console.log("hi");
    const {ok: okey, data: project}: {ok: boolean, data: Project} = await client.GET('/projects/project/'+params.project)
    if(!okey) throw error(404, 'Project not found')
	const { ok, data }: { ok: boolean; data: Employee[] } = await client.GET('/employees');
	if (!ok) return {project};
    
    const maybeLeaders = data.map((emp) => ({ value: emp.id, label: `${emp.lastName} ${emp.name}` }));

    

    console.log(project);
	return { maybeLeaders, project };
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ locals: { client }, request }) => {
		const employee: Project = Object.fromEntries(await request.formData()) as unknown as Project;

		const { ok, data } = await client.POST('/projects', employee);
		console.log(ok, data);
	}
};
