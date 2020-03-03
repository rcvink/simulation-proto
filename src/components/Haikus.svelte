<script>
    import Haiku from './Haiku.svelte';
    import { onMount, tick } from 'svelte';

    export let allHaikus;
    export let haikuCount;
    let haikus = [];
    let div;

    const addNewHaiku = async (n) => {
        if (n > 0) {
            haikus.push(getRandomHaiku());
            haikus = haikus;
            await tick();
            scrollDown();
        }
    }
    
    const getRandomHaiku = () => 
        allHaikus[Math.floor(Math.random() * Math.floor(allHaikus.length))];

    const scrollDown = () => 
        div.scrollTop = div.scrollHeight;
    
    onMount(() => {
        div = document.getElementById('haikus');
        haikuCount.subscribe(addNewHaiku);
    });
</script>

<style>
#haikus {
    overflow-y: auto;
    max-height: 245px;
    min-width: 340px;
}
</style>

<div id="haikus">
    {#each haikus as haiku}
        <Haiku text={haiku}/>
    {/each}
</div>