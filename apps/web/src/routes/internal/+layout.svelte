<script lang="ts">
	import Icon from '@iconify/svelte';
	import { AppRail, AppRailAnchor, AppRailTile, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

	let currentTile: number = 0;
	let valueSingle = "resumeP"
</script>

<main class="flex">
	<section class="flex w-1/3 gap-x-2 sticky top-[65px]">
		<AppRail>
			<!-- --- -->
			<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="projects">
				<svelte:fragment slot="lead">
					<Icon icon="material-symbols:assignment-outline-rounded" height="40" class="mx-auto" />
				</svelte:fragment>
				<span>Projects</span>
			</AppRailTile>
			<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
				<svelte:fragment slot="lead">
					<Icon icon="material-symbols:badge-outline-rounded" height="40" class="mx-auto" />
				</svelte:fragment>
				<span>Employees</span>
			</AppRailTile>
			<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
				<svelte:fragment slot="lead">
					<Icon icon="material-symbols:bookmark-add-outline" height="40" class="mx-auto" />
				</svelte:fragment>
				<span>Tasks</span>
			</AppRailTile>
			<AppRailTile bind:group={currentTile} name="tile-3" value={3} title="tile-3">
				<svelte:fragment slot="lead">
					<Icon
						icon="material-symbols:assignment-add-outline-rounded"
						height="40"
						class="mx-auto"
					/>
				</svelte:fragment>
				<span>My Projects</span>
			</AppRailTile>
			<AppRailTile bind:group={currentTile} name="tile-3" value={4} title="tile-3">
				<svelte:fragment slot="lead">
					<Icon icon="material-symbols:extension-outline" height="40" class="mx-auto" />
				</svelte:fragment>
				<span>My Tasks</span>
			</AppRailTile>
			<!-- --- -->
			<svelte:fragment slot="trail">
				<AppRailAnchor class="cursor-pointer" href="/internal/profile" target="_blank" title="Account" bind:group={currentTile} value={5} name="account">
					<svelte:fragment slot="lead">
						<Icon icon="material-symbols:person" height="40" class="mx-auto" />
					</svelte:fragment>
					<span>Me</span>
				</AppRailAnchor>
			</svelte:fragment>
		</AppRail>
		<div class="py-2 w-2/3">
			<ListBox padding="py-2 px-4">
				{#if currentTile==0}
					<ListBoxItem bind:group={valueSingle} name="medium" value="resumeP" class="flex flex-col">
						<a href="/internal" class="block !w-full !h-full">Projects Resume</a>
					</ListBoxItem>
					<ListBoxItem bind:group={valueSingle} name="medium" value="createP">Create project</ListBoxItem>
					<ListBoxItem bind:group={valueSingle} name="medium" value="searchP">Search Projects</ListBoxItem>
				{:else if currentTile == 1}
					<ListBoxItem bind:group={valueSingle} name="medium" value="resumeE">Employees Resume</ListBoxItem>
					<ListBoxItem bind:group={valueSingle} name="medium" value="registE">Register employee</ListBoxItem>
					<ListBoxItem bind:group={valueSingle} name="medium" value="searchE">Search Employees</ListBoxItem>
				{:else if currentTile == 2}
					<ListBoxItem bind:group={valueSingle} name="medium" value="resumeT">Tasks Resume</ListBoxItem>
					<ListBoxItem bind:group={valueSingle} name="medium" value="addTask">Add task</ListBoxItem>
					<ListBoxItem bind:group={valueSingle} name="medium" value="searchT">Search Tasks</ListBoxItem>
				{:else if currentTile == 3}
					<ListBoxItem bind:group={valueSingle} name="medium" value="resumeMP">Projects Resume</ListBoxItem>
					<ListBoxItem bind:group={valueSingle} name="medium" value="searchMP">Search Projects</ListBoxItem>
				{:else if currentTile == 4}
					<ListBoxItem bind:group={valueSingle} name="medium" value="resumeMT">Tasks Resume</ListBoxItem>
					<ListBoxItem bind:group={valueSingle} name="medium" value="searchMT">Search Tasks</ListBoxItem>
				{/if}
			</ListBox>
		</div>
	</section>
	<div class="p-5">
		<slot />
	</div>
</main>

<style lang="scss">
	main {
		height: calc(100vh - 65px);
	}
</style>
