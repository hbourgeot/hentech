// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	namespace App {
		interface Locals {
			client: Client;
			employee: Employee;
		}
		// interface PageData {}
		// interface Error {}
		// interface Platform {}
	}
}

interface Client {
	GET: (endpoint: string, body?: object, headers?: any) => Promise<any>;
	POST: (endpoint: string, body?: object, headers?: any) => Promise<any>;
	PUT: (endpoint: string, body?: object, headers?: any) => Promise<any>;
	PATCH: (endpoint: string, body?: object, headers?: any) => Promise<any>;
	DELETE: (endpoint: string, body?: object, headers?: any) => Promise<any>;
}

interface Employee {
	address: string;
	email: string;
	employeeProjects: EmployeeProject[];
	id: number;
	lastName: string;
	name: string;
	phoneNumber: string;
	role: string;
}

interface Project {
	comercialDesignation: string;
	employees: Employee[];
	id: number;
	leader: Employee;
	name: string;
	status: string;
	tasks: any[];
	type: string;
}

export interface EmployeeProject {
	comercialDesignation: string;
	id: number;
	name: string;
	status: string;
	type: null;
}

export interface Role {
	id: number;
	role: string;
}


interface tokenPayload {
	sub: string;
	iss: string;
	client_id: string;
	origin_jti: string;
	event_id: string;
	token_use: string;
	scope: string;
	auth_time: number;
	exp: number;
	iat: number;
	jti: string;
	username: string;
}

interface AuthorizationToken {
	access_token: string;
	refresh_token: RefreshToken;
}

export { AuthorizationToken, tokenPayload, Employee, Project, Client };
