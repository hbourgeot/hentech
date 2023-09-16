<script lang="ts">
	import { base } from '$app/paths';
	import Icon from '@iconify/svelte';
	import {
		AppRail,
		AppRailAnchor,
		AppRailTile,
		ListBox,
		ListBoxItem
	} from '@skeletonlabs/skeleton';

	let currentTile: number = 0;
	let valueSingle = 'resumeP';

	let allLinks: { base: string; children: { name: string; href: string }[] }[] = [
		{
			base: '/projects',
			children: [
				{ name: 'Projects Resume', href: '' },
				{ name: 'Create project', href: '/create' },
				{ name: 'Search projects', href: '/search' }
			]
		},
		{
			base: '/employees',
			children: [
				{ name: 'Employees Resume', href: '' },
				{ name: 'Register Employee', href: '/register' },
				{ name: 'Search Employees', href: '/search' }
			]
		},
		{
			base: '/tasks',
			children: [
				{ name: 'Tasks Resume', href: '' },
				{ name: 'Add Task', href: '/add' },
				{ name: 'Search Tasks', href: '/search' }
			]
		},
		{
			base: '/user/projects',
			children: [
				{ name: 'Projects resume', href: '' },
				{ name: 'Search projects', href: '/search' }
			]
		},
		{
			base: '/user/tasks',
			children: [
				{ name: 'Tasks resume', href: '' },
				{ name: 'Search tasks', href: '/search' }
			]
		}
	];

	let links: { base: string; children: { name: string; href: string }[] };
	$: links = allLinks[currentTile];
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
				<AppRailAnchor
					class="cursor-pointer"
					href="/internal/user"
					target="_blank"
					title="Account"
					bind:group={currentTile}
					value={5}
					name="account"
				>
					<svelte:fragment slot="lead">
						<Icon icon="material-symbols:person" height="40" class="mx-auto" />
					</svelte:fragment>
					<span>Me</span>
				</AppRailAnchor>
			</svelte:fragment>
		</AppRail>
		<div class="py-2 w-2/3">
			<nav class="list-nav">
				<ul>
					{#each links.children as link}
						<li>
							<a href="/internal{links.base}{link.href}">
								<span class="flex-auto">{link.name}</span>
							</a>
						</li>
					{/each}
					<!-- ... -->
				</ul>
			</nav>
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
