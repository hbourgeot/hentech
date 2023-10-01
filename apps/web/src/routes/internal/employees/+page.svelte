<script lang="ts">
	import { groupBy } from '$lib/utils/group';
	import type { PageData } from './$types';
	import { ConicGradient } from '@skeletonlabs/skeleton';
	import type { ConicStop } from '@skeletonlabs/skeleton';

	export let data: PageData;

	const conicStops: ConicStop[] = [];
	
    let start = 0;

	// Llena el array de ConicStops
	for (const [state, count] of Object.entries(data.roleCount)) {
		const end = start + (count / data.employees.length) * 100;
		conicStops.push({
			label: state,
			color: `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`,
			start: start,
			end: end
		});
		start = end;
	}
</script>

<section class="w-full">
    <ConicGradient stops={conicStops} legend class="w-1/4 mx-auto" width="w-1/2">
        <h1 class="text-3xl font-bold text-center">Employees Chart</h1>
    </ConicGradient>
</section>
