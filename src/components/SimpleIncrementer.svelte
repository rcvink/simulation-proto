<script>
	export let count;
	export let currency;
	export let label;
	let cost = 1;

	function increment() {
		count.update(n => n + 1);
		currency.update(n => n - cost);
		++cost;
	}
</script>

<div>
	{#if ($currency >= cost)}
		<button on:click={increment}>
			+ Increase {label} (-{cost}λ)
		</button>
	{:else}
		<button disabled>
			+ Increase {label} (-{cost}λ)
		</button>
	{/if}
</div>