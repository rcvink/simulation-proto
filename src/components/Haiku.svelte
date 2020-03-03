<script>
	export let text;
	const linesCount = 3;
	const lines = text.split(`\n`);
</script>

<style>
ul {
	list-style-type: none;
}
</style>

<ul>
	{#each lines as line}	
	<li>
		{line}
	</li>
	{/each}
</ul>