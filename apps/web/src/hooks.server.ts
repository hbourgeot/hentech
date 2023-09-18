import { sequence } from '@sveltejs/kit/hooks';
import { client, getAccessToken, getUser } from '$lib/server/auth';
import type { Handle } from '@sveltejs/kit';
import type { Employee } from './app';
import { _api } from "@iconify/svelte"
import fetch from "node-fetch"

const authHandler: Handle = async ({ event, resolve }) => {
	try {
		const access_token = await getAccessToken(event);
		
		if (access_token) {
			event.locals.employee = (await getUser(event, access_token)) as unknown as Employee;
		}
	} catch (e) {
		console.error(e);
	}

	return await resolve(event);
};

const clientHandler: Handle = async ({ event, resolve }) => {
	event.locals.client = {
		GET: async (endpoint: string, body?: object, headers?: any) =>
			await client(event, endpoint, 'GET', body, headers),
		POST: async (endpoint: string, body?: object, headers?: any) =>
			await client(event, endpoint, 'POST', body, headers),
		PUT: async (endpoint: string, body?: object, headers?: any) =>
			await client(event, endpoint, 'PUT', body, headers),
		PATCH: async (endpoint: string, body?: object, headers?: any) =>
			await client(event, endpoint, 'PATCH', body, headers),
		DELETE: async (endpoint: string, body?: object, headers?: any) =>
			await client(event, endpoint, 'DELETE', body, headers)
	};

	return await resolve(event);
};

const trackers: Handle = async ({ event, resolve }) => {
	//@ts-ignore
	_api.setFetch(fetch)

	return await resolve(event);
};

export const handle = sequence(authHandler, clientHandler, trackers);
