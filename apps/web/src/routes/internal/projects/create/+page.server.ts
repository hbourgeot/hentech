import type { Employee, Project } from '../../../../app';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({locals:{client}}) => {
    const {ok, data}: {ok: boolean, data: Employee[]} = await client.GET('/employees');
    if (!ok) return {}
    
    const maybeLeaders = data.map(emp => ({value: emp.id, label: `${emp.lastName} ${emp.name}`}))
    
    return {maybeLeaders};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ locals: { client }, request }) => {
        const employee: Project = Object.fromEntries(await request.formData()) as unknown as Project

        const { ok, data } = await client.POST('/projects', employee);
        console.log(ok, data);
    }
};