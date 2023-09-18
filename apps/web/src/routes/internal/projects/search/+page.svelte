<script lang="ts">
	import { Paginator } from '@skeletonlabs/skeleton';
	import type { PaginationSettings } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';
	export let data: PageData;

	let paginationSettings: PaginationSettings = {
		page: 0,
		limit: 10,
		size: data.projects.length,
		amounts: [1, 2, 5, 10, 20]
	};

	let headers = ['ID', 'Name', 'Comercial Designation', 'Leader', 'Status', 'Actions'];

	let paginatedSource: {
		id: number;
		status: string;
		name: string;
		comercialDesignation: string;
		leader: string;
	}[] = [];

	$: paginatedSource = data.projects.slice(
		paginationSettings.page * paginationSettings.limit,
		paginationSettings.page * paginationSettings.limit + paginationSettings.limit
	);
</script>

<main class="w-full">
	<h1 class="text-3xl font-bold text-center">Search Projects</h1>
    <section class="grid grid-cols-3 gap-3 my-3 border-b p-3 pb-8 border-b-primary-400/30">
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
            <input type="text" class="input (text)">
        </label>
        <label for="leader" class="label">
            <span>Leader</span>
            <input type="text" class="input" id="leader" name="leader">
        </label>
        <label for="status" class="label">
            <span>Status</span>
            <select id="status" name="status" required class="select rounded-full">
				<option value="Active">Active</option>
				<option value="Inactive">Inactive</option>
				<option value="Abandoned">Abandoned</option>
				<option value="Finished">Finished</option>
				<option value="Pending">Pending</option>
			</select>
        </label>
    </section>
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
                <td class="!p-3">
                    <a href="/internal/projects/search" class="btn btn-icon variant-ghost-primary">
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
