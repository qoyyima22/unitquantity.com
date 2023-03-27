<script>
	import UnitConverter from '../../../UnitConverter.svelte';
	import { BASE_UNITS_RAW } from '$lib/math/type/unit/Data.js'
	import { page } from '$app/stores';
  	/** @type {import('./$types').PageData} */
	export let data;
	$: ( { translations, converter } = data)
	$: ( { COMMON: cm, QTS: qt, UNITS: un } = translations)
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

	<article class="prose dark:prose-invert">
		<h1 class="mb-2 mt-2">{un[$page.params.units.split("-to-")[0]]} to {un[$page.params.units.split("-to-")[1]]}</h1>
		<div class="text-sm breadcrumbs py-0">
		  <ul class="pl-0 my-2">
		    <li><a>Home</a></li> 
		    <li><a>Documents</a></li> 
		    <li>Add Document</li>
		  </ul>
		</div>
		<UnitConverter qts={[converter.activeTab]} {translations} {...converter} />
	</article>

<style>
</style>
