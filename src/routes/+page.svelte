<script>
	import Counter from './Counter.svelte';
	import UnitConverter from './UnitConverter.svelte';
	import { unit } from '$lib/math/index.js'
	import { BASE_UNITS_RAW } from '$lib/math/type/unit/Data.js'
	let a = unit(45,'cm')
	// console.log(z, "ini unit")
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-full sm:w-4/5 lg:w-1/2 mx-auto">
	<span>{a.to('mm')}</span>
	<Counter />
	<UnitConverter qts={Object.keys(BASE_UNITS_RAW)} />
</section>

<style>
</style>
