<script>
	export let count;
	export let label;
	export let time;

	let isThinking = false;
	let promise;

	const onClick = () => {
		if (isThinking) {
			console.log(isThinking);
		} else {
			promise = think(
				increment, 
				() => isThinking = false, 
				time, 
				() => isThinking = false);
		}
	}

	const stopThink = async (fn) => {
		await promise.resolve()
	}
	
	const think = async (afterFn1, afterFn2, ms, cancelFn) => {
		await timeout(ms, cancelFn);
		afterFn1(ms);
		afterFn2();
	}

	const timeout = (ms, cancelFn) =>
		new Promise(
			resolve => setTimeout(resolve, ms), 
			reject => cancelFn());

	const increment = () => 
		count.update(n => n + 1);

	const setThinkingFalse = () => 
		isThinking = false;
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