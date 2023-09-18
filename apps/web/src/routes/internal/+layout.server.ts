import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({locals:{employee}}) => {
  if (!employee) throw redirect(302, '/login');
};