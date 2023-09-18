import type { Employee } from '../../../../app';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({locals:{client}}) => {
    const {ok, data}: {ok: boolean, data: Employee[]} = await client.GET('/employee');
    if (!ok) return {}
    
    const maybeLeaders = data.map(emp => ({value: emp.id, label: `${emp.lastName} ${emp.name}`}))
    
    console.log(data, maybeLeaders);
    return {maybeLeaders};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ locals: { client }, request }) => {
        const employee: Employee = Object.fromEntries(await request.formData()) as unknown as Employee

        const { ok, data } = await client.POST('/project', employee);
        console.log(data);
    }
};