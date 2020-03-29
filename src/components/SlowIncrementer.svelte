<script>
	export let count;
	export let label;
	export let time;

	let isThinking = false;
	let promise;
	let cancel;

	const onClick = () => {
		if (isThinking) {
			cancel();
			isThinking = false;
		} else {
			isThinking = true;
			promise = think(
				() => isThinking = false,
				increment,
				time);
		}
	}


	const think = async (fn1, fn2, ms) => {
		await timeout(ms);
		fn1();
		fn2();
	}

	const timeout = (ms) =>
		new Promise((resolve, reject) => {
			cancel = reject;
			setTimeout(resolve, ms);
		});

	const increment = () => 
		count.update(n => n + 1);
</script>

<div>
	<button on:click={onClick}>
		{#await promise}
			Thinking... (cancel)
		{:then}
			+ Add {label}
		{:catch}
			+ Add {label}
		{/await}
	</button>
</div>