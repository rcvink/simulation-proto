<script>
    export let isEnabled;
    export let enabledText;
    export let disabledText;
    export let count;
    export let rate;
    export let incrementBy;
    
    function enableOrDisable() {
        isEnabled.update(n => n = !n);
        if ($isEnabled) {
            onEnable();    
        }
    }

    async function onEnable() {
        while ($isEnabled) {
            await timeout(1000 / rate);
            count.update(n => n + incrementBy);
        }
    }

    function timeout(ms) {
		return new Promise(resolve => 
			setTimeout(resolve, ms));
	}
</script>

<div>
    <button on:click={enableOrDisable}>
        {#if $isEnabled}
            {enabledText}
        {:else}
            {disabledText}
        {/if}
    </button>
</div>