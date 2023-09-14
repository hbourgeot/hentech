import { logIn } from "$lib/server/auth";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async (event) => {
    const {email, password}: {email: string, password: string} = Object.fromEntries(await event.request.formData()) as {email: string, password: string}

    console.log(email,password);
    const response = await logIn(event, { email, password });
    console.log(response);
  }
};