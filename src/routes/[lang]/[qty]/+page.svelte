<script>
	import UnitConverter from '../../UnitConverter.svelte';
	import Breadcrumbs from '../../Breadcrumbs.svelte';
	import { page } from '$app/stores';
  	/** @type {import('./$types').PageData} */
	export let data;
	$: ( { translations, converter, links } = data)
	$: ( { COMMON: cm, QTS: qt } = translations)
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

	<article class="prose dark:prose-invert prose-sm">
		<h1 class="mb-2 mt-2">{qt[$page.params.qty.toUpperCase()]}</h1>
		<Breadcrumbs wordings={["Home", qt[$page.params.qty.toUpperCase()]]} />
		<!-- <div class="text-sm breadcrumbs py-0">
		  <ul class="pl-0 my-2">
		    <li><a>Home</a></li> 
		    <li><a>Documents</a></li> 
		    <li>Add Document</li>
		  </ul>
		</div> -->
		<UnitConverter qts={[converter.activeTab]} {translations} {...converter} />
		<div>
			{#each links as link}
				<div>
					<a href={link.v}>
						{link.w}
					</a>
				</div>
			{/each}
		</div>
	</article>

<style>
</style>
