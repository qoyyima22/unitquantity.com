<script>
	import { evaluate, unit, number } from '$lib/math';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { copyTextToClipboard, cleanNumber } from "$lib/utils.js"
	import Icon from '@iconify/svelte';
	import { UNITS_RAW } from '$lib/math/type/unit/Data.js';
	import { toast, unitsToAppend } from '$lib/stores.js'

	let instantConvertModel = '';
	let pageDataTr = $page.data.translations
	$: searchResult = {}
	let onInstantConvert = (e) => {
		if (e.code === 'Enter' || e.code === "Tab" || e.key === 'Enter' ) {
			let evalRes = evaluate(instantConvertModel);
			let init = instantConvertModel.split(' to ')[0];
			let out = instantConvertModel.split(' to ')[1];
			let unitInfo = unit(init)
			let unitInfoOut = unit(out)
			let unitRes = unitInfo.toNumber(out);
			searchResult = {
				dimensions: unitInfo?.dimensions,
				qty: unitInfo?.units?.[0]?.unit?.base?.key,
				qtyWord: pageDataTr?.QTS[unitInfo?.units?.[0]?.unit?.base?.key],
				val: unitRes,
				initVal: init.replace(/[^0-9]/g,''),
				from: init.replace(/[^A-Z]/gi,''),
				baseFrom: unitInfo?.units?.[0]?.unit,
				prefixFrom: unitInfo?.units?.[0]?.prefix,
				fromWord: pageDataTr?.UNITS?.[init.replace(/[^A-Z]/gi,'')],
				to: out,
				toWord: pageDataTr?.UNITS?.[out],
				baseTo: unitInfoOut?.units?.[0]?.unit,
				prefixTo: unitInfoOut?.units?.[0]?.prefix,
			}
		}
	};
	$: getLangUrl = (lng) => {
	  return `${$page.params.lang? $page.url.pathname.replace($page.params.lang,lng) : `/${lng}`}${browser ? $page.url.search : ""}`
	}
	$: createLink = () => {
	  let { qty,qtyWord,val,initVal,from,baseFrom,prefixFrom,fromWord,to,toWord,baseTo,prefixTo, } = searchResult
	  let link = `/${$page.params.lang}/${qty.toLowerCase()}/`
	  let lv3 = `${prefixFrom ? `${prefixFrom}-${baseFrom}` : from}-to-${prefixTo ? `${prefixTo}-${baseTo}` : to}`
      let units = {...UNITS_RAW(), ...$unitsToAppend}
      let arr = Object.keys(units)
      let f = arr.find(el => units[el].base.dimensions.join("") === baseFrom.dimensions.join("") && units[el].value === number(baseFrom.value) && units[el].offset === baseFrom.offset)
      let fps = units[f]?.prefixes || {name: '', value: 1, scientific: true}
      let fp = Object.keys(fps).find(el => fps[el].value === prefixFrom.value)
      let t = arr.find(el => units[el].base.dimensions.join("") === baseTo.dimensions.join("") && units[el].value === number(baseTo.value) && units[el].offset === baseTo.offset)
      let tps = units[t]?.prefixes || {name: '', value: 1, scientific: true}
      let tp = Object.keys(tps).find(el => tps[el].value === prefixTo.value)
	  lv3 = `${fp ? `${fp}-${f}` : f}-to-${tp ? `${tp}-${t}` : t}`
	  return link+lv3
	}
	let copyClip = (v) => {
		let success = copyTextToClipboard(v)
		if(success) $toast = {
			text: "Copied!",
			color: "success"
		}
	}
</script>

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<header class="w-full navbar bg-base-300 min-h-12">
			<div class="flex-none">
				<!--lg:hidden-->
				<label for="my-drawer-3" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
				</label>
			</div>
			<!-- <div class="flex-1 px-2 mx-2"></div> -->
			<div class="flex-none lg:block w-10/12 md:w-11/12">
				<!-- hidden -->
				<div class="form-control w-full">
					<div class="dropdown dropdown-end w-full">
						<label tabindex="-1" class="btn btn-square btn-ghost w-full">
							<!-- <svg class="inline-block w-6 h-6 stroke-current" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
								<g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g>
							</svg> -->
							<input
							bind:value={instantConvertModel}
							type="search"
							placeholder="Instant Convert, eg: 500 g/cm^3 to kg/cm^3"
							on:keydown={onInstantConvert}
							class="input input-bordered w-full h-10"
						/>
						</label>
						{#if searchResult.from}
						<div tabindex="-1" class="dropdown-content menu p-2 shadow bg-base-100 w-full shadow-xl">
						  <!-- <li><a>Item 1</a></li>
						  <li><a>Item 2</a></li> -->
							<article class="prose dark:prose-invert prose-h3:text-green-400 prose-h5:text-gray-600">
								{#if searchResult.initVal && searchResult.val}
									<div>
										<h3 class="my-1">{ cleanNumber(searchResult.val) }  { searchResult.to } 
											<span tabindex="-2" class="hover:text-green-600 hover:cursor-pointer" on:keydown={() => {}} on:click={() => copyClip(searchResult.val)} title="Copy value" >
												<Icon icon="material-symbols:content-copy-outline" />
											</span>
										</h3>
									</div>
								{/if}
								{#if searchResult.dimensions.join("") === searchResult.baseFrom.dimensions.join("") && searchResult.from && searchResult.to}
									<div>
										<a href={createLink()}>{ searchResult.from } {"->"} { searchResult.to } <Icon icon="material-symbols:open-in-new-rounded" /></a>
									</div>
								{/if}
								{#if searchResult.dimensions.join("") === searchResult.baseFrom.dimensions.join("") && searchResult.qty && searchResult.qtyWord}
									<div>
										<a href={`/${$page.params.lang}/${searchResult.qty.toLowerCase()}`}>{ searchResult.qtyWord } <Icon icon="material-symbols:open-in-new-rounded" /></a>
									</div>
								{/if}
								<!-- {JSON.stringify(searchResult)} -->
							</article>
						</div>
						{/if}
					  </div>
					<!-- <input
						bind:value={instantConvertModel}
						type="text"
						placeholder="Instant Convert, eg: 500 g/cm^3 to kg/cm^3"
						on:keydown={onInstantConvert}
						class="input input-bordered w-full h-10"
					/> -->
				</div>
			</div>
			<!-- <div class="dropdown dropdown-end">
				<label tabindex="0" class="btn btn-square btn-ghost">
					<svg class="inline-block w-6 h-6 stroke-current" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
						<g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g>
					</svg>
				</label>
				<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
				  <li><a>Item 1</a></li>
				  <li><a>Item 2</a></li>
				</ul>
			  </div> -->
		</header>
		<!-- Page content here -->
		<section class="w-full px-2 sm:px-0 sm:w-4/5 lg:w-1/2 mx-auto">
			<slot />
		</section>		
		<footer class="footer p-10 bg-neutral text-neutral-content">
			<div>
				<svg
					width="50"
					height="50"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					fill-rule="evenodd"
					clip-rule="evenodd"
					class="fill-current"
					><path
						d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
					/></svg
				>
				<p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
			</div>
			<div>
				<span class="footer-title">Social</span>
				<div class="grid grid-flow-col gap-4">
					<a
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							class="fill-current"
							><path
								d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
							/></svg
						></a
					>
					<a
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							class="fill-current"
							><path
								d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
							/></svg
						></a
					>
					<a
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							class="fill-current"
							><path
								d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
							/></svg
						></a
					>
					<a href={getLangUrl('ar')} data-sveltekit-reload>ARABIC |</a>
					<a href={getLangUrl('id')} data-sveltekit-reload>BAHASA |</a>
					<a href={getLangUrl('en')} data-sveltekit-reload>ENGLISH |</a>
				</div>
			</div>
		</footer>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu p-4 w-80 bg-base-100">
			{#each Object.keys(pageDataTr?.QTS || {}) as qty, i}
				<li><a href={`/${$page.params.lang}/${qty.toLowerCase()}`}>{pageDataTr?.QTS[qty]}</a></li>
			{/each}
		</ul>
	</div>
</div>

<style>
	/* header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	} */
</style>
