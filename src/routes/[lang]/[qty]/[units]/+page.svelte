<script>
	import UnitConverter from '../../../UnitConverter.svelte';
	import Breadcrumbs from '../../../Breadcrumbs.svelte';
	import { page } from '$app/stores';
  	/** @type {import('./$types').PageData} */
	export let data;
	$: ( { translations, converter } = data)
	$: ( { COMMON: cm, QTS: qt, UNITS: un, PREFIXES: pr } = translations)
	$: genTitle = () => {
		let from = $page.params.units.split("-to-")[0]
		let fromPr = from.split("-")[0]
		let fromV = from.split("-")[1]
		let to = $page.params.units.split("-to-")[1]
		let toPr = to.split("-")[0]
		let toV = to.split("-")[1]
		return `${(un[fromV] || un[from]).includes("{pr}") ? "" : (pr[fromPr] || "")}${(un[fromV] || un[from]).replace("{pr}", (pr[fromPr] || ""))} to ${(un[toV] || un[to]).includes("{pr}") ? "" : (pr[toPr] || "")}${(un[toV] || un[to]).replace("{pr}", (pr[toPr] || ""))}`
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

	<article class="prose dark:prose-invert prose-sm">
		<h1 class="mb-2 mt-2">{genTitle()}</h1>
		<Breadcrumbs wordings={["Home", qt[$page.params.qty.toUpperCase()],genTitle()]} />
		<!-- <div class="text-sm breadcrumbs py-0">
		  <ul class="pl-0 my-2">
		    <li><a>Home</a></li> 
		    <li><a>Documents</a></li> 
		    <li>Add Document</li>
		  </ul>
		</div> -->
		<UnitConverter qts={[converter.activeTab]} {translations} {...converter} />
	</article>

<style>
</style>
