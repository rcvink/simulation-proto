<script>
    import Haiku from './Haiku.svelte';

    export let allHaikus;
    export let haikuCount;
    let haikus = [];
    const maxHaikus = 3;

    const getRandom = () => 
        allHaikus[Math.floor(Math.random() * Math.floor(allHaikus.length))];

    haikuCount.subscribe(n => {
        if (n > 0) {
            haikus.push(getRandom());
            haikus = haikus;
        }
    });
</script>

<div id="haikus">
    {#each haikus as haiku}
        <Haiku text={haiku}/>
    {/each}
</div>