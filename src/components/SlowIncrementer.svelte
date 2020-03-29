<script>
	import { onMount } from 'svelte';

	export let count;
	export let label;
	export let time;

	let isThinking = false;
	let promise;
	let cancel;
	let end;
	let now = new Date();
	$: timeLeft = (end - now.getTime());

	onMount(() => {
		const interval = setInterval(() => {
			now = new Date();
		}, 1);

		return () => {
			clearInterval(interval);
		};
	});

	const onClick = () => {
		if (isThinking) {
			cancel();
			isThinking = false;
		} else {
			isThinking = true;
			end = new Date(new Date().getTime() + time);
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

<style>
button {
	min-width: 100%;
}
</style>

<button on:click={onClick}>
	{#await promise}
		Thinking... {Math.round(timeLeft / 1000)} secs remain (cancel) 
	{:then}
		+ Add {label}
	{:catch}
		+ Add {label}
	{/await}
</button>