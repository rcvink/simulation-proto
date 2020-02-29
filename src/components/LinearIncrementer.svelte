<script>
    export let isEnabled;
    export let enabledText;
    export let disabledText;
    export let count;
    export let rate;
    export let incrementBy;
    export let maxCount;
    
    function onClick() {
        isEnabled.update(n => n = !n);
        onEnable();
    }

    async function onEnable() {
        while (shouldIncrement()) {
            await timeout(1000 / rate);
            count.update(n => n + incrementBy);
        }
    }

    function timeout(ms) {
		return new Promise(resolve => 
			setTimeout(resolve, ms));
    }

    function shouldIncrement() {
        return $isEnabled && $count + incrementBy <= $maxCount; 
    }

    maxCount.subscribe(() => {
        if (shouldIncrement()) {
            onEnable();
        }
    });

    count.subscribe((s, s2) => {
        console.log("s", s, "s2", s2);
       if (shouldIncrement()) {
            onEnable();
        }
    });
</script>

<div>
    <button on:click={onClick}>
        {#if $isEnabled}
            {enabledText}
        {:else}
            {disabledText}
        {/if}
    </button>
</div>