<script>
	import { spring } from 'svelte/motion';
	import { UNITS_RAW, BASE_UNITS_RAW, PREFIXES_RAW } from '$lib/math/type/unit/Data.js';
	import { evaluate, unit, createUnit } from '$lib/math';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { toast, unitsToAppend } from '$lib/stores.js'
	import { copyTextToClipboard, cleanNumber } from "$lib/utils.js"
	export let qts = [];
	export let activeTab = browser ? ($page.params.qty || $page.url.searchParams.get('qty').toUpperCase() || "NONE") : "NONE";
	export let activeUnit0 = browser ? $page.url.searchParams.get('unit0') : 0;
	export let activeUnit1 = browser ? $page.url.searchParams.get('unit1') : 1;
	export let model0 = browser ? $page.url.searchParams.get('value0') : 0;
	export let model1 = 0;
	export let translations = {}
	export let units
	let dom0;
	let dom1;
	let lastActiveField = 0
  	let modelBatch= "";
	let resultBatch = ""
	let firstUserInteraction = false
	$: ({ QTS: qt, PREFIXES: pr, UNITS: un } = translations)
	$: units = getUnits();
	$: getUnits = () => {
		let temp;
		if (activeTab === 'NONE') {
			temp = [
				...Object.keys(PREFIXES_RAW.LONG).map((el) => ({ ...PREFIXES_RAW.LONG[el] })),
				...Object.keys(PREFIXES_RAW.SHORT).map((el) => ({ ...PREFIXES_RAW.SHORT[el] }))
			]; //, name: PREFIXES_RAW.LONG[el].name ? PREFIXES_RAW.LONG[el].name : '-'
		} else {
			let allUnits = {...UNITS_RAW(), ...$unitsToAppend}
			temp = activeTab ? Object.keys(allUnits)
				.map((el) => ({ ...allUnits[el] }))
				.filter(
					(el) =>
						el.base.dimensions.join('') ===
						BASE_UNITS_RAW[
							qts[activeTab] || qts.filter((el) => el === activeTab)[0]
						]?.dimensions.join('')
				) : []
		}
		let res = [];
		let res2 = [];
		let checked = [];
		// console.log([...temp],"temp")
		temp.forEach((el) => {
			if (Object.keys(el.prefixes || {}).length > 1) {
				Object.keys(el.prefixes).forEach((el2) => {
					res.push({
						name: `${el2}${el.name}`,
						value: el.prefixes[el2].value * el.value,
						offset: el.offset,
						dName: (pr?.[el2] || un?.[el.name]) ? `${pr[el2] || ""}${un[el.name] || el.name}` : `${el2}${el.name}`
					});
				});
			} else if(activeTab === "NONE") {
				res.push({...el, dName: pr?.[el.name] || el.name});
			} else {
				res.push({...el, dName: un?.[el.name] || el.name});
			}
		});
		// console.log([...res],"res")
		res.forEach((el) => {
			if (!checked.includes(`${el.value}-${el.offset}`)) {
				el.alternativeNames = res
					.filter(
						(el2) => el.value === el2.value && el.offset === el2.offset && el.name !== el2.name
					)
					.map((el3) => el3.name);
				res2.push(el);
				checked.push(`${el.value}-${el.offset}`);
			}
		});
		// return temp
		// console.log([...res2],"res2")
		let result = res2.length ? res2 : res
		if($page.params.units) {
				let a = result.find(el => el.name === $page.params.units.split("-to-")[0].replace("-",""))
				let b = result.find(el => el.name === $page.params.units.split("-to-")[1].replace("-",""))
				result = result.filter(el => el.name === a.name || el.name === b.name || el.value === a.value || el.value === b.value)
			}
		return result;
	};
	$: {
		if (!units.find((el) => el.name === activeUnit0)) activeUnit0 = units?.[0]?.name || 0;
	}
	$: {
		if (!units.find((el) => el.name === activeUnit1)) activeUnit1 = units?.[1]?.name || 1;
	}
	$: {
		if (units.length && (typeof activeUnit0 === 'number' || typeof activeUnit1 === 'number')) {
			if (typeof activeUnit0 === 'number') {
				activeUnit0 = units[activeUnit0].name;
			}
			if (typeof activeUnit1 === 'number') {
				activeUnit1 = units[activeUnit1].name;
			}
		} else if (typeof activeUnit0 === 'string' && dom0 && dom1) {
			if (lastActiveField) {
				onInput(1);
			} else {
				onInput(0);
			}
		}
	}
	$: {
		if (
			firstUserInteraction && 
			activeTab &&
			typeof activeTab === 'string' &&
			typeof activeUnit0 === 'string' &&
			typeof activeUnit1 === 'string'
		) {
			if (browser) {
				if(!$page.params.qty) {
					$page.url.searchParams.set('qty', activeTab.toLowerCase());
				}
				if(!$page.params.units) {
					$page.url.searchParams.set('unit0', activeUnit0);
					$page.url.searchParams.set('unit1', activeUnit1);
				}
				$page.url.searchParams.set('value0', model0);
				goto(`?${$page.url.searchParams.toString()}`, {
					replaceState: true,
					keepFocus: true,
					noScroll: true
				});
			}
		}
	}
	let onInput = (i) => {
		if (!i) {
			model0 = evaluate((model0 || 0).toString());
			dom0.value = evaluate((model0 || 0).toString());
		} else {
			model1 = evaluate((model1 || 0).toString());
			dom1.value = evaluate((model1 || 0).toString());
		}
		if (!i)
			model1 = 
			// format(
				cleanNumber(unit(model0, activeTab === 'NONE' ? `${activeUnit0}meter` : activeUnit0).toNumber(
				activeTab === 'NONE' ? `${activeUnit1}meter` : activeUnit1
			))
			// , {fraction: "decimal"});
		else
			model0 = 
			// format(
				cleanNumber(unit(model1, activeTab === 'NONE' ? `${activeUnit1}meter` : activeUnit1).toNumber(
				activeTab === 'NONE' ? `${activeUnit0}meter` : activeUnit0
			))
			// , {fraction: "decimal"});
	};
	let copyClip = (v) => {
		setFirstUserInteraction()
		let success = copyTextToClipboard(v)
		if(success) $toast = {
			text: "Copied!",
			color: "success"
		}
	}
	let batchConvert = () => {
		setFirstUserInteraction()
		let arr = modelBatch.split("\n")
		let temp = ""
		for(let i = 0; i < arr.length; i++) {
			if(!isNaN(Number(arr[i]))) {
				temp += unit(arr[i], activeTab === 'NONE' ? `${activeUnit0}meter` : activeUnit0).toNumber(
					activeTab === 'NONE' ? `${activeUnit1}meter` : activeUnit1
					) + '\n'
			} else {
				temp += "Invalid number input\n"
			}
		}
		resultBatch = temp
	}
	let setFirstUserInteraction = (cb) => {
		if(!firstUserInteraction) firstUserInteraction = true
		cb?.()
	}
	let count = 0;
	const displayed_count = spring();
	$: displayed_count.set(count);
	// $: offset = modulo($displayed_count, 1);
</script>
<div>
	{#if qts.length > 1}
	<div class="tabs bg-base-300 flex flex-nowrap overflow-x-auto">
		{#each qts as tab, index}
			<button
				class="tab tab-lifted whitespace-nowrap"
				class:tab-active={activeTab === index || activeTab === tab}
				on:click={() => setFirstUserInteraction(() => activeTab = tab)}
			>
				{qt?.[tab] || tab}
			</button>
		{/each}
	</div>
	{/if}
	<div class="flex bg-base-200">
		<div class="flex-1 mt-2 flex">
			<input
				type="number"
				bind:value={model0}
				bind:this={dom0}
				on:focus={() => (lastActiveField = 0)}
				on:input={() => setFirstUserInteraction(() => onInput(0))}
				placeholder="Type here"
				class="block input input-bordered input-sm w-11/12 mx-0 px-1 rounded-none h-8 min-h-8"
			/>
			<button class="btn btn-square w-6 h-8 min-h-8 btn-outline btn-info rounded-none" title="Copy value" on:click={() => copyClip(model0)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
				</svg>
			</button>
		</div>
		<div class="flex-1 mt-2 flex">
			<input
				type="number"
				bind:value={model1}
				bind:this={dom1}
				on:focus={() => (lastActiveField = 1)}
				on:input={() => setFirstUserInteraction(() => onInput(1))}
				placeholder="Type here"
				class="block input input-bordered input-sm w-11/12 mx-0 px-1 rounded-none h-8 min-h-8"
			/>
			<button class="btn btn-square w-6 h-8 min-h-8 btn-outline btn-info rounded-none" title="Copy value" on:click={() => copyClip(model1)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
				</svg>
			</button>
		</div>
	</div>
	<div class="flex bg-base-200">
		<div
			class="collapse w-full collapse-arrow border border-base-800 bg-primary-content mx-0 my-0.5"
		>
			<input type="checkbox" class="h-7 min-h-0" />
			<div class="collapse-title text-sm h-7 min-h-0 py-0 px-1 flex items-center">
				<span>Batch convert</span>
			</div>
			<div class="collapse-content">
				<div class="flex justify-between mt-2 items-center">
					<textarea bind:value={modelBatch} class="h-40 leading-snug textarea textarea-bordered w-10/12 mr-2 rounded-none" placeholder={"10\n5\n142\n..."} />
					<button class="btn btn-square w-10 btn-outline btn-info rounded-none" title="Batch convert" on:click={batchConvert}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" />
						</svg>
					</button>
					<div class="h-40 w-full relative">
						<textarea bind:value={resultBatch} readonly class="h-40 leading-snug textarea textarea-bordered w-full ml-2 rounded-none" placeholder="Result will be shown here" />
						<button class="btn btn-square h-full absolute top-0 -right-2 w-8 btn-outline btn-info ml-2 rounded-none" title="Copy result" on:click={() => copyClip(resultBatch)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="flex bg-base-200">
		<ul class="flex-1 block menu menu-compact p-0.5 rounded-box max-h-60 overflow-y-auto my-0 rounded-none">
			{#each units as unit, index}
				<li class="m-0">
					<button
						class="p-1 flex justify-between"
						class:active={index === activeUnit0 || unit.name === activeUnit0}
						on:click={() => setFirstUserInteraction(() => (activeUnit0 = unit.name))}
						>
						<div class="text-left">
							{unit.dName || '-'}
						</div>
						<div class="flex justify-end flex-wrap">
							{#each unit.alternativeNames as aName}
								<div class="badge badge-success badge-xs mt-0.5">
									{aName}
								</div>
							{/each}
						</div>
					</button>
				</li>
			{/each}
		</ul>
		<ul class="flex-1 block menu menu-compact p-0.5 rounded-box max-h-60 overflow-y-auto my-0 rounded-none">
			{#each units as unit, index}
				<li class="m-0">
					<button
						class="p-1 flex justify-between"
						class:active={index === activeUnit1 || unit.name === activeUnit1}
						on:click={() => setFirstUserInteraction(() => (activeUnit1 = unit.name))}
						>
						<div class="text-left">
							{unit.dName || '-'}
						</div>
						<div class="flex justify-end flex-wrap">
							{#each unit.alternativeNames as aName}
								<div class="badge badge-success badge-xs mt-0.5">
									{aName}
								</div>
							{/each}
						</div>
					</button>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
</style>
