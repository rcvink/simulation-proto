<script>
    export let time;
    let severity = 'low';

    time.subscribe(newTime => {
        if (newTime <= 3000) {
            severity = 'low';
        } else if (newTime <= 10000) {
            severity = 'medium';
        } else {
            severity = 'high';
        }
    });
</script>

<style>
    .low {
        color: green;
    }

    .medium {
        color: orange;
    }

    .high {
        color: red;
    }
</style>

<span class={severity}>
{Math.ceil($time) / 1000}
</span>