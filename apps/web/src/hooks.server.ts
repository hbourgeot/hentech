import { sequence } from '@sveltejs/kit/hooks';
import { client } from '$lib/server/auth';
import type { Handle } from '@sveltejs/kit';


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
	return await resolve(event);
};

export const handle = sequence(clientHandler, trackers);
