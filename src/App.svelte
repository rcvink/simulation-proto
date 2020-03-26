<script>
	import { 
		memoryCount,
		cpuCount,
		storageCount,
		networkCount,
		haikuCount,
		cryptoCount,
		isCryptoEnabled,
		allHaikus,
		haikuTime,
	} from './stores.js';
	import SimpleIncrementer from './components/SimpleIncrementer.svelte';
	import SlowIncrementer from './components/SlowIncrementer.svelte';
	import LinearIncrementer from './components/LinearIncrementer.svelte';
	import Haikus from './components/Haikus.svelte';
	import HaikuTime from './components/HaikuTime.svelte';
</script>

<style>
.computer-resources {
	outline: solid;
}

.human-resources {
	outline: solid;
}

.horizontal-container {
	display: flex;
	flex-direction: row;
}
</style>

<div class="computer-resources">
	<h1>Memory: {$memoryCount} bytes</h1>
	<h1>CPU: {$cpuCount} Hz</h1>
	<h1>Storage: {$storageCount} bytes</h1>
	<h1>Network: {$networkCount} bits per second</h1>
</div>
<div class="human-resources">
	<h1>Haikus written: {$haikuCount}</h1>
	<h1>Crypto: {$cryptoCount} λ</h1>
	<h1>Haiku time: <HaikuTime time={$haikuTime}/> </h1>
</div>

<div class="horizontal-container">
	<div class="incrementers">
		<SimpleIncrementer 
			count={memoryCount}
			currency={cryptoCount} 
			label="memory"/>
		<SimpleIncrementer 
			count={cpuCount}
			currency={cryptoCount} 
			label="CPU"/>
		<SimpleIncrementer 
			count={storageCount}
			currency={cryptoCount}
			label="storage"/>
		<SimpleIncrementer 
			count={networkCount}
			currency={cryptoCount} 
			label="network"/>
		<SlowIncrementer 
			count={haikuCount} 
			time={$haikuTime}
			label="haiku"/>
		<LinearIncrementer 
			isEnabled={isCryptoEnabled} 
			count={cryptoCount} 
			maxCount={storageCount}
			enabledText="Stop mining" 
			disabledText="Mine"
			rate={$cpuCount}
			incrementBy={$memoryCount}/>
	</div>
	<Haikus 
		allHaikus={$allHaikus}
		haikuCount={haikuCount}/>
</div>


