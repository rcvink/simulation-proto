<script>
	export let count;
	export let label;
	export let cpuCount;

	let disabled = false;
	let promise;

	const onClick = () => {
		disabled = true;
		promise = slow(increment, enable, getRate());
	}
	
	const slow = async (fn1, fn2, ms) => {
		await timeout(ms);
		fn1(ms);
		fn2();
	}

	const timeout = (ms) =>
		new Promise(resolve => 
			setTimeout(resolve, ms)); 

	const increment = () => 
		count.update(n => n + 1);

	const enable = () => 
		disabled = false;

	const getRate = () =>
		1000 / cpuCount;

</script>

<div>
	<button on:click={onClick} disabled={disabled}>
		{#await promise}
			Thinking...
		{:then}
			+ Add {label}
		{/await}
	</button>
</div>