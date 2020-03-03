<script>
  export let isEnabled;
  export let enabledText;
  export let disabledText;
  export let count;
  export let rate;
  export let incrementBy;
  export let maxCount;
  let interval;

  const onClick = () => 
    isEnabled.update(n => !n);

  const increment = () => 
    count.update(n => Math.min(n + incrementBy, $maxCount));

  isEnabled.subscribe(enabled => {
    if (enabled) {
      interval = setInterval(increment, 1000 / rate)
    } else {
      clearInterval(interval);
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