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
	$: secsRemaining = getSecsRemaining(end, now);
	$: remainingLabel = getRemainingLabel(secsRemaining);

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
			end = getEnd();
			promise = think(
				time,
				[ 
					() => isThinking = false,
					increment,
				]);
		}
	}

	const getEnd = () => 
		new Date(new Date().getTime() + time);

	const getSecsRemaining = (endTime, nowTime) =>
		Math.ceil((endTime - nowTime.getTime()) / 1000);

	const getRemainingLabel = (secs) =>
		secs == 1 ? 'sec remains' : 'secs remain';

	const think = async (ms, fns) => {
		await timeout(ms);
		fns.forEach(fn => fn());
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
		Thinking... {secsRemaining} {remainingLabel} (cancel) 
	{:then}
		+ Add {label}
	{:catch}
		+ Add {label}
	{/await}
</button>