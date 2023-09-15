<script lang="ts">
	import Icon from '@iconify/svelte';
	import { AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton';

	let currentTile: number = 0;
</script>

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
			<Icon icon="material-symbols:badge-outline-rounded" height="40" class="mx-auto"/>
		</svelte:fragment>
		<span>Employees</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
		<svelte:fragment slot="lead">
			<Icon icon="material-symbols:bookmark-add-outline" height="40" class="mx-auto"/>
		</svelte:fragment>
		<span>Tasks</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={3} title="tile-3">
		<svelte:fragment slot="lead">
			<Icon icon="material-symbols:assignment-add-outline-rounded" height="40" class="mx-auto"/>
		</svelte:fragment>
		<span>My Projects</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={4} title="tile-3">
		<svelte:fragment slot="lead">
			<Icon icon="material-symbols:extension-outline" height="40" class="mx-auto"/>
		</svelte:fragment>
		<span>My Tasks</span>
	</AppRailTile>
	<!-- --- -->
	<svelte:fragment slot="trail">
		<AppRailTile title="account" bind:group={currentTile} value={5} name="account">
			<svelte:fragment slot="lead">
				<Icon icon="material-symbols:person" height="40" class="mx-auto"/>
			</svelte:fragment>
			<span>Me</span>
		</AppRailTile>
	</svelte:fragment>
</AppRail>
