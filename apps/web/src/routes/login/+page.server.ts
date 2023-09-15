import { logIn } from "$lib/server/auth";
import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({locals:{employee}}) => {
  if (employee) {
    throw redirect(302, "/internal");
  }

  return {}
};

export const actions: Actions = {
  default: async (event) => {
    const {email, password}: {email: string, password: string} = Object.fromEntries(await event.request.formData()) as {email: string, password: string}

    const response = await logIn(event, { email, password });

    throw redirect(302, "/internal")
  }
};