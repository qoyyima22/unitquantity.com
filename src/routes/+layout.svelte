<script>
	import Shell from './Shell.svelte';
  	import { toast } from '$lib/stores.js'
	import './styles.css';

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
