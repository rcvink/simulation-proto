<script>
	export let count;
	export let label;
	export let time;

	let isThinking = false;
	let promise;

	const onClick = () => {
		if (isThinking) {
			isThinking = false;
			promise = null;
		} else {
			promise = think(
				() => isThinking = true,
				() => isThinking = false,
				increment,
				time);
		}
	}


	const think = async (beforeFn, afterFn1, afterFn2, ms) => {
		beforeFn();
		await timeout(ms);
		afterFn1();
		afterFn2();
	}

	const timeout = (ms) =>
		new Promise(resolve => setTimeout(resolve, ms));

	const increment = () => 
		count.update(n => n + 1);
</script>

<div>
	<button on:click={onClick}>
		{#await promise}
			Thinking... (cancel)
		{:then}
			+ Add {label}
		{/await}
	</button>
</div>