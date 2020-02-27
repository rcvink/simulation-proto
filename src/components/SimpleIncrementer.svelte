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
	<button on:click={increment} disabled={cost > $currency}>
		+ Increase {label} (-{cost}λ)
	</button>
</div>