<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

	let role = 'XXX';
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Register a employee</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>ID</span>
			<input type="number" class="input (number)" required name="name" id="name" />
		</label>
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" name="name" id="name" required />
		</label>
		<label for="lastName" class="label mb-4">
			<span>Last name</span>
			<input type="text" class="input (text)" name="lastName" id="lastName" required />
		</label>
		<label for="email" class="label mb-4">
			<span>Email</span>
			<input type="email" class="input (email)" required name="email" id="email" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="role" class="label mb-4">
			<span>hola m</span>
			<span>Role</span>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
				<div class="input-group-shim">{role}</div>
				<select
					bind:value={role}
					required
					name="leaderId"
					id="role"
					class="select rounded-full"
				>
					{#if data.maybeLeaders}
						{#each data.maybeLeaders as maybeLeader}
							<option value={maybeLeader.value}>{maybeLeader.label}</option>
						{/each}
					{:else}
						<option value="" disabled>Please add an employee before of a project</option>
					{/if}
				</select>
			</div>
		</label>
		<button type="submit" class="btn variant-filled-primary my-3 block mx-auto">Create</button>
	</form>
</section>
