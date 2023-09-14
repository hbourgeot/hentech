import { typeChecker } from "$lib/typeChecker";
import type { RequestEvent } from "@sveltejs/kit";
import type { AuthorizationToken, tokenPayload } from "../../app";
import jwt_decode from "jwt-decode"

export const getAccessToken = async (event: RequestEvent) => {
  const { cookies } = event;

  const token_payload: tokenPayload = typeChecker(
    "string",
    cookies.get("token_payload"),
    JSON.parse
  );
  const refresh_token = cookies.get("refresh_token");

  //If accessToken is expired (they expire every 5 mins)
  if (token_payload && token_payload.exp * 1000 < Date.now()) {
    //then get a new access toke with the refresh token
    if (refresh_token) {
      let token: string = (await refreshToken(
        refresh_token
      )) as unknown as string;
      if (token) {
        setAuthCookies({ cookies, access_token: token });
      }
    }
  }

  const access_token = cookies.get("access_token");

  return access_token;
}

export const client = async (
	event: RequestEvent,
	endpoint: string,
	method: string,
	raw?: object,
	headers?: any,
) => {
	const access_token = await getAccessToken(event);

	const { fetch } = event;

	let body = raw ? JSON.stringify(raw) : null;

	headers = headers ?? {
		Accept: '*/*',
		'Content-Type': 'application/json'
	};

	let res = await fetch("/api"+endpoint, { method, body, headers });

	if (res.ok) {
		let data = await res.json();
		return { ok: true, status: res.status, data };
	} else {
		let data;
		try {
			data = await res.json();
		} catch (error) {
			data = undefined;
		}
		return {
			ok: false,
			status: res.status,
			data: JSON.stringify(data)
		};
	}
};

export const refreshToken = async (refresh_token: string) => {
	try {
		// console.log(refresh_token)
		const res: Response = await fetch(`/api/auth/refresh`, {
			method: 'POST',
			body: refresh_token
		});
		// console.log(res)
		const { access_token }: AuthorizationToken = await res.json();

		// console.log("accestoken",access_token)
		return access_token;
	} catch (error) {
		console.error(error);
	}
};

export const setAuthCookies = ({
	cookies,
	access_token,
}: any) => {
	if (access_token) {
		const token_payload: tokenPayload = jwt_decode(access_token);
		const maxAge = token_payload.exp * 1000 - Date.now();

		cookies.set('access_token', `Bearer ${access_token}`, {
			httpOnly: true,
			path: '/',
			secure: true,
			sameSite: 'strict',
			maxAge: maxAge // 1 day
		});

		cookies.set('token_payload', JSON.stringify(token_payload), {
			httpOnly: true,
			path: '/',
			secure: true,
			sameSite: 'strict'
		});
	}
};

export const logIn = async (
  //@ts-ignore
	{ cookies, locals: { client } }: RequestEvent,
	{ email, password }: { email?: string; password?: string }
) => {
	const { ok, status, data } = await client.POST('/auth/login', { email: email, password: password });
	// console.log(data)
	let location: string;

	if (ok) {

		const { access_token, refresh_token }: AuthorizationToken = data;

		setAuthCookies({ cookies, access_token, refresh_token });

		return { ok };
	}

	return { ok, status, data };
};

export const logOut = async ({ cookies, locals }: RequestEvent) => {
	cookies.delete('access_token', { path: '/' }),
		cookies.delete('refresh_token', { path: '/' }),
		cookies.delete('token_payload', { path: '/' });
	cookies.delete('SESSION_DATA', { path: '/' });
	cookies.delete('CONFIRMATION_USER', { path: '/' });
	//@ts-ignore
	locals.user = null;
};