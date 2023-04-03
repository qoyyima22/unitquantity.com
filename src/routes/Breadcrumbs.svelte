<script>
	import { page } from '$app/stores';
  export let wordings = []
	$: ({ qty, lang, units } = $page.params);
</script>

<div class="text-sm breadcrumbs py-0">
	{#if qty}
		<ul class="pl-0 my-2">
			<li>
        <a href={`/${lang}`}>{wordings[0]}</a>
      </li>
      {#if qty}
        <li>
          {#if qty && units}
            <a href={`/${lang}/${qty}`}>
              {wordings[1]}
            </a>
            {:else}
            {wordings[1]}
          {/if}
        </li>
        {#if units}
          <li>{wordings[2]}</li>
        {/if}
      {/if}
		</ul>
	{/if}
</div>
