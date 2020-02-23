<script>
	export let count = 0;
	export let label;

	function increment() {
		count.update(n => n + 1);
	}
</script>

<div>
	<button on:click={increment}>
		+ Add {label}
	</button>
</div>