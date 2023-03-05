<script>
	import Counter from '../Counter.svelte';
	import UnitConverter from '../UnitConverter.svelte';
	import { BASE_UNITS_RAW } from '$lib/math/type/unit/Data.js'
  	/** @type {import('./$types').PageData} */
	export let data;
	$: ( { translations, converter } = data)
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-full sm:w-4/5 lg:w-1/2 mx-auto">
	<Counter />
	<UnitConverter qts={Object.keys(BASE_UNITS_RAW)} {translations} {...converter} />
</section>

<style>
</style>
