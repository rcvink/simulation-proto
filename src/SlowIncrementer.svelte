<script>
	export let count = 0;
	export let time = 0;
	export let label;

	let disabled = false;
	let promise = slow(() => { }, () => { }, 0);

	function onClick() {
		disabled = true;
		promise = slow(increment, enable, time);
	}
	
	async function slow(fn1, fn2, ms) {
		await timeout(ms);
		fn1(ms);
		fn2();
	}

	function timeout(ms) {
		return new Promise(resolve => 
			setTimeout(resolve, ms));
	}

	function increment() {
		count.update(n => n + 1);
	}

	function enable() {
		disabled = false;
	}

</script>

<div>
	<button on:click={onClick} disabled="{disabled}">
		{#await promise}
			Thinking...
		{:then}
		+ Add {label}
		{/await}
	</button>
</div>