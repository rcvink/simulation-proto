<script>
	import { 
		memoryCount,
		cpuCount,
		storageCount,
		networkCount
	} from './stores.js';
	import Incrementer from './Incrementer.svelte';
</script>

<h1>Memory: {$memoryCount} bytes</h1>
<h1>CPU: {$cpuCount} Hz</h1>
<h1>Storage: {$storageCount} bytes</h1>
<h1>Network: {$networkCount} bits per second</h1>


<Incrementer count={memoryCount} label="memory"/>
<Incrementer count={cpuCount} label="CPU"/>
<Incrementer count={storageCount} label="storage"/>
<Incrementer count={networkCount} label="network"/>
