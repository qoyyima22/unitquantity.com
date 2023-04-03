<script>
	import Counter from '../Counter.svelte';
	import UnitConverter from '../UnitConverter.svelte';
	import { BASE_UNITS_RAW } from '$lib/math/type/unit/Data.js'
  	/** @type {import('./$types').PageData} */
	export let data;
	$: ( { translations, converter } = data)
	$: ( { COMMON: cm } = translations)
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

	<article class="prose dark:prose-invert prose-sm">
		<h1 class="mb-2 mt-2">{cm['h1Lv0']}</h1>
		<div class="text-sm breadcrumbs py-0">
		  <ul class="pl-0 my-2">
		    <li><a>Home</a></li> 
		    <li><a>Documents</a></li> 
		    <li>Add Document</li>
		  </ul>
		</div>
		<!-- <Counter /> -->
		<UnitConverter qts={Object.keys(BASE_UNITS_RAW)} {translations} {...converter} />
	</article>

<style>
</style>
