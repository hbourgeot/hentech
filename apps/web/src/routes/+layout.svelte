<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import titleImg from "$lib/assets/title/base-DefaultLogo-100px.png"
	import titleImgInv from "$lib/assets/title/monoWhite-DefaultLogo-200px.png"
	import { page } from '$app/stores';

	let darkMode: boolean = true;
	let img = ""
	$: img = darkMode ? titleImg : titleImgInv
</script>

<!-- App Shell -->
<AppShell regionPage="dark:bg-gray-800 bg-gray-50">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<a href="/"><img src="{img}" alt="HenTech Logo" class="w-1/3"></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a href="/login" class="{$page.url.pathname.includes('internal') ? 'hidden' : ''} btn btn-sm variant-ghost-surface">Login</a>

				<a href="/logout" class="{!$page.url.pathname.includes('internal') ? 'hidden' : ''} btn btn-sm variant-ghost-surface">Logout</a>
				<LightSwitch on:click={() => darkMode = !darkMode}/>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot/>
</AppShell>
