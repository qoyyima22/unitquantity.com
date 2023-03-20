<script>
	import Shell from './Shell.svelte';
  	import { toast, unitsToAppend } from '$lib/stores.js'
	import './styles.css';
	export let data
	let { unitsToAppend: uta } = data.converter
	$unitsToAppend = uta
	// $: console.log(unitsToAppend, "KKOKO")
	$: {
		if($toast.text) {
			setTimeout(() => {
				$toast = {...$toast, text: ""}
			}, 2000);
		}
	}
</script>

<div class="app">
	<!-- dir="rtl" -->
	{#if $toast.text}
	<div class="toast toast-top toast-center z-50">
		<div class={`alert alert-success py-2`}>
			<div>
			  <span>{$toast.text}</span>
			</div>
		</div>
	</div>
	{/if}
	<Shell>
		<main>
			<slot />
		</main>
	
		<!-- <footer>
			<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
		</footer> -->
	</Shell>
</div>

<style>
</style>
