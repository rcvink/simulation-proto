<script>
	import { 
		memoryCount,
		cpuCount,
		storageCount,
		networkCount,
		haikuCount
	} from './stores.js';
	import SimpleIncrementer from './SimpleIncrementer.svelte';
	import SlowIncrementer from './SlowIncrementer.svelte';

</script>

<h1>Memory: {$memoryCount} bytes</h1>
<h1>CPU: {$cpuCount} Hz</h1>
<h1>Storage: {$storageCount} bytes</h1>
<h1>Network: {$networkCount} bits per second</h1>
<h1>Haikus written: {$haikuCount}</h1>


<SimpleIncrementer count={memoryCount} label="memory"/>
<SimpleIncrementer count={cpuCount} label="CPU"/>
<SimpleIncrementer count={storageCount} label="storage"/>
<SimpleIncrementer count={networkCount} label="network"/>
<SlowIncrementer count={haikuCount} time="3000" label="haiku"/>
