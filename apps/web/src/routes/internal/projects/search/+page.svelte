<script lang="ts">
	import { Paginator } from '@skeletonlabs/skeleton';
	import type { PaginationSettings } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';
	import { enhance } from '$app/forms';
	export let data: PageData;

	let paginationSettings: PaginationSettings = {
		page: 0,
		limit: 10,
		size: data.projects.length,
		amounts: [1, 2, 5, 10, 20]
	};

	let headers = ['ID', 'Name', 'Comercial Designation', 'Leader', 'Status', 'Type', 'Actions'];

	let paginatedSource: {
		id: number;
		status: string;
		name: string;
		comercialDesignation: string;
		leader: string;
        type: string;
	}[] = [];

	$: paginatedSource = data.projects.slice(
		paginationSettings.page * paginationSettings.limit,
		paginationSettings.page * paginationSettings.limit + paginationSettings.limit
	);

</script>

<main class="w-full">
	<h1 class="text-3xl font-bold text-center">Search Projects</h1>
    <form method="post" use:enhance class="grid grid-cols-3 gap-5 my-3 border-b p-3 pb-8 border-b-primary-400/30">
        <label for="id" class="label">
            <span>ID</span>
            <input type="text" class="input (text)" name="id" id="id">
        </label>
        <label for="name" class="label">
            <span>name</span>
            <input type="text" class="input (text)" name="name" id="name">
        </label>
        <label for="comercialDesignation" class="label">
            <span>Comercial Designation</span>
            <input type="text" class="input (text)" name="comercialDesignation" id="comercialDesignation">
        </label>
        <label for="leader" class="label">
            <span>Leader ID</span>
            <input type="text" class="input" id="leader" name="leaderId">
        </label>
        <label for="type" class="label">
            <span>Type</span>
            <input type="text" class="input" id="type" name="type">
        </label>
        <label for="status" class="label">
            <span>Status</span>
            <select id="status" name="status" class="select rounded-full">
                <option value="">All</option>
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
        </label>
        <div class="col-span-3 w-full flex justify-center gap-x-4">
            <button type="reset" class="btn variant-filled-surface">Clean Filters</button>
            <button type="submit" class="btn variant-filled-primary">Search</button>
        </div>
    </form>
    <h2 class="text-2xl font-semibold">Projects List</h2>
	<table class="table !my-4">
        <tr>
            {#each headers as header}
                <th class="text-left !p-3">{header}</th>
            {/each}
        </tr>
        {#each paginatedSource as item}
            <tr>
                <td class="!p-3">{item.id}</td>
                <td class="!p-3">{item.name}</td>
                <td class="!p-3">{item.comercialDesignation}</td>
                <td class="!p-3">{item.leader}</td>
                <td class="!p-3">{item.status}</td>
                <td class="!p-3">{item.type}</td>
                <td class="!p-3">
                    <a href="/internal/projects/{item.id}" class="btn btn-icon variant-ghost-primary">
                        <Icon icon="mdi:eye-outline" class="h-"/>
                    </a>
                </td>
            </tr>
        {/each}
    </table>
	<Paginator
		bind:settings={paginationSettings}
		showFirstLastButtons={false}
		showPreviousNextButtons={true}
	/>
</main>
