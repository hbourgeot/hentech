import { typeChecker } from "$lib/typeChecker";
import type { RequestEvent } from "@sveltejs/kit";
import type { AuthorizationToken, Employee, tokenPayload } from "../../app";
import jwt_decode from "jwt-decode"
let i = 0;
export const getAccessToken = async (event: RequestEvent) => {
  const { cookies } = event;

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

	if (ok) {

		const { access_token } = data;

		setAuthCookies({ cookies, access_token });

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
	locals.employee = null;
};

export const getUser = async (event: RequestEvent,token: string) => {
	try {
		let headers = {
			Accept: '*/*',
			Authorization: token
		};

		const { url } = event;


		const res: Response = await fetch(`http://${url.host}/api/auth/profile`, { method: 'GET', headers });
		const {employee}: {employee: Employee } = await res.json();

		return employee;
	} catch (error) {
		console.error(error);
	}
};