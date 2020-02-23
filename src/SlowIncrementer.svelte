<script>
	export let count = 0;
	export let time = 0;
	export let label;

	let promise = slow(() => { }, time);

	function onClick() {
		promise = slow(increment, time);
	}
	
	async function slow(fn, ms) {
		await timeout(ms);
		fn(ms);
	}

	function timeout(ms) {
		return new Promise(resolve => 
			setTimeout(resolve, ms));
	}

	function increment() {
		count.update(n => n + 1);
	}
</script>

<div>
	<button on:click={onClick}>
		+ Add {label}
	</button>
</div>