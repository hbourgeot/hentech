<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';

	export let data: PageData;

    let leader = 'XXX'
    $: leader = data.project.leader.id
</script>

<section class="w-full">
	<h1 class="text-center text-3xl font-bold">Create project</h1>
	<form use:enhance method="post" class="w-1/2 mx-auto">
		<label for="name" class="label mb-4">
			<span>Name</span>
			<input type="text" class="input (text)" bind:value={data.project.name} required name="name" id="name" />
		</label>
		<label for="comercialDesignation" class="label mb-4">
			<span>Comercial Designation</span>
			<input
				type="text"
				class="input (text)"
				name="comercialDesignation"
                bind:value={data.project.comercialDesignation}
				id="comercialDesignation" required
			/>
		</label>
		<label for="type" class="label mb-4">
			<span>Type</span>
			<input type="text" class="input (text)" required bind:value={data.project.type} name="type" id="type" />
		</label>
		<label for="status" class="label mb-4">
			<span>Status</span>
			<select id="status" name="status" required class="select rounded-full" bind:value={data.project.status}>
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
		</label>
		<label for="leader" class="label mb-4">
            <span>Leader</span>
            <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
                <div class="input-group-shim">{leader}</div>
                <select bind:value={leader} required name="leaderId" id="leader" class="select rounded-full">
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
