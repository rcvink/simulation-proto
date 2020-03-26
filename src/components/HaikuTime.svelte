<script>
    import { onMount, tick } from 'svelte';

    export let time;

    let severity = 'low';

    const getClass = () => {
        if (time < 1000) {
            return 'low';
        } else if (time < 5000) {
            return 'medium';
        } else if (time < 10000) {
            return 'high';
        }
        else {
            return 'very-high';
        }
    }
</script>

<style>
    .low {
        background-color: green;
    }

    .medium {
        background-color: green;
    }

    .high {
        background-color: green;
    }
</style>

<div class={getClass()}>
{time}
</div>