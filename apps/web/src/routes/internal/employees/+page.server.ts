import { error } from '@sveltejs/kit';
import type { Employee } from '../../../app';
import type { PageServerLoad } from './$types';
import { groupBy } from '$lib/utils/group';

export const load = (async ({ locals: { client } }) => {
    const { ok, data } = await client.GET('/employees')
    if (!ok) return { employees: [] }

    const employees = data.map((item: any) => ({
        ...item,
        role: item.role.role
    }))

    const roleCount = groupBy(employees, 'role', true);

    return {employees: employees, roleCount};
}) satisfies PageServerLoad;