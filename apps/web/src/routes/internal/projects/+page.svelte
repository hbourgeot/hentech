<script lang="ts">
	import type { PageData } from './$types';
	import { ConicGradient } from '@skeletonlabs/skeleton';
	import type { ConicStop } from '@skeletonlabs/skeleton';

	export let data: PageData;

	const conicStops: ConicStop[] = [];

	const colors = {
		Active: 'rgba(0,128,0,1)',
		Inactive: 'rgba(255,0,0,1)',
		Abandoned: 'rgba(128,128,128,1)',
		Finished: 'rgba(0,0,255,1)',
		Pending: 'rgba(255,165,0,1)'
	};
	
    let start = 0;

	// Llena el array de ConicStops
	for (const [state, count] of Object.entries(data.count)) {
		const end = start + (count / data.projects.length) * 100;
		conicStops.push({
			label: state,
			color: colors[state],
			start: start,
			end: end
		});
		start = end;
	}
</script>

<section class="w-full">
    <ConicGradient stops={conicStops} legend class="w-1/4 mx-auto" width="w-1/2">
        <h1 class="text-3xl font-bold text-center">Projects Chart</h1>
    </ConicGradient>
</section>
