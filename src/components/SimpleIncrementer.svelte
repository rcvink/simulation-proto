<script>
	export let count;
	export let currency;
	export let label;
	let cost = 1;

	const increment = () => {
		count.update(n => ++n);
		currency.update(n => n - cost);
		++cost;
	}
</script>

<div>
	<button on:click={increment} disabled={cost > $currency}>
		+ Increase {label} (-{cost}λ)
	</button>
</div>